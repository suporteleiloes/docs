// shoot.mjs — captura screenshots das telas (driven por plan.json) no tenant DEMO local.
// Robustez: relança o browser a cada N capturas (evita crash por memoria). Modo "fill":
// so captura telas cujo PNG ainda nao existe ou e placeholder (<60k).
//
//   cp .../shoot.mjs .shoot.mjs && NODE_TLS_REJECT_UNAUTHORIZED=0 node .shoot.mjs <setor|all> [mode]
//   mode: ''(todas nao-detalhe) | 'detalhe'(so :id) | 'fill'(todas que faltam, inclui :id)
import { chromium } from 'playwright'
import { readFileSync, mkdirSync, writeFileSync, existsSync, statSync } from 'fs'

const FRONT='https://localhost:5173', API='https://localhost:8001', TENANT='demo', PASS='123456'
const OUT='/Users/tiagofelipe/src/sl/docs/static/img/manual'
const onlySetor = process.argv[2] && process.argv[2]!=='all' ? process.argv[2] : null
const mode = process.argv[3] || ''
const plan = JSON.parse(readFileSync('/Users/tiagofelipe/src/sl/docs/.manual/plan.json','utf8'))
const ids = existsSync('/tmp/sample-ids.json') ? JSON.parse(readFileSync('/tmp/sample-ids.json','utf8')) : {}
const RELAUNCH = 30

async function token(){ const r=await fetch(`${API}/api/auth`,{method:'POST',headers:{'uloc-mi':TENANT,'Content-Type':'application/json'},body:JSON.stringify({user:'admin',pass:PASS})}); const j=await r.json().catch(()=>({})); if(!j.token) throw new Error('login: '+JSON.stringify(j).slice(0,150)); return j.token }
function resolve(p){ if(!p.includes(':'))return p; if(p.includes('leilao')||p.startsWith('/leiloes'))return p.replace(/:[a-zA-Z]+/g,ids.leilao||'1'); if(p.startsWith('/bens'))return p.replace(/:[a-zA-Z]+/g,ids.bem||'1'); if(p.startsWith('/arrematantes'))return p.replace(/:[a-zA-Z]+/g,ids.arrematante||'1'); if(p.startsWith('/comitentes'))return p.replace(/:[a-zA-Z]+/g,ids.comitente||'1'); return p.replace(/:[a-zA-Z]+/g,ids.id||ids.default||'1') }
const isReal = f => { try { return statSync(f).size>60000 } catch { return false } }

const tok = await token(); console.log('login OK')
let browser=null, ctx=null, page=null, sinceRelaunch=0
async function fresh(){ if(browser) await browser.close().catch(()=>{}); browser=await chromium.launch({headless:true}); ctx=await browser.newContext({viewport:{width:1440,height:900},ignoreHTTPSErrors:true,deviceScaleFactor:2}); await ctx.addInitScript(([t,m])=>{localStorage.setItem('token',t);localStorage.setItem('uloc.mi',m)},[tok,TENANT]); page=await ctx.newPage(); sinceRelaunch=0 }
await fresh()

const report=[]
for(const f of plan){
  if(onlySetor && f.setor!==onlySetor) continue
  for(const pg of f.pages){
    const isDet = pg.path.includes(':')
    if(mode==='' && isDet) continue
    if(mode==='detalhe' && !isDet) continue
    const dir=`${OUT}/${f.setor}`; mkdirSync(dir,{recursive:true}); const file=`${dir}/${pg.slug}.png`
    if(mode==='fill' && isReal(file)) continue
    if(sinceRelaunch>=RELAUNCH) await fresh()
    let status='ok'
    try{
      await page.goto(FRONT+resolve(pg.path),{waitUntil:'networkidle',timeout:40000})
      await page.waitForTimeout(1600); await page.screenshot({path:file,fullPage:true}); sinceRelaunch++
    }catch(e){ status='erro:'+String(e.message).slice(0,40); try{await fresh()}catch{} }
    report.push({setor:f.setor,path:pg.path,status}); console.log(`${status==='ok'?'OK ':'WARN'} [${f.setor}] ${pg.path} ${status==='ok'?'':status}`)
  }
}
if(browser) await browser.close().catch(()=>{})
const ok=report.filter(r=>r.status==='ok').length
writeFileSync('/Users/tiagofelipe/src/sl/docs/.manual/shots-report.json',JSON.stringify(report,null,1))
console.log(`\n=== ${ok}/${report.length} capturadas (mode=${mode||'principais'}) ===`)
