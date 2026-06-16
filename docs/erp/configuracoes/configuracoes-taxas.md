---
title: Taxas
sidebar_position: 6
---

# Taxas

A tela de **Taxas** controla os **sistemas de taxação** da leiloeira — os conjuntos de taxas (comissão, serviços etc.) que são aplicadas aos arremates. Cada sistema reúne uma ou mais taxas, e cada taxa pode ter critérios que definem quando ela é aplicada (por comitente, tipo de bem, valor de venda ou estado de conservação).

## Como acessar

**Configurações** → **Taxas** (ou pelo cartão **Taxas** em Cadastro Básico).

![Taxas](/img/manual/erp/configuracoes-taxas.png)

## O que você vê nesta tela

A tabela lista os sistemas de taxação cadastrados:

| Coluna | O que é |
|---|---|
| **#** | Número interno do sistema |
| **Sistema de Taxação** | Nome do conjunto de taxas |
| **Padrão** | Marca "Principal" no sistema aplicado automaticamente |
| **Taxas** | Quantidade de taxas dentro do sistema |
| **Status** | Ativo ou Inativo |

À direita de cada linha há os botões **Editar** e **Excluir** (o Excluir não aparece no sistema marcado como Principal). Há ainda o campo de busca por nome acima da tabela.

## O que dá pra fazer aqui

### Criar um novo sistema de taxação

1. Clique em **Novo sistema de taxação**.
2. Preencha o **Nome do Sistema** (obrigatório, ex.: "Padrão 2024").
3. Defina **Sistema Principal** (Sim aplica automaticamente este sistema) e o **Status** (Ativo/Inativo).
4. Clique em **Adicionar taxa** para incluir cada taxa do sistema.
5. Para cada taxa, preencha:
   - **Nome da taxa** (ex.: "Comissão").
   - **Tipo**: Porcentagem (%) ou Valor fixo (R$).
   - **Valor** (o número; o símbolo % ou R$ acompanha o tipo escolhido).
   - **Categoria financeira** (onde a receita será lançada).
6. (Opcional) Defina **Critérios de aplicação** para a taxa — veja abaixo. Se nenhum critério for adicionado, a taxa se aplica sempre.
7. Clique em **Criar sistema**.

![Novo sistema de taxação](/img/manual/erp/configuracoes-taxas-novo.png)

### Definir critérios de aplicação de uma taxa

Os critérios decidem **quando** a taxa vale. Eles funcionam em grupos:

1. Dentro de uma taxa, clique em **+ Adicionar critérios de aplicação** (ou **Novo grupo de critérios (OU)** para criar outro grupo).
2. Em cada critério, escolha o **Campo**: Comitente, Tipo de Bem, Valor Venda ou Conservação.
3. Escolha a **Condição** (por exemplo, "É igual a" / "Não é igual a"; para Valor Venda, "É menor que" / "É maior que").
4. Informe o valor de comparação (selecionando o comitente, o tipo de bem, a conservação, ou digitando o valor em R$).
5. Para exigir várias condições juntas, clique em **Adicionar critério (E)** dentro do mesmo grupo.
6. Para alternativas, crie outro grupo com **Novo grupo de critérios (OU)**.

A lógica é: **dentro de um grupo, os critérios são combinados com E** (todos precisam ser verdadeiros); **entre grupos diferentes, a lógica é OU** (basta um grupo ser verdadeiro).

### Editar um sistema

Dê um duplo clique na linha ou clique em **Editar**. Ajuste o nome, as taxas e os critérios e clique em **Salvar alterações**.

### Excluir um sistema

Clique no botão **Excluir** (lixeira) e confirme. Isso remove todas as taxas e critérios do sistema, de forma irreversível. **O sistema marcado como Principal não pode ser excluído** — torne outro sistema o principal antes, se precisar.

## Dicas e observações

- Só um sistema deve ser o **Principal** — é ele que o ERP aplica automaticamente nos arremates.
- Vincular a **Categoria financeira** correta garante que a receita da taxa caia no lugar certo do financeiro.
- Use critérios para diferenciar comissões por comitente ou faixa de valor, sem precisar de vários sistemas separados.

## Veja também

- [Cadastro Básico](cadastro.md)
- [Configurações Globais](configuracoes-globais.md)
