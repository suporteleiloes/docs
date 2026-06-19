---
title: Detalhe da compra
sidebar_position: 2
---

# Detalhe da compra

Esta é a tela de uma compra específica. Aqui você vê todos os dados da compra (fornecedor, valores, itens, pagamento) e executa as ações que movem a compra entre as etapas: **aprovar**, **receber** e **cancelar**.

## Como acessar

**ERP** → **Financeiro** → grupo **Compras** → **Compras** e clique em qualquer linha da lista. A tela abre com o nome do fornecedor (ou "Compra #número", quando a compra não tem fornecedor) no topo.

![Detalhe da compra](/img/manual/erp/compras-id.png)

## O que você vê nesta tela

No alto ficam o título (fornecedor) e os botões de ação, que aparecem conforme a situação atual da compra. Logo abaixo, um aviso verde aparece quando a compra já foi recebida e gerou contas a pagar e estoque.

### Cartão de resumo

| Campo | O que é |
|---|---|
| Fornecedor | Nome do fornecedor (ou **— Sem fornecedor —**). |
| Situação | Etapa atual (Solicitação, Em cotação, Aprovada, Pedido, Recebida ou Cancelada), em etiqueta colorida. |
| Cód. | Código de referência da compra, quando informado. |
| Total líquido | Valor total da compra após desconto. |
| Data da compra | Data registrada na compra. |
| Categoria | Categoria de movimentação financeira. |
| Depósito | Depósito de estoque que recebe os produtos. |
| Conta / banco | Conta usada no pagamento. |
| Condição | **À vista** ou **Parcelado** (com o número de parcelas). |
| 1º vencimento | Data de vencimento da primeira parcela (quando parcelado). |
| Aprovada em | Data em que a compra foi aprovada. |
| Recebida em | Data em que a compra foi recebida. |
| Observações | Anotações registradas na compra, se houver. |

### Cartão de itens

Lista todos os produtos/serviços da compra:

| Coluna | O que é |
|---|---|
| Produto / Serviço | Nome do produto (ou a descrição livre). Quando há produto e descrição, a descrição aparece como complemento. |
| Qtd. | Quantidade comprada. |
| Custo unit. | Custo unitário do item. |
| Subtotal | Quantidade × custo unitário. |

No rodapé da tabela aparecem o **Desconto** (quando houver) e o **Total líquido**.

## O que dá pra fazer aqui

Os botões disponíveis mudam conforme a situação da compra:

| Botão | Quando aparece | O que faz |
|---|---|---|
| Voltar | Sempre | Retorna para a lista de compras. |
| Editar | Enquanto a compra **não** estiver recebida nem cancelada | Abre a janela para alterar os dados da compra. |
| Aprovar | Quando a compra está em **Solicitação** ou **Em cotação** **e** tem pelo menos um item | Marca a compra como **Aprovada** e registra a data de aprovação e quem aprovou. |
| Receber | Quando a compra está **Aprovada** ou em **Pedido** | Conclui a compra, gerando contas a pagar e entrada de estoque. |
| Cancelar | Enquanto a compra **não** estiver recebida nem cancelada | Marca a compra como **Cancelada**. |

### Editar a compra

1. Clique em **Editar**. Abre a janela **Editar compra** já preenchida com os dados atuais.
2. Altere o que precisar — fornecedor, itens, valores, forma de pagamento, observações.
3. Clique em **Salvar**. Os dados da tela são atualizados.

### Aprovar a compra

1. Confira se há pelo menos um item na compra.
2. Clique em **Aprovar**. A situação muda para **Aprovada** e a data de aprovação é registrada.

### Receber a compra

1. Clique em **Receber**.
2. Confirme na janela **Receber compra?**. O aviso lembra que esta ação **gera as contas a pagar no financeiro e a entrada de estoque, e não pode ser desfeita**.
3. Ao confirmar, a compra fica **Recebida** e aparece o aviso verde indicando que as contas a pagar (e, quando aplicável, a entrada de estoque) foram geradas.

**O que o recebimento faz, em detalhe:**

- **Contas a pagar (Financeiro):** gera lançamentos de **despesa** vinculados à compra. Se a condição for **À vista**, gera uma única conta a pagar; se for **Parcelado**, gera uma conta por parcela, com vencimentos mês a mês a partir da **data do 1º vencimento** (ou da data da compra, se não houver). O valor é dividido igualmente entre as parcelas, e a **última parcela absorve eventuais centavos de arredondamento**.
  - A despesa usa a **Categoria** e a **Conta / banco** informadas na compra. Se a categoria estiver em branco, o sistema usa uma categoria padrão chamada **"Compras"**.
  - Se o **Total líquido for R$ 0,00**, nenhuma conta a pagar é gerada.
- **Entrada de estoque (Almoxarifado):** dá entrada apenas dos itens que apontam para um **produto cadastrado que controla estoque**. Itens com **descrição livre** (sem produto) ou produtos que **não controlam estoque** não movimentam o almoxarifado. A entrada usa o **Depósito** da compra; se estiver em branco, o sistema usa o **depósito principal ativo** (ou o primeiro depósito ativo encontrado).
- A operação é **transacional e não duplica**: se você receber a mesma compra de novo (o que normalmente não acontece, pois o botão some), as contas/estoque já gerados não são lançados outra vez.

### Cancelar a compra

1. Clique em **Cancelar**.
2. Confirme na janela **Cancelar compra?**. A compra é marcada como **Cancelada**.

## Dicas e observações

- **Receber é definitivo.** Depois de receber, a compra não pode mais ser editada nem cancelada, pois já lançou contas a pagar e movimentou o estoque. Para reverter os efeitos financeiros/de estoque é preciso **estornar manualmente** as contas a pagar e a movimentação de estoque.
- Para **aprovar**, a compra precisa ter pelo menos um item cadastrado.
- Só dá para **receber** uma compra que esteja **Aprovada** ou em **Pedido**.
- Uma compra **cancelada** não pode mais ser editada nem ter outras ações executadas.
- A **edição** só é permitida enquanto a compra **não** estiver recebida nem cancelada; ao salvar, os itens são totalmente substituídos pelos itens informados na janela e o total líquido é recalculado.

### Permissões

Cada ação tem uma permissão própria. Sem a permissão correspondente, o botão/ação fica indisponível:

| Ação | Permissão |
|---|---|
| Ver a lista | `compras/l` |
| Abrir o detalhe | `compras/s` |
| Criar | `compras/c` |
| Editar | `compras/u` |
| Aprovar | `compras/aprovar` |
| Receber | `compras/receber` |
| Cancelar | `compras/cancelar` |

## Veja também

- [Compras (lista e cadastro)](./compras.md)
