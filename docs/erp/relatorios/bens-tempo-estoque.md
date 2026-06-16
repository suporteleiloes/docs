---
title: Bens com mais Tempo em Estoque
sidebar_position: 6
---

# Bens com mais Tempo em Estoque

Este relatório lista os bens que estão há mais tempo parados no estoque. Use-o para identificar bens "encalhados" — que já passaram muito tempo sem serem vendidos — e priorizar ações com o comitente (rebaixar valor, recolocar em leilão, devolver etc.).

## Como acessar

**ERP** → **Relatórios** → **Bens com mais Tempo em Estoque**.

![Bens com mais Tempo em Estoque](/img/manual/erp/bens-tempo-estoque.png)

## O que você vê nesta tela

A tela tem um cartão de **Filtros**. Depois de gerar, o resultado aparece em uma tabela abaixo.

### Filtros

| Filtro | O que é |
|---|---|
| Comitente | Filtra os bens de um comitente específico. Comece a digitar o nome e selecione. Deixe em branco para considerar todos os comitentes. |
| Tempo mínimo (dias) | Só lista bens que estejam em estoque há pelo menos este número de dias. O padrão é **30**. |

## O que dá pra fazer aqui

### Visualizar o relatório na tela (HTML)

1. (Opcional) Escolha um **Comitente**.
2. Ajuste o **Tempo mínimo (dias)** — por exemplo, 90 para ver só os bens parados há mais de três meses.
3. Clique em **Visualizar (HTML)**.
4. O relatório é montado e exibido na própria tela, em formato de tabela.

### Exportar para Excel

1. Defina os mesmos filtros.
2. Clique em **Exportar Excel**.
3. O arquivo é baixado com a lista dos bens.

## Dicas e observações

- Deixe o campo **Comitente** em branco para uma visão geral de todo o estoque.
- Aumente o **Tempo mínimo** para focar apenas nos casos mais críticos (bens parados há muito tempo).
- Se algo der errado ao gerar, aparece um aviso na tela; ajuste os filtros e tente de novo.

## Veja também

- [Produtividade por Período](./produtividade.md)
- [Módulo de Relatórios](./relatorios.md)
