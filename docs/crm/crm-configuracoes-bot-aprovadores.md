---
title: Aprovadores do bot
sidebar_position: 10
---

# Aprovadores do bot

Alguns pedidos feitos ao bot em um **grupo de WhatsApp** são **sensíveis** — operações de **escrita** ou **destrutivas**. Em vez de executar na hora, o bot **enfileira** e pede uma **autorização humana**. Os **aprovadores** são as pessoas que podem dar essa autorização.

## Como acessar

**ERP** → **Configurações** → **Integrações** → **Aprovadores do bot**.

![Aprovadores do bot](/img/manual/crm/bot-aprovadores.jpg)

A tela lista quem está cadastrado (nome + WhatsApp), a **situação** (ativo/inativo) e permite **adicionar** e **remover**.

## Para que serve

O bot pode ser configurado com habilidades que **alteram** algo (ver [Add-ons do bot](./crm-configuracoes-bot-addons.md)). Por segurança, quando o pedido é de **escrita**, o bot **não executa sozinho**: ele responde no grupo com um **token** e espera alguém autorizado confirmar.

O fluxo, no grupo, é assim:

1. Alguém pede uma operação sensível ao bot.
2. O bot **bloqueia** e responde, por exemplo:
   > ⚠️ *Ação sensível bloqueada* (exige aprovação): responda **aprovar A1B2**
3. Um **aprovador** responde no grupo: `aprovar A1B2`.
4. O sistema confere se **quem respondeu está na lista de aprovadores** (pelo número de WhatsApp). Se estiver, a operação é executada; se não, é recusada.

É por isso que o telefone cadastrado precisa ser **exatamente o número de WhatsApp** que a pessoa usa no grupo — é por ele que o sistema reconhece a aprovação.

## Cadastrar um aprovador

1. Informe o **Nome** e o **WhatsApp (com DDD)** — ex.: `5538999160908`.
2. Clique em **Adicionar aprovador**.
3. A pessoa aparece na lista como **Ativa**. Você pode **desativar** (mantém o cadastro, mas ela deixa de poder aprovar) ou **remover**.

:::danger Antes de depender do fluxo de aprovação
Cadastre pelo menos **um** aprovador (o ideal é o seu próprio WhatsApp). Sem nenhum aprovador ativo, o `aprovar <token>` sempre responde "não autorizado" e a operação nunca é executada.
:::

## Permissão exclusiva

Gerenciar aprovadores é uma ação **protegida por uma permissão própria**: **`CRM_BOT_APROVADOR_GERIR`** (ou o superusuário). De propósito, **um administrador comum não abre esta tela** nem consegue se auto-adicionar — se qualquer admin pudesse se incluir, o controle não teria valor.

Quem não tem a permissão vê uma tela de **acesso restrito**, explicando qual permissão é necessária.

## Regras de negócio

- Só quem tem **`CRM_BOT_APROVADOR_GERIR`** (ou superusuário) gerencia a lista.
- A aprovação é reconhecida **pelo número de WhatsApp** — precisa bater com o número que respondeu no grupo.
- Cada `aprovar <token>` libera **apenas aquela** operação pendente (não é uma autorização geral).
- Um aprovador **inativo** não consegue aprovar.

## Erros comuns

- **"não autorizado" ao responder `aprovar`** — o número que respondeu não está cadastrado (ou está inativo), ou está diferente do que a pessoa usa no grupo.
- **Não consigo abrir a tela** — você não tem a permissão `CRM_BOT_APROVADOR_GERIR`. Peça a um superusuário.

## Veja também

- [Add-ons do bot](./crm-configuracoes-bot-addons.md)
- [WhatsApp — números, provedores e guardrail](./crm-configuracoes-whatsapp.md)
- [Chatbot](./crm-configuracoes-chatbot.md)
