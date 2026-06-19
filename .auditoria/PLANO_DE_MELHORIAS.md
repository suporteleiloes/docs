# Plano de Melhorias — ERP/CRM Suporte Leilões V5

> Gerado a partir da auditoria das 60 fichas de findings em `docs/.auditoria/findings/find_*.json` (auditoria de 2026-06-16).
> A doc do manual já foi corrigida em cada página; **este plano trata do que precisa mudar no SISTEMA**, não na documentação.

## Como este plano foi priorizado

A pergunta-guia foi: **o que impede um cliente novo de implantar e operar sozinho?**

Critérios de severidade:

- **Crítico** — funcionalidade quebrada/ausente que trava uma jornada essencial de implantação ou operação, OU campos que o usuário preenche e o sistema descarta silenciosamente em telas de uso frequente, OU recurso vendido como funcional que não opera (overpromise).
- **Alto** — divergência front/back que entrega resultado errado/incompleto (filtros ignorados, exportações truncadas), ou recurso prometido na UI sem backend, em telas de uso menos crítico para o go-live.
- **Médio** — campos cosméticos não persistidos, inconsistências de menu/rota, status que nunca aparecem, pequenas divergências de UI.
- **Baixo** — polimentos, rótulos, defaults e melhorias de clareza no produto.

Cada item: **o que fazer · módulo/página · justificativa (impacto)**.

---

## CRÍTICO — bloqueia implantar/operar sozinho

### C1. Exportar Base de Arrematantes só gera XLSX, ignora filtros e descarta colunas
- **O que fazer:** fazer `ArrematanteExportController` aplicar os filtros recebidos (status/data/documento/papel/tags/cidade), respeitar o formato pedido (CSV/PDF reais, não XLSX com extensão trocada) e incluir no `getSqlColumnsMap()` as colunas Observação, Tags e a seção Histórico & Financeiro (hoje saem em branco).
- **Módulo/página:** ERP → Arrematantes → Exportar Base (`docs/erp/arrematantes/arrematantes-exportar.md`).
- **Justificativa:** exportar a base de arrematantes é tarefa de migração/relatório frequente. Hoje o usuário escolhe "Aprovados de uma cidade no período" e recebe **a base inteira**, em XLSX, sem as colunas que pediu. Frustra e gera dado errado já no onboarding.

### C2. Relatório "Exportar Arrematantes" é stub (retorna 2 linhas fixas)
- **O que fazer:** implementar de verdade `ArrematanteController::exportarArrematantes` — hoje tem `setMaxResults(2)` hardcoded, ignora os filtros Comitente e Tempo mínimo, o Excel sai com 3 colunas (ID/Apelido/Nome) e o HTML é texto de exemplo. Também trocar a ACL emprestada (`RELATORIO_BENS_TEMPO_ESTOQUE`) por uma própria.
- **Módulo/página:** ERP → Relatórios → Exportar Arrematantes (`docs/erp/relatorios/arrematantes-exportar.md`, nota 3).
- **Justificativa:** é uma tela de relatório oficial que entrega 2 registros e um texto-modelo. Cliente que confiar nela exporta lixo. Pior caso do lote.

### C3. PDA Coletor de Inventário não tem backend
- **O que fazer:** criar o `PdaController` com os endpoints consumidos pelo front: `/api/pda/buscar-bem`, `/api/pda/conferir`, `/api/pda/sessao/{id}/relatorio` e fechamento de sessão. Hoje não existe controller; a conferência de inventário não opera e a sessão é volátil (in-memory, perdida ao recarregar).
- **Módulo/página:** ERP → PDA → Coletor de inventário (`docs/erp/pda/pda.md`, `pda-config.md`).
- **Justificativa:** o inventário de pátio por coletor é uma jornada operacional inteira anunciada na UI que **não funciona ponta a ponta**. Cliente com pátio não consegue inventariar.

### C4. Transmissão ao Vivo: Iniciar/Parar, Espectadores e Chat são stubs
- **O que fazer:** implementar (ou remover da UI) `POST /api/leiloes/:id/transmissao/start|stop`, o contador real de espectadores (hoje `ref(0)` mock) e o chat ao vivo (hoje stub local com badge "Stub"; mensagens não chegam ao público). Hoje só "salvar a URL" funciona.
- **Módulo/página:** ERP → Leilões → Transmissão ao Vivo (`docs/erp/leiloes/transmissao.md`, nota 5).
- **Justificativa:** risco alto de o leiloeiro achar que "Iniciar stream" coloca o vídeo no ar e que o "Chat" fala com o público em pleno pregão. Falha em evento ao vivo é a pior hora para descobrir que o botão é falso.

