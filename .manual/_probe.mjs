import { chromium } from 'playwright'
const FRONT='https://localhost:5173', API='https://localhost:8001'
const r=await fetch(`${API}/api/auth`,{method:'POST',headers:{'uloc-mi':'localhost','Content-Type':'application/json'},body:JSON.stringify({user:'admin',pass:'123456'})}).catch(e=>({ok:false,e}))
let j={}; try{ j=await r.json() }catch(e){}
if(!j.token){ console.log('LOGIN local FAIL:', JSON.stringify(j).slice(0,200)); process.exit(2) }
console.log('LOGIN local OK, user=', (j.user||{}).username)
const b=await chromium.launch({headless:true}); const ctx=await b.newContext({ignoreHTTPSErrors:true,viewport:{width:1440,height:900}})
await ctx.addInitScript(([t])=>{localStorage.setItem('token',t);localStorage.setItem('uloc.mi','localhost')},[j.token])
const p=await ctx.newPage()
for(const path of ['/leiloes','/bens/lista','/arrematantes/lista']){
  try{ await p.goto(FRONT+path,{waitUntil:'networkidle',timeout:30000}); await p.waitForTimeout(1500)
    const txt=(await p.evaluate(()=>document.body.innerText)).replace(/\s+/g,' ').slice(0,180)
    console.log(`\n[${path}] ${new URL(p.url()).pathname}\n  ${txt}`)
  }catch(e){ console.log(`[${path}] ERRO ${String(e.message).slice(0,80)}`) }
}
await b.close()
