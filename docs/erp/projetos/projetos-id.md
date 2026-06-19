---
title: Detalhe do projeto
sidebar_position: 6
---

# Detalhe do projeto

A tela de **detalhe do projeto** reúne tudo sobre um projeto específico: seus dados, os membros da equipe, as tarefas, as filas de trabalho e a base de conhecimento. É aqui que você acompanha e gerencia o dia a dia de um projeto.

## Como acessar

**ERP** → **Projetos** → clique em qualquer **cartão de projeto** na lista.

![Detalhe do projeto](/img/manual/erp/projetos-id.png)

## O que você vê nesta tela

No topo, o nome do projeto, o selo de situação (Ativo / Inativo) e uma barra de **abas**. Use o botão **Projetos** (canto superior esquerdo) para voltar à lista.

| Aba | O que mostra |
|---|---|
| Dados | Informações gerais e responsáveis do projeto. |
| Membros | Pessoas que participam do projeto, com o papel de cada uma. O número entre parênteses é a contagem de membros. |
| Tarefas | A lista completa de tarefas do projeto. O número é a contagem de tarefas. |
| Filas | Organização das tarefas em filas fixas e dinâmicas. |
| Conhecimento | Atalho para a base de conhecimento compartilhada. |

Se o projeto não existir ou tiver sido removido, a tela mostra "Projeto não encontrado" com um botão para voltar.

### Aba Dados

Dividida em cartões. O cartão **Informações** traz: Nome, Código, Tipo, Status (Ativo/Inativo), Visibilidade (Visível a usuários ou Apenas membros), Criado em, Atualizado e Prazo. O cartão **Responsáveis** traz: Autor, Responsável, Cliente, Departamento, Prioridade e Progresso. Quando há descrição, ela aparece em um cartão próprio abaixo.

> Os campos **Prazo, Departamento, Prioridade e Progresso** aparecem na tela como rótulos, mas o projeto ainda não armazena esses dados — por isso costumam exibir "—". O **Status** mostrado aqui não é um ciclo de etapas: ele reflete apenas a chave **Ativo/Inativo** do projeto.

### Aba Membros

Cada membro aparece em um cartão com inicial, nome, e-mail e o **papel** atribuído (ou "Sem papel"). Um botão remove o membro do projeto.

### Aba Filas

Tela em duas colunas. À esquerda, a lista de filas:

| Fila fixa | O que mostra |
|---|---|
| Abertas | Tarefas em aberto, pendentes, em andamento ou em homologação. |
| Atribuídas a mim | Tarefas designadas a você. |
| Sem atribuição | Tarefas sem responsável. |
| Vencidas | Tarefas com prazo vencido. |
| Concluídas | Tarefas concluídas, canceladas ou recusadas. |

Abaixo das fixas ficam as **filas dinâmicas** (exclusivas deste projeto). À direita, a lista de tarefas da fila selecionada, com responsável, prazo e status. Clicar em uma tarefa abre o detalhe dela.

## O que dá pra fazer aqui

- Navegar entre **Dados**, **Membros**, **Tarefas**, **Filas** e **Conhecimento**.
- **Adicionar** e **remover** membros, atribuindo um papel a cada um.
- **Criar, renomear e excluir** filas exclusivas do projeto.
- Acompanhar e abrir as **tarefas** do projeto.
- Abrir a **base de conhecimento** compartilhada.

### Adicionar um membro

1. Vá para a aba **Membros** e clique em **Adicionar membro**.
2. Em **Pessoa**, busque e selecione quem entrará no projeto (obrigatório).
3. Em **Papel**, escolha um papel cadastrado (ou deixe "Sem papel").
4. Opcional: expanda **Permissões individuais** para conceder permissões extras a essa pessoa, além das do papel.
5. Clique em **Adicionar**.

![Adicionar membro](/img/manual/erp/projetos-id-membro.png)

> Se a pessoa ainda não tiver login no sistema, um acesso é criado automaticamente (com perfil de suporte). As credenciais (usuário e senha) aparecem **uma única vez** numa janela — anote e repasse com segurança, pois a senha não será exibida novamente. O sistema também dispara uma **notificação de convite** ao membro.

> Uma mesma pessoa **não pode ser adicionada duas vezes** ao mesmo projeto — o sistema avisa se ela já for membro.

### Remover um membro

1. Na aba **Membros**, clique no **X** no cartão da pessoa.
2. O membro é removido do projeto.

### Criar uma fila exclusiva do projeto

1. Vá para a aba **Filas**.
2. No campo **Nova fila...** (parte inferior da coluna esquerda), digite o nome.
3. Clique no botão **+** (ou pressione Enter). A fila aparece em "Filas dinâmicas".

### Renomear ou excluir uma fila do projeto

1. Passe o mouse sobre a fila dinâmica.
2. Clique no **lápis** para renomear (edite o nome e pressione Enter), ou no **X** para excluir.
3. A exclusão pede confirmação.

## Dicas e observações

- Os **papéis** do seletor são gerenciados em [Papéis](./projetos-papeis.md). As **permissões individuais** somam-se às do papel.
- O **status** mostrado no topo reflete se o projeto está **Ativo** ou **Inativo**.
- A **base de conhecimento** é única por leiloeiro e compartilhada entre projetos e atendimento; o botão da aba Conhecimento leva à central de conhecimento do CRM.
- As **filas fixas** são pré-definidas e não podem ser editadas; só as **filas dinâmicas** que você cria podem ser renomeadas ou excluídas.

## Veja também

- [Projetos](./projetos.md)
- [Papéis (grupos de membros)](./projetos-papeis.md)
- [Filas de Tarefas](./projetos-filas.md)
- [Equipe e Custos](./projetos-equipe.md)