### C5. Webhooks (ERP/Comunicação) não têm backend de cadastro/edição/histórico
- **O que fazer:** decidir o destino e executar: ou implementar `POST/PUT` + `/historico` em `Website/WebhookController` com a entidade alinhada ao shape da UI (name/url/events/secret/headers) e emissão automática dos eventos listados, ou remover o formulário e marcar a tela como somente-leitura. Hoje a entidade `Webhook` é uma fila interna de jobs (entityName/target/token/status), não casa com o modal.
- **Módulo/página:** ERP → Comunicação → Webhooks (`docs/erp/comunicacao/comunicacao-webhooks.md`).
- **Justificativa:** integração via webhook é requisito comum de cliente que pluga site/CRM externo. A jornada "cadastrar webhook → receber notificações" não se completa: não há rota de criação nem emissão confirmada dos eventos.

### C6. Formulários (Configurações): excluir não funciona e Status/Ordem/Público não persistem
- **O que fazer:** em `FormController`/`FormType`: adicionar rota `DELETE /api/forms/{id}` (hoje o front chama e o servidor não tem); declarar e persistir `active`, `order` e `public` na entidade `Form` (hoje `allow_extra_fields=true` descarta silenciosamente). Avaliar privacidade: a URL pública `/form/<code>` funciona **independente** da flag Público — risco de exposição.
- **Módulo/página:** ERP → Configurações → Formulários (`docs/erp/configuracoes/forms.md`, nota 5.5).
- **Justificativa:** o cliente cria formulários públicos no onboarding. Hoje não consegue desativar, ordenar, restringir acesso nem excluir — e acha que conseguiu. Há ainda risco de LGPD por formulário "privado" acessível por URL.

### C7. "Operações pendentes de aprovação": aprovar NÃO executa a operação
- **O que fazer:** alinhar o comportamento à expectativa: ou fazer `aprovarPendente` executar a operação ao aprovar, ou deixar explícito no produto que aprovar apenas LIBERA e o solicitante precisa reenviar (`autorizacaoId`+`autorizacaoCode`). Hoje tanto a doc quanto a própria mensagem de confirmação do front dizem "será executada", o que é falso.
- **Módulo/página:** ERP → Configurações → Operações pendentes de aprovação (`docs/erp/configuracoes/configuracoes-autorizador-pendentes.md`); relacionado: Autorizador, Contas Bancárias (aprovação gerencial).
- **Justificativa:** o aprovador acha que liberou a ação (ex.: criar conta bancária) e nada acontece — operação retida sem ninguém perceber. Mina a confiança no fluxo de governança que muitos clientes exigem.

### C8. Ficha da Pessoa documentada divergia totalmente da tela (já reescrita) — validar a UI real
- **O que fazer:** confirmar com o time se a `PessoaShowPage.vue` (cabeçalho + 2 colunas + 7 abas: Observações/Contatos/Tarefas/Ligar/Comunicação/Arquivos/Linha do tempo) é a versão final pretendida; o link "✎ alterar status" no cabeçalho não existe e o status é read-only no card CRM. Decidir se alterar status pela ficha deve existir.
- **Módulo/página:** ERP → Pessoas → Ficha da pessoa (`docs/erp/pessoas/pessoas-id.md`, nota 4.0, reescrita).
- **Justificativa:** a ficha de pessoa é a tela central do CRM. A divergência era grande o bastante para sugerir que protótipo e implementação seguiram caminhos diferentes — vale fechar a lacuna de produto, não só de doc.

### C9. Aprovação de comitente pela ficha do comitente está com contrato front/back trocado
- **O que fazer:** corrigir o ParamConverter: o front envia o ID do COMITENTE para `/api/comitentes/aprovar/{id}/{status}` e `/pendenciasAprovacao/{id}`, mas o backend resolve `{id}` como LOTE e LEILÃO respectivamente. Hoje a aprovação via ficha do comitente provavelmente não funciona como o operador espera. Idem aba Mensagem, que deriva o comitente do usuário logado e recusa o operador do leiloeiro.
- **Módulo/página:** ERP → Comitentes → Registro do comitente (`docs/erp/comitentes/comitentes-id.md`).
- **Justificativa:** aprovar lote condicional e falar com o comitente são ações de rotina. O operador clica e recebe erro ("Comitente não encontrado") ou age sobre o registro errado.

---

