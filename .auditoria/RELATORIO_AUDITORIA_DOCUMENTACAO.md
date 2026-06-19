# Relatório de Auditoria — Documentação do ERP (Manual do Usuário V5)

> Data: 2026-06-16
> Escopo: 281 páginas de documentação auditadas, agrupadas em 31 módulos/conjuntos.
> Método: cada página foi cruzada com o código real (front V5 Vue 3 + API V5 Symfony) e recebeu nota 0–10, classificação de status e listas de lacunas (faltaNaDoc, faltaNoSistema, parcial, divergências). Findings em `docs/.auditoria/findings/find_*.json`.

## 1. Nota geral

**Nota geral: 8.4 / 10** (média aritmética das 281 páginas auditadas = 8,38; ponderação por página, cada tela com peso 1).

A nota geral ~8,4 informada **foi validada**: a média ponderada por página recalculada é **8,38**, que arredonda para 8,4.

Leitura: a documentação está, em média, boa e bem estruturada. O grosso das correções foi de precisão (caminhos de menu, regras de negócio, rótulos de status) e não de reescrita estrutural. A nota é puxada para baixo por um conjunto específico e identificável de páginas — principalmente o módulo **Relatórios** — e por um padrão recorrente e mais grave: **documentação que descreve features que o backend não implementa** (divergências front/back e endpoints inexistentes).

Distribuição de status das 281 páginas:
- Corrigidas/ajustadas: ~234 (corrigido/corrigida/ajustada/ok-com-ajustes/ok-com-melhorias/ok-corrigido)
- OK sem alteração: ~45 (ok/ok-com-ressalvas/validada)
- Casos especiais de divergência grave: `documenta-feature-sem-backend` (PDA), `divergencia-front-back` (Intimações), `divergencia-parcial` (Cartas Precatórias x2), `reescrito` (Ficha da pessoa), `corrigido-gap-grande` (Webhooks).

## 2. Nota por módulo

| Módulo | Páginas | Média | Mín | Máx |
|--------|:-------:|:-----:|:---:|:---:|
| marketing | 6 | 8,92 | 8,5 | 9,5 |
| erp/tarefas | 4 | 8,88 | 7,5 | 9,5 |
| erp/leiloes | 41 | 8,70 | 5,0 | 10,0 |
| erp/processos | 16 | 8,69 | 6,5 | 9,5 |
| erp/estoque | 3 | 8,67 | 8,0 | 9,0 |
| erp/perfil | 4 | 8,62 | 7,5 | 9,0 |
| crm | 56 | 8,61 | 5,0 | 9,5 |
| erp/comitentes | 6 | 8,58 | 8,0 | 9,0 |
| erp/projetos | 6 | 8,58 | 7,5 | 9,5 |
| erp/configuracoes | 24 | 8,56 | 5,5 | 9,5 |
| erp/cadastro | 2 | 8,50 | 8,5 | 8,5 |
| primeiros-passos | 3 | 8,50 | 7,0 | 9,5 |
| erp/comunicacao | 5 | 8,40 | 7,0 | 9,0 |
| erp/financeiro | 10 | 8,40 | 7,0 | 9,0 |
| erp/rh | 8 | 8,38 | 6,5 | 9,0 |
| erp/bens | 8 | 8,31 | 7,0 | 9,0 |
| erp/pda | 7 | 8,29 | 6,5 | 9,0 |
| erp/remocao | 19 | 8,29 | 6,5 | 9,0 |
| sites/website | 9 | 8,28 | 6,0 | 9,0 |
| erp/assinaturas | 2 | 8,25 | 8,0 | 8,5 |
| erp/catalogo | 3 | 8,17 | 8,0 | 8,5 |
| erp/integracoes | 10 | 8,15 | 7,5 | 9,0 |
| erp/financeiro-gateways | 1 | 9,00 | 9,0 | 9,0 |
| erp/seguranca | 1 | 9,00 | 9,0 | 9,0 |
| intro.md | 1 | 9,00 | 9,0 | 9,0 |
| erp/arrematantes | 7 | 7,64 | 6,0 | 9,0 |
| erp/compras | 2 | 7,75 | 7,5 | 8,0 |
| erp/pessoas | 3 | 7,00 | 4,0 | 8,5 |
| erp/parceiros | 2 | 7,00 | 6,5 | 7,5 |
| erp/suporte | 3 | 6,67 | 6,0 | 7,5 |
| **erp/relatorios** | **9** | **6,11** | **3,0** | **9,0** |

