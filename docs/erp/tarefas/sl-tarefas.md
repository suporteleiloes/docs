---
title: Tarefas (lista)
sidebar_position: 1
---

# Tarefas (lista)

A tela de Tarefas é onde você cadastra e acompanha tudo que precisa demandar para o seu time ou para o suporte da Suporte Leilões. Cada tarefa tem responsáveis, prazo, prioridade, status e histórico. Esta é a visão em lista, com filtros, busca e ações em lote.

## Como acessar

**ERP** → **Tarefas** (item de menu lateral).

Você também chega aqui pelo menu do seu avatar (atalho **Minhas tarefas**) ou clicando em **Ver em lista** dentro do [Quadro Kanban](./sl-tarefas-board.md).

![Tarefas (lista)](/img/manual/erp/sl-tarefas.png)

## O que você vê nesta tela

No topo ficam três **vistas rápidas** (atalhos de um clique), as **abas** principais, os **filtros por período** e, logo abaixo, a tabela de tarefas.

### Vistas rápidas

| Vista | O que mostra |
|---|---|
| Para mim | Tarefas em que você é responsável e que estão **Para fazer** |
| Vence hoje | Tarefas ativas com prazo para hoje |
| Atrasadas | Tarefas ativas que já passaram do prazo |

### Abas

| Aba | O que mostra |
|---|---|
| Ativos | Todas as tarefas em andamento (abertas, pendentes, em progresso, em homologação) |
| Para mim | Tarefas ativas em que você é um dos responsáveis |
| Criadas por mim | Tarefas que você cadastrou (você é o proprietário) |
| Concluídas/Fechadas | Tarefas concluídas, canceladas ou recusadas |

A aba ativa mostra um contador com o total de tarefas ao lado do nome.

### Filtros por período

Botões rápidos que ajustam o prazo: **Para fazer**, **Vencido**, **Hoje**, **Amanhã**, **Esta semana**, **Próxima semana**.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| (caixa de seleção) | Marca a tarefa para ações em lote |
| (barra colorida) | Cor da prioridade da tarefa |
| # | Número (ID) da tarefa |
| Título | Título da tarefa e um trecho da descrição |
| Tipo | Tipo da tarefa (ex.: Providência) |
| Registro | Data em que a tarefa foi criada |
| Cliente | Cliente vinculado (oculta por padrão) |
| Processo | Processo vinculado (oculta por padrão) |
| Prazo | Data de entrega, com etiqueta humanizada ("Amanhã", "em 3 dias", "2 dias atrasados") |
| Responsáveis | Avatares de quem é responsável |
| Progresso | Barra de andamento da tarefa |
| Status | Situação atual (ex.: Aberto, Pendente, Concluído) |

A lista vem sempre ordenada das mais recentes para as mais antigas.

## O que dá pra fazer aqui

### Buscar e filtrar

- **Busca**: digite no campo de busca por título ou descrição e pressione Enter.
- **Filtro por responsáveis**: clique em **Responsáveis** e selecione as pessoas. Quando há pessoas selecionadas, aparece um seletor **Responsável | Proprietário** para escolher o papel da pessoa na tarefa.
- **Filtros avançados** (no desktop, abaixo da barra de busca): **ID da tarefa**, **Data (De)** e **Data (Até)**, **Filtro por data** (Criação, Início ou Prazo), **Prioridade**, **Tipo** (várias de uma vez) e **Status** (vários de uma vez).
- **Mais filtros**: o botão **Mais filtros** abre Tribunal, Comarca, Vara e prioridades adicionais.
- Os filtros ativos aparecem como **etiquetas (chips)** logo acima da tabela. Clique no **x** de cada etiqueta para removê-la.
- Para zerar tudo, clique em **Limpar filtros**.

### Cadastrar uma nova tarefa

1. Clique em **Nova tarefa** (canto superior direito; no celular, use o botão flutuante **+**).
2. Preencha o **Título** (obrigatório).
3. Ajuste **Status**, **Tipo** (obrigatório) e **Prioridade** — já vêm com valores padrão.
4. Opcionalmente preencha **Fila**, **Projeto**, **Autor**, **Progresso**, **Etiquetas**, **Cliente**, **Processo**, **datas** e **Responsáveis**.
5. Clique em **Criar tarefa**. A tarefa aparece no topo da lista.

O formulário de cadastro é o mesmo descrito na página [Detalhe da tarefa](./tasks-id.md).

### Abrir uma tarefa

- Clique duas vezes na linha, ou
- Clique no menu **três pontinhos** ao final da linha e escolha **Abrir**.

### Excluir uma tarefa

1. No menu **três pontinhos** da linha, clique em **Excluir**.
2. Confirme na janela. A exclusão é permanente.

### Ações em lote

1. Marque as caixas de seleção das tarefas desejadas (ou o seletor de cabeçalho para marcar todas as da página).
2. Use a barra que aparece no topo da lista:
   - **Atribuir a...** — define um responsável para todas as selecionadas.
   - **Mudar status** — aplica um status.
   - **Mudar prioridade** — aplica uma prioridade.
   - **Mover para fila** — move para uma fila cadastrada.
   - **Excluir selecionadas** — remove todas (pede confirmação).
3. Use **Limpar seleção** para desmarcar.

### Configurar as colunas

1. Clique em **Colunas** (no cabeçalho).
2. Marque/desmarque as colunas que quer ver.
3. Clique em **Salvar**, ou em **Restaurar padrão** para voltar à configuração original.

Essa configuração vale só para o seu usuário e fica salva neste navegador.

## Dicas e observações

- As tarefas atualizam em tempo real: quando alguém cria, edita ou move uma tarefa, sua lista se atualiza sozinha.
- A configuração de colunas é pessoal e por navegador — em outro computador ela não aparece.
- Cliente e Processo vêm ocultos por padrão; ative-os em **Colunas** se precisar.

## Veja também

- [Quadro Kanban](./sl-tarefas-board.md)
- [Configurações de Tarefas](./sl-tarefas-config.md)
- [Detalhe da tarefa](./tasks-id.md)
- [Avisos automáticos e relatório semanal](./tarefas-avisos.md)
- [Atividades e Agenda (CRM)](../../crm/crm-atividades.md)
