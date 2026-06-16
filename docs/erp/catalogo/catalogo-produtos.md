---
title: Produtos
sidebar_position: 1
---

# Produtos

A tela de **Produtos** é o seu catálogo de itens e serviços cobráveis. É aqui que você cadastra tudo que a leiloeira vende ou cobra — desde produtos físicos (com controle de estoque, se quiser) até serviços. Esses produtos são reaproveitados em outras partes do sistema, como na montagem de **Planos**.

## Como acessar
**ERP** → **Catálogo** → **Produtos**.

![Produtos](/img/manual/erp/catalogo-produtos.png)

## O que você vê nesta tela

No topo há uma barra de filtros e, abaixo, a lista de produtos cadastrados em formato de tabela com paginação.

**Filtros:**

| Filtro | O que faz |
|---|---|
| Busca | Campo de texto para buscar por **nome** ou **código** do produto. |
| Tipo | Lista suspensa para filtrar por **Produto**, **Serviço** ou **Todos os tipos**. |

**Colunas da lista:**

| Coluna | O que é |
|---|---|
| Produto | Nome do item. Abaixo do nome aparecem o **código** (se houver) e uma etiqueta indicando o **tipo** (Produto ou Serviço). |
| Tipo | Se é **Produto** ou **Serviço**. |
| Unidade | A sigla da unidade de medida vinculada (ex.: `kg`, `un`). Mostra `—` quando não há. |
| Custo | O custo do item, em reais. Mostra `—` quando não informado. |
| Preço | O preço de venda, em reais. Mostra `—` quando não informado. |
| Estoque | Mostra a etiqueta **controla** quando o produto tem controle de estoque ativado; senão `—`. |
| Status | **Ativo** ou **Inativo**. |

No fim de cada linha há os botões de **Editar** (✎) e **Remover** (⨯).

A lista é paginada. Você pode escolher exibir **20, 50 ou 100** itens por página.

## O que dá pra fazer aqui

- Cadastrar um novo produto ou serviço.
- Editar um produto existente.
- Remover um produto.
- Buscar e filtrar a lista.

### Cadastrar um novo produto ou serviço

1. Clique em **+ Novo produto** (canto superior direito).
2. Em **Tipo**, escolha **Produto** ou **Serviço**.
3. Preencha o **Código** (opcional) — um identificador interno do item.
4. Preencha o **Nome** (obrigatório) — nome do produto ou serviço.
5. Selecione a **Unidade de medida** (opcional). As opções vêm da tela de [Unidades de medida](catalogo-unidades.md). Se não houver a unidade desejada, cadastre-a primeiro.
6. Preencha o **NCM** (opcional), quando aplicável.
7. Informe o **Custo** e o **Preço**, em reais (campos opcionais, formato `0,00`).
8. Se for um **Produto** e você quiser controlar estoque, ative **Controla estoque**. Ao ativar, aparece o campo **Estoque mínimo**, onde você define a quantidade mínima desejada.
9. Preencha a **Descrição** (opcional) com detalhes adicionais.
10. Clique em **Salvar**. O produto passa a aparecer na lista.

![Novo produto](/img/manual/erp/catalogo-produtos-novo.png)

> O campo **Controla estoque** só aparece para itens do tipo **Produto**. Ao mudar o tipo para **Serviço**, o controle de estoque é desligado automaticamente — serviço não controla estoque.

### Editar um produto

1. Localize o produto na lista (use a busca ou o filtro de tipo, se necessário).
2. Clique no botão **Editar** (✎) na linha do produto.
3. Ajuste os campos desejados.
4. Clique em **Salvar**.

### Remover um produto

1. Clique no botão **Remover** (⨯) na linha do produto.
2. Confirme na janela **Remover produto?** clicando em **Remover**.

> A remoção é uma ação destrutiva. Confirme apenas se tiver certeza.

## Dicas e observações

- O **Nome** é o único campo obrigatório no cadastro. Sem ele, o botão Salvar fica desabilitado.
- A separação entre **Produto** e **Serviço** muda o comportamento: somente produtos podem ter controle de estoque.
- As unidades de medida disponíveis no cadastro vêm da tela [Unidades de medida](catalogo-unidades.md).
- Produtos cadastrados aqui podem ser vinculados a [Planos](catalogo-planos.md).

## Veja também
- [Planos](catalogo-planos.md)
- [Unidades de medida](catalogo-unidades.md)
