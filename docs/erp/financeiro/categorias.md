---
title: Plano de Contas (Categorias)
sidebar_position: 4
---

# Plano de Contas (Categorias)

O plano de contas é a lista de categorias que classificam cada lançamento financeiro — separadas em **Receitas** e **Despesas**. É o que faz seus relatórios (como o DRE) fazerem sentido: cada conta a pagar ou a receber é encaixada em uma categoria. As categorias podem ter subcategorias, formando uma árvore.

## Como acessar

**ERP** → **Financeiro** → **Plano de Contas**.

![Plano de Contas](/img/manual/erp/categorias.png)

## O que você vê nesta tela

A tela é dividida em dois quadros lado a lado:

- **Receitas** (à esquerda), com a contagem de categorias.
- **Despesas** (à direita), com a contagem de categorias.

Cada quadro mostra as categorias em árvore: a categoria principal e, recuadas abaixo, suas subcategorias. Quando a categoria tem um **código** contábil, ele aparece ao lado do nome. Há um campo de **busca** no topo para encontrar uma categoria pelo nome.

## O que dá pra fazer aqui

### Cadastrar uma categoria

1. No cabeçalho, clique em **Receita** (para criar categoria de receita) ou **Despesa** (para criar categoria de despesa).
2. Preencha **Descrição** (obrigatório), ex.: "Serviços de leilão".
3. Confira o **Tipo** (Receita ou Despesa) — já vem definido pelo botão que você usou.
4. Opcionalmente informe um **Código** contábil (ex.: 1.1.2).
5. Escolha o **Grupo DRE** para definir em qual grupo do Demonstrativo de Resultado esta categoria aparece.
6. Em **Categoria pai (opcional)**, busque outra categoria para tornar esta uma subcategoria. A hierarquia suporta até 3 níveis (Pai // Filho // Neto).
7. Marque **Matéria-prima** se a categoria for usada no controle de compras.
8. Mantenha **Ativo** ligado.
9. Clique em **Criar categoria**.

![Nova categoria](/img/manual/erp/categorias-novo.png)

### Criar uma subcategoria

Passe o mouse sobre a categoria desejada e clique no botão **+** (Subcategoria) que aparece na linha. A janela abre já com o tipo e o pai preenchidos.

### Editar uma categoria

Clique sobre o nome da categoria (ou da subcategoria) na árvore. Abre a janela de edição já preenchida.

### Excluir uma categoria

Passe o mouse sobre a linha e clique no ícone de **lixeira**, depois confirme. Atenção: lançamentos já classificados nessa categoria ficarão sem categoria.

## Dicas e observações

- O **Grupo DRE** é o que conecta a categoria ao relatório de resultado. Categorias sem grupo DRE não aparecem agrupadas nesse relatório.
- Monte a árvore do mais geral (categoria-pai) para o mais específico (subcategorias). Isso deixa relatórios e filtros mais claros.
- Em vez de excluir uma categoria em uso, considere desativá-la (campo **Ativo**), preservando o histórico dos lançamentos.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Centro de Custo](./cc.md)
