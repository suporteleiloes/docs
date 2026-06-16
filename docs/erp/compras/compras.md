---
title: Compras
sidebar_position: 1
---

# Compras

A tela de **Compras** é onde você registra e acompanha tudo o que a leiloeira compra de fornecedores — produtos, materiais e serviços. Cada compra passa por etapas (da solicitação até o recebimento) e, quando recebida, gera automaticamente as contas a pagar no financeiro e a entrada de estoque.

## Como acessar

**ERP** → **Suprimentos** → **Compras**.

![Lista de compras](/img/manual/erp/compras.png)

## O que você vê nesta tela

No topo há a barra de filtros e o botão **+ Nova Compra**. Logo abaixo, a lista de compras já registradas.

### Filtros

| Filtro | O que é |
|---|---|
| Campo de busca | Busca por **fornecedor**, **descrição** ou **código de referência**. Digite parte do texto e a lista se atualiza. |
| Situação | Filtra por etapa da compra. Comece em **Todas as situações** ou escolha uma específica (Solicitação, Em cotação, Aprovada, Pedido, Recebida, Cancelada). |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Data | Data da compra. |
| Fornecedor | Nome do fornecedor. Aparece **— Sem fornecedor —** quando a compra foi registrada sem um. |
| Cód. ref. | Código de referência informado na compra (número da nota, pedido do fornecedor etc.). Mostra **—** quando vazio. |
| Situação | Etapa atual da compra, em forma de etiqueta colorida (veja a tabela de situações abaixo). |
| Forma de pagamento | **À vista** ou **Parcelado**. Quando parcelado, mostra também o número de parcelas (ex.: "Parcelado · 3x"). |
| Valor | Valor total líquido da compra. |

### Situações de uma compra

| Situação | O que significa |
|---|---|
| Solicitação | Compra recém-criada, ainda não aprovada. |
| Em cotação | Em fase de cotação com fornecedores. |
| Aprovada | Compra aprovada, pronta para virar pedido/ser recebida. |
| Pedido | Pedido feito ao fornecedor, aguardando a entrega. |
| Recebida | Compra concluída — gerou contas a pagar e entrada de estoque. |
| Cancelada | Compra cancelada. |

## O que dá pra fazer aqui

- **Buscar e filtrar** compras pelos campos de busca e situação.
- **Abrir uma compra**: clique em qualquer linha da lista para ver os detalhes da compra.
- **Cadastrar uma nova compra** pelo botão **+ Nova Compra**.
- **Paginar**: use os controles de página no rodapé da lista e ajuste quantas linhas exibir por página (20, 50 ou 100).

### Cadastrar uma nova compra

1. Clique em **+ Nova Compra**. Abre a janela **Nova compra de produto**.
2. Em **Fornecedor**, digite o nome e selecione o fornecedor na lista. É opcional, mas recomendado.
3. Preencha o **Código de referência** (opcional — número da nota ou pedido do fornecedor).
4. Escolha a **Categoria** (categoria de movimentação financeira) e o **Depósito (estoque)** que receberá os produtos.
5. Confira a **Data da compra** (já vem preenchida com a data de hoje; ajuste se precisar).
6. Em **Itens da compra**, preencha cada linha:
   - **Produto / Serviço**: busque e selecione um produto do catálogo, **ou**
   - **Detalhes do item**: digite uma descrição livre (útil para itens sem cadastro).
   - **Qtd.**: a quantidade.
   - **Custo**: o custo unitário. O **Subtotal** é calculado automaticamente.
   - Use **+ Adicionar item** para incluir mais linhas e o **⨯** para remover uma linha.
7. Se houver, informe um **Desconto** na área de totais. O **Total líquido** é recalculado na hora.
8. Em **Escolha a forma de pagamento**, defina a **Condição de pagamento**:
   - **À vista**: escolha a **Conta / banco**.
   - **Parcelado**: informe o **Número de parcelas**, a **Data de vencimento (1ª parcela)** e a **Conta / banco**.
9. Use **Observações** para anotações da compra (opcional).
10. Clique em **Criar compra**. A compra é criada e passa a aparecer na lista.

![Janela de nova compra](/img/manual/erp/compras-novo.png)

## Dicas e observações

- É obrigatório informar **pelo menos um item** — com produto selecionado **ou** descrição preenchida. Sem isso, o sistema não deixa criar a compra.
- O **Total líquido** = soma dos subtotais dos itens menos o desconto. Ele nunca fica negativo.
- A **Data de vencimento da 1ª parcela** e o **Número de parcelas** só aparecem quando a condição é **Parcelado**.
- Apenas o cadastro acontece nesta tela. As ações de **Aprovar**, **Receber** e **Cancelar** ficam na tela de detalhe da compra.

## Veja também

- [Detalhe da compra](./compras-id.md)
