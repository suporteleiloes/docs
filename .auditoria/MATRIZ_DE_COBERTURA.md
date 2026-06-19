# Matriz de Cobertura — Manual do Usuário V5 vs. Sistema

> Gerado automaticamente a partir dos findings de auditoria em `docs/.auditoria/findings/find_*.json` (auditoria de 2026-06-16).
> Uma linha por funcionalidade (página do manual) confrontada com o comportamento real do sistema (front Vue 3 + API V5).

## Como ler as colunas

- **Existe no Sistema** — a funcionalidade está implementada no ERP/CRM/etc. `Não` = a doc descrevia algo que não existe no backend.
- **Existe na Documentação** — há página de manual cobrindo a funcionalidade.
- **Completa?** — `Sim` = doc fechada (ou gap já corrigido na auditoria); `Parcial` = ainda com ressalvas/ajustes pendentes; `Não` = lacuna estrutural.
- **Precisa Revisão?** — `Sim` = divergência real entre doc e sistema (feature inexistente, canal/campo prometido a mais, inconsistência front/back) que merece reverificação humana.

## Resumo

- Funcionalidades mapeadas: **281**
- Com divergência marcada para revisão (Precisa Revisão = Sim): **42**
- Não totalmente completas (Parcial/Não): **29**
- Documentadas mas sem suporte no sistema (faltaNoSistema estrutural): **1**

## Primeiros Passos

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| Acessando o sistema | Primeiros Passos | Sim | Sim | Sim | Não |
| Conceitos e glossário | Primeiros Passos | Sim | Sim | Sim | Não |
| Navegando pelo sistema | Primeiros Passos | Sim | Sim | Sim | Sim |

## Geral (raiz)

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| Bem-vindo ao manual do Suporte Leilões | Geral (raiz) | Sim | Sim | Sim | Não |

