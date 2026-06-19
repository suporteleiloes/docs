---
title: Processos
sidebar_position: 1
---

# Processos

A tela de **Processos** é a central de acompanhamento processual da leiloeira. Ela reúne todos os processos judiciais que o robô monitora (e os que você cadastra manualmente), mostrando a última publicação de cada um, a comarca, o responsável e a situação. É aqui que você pesquisa, filtra, acompanha movimentações e mantém a carteira de processos organizada.

## Como acessar

**ERP** → **Processos** → aba **Processos**.

A área de Processos tem uma barra de abas no topo: **Processos** (esta tela), **Cadastrar Processo**, **Leilões Próximos**, **Oportunidades** e **Cadastros Auxiliares**.

![Gestão de Processos](/img/manual/erp/processo.png)

## O que você vê nesta tela

No topo, o título **Gestão de Processos** com dois botões: **Mais filtros** e **Cadastrar processo**. Abaixo, um bloco de filtros principais, a paginação e a tabela de processos.

### Filtros principais (sempre visíveis)

| Filtro | O que é |
|---|---|
| Pesquisa inteligente | Busca por texto livre (número, conteúdo de publicação, partes etc.). A lista atualiza sozinha enquanto você digita. |
| Status | Filtra pela situação do processo no robô. Cada opção mostra entre parênteses quantos processos estão naquele status. |
| Sistema | Filtra pelo sistema de origem da publicação: **PJe**, **eProc**, **eSAJ** ou **Projudi**. Mostra a contagem ao lado. |
| Estado (UF) | Filtra pela unidade da federação, com a contagem por estado. |
| Data | Filtra pela data de publicação. |

Use **Filtrar** para aplicar e **Limpar** para zerar os filtros principais.

### Filtros avançados (botão Mais filtros)

Ao clicar em **Mais filtros**, abre um painel extra. O número ao lado do botão indica quantos filtros avançados estão ativos.

| Campo | O que é |
|---|---|
| Número do processo | Busca pelo número no padrão CNJ. |
| Partes | Nome de uma das partes do processo. |
| Cliente | Nome ou ID do cliente vinculado. |
| Responsável | Nome ou ID do responsável pelas notificações. |
| Tribunal → Comarca → Vara | Selects encadeados: escolha o tribunal para liberar as comarcas, e a comarca para liberar as varas. |
| Tipo de processo | **Eletrônico** ou **Físico**. |
| Status do processo | Situação cadastrada (entidade de status). |
| Tipo de data / De / Até | Define o período e sobre qual data ele se aplica: **Publicação**, **Registro** ou **Leilão**. |

No painel avançado você tem **Limpar** (zera os avançados), **Fechar** (recolhe o painel) e **Aplicar** (filtra e fecha).

### Colunas da tabela

Algumas colunas vêm ocultas por padrão e podem ser exibidas pelo seletor de colunas da tabela.

| Coluna | O que é |
|---|---|
| Número | Número do processo no padrão CNJ. |
| Nº Antigo | Número antigo (oculta por padrão; só aparece quando existe). |
| Últ. Mov. | Data (e hora) da última movimentação. |
| Data Publicação | Data da última publicação. Um ícone de ampulheta indica que o processo está aguardando o robô. |
| Conteúdo Publicação | Trecho da última publicação, com as palavras-chave destacadas em vermelho. |
| Comarca | Cidade/UF da comarca. |
| Vara | Nome da vara (oculta por padrão). |
| Cliente | Cliente vinculado (oculta por padrão). |
| Responsável | Pessoa responsável pelas notificações, com avatar. Mostra "— sem responsável" quando vazio. |
| Juízo | Nome do juízo (oculta por padrão). |
| Classificação | Classificação do processo (oculta por padrão). |
| Situação | Etiqueta de status, clicável para trocar. |
| Tipo | **Eletrônico** ou **Físico**. |
| Sistema | Sistema de origem (PJe, eProc, eSAJ, Projudi), só para processos eletrônicos. |

## O que dá pra fazer aqui

- **Pesquisar e filtrar** processos pelos filtros principais e avançados.
- **Abrir um processo**: dê **duplo clique** na linha para ver o detalhe completo.
- **Alterar a situação** de um processo direto na lista.
- **Cadastrar processo** pelo botão no topo.
- **Excluir** um processo (individualmente ou em massa).
- **Exportar** os processos selecionados para CSV.
- **Paginar**: escolha 20, 50, 100 ou 200 linhas por página.

### Alterar a situação de um processo

1. Na coluna **Situação**, clique na etiqueta de status do processo.
2. No menu que abre, escolha a nova situação.
3. O status é atualizado na hora e o sistema confirma com uma mensagem.

### Excluir um processo

1. Na linha do processo, clique no ícone de lixeira (à direita).
2. Confirme na janela **Excluir processo?**.
3. O processo é removido e a lista se atualiza.

### Excluir ou exportar em massa

1. Marque as caixas de seleção das linhas desejadas.
2. Na barra de ações em massa, escolha:
   - **Exportar**: gera um arquivo CSV com os processos selecionados.
   - **Excluir**: remove todos os selecionados (ação irreversível) — confirme na janela.

### Cadastrar um processo

1. Clique em **Cadastrar processo** (ou no atalho **Shift+N**).
2. Você é levado à aba [Cadastrar Processo](./novo.md).

## Regras de negócio

- O acesso à lista e às ações (alterar situação, excluir, exportar) depende das permissões do seu perfil. Sem a permissão de listar processos, a tela não carrega; sem a de excluir, a lixeira fica indisponível.
- A **exclusão** é lógica (soft-delete): o processo sai da lista, mas o histórico continua preservado no sistema. Ainda assim é tratada como **irreversível** pela operação — confirme antes.
- As contagens entre parênteses nos filtros (Status, Sistema, Estado) refletem o total atual de processos em cada categoria, recalculado conforme os demais filtros aplicados.

## Erros comuns

- **A lista não atualiza ao filtrar** — alguns filtros avançados só são aplicados ao clicar em **Aplicar** (no painel) ou **Filtrar** (filtros principais). A Pesquisa inteligente, essa sim, filtra enquanto você digita.
- **Não acho um processo que cadastrei** — confira se algum filtro de Status, Sistema ou Estado está ativo (o número ao lado de **Mais filtros** indica filtros avançados ligados). Use **Ctrl+Shift+R** para limpar tudo.

## Dicas e observações

- **Atalhos de teclado**: **Shift+N** abre o cadastro de processo; **Shift+Enter** foca a busca e pesquisa; **Ctrl+Shift+R** limpa todos os filtros.
- As palavras-chave do processo (e termos comuns de leilão, como "leilão", "hasta pública", "penhora", "arrematação") são destacadas em vermelho no trecho da publicação.
- O ícone de ampulheta na **Data Publicação** indica que o robô ainda vai processar aquele item.
- Os selects **Tribunal → Comarca → Vara** dos filtros avançados são encadeados: trocar o tribunal limpa a comarca e a vara.

## Veja também

- [Cadastrar Processo](./novo.md)
- [Leilões Próximos](./produtividade.md)
- [Oportunidades](./oportunidades.md)
- [Configuração do robô](./configuracao-robo.md)
- [Cadastros Auxiliares](./cadastros.md)
