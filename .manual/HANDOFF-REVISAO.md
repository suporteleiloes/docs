# Handoff de revisão — Manual do usuário V5 (2026-06-15)

Gerado autonomamente. Resumo do que foi entregue e o que revisar.

## Como revisar (já está rodando local)
- **Manual:** http://localhost:3200/docs/  (Docusaurus servindo o build)
  - Se cair: `cd /Users/tiagofelipe/src/sl/docs && npm run serve -- --port 3200 --no-open`
- **Backup no GitHub:** branch **`manual-v5`** (repo suporteleiloes/docs) — NÃO está em `main`, então **não publicou** em docs.suporteleiloes.com. Publicar = merge `manual-v5`→`main`.

## O que foi feito
- Reusado o Docusaurus existente; conteúdo antigo (v1) arquivado em `_legado_v1/`.
- **301 páginas**, 1 por tela, organizadas por setor → módulo (ERP, CRM, Marketing, Sites, e **Console = seção INTERNA**). Cada página no template: o que é / como acessar / o que você vê (campos) / o que dá pra fazer / passo-a-passo / dicas. Conteúdo a partir dos `.vue` reais. **Auditoria de cobertura: 100%.**
- **Prints automatizados (Playwright)** do tenant **`sl_demo`** (clone local anonimizado, LGPD-safe — 0 dado real). **294/295 telas principais** com print real (falta `/leiloes/auditorio`, que exige leilão ativo).
- Tooling reaproveitável em `.manual/` (toc.json, plan.json, shoot*.mjs, TEMPLATE.md).

## Decisões que tomei sozinho (revise)
1. **Console (gerência) é seção INTERNA** no manual (`docs/_interno/`), documentada mas **a excluir do deploy público** — não expor ferramenta interna ao leiloeiro. (Falta configurar a exclusão no build público.)
2. **Dados demo = clone anonimizado** do `sl_api_v5` (mais rápido que semear do zero, que você pediu). Verificado anti-vazamento (0 nomes/CPF/e-mail reais).
3. Estrutura por **setor→módulo** (não por menu-grupo) — mapeia 1:1 com as 311 rotas, garante "sem exceção".

## Itens de polish (pendentes — tarefa #34)
- **Imagens de modais** (ex.: `-novo.png`): os textos citam prints de modais que o capturador não tira (só 1 print por tela) → estão como **placeholder** "captura em geração". Decidir: capturar modais (mais trabalho) ou remover esses refs.
- **`/leiloes/auditorio`**: print pendente (precisa de leilão ativo no demo).
- **Variedade de nomes** no demo: só 31 nomes fictícios → listas repetem nomes. Posso reanonimizar com mais variedade.
- **Links "Veja também"**: alguns quebrados viraram warning (build passa). Revisar/corrigir.
- **Publicar**: configurar exclusão do `_interno` no deploy + merge → `main`.

## Doc da API (preparada, NÃO publicada)
- `api-v2/docs/openapi/openapi.public.yaml` — **spec público filtrado**: 1261 paths (removidos 84 paths / 119 ops de gerência). **Verificado: 0 endpoints de gerência** (console/gerência/clientes/planos/servidores/licenças/notas/log-find/g-command). `/api/cmd` (comandos de pregão) **incluído** (é do tenant). Gerador idempotente: `_gen-public.mjs`. Detalhes: `README-PUBLICO.md`.
- **Próximo (com seu OK):** implementar rota **Scalar `/docs`** na API servindo o spec público + escrever a seção de **Autenticação** (POST /api/auth, header `uloc-mi`, Bearer/refresh). Spec completo fica interno.

## Estado das outras pendências da sessão
- #30 limpeza dos artefatos de teste do E2E: adiada (você pediu manter pra testes).
- Senha do admin da gerência: rotacionar (está no histórico git do `cc245cf`).
