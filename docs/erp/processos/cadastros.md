---
title: Cadastros Auxiliares
sidebar_position: 6
---

# Cadastros Auxiliares

Esta tela reúne, em abas, os **cadastros de apoio** usados nos processos: tribunais, comarcas, varas (com os contatos do cartório), juízos, status de processo, classificações/motivos, tipos de parte e canais de ciência. São as listas que alimentam os seletores ao cadastrar e filtrar processos.

## Como acessar

**ERP** → **Processos** → aba **Cadastros Auxiliares**.

![Cadastros Auxiliares — Tribunais](/img/manual/erp/processos/cadastros-tribunais.jpg)

## O que você vê nesta tela

No topo, o botão **Novo** (cria um registro na aba aberta). Abaixo, as abas — no celular elas viram um seletor.

| Aba | O que cadastra | Campos principais |
|---|---|---|
| Tribunais | Tribunais. | Nome, UF, Site, Descrição, **Busca automática por robô ativada**. |
| Comarcas | Comarcas. | Nome, **Tribunal** (obrigatório), UF, Código. |
| Varas | Varas e os contatos do cartório. | Nome, Tribunal, **Comarca** (obrigatório), **Contatos** (nome, telefone, e-mail). |
| Juízos | Juízos. | Nome. |
| Status de processo | Situações que o processo pode ter. | Nome, Código único, Situação (ativo/inativo). |
| Classificação / Motivo | Classificações ligadas a status. | Nome, Código único, Descrição, **Status relacionados**. |
| Tipos de Parte | Papéis das partes do processo. | Código, Nome, Descrição. |
| Canais de Ciência | Canais de ciência das publicações. | Nome, Descrição. |

## O que dá pra fazer aqui

### Criar ou editar um registro

1. Abra a aba do cadastro (ex.: **Comarcas**).
2. Clique em **Novo**, ou no lápis da linha para editar.
3. Preencha os campos e clique em **Criar** (ou **Salvar alterações**).

### Ativar a busca do robô num tribunal

![Editar tribunal](/img/manual/erp/processos/cadastros-tribunal-modal.jpg)

1. Na aba **Tribunais**, clique no lápis do tribunal.
2. Marque **Busca automática por robô ativada**.
3. Clique em **Salvar alterações**. A coluna **Robô** passa a mostrar **Ativo**.

### Cadastrar os contatos de uma vara

![Varas com contatos](/img/manual/erp/processos/cadastros-varas.jpg)

1. Na aba **Varas**, clique no lápis da vara (ou no ícone de pessoa para ir direto aos contatos).
2. Em **Contatos da vara**, clique em **+ Adicionar contato**.
3. Informe **Nome** (obrigatório), **Telefone** e **E-mail**.
4. Clique em **Salvar alterações**. Os contatos aparecem na coluna **Contatos** da lista.

![Editar vara](/img/manual/erp/processos/cadastros-vara-modal.jpg)

Use os filtros **Todos os tribunais** e **Todas as comarcas** para achar a vara mais rápido.

### Status de processo

![Status de processo](/img/manual/erp/processos/cadastros-status.jpg)

Cada status mostra as classificações/motivos ligados a ele. Use o lápis para editar e o ícone de bloqueio para **inativar** (o status some dos seletores, mas os processos que já o usam continuam com ele). Marque **Mostrar inativos** para vê-los na lista.

### Classificação / Motivo

![Classificação / Motivo](/img/manual/erp/processos/cadastros-classificacao.jpg)

1. Clique em **Novo**.
2. Informe o **Nome** — o **Código único** é sugerido a partir do nome (pode ser alterado).
3. Escolha os **Status relacionados**: a classificação só aparece no cadastro do processo quando a situação escolhida é um desses status.
4. Clique em **Criar**. Para inativar, use o ícone de bloqueio da linha.

## Regras de negócio

- **Comarca** exige um **Tribunal** e **Vara** exige uma **Comarca**. Cadastre na ordem: Tribunal → Comarca → Vara.
- Os tribunais, comarcas e varas daqui alimentam a cascata **Tribunal → Comarca → Vara** do [cadastro de processo](./novo.md) e dos filtros da [lista de processos](./processo.md).
- O robô só varre automaticamente os tribunais com **Busca automática por robô ativada**.
- O código do status e da classificação é **único**: o sistema não aceita dois iguais.
- No cadastro do processo, a lista de **Classificação / Motivo** acompanha a **Situação** escolhida.

## Dicas

:::tip
Cadastre o telefone e o e-mail da secretaria da vara aqui: eles ficam à mão para toda a equipe sempre que precisar falar com o cartório.
:::

- Os juízes (pessoas) ficam numa tela própria: [Juízes](./juizes.md).

## Veja também

- [Processos](./processo.md)
- [Cadastrar Processo](./novo.md)
- [Juízes](./juizes.md)
- [Produtividade](./produtividade-painel.md)