Pior módulo isolado: **Relatórios (6,11)** — e, dentro dele, três páginas críticas (notas 3, 4 e 5) onde a doc promete relatórios que o backend não entrega. Módulos pequenos com média baixa (parceiros 7,0; pessoas 7,0; suporte 6,67) carregam divergências graves apesar do n pequeno.

## 3. Principais falhas (priorizadas)

### P0 — Documentar como funcional o que o backend NÃO implementa (risco de quebra de confiança)
Estas são as falhas mais graves: o usuário lê, tenta usar, e a funcionalidade não opera.

1. **Relatório "Exportar Arrematantes" (`relatorios/arrematantes-exportar.md`, nota 3)** — backend faz `setMaxResults(2)` (retorna 2 registros, hardcoded) e ignora todos os filtros; doc prometia "base completa com filtros". Filtros Comitente e Tempo mínimo nunca são aplicados.
2. **PDA — Coletor de inventário (`pda/pda.md`, nota 6,5)** — CRÍTICO: não existe `PdaController` na API V5; endpoints `/api/pda/buscar-bem`, `/api/pda/conferir`, `/api/pda/sessao/{id}/relatorio` não têm controller. A conferência de inventário não opera contra a API atual; sessão é gerada só no front.
3. **Webhooks (`comunicacao/comunicacao-webhooks.md`, nota 7, "gap-grande")** — não há rota POST/PUT nem `/historico`; criar/editar cai em "Funcionalidade em implementação". A entity `Webhook` é na prática uma fila interna de jobs e não tem os campos (name/url/events/secret/headers) que a UI/doc descrevem.
4. **Transmissão ao Vivo (`leiloes/transmissao.md`, nota 5)** — iniciar/parar stream, contagem de espectadores e chat ao vivo são todos stubs (mock/`ref(0)`/badge "Stub"); nenhum endpoint no backend.
5. **Parceiros — aba Acessos (`parceiros/parceiros-id.md`, nota 6,5)** — TODA a aba é especulativa: redefinir senha, gerar/regenerar/revogar API key, vincular usuário ERP — endpoints não existem (`TODO_BACKEND` no próprio front). UI cai em "Acessos indisponíveis".
6. **Bens com mais Tempo em Estoque (`relatorios/bens-tempo-estoque.md`, nota 4)** — filtro Comitente ignorado e o próprio `tempoMinimo` recebido mas não aplicado na query (lista não é cortada por dias).

### P1 — Divergência front/back: campos exibidos que a API não persiste (sempre mostram "—" ou são descartados silenciosamente)
Padrão recorrente causado por `allow_extra_fields=true` nos FormTypes: o front envia, o Symfony descarta sem erro.

