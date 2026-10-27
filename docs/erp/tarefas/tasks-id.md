---
title: Detalhe da tarefa
sidebar_position: 4
---

# Detalhe da tarefa

Esta é a tela de uma tarefa específica. Aqui você lê a descrição, acompanha o progresso, conversa com os envolvidos, anexa arquivos, registra o tempo trabalhado e altera status, prioridade, prazo e responsáveis.

## Como acessar

Abra qualquer tarefa a partir de:

- [Tarefas (lista)](./sl-tarefas.md): duplo clique na linha ou menu **três pontinhos** → **Abrir**.
- [Quadro Kanban](./sl-tarefas-board.md): clique no cartão.

![Detalhe da tarefa](/img/manual/erp/tarefas/tarefa-detalhe.jpg)

## O que você vê nesta tela

### Barra superior

| Elemento | O que é |
|---|---|
| ← Tarefas | Volta para a lista |
| # e badges | Número, status e prioridade da tarefa |
| Título | Título da tarefa |
| Cronômetro | Inicia/para o registro do seu tempo trabalhado |
| Copiar link (ícone de corrente) | Copia o endereço da tarefa (**Shift+L**) |
| Editar | Abre a janela de edição (**Shift+E**) |
| Seguir / Seguindo | Liga ou desliga as notificações desta tarefa para você |
| Concluir / Reabrir | Fecha a tarefa ou reabre uma já fechada (**Shift+C**) |
| (lixeira) | Exclui a tarefa (**Shift+Delete**) |

Logo abaixo aparecem quem criou a tarefa e quando, a barra de progresso e a etiqueta de prazo ("em 3 dias", "Atrasada há 2 dias", "Concluída em …").

### Abas

| Aba | Conteúdo |
|---|---|
| Comentários | Descrição da tarefa e a área **Conversa e histórico**, com subtarefas e checklist |
| Anexos | Descrição e a lista de arquivos da tarefa |
| Histórico | Linha do tempo completa de tudo o que aconteceu na tarefa |

A **Descrição** mantém a formatação (negrito, listas, links). O botão **Editar** do card altera a descrição sem perder a formatação.

### Painel lateral (à direita)

- **Propriedades**: Status, Tipo, Prioridade e Progresso (clique para alterar), além de Início, Prazo e Esforço.
- **Responsáveis**: quem é responsável, com as **horas trabalhadas** de cada um. Clique na seta ao lado do nome para ver horas, progresso e as ações **Entregar parte**, **Ver pessoa** e **Remover alocação**. O **+** adiciona um responsável.
- **Pessoas**: **Autor**, **Atribuído** e **Seguidores** (quem acompanha a tarefa).
- **Vínculos**: **Cliente / Pessoa** e **Processo**, cada um com o link **Abrir ↗**, além de **Projeto** e **Fila**.
- **Bens**: bens vinculados à tarefa, com busca para vincular novos.

## O que dá pra fazer aqui

### Alterar tipo, status ou prioridade

1. Abra a aba **Detalhes**.
2. Clique na etiqueta de **Tipo**, **Status** ou **Prioridade**.
3. Escolha o novo valor na lista. A alteração é salva na hora.

### Registrar o tempo trabalhado (cronômetro)

1. Clique no botão de **play** (cronômetro) na barra superior para começar a contar.
2. Trabalhe na tarefa — o tempo corre na tela.
3. Clique em **parar** para encerrar. As horas trabalhadas são somadas automaticamente.

Para usar o cronômetro você precisa ser **responsável** pela tarefa (estar na lista de Responsáveis ou ser a pessoa atribuída). Quem não é responsável não consegue apontar tempo — adicione-se como responsável primeiro.

O cronômetro fica indisponível em tarefas já fechadas.

### Concluir ou reabrir

- Clique em **Concluir** para fechar a tarefa.
- Em uma tarefa fechada, clique em **Reabrir** para voltar a trabalhar nela.

### Seguir a tarefa

Clique em **Seguir** para receber acompanhamento das atualizações. O botão passa a mostrar **Seguindo**; clique de novo para deixar de seguir. Todos os seguidores aparecem em **Pessoas → Seguidores**, no painel lateral.

### Gerenciar responsáveis

- **Adicionar**: clique no **+** ao lado de "Responsáveis", no painel lateral, e escolha a pessoa.
- **Ver horas e progresso**: clique na seta ao lado do nome. Aparecem as **Horas trabalhadas** e o **Progresso** daquela pessoa.
- **Entregar parte**: quando a pessoa terminar a parte dela, clique em **Entregar parte**. Para desfazer, use **Reabrir parte**.
- **Remover alocação**: tira a pessoa da tarefa (pede confirmação).

As partes entregues entram no cálculo do progresso da tarefa.

### Checklist (subitens da tarefa)

Use a **Checklist**, no painel lateral, para quebrar a tarefa em pequenos passos marcáveis.

