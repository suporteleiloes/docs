---
title: Cadastros Auxiliares
sidebar_position: 6
---

# Cadastros Auxiliares

Esta tela reúne os **cadastros de apoio** usados nos processos: tribunais, comarcas, varas, juízos, tipos de parte e canais de ciência. São as listas que alimentam os selects ao cadastrar e filtrar processos. Manter esses cadastros organizados deixa o restante do módulo de Processos mais consistente.

## Como acessar

**ERP** → **Processos** → aba **Cadastros Auxiliares**.

![Cadastros Auxiliares](/img/manual/erp/cadastros.png)

## O que você vê nesta tela

No topo, o título **Cadastros Auxiliares** e o botão **Novo**. Abaixo, um cartão com abas (no celular, as abas viram um seletor) e a tabela do cadastro selecionado.

### Abas disponíveis

| Aba | O que cadastra | Campos |
|---|---|---|
| Tribunais | Tribunais. | Nome, UF, Site, Descrição. |
| Comarcas | Comarcas. | Nome, **Tribunal** (obrigatório), UF, Código. |
| Varas | Varas. | Nome, **Comarca** (obrigatório), ID PJE. |
| Juízos | Juízos. | Nome. |
| Tipos de Parte | Papéis das partes do processo. | Código (slug), Nome, Descrição. |
| Canais de Ciência | Canais de comunicação para ciência das publicações. | Nome, Descrição. |

A tabela mostra a coluna **#** (id), as colunas dos campos da aba e um botão de editar em cada linha.

## O que dá pra fazer aqui

- **Trocar de cadastro**: clique na aba desejada (ou escolha no seletor, no celular).
- **Criar** um novo registro na aba atual.
- **Editar** um registro existente.

### Criar um registro

1. Selecione a aba do cadastro que quer alimentar (ex.: **Comarcas**).
2. Clique em **Novo**. Abre a janela de cadastro com os campos daquela aba.
3. Preencha os campos. Em **Comarcas**, selecione o **Tribunal**; em **Varas**, selecione a **Comarca** (são obrigatórios).
4. Clique em **Criar**. O registro aparece na tabela.

### Editar um registro

1. Na linha do registro, clique no ícone de lápis.
2. Ajuste os campos na janela.
3. Clique em **Salvar**.

## Dicas e observações

- **Comarca** exige um **Tribunal** vinculado, e **Vara** exige uma **Comarca** vinculada — esses campos são obrigatórios para salvar. Por isso o cadastro segue uma ordem natural: primeiro o **Tribunal**, depois a **Comarca**, depois a **Vara**.
- Os tribunais e comarcas cadastrados aqui são os que aparecem nos filtros encadeados (Tribunal → Comarca → Vara) da tela de Processos e no formulário de cadastro de processo. Em **Varas**, o campo **ID PJE** ajuda o robô/integração a casar a vara com o sistema do tribunal.
- O botão de salvar só fica habilitado quando o campo obrigatório principal da aba está preenchido.
- **Por que manter esses cadastros?** Eles padronizam os selects do módulo de Processos. Sem um Tribunal/Comarca/Vara cadastrado, você não consegue selecioná-lo ao cadastrar um processo nem usar os filtros encadeados.

> A confirmar: o tribunal possui internamente um indicador de **busca por robô ativada** (usado para decidir se o robô varre aquele tribunal), mas esse campo ainda **não é editável por esta tela** — só os campos listados acima aparecem no formulário.

## Veja também

- [Processos](./processo.md)
- [Cadastrar Processo](./novo.md)
- [Advogados](./advogados.md)
