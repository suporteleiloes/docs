---
title: Planos
sidebar_position: 2
---

# Planos

A tela de **Planos** é onde você define pacotes de cobrança recorrente — por exemplo, um plano mensal ou anual oferecido aos seus clientes. Cada plano tem um valor e uma periodicidade, e pode estar vinculado a um produto do catálogo. Os planos são modelos de cobrança recorrente reaproveitados pelo módulo de **Assinaturas**.

## Como acessar
**ERP** → **Catálogo** → **Planos**.

![Planos](/img/manual/erp/catalogo-planos.png)

## O que você vê nesta tela

No topo há um campo de busca e, abaixo, a lista de planos cadastrados. A lista mostra **apenas planos ativos**.

> Observação: o campo de busca está presente nesta tela, mas atualmente **não filtra** a lista de planos — ela é exibida por completo independentemente do que for digitado. Para encontrar um plano, percorra a lista (ela costuma ser curta).

**Colunas da lista:**

| Coluna | O que é |
|---|---|
| Plano | Nome do plano. |
| Produto | Nome do produto vinculado ao plano. Mostra `—` quando não há produto vinculado. |
| Valor | O valor do plano, em reais. |
| Periodicidade | Com que frequência o plano é cobrado: **Mensal** (1 mês), **Trimestral** (3 meses), **Semestral** (6 meses) ou **Anual** (12 meses). |

No fim de cada linha há os botões de **Editar** (✎) e **Remover** (⨯).

## O que dá pra fazer aqui

- Cadastrar um novo plano.
- Editar um plano existente.
- Remover um plano.
- Buscar na lista.

### Cadastrar um novo plano

1. Clique em **+ Novo plano** (canto superior direito).
2. Preencha o **Nome do plano** (obrigatório). Ex.: *Plano Premium*.
3. Selecione o **Produto vinculado** (opcional). As opções vêm da tela de [Produtos](catalogo-produtos.md). Escolha *— Sem produto —* se não quiser vincular.
4. Informe o **Valor** (obrigatório, em reais, formato `0,00`). O valor precisa ser **maior que zero**.
5. Escolha a **Periodicidade**: Mensal, Trimestral, Semestral ou Anual.
6. Preencha a **Descrição** (opcional) com detalhes do plano.
7. Clique em **Salvar**. O plano passa a aparecer na lista.

![Novo plano](/img/manual/erp/catalogo-planos-novo.png)

### Editar um plano

1. Localize o plano na lista (use a busca, se necessário).
2. Clique no botão **Editar** (✎) na linha do plano.
3. Ajuste os campos desejados.
4. Clique em **Salvar**.

### Remover um plano

1. Clique no botão **Remover** (⨯) na linha do plano.
2. Confirme na janela **Remover plano?** clicando em **Remover**.

> A remoção é um **arquivamento** (exclusão lógica): o plano deixa de aparecer na lista, mas o registro é preservado internamente. Não há, nesta tela, opção para reexibir um plano removido.

## Regras de negócio

- **Nome obrigatório.** Sem nome, o botão **Salvar** fica desabilitado e o cadastro é recusado.
- **Valor maior que zero.** O valor é obrigatório e precisa ser maior que zero. Se deixar zerado ou em branco, o sistema avisa ("Informe um valor maior que zero") e não salva.
- **Produto opcional.** O vínculo com um produto é opcional; é possível criar planos sem produto.
- **Periodicidade em meses.** Os valores possíveis são Mensal (1), Trimestral (3), Semestral (6) e Anual (12), alinhados ao módulo de Assinaturas.
- **Status.** Todo plano é criado **Ativo** e a lista exibe apenas ativos. A remoção é o que torna o plano inativo.
- **Se o produto vinculado for removido**, o plano permanece, apenas sem produto associado (passa a mostrar `—` na coluna Produto).
- **Permissões.** Listar, criar, editar e remover são controladas por permissão (`catalogo/plano/*`).

## Dicas e observações

- O vínculo com um produto é **opcional**. Você pode criar planos sem produto associado.
- Os produtos disponíveis para vincular vêm da tela [Produtos](catalogo-produtos.md). Cadastre o produto antes, se ele ainda não existir.

## Veja também
- [Produtos](catalogo-produtos.md)
- [Unidades de medida](catalogo-unidades.md)
