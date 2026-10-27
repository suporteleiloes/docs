---
title: Intimações
sidebar_position: 1
---

# Intimações

A tela de **Intimações** reúne, em uma só lista, as intimações registradas nas etapas de produtividade de **todos os processos**. Cada intimação tem data da intimação, prazo, data da resposta e observações, e um selo que mostra na hora se ela está **pendente**, **respondida** ou com **prazo vencido** — assim a equipe não perde nenhum prazo.

## Como acessar

- **Processos** → **Intimações** (menu lateral); ou
- **Processos** → **Produtividade** → botão **Intimações**.

![Intimações](/img/manual/erp/processos/intimacoes-lista.jpg)

## Pré-requisitos

A intimação pertence a uma **etapa de produtividade**. O processo precisa estar com **Produtividade habilitada** (card **Detalhes** do [processo](./-id.md#card-detalhes)).

## O que você vê nesta tela

### Filtros

| Filtro | O que faz |
|---|---|
| Nº do processo | Mostra só as intimações do processo informado. |
| Situação | **Todas**, **Sem resposta** ou **Respondidas**. |

### Colunas

| Coluna | O que é |
|---|---|
| Processo | Número do processo (clique para abrir o processo). |
| Etapa | Etapa de produtividade em que a intimação foi registrada. |
| Intimação | Data da intimação. |
| Prazo | Data-limite para responder. |
| Resposta | Data em que foi respondida (vazio enquanto não houver resposta). |
| Situação | Selo **Pendente** (amarelo), **Respondida** (verde) ou **Prazo vencido** (vermelho). |
| Observações | Texto livre da intimação. |
| (ações) | **Editar** e **Excluir**. |

## O que dá pra fazer aqui

### Cadastrar uma intimação

1. Clique em **Nova intimação**.
2. Informe o **Número do processo**. O sistema busca o processo e lista as etapas que aceitam intimação.
3. Escolha a **etapa**.
4. Preencha **Data da intimação**, **Data do prazo**, e a **Data da resposta** se já foi respondida.
5. Escreva as **Observações** e clique em **Salvar**.

A intimação também pode ser registrada direto no cartão da etapa, em [Produtividade](./produtividade-painel.md#registrar-intimações).

### Registrar a resposta

1. Clique em **Editar** na linha.
2. Preencha a **Data da resposta**.
3. Clique em **Salvar**. O selo muda para **Respondida**.

### Excluir

Clique na lixeira e confirme.

## Regras de negócio

- A situação é calculada automaticamente: com data de resposta → **Respondida**; sem resposta e com prazo já passado → **Prazo vencido**; caso contrário → **Pendente**.
- As mesmas intimações aparecem no cartão **Intimações** da etapa, no processo e no painel de Produtividade — editar em um lugar atualiza os outros.

## Erros comuns

- **Ao cadastrar, nenhuma etapa aparece** — o processo não tem a produtividade habilitada, ou o número foi digitado errado.

## Dicas

:::tip
Filtre por **Sem resposta** no começo do dia: as linhas em vermelho são as intimações com prazo vencido que precisam de ação imediata.
:::

## Veja também

- [Produtividade](./produtividade-painel.md)
- [Processo (detalhe)](./-id.md)
- [Andamentos Processuais](./andamentos.md)
