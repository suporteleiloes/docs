---
title: Demonstrativo de Resultado (DRE)
sidebar_position: 1
---

# Demonstrativo de Resultado (DRE)

O DRE é o relatório que mostra, mês a mês, **quanto a leiloeira recebeu (receitas)**, **quanto gastou (despesas)** e o **resultado do período** (lucro ou prejuízo). Use-o para acompanhar a saúde financeira do negócio e para fechar o mês.

## Como acessar

**Financeiro** → **Relatórios** → **Demonstrativo de Resultado (DRE)**.

![Demonstrativo de Resultado (DRE)](/img/manual/erp/dre.png)

## O que você vê nesta tela

No topo há os filtros de período e os botões de exportação. Abaixo, o relatório montado em três blocos: Receitas, Despesas e o Resultado do período. O DRE considera apenas as **movimentações pagas** no mês escolhido.

| Área / Campo | O que é |
|---|---|
| **Mês** | Mês do relatório (Janeiro a Dezembro). |
| **Ano** | Ano do relatório. A lista oferece o ano atual e os 5 anteriores. |
| **Atualizar** | Recarrega o relatório com o período selecionado. |
| **Resultado** (etiqueta no topo) | Mostra o saldo do período em destaque, verde se positivo, vermelho se negativo. |
| **Receitas** | Lista cada categoria de receita com seu total, e o total geral de receitas. |
| **Despesas** | Lista cada categoria de despesa com seu total, e o total geral de despesas. |
| **Resultado do Período** | A conta final: total de receitas − total de despesas = resultado, com a etiqueta **Lucro** ou **Prejuízo**. |

Quando não há movimentações pagas no período, a tela mostra a mensagem **"Sem lançamentos no período"**.

## O que dá pra fazer aqui

### Consultar o resultado de um mês

1. No campo **Mês**, escolha o mês desejado.
2. No campo **Ano**, escolha o ano.
3. Clique em **Atualizar**.
4. O relatório é remontado: confira os totais de **Receitas**, **Despesas** e o **Resultado do Período**.

### Exportar em CSV

1. Selecione o período desejado.
2. Clique no botão **CSV** no canto superior direito.
3. Um arquivo `DRE_ano_mes.csv` é baixado, com as colunas **Tipo** (Receita/Despesa), **Categoria** e **Total**, mais a linha de **RESULTADO**. Abra-o no Excel ou Google Sheets.

### Exportar / imprimir em PDF

1. Selecione o período desejado.
2. Clique no botão **PDF**.
3. A janela de impressão do navegador abre. Os filtros e botões saem automaticamente, restando só o relatório. Escolha **Salvar como PDF** (ou a impressora) e confirme.

## Dicas e observações

- O DRE soma **somente o que está pago** dentro do mês. Lançamentos previstos/em aberto não entram. Se um valor parece faltar, confira se a movimentação foi quitada.
- As categorias mostradas vêm do cadastro de categorias financeiras. Lançamentos sem categoria aparecem como **"Sem categoria"** — categorize-os para um relatório mais claro.
- O DRE é mensal. Para comparar meses, gere e exporte um por vez.

## Veja também

- [Importar extrato bancário](./importar-extrato.md)
- [Contas Bancárias](./cadastro-bancos.md)
