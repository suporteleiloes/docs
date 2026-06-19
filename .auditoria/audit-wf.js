export const meta = {
  name: 'auditoria-docs-erp',
  description: 'Auditoria completa da doc do ERP: cobertura vs código, jornada, regras de negócio, qualidade; aplica correções e gera 4 entregáveis',
  phases: [
    { title: 'Plano', detail: 'carrega manifesto de páginas' },
    { title: 'Auditar+Corrigir', detail: 'por lote: lê doc + código, audita 10 fases, corrige arquivos, grava findings' },
    { title: 'Sintetizar', detail: 'relatório, matriz, plano de melhorias, comparação de mercado' },
  ],
}

const DOCS = '/Users/tiagofelipe/src/sl/docs'
const API = '/Users/tiagofelipe/src/sl/v5/api-v2'
const FRONT = '/Users/tiagofelipe/src/sl/v5/erp-front-v2'
const FIND = `${DOCS}/.auditoria/findings`
const OUT = `${DOCS}/.auditoria`

const MAN_SCHEMA = { type:'object', properties:{ manifest:{ type:'array', items:{ type:'object', properties:{
  group:{type:'string'}, part:{type:'integer'}, chunkPath:{type:'string'}, n:{type:'integer'} },
  required:['group','part','chunkPath','n'] } } }, required:['manifest'] }

const FINDING_SCHEMA = { type:'object', properties:{
  group:{type:'string'}, part:{type:'integer'}, pagesAudited:{type:'integer'},
  notaMedia:{type:'number'},
  faltaNaDoc:{type:'integer'}, faltaNoSistema:{type:'integer'}, parciais:{type:'integer'},
  correcoesAplicadas:{type:'integer'},
  findingsFile:{type:'string'}
}, required:['group','part','pagesAudited','notaMedia','findingsFile'] }

const DELIV_SCHEMA = { type:'object', properties:{ file:{type:'string'}, ok:{type:'boolean'}, resumo:{type:'string'} }, required:['file','ok'] }

phase('Plano')
const plan = await agent(
  `Leia ${DOCS}/.auditoria/manifest.json (Read; array JSON de objetos {group,part,chunkPath,n}). RETORNE {manifest: <o array inteiro, inalterado>}.`,
  { schema: MAN_SCHEMA, label: 'load-manifest', phase: 'Plano' }
)
const manifest = plan.manifest || []
if (!manifest.length) throw new Error('manifesto vazio')
log(`Auditoria: ${manifest.length} lotes / ${manifest.reduce((a,c)=>a+c.n,0)} páginas`)

const auditPrompt = (c) => `Você é, ao mesmo tempo: Analista de Negócios Sênior, UX Writer, Especialista em Documentação, Consultor de Implantação de ERP, Usuário Final em primeiro contato e Suporte que treina clientes. Audite a documentação do ERP Suporte Leilões com OLHAR CRÍTICO — NÃO presuma que a doc está correta só porque já existe. A VERDADE é o comportamento atual do CÓDIGO.

PASSO 1 — Carregue o lote: Read ${c.chunkPath} → { group, part, pages:[{path,title,lines}] }.
PASSO 2 — Leia CADA página .md do lote (Read no path).
PASSO 3 — Descubra a REALIDADE no código (seja assertivo, varra o código):
  - API (Symfony): ${API}/src/Controller , ${API}/src/Form (Grep por palavras-chave do domínio do grupo "${c.group}" — ex.: leiloes→Leilao, arrematantes→Arrematante, comitentes→Comitente, financeiro→Financeiro/Conta/Movimentacao, configuracoes→Config, crm→Crm/Atendimento/Funil/Campanha, sites→Site/Website, remocao→Remocao, processos→Processo, integracoes→Integracao/Webhook). Veja rotas (#[Route]), métodos, parâmetros, Form Types (->add), regras (if/throw), status/enums, ACLs/roles, eventos/mensageria.
  - Front (Vue 3): ${FRONT}/src/features e ${FRONT}/src/router (Grep pelo domínio) — telas, campos, botões, abas, modais.
  - Spec pronta: ${DOCS}/static/openapi/sl-api-v5.yaml (já enriquecida) pode ajudar a confirmar endpoints/parâmetros.

PASSO 4 — AUDITE cada página cobrindo as fases:
  - COBERTURA: o que existe no sistema e NÃO está documentado; o que está documentado e NÃO existe mais; o que está parcial.
  - USUÁRIO NOVO: a página responde "como começo?", "o que é obrigatório vs opcional?", "o que cada campo/botão faz?", "que erros posso cometer?", "o que acontece se eu não configurar?".
  - JORNADA COMPLETA: pré-requisitos, dependências, fluxo ponta-a-ponta, regras de negócio, impactos posteriores, encerramento, relatórios, auditoria.
  - REGRAS DE NEGÓCIO: status, validações, restrições, permissões, automações/jobs/robôs, integrações/webhooks, e-mails/notificações, financeiro/cobrança/assinatura. "Um cliente entenderia POR QUE a regra existe?" Se não, é incompleto.
  - QUALIDADE: clareza, organização, sequência lógica, consistência, links internos quebrados, duplicidades, contradições.

PASSO 5 — CORRIJA os arquivos .md AGORA (Edit/Write), aplicando as melhorias possíveis:
  - Preencha lacunas reais (com base no código), reescreva trechos confusos, adicione seções faltantes (Pré-requisitos / Passo a passo / Campos / Regras de negócio / Erros comuns / Impactos), conserte links.
  - REGRAS: pt-BR; preserve o frontmatter Docusaurus e o estilo existente; sem HTML inline; NÃO invente endpoints/campos que não estão no código (use "> A confirmar" quando incerto); dados sempre fictícios/anônimos (LGPD); NÃO edite nada fora do seu lote; NÃO toque em _interno.
PASSO 6 — Grave um findings detalhado (Write) em: ${FIND}/find_${c.group.replace(/[^a-zA-Z0-9]+/g,'_')}_${c.part}.json
  Estrutura: { group, part, paginas:[{path, title, nota(0-10), status, faltaNaDoc:[...], faltaNoSistema:[...], parcial:[...], jornadaFalhas:[...], regrasFalhas:[...], qualidade:[...], correcoesAplicadas:[...] }] }

Retorne: group, part, pagesAudited, notaMedia (média 0-10 das páginas), faltaNaDoc (total de itens), faltaNoSistema, parciais, correcoesAplicadas, findingsFile (o caminho gravado).`

