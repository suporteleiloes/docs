export const meta = {
  name: 'api-enrich-2b',
  description: '2a passada (v2): enriquece endpoints restantes (params reais + descrição) e classifica internos; manifesto via args, sem plan-agent',
  phases: [
    { title: 'Plano', detail: 'carrega manifesto de lotes' },
    { title: 'Enriquecer', detail: 'le chunk + controller, extrai params + classifica audience' },
    { title: 'Merge', detail: 'mescla com _overrides.json existente' },
  ],
}
const API = '/Users/tiagofelipe/src/sl/v5/api-v2'
const MAN = '/Users/tiagofelipe/src/sl/docs/.manual'
const PARTS = `${MAN}/overrides-parts-2`

const PART_SCHEMA = { type:'object', properties:{ partFile:{type:'string'}, count:{type:'integer'}, internos:{type:'integer'} }, required:['partFile','count'] }
const MERGE_SCHEMA = { type:'object', properties:{ total:{type:'integer'}, novos:{type:'integer'}, internos:{type:'integer'} }, required:['total'] }

const MANIFEST_SCHEMA = { type:'object', properties:{ manifest:{ type:'array', items:{ type:'object', properties:{
  file:{type:'string'}, part:{type:'integer'}, chunkPath:{type:'string'}, count:{type:'integer'} },
  required:['file','part','chunkPath','count'] } } }, required:['manifest'] }

phase('Plano')
const plan = await agent(
  `Leia o arquivo ${MAN}/enrich2-manifest.json (Read; é um array JSON de ~314 objetos {file, part, chunkPath, count}). RETORNE {manifest: <o array inteiro, sem alterar>}.`,
  { schema: MANIFEST_SCHEMA, label: 'load-manifest-2', phase: 'Plano' }
)
const manifest = plan.manifest || []
if (!manifest.length) throw new Error('manifesto vazio')
log(`Enriquecer (2a v2): ${manifest.length} lotes`)

const safe = (f, part) => `${PARTS}/${f.replace(/[^a-zA-Z0-9]+/g,'_')}__${part}.json`
const prompt = (c) => `Você documenta a API REST do ERP Suporte Leilões para o TIME DE TI DO LEILOEIRO. Seja ASSERTIVO nos PARÂMETROS (varra o código) e CLASSIFIQUE o público de cada endpoint.

1. LEIA o arquivo de lote (Read): ${c.chunkPath}  → JSON { file, part, eps:[{operationId, method, path, fn}, ...] }.
2. LEIA o controller inteiro: ${API}/<file do JSON>  (e os Form Types/DTOs que ele usar).

Para CADA endpoint do lote (ache o método pelo nome \`fn\`), produza override pt-BR:
- **summary**: curto e claro ("Listar X", "Aprovar Y").
- **description**: 2–4 frases (o que faz, regras, o que retorna). NÃO repita autenticação.
- **parameters**: extraídos do CÓDIGO — path ({x} do path); query ($request->query->get/all, getPagination→page/limit/offset, filtros/$searchs/bindFormEntityFilters). Formato OpenAPI 3.1: {"name":"page","in":"query","required":false,"schema":{"type":"integer","default":1},"description":"..."}.
- **requestBody** (POST/PUT/PATCH): se usa createForm(XType), leia o XType (->add) e monte schema object; se usa $data['campo'], liste os campos. Senão, omita.

CLASSIFICAÇÃO (crítico) — marque **"x-internal": true** se o endpoint NÃO for do ERP OPERACIONAL do leiloeiro: infra/sistema (deploy, registro de nó, health interno, sync nó↔gerência, logger de sistema), faturamento/comercial DA LEILOEIRA COM A SL (assinaturas/invoices/contratos/produtos/serviços da conta SL), gerência/cross-tenant, ou dev/debug/teste. Se for operação normal do tenant (leilões, bens, arrematantes, CRM, site, integrações que a leiloeira usa como Mapfre/Grupo Porto, configurações do ERP, etc.), NÃO marque. Na dúvida entre "config do tenant" e "interno", mantenha como tenant (não marque).

GRAVE (Write) em: ${safe(c.file, c.part)}
JSON = { "<operationId>": { "summary","description","parameters":[...],"requestBody":{...}|omitido, "x-internal": true|omitido }, ... } cobrindo TODOS do lote.
Retorne partFile, count (nº documentados) e internos (nº marcados x-internal).`

phase('Enriquecer')
const results = await parallel(manifest.map(c => () =>
  agent(prompt(c), { schema: PART_SCHEMA, label: `enr2:${c.file.split('/').pop().replace('.php','')}#${c.part}`, agentType: 'general-purpose', phase: 'Enriquecer' })
))
const parts = results.filter(Boolean)
log(`Enriquecer (2a v2): ${parts.length}/${manifest.length} partes; ${parts.reduce((a,p)=>a+(p.count||0),0)} endpoints; ${parts.reduce((a,p)=>a+(p.internos||0),0)} internos`)

phase('Merge')
const merged = await agent(
  `Mescle overrides de API (2a passada) COM os existentes.
1. Leia o existente: ${API}/docs/openapi/_overrides.json (objeto operationId->{...}).
2. Leia TODOS os .json em ${PARTS}/ (cada um operationId->{...}) — use Bash (ls + cat) ou Read.
3. Mescle TUDO num único objeto (existentes + novos; em colisão mantenha o que tiver mais parâmetros). Preserve o campo "x-internal" quando presente.
4. GRAVE o resultado em ${API}/docs/openapi/_overrides.json (JSON válido, Write).
Retorne: total (nº total de operationIds), novos (nº adicionados nesta passada), internos (nº com x-internal=true).`,
  { schema: MERGE_SCHEMA, label: 'merge-overrides-2', phase: 'Merge' }
)
log(`Merge: ${merged.total} overrides (novos ${merged.novos}, internos ${merged.internos})`)
return { lotes: manifest.length, partes: parts.length, overrides: merged }