## ALTO — recurso prometido na UI sem backend, ou resultado errado

### A1. Importação com análise (lotes) chama endpoints inexistentes
- **O que fazer:** implementar `POST /api/leiloes/{id}/importar-planilha-analise` e `.../importar-planilha-confirmar` (o `ImportacaoController` só tem `importarLotes` e `importacao/{idi}/executar`). Feature está front-pronta, backend pendente.
- **Módulo/página:** ERP → Leilões → Preparação → Importação com análise (`docs/erp/leiloes/importacao-analise.md`).
- **Justificativa:** importar lotes em massa com revisão prévia é caminho preferido para montar um leilão grande. Sem backend, a jornada de preparação trava.

### A2. Aba Acessos de Parceiros é 100% especulativa (sem backend)
- **O que fazer:** implementar `GET/PATCH /api/parceiros/{id}/acessos`, `POST/DELETE .../api-key`, `POST .../painel/senha`; e persistir `active` e Tipo de Acesso no `ParceiroType`/entidade (hoje só `comissao` é gravado; `active` é descartado por `allow_extra_fields`). Também falta rota `DELETE` de parceiro.
- **Módulo/página:** ERP → Parceiros (`docs/erp/parceiros/parceiros.md`, `parceiros-id.md`).
- **Justificativa:** gerir acessos/API key de parceiros é o motivo da tela existir; toda a aba cai em "Acessos indisponíveis", inativar parceiro não persiste e excluir não funciona.

### A3. Filtros avançados de Arrematantes ignorados pelo backend (Cidade/UF/multi-status)
- **O que fazer:** em `ArrematanteController::listArrematante`/`ArrematanteRepository`: ler e aplicar `cidade`, `uf` e o multi-status `statusIn` (hoje só lê `status`). O filtro de período já exige as duas datas — confirmar se é intencional.
- **Módulo/página:** ERP → Arrematantes → Gestão (`docs/erp/arrematantes/arrematantes-lista.md`).
- **Justificativa:** o operador filtra por cidade/UF e a lista não muda — parece bug e leva a decisões erradas (ex.: contatar arrematantes da região).

### A4. Relatório "Bens com mais Tempo em Estoque" ignora os dois filtros
- **O que fazer:** aplicar `comitente` e `tempoMinimo` em `BemRepository::findByTempoEstoque` (hoje ambos são recebidos e não usados; a lista não é cortada por dias).
- **Módulo/página:** ERP → Relatórios → Bens com mais Tempo em Estoque (`docs/erp/relatorios/bens-tempo-estoque.md`, nota 4).
- **Justificativa:** o relatório serve para achar bens parados há X dias por comitente; sem os filtros ele não responde a pergunta para a qual existe.

### A5. Log Operacional: filtros Entidade e Ação não filtram
- **O que fazer:** fazer `LogController::listLog` coletar e aplicar `entity` e `action` (hoje `bindFormEntityFilters` só lê id/pessoa/data/search; os dois são descartados). Confirmar também a aplicação do período (data1/data2).
- **Módulo/página:** ERP → Relatórios → Log Operacional (`docs/erp/relatorios/operacional-logs.md`, nota 6).
- **Justificativa:** auditoria é exatamente "filtrar por ação/entidade". Sem isso, investigar um incidente exige varredura manual — inviável em base grande.

### A6. Tempo de Trabalho: filtro Colaborador comentado no backend
- **O que fazer:** reativar/implementar o filtro `colaborador` em `StatsController::getTempoTrabalho` (hoje comentado, sempre traz todos).
- **Módulo/página:** ERP → Relatórios → Tempo de Trabalho (`docs/erp/relatorios/colab-tempo-trabalho.md`, nota 5).
- **Justificativa:** relatório de produtividade individual que não filtra por pessoa não cumpre o propósito.

### A7. Configurar etapas do funil: Descrição e reordenação não persistem; critério parcial
- **O que fazer:** no `EtapaFunil`/serviço `atualizarEtapa`: persistir `descricao`, ler `ordering` (reordenação por arraste hoje não grava) e `criterio_dias`; alinhar chaves `etapa_final_positiva/negativa` (front) vs `eh_final_positiva/negativa` (serviço); aceitar cor/critério/flags também na criação.
- **Módulo/página:** CRM → Configurar etapas do funil (`docs/crm/crm-pipeline-config.md`, nota 6).
- **Justificativa:** o cliente monta o próprio funil na implantação. Hoje reordena etapas e escreve descrições que somem sem aviso — configuração de CRM nasce inconsistente.

