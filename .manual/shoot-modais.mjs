// shoot-modais.mjs — captura screenshots de MODAIS / sub-ações / login que o shoot.mjs (goto puro) não alcança.
// Lê /tmp/modal-map.json (gerado por genmap) com {setor,slug,type,path,tail,kw}.
//   NODE_TLS_REJECT_UNAUTHORIZED=0 node .manual/shoot-modais.mjs [type|all] [--only=slug1,slug2] [--force]
// Preserva reais: só escreve se conseguiu abrir o modal/estado (senão registra falha).
import { chromium } from 'playwright'
import { readFileSync, mkdirSync, writeFileSync, statSync } from 'fs'

const FRONT='https://localhost:5173', API='https://localhost:8001', TENANT='demo', PASS='123456'
const OUT='/Users/tiagofelipe/src/sl/docs/static/img/manual'
const argType = process.argv[2] && !process.argv[2].startsWith('--') ? process.argv[2] : 'all'
const onlyArg = (process.argv.find(a=>a.startsWith('--only='))||'').replace('--only=','')
const only = onlyArg ? new Set(onlyArg.split(',')) : null
const force = process.argv.includes('--force')
let map = JSON.parse(readFileSync('/tmp/modal-map.json','utf8'))
if(argType!=='all') map = map.filter(m=>m.type===argType)
if(only) map = map.filter(m=>only.has(`${m.setor}/${m.slug}`) || only.has(m.slug))

async function token(){ const r=await fetch(`${API}/api/auth`,{method:'POST',headers:{'uloc-mi':TENANT,'Content-Type':'application/json'},body:JSON.stringify({user:'admin',pass:PASS})}); const j=await r.json().catch(()=>({})); if(!j.token) throw new Error('login: '+JSON.stringify(j).slice(0,150)); return j.token }
const isReal = f => { try { return statSync(f).size>60000 } catch { return false } }

// ids reais conhecidos (via API) p/ resolver :id em rotas de detalhe
const STATIC_IDS = {
  '/patios/:id':'26', '/patios/:id/vagas':'26', '/forms/builder/:id':'1',
}
// lista-route hints p/ resolver :id → pega primeira linha
const LIST_HINT = {
  '/patios/:id': {list:'/patios/lista', base:'/patios/'},
  '/patios/:id/vagas': {list:'/patios/lista', base:'/patios/', suffix:'/vagas'},
  '/parceiros/:id': {list:'/parceiros', base:'/parceiros/'},
  '/configuracoes/grupos/:id': {list:'/configuracoes/grupos', base:'/configuracoes/grupos/'},
  '/assinaturas/:id': {list:'/assinaturas', base:'/assinaturas/'},
  '/forms/builder/:id': {list:'/forms', base:'/forms/builder/'},
  '/projetos/:id': {list:'/projetos', base:'/projetos/'},
}

let tok = await token(); console.log('login OK')
let browser=null, ctx=null, page=null

async function fresh(withAuth=true){
  if(browser) await browser.close().catch(()=>{})
  browser=await chromium.launch({headless:true})
  ctx=await browser.newContext({viewport:{width:1440,height:900},ignoreHTTPSErrors:true,deviceScaleFactor:2})
  if(withAuth) await ctx.addInitScript(([t,m])=>{localStorage.setItem('token',t);localStorage.setItem('uloc.mi',m)},[tok,TENANT])
  page=await ctx.newPage()
}
// modal de reauth ("Sua sessão expirou") — NÃO é uma captura válida
async function isReauth(){ return await page.evaluate(()=>/sess[aã]o expirou|entrar e continuar/i.test(document.body.innerText||'')) }
async function isDash(){ return new URL(page.url()).pathname==='/' }
// se caiu no reauth, refaz login + reload; retorna true se recuperou
async function recoverReauth(){
  if(!(await isReauth())) return true
  // re-injeta o MESMO token (válido 24h) e recarrega — sem novo login (evita rate-limit)
  await page.evaluate(([t,m])=>{localStorage.setItem('token',t);localStorage.setItem('uloc.mi',m)},[tok,TENANT])
  await page.reload({waitUntil:'networkidle',timeout:35000}).catch(()=>{})
  await page.waitForTimeout(1600)
  return !(await isReauth())
}

