---
title: Categorias do blog
sidebar_position: 6
---

# Categorias do blog

Esta tela gerencia as **categorias do blog** — os grupos usados para organizar as publicações (ex.: "Investimentos", "Dicas", "Novidades"). Cada publicação pode ser associada a uma categoria na tela de [Publicações](./website-blog-posts.md).

## Como acessar

**Sites** → **Blog** → **Categorias**

![Categorias do blog](/img/manual/sites/website-blog-categorias.png)

## O que você vê nesta tela

Um campo de busca no topo e a tabela com as categorias.

| Coluna | O que é |
|---|---|
| # | Número de identificação da categoria. |
| Nome | Nome da categoria. |
| Ativo | **Ativa** ou **Inativa** — só as ativas aparecem no site. |

Use o campo **Buscar categoria...** para filtrar.

## O que dá pra fazer aqui

### Cadastrar uma nova categoria

1. Clique em **Nova categoria** no topo.
2. Preencha o **Nome** (obrigatório) — ex.: "Investimentos", "Dicas".
3. Preencha a **Descrição** (opcional).
4. Em **Ativa**, escolha **Sim** ou **Não**.
5. Clique em **Cadastrar**.

![Cadastro de categoria](/img/manual/sites/website-blog-categorias-novo.png)

### Editar uma categoria

1. Dê duplo clique na linha ou clique no ícone de **lápis**.
2. Ajuste os campos e clique em **Atualizar**.

### Excluir (desativar) uma categoria

1. Clique no ícone de **lixeira** na linha.
2. Confirme. A categoria **não é apagada do banco** — ela é apenas marcada como **inativa** (status "Inativa") e deixa de aparecer no site. Continua na lista do ERP e pode ser reativada depois, editando-a e mudando **Ativa** para **Sim**.

## Regras de negócio

- **Nome é o único campo obrigatório.** Descrição é opcional; o campo **Ativa** já vem como **Sim** ao criar.
- **Não existe exclusão definitiva pela tela**: a "lixeira" desativa (igual a editar e marcar Ativa = Não). Isso preserva o vínculo com publicações antigas que usavam a categoria.
- **Só categorias ativas aparecem no site.** As inativas seguem visíveis no ERP, com o status "Inativa".
- **Permissões**: criar, editar e desativar exigem as permissões de Categoria do blog. Sem elas, a ação é recusada.

## Impactos

- A categoria aparece no **select de categoria** ao criar/editar uma [publicação](./website-blog-posts.md).
- Desativar uma categoria **não apaga** as publicações ligadas a ela; apenas a categoria some das listagens do site.

## Dicas e observações

- Cadastre as categorias **antes** de criar publicações — elas aparecem no select de categoria do post.
- Não há, nesta versão, configuração de **categoria-pai / subcategorias** pela tela, mesmo que o sistema suporte hierarquia internamente.

## Veja também

- [Publicações do blog](./website-blog-posts.md)
