---
title: Configurações de Tarefas
sidebar_position: 3
---

# Configurações de Tarefas

Aqui você cadastra os itens auxiliares que organizam o módulo de Tarefas: **Prioridades**, **Status**, **Tipos** e **Filas**. São esses valores que aparecem nos seletores ao criar uma tarefa e que viram as colunas do Quadro Kanban.

## Como acessar

**ERP** → **Tarefas** → ícone de **engrenagem** (Configurações) no cabeçalho da lista.

![Configurações de Tarefas — Status](/img/manual/erp/tarefas/config-status.jpg)

## O que você vê nesta tela

A tela tem quatro abas. No celular, elas viram um sanfonado (abrir/fechar). Cada aba mostra uma tabela com os itens cadastrados e um botão **Novo**.

| Aba | Para que serve | Colunas |
|---|---|---|
| Prioridades | Níveis de urgência das tarefas (com cor) | #, Nome, Cor, Ordem |
| Status | Situações da tarefa; viram as colunas do Kanban | #, Nome, Código, Descrição, Aparência, Situação, Ordem |
| Tipos | Categorias da tarefa (ex.: Providência) | #, Nome, Código, Descrição, Interno |
| Filas | Filas de atendimento, com nível de prioridade | #, Nome, Prioridade |

## O que dá pra fazer aqui

### Cadastrar um novo item

1. Selecione a aba desejada (Prioridades, Status, Tipos ou Filas).
2. Clique em **Novo**.
3. Preencha os campos da janela (variam por aba — veja abaixo).
4. Clique em **Criar**.

Campos por aba:

- **Prioridades**: **Nome** (obrigatório), **Cor** e **Ordem** (menor número = mais urgente).
- **Status**: **Nome** (obrigatório), **Código** (obrigatório — ex.: `open`, `pending`, `completed`), **Descrição**, **Cor do texto**, **Cor de fundo**, **Situação da tarefa neste status** (**Aberta** — conta como ativa — ou **Fechada**) e **Ordem**. A **Pré-visualização** mostra como a etiqueta vai ficar.
- **Tipos**: **Nome** (obrigatório), **Código** (opcional, único), **Descrição** e **Interno** (tipos internos não aparecem para clientes nem no portal).

![Novo status](/img/manual/erp/tarefas/config-status-novo.jpg)

![Tipos de tarefa](/img/manual/erp/tarefas/config-tipos.jpg)
- **Filas**: **Nome** (obrigatório) e **Prioridade** (0 = normal, 1 = média, 2 = alta, 99 = crítica).

Para escolher a cor, use o seletor de cores ou digite o código hexadecimal (ex.: `#1A4DB3`).

### Editar um item

1. Clique no ícone de **lápis** na linha do item.
2. Altere os campos.
3. Clique em **Salvar**.

### Excluir um item

1. Clique no ícone de **lixeira** na linha do item.
2. Confirme.

O efeito depende da aba:

- **Prioridades, Status e Tipos**: o item é **desativado** (não some das tarefas que já o usam; apenas deixa de aparecer nos seletores de novas tarefas). Não é uma exclusão definitiva.
- **Filas**: a fila é **removida** — mas só se nenhuma tarefa estiver vinculada a ela. Se houver tarefas na fila, o sistema bloqueia e pede que você as mova para outra fila antes (veja a dica abaixo).

## Configurações gerais do módulo

Além destes cadastros, o comportamento do módulo é configurado em **Configurações** → **Configurações Globais** → **Tarefas** → aba **Básico**:

![Configurações globais de Tarefas](/img/manual/erp/tarefas/config-globais-tarefas.jpg)

| Configuração | Opções |
|---|---|
| Padrão de listagem das tarefas | **Normal, listando todas as tarefas ativas** (padrão) · **Listar somente tarefas do dia e vencidas** · **Listar somente tarefas do dia e vencidas do usuário logado** |
| Mostrar abas | Liga/desliga as abas **Para mim** e **Criadas por mim** da lista. |
| Criação de Tarefa | **Tornar obrigatória a seleção de um responsável**, **de cliente** e/ou **de processo**. |

Clique em **Salvar configurações**. As regras valem para a lista e para o cadastro de tarefas de todos os usuários.

:::warning
Com **seleção de responsável obrigatória** ligada, ninguém consegue salvar uma tarefa sem pelo menos um responsável — o sistema avisa "Responsável obrigatório".
:::

## Tarefas automáticas por tipo de bem

Você pode cadastrar **modelos de tarefas** que o sistema cria sozinho para cada bem novo, conforme o tipo do bem (ex.: toda vez que entrar um veículo, criar "Vistoria de entrada" com prazo de 2 dias).

**Como acessar:** **Configurações** → **Configurações Globais** → **Bem** → aba **Tarefas / Providências** → **Gerenciar tarefas/providências**.

![Configurações do Bem — Tarefas / Providências](/img/manual/erp/tarefas/config-bens-tarefas.jpg)

![Tarefas automáticas para novos bens](/img/manual/erp/tarefas/tarefas-automaticas-bem.jpg)

1. Clique em **Nova tarefa padrão**.
2. Informe a **Tarefa** (título) e, se quiser, a **Descrição**.
3. Marque os **Tipo(s) de bem** — a tarefa é criada no bem conforme o tipo (marcar o tipo pai inclui os filhos).
4. Informe o **Prazo (dias)**, o **Tipo da tarefa** e, opcionalmente, o **Responsável**.
5. Marque **Impeditivo** se a tarefa precisa ser concluída antes de o bem seguir para venda.
6. Deixe **Ativo** ligado e clique em **Salvar**.

![Nova tarefa automática](/img/manual/erp/tarefas/tarefas-automaticas-bem-novo.jpg)

Ao cadastrar um bem (ou ao clicar em **Gerar tarefas** na ficha do bem), o sistema cria uma tarefa para cada modelo **ativo** cujo tipo corresponda ao do bem. O prazo é contado em dias a partir da geração. As tarefas aparecem na aba **Tarefas** da ficha do bem.

## Dicas e observações

- O campo **Código** dos status é importante: certos códigos (`completed`, `canceled`, `recused`) marcam transições finais e pedem confirmação ao mover no Kanban.
- A **Ordem** controla a sequência em que prioridades e status aparecem nas listas e colunas.
- Excluir uma **Fila** só funciona se ela não tiver tarefas vinculadas. Se a exclusão falhar com aviso de "tarefas relacionadas", mova as tarefas para outra fila (use **Mover para fila** nas ações em lote da lista) e tente de novo.
- Em **Prioridades, Status e Tipos**, "excluir" é na verdade desativar: as tarefas antigas continuam mostrando o valor, ele só não fica mais disponível para escolher em tarefas novas.
- Trocar de aba fecha qualquer janela de edição aberta.

## Veja também

- [Tarefas (lista)](./sl-tarefas.md)
- [Quadro Kanban](./sl-tarefas-board.md)
- [Detalhe da tarefa](./tasks-id.md)
- [Avisos automáticos e relatório semanal](./tarefas-avisos.md)
