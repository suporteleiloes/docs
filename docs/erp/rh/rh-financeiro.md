---
title: Financeiro de RH
sidebar_position: 7
---

# Financeiro de RH

A tela de Financeiro de RH controla os pagamentos ligados aos colaboradores: salários, bônus, comissões, descontos e benefícios. Aqui você lança o que está previsto, acompanha os totais e marca cada lançamento como pago.

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
| Status | Filtra por situação: Cancelado, Previsto ou Pago |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Colaborador | Pessoa a quem o lançamento se refere |
| Tipo | Tipo do lançamento (descontos aparecem em vermelho) |
| Competência | Mês/data de competência do lançamento |
| Valor | Valor do lançamento (descontos aparecem com sinal de menos, em vermelho) |
| Status | Situação (Cancelado, Previsto, Pago) |

## O que dá pra fazer aqui

### Criar um novo lançamento

1. Clique em **+ Novo lançamento**.
2. Em **Colaborador**, digite o nome e selecione a pessoa na lista.
3. Escolha o **Tipo** (Salário, Bônus, Comissão, Desconto, Benefício).
4. Informe o **Valor (R$)** — precisa ser maior que zero.
5. Defina a **Competência** (o mês a que o lançamento se refere).
6. Informe o **Vencimento**, se houver.
7. Use **Descrição** para uma observação opcional.
8. Clique em **Salvar**. O lançamento entra na lista como **Previsto**.

![Novo lançamento](/img/manual/erp/rh-financeiro-novo.png)

### Marcar um lançamento como pago

1. Em um lançamento com status **Previsto**, clique no botão **Pagar**.
2. Confirme a mensagem **"Registrar pagamento?"** clicando em **Pagar**.
3. O lançamento passa para o status **Pago** e o valor entra no total de pagos.

### Editar um lançamento

1. Na linha desejada, clique no ícone de lápis (**✎**).
2. Ajuste os campos. (Ao editar, o colaborador fica fixo e não pode ser trocado.)
3. Clique em **Salvar**.

### Remover um lançamento

1. Na linha desejada, clique no ícone **⨯**.
2. Confirme a mensagem **"Remover lançamento?"** clicando em **Remover**. Esta ação não pode ser desfeita.

## Dicas e observações

- O botão **Pagar** só aparece em lançamentos com status **Previsto**. Lançamentos já pagos ou cancelados não exibem o botão.
- Os cartões de totais respeitam os filtros: se você filtrar por um tipo ou status, os valores de Previsto e Pago se ajustam ao que está sendo exibido.
- Os números desta tela alimentam os cartões "Pagamentos pendentes" e "Pago no mês" do Dashboard de RH.

## Veja também

- [Dashboard de RH](./rh.md)
- [Ficha do colaborador](./rh-colaboradores-id.md)
- [Eventos](./rh-eventos.md)