async function modalVisible(){
  return await page.evaluate(()=>{
    const sels=['.modal-backdrop','[role="dialog"]','.modal-panel','dialog[open]','.drawer','.el-drawer','.modal','.modal__panel','.cmd-form-card']
    for(const s of sels){ for(const el of document.querySelectorAll(s)){ const r=el.getBoundingClientRect(); if(r.width>60&&r.height>60&&getComputedStyle(el).display!=='none') return true } }
    return false
  })
}

// clica um controle cujo texto casa uma regex; retorna true se clicou
async function clickByText(rx){
  const loc = page.locator('button, a, [role="button"], .btn').filter({ hasText: rx })
  const n = await loc.count()
  for(let i=0;i<n;i++){ const el=loc.nth(i); try{ if(await el.isVisible()){ await el.click({timeout:2500}); return true } }catch{} }
  // fallback: casa por atributo title (botões de ícone: Editar/Configurar/etc.)
  const src = rx.source
  const tl = page.locator(`button[title],a[title],[role="button"][title]`)
  const tn = await tl.count()
  for(let i=0;i<tn;i++){ const el=tl.nth(i); try{ const t=await el.getAttribute('title'); if(t && new RegExp(src,'i').test(t) && await el.isVisible()){ await el.click({timeout:2500}); return true } }catch{} }
  return false
}

// keyword regex a partir do tail
function kwRegex(tail){
  const NV=/^\s*\+?\s*(novo|nova|adicionar|cadastrar|criar|incluir|new|gerar|registrar|agendar|lan[çc]ar|emitir|suprimir)\b/i
  const T = {
    novo:NV, nova:NV,
    editar:/(editar|edit)\b/i, mover:/mover/i, atribuir:/atribuir|assign/i,
    configurar:/configurar|config/i, baixa:/baixa|dar baixa/i, importar:/importar|import/i,
    confirmar:/confirmar/i, ganhar:/ganhar|ganho/i, perder:/perder|perda/i,
    publicar:/publicar/i, metricas:/m[ée]tricas/i, resultado:/verificar|consultar|buscar|resultado/i,
    executar:/executar|rodar/i, custos:/custo|detalh/i, abrir:/abrir|nova estadia|entrada/i,
    numeracao:/numera[cç][aã]o/i, grv:/\bgrv\b/i, ggv:/\bggv\b/i, tutorial:/tutorial|como/i,
    map:/mapear|colunas|map/i, nameservers:/nameserver|dns/i, arquivos:/arquivo|anexo/i,
    reajuste:/reajuste|reajustar/i, negar:/negar|reprovar|recusar/i, reprovar:/reprovar|negar/i,
    membro:/membro|adicionar/i, membros:/membro|adicionar/i, campo:/campo|adicionar/i,
    etapa:/etapa|coluna|adicionar/i, inscritos:/inscrito|contatos|membros/i, acessos:/acesso|permiss/i,
    empresa:/empresa|dados da empresa/i, dados:/editar|dados/i, fluxo:/fluxo|editar|abrir/i,
    layout:/layout|planta|mapa/i, local:/local|adicionar/i, gerar:/gerar/i, lista:/lista|analis/i,
    transferir:/transferir/i, cancelar:/cancelar/i, preview:/preview|pr[ée]-visual|visualizar/i,
    'novo-horario':/hor[áa]rio|adicionar|novo/i, 'novo-ip':/\bip\b|adicionar|novo/i,
  }
  return T[tail] || new RegExp(tail.replace(/-/g,'.?'),'i')
}

