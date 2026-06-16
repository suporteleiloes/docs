---
title: Estoque (Saldos)
sidebar_position: 1
---

# Estoque (Saldos)

Esta é a tela central do almoxarifado. Aqui você vê, em uma única lista, **quanto tem de cada produto em cada depósito**, o custo médio de cada item e quais produtos estão abaixo do estoque mínimo. É também por aqui que você registra entradas, saídas, transferências e ajustes de inventário.

## Como acessar

**ERP** → **Almoxarifado** → **Estoque**.

![Tela de Estoque (Saldos)](/img/manual/erp/estoque.png)

## O que você vê nesta tela

No topo há uma faixa de filtros e, abaixo, a lista de saldos. Cada linha representa um produto em um depósito.

### Filtros

| Filtro | O que faz |
|---|---|
| Buscar produto | Procura por nome ou código do produto. |
| Depósito | Mostra só os saldos de um depósito específico (ou "Todos os depósitos"). |
| Apenas abaixo do mínimo | Quando ligado, exibe somente os produtos cujo saldo está abaixo do estoque mínimo configurado. |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Produto | Nome do produto e, abaixo, o código (quando houver). |
| Depósito | Onde esse saldo está guardado. |
| Quantidade | Saldo atual do produto naquele depósito. |
| Custo médio | Custo médio unitário calculado pelo sistema a partir das entradas. Mostra "—" quando não há custo registrado. |
| Mínimo | Estoque mínimo definido para o produto. Mostra "—" quando não há mínimo configurado. |
| Status | Etiqueta **OK** (verde) quando o saldo está acima do mínimo, ou **Abaixo do mínimo** (vermelho) quando precisa de reposição. |

## O que dá pra fazer aqui

No canto superior direito da tela há quatro botões de operação:

- **+ Entrada** — registra a chegada de produto no estoque.
- **− Saída** — registra a baixa/consumo de produto.
- **⇄ Transferência** — move produto de um depósito para outro.
- **Inventário / Ajuste** — corrige o saldo de um produto para um valor contado fisicamente.

Em todas as operações, se você já tiver um depósito selecionado no filtro, ele vem pré-preenchido no formulário para agilizar.

### Registrar uma Entrada

1. Clique em **+ Entrada**.
2. Em **Produto**, comece a digitar o nome ou código e selecione o produto na lista.
3. Selecione o **Depósito** onde o produto está entrando.
4. Informe a **Quantidade** que está entrando.
5. (Opcional) Informe o **Custo unitário** do item. Esse valor alimenta o cálculo do custo médio do produto.
6. (Opcional) Escreva uma **Observação** (ex.: número da nota fiscal).
7. Clique em **Confirmar**. O saldo é somado e a movimentação aparece em [Movimentações](./estoque-movimentos.md).

![Modal de Entrada de estoque](/img/manual/erp/estoque-entrada.png)

### Registrar uma Saída

1. Clique em **− Saída**.
2. Selecione o **Produto** e o **Depósito**.
3. Informe a **Quantidade** a ser baixada.
4. Se for necessário dar saída mesmo sem saldo suficiente, ligue **Permitir saldo negativo**. Caso contrário, o sistema bloqueia a saída quando não há saldo.
5. (Opcional) Escreva uma **Observação**.
6. Clique em **Confirmar**. O saldo é reduzido.

### Fazer uma Transferência entre depósitos

1. Clique em **⇄ Transferência**.
2. Selecione o **Produto**.
3. Escolha o **Depósito de origem** (de onde sai) e o **Depósito de destino** (para onde vai). Eles precisam ser diferentes.
4. Informe a **Quantidade** a transferir.
5. (Opcional) Escreva uma **Observação**.
6. Clique em **Confirmar**. O sistema gera duas movimentações: uma saída na origem e uma entrada no destino.

### Fazer um Inventário / Ajuste

Use o ajuste quando a contagem física não bate com o saldo do sistema.

1. Clique em **Inventário / Ajuste**.
2. Selecione o **Produto** e o **Depósito**.
3. Em **Saldo-alvo (quantidade final)**, informe a quantidade **real** que você contou na prateleira — não a diferença.
4. (Opcional) Escreva uma **Observação** justificando o ajuste.
5. Clique em **Confirmar**. O sistema calcula a diferença entre o saldo atual e o saldo-alvo e registra um movimento de ajuste para igualar os valores.

## Dicas e observações

- O **custo médio** é calculado automaticamente pelo sistema. Para mantê-lo correto, informe o custo unitário nas entradas.
- Para localizar rapidamente o que precisa repor, ligue o filtro **Apenas abaixo do mínimo**.
- Só aparecem no seletor de produto os itens marcados para **controlar estoque** no catálogo. Se um produto não aparece, verifique seu cadastro no catálogo.
- O estoque mínimo é definido no cadastro do produto, não nesta tela.

## Veja também

- [Movimentações](./estoque-movimentos.md)
- [Depósitos](./estoque-depositos.md)
