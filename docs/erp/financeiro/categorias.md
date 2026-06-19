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

Passe o mouse sobre a linha e clique no ícone de **lixeira**, depois confirme.

A exclusão é **bloqueada** quando a categoria está em uso. O sistema impede e mostra uma mensagem nestes casos:

- **Há lançamentos classificados nessa categoria** — "Existem movimentações relacionadas à esta categoria. Mova-as para outra categoria antes de tentar apagar."
- **A categoria tem subcategorias** — "Existem categorias relacionadas à esta categoria. Mova-as para outra categoria antes de tentar apagar."

Ou seja: para excluir, primeiro mova os lançamentos e as subcategorias para outra categoria. Quando isso não for prático, prefira **desativar** a categoria (campo **Ativo**), preservando o histórico.

## Regras de negócio

- **Tipo é definitivo na prática.** O tipo (Receita ou Despesa) define em que quadro a categoria aparece e como ela entra nos relatórios. Crie a categoria pelo botão certo.
- **Hierarquia de no máximo 3 níveis** (Pai // Filho // Neto). Uma categoria de 3º nível não pode receber subcategorias, e uma categoria não pode ser pai dela mesma.
- **Exclusão é soft-delete e bloqueada por uso** (ver acima): nada é apagado de fato enquanto houver movimentações ou subcategorias vinculadas.
- **Grupo DRE** liga a categoria ao Demonstrativo de Resultado. Categorias sem grupo DRE não são agrupadas nesse relatório.
- **Permissões:** criar, editar, listar e excluir categorias são ações controladas por permissão de acesso. Se um botão não aparecer ou der erro de permissão, fale com quem administra os acessos.

## Erros comuns

- **"Existem movimentações relacionadas..."** ao excluir: a categoria tem lançamentos. Reclassifique os lançamentos antes, ou desative a categoria.
- **"Existem categorias relacionadas..."** ao excluir: a categoria tem subcategorias. Mova ou exclua as subcategorias primeiro.
- **Categoria não aparece no DRE:** falta definir o **Grupo DRE**.
- **Não consigo escolher uma categoria como pai:** ela já está no 3º nível (neto) ou é a própria categoria que você está editando.

## Dicas e observações

- O **Grupo DRE** é o que conecta a categoria ao relatório de resultado. Categorias sem grupo DRE não aparecem agrupadas nesse relatório.
- Monte a árvore do mais geral (categoria-pai) para o mais específico (subcategorias). Isso deixa relatórios e filtros mais claros.
- Em vez de excluir uma categoria em uso, considere desativá-la (campo **Ativo**), preservando o histórico dos lançamentos.

## Veja também

- [Contas (a pagar / a receber / extrato)](./contas.md)
- [Centro de Custo](./cc.md)
