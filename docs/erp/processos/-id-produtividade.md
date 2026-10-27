---
title: Etapas / Produtividade do processo
sidebar_position: 14
---

# Etapas / Produtividade do processo

Esta tela mostra a **produtividade de um único processo**: as etapas **Intimações**, **Indicação**, **Nomeação** e **Homologação**, cada uma num cartão com situação, datas de ciência, responsáveis, pagamentos, intimações e anexos.

## Como acessar

- No [processo](./-id.md), card **Detalhes** → **Abrir produtividade →** (aparece quando a produtividade está habilitada); ou
- Aba **Acompanhamento (Etapas)** do processo, que mostra os mesmos cartões; ou
- **Processos** → **Produtividade** → pesquisa pelo número do processo.

![Produtividade do processo](/img/manual/erp/processos/processo-produtividade.jpg)

## O que você vê nesta tela

| Elemento | O que é |
|---|---|
| ← Processo | Volta para a tela do processo. |
| Produtividade · número | Número do processo. |
| Painel geral de produtividade | Link para o [painel geral](./produtividade-painel.md). |
| Cliente / Vara | Cliente e vara do processo. |
| Cartões das etapas | Uma etapa por cartão, com situação (Pendente/Concluído), canal e datas de ciência, responsáveis, intimações e anexos. |

## O que dá pra fazer aqui

Tudo é feito pelo menu **•••** de cada cartão:

| Ação | O que faz |
|---|---|
| Modificar etapa | Situação, canal de ciência, datas, resumo, observações e "estou ciente". |
| Adicionar pessoa | Inclui um responsável na etapa. |
| Registrar um pagamento | Gera a despesa no Financeiro para um responsável. |
| Adicionar intimação | Só no cartão **Intimações**. |
| Anexar arquivos | Botão **Anexar arquivos** ou arrastar para o cartão. |

O passo a passo de cada ação está em [Produtividade → Trabalhar numa etapa](./produtividade-painel.md#trabalhar-numa-etapa).

## Regras de negócio

- As etapas são criadas automaticamente quando a **Produtividade** é habilitada no processo, conforme o cadastro de [Etapas de produtividade](./produtividade-painel.md#etapas-de-produtividade).
- Uma etapa só pode ser marcada como **Concluído** com pelo menos **um anexo** comprovando.
- O pagamento de etapa vira despesa no **Financeiro**, vinculada à etapa e ao processo.

## Erros comuns

- **Tela avisa que o processo não tem produtividade ativa** — ligue **Produtividade habilitada** no card **Detalhes** do processo.

## Veja também

- [Produtividade (painel geral)](./produtividade-painel.md)
- [Processo (detalhe)](./-id.md)
- [Intimações](./intimacoes.md)
