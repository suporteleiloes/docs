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

> Por padrão, a lista mostra **apenas produtos ativos**. Produtos inativos não aparecem nesta tela.

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

> A remoção é um **arquivamento** (exclusão lógica): o produto deixa de aparecer na lista e é marcado como inativo, mas o registro é preservado internamente para não quebrar referências antigas (por exemplo, planos que já o usaram). Não há, nesta tela, opção para reexibir um produto removido.

## Regras de negócio

- **Nome obrigatório.** É o único campo exigido. Sem nome, o botão **Salvar** fica desabilitado e o sistema recusa o cadastro.
- **Tipo define o estoque.** Apenas itens do tipo **Produto** podem ter controle de estoque. Ao escolher (ou mudar para) **Serviço**, o **Controla estoque** é desligado automaticamente e o **Estoque mínimo** é descartado.
- **Estoque mínimo só é guardado com controle ligado.** Se você preencher o estoque mínimo e depois desligar **Controla estoque** (ou trocar para Serviço), o valor não é salvo.
- **Status.** Todo produto é criado **Ativo**. A lista exibe apenas ativos por padrão. A remoção é o que torna o produto inativo — não há um botão separado para ativar/inativar nesta tela.
- **Permissões.** Listar, criar, editar e remover são ações controladas por permissão (`catalogo/produto/*`). Um usuário sem a permissão correspondente não enxerga o botão ou recebe erro de acesso negado.

## Erros comuns

- **"Nome é obrigatório".** Você tentou salvar sem preencher o nome. Preencha o campo **Nome**.
- **Custo ou preço somem ao salvar.** Deixar esses campos em branco é permitido — eles ficam como "não informado" (`—` na lista). Não é erro.
- **Estoque mínimo não foi salvo.** Verifique se **Controla estoque** estava ligado no momento de salvar; com ele desligado, o estoque mínimo é ignorado.

## Dicas e observações

- A separação entre **Produto** e **Serviço** muda o comportamento: somente produtos podem ter controle de estoque.
- As unidades de medida disponíveis no cadastro vêm da tela [Unidades de medida](catalogo-unidades.md).
- Produtos cadastrados aqui podem ser vinculados a [Planos](catalogo-planos.md).
- Se você remover uma [unidade de medida](catalogo-unidades.md) que estava em uso, os produtos que a usavam ficam **sem unidade** (`—`); o produto em si não é afetado.

## Veja também
- [Planos](catalogo-planos.md)
- [Unidades de medida](catalogo-unidades.md)
