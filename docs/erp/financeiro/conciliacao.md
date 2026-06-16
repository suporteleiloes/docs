---
title: Conciliação Bancária
sidebar_position: 7
---

# Conciliação Bancária

Conciliar é casar o que aconteceu no banco com o que está registrado no sistema. Esta tela coloca, lado a lado, o **extrato bancário** importado e os **lançamentos do sistema** do mesmo período, e ajuda você a vincular cada transação ao seu lançamento — automaticamente quando há um casamento exato, ou manualmente quando precisa de conferência.

## Como acessar

**ERP** → **Financeiro** → **Conciliação**.

![Conciliação Bancária](/img/manual/erp/conciliacao.png)

## O que você vê nesta tela

### Filtros

No topo você escolhe a **Conta bancária** e o **Período** (mês). Depois de escolher a conta, aparecem os dados do banco (nome, código, agência e conta). Sem escolher conta e período, a tela mostra um aviso pedindo que você selecione.

### Indicadores

Quando há extrato no período, quatro indicadores resumem a situação: **Transações** (total), **Conciliadas**, **Pendentes (match 100%)** e **Sem par**.

### Painel duplo

| Painel | O que mostra |
|---|---|
| Extrato bancário (esquerda) | As transações importadas do banco, com data, valor (+ entrada / − saída), descrição e o status de cada uma |
| Lançamentos do sistema (direita) | As contas a pagar/receber do sistema no período, com data, valor, tipo (Receita/Despesa) e situação (Conciliado, Pago, Em aberto) |

Cada linha do extrato tem uma cor de status: **Conciliado** (verde, já vinculada), **Pendente** (amarelo, há um casamento 100% sugerido), **candidatos** (azul, mais de um lançamento possível) ou **Sem par** (vermelho, nada encontrado).

## O que dá pra fazer aqui

### Conciliar automaticamente

1. Selecione a conta e o período.
2. Clique em **Conciliar automaticamente** no cabeçalho.
3. Confirme. Todas as transações com casamento 100% (status Pendente) são vinculadas de uma vez.

### Conciliar selecionados

1. Marque as caixas das transações pendentes que quer vincular.
2. Clique em **Conciliar selecionados (N)**.

### Desfazer uma conciliação

Numa transação já **Conciliada**, clique em **Desfazer** e confirme. O vínculo entre a transação e o lançamento é removido.

### Atualizar

O botão **Atualizar** recarrega a conciliação da conta e período escolhidos.

## Dicas e observações

- Antes de conciliar, é preciso **importar o extrato** do banco. Se a tela avisar "Importe um extrato primeiro", use o módulo de **Importação de Extratos** (há um botão de atalho no próprio aviso).
- Só as transações com casamento 100% (status **Pendente**) podem ser conciliadas automaticamente ou por seleção. As "Sem par" e as com vários candidatos precisam de tratamento manual.
- Conciliar não cria lançamentos: apenas liga a transação do banco ao lançamento que já existe no sistema. Lançamentos faltantes devem ser criados em **Contas**.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Dashboard Financeiro](./financeiro.md)
