---
title: Projetos de Suporte
sidebar_position: 11
---

# Projetos de Suporte

Tela onde a gerência organiza o trabalho de suporte em **projetos**. Cada projeto agrupa tarefas (chamados, demandas, implantações) e tem um líder responsável e, opcionalmente, um cliente associado. É a estrutura que dá origem às [Tarefas de Suporte](./console-tarefas.md).

## Como acessar

**Console** → **Suporte** → **Projetos** (rota `/console/suporte/projetos`).

![Projetos de Suporte](/img/manual/_interno/console-suporte-projetos.png)

## O que você vê nesta tela

No topo, o título **Projetos** e o botão **Novo projeto**. Abaixo, um campo de busca e a tabela de projetos.

| Coluna | O que é |
|---|---|
| **#** | Número (ID) do projeto. |
| **Nome** | Nome do projeto e, abaixo, a **chave** (code) quando houver. |
| **Tipo** | Categoria do projeto (definida pelos tipos cadastrados). |
| **Líder** | Pessoa responsável pelo projeto, com avatar. |
| **Cliente** | Cliente vinculado ao projeto, quando houver. |
| **Abertas** | Quantidade de tarefas em aberto. |
| **Fechadas** | Quantidade de tarefas já concluídas. |
| **Visibilidade** | **Visível** (todos os usuários veem) ou **Privado** (só membros). Mostra **Público** quando o projeto aceita solicitações externas, e **Desativado** quando inativo. |

Use **Buscar por nome, chave...** para filtrar. No rodapé você ajusta itens por página (20, 50 ou 100) e navega entre páginas.

## O que dá pra fazer aqui

### Cadastrar um novo projeto

1. Clique em **Novo projeto**.
2. Preencha o **Nome** (obrigatório).
3. Informe a **Chave (code)** se quiser um código curto de referência (ex.: "SUP").
4. Escolha o **Tipo** (obrigatório). Se aparecer o aviso de que nenhum tipo está cadastrado, cadastre um tipo de projeto antes de continuar.
5. Defina a **Visibilidade**: "Visível para todos usuários" ou "Privado (somente membros)".
6. Defina a **Situação**: Ativo ou Desativado.
7. Ative **Projeto público (aceita solicitações externas)** se o projeto deve receber pedidos de fora.
8. Opcionalmente, escreva uma **Descrição**.
9. Clique em **Criar**. O botão só fica habilitado com nome e tipo preenchidos.

![Novo projeto](/img/manual/_interno/console-suporte-projetos-novo.png)

### Editar um projeto

1. Clique no ícone de **lápis** (Editar) na linha do projeto.
2. Ajuste os campos no mesmo formulário.
3. Clique em **Salvar**.

### Excluir um projeto

1. Clique no ícone de **lixeira** (Excluir) na linha do projeto.
2. Confirme na janela que aparece.

Atenção: a exclusão **não pode ser desfeita**.

## Dicas e observações

- O **Tipo** é obrigatório e vem de uma lista de tipos de projeto. Se a lista estiver vazia, você não consegue criar projetos até cadastrar ao menos um tipo.
- A **chave (code)** facilita referenciar o projeto em conversas e relatórios; é opcional, mas recomendada.
- Use **Desativado** para arquivar um projeto sem apagar seu histórico de tarefas.
- Esta é uma tela interna (Console da gerência).

## Veja também

- [Tarefas de Suporte](./console-tarefas.md)
- [Clientes](./console-clientes.md)