### A8. Templates de E-mail: "Enviar teste" e "Importar Word/PDF" sem backend
- **O que fazer:** implementar `POST /api/templates/{id}/testar` e `/api/templates/import` (hoje 404 → "Funcionalidade em implementação").
- **Módulo/página:** ERP → Comunicação → Templates de E-mail (`docs/erp/comunicacao/comunicacao-templates.md`); idem reenvio em Histórico de Envio (`/api/op/log/{id}/reenviar` inexistente).
- **Justificativa:** testar o template antes de disparar é etapa básica de configuração de comunicação; sem isso o cliente dispara no escuro.

### A9. Cores das etapas do funil não retornam no GET (CRM Funis de Venda)
- **O que fazer:** incluir `cor` no retorno de `GET /etapas` (o PATCH grava, mas o GET não devolve; a tabela cai em cor por índice e a cor exibida diverge da escolhida).
- **Módulo/página:** CRM → Funis de Venda (`docs/crm/crm-funis-venda.md`).
- **Justificativa:** o usuário define a cor e vê outra — pequeno, mas mina a confiança na ferramenta de pipeline logo no setup.

### A10. Vistorias: STATUS_MAP do front usa chaves que a API nunca retorna
- **O que fazer:** corrigir o `STATUS_MAP` do `VistoriaShowPage.vue` para os status reais da entidade (Solicitado/Iniciada/Concluído/Cancelado) em vez de pendente/agendada/realizada/cancelada.
- **Módulo/página:** ERP → Bens → Detalhe da vistoria (`docs/erp/bens/vistoria-id.md`).
- **Justificativa:** bug de front que faz a situação da vistoria aparecer errada/vazia — afeta o controle operacional do pátio.

### A11. Toggle "Imóvel Web" por leilão não persiste nem publica
- **O que fazer:** definir o roadmap (anotado como pendente): hoje o interruptor de Modo APIs/Imóvel Web na lista de leilões é só estado local em memória, sem flag por leilão no backend e sem efeito de publicar/despublicar.
- **Módulo/página:** ERP → Leilões → lista (`docs/erp/leiloes/leiloes.md`) e Marketplace API placeholders (`leiloes-id.md`).
- **Justificativa:** o operador acha que publicou o leilão no portal e nada saiu — impacto comercial direto (anúncios não vão ao ar).

### A12. Upload de imagens (Root) sem backend
- **O que fazer:** publicar o `UploadController` com `POST /api/uploads/imagem` e `GET /api/uploads/imagens` (não existem; a tela sempre cai em "Endpoint indisponível").
- **Módulo/página:** ERP → Configurações → Upload de imagens (Root) (`docs/erp/configuracoes/configuracoes-root-uploads.md`).
- **Justificativa:** ferramenta de hospedar imagem/colar URL anunciada e inerte.

### A13. Histórico do Leilão: "Baixar auditoria (PDF)" não gera PDF e log é parcial
- **O que fazer:** implementar a geração de PDF (hoje o controller ignora `?download=1` e sempre retorna JSON; método marcado `@TODO provisório`) e completar o log operacional (hoje só retorna `mensagemComitente`, não casa com as colunas Data/Evento/Pessoa do front).
- **Módulo/página:** ERP → Leilões → Histórico (`docs/erp/leiloes/historico.md`, nota 6).
- **Justificativa:** trilha de auditoria do leilão é requisito de compliance; cliente clica em baixar e não recebe o relatório esperado.

---

## MÉDIO — campos cosméticos não persistidos, status fantasma, menu/rota

### M1. Processos — campos preenchidos e não gravados
- **O que fazer:** alinhar entidade/Type ao que o front coleta, ou remover os campos da UI:
  - **Intimações:** entidade não tem `assunto`/`descricao`/`processo`/`prazo`/`cumprida`; só grava datas + observação ligadas a uma etapa.
  - **Cartas Precatórias:** `origem`/`destino`/`dataEnvio`/`dataRetorno` não persistem (colunas exibem "—").
- **Módulo/página:** ERP → Processos → Intimações, Cartas Precatórias (`docs/erp/processos/intimacoes.md`, `cartas-precatorias.md`).
- **Justificativa:** o usuário do jurídico preenche prazo/origem/destino confiando que ficam salvos; perda de dado silenciosa.