## ERP

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| A ficha do bem | ERP | Sim | Sim | Sim | Não |
| Advogados | ERP | Sim | Sim | Parcial | Não |
| Andamentos Processuais | ERP | Sim | Sim | Parcial | Não |
| Análises Cadastrais | ERP | Sim | Sim | Sim | Não |
| Apelidos proibidos para arrematantes | ERP | Sim | Sim | Parcial | Não |
| Apresentação em telão | ERP | Sim | Sim | Sim | Não |
| Aprovação de Cadastros | ERP | Sim | Sim | Sim | Não |
| Assinaturas | ERP | Sim | Sim | Sim | Não |
| Auditório ao vivo | ERP | Sim | Sim | Sim | Não |
| Auditório Unificado | ERP | Sim | Sim | Parcial | Não |
| Automação | ERP | Sim | Sim | Sim | Não |
| Autores | ERP | Sim | Sim | Sim | Não |
| Autorizador — Regras de aprovação | ERP | Sim | Sim | Sim | Não |
| Bens com mais Tempo em Estoque | ERP | Sim | Sim | Sim | Não |
| Cadastrar Processo | ERP | Sim | Sim | Sim | Não |
| Cadastro Básico | ERP | Sim | Sim | Sim | Não |
| Cadastros (Tipos) | ERP | Sim | Sim | Sim | Não |
| Cadastros Auxiliares | ERP | Sim | Sim | Parcial | Não |
| Cadastros de Bens | ERP | Sim | Sim | Sim | Sim |
| Calendário de Leilões | ERP | Sim | Sim | Sim | Não |
| Cargos | ERP | Sim | Sim | Sim | Não |
| Cartas Precatórias | ERP | Sim | Sim | Parcial | Sim |
| Cartas precatórias do processo | ERP | Sim | Sim | Parcial | Sim |
| Central de Segurança | ERP | Sim | Sim | Sim | Não |
| Centro de Custo | ERP | Sim | Sim | Sim | Não |
| Classificações de Leilão | ERP | Sim | Sim | Sim | Não |
| Clientes de Suporte | ERP | Sim | Sim | Sim | Não |
| Cobrança (Fechamento) | ERP | Sim | Sim | Sim | Não |
| Colaboradores | ERP | Sim | Sim | Sim | Não |
| Compras | ERP | Sim | Sim | Sim | Não |
| Comunicados internos | ERP | Sim | Sim | Sim | Não |
| Comunicação (visão geral) | ERP | Sim | Sim | Sim | Não |
| Conciliação Bancária | ERP | Sim | Sim | Sim | Não |
| Configurar inventário | ERP | Sim | Sim | Parcial | Não |
| Configuração de Formulários | ERP | Sim | Sim | Sim | Não |
| Configuração do robô | ERP | Sim | Sim | Parcial | Não |
| Configurações de Tarefas | ERP | Sim | Sim | Sim | Não |
| Configurações do Pátio | ERP | Sim | Sim | Sim | Não |
| Configurações Globais | ERP | Sim | Sim | Sim | Não |
| Construtor de Formulário | ERP | Sim | Sim | Parcial | Não |
| Contas (a pagar, a receber e extrato) | ERP | Sim | Sim | Sim | Não |
| Contas Bancárias | ERP | Sim | Sim | Sim | Não |
| Contratos de Pátio | ERP | Sim | Sim | Sim | Não |
| Controlador (pregão ao vivo) | ERP | Sim | Sim | Sim | Não |
| Controle de RGI | ERP | Sim | Sim | Parcial | Não |
| Dashboard Cadastral | ERP | Sim | Sim | Sim | Não |
| Dashboard de RH | ERP | Sim | Sim | Sim | Não |
| Dashboard Financeiro | ERP | Sim | Sim | Sim | Não |
| Demonstrativo de Resultado (DRE) | ERP | Sim | Sim | Sim | Não |
| Departamentos | ERP | Sim | Sim | Sim | Não |
| Depósitos | ERP | Sim | Sim | Sim | Não |
| Detalhe da assinatura | ERP | Sim | Sim | Sim | Não |
| Detalhe da compra | ERP | Sim | Sim | Sim | Não |
| Detalhe da tarefa | ERP | Sim | Sim | Sim | Não |
| Detalhe da vistoria | ERP | Sim | Sim | Sim | Não |
| Detalhe do Arrematante | ERP | Sim | Sim | Sim | Não |
| Detalhe do envio | ERP | Sim | Sim | Parcial | Não |
| Detalhe do Grupo | ERP | Sim | Sim | Sim | Não |
| Detalhe do projeto | ERP | Sim | Sim | Sim | Sim |
| Detalhe do pátio | ERP | Sim | Sim | Sim | Sim |
| Detalhe do reboquista | ERP | Sim | Sim | Sim | Não |
| Detran PB | ERP | Sim | Sim | Sim | Não |
| Documentos | ERP | Sim | Sim | Sim | Não |
| Documentos e Templates | ERP | Sim | Sim | Parcial | Não |
| Domínio próprio | ERP | Sim | Sim | Sim | Não |
| Editar leilão | ERP | Sim | Sim | Sim | Não |
| Entradas no Pátio | ERP | Sim | Sim | Sim | Não |
| Equipe e Custos | ERP | Sim | Sim | Sim | Não |
| Escrivães | ERP | Sim | Sim | Sim | Não |
| Estadias & Custos | ERP | Sim | Sim | Sim | Não |
| Estoque (Saldos) | ERP | Sim | Sim | Sim | Não |
| Estoque de Bens | ERP | Sim | Sim | Sim | Sim |
| Etapas / Produtividade do processo | ERP | Sim | Sim | Sim | Não |
| Eventos | ERP | Sim | Sim | Sim | Não |
| Exportar Arrematantes | ERP | Sim | Sim | Sim | Sim |
| Exportar Base | ERP | Sim | Sim | Sim | Não |
| Fechamento | ERP | Sim | Sim | Sim | Não |
| Ficha da pessoa | ERP | Sim | Sim | Sim | Sim |
| Ficha do colaborador | ERP | Sim | Sim | Sim | Não |
| Fila de mensagens (Messenger) | ERP | Sim | Sim | Parcial | Não |
| Fila de Vendas | ERP | Sim | Sim | Sim | Não |
| Filas de Atendimento | ERP | Sim | Sim | Sim | Não |
| Filas de Tarefas (globais) | ERP | Sim | Sim | Sim | Não |
| Financeiro de RH | ERP | Sim | Sim | Sim | Sim |
| Formalização (Fechamento) | ERP | Sim | Sim | Sim | Não |
| Formalização (rota direta) | ERP | Sim | Sim | Sim | Não |
| Formas de Pagamento | ERP | Sim | Sim | Sim | Não |
| Formulários | ERP | Sim | Sim | Sim | Sim |
| Gateways de Pagamento | ERP | Sim | Sim | Sim | Não |
| Gestão de Arrematantes | ERP | Sim | Sim | Sim | Não |
| Gestão de Bens | ERP | Sim | Sim | Sim | Não |
| Gestão de Comitentes | ERP | Sim | Sim | Parcial | Sim |
| Gestão de Leilões (lista) | ERP | Sim | Sim | Sim | Não |
| Grupos de comitentes | ERP | Sim | Sim | Sim | Não |
| Grupos e Permissões | ERP | Sim | Sim | Sim | Não |
| GRV / GGV | ERP | Sim | Sim | Sim | Não |
| Habilitados | ERP | Sim | Sim | Sim | Não |
| Habilitação em Leilões | ERP | Sim | Sim | Sim | Não |
| Habilitações | ERP | Sim | Sim | Sim | Não |
| Histórico | ERP | Sim | Sim | Sim | Sim |
| Histórico de Envio de E-mail | ERP | Sim | Sim | Parcial | Sim |
| iCarta Pro | ERP | Sim | Sim | Sim | Sim |
| Importador | ERP | Sim | Sim | Sim | Não |
| Importar extrato bancário | ERP | Sim | Sim | Sim | Sim |
| Importação com análise | ERP | Sim | Sim | Sim | Sim |
| Importação por planilha | ERP | Sim | Sim | Sim | Não |
| Importação por webservice | ERP | Sim | Sim | Parcial | Não |
| ImóvelWeb | ERP | Sim | Sim | Sim | Não |
| Inadimplentes | ERP | Sim | Sim | Sim | Não |
| Intimações | ERP | Sim | Sim | Parcial | Sim |
| Lances Automáticos | ERP | Sim | Sim | Parcial | Não |
| Leilões Próximos | ERP | Sim | Sim | Sim | Não |
| Log Operacional | ERP | Sim | Sim | Sim | Não |
| Loteamento rápido | ERP | Sim | Sim | Sim | Não |
| Lotes do leilão | ERP | Sim | Sim | Sim | Não |
| Mapa Operacional | ERP | Sim | Sim | Sim | Não |
| Mapfre | ERP | Sim | Sim | Sim | Não |
| Mapfre — Boletos | ERP | Sim | Sim | Sim | Sim |
| Marketing | ERP | Sim | Sim | Sim | Não |
| Marketplace API | ERP | Sim | Sim | Sim | Não |
| Mensagens | ERP | Sim | Sim | Sim | Não |
| Meu Perfil | ERP | Sim | Sim | Sim | Não |
| Meu Perfil (versão antiga) | ERP | Sim | Sim | Sim | Não |
| Monitor do comitente | ERP | Sim | Sim | Sim | Não |
| Monitoramento de Leilão | ERP | Sim | Sim | Sim | Não |
| Motoristas | ERP | Sim | Sim | Sim | Não |
| Movimentações | ERP | Sim | Sim | Sim | Não |
| Notas de Arrematação | ERP | Sim | Sim | Sim | Não |
| Nova pessoa | ERP | Sim | Sim | Sim | Não |
| Novo leilão | ERP | Sim | Sim | Sim | Não |
| Operações pendentes de aprovação | ERP | Sim | Sim | Sim | Sim |
| Oportunidades | ERP | Sim | Sim | Sim | Não |
| Organizar lotes | ERP | Sim | Sim | Parcial | Não |
| Painel do Pátio | ERP | Sim | Sim | Sim | Não |
| Painel do Pátio (atalho) | ERP | Sim | Sim | Sim | Não |
| Papéis (Grupos de Membros) | ERP | Sim | Sim | Sim | Não |
| Parceiros | ERP | Sim | Sim | Sim | Sim |
| PDA — Atendimento ao arrematante | ERP | Sim | Sim | Parcial | Não |
| PDA — Atendimento no leilão | ERP | Sim | Sim | Parcial | Não |
| PDA — Coletor de inventário | ERP | Não | Sim | Não | Sim |
| PDA — Impressão de documentos | ERP | Sim | Sim | Sim | Não |
| PDA — Pagamento de lote(s) | ERP | Sim | Sim | Parcial | Não |
| PDA — Pesquisa de lote | ERP | Sim | Sim | Parcial | Não |
| Pessoas | ERP | Sim | Sim | Sim | Não |
| Plano de Contas (Categorias) | ERP | Sim | Sim | Sim | Não |
| Planos | ERP | Sim | Sim | Sim | Não |
| Ponto de Atendimento (PDA) | ERP | Sim | Sim | Sim | Não |
| Preparação do leilão | ERP | Sim | Sim | Sim | Não |
| Prestação de Contas | ERP | Sim | Sim | Sim | Não |
| Processo (detalhe) | ERP | Sim | Sim | Parcial | Não |
| Processos | ERP | Sim | Sim | Sim | Não |
| Produtividade por Período | ERP | Sim | Sim | Sim | Não |
| Produtos | ERP | Sim | Sim | Sim | Não |
| Projetos | ERP | Sim | Sim | Sim | Não |
| Projetos de Suporte | ERP | Sim | Sim | Sim | Não |
| Propostas de Venda Direta | ERP | Sim | Sim | Sim | Não |
| Página do leilão | ERP | Sim | Sim | Sim | Não |
| Pátios | ERP | Sim | Sim | Sim | Não |
| Quadro Kanban | ERP | Sim | Sim | Sim | Não |
| Realização do Leilão | ERP | Sim | Sim | Sim | Não |
| Reboques (veículos) | ERP | Sim | Sim | Sim | Não |
| Reboquistas | ERP | Sim | Sim | Sim | Não |
| Receptadores | ERP | Sim | Sim | Sim | Não |
| Registro do comitente | ERP | Sim | Sim | Parcial | Sim |
| Registro do parceiro | ERP | Sim | Sim | Sim | Sim |
| Relatórios | ERP | Sim | Sim | Sim | Não |
| Relatórios | ERP | Sim | Sim | Sim | Sim |
| Relatórios (RH) | ERP | Sim | Sim | Sim | Sim |
| Relatórios com IA | ERP | Sim | Sim | Sim | Não |
| Relatórios Dinâmicos | ERP | Sim | Sim | Sim | Não |
| Resale | ERP | Sim | Sim | Sim | Não |
| Resumo do leilão | ERP | Sim | Sim | Sim | Não |
| Robô de Processos | ERP | Sim | Sim | Sim | Não |
| Réus | ERP | Sim | Sim | Sim | Não |
| Santander Imóveis | ERP | Sim | Sim | Sim | Não |
| Saídas do Pátio | ERP | Sim | Sim | Sim | Não |
| Seguradoras — Grupo Porto | ERP | Sim | Sim | Sim | Não |
| Sites (Multisite) | ERP | Sim | Sim | Sim | Não |
| Solicitações de Remoção | ERP | Sim | Sim | Sim | Não |
| Supervisão do Leilão | ERP | Sim | Sim | Sim | Não |
| Tarefas (lista) | ERP | Sim | Sim | Sim | Não |
| Taxas | ERP | Sim | Sim | Sim | Não |
| Tela do Leiloeiro | ERP | Sim | Sim | Parcial | Não |
| Telão — Tema Black 1 | ERP | Sim | Sim | Sim | Não |
| Telão — Tema Black 2 | ERP | Sim | Sim | Sim | Não |
| Templates de E-mail | ERP | Sim | Sim | Parcial | Sim |
| Tempo de Trabalho | ERP | Sim | Sim | Sim | Não |
| Tipos de comitente | ERP | Sim | Sim | Sim | Não |
| Tipos de Projeto | ERP | Sim | Sim | Sim | Não |
| Transmissão ao Vivo | ERP | Sim | Sim | Sim | Sim |
| Unidades de medida | ERP | Sim | Sim | Sim | Não |
| Upload de imagens (Root) | ERP | Sim | Sim | Sim | Sim |
| Usuários | ERP | Sim | Sim | Sim | Não |
| Vagas do pátio | ERP | Sim | Sim | Sim | Não |
| Validade de Documentos | ERP | Sim | Sim | Sim | Sim |
| Validade de Documentos · Tipos | ERP | Sim | Sim | Sim | Não |
| Validade de Documentos · Titulares | ERP | Sim | Sim | Sim | Não |
| Variáveis do Sistema | ERP | Sim | Sim | Sim | Não |
| Veículo Verificado | ERP | Sim | Sim | Sim | Não |
| Visitas | ERP | Sim | Sim | Sim | Não |
| Vistoriadores | ERP | Sim | Sim | Sim | Não |
| Vistorias | ERP | Sim | Sim | Sim | Não |
| Visualizações em Leilões | ERP | Sim | Sim | Sim | Sim |
| Webhooks | ERP | Sim | Sim | Sim | Sim |
| WhatsApp | ERP | Sim | Sim | Sim | Não |
| Youse Seguradora | ERP | Sim | Sim | Sim | Não |

