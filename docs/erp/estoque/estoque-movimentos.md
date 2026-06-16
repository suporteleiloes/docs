---
title: Movimentações
sidebar_position: 2
---

# Movimentações

Esta tela é o **histórico (kardex)** do almoxarifado: cada entrada, saída, transferência e ajuste fica registrado aqui, em ordem cronológica, com o saldo resultante após cada operação. Use-a para auditar o que aconteceu com um produto ou um depósito ao longo do tempo.

## Como acessar

**ERP** → **Almoxarifado** → **Movimentações**.

![Tela de Movimentações](/img/manual/erp/estoque-movimentos.png)

## O que você vê nesta tela

No topo há filtros e, abaixo, a lista de movimentações paginada (você pode navegar entre as páginas e escolher quantos itens ver por página).

### Filtros

| Filtro | O que faz |
|---|---|
| Produto | Mostra só as movimentações de um produto. Digite o nome ou código para localizá-lo. |
| Depósito | Mostra só as movimentações de um depósito (ou "Todos os depósitos"). |
| Tipo | Filtra por tipo de movimento (ou "Todos os tipos"). |

Ao trocar qualquer filtro, a lista volta para a primeira página.

### Colunas da lista

| Coluna | O que é |
|---|---|
| Data | Data e hora em que a movimentação foi registrada. |
| Produto | Produto movimentado. |
| Depósito | Depósito afetado. |
| Tipo | Tipo do movimento, em etiqueta colorida (verde para movimentos que aumentam o saldo, vermelho para os que reduzem). |
| Quantidade | Quantidade movimentada, com sinal **+** (entrou) ou **−** (saiu). |
| Custo unit. | Custo unitário registrado naquela operação. Mostra "—" quando não há. |
| Saldo após | Saldo do produto naquele depósito logo depois da movimentação. |
| Origem | Indica de onde veio o movimento (ex.: operação manual, transferência, etc.). |

### Tipos de movimento

| Tipo | Significado |
|---|---|
| Entrada | Produto chegou ao estoque. |
| Saída | Produto saiu/foi consumido. |
| Transferência (saída) | Produto saiu do depósito de origem numa transferência. |
| Transferência (entrada) | Produto chegou ao depósito de destino numa transferência. |
| Ajuste | Correção de saldo feita por inventário. |

## O que dá pra fazer aqui

Esta é uma tela de **consulta** — você não cria movimentações por aqui. As movimentações são geradas automaticamente quando você executa uma operação na tela de [Estoque (Saldos)](./estoque.md). Aqui você:

- **Filtra** o histórico por produto, depósito e tipo.
- **Navega** pelas páginas para percorrer todo o histórico.
- **Acompanha o saldo após** cada operação, conferindo se os valores fazem sentido.

## Dicas e observações

- Uma transferência aparece como **duas linhas**: uma "Transferência (saída)" no depósito de origem e uma "Transferência (entrada)" no de destino.
- O sinal e a cor na coluna Quantidade ajudam a bater o olho: verde com **+** aumentou o estoque, vermelho com **−** diminuiu.
- Para registrar novos movimentos, vá em [Estoque (Saldos)](./estoque.md) e use os botões Entrada, Saída, Transferência ou Inventário / Ajuste.

## Veja também

- [Estoque (Saldos)](./estoque.md)
- [Depósitos](./estoque-depositos.md)
