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
