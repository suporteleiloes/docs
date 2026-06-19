---
title: Financeiro de RH
sidebar_position: 7
---

# Financeiro de RH

A tela de Financeiro de RH controla os pagamentos ligados aos colaboradores: salários, bônus, comissões, descontos e benefícios. Aqui você lança o que está previsto, acompanha os totais e marca cada lançamento como pago.

> **Importante:** cada lançamento de RH é, na prática, uma **despesa no Financeiro global do ERP**. Não existe um cofre separado de RH: ao salvar um lançamento aqui, ele entra como conta a pagar no [Financeiro](../financeiro/financeiro.md), categorizado por tipo (RH · Salário, RH · Bônus etc.) e vinculado ao colaborador. Por isso, lançamentos já pagos só podem ser estornados pelo Financeiro (veja "Regras de negócio").

## Como acessar

**ERP** → **RH** → **Financeiro**.

![Financeiro de RH](/img/manual/erp/rh-financeiro.png)

## O que você vê nesta tela

No topo, dois cartões de totais; em seguida, os filtros e a tabela de lançamentos.

### Cartões de totais

| Cartão | O que mostra |
|---|---|
| Previsto (filtro atual) | Soma dos valores previstos, considerando os filtros aplicados |
| Pago (filtro atual) | Soma dos valores já pagos, considerando os filtros aplicados |

### Filtros

| Filtro | O que faz |
|---|---|
| Campo de busca | Procura por colaborador ou descrição |
| Tipo | Filtra por tipo: Salário, Bônus, Comissão, Desconto, Benefício |
| Status | Filtra por situação: Previsto ou Pago |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Colaborador | Pessoa a quem o lançamento se refere |
| Tipo | Tipo do lançamento (descontos aparecem em vermelho) |
| Competência | Mês/data de competência do lançamento |
| Valor | Valor do lançamento (descontos aparecem com sinal de menos, em vermelho) |
| Status | Situação: **Previsto** (ainda não pago) ou **Pago** |

## O que dá pra fazer aqui

### Criar um novo lançamento

1. Clique em **+ Novo lançamento**.
2. Em **Colaborador**, digite o nome e selecione a pessoa na lista (obrigatório).
3. Escolha o **Tipo** (Salário, Bônus, Comissão, Desconto, Benefício).
4. Informe o **Valor (R$)** — precisa ser maior que zero.
5. Defina a **Competência** (o mês a que o lançamento se refere). Se você não informar, o sistema assume o primeiro dia do mês atual.
6. Informe o **Vencimento**, se houver. Quando em branco, o vencimento assume a data de competência.
7. Use **Descrição** para uma observação opcional. Em branco, o sistema gera uma descrição automática (ex.: "RH · Salário · Nome do colaborador").
8. Clique em **Salvar**. O lançamento entra na lista como **Previsto** e já aparece como conta a pagar no Financeiro global.

![Novo lançamento](/img/manual/erp/rh-financeiro-novo.png)

### Marcar um lançamento como pago

1. Em um lançamento com status **Previsto**, clique no botão **Pagar**.
2. Confirme a mensagem **"Registrar pagamento?"** clicando em **Pagar**.
3. O lançamento passa para o status **Pago** (baixa registrada na data de hoje), o valor entra no total de pagos e a despesa correspondente é baixada no Financeiro global.

### Editar um lançamento

1. Na linha desejada, clique no ícone de lápis (**✎**).
2. Ajuste os campos. (Ao editar, o colaborador fica fixo e não pode ser trocado.)
3. Clique em **Salvar**.

> Só é possível editar lançamentos **Previstos**. Um lançamento já **Pago** não pode ser editado — o sistema avisa que é preciso cancelar o pagamento no Financeiro antes.

### Remover um lançamento

1. Na linha desejada, clique no ícone **⨯**.
2. Confirme a mensagem **"Remover lançamento?"** clicando em **Remover**. Esta ação não pode ser desfeita.

> Lançamentos já **Pagos** não podem ser removidos por aqui. Para excluí-los, primeiro cancele/estorne o pagamento no [Financeiro](../financeiro/financeiro.md).

## Regras de negócio

- **Valor sempre maior que zero.** O sistema rejeita lançamentos com valor zero ou negativo.
- **Desconto reduz o total.** Lançamentos do tipo **Desconto** entram com sinal negativo nos cartões de totais — ou seja, abatem do previsto/pago em vez de somar. Os demais tipos (Salário, Bônus, Comissão, Benefício) somam.
- **Pago é irreversível por aqui.** Depois de marcado como Pago, o lançamento não pode ser editado nem removido nesta tela. Para mexer nele, cancele/estorne o pagamento no [Financeiro](../financeiro/financeiro.md).
- **Integração com o Financeiro.** Cada lançamento cria automaticamente uma categoria de despesa de RH (Salário, Bônus etc.) e uma conta a pagar no Financeiro, lançada na primeira conta bancária ativa. Não há registro paralelo: a verdade financeira vive no Financeiro.

## Erros comuns

- **"Valor deve ser maior que zero"** — você deixou o valor em branco ou informou 0. Informe um valor positivo.
- **"Lançamento já pago não pode ser editado"** — tente editar um lançamento Pago. Estorne o pagamento no Financeiro primeiro.
- **Esquecer a competência** — sem competência informada, o sistema usa o mês atual; confira se é mesmo o mês desejado, especialmente em folhas retroativas.

## Dicas e observações

- O botão **Pagar** só aparece em lançamentos com status **Previsto**. Lançamentos já pagos não exibem o botão.
- Os cartões de totais respeitam os filtros: se você filtrar por um tipo ou status, os valores de Previsto e Pago se ajustam ao que está sendo exibido.
- Os números desta tela alimentam os cartões "Pagamentos pendentes" e "Pago no mês" do Dashboard de RH.

## Veja também

- [Dashboard de RH](./rh.md)
- [Ficha do colaborador](./rh-colaboradores-id.md)
- [Eventos](./rh-eventos.md)
