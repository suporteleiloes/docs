---
title: Configurações de Tarefas
sidebar_position: 3
---

# Configurações de Tarefas

Aqui você cadastra os itens auxiliares que organizam o módulo de Tarefas: **Prioridades**, **Status**, **Tipos** e **Filas**. São esses valores que aparecem nos seletores ao criar uma tarefa e que viram as colunas do Quadro Kanban.

## Como acessar

**ERP** → **Tarefas** → ícone de **engrenagem** (Configurações) no cabeçalho da lista.

![Configurações de Tarefas](/img/manual/erp/sl-tarefas-config.png)

## O que você vê nesta tela

A tela tem quatro abas. No celular, elas viram um sanfonado (abrir/fechar). Cada aba mostra uma tabela com os itens cadastrados e um botão **Novo**.

| Aba | Para que serve | Colunas |
|---|---|---|
| Prioridades | Níveis de urgência das tarefas (com cor) | #, Nome, Cor, Ordem |
| Status | Situações da tarefa; viram as colunas do Kanban | #, Nome, Código, Cor, Ordem |
| Tipos | Categorias da tarefa (ex.: Providência) | #, Nome, Cor |
| Filas | Filas de atendimento, com nível de prioridade | #, Nome, Prioridade |

## O que dá pra fazer aqui

### Cadastrar um novo item

1. Selecione a aba desejada (Prioridades, Status, Tipos ou Filas).
2. Clique em **Novo**.
3. Preencha os campos da janela (variam por aba — veja abaixo).
4. Clique em **Criar**.

Campos por aba:

- **Prioridades**: **Nome** (obrigatório), **Cor** e **Ordem** (menor número = mais urgente).
- **Status**: **Nome** (obrigatório), **Código** (obrigatório — ex.: `open`, `pending`, `completed`), **Cor** e **Ordem**.
- **Tipos**: **Nome** (obrigatório) e **Cor**.
- **Filas**: **Nome** (obrigatório) e **Prioridade** (0 = normal, 1 = média, 2 = alta, 99 = crítica).

Para escolher a cor, use o seletor de cores ou digite o código hexadecimal (ex.: `#1A4DB3`).

### Editar um item

1. Clique no ícone de **lápis** na linha do item.
2. Altere os campos.
3. Clique em **Salvar**.

### Excluir um item

1. Clique no ícone de **lixeira** na linha do item.
2. Confirme. A remoção é permanente.

## Dicas e observações

- O campo **Código** dos status é importante: certos códigos (`completed`, `canceled`, `recused`) marcam transições finais e pedem confirmação ao mover no Kanban.
- A **Ordem** controla a sequência em que prioridades e status aparecem nas listas e colunas.
- Se a exclusão falhar, normalmente é porque o item ainda está **em uso** por alguma tarefa. Reatribua as tarefas antes de excluir.
- Trocar de aba fecha qualquer janela de edição aberta.

## Veja também

- [Tarefas (lista)](./sl-tarefas.md)
- [Quadro Kanban](./sl-tarefas-board.md)
- [Detalhe da tarefa](./tasks-id.md)
