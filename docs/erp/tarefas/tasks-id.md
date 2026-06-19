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

![Detalhe da tarefa](/img/manual/erp/tasks-id.png)

## O que você vê nesta tela

### Barra superior

Mostra a identificação e as ações da tarefa:

| Elemento | O que é |
|---|---|
| Tarefas | Botão para voltar à lista |
| # e badges | Número, status e prioridade da tarefa |
| Título | Título da tarefa |
| Cronômetro | Inicia/para o registro do seu tempo trabalhado |
| Seguir / Seguindo | Liga ou desliga as notificações desta tarefa para você |
| Concluir / Reabrir | Fecha a tarefa ou reabre uma já fechada |
| (lixeira) | Exclui a tarefa |

Logo abaixo, uma linha de informações mostra quem criou a tarefa e quando, a barra de progresso e etiquetas de prazo ("Amanhã", "Atrasada há 3 dias", "Concluída em ...").

### Abas

| Aba | Conteúdo |
|---|---|
| Descrição | Texto completo da tarefa |
| Detalhes | Campos editáveis: Tipo, Status, Prioridade, mais Progresso, horas, datas |
| Comentários | Conversa e histórico, com menção a pessoas (@) |
| Anexos | Arquivos da tarefa |
| Histórico | Linha do tempo completa de tudo que aconteceu na tarefa |

### Painel lateral (à direita)

- **Responsáveis**: quem é responsável pela tarefa, com botão **+** para adicionar.
- **Pessoas**: Autor, Atribuído e número de Seguidores.
- **Vínculos**: Cliente, Processo, Projeto, Fila e Entidade vinculada.
- **Bens**: bens (lotes/ativos) vinculados à tarefa, com busca para vincular novos.
- **Subtarefas**: tarefas-filhas desta tarefa (com contador de concluídas) e, quando esta for filha de outra, o link para a tarefa-pai.
- **Checklist**: lista de subitens marcáveis, com contador de concluídos.
- **Tags**: etiquetas da tarefa (quando houver).

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

Clique em **Seguir** para receber acompanhamento das atualizações. O botão passa a mostrar **Seguindo**; clique de novo para deixar de seguir.

### Gerenciar responsáveis

- **Adicionar**: clique no **+** ao lado de "Responsáveis", no painel lateral, e escolha a pessoa.
- **Remover**: clique no **x** ao lado do nome da pessoa e confirme.

Cada responsável pode marcar que **concluiu a sua parte** — isso ajuda a calcular o progresso da tarefa.

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

### Comentar

1. Abra a aba **Comentários**.
2. Escreva sua mensagem (use **@** para mencionar uma pessoa).
3. Envie. O comentário entra na conversa e fica no histórico.

### Anexar e baixar arquivos

1. Abra a aba **Anexos** e clique em **Anexar arquivo** (ou arraste o arquivo para qualquer lugar da tela).
2. Para baixar, clique no nome do arquivo ou no ícone de download.
3. Para remover, clique na **lixeira** do arquivo e confirme.

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