## CRM

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| Assistente Virtual (Suporte) | CRM | Sim | Sim | Sim | Não |
| Atendimentos (caixa de entrada) | CRM | Sim | Sim | Sim | Não |
| Automações | CRM | Sim | Sim | Sim | Não |
| Base de Conhecimento | CRM | Sim | Sim | Sim | Não |
| Biblioteca de Mensagens | CRM | Sim | Sim | Sim | Não |
| Brand Kit | CRM | Sim | Sim | Sim | Não |
| Cadastro público (links) | CRM | Sim | Sim | Sim | Não |
| Calendário de posts | CRM | Sim | Sim | Sim | Não |
| Callcenter | CRM | Sim | Sim | Sim | Não |
| Campanhas | CRM | Sim | Sim | Sim | Sim |
| Campanhas Agendadas | CRM | Sim | Sim | Sim | Não |
| Campos dinâmicos | CRM | Sim | Sim | Sim | Não |
| Centro de notificações | CRM | Sim | Sim | Sim | Não |
| Chatbot / Agente IA | CRM | Sim | Sim | Sim | Não |
| Comentários (moderação) | CRM | Sim | Sim | Sim | Não |
| Comparar campanhas A vs B | CRM | Sim | Sim | Sim | Não |
| Configurar etapas do funil | CRM | Sim | Sim | Sim | Sim |
| Configurações do CRM | CRM | Sim | Sim | Sim | Não |
| Construtor de fluxos de bot | CRM | Sim | Sim | Sim | Não |
| Dashboard de BI | CRM | Sim | Sim | Sim | Não |
| Detalhe da automação | CRM | Sim | Sim | Sim | Não |
| Detalhe do negócio | CRM | Sim | Sim | Sim | Não |
| Detalhe do ticket | CRM | Sim | Sim | Sim | Não |
| Edições pendentes | CRM | Sim | Sim | Sim | Não |
| Entregas | CRM | Sim | Sim | Sim | Não |
| Estúdio de Artes / Design IA | CRM | Sim | Sim | Sim | Não |
| Eventos de Domínio | CRM | Sim | Sim | Sim | Não |
| Fluxo da automação | CRM | Sim | Sim | Sim | Não |
| Funil de Relacionamento | CRM | Sim | Sim | Sim | Não |
| Funis de Venda | CRM | Sim | Sim | Sim | Não |
| Gerador de Conteúdo | CRM | Sim | Sim | Sim | Não |
| Importar pessoas (CSV) | CRM | Sim | Sim | Sim | Não |
| Inbox omnichannel (DMs Meta) | CRM | Sim | Sim | Sim | Sim |
| Integrações externas | CRM | Sim | Sim | Sim | Sim |
| Início do CRM | CRM | Sim | Sim | Sim | Não |
| Kanban do funil | CRM | Sim | Sim | Sim | Não |
| Lead Scoring | CRM | Sim | Sim | Sim | Não |
| Leads do Site | CRM | Sim | Sim | Sim | Sim |
| Listas de contatos | CRM | Sim | Sim | Sim | Sim |
| Mensagens proativas | CRM | Sim | Sim | Sim | Não |
| Minhas entregas | CRM | Sim | Sim | Sim | Não |
| Métricas da campanha | CRM | Sim | Sim | Sim | Não |
| Negócios | CRM | Sim | Sim | Sim | Não |
| Painel de SLA | CRM | Sim | Sim | Sim | Não |
| Papéis de Pessoa | CRM | Sim | Sim | Sim | Não |
| Pedidos do Site | CRM | Sim | Sim | Sim | Sim |
| Relatórios do CRM | CRM | Sim | Sim | Sim | Não |
| Relatórios — Atendimento | CRM | Sim | Sim | Sim | Não |
| Remetentes | CRM | Sim | Sim | Sim | Não |
| Segmentos | CRM | Sim | Sim | Sim | Não |
| Supressão de e-mail | CRM | Sim | Sim | Sim | Não |
| Tags de Pessoa | CRM | Sim | Sim | Sim | Não |
| Tickets (chamados) | CRM | Sim | Sim | Sim | Não |
| Times de atendimento | CRM | Sim | Sim | Sim | Não |
| Verificação de negativado | CRM | Sim | Sim | Sim | Não |
| Widgets do site (chat) | CRM | Sim | Sim | Sim | Não |