### M2. Status que existem na UI mas a API nunca retorna/persiste
- **O que fazer:** remover (ou implementar) os estados-fantasma:
  - **Projetos / Detalhe do projeto:** campo Status (Ativo/Pausado/Concluído/Cancelado) é descartado; só `active` persiste. Campos Prazo/Departamento/Prioridade/Progresso não existem e mostram "—".
  - **Listas de contatos (CRM):** campo Status do inscrito e edição de inscrito (lápis) não existem.
  - **Vagas do pátio:** "Reservada"/"Em manutenção", Setor, Fileira, Tipo por vaga, Situação e "Vaga externa" não são persistidos.
  - **Financeiro de RH / Relatórios RH:** status "Cancelado" é fallback morto (só Previsto/Pago existem).
  - **Filas de Suporte:** campo SLA (h) não é persistido.
- **Módulo/página:** Projetos (`projetos.md`, `projetos-id.md`), CRM Listas (`crm-listas.md`), Remoção (`patios-id-vagas.md`), RH (`rh-financeiro.md`, `rh-relatorios.md`), Suporte (`suporte-filas.md`).
- **Justificativa:** campos que aceitam input e jogam fora confundem e geram retrabalho; remover/implementar limpa a experiência de configuração.

### M3. Rotas sem item de menu (telas só acessíveis por URL)
- **O que fazer:** decidir e adicionar ao menu (ou documentar como deep-link): Importar extrato (`/financeiro/importar-extrato`), DRE (`/financeiro/dre`), Estoque de bens (`/patio/estoque`), Bens → Cadastros (`/bens/cadastros`), Clientes/Projetos/Filas de Suporte (`/suporte/*`), Conteúdos do site (`/website/contents`).
- **Módulo/página:** Financeiro, Bens, Suporte, Sites.
- **Justificativa:** funcionalidades existentes que o cliente novo nunca descobre porque não há entrada no menu.

### M4. Caminhos de menu documentados divergem da navegação real
- **O que fazer:** padronizar rótulos de menu citados vs reais (Compras fica em Financeiro, não "Suprimentos"; Sites → "Sites"/"Posts"; etc.). Em vários casos é só ajustar o produto OU a doc, mas há inconsistência de nomenclatura herdada (ex.: nav "Tickets" vs recurso "chamados").
- **Módulo/página:** Compras, Sites/Website, CRM Chamados.
- **Justificativa:** reduz fricção de navegação na primeira semana de uso.

### M5. Campos de detalhe que não vêm preenchidos pelo endpoint
- **O que fazer:** completar os endpoints `show`/`responsaveis` para retornar os campos que a UI exibe:
  - **Pátio (detalhe):** `telefone`/`observações` do pátio não existem; Cargo/Telefone/E-mail dos responsáveis vêm vazios.
  - **Detalhe do reboquista:** coluna Custo dos reboques sempre "—" (endpoint não envia `custo`).
  - **PDA Atendimento:** KPIs monetários (totalArrematado/Pago/Pendente/saldo) caem em "—" porque `resumoFinanceiro` só retorna contagens.
- **Módulo/página:** Remoção (`patios-id.md`, `remocao-reboquistas-id.md`), PDA (`pda-atendimento.md`).
- **Justificativa:** telas de consulta com colunas/indicadores sempre vazios passam impressão de produto incompleto.

### M6. Inbox social (Meta) não é configurável pela tela de Integrações
- **O que fazer:** expor o provider `meta_graph` em `PROVIDERS_LABELS` (hoje é lido do `IntegracaoConfig` mas ausente da tela de Integrações — provisionado à parte).
- **Módulo/página:** CRM → Inbox omnichannel / Integrações externas (`crm-social-inbox.md`, `crm-configuracoes-integracoes-config.md`).
- **Justificativa:** o cliente não consegue ligar o atendimento por DM do Instagram/Facebook sozinho.

### M7. Campanhas (CRM): SMS/Voz e Teste A/B só existem no enum, não no wizard
- **O que fazer:** decidir se SMS/Voz e A/B entram no assistente de criação (hoje o wizard só oferece E-mail/WhatsApp/multicanal; SMS/Voz existem no backend mas não na UI; A/B não existe).
- **Módulo/página:** CRM → Campanhas (`docs/crm/marketing-campanhas.md`, nota 5).
- **Justificativa:** capacidade de backend não surfaçada e expectativa de A/B inexistente — alinhar o que é vendido com o que opera.

### M8. Validade de Documentos: excluir arquivo individual é no-op silencioso
- **O que fazer:** implementar a rota de delete de arquivo (`DELETE /.../arquivos/{arquivo}` é chamada pelo front mas não existe; o erro é engolido por `.catch`).
- **Módulo/página:** ERP → Configurações → Validade de Documentos (`docs/erp/configuracoes/validade-documentos.md`).
- **Justificativa:** o usuário acha que removeu um anexo e ele continua lá.