1. Digite no campo **Novo item do checklist...** e clique no **+** (ou pressione Enter).
2. Marque a **caixa de seleção** de um item para dá-lo como concluído (o texto fica riscado).
3. Para remover um item, clique no **✕** ao lado dele.

O contador ao lado do título (ex.: **2/5**) mostra quantos itens já foram concluídos.

### Subtarefas

Tarefas grandes podem ser divididas em **subtarefas** (tarefas-filhas), no painel lateral.

1. Digite no campo **Nova subtarefa...** e clique no **+**.
2. A subtarefa herda **tipo**, **projeto** e **cliente** da tarefa-pai e aparece na lista, com o seu percentual de progresso.
3. Clique no título de uma subtarefa para abri-la.
4. Quando você está dentro de uma subtarefa, o painel mostra **Subtarefa de #…** com o link para voltar à tarefa-pai.

O contador (ex.: **1/3**) mostra quantas subtarefas já foram concluídas.

### Vincular um bem

Na seção **Bens** do painel lateral você liga a tarefa a um ou mais bens (lotes/ativos).

1. No campo **Buscar bem para vincular...**, digite parte da descrição ou o número do bem.
2. Clique no bem desejado na lista de resultados — ele é vinculado na hora.
3. Para desvincular, clique no **✕** ao lado de **Bem #…**.

### Comentar e filtrar o histórico

1. Na aba **Comentários**, escreva sua mensagem em **Conversa e histórico** (use **@** para mencionar uma pessoa e **#** para citar outra tarefa).
2. Clique em **Enviar** (ou **Ctrl+Enter**).
3. Use os filtros abaixo da caixa para ver só uma parte da conversa — cada filtro mostra quantos itens tem:

| Filtro | O que mostra |
|---|---|
| Tudo | Comentários, trabalho e ações. |
| Comentários | Só as mensagens. |
| Trabalho | Apontamentos de horas. |
| Ações | Criação, mudanças de status, seguidores etc. |

### Anexar e baixar arquivos

![Anexos da tarefa](/img/manual/erp/tarefas/tarefa-anexos.jpg)

1. Abra a aba **Anexos** e clique em **Anexar arquivos** — você pode escolher **vários arquivos de uma vez** — ou arraste os arquivos para a tela.
2. Cada arquivo mostra uma **barra de progresso** do envio. Se algum falhar, clique em **Tentar de novo**.
3. Clique no arquivo para **pré-visualizar** (imagens e PDFs abrem na própria tela) ou use o ícone de download para baixar.
4. Para remover, clique na **lixeira** do arquivo e confirme.

### Copiar o link da tarefa

Clique no ícone de corrente na barra superior (ou **Shift+L**). O endereço da tarefa vai para a área de transferência, pronto para colar num e-mail ou mensagem.

### Excluir a tarefa

Clique no ícone de **lixeira** na barra superior e confirme. A exclusão é permanente e leva você de volta à lista.

## Cadastrar e editar pela janela de tarefa

Tanto na lista quanto no quadro, o botão **Nova tarefa** (e o **Editar**) abre uma janela com o formulário completo:

1. **Título** (obrigatório) e **Descrição**.
2. **Status**, **Tipo** (obrigatório) e **Prioridade** — já vêm preenchidos com padrões.
3. **Fila**, **Projeto** e **Autor**.
4. **Progresso** (controle deslizante de 0 a 100%) e **Etiquetas**.
5. **Cliente** e **Processo** (busca por nome/número).
6. **Esforço total (hh:mm)** — no modo edição, é salvo automaticamente enquanto você digita. **Tempo trabalhado** é calculado pelo sistema (somente leitura).
7. **Início previsto** e **Data de entrega** (com aviso de prazo relativo, ex.: "em 3 dias").
8. **Responsáveis** — use o **+** para adicionar.
9. Em modo edição, ainda há **Anexos**, **Seguir** e o painel de **comentários e histórico**.
10. Clique em **Criar tarefa** ou **Salvar alterações**.

## Atalhos de teclado

| Atalho | O que faz |
|---|---|
| Shift+E | Editar a tarefa |
| Shift+C | Concluir (ou reabrir, se estiver fechada) |
| Shift+Delete | Excluir a tarefa |
| Shift+L | Copiar o link da tarefa |

## Dicas e observações

- A tarefa atualiza em tempo real: se outra pessoa mexer nela, sua tela acompanha sozinha.
- **Tempo trabalhado** não é editável — ele vem do cronômetro e dos apontamentos de trabalho.
- Os **vínculos** (Cliente, Processo, Bem, Leilão, Lote) ligam a tarefa a outros cadastros do sistema; quando há link, o vínculo abre o registro correspondente.
- O **Tipo** é obrigatório ao criar — sem ele a tarefa não é salva.

## Veja também

- [Tarefas (lista)](./sl-tarefas.md)
- [Quadro Kanban](./sl-tarefas-board.md)
- [Configurações de Tarefas](./sl-tarefas-config.md)
- [Avisos automáticos e relatório semanal](./tarefas-avisos.md)