## Marketing

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| Campanhas | Marketing | Sim | Sim | Sim | Não |
| Gerador de conteúdo | Marketing | Sim | Sim | Sim | Não |
| Listas de contatos | Marketing | Sim | Sim | Sim | Não |
| Nova campanha | Marketing | Sim | Sim | Sim | Não |
| Painel de Marketing | Marketing | Sim | Sim | Sim | Não |
| Remetentes | Marketing | Sim | Sim | Sim | Não |

## Sites

| Funcionalidade | Módulo | Existe no Sistema | Existe na Documentação | Completa? | Precisa Revisão? |
|---|---|---|---|---|---|
| Banners e Popups | Sites | Sim | Sim | Sim | Não |
| Categorias do blog | Sites | Sim | Sim | Sim | Não |
| Conteúdos | Sites | Sim | Sim | Sim | Sim |
| Menus | Sites | Sim | Sim | Sim | Não |
| Painel de Sites | Sites | Sim | Sim | Sim | Sim |
| Publicações do blog | Sites | Sim | Sim | Sim | Não |
| Páginas | Sites | Sim | Sim | Sim | Não |
| Sites | Sites | Sim | Sim | Sim | Sim |
| Webhooks | Sites | Sim | Sim | Sim | Não |

## Apêndice A — Divergências doc x sistema (Precisa Revisão = Sim)

