---
title: Equipe e Custos
sidebar_position: 5
---

# Equipe e Custos

A tela **Equipe e Custos** cadastra as pessoas que trabalham nos projetos (**colaboradores**) e os **escritórios / setores** aos quais elas pertencem, junto com os custos de cada um. Esses dados alimentam os cálculos de custo de projeto e tarefa.

## Como acessar

**ERP** → **Projetos** → botão **Equipe** (no cabeçalho da lista de projetos).

![Equipe e custos](/img/manual/erp/projetos-equipe.png)

## O que você vê nesta tela

A tela tem duas abas: **Colaboradores** e **Escritórios / Setores**. O botão de criar no cabeçalho muda conforme a aba ativa.

### Aba Colaboradores

| Coluna | O que é |
|---|---|
| Colaborador | Nome da pessoa cadastrada como colaboradora. |
| Escritório | Escritório/setor ao qual ela está vinculada. |
| Custo mensal | Custo mensal da pessoa (em reais). |
| Custo/hora | Custo por hora da pessoa (em reais). |
| Ações | Botões de editar e excluir. |

### Aba Escritórios / Setores

| Coluna | O que é |
|---|---|
| Escritório/Setor | Nome do escritório ou setor. |
| Descrição | Texto opcional. |
| Custo mensal | Custo mensal de rateio do escritório (em reais). |
| Ações | Botões de editar e excluir. |

## O que dá pra fazer aqui

- Alternar entre **Colaboradores** e **Escritórios / Setores** pelas abas.
- **Cadastrar**, **editar** e **excluir** colaboradores e escritórios.
- **Voltar** para a lista de projetos.

### Cadastrar um colaborador

1. Na aba **Colaboradores**, clique em **Novo colaborador**.
2. Em **Pessoa**, busque e selecione a pessoa (obrigatório). Ela precisa já estar cadastrada como pessoa no sistema.
3. Escolha o **Escritório / Setor** (opcional).
4. Informe o **Custo mensal** e o **Custo / hora** (opcionais, em reais).
5. Escreva uma **Observação** (opcional).
6. Clique em **Criar**.

![Novo colaborador](/img/manual/erp/projetos-equipe-colaborador.png)

### Cadastrar um escritório / setor

1. Vá para a aba **Escritórios / Setores** e clique em **Novo escritório**.
2. Preencha o **Nome** (obrigatório, ex.: Matriz, Setor Jurídico).
3. Escreva a **Descrição** (opcional).
4. Informe o **Custo mensal (rateio)** (opcional, em reais).
5. Clique em **Criar**.

### Editar e excluir

1. Clique no ícone de **lápis (Editar)** para alterar, ou no de **lixeira (Excluir)** para remover.
2. A exclusão pede confirmação na janela.

## Dicas e observações

- Ao **editar** um colaborador, a **Pessoa** não pode ser trocada — o campo fica apenas para leitura. Para vincular outra pessoa, crie um novo colaborador.
- Uma mesma pessoa não pode ser cadastrada duas vezes como colaboradora; o sistema avisa se ela já existir.
- Os valores de custo são opcionais, mas necessários para que os relatórios de custo de projeto fiquem precisos.

## Veja também

- [Projetos](./projetos.md)
- [Detalhe do projeto](./projetos-id.md)
