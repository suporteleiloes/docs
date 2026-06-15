# .manual/ — tooling de geração do manual (NÃO é conteúdo publicado)

- `toc.json` — índice de navegação do ERP V5 (setor → grupo → tela), extraído do front
  (erp-front-v2: AppLayout menus + routes). Backbone do manual e lista de telas p/ prints.
- (harness de screenshots Playwright entra aqui)

Docusaurus só publica `docs/`, `blog/`, `src/` — esta pasta é ignorada no build.
