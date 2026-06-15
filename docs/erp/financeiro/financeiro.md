---
title: Dashboard Financeiro
sidebar_position: 1
---

# Dashboard Financeiro

É a tela de abertura do módulo Financeiro. Em uma só visão você enxerga quanto tem a receber, quanto tem a pagar, o saldo projetado, o que está em atraso, a curva de entradas e saídas do período e o saldo atual de cada conta bancária. Serve como ponto de partida do dia: bater o olho e decidir para onde ir.

## Como acessar

**ERP** → **Financeiro** → **Dashboard**.

O módulo Financeiro tem uma barra de abas no topo (Dashboard, Contas, Centro de Custo, Plano de Contas, Formas de Pagamento, Inadimplentes, Conciliação). O Dashboard é a primeira aba e abre por padrão quando você entra em Financeiro.

![Dashboard Financeiro](/img/manual/erp/financeiro.png)

## O que você vê nesta tela

Logo abaixo do título há a indicação do mês de referência (por exemplo, "Visão do mês de junho de 2026").

### Indicadores (cards do topo)

São quatro cartões clicáveis. Ao clicar, cada um leva você direto para a lista de Contas já filtrada.

| Indicador | O que mostra | Ao clicar |
|---|---|---|
| A receber | Valor em aberto a receber no mês e quantos lançamentos | Abre Contas a Receber, em aberto |
| A pagar | Valor em aberto a pagar no mês e quantos lançamentos | Abre Contas a Pagar, em aberto |
| Saldo projetado | Receber menos Pagar (fica em vermelho se negativo) | Abre o Extrato |
| Em atraso | Valor vencido e não pago e quantas parcelas vencidas | Abre os vencidos |

### Fluxo de caixa

Um gráfico de linhas com **Receitas**, **Despesas** e **Saldo** realizados no período. Use os botões **30 dias**, **60 dias** e **90 dias** para mudar a janela de tempo. Se não houver movimentação paga no período, aparece uma mensagem de "Sem dados de fluxo".

### Saldo das contas

Mostra a posição atual de cada conta bancária cadastrada, com o **Total geral** em destaque e um cartão por conta (banco, agência, número da conta, saldo e data da última atualização). Contas com saldo negativo recebem uma etiqueta vermelha "Negativo".

## O que dá pra fazer aqui

### Atualizar os saldos das contas

1. No cartão **Saldo das contas**, clique em **Atualizar saldos**.
2. O sistema recalcula e atualiza a posição de cada conta. Uma mensagem confirma a sincronização.

### Ir para uma área específica

Use os **Atalhos** na parte de baixo da tela para pular direto para:

- **Contas a pagar** — despesas e pagamentos.
- **Contas a receber** — recebimentos em aberto.
- **Extrato** — todas as movimentações.
- **Plano de contas** — categorias contábeis.
- **Relatório DRE** — resultado do exercício.

## Dicas e observações

- Os cartões de indicador são atalhos: clicar neles já abre a lista filtrada, poupando você de montar o filtro na mão.
- Se a área **Saldo das contas** estiver vazia, cadastre suas contas em **Cadastro → Bancos** antes (há um botão "Ir para Bancos" no próprio aviso).
- O Dashboard é só leitura: nenhum lançamento é criado ou alterado aqui. Para isso, vá em **Contas**.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Plano de Contas (categorias)](./categorias.md)
- [Conciliação Bancária](./conciliacao.md)
