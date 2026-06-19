---
title: Formas de Pagamento
sidebar_position: 5
---

# Formas de Pagamento

Aqui você cadastra as formas pelas quais o dinheiro entra ou sai — Pix, Cartão de Crédito, Boleto, Dinheiro, etc. Cada lançamento financeiro pode ter uma forma de pagamento associada, o que ajuda a filtrar e analisar como os pagamentos são feitos.

## Como acessar

**ERP** → **Financeiro** → **Formas de Pagamento**.

![Formas de Pagamento](/img/manual/erp/formas-pagamento.png)

## O que você vê nesta tela

Um campo de busca (por nome ou código) e a tabela com as colunas:

| Coluna | O que é |
|---|---|
| # | Identificador da forma de pagamento |
| Nome | Nome da forma (ex.: Pix, Boleto) |
| Código | Código único da forma |
| Situação | Ativo ou Inativo |

## O que dá pra fazer aqui

### Cadastrar uma forma de pagamento

1. Clique em **Nova forma**.
2. Preencha **Nome** (obrigatório), ex.: "Pix", "Cartão de Crédito", "Boleto".
3. Opcionalmente informe um **Código Único** (ex.: "PIX01"). Se você deixar em branco, o sistema gera um código automaticamente a partir do nome.
4. Escolha a **Situação** (Ativo ou Inativo).
5. Clique em **Criar forma**.

![Nova forma de pagamento](/img/manual/erp/formas-pagamento-novo.png)

### Editar uma forma

Dê duplo clique na linha, ou clique no ícone de **lápis**.

### Excluir uma forma

Clique no ícone de **lixeira** na linha e confirme.

## Regras de negócio

- **Código obrigatório no banco, opcional para você:** internamente o código não pode ficar em branco. Se você não digitar nada, o sistema gera um código a partir do nome (sem acentos, em maiúsculas, com `_` no lugar de espaços, ex.: "Cartão de Crédito" → `CARTAO_DE_CREDITO`), limitado a 50 caracteres.
- **Situação:** uma forma marcada como **Inativa** continua existindo (e segue válida nos lançamentos antigos que já a usavam), mas serve para sinalizar que não deve mais ser escolhida em novos lançamentos.
- **Exclusão é "soft":** ao excluir, a forma é apenas marcada como removida; o histórico financeiro que a referenciava não é afetado.
- **Permissões:** criar, editar, ver e excluir formas de pagamento dependem das permissões correspondentes no perfil do usuário.

## Dicas e observações

- O **Código** precisa ser único. Se você não informar um, ele é derivado do nome automaticamente — então não é obrigatório digitá-lo.
- A forma de pagamento é escolhida na janela de cadastro de cada lançamento, em **Contas**, e também pode ser usada como filtro na lista de Contas.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