7. **Ficha da pessoa (`pessoas/pessoas-id.md`, nota 4, reescrito)** — abas inteiras documentadas (Visão geral/Documentos/Papéis/Configurações) NÃO existem; UI real tem observacoes/contatos/tarefas/ligar/comunicacao/arquivos/timeline. Link "alterar status", "mini-funil M" e "atalhos por papel" inexistem.
8. **Intimações (`processos/intimacoes.md`, nota 6,5)** — entity só tem dataIntimacao/dataPrazo/dataResposta/observacao; assunto/descricao/processo/prazo/cumprida enviados pelo front são descartados. O que a tela mostra não é o que persiste.
9. **Cartas Precatórias (`processos/cartas-precatorias.md` e `-id-cartas-precatorias.md`, nota 7,5)** — origem/destino/dataEnvio/dataRetorno não são persistidos; colunas exibem sempre "—".
10. **Formulários (`configuracoes/forms.md`, nota 5,5)** — campos Público, Status (active), Ordem não são persistidos; e DELETE de formulário não tem rota (exclusão falha no servidor, formulário permanece).
11. **Vagas do pátio (`remocao/patios-id-vagas.md`, nota 6,5)** — status Reservada/Em manutenção, Setor, Fileira, Tipo por vaga, Situação e "Vaga externa" não são gravados (entity Vaga só tem `ocupado`).
12. **Projetos / Detalhe do projeto (`projetos/projetos.md`, `projetos-id.md`, nota 7,5)** — campo Status (Ativo/Pausado/Concluído/Cancelado), Prazo, Departamento, Prioridade, Progresso não existem na entity; selo de situação lê `p.status` que a API nunca retorna.
13. **Detalhe do pátio (`remocao/patios-id.md`)** — telefone e observações do pátio, e cargo/telefone/e-mail dos responsáveis não vêm do backend.
14. **Filas de Atendimento (`suporte/suporte-filas.md`, nota 6)** — campo SLA(h) descartado; entity Queue não tem `sla`.
15. **Registro do comitente (`comitentes/comitentes-id.md`)** — aba Aprovação passa ID do comitente mas backend resolve como LOTE/LEILÃO (ParamConverter); aba Mensagem deriva comitente do usuário logado e ignora o campo enviado. Aprovação via ficha provavelmente não funciona.

### P2 — Filtros/ações inertes (a tela aceita, o backend ignora)
16. **Log Operacional (`relatorios/operacional-logs.md`, nota 6)** — filtros Entidade e Ação descartados pelo controller; só id/pessoa/data/search filtram.
17. **Tempo de Trabalho (`relatorios/colab-tempo-trabalho.md`, nota 5)** — filtro Colaborador está comentado no backend; sempre traz todos.
18. **Gestão de Arrematantes — filtros avançados (`arrematantes/arrematantes-lista.md`)** — Cidade, UF e seleção múltipla de status (`statusIn`) ignorados pelo backend.
19. **Exportar Base de arrematantes (`arrematantes/arrematantes-exportar.md`, nota 6)** — colunas Observação/Tags e seção Histórico & Financeiro descartadas; formatos csv/pdf ignorados (controller sempre gera XLSX).
20. **Campanhas CRM (`crm/marketing-campanhas.md`, nota 5)** — doc inventava canais SMS/Voz e "Teste A/B" inexistentes no wizard.
21. **Configurar etapas do funil (`crm/crm-pipeline-config.md`, nota 6)** — campo Descrição da etapa descartado; reordenar por arraste não persiste (`ordering` não lido).

### P3 — Imprecisões de navegação / caminhos de menu (alto volume, baixo impacto individual)
Caminho de menu citado que não existe na sidebar real. Recorrente em: Bens→Estoque, Bens→Cadastros, Sites→Conteúdos/Website/Blog, Financeiro→Importar extrato, Financeiro→Relatórios→DRE, Relatórios (galeria de cartões, não menu lateral), busca global no topo (primeiros-passos/navegacao — não existe). Já corrigidos em sua maioria.

### P4 — Endpoints "otimistas" com fallback "Funcionalidade em implementação"
Templates: `/testar` e `/import` inexistentes. Histórico de e-mail: `/reenviar` inexistente. Upload de imagens (Root): `/api/uploads/imagem(ns)` inexistentes (sem UploadController). Importação com análise de leilão: `importar-planilha-analise/confirmar` inexistentes. Importação por webservice: tela é placeholder.

## 4. Riscos

