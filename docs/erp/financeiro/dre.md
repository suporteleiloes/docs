---
title: Demonstrativo de Resultado (DRE)
sidebar_position: 1
---

# Demonstrativo de Resultado (DRE)

O DRE é o relatório que mostra, mês a mês, **quanto a leiloeira recebeu (receitas)**, **quanto gastou (despesas)** e o **resultado do período** (lucro ou prejuízo). Use-o para acompanhar a saúde financeira do negócio e para fechar o mês.

## Como acessar

No **Dashboard Financeiro**, clique no atalho **Relatório DRE** (na faixa de atalhos da parte de baixo). Você também pode ir direto pelo endereço **`/financeiro/dre`**. O DRE não tem aba própria na barra do módulo Financeiro; o caminho de origem aparece no topo da tela como **Financeiro / Relatórios**.

![Demonstrativo de Resultado (DRE)](/img/manual/erp/dre.png)

## Pré-requisitos

- Ter **movimentações pagas** (com data de pagamento) no mês/ano consultado — o DRE só considera o que já foi efetivamente quitado.
- (Recomendado) Ter os lançamentos **categorizados** no [Plano de Contas](./categorias.md): o DRE agrupa receitas e despesas por categoria, e o que estiver sem categoria cai em "Sem categoria".

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

## Regras de negócio

- **Critério de inclusão:** entra no DRE a movimentação que esteja **paga**, **não cancelada** e cuja **data de pagamento** caia dentro do mês/ano escolhido. O valor somado é o **valor pago** (não o valor de face), então descontos, juros e multa registrados na baixa já estão refletidos.
- **Regime de caixa:** o relatório é por **data de pagamento** (regime de caixa), não por competência nem por vencimento. Um título com competência em maio mas pago em junho aparece no DRE de **junho**.
- **Agrupamento:** receitas e despesas são somadas por **categoria** do Plano de Contas. O resultado é simplesmente **total de receitas − total de despesas**.

## Dicas e observações

- O DRE soma **somente o que está pago** dentro do mês. Lançamentos previstos/em aberto não entram. Se um valor parece faltar, confira se a movimentação foi quitada e em qual data o pagamento foi registrado.
- As categorias mostradas vêm do cadastro de categorias financeiras. Lançamentos sem categoria aparecem como **"Sem categoria"** — categorize-os para um relatório mais claro.
- O DRE é mensal. Para comparar meses, gere e exporte um por vez.

## Veja também

- [Plano de Contas (categorias)](./categorias.md)
- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Importar extrato bancário](./importar-extrato.md)
- [Contas Bancárias](./cadastro-bancos.md)
