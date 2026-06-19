# Comparação com o padrão de mercado — Documentação SL vs. grandes plataformas

> Consultoria de documentação de ERP/SaaS. Compara a documentação atual do ERP **Suporte Leilões** (`docs.suporteleiloes.com`, Docusaurus) com o que **grandes plataformas tipicamente documentam**: Conta Azul, Omie, Tiny, Bling, Salesforce, HubSpot, Intercom e SAP Business One.
>
> Data da análise: **2026-06-16**. Fontes locais: `manifest.json` + `findings/_chunk*.json` (inventário de páginas), `docusaurus.config.js`, `docs/`, `blog/`, `static/openapi/sl-api-v5.yaml`, `src/pages/api.jsx`.

## Como está a documentação SL hoje (linha de base)

- **Plataforma**: Docusaurus (pt-BR), publicada em `docs.suporteleiloes.com`, com navbar Docs / API / Blog / Políticas / GitHub.
- **Cobertura**: ~280 páginas de manual (ERP 206, CRM 56, Sites 9, Marketing 6, Primeiros passos 3) + intro. Cobre os 20 módulos do produto.
- **Onboarding**: existe `primeiros-passos/` com **login**, **navegação** e **conceitos/glossário** (glossário do domínio leilões já bem feito).
- **Screenshots**: ~300 páginas referenciam imagens; ~431 imagens em `static/img/manual/`.
- **Referência de API**: forte. OpenAPI 3.1 (`sl-api-v5.yaml`) renderizada com **Scalar** em `/api`, com **quickstart de autenticação** (Token de API + JWT), base URL, convenções (multi-tenant, soft-delete, datas, erros) e ~100 `example`. Spec público filtrado (sem rotas de gerência).
- **Changelog/novidades**: blog com 2 posts (v3.6 e lançamento v5.0). `authors.yml` configurado.
- **Políticas**: página `/politicas` + links de LGPD/Privacidade/Termos no rodapé.
- **Status**: apenas um **link** para a âncora `#status` do site institucional (não é status page real).
- **Admonitions**: uso muito esparso (8 no total em ~280 páginas) — pouca sinalização visual de dicas/avisos.

A base é sólida e acima da média de muitos concorrentes em **profundidade por módulo** e **qualidade da referência de API**. As lacunas são, em sua maioria, de **descoberta, suporte e confiança operacional**, não de conteúdo de produto.

## Tabela comparativa