async function resolveId(path){
  if(STATIC_IDS[path]) return path.replace(':id',STATIC_IDS[path])
  const hint = LIST_HINT[path]
  if(!hint) return path.replace(/:[a-zA-Z]+/g,'1')
  try{
    await page.goto(FRONT+hint.list,{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(1500)
    const id = await page.evaluate((base)=>{ const a=document.querySelector(`a[href*="${base}"]`); if(!a) return null; const m=a.getAttribute('href').match(new RegExp(base.replace(/[/]/g,'\\/')+'(\\d+)')); return m?m[1]:null }, hint.base)
    if(id){ let p=path.replace(':id',id); return p }
  }catch{}
  return path.replace(/:[a-zA-Z]+/g,'1')
}

const report=[]
let sinceFresh=999, prevAuth=null
for(const m of map){
  const dir=`${OUT}/${m.setor}`; mkdirSync(dir,{recursive:true}); const file=`${dir}/${m.slug}.png`
  if(!force && isReal(file)){ report.push({...m,status:'skip-real'}); continue }
  const needAuth = m.type!=='login'
  if(prevAuth!==needAuth || sinceFresh>=25){ await fresh(needAuth); sinceFresh=0; prevAuth=needAuth }
  sinceFresh++
  let status='ok', opened=false
  try{
    if(m.type==='login'){
      await page.goto(FRONT+'/login',{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(1800)
      await page.screenshot({path:file,fullPage:true}); opened=true
    } else if(m.type==='route'){
      const nav = m.nav
      await page.goto(FRONT+nav,{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(2000)
      await recoverReauth()
      const dash = await isDash()
      const notfound = await page.evaluate(()=>/n[aã]o encontrad|404|not found/i.test(document.body.innerText.slice(0,400)))
      if(dash || notfound || await isReauth()){ status='dash-or-404' }
      else { await page.screenshot({path:file,fullPage:true}); opened=true }
    } else if(m.type==='row'){
      let p=m.path.includes(':')? await resolveId(m.path): m.path
      await page.goto(FRONT+p,{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(1600)
      await recoverReauth()
      const urlBefore=page.url()
      // clica primeira linha de conteúdo (escopo main, evita nav/sidebar) — click + dblclick
      const clicked = await page.evaluate(()=>{
        const scope=document.querySelector('main, .app-main, .page, .content')||document.body
        // 1º tenta um gatilho de detalhe explícito, senão a 1ª linha/card
        const cand=scope.querySelector('.ord-link, .ord-act, button[title*="etalhe"], a[href*="/"][class*="link"], tbody tr, .app-table tbody tr, [class*="mcard"], [class*="card-item"], [class*="list-item"]')
        if(!cand) return false
        cand.scrollIntoView({block:'center'})
        for(const type of ['click','dblclick']){ cand.dispatchEvent(new MouseEvent(type,{bubbles:true,cancelable:true,view:window})) }
        return true
      })
      await page.waitForTimeout(2000)
      const urlAfter=page.url()
      const reauth=await isReauth()
      const modal=await modalVisible()
      const dash = new URL(urlAfter).pathname==='/'
      opened = !reauth && (modal || (urlAfter!==urlBefore && !dash))
      if(opened) await page.screenshot({path:file,fullPage:true})
      else status='no-detail'+(reauth?'(reauth)':clicked?'(clicked)':'(no-row)')
    } else {
      // novo | action
      let p=m.path.includes(':')? await resolveId(m.path): m.path
      await page.goto(FRONT+p,{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(1600)
      await recoverReauth()
      if(await isDash()){ status='dash-redirect'; report.push({...m,status}); console.log(`MISS [${m.setor}] ${m.slug} ${status}`); continue }
      if(m.pre){ await clickByText(new RegExp(m.pre,'i')); await page.waitForTimeout(900) }
      const rx = m.btn ? new RegExp(m.btn,'i') : kwRegex(m.tail)
      const clicked = await clickByText(rx)
      await page.waitForTimeout(1400)
      const reauth=await isReauth()
      opened = !reauth && await modalVisible()
      if(m.type==='novo' && !opened && !clicked && !reauth){ /* tenta ?new=1 */ const sep=p.includes('?')?'&':'?'; await page.goto(FRONT+p+sep+'new=1',{waitUntil:'networkidle',timeout:30000}); await page.waitForTimeout(1600); await recoverReauth(); opened=!(await isReauth()) && await modalVisible() }
      if(opened){ await page.screenshot({path:file,fullPage:true}) }
      else { status='no-modal'+(reauth?'(reauth)':clicked?'(clicked)':'(no-btn)') }
    }
  }catch(e){ status='erro:'+String(e.message).slice(0,50); try{await fresh(needAuth); prevAuth=needAuth; sinceFresh=0}catch{} }
  report.push({...m,status:opened?'ok':status})
  console.log(`${opened?'OK  ':'MISS'} [${m.setor}] ${m.slug} ${opened?'':status}`)
}
if(browser) await browser.close().catch(()=>{})
const ok=report.filter(r=>r.status==='ok').length
writeFileSync('/Users/tiagofelipe/src/sl/docs/.manual/modais-report.json',JSON.stringify(report,null,1))
console.log(`\n=== ${ok}/${report.length} capturadas ===`)
console.log('MISS:', report.filter(r=>r.status!=='ok'&&r.status!=='skip-real').map(r=>r.setor+'/'+r.slug+':'+r.status).join(' | '))
