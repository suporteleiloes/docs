---
title: Comandos do bot
sidebar_position: 7.5
---

# Comandos do bot

Comandos são **respostas prontas** do seu bot. Quando alguém envia ao bot uma mensagem **exatamente igual** a um gatilho que você cadastrou (por exemplo `/horario`), o bot responde na hora com o texto que você programou — sem depender da inteligência artificial para "adivinhar" a resposta.

É a forma mais rápida e previsível de padronizar as respostas mais comuns: horário de atendimento, boas-vindas, como participar de um leilão, formas de pagamento, e assim por diante.

## Como acessar

**CRM** → **Configurações** → **Chatbot** → cartão **Comandos do bot** (rota `/crm/configuracoes/comandos-bot`).

![Atalho para Comandos do bot na tela de Chatbot / Agente IA](/img/manual/crm/comandos-bot-acesso.jpg)

## O que você vê nesta tela

Uma grade de cartões, um por comando. Cada cartão mostra:

| Elemento | O que é |
|---|---|
| `/gatilho` | A palavra ou frase que dispara a resposta |
| Descrição | Uma nota interna sua (opcional) — não é enviada ao cliente |
| Texto da resposta | Prévia do que o cliente recebe |
| Selo **IA** | Aparece quando a resposta usa a tag `[instrucoes-ia]` (veja mais abaixo) |
| Selo **Ativo / Inativo** | Se o comando está no ar ou pausado |
| Chave liga/desliga, **Editar**, **Excluir** | Ações do comando |

![Lista de comandos do bot](/img/manual/crm/comandos-bot-lista.jpg)

## Como criar ou editar um comando

1. Clique em **+ Novo comando** (ou **Editar** em um cartão existente).
2. Preencha o **Gatilho** — a frase que dispara a resposta (ex.: `horario`).
3. Opcionalmente, escreva uma **Descrição** para você se organizar.
4. Escreva a **Resposta** — a mensagem que o bot vai enviar.
5. Deixe **Comando ativo** ligado para ele funcionar.
6. Clique em **Criar comando** (ou **Salvar**).

![Formulário de criação de comando](/img/manual/crm/comandos-bot-form.jpg)

## A regra do match exato

O bot só dispara o comando quando a mensagem for **exatamente igual** ao gatilho — não basta "conter" ou "começar com". Para facilitar, o sistema ignora algumas diferenças que não mudam o sentido:

- **Não diferencia maiúsculas de minúsculas**: `HORARIO` = `horario`.
- **Aceita com ou sem a barra** inicial: `/horario` = `horario`.
- **Ignora espaços sobrando** nas pontas e espaços repetidos no meio.

| Gatilho cadastrado | Cliente envia | O bot responde? |
|---|---|---|
| `horario` | `/horario` | ✅ Sim |
| `horario` | `HORARIO` | ✅ Sim |
| `horario` | ` Horario ` | ✅ Sim |
| `horario` | `qual o horario` | ❌ Não (tem texto a mais) |
| `horario` | `horario de vocês` | ❌ Não (tem texto a mais) |

:::info Como o gatilho é salvo
Ao salvar, o gatilho é padronizado: vira minúsculo, perde a barra inicial e tem os espaços ajustados. Por isso `/Apresente-Se` fica gravado como `apresente-se`. O formulário mostra essa prévia enquanto você digita.
:::

:::warning Gatilho único
Não é possível ter dois comandos **ativos** com o mesmo gatilho — o sistema avisa se você tentar. Se precisar reaproveitar um gatilho, edite o comando existente ou desative o antigo.
:::

## A tag `[instrucoes-ia]` — deixar a IA completar a mensagem

Às vezes você quer uma resposta que **começa fixa mas termina inteligente** — por exemplo, uma saudação que ainda cita quantos leilões estão abertos naquele momento. Para isso existe a tag `[instrucoes-ia]`.

Dentro da **Resposta**, tudo que estiver **acima** da linha `[instrucoes-ia]` é o **texto-base** (o que pode ir ao cliente). Tudo que estiver **abaixo** são **instruções internas** para a inteligência artificial.

