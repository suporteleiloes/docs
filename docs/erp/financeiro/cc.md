---
title: Centro de Custo
sidebar_position: 3
---

# Centro de Custo

Centros de custo são as "caixinhas" que organizam suas receitas e despesas por área ou finalidade (por exemplo: Operacional, Marketing, Administrativo). Ao classificar lançamentos por centro de custo, você consegue acompanhar quanto cada área custa e arrecada, e definir metas.

## Como acessar

**ERP** → **Financeiro** → **Centro de Custo**.

![Centro de Custo](/img/manual/erp/cc.png)

## O que você vê nesta tela

Duas abas — **Ativos** e **Inativos** — separam os centros conforme a situação. Há um campo de busca por nome e a tabela com as colunas:

| Coluna | O que é |
|---|---|
| # | Identificador do centro |
| Nome | Nome do centro de custo |
| Descrição | Texto livre explicando o centro |
| Pai | Centro de custo pai, quando este é um subcentro |
| Meta Receita | Meta de receita definida para o centro |
| Meta Despesa | Meta de despesa definida para o centro |
| Situação | Ativo ou Inativo |

## O que dá pra fazer aqui

### Cadastrar um novo centro de custo

1. Clique em **Novo centro**.
2. Preencha **Nome** (obrigatório).
3. Opcionalmente, escreva uma **Descrição**.
4. Defina a **Meta de Receita** e a **Meta de Despesa** se quiser acompanhar metas.
5. Em **Centro de custo pai (opcional)**, busque um centro existente para transformar este em subcentro. A hierarquia suporta até 3 níveis (Pai // Filho // Neto). Deixe em branco para criar um centro raiz.
6. Escolha a **Situação** (Ativo ou Inativo).
7. Clique em **Criar centro**.

![Novo centro de custo](/img/manual/erp/cc-novo.png)

### Editar um centro

Dê duplo clique na linha, ou clique no ícone de **lápis**. Abre a mesma janela do cadastro, já preenchida.

### Excluir um centro

Clique no ícone de **lixeira** na linha e confirme.

## Dicas e observações

- Um centro que já é "neto" (3º nível) não pode receber novos filhos.
- Usar Ativos/Inativos em vez de excluir preserva o histórico: desative o centro que não usa mais, sem perder os lançamentos antigos.
- O centro de custo é escolhido na janela de cadastro de cada lançamento, em **Contas**.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Plano de Contas (categorias)](./categorias.md)
