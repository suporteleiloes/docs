---
title: Inadimplentes
sidebar_position: 6
---

# Inadimplentes

É o controle de quem deve e está em atraso. Aqui você registra inadimplências, acompanha negociações e acordos, envia cobranças e marca dívidas como quitadas. A tela reúne tudo o que precisa para gerir a recuperação de crédito da leiloeira.

## Como acessar

**ERP** → **Financeiro** → **Inadimplentes**.

![Inadimplentes](/img/manual/erp/inadimplentes.png)

## O que você vê nesta tela

### Cards de resumo

Quatro cartões no topo dão o panorama: **Em aberto** (valor das inadimplências abertas e em negociação), **Em acordo**, **Quitados** e **Registros** (quantidade total na lista atual).

### Filtros

| Filtro | Para que serve |
|---|---|
| Busca | Procura por pessoa ou observação |
| Status | Em aberto, Em negociação, Acordo, Quitado, Cancelado |
| Motivo | Filtra pelo motivo da inadimplência |
| Data Compra (De / até) | Limita por intervalo de datas |
| R$ mín / R$ máx | Limita por faixa de valor |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Pessoa | Quem está inadimplente (com o documento, quando houver) |
| Valor | Valor devido |
| Data Compra | Data de referência da dívida |
| Atraso | Dias em atraso (para registros em aberto ou em negociação) |
| Motivo | Motivo da inadimplência |
| Status | Em aberto, Crítico (mais de 60 dias), Em negociação, Acordo, Quitado ou Cancelado |

## O que dá pra fazer aqui

### Registrar um novo inadimplente

1. Clique em **Novo inadimplente**.
2. Preencha os dados na janela (pessoa, valor, data, motivo, observações e anexos).
3. Salve.

![Novo inadimplente](/img/manual/erp/inadimplentes-novo.png)

### Registrar pagamento (quitar)

1. Na linha de um registro que não esteja quitado nem cancelado, clique no ícone **Registrar pagamento**.
2. Confirme. O registro passa para o status **Quitado**, com a data do pagamento.

### Enviar cobrança

1. Clique no ícone **Enviar cobrança** na linha.
2. Se houver um lançamento financeiro vinculado ao inadimplente, o sistema gera e envia a cobrança após confirmação.
3. Se não houver lançamento vinculado, um aviso pede que você vincule uma movimentação primeiro.

### Editar / anexar

Dê duplo clique na linha, ou clique no ícone de **lápis**, para abrir a janela de edição (onde também é possível anexar documentos).

### Excluir

Clique no ícone de **lixeira** na linha e confirme. A exclusão não pode ser desfeita.

## Dicas e observações

- Registros em aberto com mais de 60 dias de atraso aparecem como **Crítico**, ajudando a priorizar a cobrança.
- O envio de cobrança depende de o inadimplente ter um lançamento financeiro vinculado — sem ele, não há o que cobrar via banco.
- Use os status (Em negociação, Acordo) para acompanhar o andamento da renegociação antes de quitar.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