| Recurso de doc | Padrão de mercado | Temos? | Recomendação |
|---|---|---|---|
| **Busca pesquisável na central** | Universal (Algolia DocSearch em HubSpot/Salesforce/Docusaurus; busca nativa em Intercom/Zendesk) | **Não** | **Prioridade 1.** Docusaurus classic não tem busca embutida. Instalar `@easyops-cn/docusaurus-search-local` (offline, pt-BR, zero custo) ou solicitar Algolia DocSearch (grátis p/ docs públicas). Sem isso, a intro promete "use a busca no topo" mas o recurso não existe. |
| **Guia de primeiros passos / onboarding** | Universal ("Getting Started", trilha guiada) | **Parcial** | Existe login/navegação/conceitos. Falta uma **trilha de onboarding por papel** ("Sou novo: do zero ao primeiro leilão no ar") e um **checklist de implantação** (importar bens, cadastrar comitentes, configurar site, primeiro pregão). Conta Azul/Omie têm "primeiros passos" guiado com progresso. |
| **Central de ajuda navegável por categoria/ícones** | Universal (HubSpot Knowledge Base, Intercom Help Center) | **Parcial** | A intro e o sidebar fazem esse papel. Considerar uma **home de docs com cards por módulo/persona** (operador, financeiro, jurídico, TI) em vez de só texto corrido. |
| **Vídeos / tutoriais em vídeo** | Comum (academies: Trailhead, HubSpot Academy, vídeos curtos por tela) | **Quase não** | Apenas 1 referência a vídeo (em `transmissao.md`). Recomenda-se **vídeos curtos (loom/YouTube)** nas telas críticas: pregão ao vivo, loteamento, fechamento/cobrança, habilitação de arrematante. Há canal no YouTube (já no rodapé) — embutir os vídeos nas páginas. |
| **Glossário / dicionário de termos** | Comum (SAP, Salesforce) | **Sim** | Bom glossário de domínio em `conceitos.md`. Manter; opcionalmente transformar em **tooltips** nos termos ao longo das páginas (Docusaurus `<abbr>`/plugin de glossário). |
| **Casos de uso / receitas ("how-to" por objetivo)** | Comum (HubSpot "use cases", Intercom recipes, SAP scenarios) | **Não** | Faltam guias **orientados a objetivo de negócio** que cruzam módulos: "Como rodar um leilão judicial de veículos do edital ao repasse", "Como reativar arrematantes inativos via CRM+Marketing". A doc atual é organizada por *tela*, não por *jornada*. |
| **Troubleshooting / resolução de problemas** | Universal (seção dedicada + por artigo) | **Não** | Não há hub de troubleshooting nem seções "Problemas comuns" padronizadas. Criar **um hub** + um bloco padrão "Problemas comuns" ao fim das páginas de telas críticas (ex.: lance não aparece no telão, 2FA não chega, importação falhou). |
| **FAQ (perguntas frequentes)** | Universal | **Não** | Não há FAQ central. Criar **FAQ por módulo** e uma FAQ geral (cobrança, comissão, habilitação, suporte, planos/limites). Reduz tickets. |
| **Changelog / novidades / release notes** | Universal (page dedicada, "What's New", RSS) | **Parcial** | Blog existe mas com 2 posts. Adotar **release notes recorrentes** (por versão/sprint), com RSS e categoria "Novidades". Plataformas publicam release notes contínuos; SL publica esporádico. |
| **Status page (saúde dos serviços)** | Universal (status.* — Atlassian Statuspage, BetterStack) | **Não (só link)** | Hoje é só âncora no site institucional. Recomenda-se **status page real** em `status.suporteleiloes.com` (incidentes, uptime, histórico, inscrição por e-mail). Crítico para um ERP de missão crítica como pregão ao vivo. |
| **API: quickstart** | Universal (Stripe-like) | **Sim** | Quickstart de auth excelente no `info.description`. Sugestão: extrair para uma **página "API — Comece aqui"** separada (primeira chamada em 5 min, com `curl` completo). |
| **API: exemplos de payload (request/response)** | Universal | **Parcial/Sim** | ~100 `example` no spec. Garantir **exemplo de request E response em todos os endpoints principais**, não só schemas. Scalar mostra exemplos quando presentes. |
| **API: SDKs / coleção Postman** | Comum (Postman collection, SDKs oficiais) | **Não** | Oferecer **coleção Postman/Insomnia** exportada do OpenAPI e, se houver demanda, um SDK fino. Reduz fricção do "time de TI do leiloeiro" (público-alvo declarado da API). |
| **API: webhooks documentados** | Comum (HubSpot, Stripe) | **A verificar** | SL tem webhooks (push pra sites via Messenger). Documentar **eventos, payloads e assinatura/segurança** dos webhooks numa página própria. |
| **API: rate limits e versionamento** | Universal | **A verificar** | Documentar limites de taxa, política de versão (v5) e deprecação. Não localizado no spec público. |
| **Templates / modelos prontos** | Comum (templates de e-mail, contrato, importação CSV) | **Parcial** | Há biblioteca de mensagens/remetentes no CRM. Faltam **templates baixáveis**: planilha-modelo de importação de bens, modelos de edital/nota de arremate, templates de campanha. |
| **Guias por persona/papel** | Comum (Salesforce: admin vs. user; SAP: por função) | **Não** | Doc é única para todos. Criar **trilhas por papel**: Operador de pregão, Financeiro, Jurídico, Administrador/TI, Comitente. |
| **Permissões / administração / setup inicial** | Universal (admin guide) | **Parcial** | Existe módulo de configurações documentado. Consolidar um **"Guia do Administrador"** (usuários, papéis/ACL, 2FA, restrição IP/horário, integrações, faturamento) como trilha única. |
| **Notas de migração / o que mudou (legado→v5)** | Comum em troca de major | **Parcial** | O post de lançamento v5 tem tabela "antes/agora". Faltam **guias de migração** para clientes do v4 (equivalência de telas, o que sumiu/mudou, como reaprender). |
| **Acessibilidade / multi-idioma (i18n)** | Comum em plataformas globais (Salesforce, SAP) | **Não (pt-BR only)** | Aceitável para o mercado-alvo (Brasil). Não é prioridade; registrar como não-objetivo consciente. |
| **Feedback "isto foi útil?" / contato em cada artigo** | Universal (HubSpot/Intercom) | **Não** | Adicionar **widget de feedback** por página (útil/não útil) e CTA "Falar com suporte" — gera sinal de qualidade e captura lacunas. |
| **Suporte / como abrir chamado / SLA** | Universal | **Parcial** | Há docs de CRM/chamados (produto). Falta uma página **"Como obter suporte"** para o *cliente da SL* (canais, horários, SLA, o que ter em mãos). |
| **Print/PDF exportável dos guias** | Comum (SAP, enterprise) | **Não** | Opcional: habilitar exportação PDF por seção para clientes que querem manual offline/impresso. |
| **Mapa do produto / arquitetura visual** | Comum (diagramas de fluxo) | **Não** | Um **diagrama da jornada** (comitente → bem → lote → leilão → arremate → cobrança → repasse) reforçaria o glossário e orientaria iniciantes. |

## Lacunas priorizadas (recomendação de execução)

**Prioridade 1 — bloqueia descoberta/confiança (fazer já):**
1. **Busca** na central de docs (a própria intro já a promete e ela não existe). `@easyops-cn/docusaurus-search-local`.
2. **Status page** real (`status.suporteleiloes.com`) — ERP de pregão ao vivo precisa de transparência de uptime.
3. **Hub de Troubleshooting + FAQ** central (corte direto de tickets de suporte).

**Prioridade 2 — eleva ao padrão das grandes (próximo ciclo):**
4. **Casos de uso/receitas por jornada** e **trilhas por papel** (operador, financeiro, jurídico, admin/TI).
5. **Release notes recorrentes** (formalizar o blog como changelog contínuo, com RSS).
6. **Vídeos curtos** embutidos nas telas críticas (aproveitar o canal YouTube existente).
7. **Widget "isto foi útil?"** + página "Como obter suporte (SLA/canais)".

**Prioridade 3 — diferenciais para o público de TI e clientes avançados:**
8. **API**: página "Comece aqui" dedicada, **coleção Postman**, doc de **webhooks**, **rate limits/versionamento**.
9. **Templates baixáveis** (planilha de importação de bens, modelos de edital/nota).
10. **Guia de migração v4→v5** e **diagrama da jornada do produto**.

## Conclusão

A documentação da SL **já supera muitos concorrentes em profundidade de produto e qualidade da referência de API**. As lacunas relevantes são de **camada de suporte e descoberta** — busca, status page, troubleshooting/FAQ, casos de uso por jornada, vídeos e release notes contínuos — exatamente os itens que diferenciam uma "documentação de telas" de uma **central de ajuda de classe enterprise** (HubSpot/Salesforce/SAP). Fechar as Prioridades 1 e 2 coloca a doc no patamar dessas plataformas.
