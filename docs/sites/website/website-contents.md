---
title: Conteúdos
sidebar_position: 4
---

# Conteúdos

Esta tela gerencia os **conteúdos do site** — blocos de página com título, endereço (URL) e conteúdo em HTML/texto. É muito parecida com a tela de [Páginas](./website-paginas.md): a diferença é que o conteúdo aqui é editado em uma caixa de texto simples (HTML/texto do template).

## Como acessar

Esta tela não tem um item próprio no menu lateral; ela compartilha o mesmo cadastro de [Páginas](./website-paginas.md) (mesmo armazenamento por trás). Na prática, use **Sites** → **Páginas** para o dia a dia. A tela de Conteúdos existe para quando você precisa **colar/editar HTML diretamente**, em vez do editor de texto rico das Páginas.

> Como Páginas e Conteúdos gravam no mesmo lugar, um registro criado por aqui pode aparecer na listagem de Páginas e vice-versa. Escolha a tela pelo tipo de edição que prefere (HTML cru aqui; editor rico em Páginas).

![Conteúdos](/img/manual/sites/website-contents.png)

## O que você vê nesta tela

Um campo de busca no topo e a tabela com os conteúdos cadastrados.

| Coluna | O que é |
|---|---|
| # | Número de identificação do conteúdo. |
| Título | Título do conteúdo (com a descrição logo abaixo, quando houver). |
| Nome da página | Código curto que identifica o conteúdo internamente. |
| URL | Endereço (slug) do conteúdo. |

Use o campo **Buscar conteúdo...** para filtrar por título.

## O que dá pra fazer aqui

### Cadastrar um novo conteúdo

1. Clique em **Novo conteúdo** no topo.
2. Preencha **Nome (código curto) da página** (obrigatório) — identificador interno, ex.: `leilao`, `cadastro`, `sobre-nos`.
3. Preencha o **Título da página** (obrigatório, mínimo de 3 caracteres).
4. Preencha a **Descrição da página** (opcional).
5. Informe a **URL (slug)** (opcional — se ficar em branco, o sistema gera um a partir do título).
6. Em **Herdar layout do site**, escolha **Sim** ou **Não**.
7. Escreva o **Conteúdo do template** na caixa de texto (aceita HTML/texto).
8. Clique em **Cadastrar**.

![Cadastro de conteúdo](/img/manual/sites/website-contents-novo.png)

### Editar um conteúdo

1. Dê duplo clique na linha ou clique no ícone de **lápis**.
2. Ajuste os campos e clique em **Atualizar**.

### Excluir um conteúdo

1. Clique no ícone de **lixeira** na linha.
2. Confirme. **A exclusão é permanente.**

## Dicas e observações

- **Campos obrigatórios** para salvar: Nome (código curto), Título (mínimo 3 caracteres) e Conteúdo do template. Descrição e URL são **opcionais**.
- Diferente da tela de **Páginas** (que tem editor rico com upload de imagem), aqui o conteúdo é digitado como **HTML/texto** em uma caixa simples.
- Conteúdos e Páginas compartilham o mesmo formato de cadastro; use Conteúdos quando precisar colar/editar HTML diretamente.

## Veja também

- [Páginas](./website-paginas.md)
- [Menus](./website-menus.md)