### Risco de implantação / go-live
- **Features anunciadas no manual mas não operacionais** (P0): se o manual for publicado como está nos pontos não corrigidos, novos clientes tentarão usar PDA de inventário, Webhooks, Transmissão ao Vivo e o relatório de Exportar Arrematantes e baterem em telas mortas — má primeira impressão no onboarding.
- **Relatório "Exportar Arrematantes" com `setMaxResults(2)`** é um bug de produto, não só de doc: qualquer cliente que dependa dessa exportação para conferência/cobrança recebe 2 linhas. Risco operacional direto.

### Risco de operação
- **Dados que parecem salvos mas não são** (P1): operadores preenchem SLA de fila, status/prazo de projeto, assunto/prazo de intimação, origem/destino de carta precatória, campos de vaga de pátio — e nada disso persiste. Risco de decisão operacional sobre dado fantasma (ex.: achar que uma intimação está "Cumprida" quando o status nem é gravado).
- **Aprovação de comitente via ficha** provavelmente não funciona (ParamConverter resolve ID errado): risco em fluxo de habilitação/aprovação.

### Risco de suporte
- **Filtros inertes** (P2) geram chamados recorrentes do tipo "o filtro não funciona" (Cidade/UF de arrematantes, Entidade/Ação no log, Colaborador no tempo de trabalho). Cada um é um ticket previsível.
- **Caminhos de menu errados** (P3) geram "não acho a tela" no suporte — alto volume, fácil de eliminar via correção de doc (em boa parte já feito).
- **Endpoints com fallback "em implementação"** (P4): usuário interpreta como bug e abre chamado; suporte precisa saber que é backlog conhecido, não regressão.

## 5. Lacunas mais graves (ranking)

1. **Relatório Exportar Arrematantes limitado a 2 registros** (`relatorios/arrematantes-exportar.md`, nota 3) — pior lacuna: bug de backend que a doc mascarava. Corrigir o backend é prioridade sobre a doc.
2. **PDA Coletor de inventário sem backend** (`pda/pda.md`, nota 6,5) — módulo inteiro documentado sem `PdaController`; conferência de inventário não funciona.
3. **Ficha da pessoa totalmente divergente** (`pessoas/pessoas-id.md`, nota 4) — abas inteiras descritas que não existem; precisou ser reescrita.
4. **Webhooks** (`comunicacao/comunicacao-webhooks.md`) — entity é fila de jobs, não webhook de saída; criação/edição não persiste; eventos não emitidos.
5. **Aba Acessos de Parceiros** (`parceiros/parceiros-id.md`) — fluxo inteiro de senha/API key especulativo.
6. **Transmissão ao Vivo** (`leiloes/transmissao.md`) — stream/viewers/chat são stubs.
7. **Bens com mais Tempo em Estoque** (`relatorios/bens-tempo-estoque.md`, nota 4) — filtros não aplicados, incluindo o tempo mínimo que dá nome ao relatório.
8. **Formulários (configuracoes/forms.md)** — public/active/order não persistem e DELETE não tem rota.
9. **Intimações e Cartas Precatórias (processos/)** — campos-chave do dia a dia jurídico não são gravados.
10. **Filtros avançados de Arrematantes (Cidade/UF/statusIn)** — segmentação de base não funciona como exibida.

### Recomendações de fechamento
- **Separar correção de doc de correção de produto.** Boa parte das notas baixas (P0/P1) só fecha de verdade quando o backend for implementado/corrigido — não com texto. Sugerido abrir tickets de produto para os itens P0 (especialmente o `setMaxResults(2)` e o `PdaController`).
- **Convenção para features parciais:** padronizar nas páginas afetadas um aviso explícito ("Em implementação" / "Não persiste no momento") em vez de descrever como funcional — alinhado à regra de marcar incerteza com `> A confirmar`.
- **Reavaliar `allow_extra_fields=true`** nos FormTypes: é a causa-raiz técnica de quase toda a categoria P1 (campos enviados e silenciosamente descartados). Endurecer a validação faria o backend rejeitar em vez de mentir por omissão.
- **Varredura de caminhos de menu (P3)** contra a sidebar real do `AppLayout.vue` — checagem mecânica que elimina uma classe inteira de imprecisões.