### M9. PDA Atendimento no leilão / Novo pagamento sem handler
- **O que fazer:** ligar o botão "Novo pagamento" do PDA (sem `@click` hoje) ou removê-lo até o registro manual estar pronto.
- **Módulo/página:** ERP → Leilões → PDA (`docs/erp/leiloes/pda.md`).
- **Justificativa:** botão morto numa tela de caixa confunde o atendente.

### M10. Monitoramento de Leilão: cartões Hardware/Serviços sem endpoint
- **O que fazer:** prover `/api/stats/background` (não encontrado no api-v2) ou remover os cartões.
- **Módulo/página:** ERP → Leilões → Monitoramento (`docs/erp/leiloes/leiloes-monitoramento.md`).
- **Justificativa:** indicadores de infra sempre "sem dados" não agregam e parecem defeito.

---

## BAIXO — polimento, defaults e clareza de produto

- **B1. Cor em Tags de Pessoa / campo `color` não exposto** — a API aceita `color` em Tags mas o front não mostra; decidir expor ou remover do backend. (`crm-admin-tags.md`)
- **B2. Importação de Pessoas (CSV) só aceita vírgula** — aceitar autodetecção de separador como nas outras importações. (`crm-pessoas-import.md`)
- **B3. Busca não filtra em Catálogo (Planos/Unidades)** — `listPlanos`/`listUnidades` ignoram o parâmetro `search`; implementar a busca server-side. (`catalogo-planos.md`, `catalogo-unidades.md`)
- **B4. Controlador: rótulo "F4 p/ abrir" sem binding** — F4 não está no handler de teclado; ou vincular a tecla ou remover o lembrete visual. (`controlador.md`)
- **B5. Múltiplos depósitos podem ser "Principal"** — o sistema não impede; definir se deve haver só um principal. (`estoque-depositos.md`); idem inativar depósito sem caminho na UI.
- **B6. Ação em massa "Adicionar tag" (Pessoas) é alert/TODO** — implementar o batch de tags. (`pessoas.md`)
- **B7. Calendário de posts / defaults** — pequenos defaults (rede Instagram, etc.) — itens menores sinalizados nos findings de CRM social.
- **B8. Reorganizar inconsistências de soft-delete vs "remoção definitiva"** — vários controllers fazem soft-delete enquanto a UI/copys dizem "permanente"; padronizar a mensagem no produto (afeta Cadastros/Tipos, Classificações, Comitentes, Bens, Processos, etc.). Em geral é texto de UI.
- **B9. Mapfre embed — login não é SSO garantido** — só passa `?usu=username`; avaliar SSO real ou ajustar a expectativa na UI. (`integra-mapfre.md`)
- **B10. Mini-indicadores placeholder no Painel de Sites** — visitas hoje/conversões/posts sempre "—"; implementar ou ocultar. (`sites-dashboard.md`)

---

## Observações transversais

1. **Padrão recorrente — `allow_extra_fields=true` mascarando campos não mapeados.** Vários casos (Formulários, Projetos, Parceiros, Filas de Suporte, Vagas, Cartas Precatórias, Intimações) têm o front enviando campos que o `FormType` não declara e o Symfony descarta sem erro. Vale uma **varredura de FormTypes** para alinhar entidade ↔ form ↔ UI e, onde fizer sentido, **desligar `allow_extra_fields`** para que o descarte vire erro visível em vez de silencioso.
2. **Padrão recorrente — telas front-prontas com backend pendente.** PDA inventário, Importação com análise, Webhooks, Templates (teste/import), Upload Root, Transmissão (stream/chat), Acessos de Parceiros. Sugerido um **gate de release**: feature só aparece na UI quando o endpoint existe (feature flag por módulo), evitando overpromise para o cliente novo.
3. **Padrão recorrente — filtros coletados e não aplicados** (Arrematantes cidade/UF/status, Bens tempo em estoque, Log entidade/ação, Tempo de trabalho colaborador). Revisar a camada de `bind*Filters`/repositórios para garantir que todo filtro exibido afeta o resultado.
4. **A documentação do manual já foi corrigida** em todas as páginas (status "corrigido"/"ok" nos findings); os itens acima são pendências **de produto** que ficaram registradas como `> A confirmar` / `em implantação` na doc para não enganar o usuário enquanto não são resolvidas.
