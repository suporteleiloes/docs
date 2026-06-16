---
title: Habilitações
sidebar_position: 5
---

# Habilitações

Esta tela centraliza as habilitações de arrematantes em dois níveis: por **leilão inteiro** ou por **lote específico**. Use-a para aprovar, reprovar ou revogar habilitações nos dois escopos a partir de um único lugar.

## Como acessar

**Arrematantes** → **Habilitações** (rota `/arrematantes/habilitacoes`).

![Habilitações](/img/manual/erp/arrematantes-habilitacoes.png)

## O que você vê nesta tela

No topo há dois conjuntos de seletores:

- **Escopo** (botões): **Habilitação Leilão** ou **Habilitação Lote**.
- **Situação** (abas): **Em análise**, **Aprovadas** e **Reprovadas**. A aba ativa mostra o total.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número de identificação (ID) da habilitação |
| Arrematante | Foto, nome e documento — clique para abrir o detalhe |
| Leilão | Leilão da habilitação (e nº, quando houver) |
| Lote | Número do lote (aparece somente no escopo **Habilitação Lote**) |
| Status | Selo com a situação (Em análise, Aprovada, Reprovada) |
| Solicitado | Data da solicitação |

## O que dá pra fazer aqui

### Alternar entre Leilão e Lote

Clique em **Habilitação Leilão** ou **Habilitação Lote** para trocar o escopo. A tabela se ajusta (no escopo Lote, surge a coluna **Lote**).

### Buscar

Use a barra de busca para localizar por arrematante ou leilão.

### Aprovar uma habilitação

Disponível para registros **Em análise**:

1. Clique em **Aprovar** na linha.
2. Confirme.

### Reprovar uma habilitação

Disponível para registros **Em análise**:

1. Clique no botão vermelho (ícone de **x**).
2. Na janela **Reprovar habilitação**, informe o **motivo** (será comunicado ao arrematante).
3. Clique em **Confirmar reprovação**.

![Janela reprovar habilitação](/img/manual/erp/arrematantes-habilitacoes-reprovar.png)

### Revogar uma habilitação aprovada

Para registros já **Aprovados**:

1. Clique em **Revogar** na linha.
2. Confirme. A habilitação é removida.

## Dicas e observações

- O escopo escolhido (Leilão ou Lote) define qual lista é exibida e quais ações afetam — confira sempre qual botão está ativo antes de decidir.
- As ações **Aprovar** e **Reprovar** só aparecem enquanto a habilitação está **Em análise**.
- Esta tela é mais completa que a [Habilitação em Leilões](./arrematantes-habilitacao.md) por permitir também o escopo de **lote**.
- **Permissão necessária**: listar/decidir habilitações de arrematante.

## Veja também

- [Habilitação em Leilões](./arrematantes-habilitacao.md)
- [Gestão de Arrematantes](./arrematantes-lista.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
