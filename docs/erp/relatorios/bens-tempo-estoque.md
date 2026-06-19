---
title: Bens com mais Tempo em Estoque
sidebar_position: 6
---

# Bens com mais Tempo em Estoque

Este relatório lista os bens que estão há mais tempo parados no estoque, do mais antigo para o mais recente. Use-o para identificar bens "encalhados" — que já passaram muito tempo sem serem vendidos — e priorizar ações com o comitente (rebaixar valor, recolocar em leilão, devolver etc.).

O relatório considera os bens que ainda estão na operação (status **Cadastrado**, **Rascunho**, **No pátio**, **Em remoção**, **Em leilão** ou **Recebendo propostas**) e os ordena pela data de cadastro, dos mais antigos primeiro. São listados até 1.000 bens.

:::note Sobre os filtros
Os campos **Comitente** e **Tempo mínimo (dias)** aparecem na tela, mas **hoje não alteram o resultado** — o relatório sempre traz a mesma lista (todos os bens nos status acima, do mais antigo ao mais novo). Para interpretar, observe a coluna **Tempo no Estoque** de cada bem na tabela.

> A confirmar com a equipe: se os filtros Comitente e Tempo mínimo entrarão em uma próxima versão.
:::

## Como acessar

**ERP** → **Relatórios** → **Bens com mais Tempo em Estoque**.

![Bens com mais Tempo em Estoque](/img/manual/erp/bens-tempo-estoque.png)

## O que você vê nesta tela

A tela tem um cartão de **Filtros**. Depois de gerar, o resultado aparece em uma tabela abaixo.

### Filtros

| Filtro | O que é |
|---|---|
| Comitente | Campo de busca por comitente. **Atualmente sem efeito** sobre o resultado (veja a observação acima). |
| Tempo mínimo (dias) | Número de dias, com padrão **30**. **Atualmente sem efeito** sobre o resultado. |

### Resultado

A tabela traz, para cada bem: **Tipo do Bem**, **Registro** (data de cadastro), **Entrada** (data de entrada no pátio, ou "-" se não houver), **Descrição**, **Tempo de Registro** (dias desde o cadastro) e **Tempo no Estoque** (dias desde a entrada).

## O que dá pra fazer aqui

### Visualizar o relatório na tela (HTML)

1. Clique em **Visualizar (HTML)**.
2. O relatório é montado e exibido na própria tela, em formato de tabela, com os bens mais antigos no topo.

### Exportar para Excel

1. Clique em **Exportar Excel**.
2. O arquivo é baixado com a lista dos bens.

## Dicas e observações

- Para encontrar os casos mais críticos, ordene a coluna **Tempo no Estoque** (ou **Tempo de Registro**) na planilha do Excel — os bens já vêm do mais antigo para o mais novo.
- Enquanto os filtros estiverem sem efeito, gere a lista completa e faça o recorte por comitente direto no Excel.
- Se algo der errado ao gerar, aparece um aviso na tela; tente de novo.

## Veja também

- [Produtividade por Período](./produtividade.md)
- [Módulo de Relatórios](./relatorios.md)
