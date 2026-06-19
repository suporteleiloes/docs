---
title: Páginas
sidebar_position: 3
---

# Páginas

Esta tela gerencia as **páginas do site** — conteúdos fixos como "Sobre nós", "Como participar", "Contato", etc. Cada página tem um título, um endereço (URL) e um conteúdo que você escreve em um editor de texto rico.

## Como acessar

**Sites** → **Páginas**

> Páginas e [Conteúdos](./website-contents.md) gravam no mesmo lugar (são o mesmo cadastro por trás). A diferença está só no editor: **Páginas** usa um editor de texto rico (com upload de imagem); **Conteúdos** usa uma caixa de HTML/texto simples. Uma página criada aqui pode aparecer na listagem de Conteúdos e vice-versa.

![Páginas](/img/manual/sites/website-paginas.png)

## O que você vê nesta tela

Um campo de busca no topo e a tabela com as páginas cadastradas.

| Coluna | O que é |
|---|---|
| # | Número de identificação da página. |
| Título | Título da página (com a descrição logo abaixo, quando houver). |
| Nome da página | Código curto que identifica a página internamente (ex.: `sobre-nos`). |
| URL | Endereço (slug) onde a página fica acessível. |

Use o campo **Buscar página...** para filtrar por título.

## O que dá pra fazer aqui

### Cadastrar uma nova página

1. Clique em **Nova página** no topo.
2. Preencha **Nome (código curto) da página** (obrigatório) — identificador interno, ex.: `leilao`, `cadastro`, `sobre-nos`.
3. Preencha o **Título da página** (obrigatório, mínimo de 3 caracteres) — ex.: "Sobre nós".
4. Preencha a **Descrição da página** (opcional) — ex.: "Conheça um pouco sobre nossa empresa". Aparece como subtítulo na listagem.
5. Informe a **URL (slug)** — opcional; o trecho do endereço, ex.: `sobre-nos`. Se deixar em branco, o sistema gera um slug a partir do título.
6. Em **Herdar layout do site**, escolha **Sim** para a página usar o cabeçalho/rodapé do site, ou **Não** para uma página sem o layout padrão.
7. Escreva o **Conteúdo do template** no editor. Você pode formatar o texto e **inserir imagens** diretamente no editor.
8. Clique em **Cadastrar**.

![Cadastro de página](/img/manual/sites/website-paginas-novo.png)

### Editar uma página

1. Dê duplo clique na linha ou clique no ícone de **lápis**.
2. Ajuste os campos e o conteúdo e clique em **Atualizar**.

### Excluir uma página

1. Clique no ícone de **lixeira** na linha.
2. Confirme. **A exclusão é permanente.**

## Dicas e observações

- **Campos obrigatórios** para salvar: Nome (código curto), Título (mínimo 3 caracteres) e Conteúdo do template. O botão **Cadastrar/Atualizar** só fica habilitado quando esses três estão preenchidos. Descrição e URL (slug) são **opcionais**.
- O **Nome (código curto)** é o identificador da página — escolha algo simples e sem espaços (ex.: `sobre-nos`). É por ele que o site público localiza a página.
- O editor de conteúdo permite **enviar imagens** que ficam embutidas na página (upload via editor de texto rico).
- Para **publicar a página no site**, aponte um item de [Menu](./website-menus.md) ou um link interno para a URL dela. Criar a página aqui apenas a deixa disponível; ela não aparece sozinha na navegação do site.

## Veja também

- [Conteúdos](./website-contents.md)
- [Menus](./website-menus.md)
- [Painel de Sites](./sites-dashboard.md)
