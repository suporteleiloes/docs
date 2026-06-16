---
title: Depósitos
sidebar_position: 3
---

# Depósitos

Depósitos são os **locais onde o estoque é guardado** (almoxarifado central, filial, sala de leilão, etc.). Cada produto tem um saldo separado por depósito. Nesta tela você cadastra e edita os depósitos da sua leiloeira.

## Como acessar

**ERP** → **Almoxarifado** → **Depósitos**.

![Tela de Depósitos](/img/manual/erp/estoque-depositos.png)

## O que você vê nesta tela

Uma lista simples com os depósitos cadastrados.

| Coluna | O que é |
|---|---|
| Depósito | Nome do depósito. |
| Código | Código interno do depósito (quando informado). |
| Principal | Etiqueta **Principal** quando esse é o depósito padrão; "—" caso contrário. |
| Situação | **Ativo** ou **Inativo**. |
| (ações) | Botão de editar (ícone de lápis) no fim da linha. |

## O que dá pra fazer aqui

### Cadastrar um novo depósito

1. Clique em **+ Novo depósito** (canto superior direito).
2. Preencha o **Nome** (obrigatório).
3. (Opcional) Informe um **Código** interno.
4. Se este for o depósito padrão, ligue **Depósito principal**.
5. Clique em **Salvar**. O depósito passa a aparecer na lista e fica disponível nos seletores de depósito das operações de estoque.

![Modal de cadastro de depósito](/img/manual/erp/estoque-depositos-novo.png)

### Editar um depósito

1. Clique no ícone de lápis (✎) na linha do depósito.
2. Ajuste **Nome**, **Código** ou a marcação **Depósito principal**.
3. Clique em **Salvar**.

## Dicas e observações

- O **Nome** é obrigatório; o botão Salvar só fica ativo depois de preenchê-lo.
- Marcar um depósito como **Principal** o torna o padrão para novas operações. Use isso no depósito que você mais movimenta.
- Os depósitos cadastrados aqui são exatamente as opções que aparecem nos formulários de Entrada, Saída, Transferência e Ajuste, e no filtro por depósito das telas de [Estoque (Saldos)](./estoque.md) e [Movimentações](./estoque-movimentos.md).

## Veja também

- [Estoque (Saldos)](./estoque.md)
- [Movimentações](./estoque-movimentos.md)
