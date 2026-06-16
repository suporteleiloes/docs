---
title: Dashboard Cadastral
sidebar_position: 7
---

# Dashboard Cadastral

O **Dashboard Cadastral** é a visão gerencial do acervo de bens: em uma única tela você vê de onde os bens vieram, quantos estão disponíveis, o resumo por situação, o panorama operacional e o resumo financeiro. É a tela ideal para acompanhar a saúde do cadastro de bens de relance.

## Como acessar

**ERP** → **Bens · Administração** → **Dashboard Cadastral**.

![Dashboard Cadastral](/img/manual/erp/insights-bens.png)

## O que você vê nesta tela

A tela é composta por cartões, cada um com um conjunto de indicadores:

### Origem cadastral

Mostra de onde vieram os bens, com quantidade, percentual e barra de proporção:

| Indicador | O que é |
|---|---|
| Robô | Bens cadastrados por importação automatizada (robô). |
| Formulário | Bens cadastrados manualmente pelo formulário interno. |
| API | Bens cadastrados via integração (API). |

### Disponibilidade

Para cada grupo, mostra a quantidade e o valor (de avaliação) correspondente:

| Indicador | O que é |
|---|---|
| Ativos | Bens ativos. |
| Disponíveis | Bens disponíveis. |
| Indisponíveis | Bens indisponíveis. |

### Resumo de ativos

Quantidades por situação — **Análise**, **Bloqueados**, **Disponíveis**, **Em proposta**, **Vendidos** e **Total** — seguidas dos valores totais de **mercado**, **avaliação** e **mínimo**.

### Resumo operacional

Panorama do fluxo de trabalho: **Disponíveis**, **Saneamento**, **Providências**, **Impedidos**, **Em venda** e **Formalização**.

### Resumo financeiro

Quando há dados, mostra **Imóveis com débitos**, **Disponíveis**, **Para análise** e o **Total de débitos**.

## O que dá pra fazer aqui

Esta é uma tela de **leitura/acompanhamento** — ela não tem botões de ação ou cadastro. Use-a para:

- Entender rapidamente a composição e o estágio do seu acervo.
- Acompanhar quantos bens estão disponíveis, bloqueados, em proposta ou vendidos.
- Visualizar o total de valores (mercado, avaliação, mínimo) e os débitos.

Para agir sobre os bens (cadastrar, editar, filtrar, exportar), use a [Gestão de Bens](./bens-lista.md).

## Dicas e observações

- Os números são um resumo consolidado e podem levar alguns instantes para carregar ("Carregando dashboard...").
- Os percentuais da **Origem cadastral** são calculados sobre o total de bens cadastrados (robô + formulário + API).

## Veja também

- [Gestão de Bens](./bens-lista.md)
- [Propostas de Venda Direta](./propostas-venda-direta.md)
