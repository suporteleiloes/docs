---
title: Prestação de Contas
sidebar_position: 5
---

# Prestação de Contas

A prestação de contas é o relatório que mostra, para um leilão específico, o que foi vendido, o que não foi vendido e os valores envolvidos — base para acertar contas com os comitentes. O relatório é **sempre emitido por leilão**: você informa qual leilão e o sistema gera o resultado.

## Como acessar

**ERP** → **Comitentes** → **Prestação de Contas**.

![Prestação de Contas](/img/manual/erp/comitentes-prestacao.png)

## O que você vê nesta tela

No topo, um quadro pede o leilão que você quer consultar. Depois de gerar, o relatório aparece logo abaixo com:

- **Cabeçalho do leilão** — descrição, código e status.
- **Indicadores resumo:**

| Indicador | O que é |
|---|---|
| Lotes | Quantidade de lotes efetivos do leilão |
| Vendidos | Quantos lotes foram vendidos |
| Não vendidos | Quantos lotes não foram vendidos |
| Venda total | Valor total apurado nas vendas |

- **Tabela de lotes** — lista cada lote com número, bem, valor mínimo, valor de venda e status.

## O que dá pra fazer aqui

### Gerar a prestação de contas

1. Informe o leilão de uma das duas formas:
   - **ID do leilão** (o número interno, ex.: 1234), ou
   - **Código do leilão** (ex.: 2024-001).
2. Clique em **Gerar relatório**.
3. O relatório aparece abaixo, com os indicadores e a lista de lotes.

Se o leilão informado não for encontrado, o sistema avisa: "Falha ao carregar o relatório. Verifique o leilão informado."

## Dicas e observações

- Não existe uma listagem geral de prestações de contas — o relatório é sempre por leilão. Por isso você precisa informar o leilão antes de gerar.
- Basta preencher **um** dos campos (ID **ou** Código). O botão **Gerar relatório** só fica habilitado depois que um deles for preenchido.
- O relatório considera lotes vendidos, não vendidos e retirados, além das estatísticas do leilão.

## Veja também

- [Gestão de Comitentes](./comitentes-lista.md)
- [Registro do comitente](./comitentes-id.md)
