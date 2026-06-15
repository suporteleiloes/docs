// build-skeleton.mjs — cria a estrutura Docusaurus (categorias por setor/módulo) e
// o plano de cobertura (plan.json) mapeando TODAS as rotas -> página de doc.
// Roda de qualquer lugar (caminhos absolutos).
import { readFileSync, writeFileSync, mkdirSync } from 'fs'

const DOCS = '/Users/tiagofelipe/src/sl/docs/docs'
const MAN = '/Users/tiagofelipe/src/sl/docs/.manual'
const routes = JSON.parse(readFileSync(`${MAN}/routes-all.json`, 'utf8'))

// Mapa feature -> { setor, label } (rótulo do módulo no manual)
const FEAT = {
  // ERP
  dashboard:{s:'erp',l:'Painel / Dashboard'}, perfil:{s:'erp',l:'Meu Perfil'}, tarefas:{s:'erp',l:'Tarefas'},
  projetos:{s:'erp',l:'Projetos'}, bens:{s:'erp',l:'Bens'}, remocao:{s:'erp',l:'Pátio & Remoção'},
  leiloes:{s:'erp',l:'Leilões'}, pda:{s:'erp',l:'PDA — Ponto de Atendimento'}, processos:{s:'erp',l:'Processos'},
  rh:{s:'erp',l:'RH'}, comitentes:{s:'erp',l:'Comitentes'}, arrematantes:{s:'erp',l:'Arrematantes'},
  financeiro:{s:'erp',l:'Financeiro'}, 'financeiro-gateways':{s:'erp',l:'Gateways de Pagamento'},
  compras:{s:'erp',l:'Compras'}, estoque:{s:'erp',l:'Estoque'}, catalogo:{s:'erp',l:'Produtos & Planos'},
  assinaturas:{s:'erp',l:'Assinaturas'}, relatorios:{s:'erp',l:'Relatórios'},
  configuracoes:{s:'erp',l:'Configurações'}, seguranca:{s:'erp',l:'Central de Segurança'},
  pessoas:{s:'erp',l:'Pessoas'}, integracoes:{s:'erp',l:'Integrações'}, cadastro:{s:'erp',l:'Cadastro'},
  entregas:{s:'erp',l:'Entregas'}, parceiros:{s:'erp',l:'Parceiros'}, suporte:{s:'erp',l:'Suporte'},
  comunicacao:{s:'erp',l:'Comunicação'},
  // CRM
  crm:{s:'crm',l:'CRM'}, chat:{s:'crm',l:'Atendimento (Chat)'},
  // Marketing
  marketing:{s:'marketing',l:'Marketing'},
  // Sites
  website:{s:'sites',l:'Sites & Website'},
  // Console (INTERNO — fora do deploy público)
  console:{s:'_interno',l:'Console (Gerência)'},
}
const SETORES = { erp:'ERP', crm:'CRM', marketing:'Marketing', sites:'Sites', _interno:'Interno (Gerência)' }
const SETOR_POS = { erp:2, crm:3, marketing:4, sites:5, _interno:99 }

const slug = p => p.replace(/^\//,'').replace(/[/:#?=&]+/g,'-').replace(/-+$/,'')||'index'

// categorias de setor
mkdirSync(DOCS, { recursive: true })
for (const [id, label] of Object.entries(SETORES)) {
  mkdirSync(`${DOCS}/${id}`, { recursive: true })
  writeFileSync(`${DOCS}/${id}/_category_.json`, JSON.stringify({ label, position: SETOR_POS[id], collapsed: true,
    customProps: id==='_interno' ? { internal:true } : undefined }, null, 2))
}
// primeiros passos
mkdirSync(`${DOCS}/primeiros-passos`, { recursive:true })
writeFileSync(`${DOCS}/primeiros-passos/_category_.json`, JSON.stringify({ label:'Primeiros passos', position:1, collapsed:false }, null, 2))

// plano por feature
const plan = []
let totalPages = 0
for (const [feat, rts] of Object.entries(routes)) {
  const map = FEAT[feat]
  if (!map) { console.log('!! feature sem mapa de setor:', feat); continue }
  const dir = `${DOCS}/${map.s}/${feat}`
  mkdirSync(dir, { recursive: true })
  writeFileSync(`${dir}/_category_.json`, JSON.stringify({ label: map.l, collapsed: true }, null, 2))
  const pages = rts.filter(r => !r.redirect).map(r => ({
    path: r.path, name: r.name, component: r.component,
    slug: slug(r.path),
    docfile: `docs/${map.s}/${feat}/${slug(r.path)}.md`,
    detalhe: r.path.includes(':'),
  }))
  totalPages += pages.length
  plan.push({ feature: feat, setor: map.s, setorLabel: SETORES[map.s], moduloLabel: map.l, dir: `docs/${map.s}/${feat}`, pages })
}
writeFileSync(`${MAN}/plan.json`, JSON.stringify(plan, null, 1))
console.log('setores criados:', Object.keys(SETORES).length)
console.log('features mapeadas:', plan.length)
console.log('TOTAL de páginas a gerar (rotas não-redirect):', totalPages)
console.log('por setor:')
const bySetor = {}
for (const p of plan) bySetor[p.setor] = (bySetor[p.setor]||0) + p.pages.length
for (const [s,n] of Object.entries(bySetor)) console.log(`  ${s}: ${n}`)