Itens onde a documentação afirmava algo que o sistema não faz, ou onde front e backend divergem. Reverificar antes de publicar.

| Página | Módulo | Divergência |
|---|---|---|
| Integrações externas | CRM | Doc citava genéricos 'por exemplo Z-API, Amazon SES, Twilio, OpenAI, FCM' omitindo SendGrid e Zenvia que existem no código. |
| Pedidos do Site | CRM | Doc cita 'reprocessar/reprovisionar' como ação possível, mas o controller só expõe reenviar-credenciais (reprovisionar aparece como comentário/proxy, sem rota no controller auditado) — mantido tom de 'diagnosticar antes de reprocessar' sem prometer botão. |
| Inbox omnichannel (DMs Meta) | CRM | provider 'meta_graph' lido do IntegracaoConfig mas ausente de PROVIDERS_LABELS — logo a tela de Integrações não permite configurá-lo pela UI (inconsistência entre o hint do controller e a tela de config). |
| Campanhas | CRM | Doc afirmava canais 'SMS' e 'Voz' no seletor do wizard — o front só oferece E-mail, WhatsApp e multicanal (CANAIS const). SMS/Voz existem como enum no backend (Campanha) mas NÃO no assistente de criação. Doc inventava um 'Teste A/B' com variantes A e B — NÃO existe no wizard (nenhuma referência a A/B no CampanhaWizardModal). |
| Leads do Site | CRM | Doc afirmava que CADA lead 'abre automaticamente um Negócio' — o código (WebsiteLeadService) só cria o Negócio SE o funil 'Comercial SL' existir |
| Configurar etapas do funil | CRM | Doc afirmava que 'Descrição' é um campo da etapa, mas a entidade EtapaFunil NÃO tem campo descrição — o valor enviado pelo front é descartado silenciosamente Doc afirmava que reordenar por arraste persiste, mas o front envia 'ordering' e o serviço atualizarEtapa não lê 'ordem/ordering' — a reordenação aparenta não ser gravada |
| Listas de contatos | CRM | Campo 'Status' do inscrito (Ativo/Inativo/Bounced/Desinscrito) — NAO existe; ListaInscrito nao tem campo status e o front comenta isso explicitamente Acao 'Editar um inscrito' com icone de lapis — NAO existe; API so expoe list/create/delete de inscrito (sem PUT) |
| Estoque de Bens | ERP | O caminho de menu 'Bens → Estoque' não existe; a rota /patio/estoque também não aparece nos grupos do menu Pátio em AppLayout.vue (acessível por URL/deep-link/ACL). |
| Cadastros de Bens | ERP | Item de menu literal 'Bens → Cadastros' não existe; o menu mostra 'Cadastro Básico' (/cadastro), que é um hub diferente (CadastrosPage). |
| Registro do comitente | ERP | Aba Aprovação: o front passa o ID do COMITENTE para /api/comitentes/aprovar/{id}/{status} e /api/comitentes/pendenciasAprovacao/{id}, mas o backend resolve {id} como LOTE e LEILAO respectivamente (ParamConverter). Contrato front/back divergente — a aprovação via ficha do comitente provavelmente não funciona como esperado. Aba/ação Mensagem: o backend (enviaMensagem) deriva o comitente do USUARIO L |
| Gestão de Comitentes | ERP | ok-com-ressalvas |
| Templates de E-mail | ERP | Endpoint /api/templates/{id}/testar (envio de teste) NÃO existe no backend (App/TemplateController só tem POST/GET/PUT/PATCH/DELETE) — front usa helper otimista e cai em 'Funcionalidade em implementação' no 404. Endpoint /api/templates/import (importar Word/PDF) NÃO existe no backend — mesmo comportamento de fallback. findByCodigo no backend usa os campos 'codigo' e 'default=true' (não 'code'); de |
| Histórico de Envio de E-mail | ERP | Endpoint /api/op/log/{id}/reenviar NÃO existe no backend (LogController só tem /api/log/find, /app/log/find e /api/op/log). Reenvio é não-funcional server-side hoje — front mostra 'Funcionalidade em implementação' no 404. |
| Webhooks | ERP | Website/WebhookController só expõe GET list, GET show e DELETE (soft via setStatus CANCELADO). NÃO há rota POST (criar) nem PUT (atualizar) nem /historico — toda criação/edição cai em 'Funcionalidade em implementação'. A entity App/Entity/Website/Webhook NÃO possui os campos name, url, events, secret, headers descritos na UI/doc; ela é na prática uma fila interna de jobs (entityName, entityId, tar |
| Validade de Documentos | ERP | Doc dizia que excluir arquivo individual remove o arquivo: na verdade NÃO existe rota backend de delete de arquivo (só upload POST /api/validade-documento/{id}/arquivo e download); o front chama DELETE /.../arquivos/{arquivo} e degrada via .catch(()=>null) — exclusão é no-op silencioso Doc dizia 'A remoção é permanente' para excluir documento: na verdade é soft-delete (setDeleted(true)), o registr |
| Formulários | ERP | Excluir formulário: front chama DELETE /api/forms/{id} mas NÃO existe rota de delete em FormController (só topics e fields têm delete); operação falha no servidor e o formulário permanece Chave Público: existe na tela e é enviada no payload, mas a entidade Form não tem propriedade 'public' nem setter; FormType não faz ->add('public'); allow_extra_fields=true descarta silenciosamente — não é persis |
| Upload de imagens (Root) | ERP | Rotas /api/uploads/imagem (POST) e /api/uploads/imagens (GET) NÃO existem no backend; não há UploadController; RootController só tem clientes e disparar-campanha; front sempre cai no fallback 'Endpoint indisponível' (catch 404/500 -> unavailable:true) Limites de formato (JPG/PNG/GIF/WEBP/SVG/AVIF) e 20MB são apenas texto do front; não há validação backend pois o endpoint inexiste |
| Operações pendentes de aprovação | ERP | Doc afirmava (2x) que 'operação aprovada é executada pelo sistema imediatamente / roda na sequência sem ação adicional'. O código contradiz: aprovarPendente apenas seta aprovado=true e libera; comentário no controller diz que a execução ocorre quando o SOLICITANTE reenvia a requisição com autorizacaoId+autorizacaoCode (needApproval). Aprovar NÃO executa por si só. (Observação: até a mensagem de co |
| Importar extrato bancário | ERP | Doc dizia que se acessa por 'Financeiro → Importar extrato', mas NÃO existe aba na barra do módulo nem atalho no Dashboard; só rota direta /financeiro/importar-extrato (routes.js linha 14). Corrigido + marcado 'A confirmar com Tiago' para criar atalho. |
| iCarta Pro | ERP | A aba Histórico NÃO depende de 'recurso liberado': é empty-state permanente — a API V5 não registra histórico de consultas iCarta (confirmado no service: comentário explícito + sem rota). A doc sugeria que poderia haver registro quando liberado; reescrito para deixar claro que é placeholder. |
| Mapfre — Boletos | ERP | Doc afirmava categoricamente 'você já entra autenticado com seu usuário do ERP — não precisa fazer login de novo'. O código apenas passa ?usu=username no iframe (api-sc3.suporteleiloes.com.br/api/public/mapfre/adm/home); não é SSO garantido. Suavizado para 'em geral você não precisa fazer login de novo'. Doc descrevia o painel como 'serviço externo'; na verdade é um serviço da própria Suporte Leil |
| Histórico | ERP | Doc apresentava 'Baixar auditoria (PDF)' como funcional. O front chama /api/monitor/leiloes/{id}/logs?download=1, mas o controller ignora o parâmetro download e sempre retorna JSON — não existe geração de PDF no backend (método marcado '@TODO provisório'). Doc descreve colunas Data/Evento/Pessoa (description/userName/date). O backend hoje retorna apenas registros do tipo 'mensagemComitente' com ca |
| Transmissão ao Vivo | ERP | Iniciar/Parar stream: a doc apresentava como funcional. No código são stubs — POST /api/leiloes/:id/transmissao/start\|stop NÃO existem no backend; em caso de falha a UI só alterna o estado local e mostra 'Endpoint em implementação'. Espectadores: doc dizia 'quantidade de pessoas assistindo'. É um mock (ref(0)); não há endpoint de viewers no backend. Chat ao vivo: doc orientava a digitar e enviar  |
| Importação com análise | ERP | Os endpoints chamados pelo front (POST /api/leiloes/{id}/importar-planilha-analise e .../importar-planilha-confirmar, além de .../importar-planilha) NÃO existem no backend V5 (api-v2/src/Controller/Leilao/ImportacaoController.php só tem importarLotes e importacao/{idi}/executar). Feature parece front-pronto com backend pendente. Registrado como '> A confirmar' na doc, sem afirmar que funciona pont |
| Parceiros | ERP | Doc afirmava que a busca procura 'por nome ou e-mail'. O ParceiroRepository.findAllSimple só busca por a.id (código), p.name (nome) e p.document (CPF/CNPJ) — NÃO há busca por e-mail. Corrigido no texto. Doc descreve a exclusão como um fluxo funcional. NÃO existe rota DELETE em ParceiroController (apenas POST create, GET list, GET show, PUT/PATCH update) nem rota genérica de delete no Uloc BaseCont |
| Registro do parceiro | ERP | TODA a aba Acessos é especulativa: os endpoints GET/PATCH /api/parceiros/{id}/acessos, POST/DELETE .../api-key e POST .../painel/senha NÃO existem no backend. O próprio services/acessos.js e o ParceiroShowPage.vue documentam 'a serem criados no backend — veja TODO_BACKEND' e a UI cai em estado de erro 'Acessos indisponíveis'. A doc descrevia tudo (Redefinir senha, Gerar/Regenerar/Revogar API Key,  |
| PDA — Coletor de inventário | ERP | CRÍTICO: endpoints /api/pda/buscar-bem, /api/pda/conferir e /api/pda/sessao/{id}/relatorio consumidos pelo front (features/pda/services/index.js) não têm Controller correspondente na API V5 (api-v2/src/Controller) — não há PdaController. A funcionalidade de conferência de inventário não opera contra a API atual. Não existe endpoint/ação de 'fechar/finalizar' sessão de inventário no backend |
| Ficha da pessoa | ERP | Abas 'Visão geral / Documentos / Papéis / Configurações' descritas na doc NÃO existem no código (PessoaShowPage.vue tem RIGHT_TABS = observacoes/contatos/tarefas/ligar/comunicacao/arquivos/timeline) Link '✎ alterar status' no cabeçalho NÃO existe — não há handler de alterar status na ShowPage; status é exibido read-only no card CRM 'Mini-funil' com marcador 'M' e link 'ver no funil' descritos não  |
| Intimações | ERP | Entity ProdutividadeEtapaIntimacao NÃO possui campos 'assunto', 'descricao', 'processo', 'prazo' (booleano cumprida tampouco). Possui apenas: dataIntimacao, dataPrazo, dataResposta, observacao, produtividadeEtapa. Front (IntimacoesPage.vue) envia assunto/descricao/processo/etapa/prazo/cumprida; com allow_extra_fields=true, a maioria é silenciosamente descartada — inclusive 'etapa' (o form espera ' |
| Cartas Precatórias | ERP | CartaPrecatoria::serialize() e a entity NÃO expõem 'origem', 'destino', 'dataEnvio', 'dataRetorno'. O CartaPrecatoriaType também não adiciona esses campos. Front envia origem/destino/dataEnvio/dataRetorno (allow_extra_fields=true) mas nada disso é persistido; as colunas Origem/Destino/Envio na tabela mostram sempre traço (—). |
| Cartas precatórias do processo | ERP | Mesma divergência da tela geral: Origem/Destino/Data de envio/Data de retorno não são persistidos pela API (colunas exibem —). |
| Detalhe do projeto | ERP | Aba Dados lista Prazo (card Informações) e Departamento/Prioridade/Progresso (card Responsáveis) — esses campos não existem na entidade Project; os rótulos aparecem na tela mas sempre exibem '—'. Status no detalhe descrito como ciclo (Ativo/Inativo) — confirmado no front que o estado deriva apenas de active; não há campo status real. |
| Exportar Arrematantes | ERP | Doc prometia 'base completa de arrematantes' com filtros; o backend retorna setMaxResults(2) (hardcoded 2 registros) e ignora todos os filtros Filtro Comitente não é usado pelo backend Filtro Tempo mínimo (dias) não é usado pelo backend |
| Relatórios | ERP | Doc dizia 'escolhe no menu lateral' — não existe menu lateral; é galeria de cartões |
| Visualizações em Leilões | ERP | Confirmado no código (routes.js + RelatoriosIndex.vue): a rota relatorios.leiloes.visualizacoes mapeia para RelatoriosIndex.vue (Central). Não existe tela dedicada de Visualizações — a doc já tratava isso corretamente como 'em construção'. |
| Detalhe do pátio | ERP | Campo 'telefone' do pátio: a doc lista 'telefone' nos Dados, mas a entidade Patio, o PatioType e a serialização (loadApiRepresentation) NÃO têm telefone — sempre aparece em branco Campo 'observações' do pátio: idem — não existe na entidade/form/serialização; renderiza vazio Colunas Cargo/Telefone/E-mail dos Responsáveis: o endpoint GET /api/patios/{id}/responsaveis só retorna pessoa.name, pessoa.d |
| Financeiro de RH | ERP | Status 'Cancelado' documentado nao existe na pratica: statusMeta() do backend so retorna {1: Previsto, 2: Pago}. O 'Cancelado' e' apenas um fallback morto no front (STATUS = meta \|\| {0:Cancelado,1:Previsto,2:Pago}) que nunca aparece porque a API sempre fornece a meta. Corrigido em 3 lugares (filtro, coluna, dica). |
| Relatórios (RH) | ERP | Doc descrevia a coluna Status de Pagamentos com cores 'verde (concluído), amarelo (pendente), cinza (demais)'. O código só tem dois estados (Previsto/Pago): success/verde=Pago(status 2), warning/amarelo=Previsto(status 1). Não existe estado 'concluído', 'pendente' nem 'cinza' nesse relatório. CORRIGIDO. |
| Navegando pelo sistema | Primeiros Passos | Seção 'Busca' descrevia uma busca GLOBAL no topo ('encontrar telas, registros e termos rapidamente') que NÃO existe no shell (AppLayout não tem input de busca; só existe BemSearchModal, um picker escopado de bens). Seção reescrita para 'Encontrando registros' apontando para a busca/filtros de cada lista de módulo. |
| Conteúdos | Sites | 'Como acessar: Sites → Conteúdos' não existe na navegação — a tela não está linkada na sidebar (AppLayout não lista contents) |
| Sites | Sites | Caminho 'Sites → Website → Sites' não existe; no setor Sites o item é só 'Sites' |
| Painel de Sites | Sites | Doc citava 'limpeza de cache' como item do feed de atividade — esse tipo não é gerado pelo backend. |

## Apêndice B — Documentado mas ausente no sistema (faltaNoSistema)

| Página | Módulo | Observação |
|---|---|---|
| PDA — Coletor de inventário | ERP | Não avisava que o backend de inventário (/api/pda/buscar-bem, /api/pda/conferir, /api/pda/sessao/{id}/relatorio) NÃO existe na API V5 — telas são shell de front Não explicava que 'Finalizar inventário' e 'Relatório' abrem o MESMO relatório (não há fechamento formal de sessão) Não dizia que a lista 'Últimos conferidos' e o contador são voláteis (in-memory, perdidos ao recarregar) Não havia seção de |

## Apêndice C — Lacunas de documentação (faltaNaDoc) por módulo

Contagem de itens que existiam no sistema e faltavam na doc (a maioria já corrigida na auditoria, conforme `correcoesAplicadas`).

| Módulo | Páginas | Itens faltaNaDoc | Itens parciais |
|---|---|---|---|
| Primeiros Passos | 3 | 5 | 4 |
| Geral (raiz) | 1 | 3 | 1 |
| ERP | 206 | 593 | 202 |
| CRM | 56 | 166 | 40 |
| Marketing | 6 | 24 | 7 |
| Sites | 9 | 20 | 8 |