:::danger As instruções nunca chegam ao cliente
Nem a tag `[instrucoes-ia]`, nem o texto de instruções abaixo dela são enviados ao cliente. Eles servem **apenas** para orientar a IA a montar a mensagem final. Pode escrever as instruções à vontade — o cliente jamais as vê.
:::

Quando a IA está ligada, ela lê o texto-base + as instruções e **compõe a mensagem final** — podendo inclusive usar os **add-ons do bot** para buscar dados reais (como o número de leilões ativos). Se a IA estiver desligada, o cliente recebe **apenas o texto-base**, sem risco de vazar as instruções.

### Exemplo 1 — resposta 100% literal (sem IA)

**O que você cadastra (campo Resposta):**

```text
Nosso atendimento é de segunda a sexta, das 8h às 18h. 🙂
Fora desse horário, deixe sua mensagem que retornamos assim que possível.
```

**O que o cliente recebe:** exatamente esse texto, sempre igual. Funciona **mesmo sem IA**.

### Exemplo 2 — texto-base + instruções para a IA

**O que você cadastra (campo Resposta):**

```text
Olá! Eu sou o assistente virtual do leiloeiro. 👋
[instrucoes-ia]
Complete a apresentação de forma calorosa. Verifique quantos leilões ativos
há no ERP (use a ferramenta disponível) e convide a pessoa a conferir.
Não invente número — se não conseguir o dado, apenas convide a acompanhar.
```

**O que o cliente recebe:**

- **Com a IA ligada:** *"Olá! Eu sou o assistente virtual do leiloeiro. 👋 No momento temos 7 leilões ativos — dá uma olhada, tem ótimas oportunidades!"*
- **Com a IA desligada:** *"Olá! Eu sou o assistente virtual do leiloeiro. 👋"*
- **Em nenhum caso** o cliente vê a tag `[instrucoes-ia]` ou o texto das instruções.

O formulário mostra uma **prévia** do texto-base (o que o cliente vê sem a IA) sempre que você usa a tag — útil para conferir que a parte "de segurança" faz sentido sozinha.

## Erros comuns

- **O comando não dispara.** A mensagem precisa ser **igual** ao gatilho. `qual o horario` não casa com o gatilho `horario`. Cadastre também as variações que seus clientes costumam usar.
- **"Já existe um comando ativo com esse gatilho".** Você tentou criar um gatilho repetido. Edite o comando existente ou desative o antigo.
- **A resposta está incompleta / sem a parte inteligente.** Se você usou `[instrucoes-ia]` mas a IA está desligada no canal, o cliente recebe só o texto-base. Ligue o bot no canal (em **Chatbot / Agente IA**) ou deixe o texto-base já pronto por conta própria.
- **Sumiu o texto abaixo da tag.** Isso é o esperado: tudo abaixo de `[instrucoes-ia]` é interno e nunca é enviado.

## Dicas

- Comece pelos comandos que você mais repete no dia a dia: **horário**, **como participar**, **formas de pagamento**, **documentação exigida**.
- Deixe o **texto-base sempre apresentável sozinho**, mesmo quando usar a tag — assim, se a IA estiver fora, o cliente ainda recebe algo bom.
- Use a **Descrição** para lembrar o propósito do comando (ela não vai para o cliente).
- Para **pausar** um comando temporariamente, use a chave liga/desliga em vez de excluir.

:::tip Acione um comando direto da conversa
Além de responderem sozinhos quando o cliente digita o gatilho, os comandos podem ser **disparados manualmente** pelo atendente na tela de **conversas do WhatsApp**: no compositor, o botão **/** abre a lista dos comandos ativos (ou digite `/` no campo de mensagem). Veja em [WhatsApp — Acionar comandos do bot na conversa](./crm-configuracoes-whatsapp.md#acionar-comandos-do-bot-na-conversa).
:::

## Veja também

- [Chatbot / Agente IA](./crm-configuracoes-chatbot.md)
- [Add-ons do bot](./crm-configuracoes-bot-addons.md)
- [WhatsApp — números, provedores e guardrail](./crm-configuracoes-whatsapp.md)
