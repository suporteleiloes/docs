---
title: WhatsApp
sidebar_position: 6
---

# WhatsApp

Esta tela conecta o sistema ao WhatsApp do seu cliente. Aqui você cadastra as credenciais do provedor de WhatsApp, ativa a conexão e copia a URL de webhook que recebe as mensagens. É o que faz campanhas, console de atendimento e respostas automáticas funcionarem.

## Como acessar

**Configurações** → **WhatsApp**.

![WhatsApp](/img/manual/erp/configuracoes-whatsapp.png)

## O que você vê nesta tela

No topo, um botão **Atualizar status** verifica a conexão na hora.

Logo abaixo, um **banner de status** resume a situação: se há provedor configurado, qual está ativo e se ele está conectado. O banner traz uma mini-lista dos três provedores indicando, por cor, quem está conectado, em standby ou sem credenciais. Há também uma nota lembrando que **apenas um provedor pode estar conectado por vez**.

Em seguida vêm três cartões de credenciais (um por provedor) e, ao final, o cartão do **Webhook de entrada** do provedor ativo.

| Provedor | Para quê serve |
|---|---|
| **Z-API** | Conexão via QR Code (usa um celular como gateway). Mais simples de começar. |
| **API Oficial (Meta)** | Integração oficial da Meta, sem celular. Mais técnica, sem risco de ban. |
| **360dialog (BSP)** | Cloud API oficial via parceiro 360dialog. Setup mais simples que ir direto na Meta. |

Cada cartão mostra um selo de situação: **Conectado**, **Desconectado**, **Em standby** ou **Incompleto**.

## O que dá pra fazer aqui

### Configurar a Z-API

1. No cartão **Credenciais Z-API**, preencha **Instance ID**, **Token da instância** e **Client-Token (conta Z-API)**.
2. Informe o **Bridge User ID** (usuário que representa contatos externos; o padrão é 1).
3. Clique em **Salvar credenciais**. O sistema gera automaticamente o token de webhook.
4. Copie a URL do cartão **Webhook de entrada** e cole no painel da Z-API em **Configurar webhooks → Ao receber** (método POST, body JSON).
5. No painel da Z-API, conecte o WhatsApp escaneando o **QR Code** com o celular dedicado.
6. Volte e clique em **Conectar**. O status deve ficar verde.

> Dica: clique no botão **?** no título de cada cartão para abrir o tutorial passo a passo com links dos painéis.

![Tutorial de credenciais](/img/manual/erp/configuracoes-whatsapp-tutorial.png)

### Configurar a API Oficial (Meta)

1. No cartão **Credenciais Cloud API (Meta)**, preencha **Phone Number ID**, opcionalmente **WhatsApp Business Account ID (WABA)**, **Access Token (System User)** e **App Secret**.
2. Informe o **Bridge User ID** e clique em **Salvar credenciais** — o **Verify Token** é gerado automaticamente.
3. Copie a URL do **Webhook de entrada** e configure no painel da Meta (Callback URL + Verify Token), assinando os campos `messages` e `message_status`.
4. Volte e clique em **Conectar**.

### Configurar a 360dialog

1. No cartão **Credenciais 360dialog (BSP)**, preencha a **API Key do canal** e o **Número do canal (Phone Number ID)**.
2. Informe o **Bridge User ID** e clique em **Salvar credenciais**.
3. Copie a URL do **Webhook de entrada** e configure no painel da 360dialog (Channels → Set Webhook).
4. Volte e clique em **Conectar**.

### Conectar / desconectar um provedor

- O botão **Conectar** de um cartão torna aquele provedor o ativo (e coloca o anterior em standby, mantendo as credenciais salvas).
- O botão **Desconectar** desliga o provedor ativo. Na Z-API, isso também faz logout do celular pareado. As campanhas param até reconectar.

### Copiar a URL de webhook

No cartão **Webhook de entrada**, clique em **Copiar** para levar a URL para a área de transferência.

### Gerar novo token de webhook (Z-API)

No cartão de webhook da Z-API, clique em **Gerar novo token**, confirme, e recadastre a nova URL no painel da Z-API. Use só se suspeitar que o token vazou.

## Dicas e observações

- **Apenas um provedor fica conectado por vez.** Você pode salvar credenciais dos três e alternar com Conectar/Desconectar.
- Os tokens já salvos aparecem mascarados; para mantê-los, deixe o campo em branco ao salvar de novo.
- Use o botão **?** de cada cartão para o tutorial completo de como obter as credenciais em cada provedor.
- Se o banner indicar "WhatsApp não pareado", conclua o QR Code (Z-API) ou o webhook (Meta/360dialog) antes de clicar em Conectar.

## Veja também

- [Fila de mensagens (Messenger)](configuracoes-fila-mensagens.md)
