---
title: WhatsApp — números, provedores e guardrail
sidebar_position: 8
---

# WhatsApp — números, provedores e guardrail

Esta tela é onde você conecta os **números de WhatsApp** do seu negócio ao CRM. Você pode ter **vários números**, cada um com um **papel** (atender grupos, iniciar conversas 1:1, responder atendimentos) e um **provedor** diferente — e o sistema decide sozinho por qual número mandar cada mensagem.

## Como acessar

**ERP** → **Configurações** → **WhatsApp**.

![Números de WhatsApp](/img/manual/crm/whatsapp-numeros.jpg)

Cada linha mostra o **número**, o **provedor**, o **status** da conexão, os **papéis**, se ele pode **iniciar** conversas e se está **ativo**.

## A ideia central: número oficial × não-oficial

Existem dois tipos de conexão de WhatsApp, e eles servem para coisas diferentes:

| Provedor | Tipo | Serve para |
|---|---|---|
| **Z-API** | Não-oficial | **Grupos** de WhatsApp (só a Z-API consegue enviar/receber em grupos) e conversas em geral. |
| **Meta Cloud API** | Oficial | **Iniciar conversa 1:1** com o cliente **sem risco de banimento**, usando *templates* aprovados. |
| **360dialog** | Oficial (BSP) | Alternativa oficial para iniciar 1:1, via parceiro homologado. |

Você pode ter **os dois ao mesmo tempo**: um número Z-API para grupos e um número oficial para disparar avisos/convites/cobranças com segurança.

:::danger Guardrail anti-ban — leia antes de disparar mensagens
Números **não-oficiais** (Z-API) que ficam **iniciando conversa** com muita gente que não respondeu são **banidos** pelo WhatsApp — foi assim que já perdemos um número.

Por isso o sistema tem um **guardrail**: por padrão, **convite, aviso e cobrança saem só por e-mail**. Só saem por WhatsApp se houver um número que **permita iniciar conversa** — e o recomendado é que esse número seja **oficial (Meta Cloud API / 360dialog) com template aprovado**. Deixe a Z-API para **grupos** e **respostas** (quando o cliente já falou com você), nunca para disparo em massa de conversas novas.
:::

## Cadastrar ou editar um número

Clique em **Adicionar número** (ou em uma linha para editar). Escolha o **provedor** e informe as credenciais dele.

![Editar número — provedor e credenciais](/img/manual/crm/whatsapp-numero-provedor.jpg)

- **Nome (referência interna):** um apelido para você identificar o número (ex.: "Atendimento (grupos)", "Oficial (avisos)").
- **Provedor:** Z-API, Meta Cloud API ou 360dialog. Os campos de credencial mudam conforme a escolha (a Z-API pede *instance id* e *token*; a Meta Cloud pede *Phone Number ID*, *WABA ID*, *Access Token* e *App Secret*).
- **Telefone (E.164):** o número no formato internacional, ex.: `5511990002222`.

### Papéis do número

Mais abaixo você define **o que este número faz**:

![Papéis, guardrail e webhook do número](/img/manual/crm/whatsapp-numero-papeis.jpg)

| Papel | O que significa |
|---|---|
| **Atende grupos** | Recebe/envia em grupos. *Só disponível para Z-API.* |
| **Padrão para iniciar 1:1** | É por este número que saem convite/aviso/cobrança (o ideal é um número **oficial**). |
| **Padrão para respostas 1:1** | Respostas do bot/atendimento quando não há um número específico. |
| **Ativo** | Desligado = o número é ignorado no envio e no recebimento. |

### Permitir iniciar conversa (o guardrail, por número)

No bloco **Mensagens iniciadas pela empresa**, a chave **"Permitir iniciar conversa por este número"** controla o guardrail:

- **Desligada (padrão):** convite/aviso/cobrança desse número saem **só por e-mail** — proteção anti-ban.
- **Ligada:** o sistema pode iniciar conversas 1:1 por este número. Ligue **apenas** em números oficiais com template.

### Webhook próprio de cada número

Cada número tem um **webhook exclusivo**. Você cola essa URL no painel do provedor (Z-API/Meta). A URL carrega o **identificador do número** (ex.: `wa=7`) — é assim que o sistema sabe **qual número recebeu** a mensagem quando você tem vários. Há um botão para **gerar/renovar** o token do webhook.

## Regras de negócio

- **Grupos só funcionam por Z-API.** Um número oficial (Meta/360dialog) não envia/recebe em grupos.
- **Disparo de mensagens iniciadas** (convite/aviso/cobrança) respeita o guardrail: sem número habilitado para iniciar, vai por e-mail.
- Com **vários números**, o sistema roteia pelo papel: grupos → número de grupos; iniciar 1:1 → número "padrão para iniciar"; respostas → número "padrão para respostas".

## Dicas e observações

- O ideal é ter **dois números**: um **Z-API** (grupos + respostas) e um **oficial** (iniciar 1:1 com template).
- O **status** "Desconectado" na Z-API costuma significar que falta **escanear o QR code**; "Sem credencial" no oficial significa que faltam as chaves da Meta.
- Não ligue "Permitir iniciar conversa" num número não-oficial para disparo em massa — é o caminho mais rápido para o banimento.

## Veja também

- [Integrações externas](./crm-configuracoes-integracoes-config.md) — chaves dos serviços (e-mail, IA, SMS).
- [Chatbot](./crm-configuracoes-chatbot.md)
- [Biblioteca de mensagens](./crm-biblioteca-mensagens.md) — templates usados nos disparos.