phase('Auditar+Corrigir')
const results = await parallel(manifest.map(c => () =>
  agent(auditPrompt(c), { schema: FINDING_SCHEMA, label: `audit:${c.group}#${c.part}`, agentType: 'general-purpose', phase: 'Auditar+Corrigir' })
))
const ok = results.filter(Boolean)
const totPaginas = ok.reduce((a,r)=>a+(r.pagesAudited||0),0)
const totCorr = ok.reduce((a,r)=>a+(r.correcoesAplicadas||0),0)
const notaGeral = ok.length ? (ok.reduce((a,r)=>a+(r.notaMedia||0)*(r.pagesAudited||0),0)/totPaginas) : 0
log(`Auditoria: ${ok.length}/${manifest.length} lotes; ${totPaginas} páginas; ${totCorr} correções aplicadas; nota geral ~${notaGeral.toFixed(1)}`)

phase('Sintetizar')
const findGlob = `${FIND}/find_*.json`
const deliverables = await parallel([
  () => agent(
    `Você consolida uma AUDITORIA de documentação de ERP. Leia TODOS os findings: use Bash (ls ${FIND}/find_*.json) e Read em cada um (objetos com paginas[]). Gere o RELATÓRIO em pt-BR e GRAVE (Write) em ${OUT}/RELATORIO_AUDITORIA_DOCUMENTACAO.md. Conteúdo: (1) Nota geral 0-10 (pondere pelas notas/páginas; a nota geral calculada foi ~${notaGeral.toFixed(1)}, valide); (2) Nota por módulo (tabela); (3) Principais falhas (priorizadas); (4) Riscos (de implantação/operação/suporte); (5) Lacunas mais graves. Seja específico (cite páginas). Retorne file, ok, resumo.`,
    { schema: DELIV_SCHEMA, label: 'deliv:relatorio', phase: 'Sintetizar' }
  ),
  () => agent(
    `Leia TODOS os findings (${findGlob}) via Bash ls + Read. Gere a MATRIZ DE COBERTURA em pt-BR e GRAVE em ${OUT}/MATRIZ_DE_COBERTURA.md. Tabela markdown com colunas: Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão?. Uma linha por funcionalidade relevante encontrada (no sistema e/ou na doc), agrupada por módulo. Inclua as funcionalidades que estão no sistema mas faltam na doc (faltaNaDoc) e as documentadas que não existem (faltaNoSistema). Retorne file, ok, resumo.`,
    { schema: DELIV_SCHEMA, label: 'deliv:matriz', phase: 'Sintetizar' }
  ),
  () => agent(
    `Leia TODOS os findings (${findGlob}) via Bash ls + Read. Gere o PLANO DE MELHORIAS priorizado em pt-BR e GRAVE em ${OUT}/PLANO_DE_MELHORIAS.md. Liste itens em 4 níveis: Crítico / Alto / Médio / Baixo. Para cada item: o que fazer, módulo/página, e JUSTIFICATIVA (impacto no cliente/implantação/suporte). Priorize o que impede um cliente novo de implantar/operar sozinho. Retorne file, ok, resumo.`,
    { schema: DELIV_SCHEMA, label: 'deliv:plano', phase: 'Sintetizar' }
  ),
  () => agent(
    `Você é consultor de documentação de ERP/SaaS. Compare a documentação do ERP Suporte Leilões (leia o inventário em ${DOCS}/.auditoria/manifest.json e amostre findings em ${findGlob}) com o PADRÃO de documentação de grandes plataformas: Conta Azul, Omie, Tiny, Bling, Salesforce, Hubspot, Intercom, SAP Business One. Identifique tudo que essas plataformas tipicamente documentam e que está AUSENTE aqui (ex.: guia de primeiros passos/onboarding, central de ajuda pesquisável, vídeos, glossário, casos de uso, troubleshooting, changelog/novidades, status page, API quickstart, exemplos de payload, FAQ, templates). GRAVE em ${OUT}/COMPARACAO_MERCADO.md (pt-BR), com tabela "Recurso de doc | Padrão de mercado | Temos? | Recomendação". Retorne file, ok, resumo.`,
    { schema: DELIV_SCHEMA, label: 'deliv:mercado', phase: 'Sintetizar' }
  ),
]).then(r => r.filter(Boolean))

log(`Entregáveis: ${deliverables.map(d=>d.file.split('/').pop()).join(', ')}`)
return { lotes: ok.length, paginas: totPaginas, correcoes: totCorr, notaGeral: Number(notaGeral.toFixed(1)), entregaveis: deliverables.map(d=>d.file) }
