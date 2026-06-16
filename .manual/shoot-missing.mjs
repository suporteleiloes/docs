// shoot-missing.mjs — resolve rotas-filhas (relativas) juntando ao path do pai e
// captura SO os prints que ainda estao faltando (placeholder <60k). Resiliente.
import { chromium } from 'playwright'
import { readFileSync, readdirSync, mkdirSync, statSync, writeFileSync } from 'fs'
import { join } from 'path'

const FRONT='https://localhost:5173', API='https://localhost:8001', TENANT='demo', PASS='123456'
const FEATBASE='/Users/tiagofelipe/src/sl/v5/erp-front-v2/src/features'
const OUT='/Users/tiagofelipe/src/sl/docs/static/img/manual'
const plan = JSON.parse(readFileSync('/Users/tiagofelipe/src/sl/docs/.manual/plan.json','utf8'))
const ids = JSON.parse(readFileSync('/tmp/sample-ids.json','utf8'))

// 1) parse routes.js de cada feature resolvendo children (pai + relativo)
function parseFeature(feat){
  let txt; try{ txt=readFileSync(`${FEATBASE}/${feat}/routes.js`,'utf8') }catch{ return {} }
  const map={} // rawpath -> fullpath
  const lines=txt.split('\n')
  let parentBase=null, inChildren=0
  for(const ln of lines){
    const pm=ln.match(/path:\s*['"`]([^'"`]*)['"`]/)
    if(/children:\s*\[/.test(ln)){ inChildren++ ; continue }
    if(inChildren>0 && /\]/.test(ln) && !pm){ inChildren=Math.max(0,inChildren-1) }
    if(!pm) continue
    const p=pm[1]
    if(inChildren===0){
      parentBase = p.startsWith('/') ? p : parentBase
      map[p]=p
    } else {
      let full
      if(p.startsWith('/')) full=p
      else if(p==='') full=parentBase||'/'
      else full=(parentBase||'').replace(/\/$/,'')+'/'+p
      map[p]=full
    }
  }
  return map
}
const featMaps={}
for(const f of plan) featMaps[f.feature]=parseFeature(f.feature)
function fullUrl(feat, path){
  if(path.startsWith('/')) return path
  const m=featMaps[feat]||{}
  return m[path] || ('/'+path)
}
function resolveIds(p){
  if(!p.includes(':')) return p
  if(p.startsWith('/leiloes')) return p.replace(/:[a-zA-Z]+(\([^)]*\))?/g, ids.leilao)
  if(p.startsWith('/bens')) return p.replace(/:[a-zA-Z]+(\([^)]*\))?/g, ids.bem)
  if(p.startsWith('/arrematantes')) return p.replace(/:[a-zA-Z]+(\([^)]*\))?/g, ids.arrematante)
  if(p.startsWith('/comitentes')) return p.replace(/:[a-zA-Z]+(\([^)]*\))?/g, ids.comitente)
  return p.replace(/:[a-zA-Z]+(\([^)]*\))?/g, ids.id||'1')
}
const isReal = f => { try{ return statSync(f).size>60000 }catch{ return false } }

// login
const r=await fetch(`${API}/api/auth`,{method:'POST',headers:{'uloc-mi':TENANT,'Content-Type':'application/json'},body:JSON.stringify({user:'admin',pass:PASS})})
const tok=(await r.json()).token; if(!tok){ console.log('login falhou'); process.exit(2) }
let browser,ctx,page,since=0
async function fresh(){ if(browser)await browser.close().catch(()=>{}); browser=await chromium.launch({headless:true}); ctx=await browser.newContext({viewport:{width:1440,height:900},ignoreHTTPSErrors:true,deviceScaleFactor:2}); await ctx.addInitScript(([t,m])=>{localStorage.setItem('token',t);localStorage.setItem('uloc.mi',m)},[tok,TENANT]); page=await ctx.newPage(); since=0 }
await fresh()

const rep=[]
for(const f of plan){
  for(const pg of f.pages){
    const dir=`${OUT}/${f.setor}`; mkdirSync(dir,{recursive:true}); const file=`${dir}/${pg.slug}.png`
    if(isReal(file)) continue   // ja tem print real
    const url = FRONT + resolveIds(fullUrl(f.feature, pg.path))
    if(since>=25) await fresh()
    let st='ok'
    try{ await page.goto(url,{waitUntil:'networkidle',timeout:35000}); await page.waitForTimeout(1500); await page.screenshot({path:file,fullPage:true}); since++ }
    catch(e){ st='erro:'+String(e.message).slice(0,40); try{await fresh()}catch{} }
    rep.push({setor:f.setor,slug:pg.slug,url:fullUrl(f.feature,pg.path),status:st})
    console.log(`${st==='ok'?'OK ':'WARN'} ${f.setor}/${pg.slug} <- ${fullUrl(f.feature,pg.path)} ${st==='ok'?'':st}`)
  }
}
if(browser)await browser.close().catch(()=>{})
const ok=rep.filter(x=>x.status==='ok').length
writeFileSync('/Users/tiagofelipe/src/sl/docs/.manual/shots-missing-report.json',JSON.stringify(rep,null,1))
console.log(`\n=== ${ok}/${rep.length} faltantes capturados ===`)
