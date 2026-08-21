---
title: WhatsApp — números, provedores e guardrail
sidebar_position: 8
---

# WhatsApp — números, provedores e guardrail

Esta tela é onde você conecta os **números de WhatsApp** do seu negócio ao CRM. Você pode ter **vários números**, cada um com um **papel** (atender grupos, iniciar conversas 1:1, responder atendimentos) e um **provedor** diferente — e o sistema decide sozinho por qual número mandar cada mensagem.

## Como acessar

**ERP** → **Configurações** → **WhatsApp**.

![Números de WhatsApp](/img/manual/crm/whatsapp-numeros.jpg)

A tela ocupa a largura toda e mostra, no topo, um resumo rápido (**quantos números**, quantos **conectados** e quantos **ativos**). Cada linha traz:

- o **avatar** do número com o selo do WhatsApp e a bandeira do país;
- o **telefone** em destaque, o **nome** interno e o **provedor**;
- o **provedor / qualidade** (oficial × não-oficial);
- o **status** da conexão (verde **Conectado**, âmbar **Desconectado**, cinza **Sem credencial**);
- os **papéis** (grupos / oficial / padrão 1:1);
- se pode **iniciar** conversas 1:1 e se está **ativo**;
- os botões de **ação**: **Conversas** (abre o "WhatsApp Web" do número — veja abaixo) e a engrenagem para **editar**.

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
- **Telefone (E.164):** o número no formato internacional, ex.: `5511990002222`. Em números **Z-API**, se você deixar em branco, o sistema **detecta e preenche o telefone real** do aparelho conectado assim que a conexão é verificada (botão de atualizar status na lista) — então um número conectado via QR **não fica mais "sem número informado"**. Em números **oficiais** (Meta/360dialog), informe o telefone manualmente.

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
- O **status** é consultado **ao vivo** no provedor: ao abrir a tela cada número é verificado, e o botão **↻** (ao lado do status) reconsulta na hora — use-o depois de reconectar um número (ex.: reescanear o QR da Z-API).
- "Desconectado" na Z-API costuma significar que falta **escanear o QR code**; "Sem credencial" no oficial significa que faltam as chaves da Meta.
- Não ligue "Permitir iniciar conversa" num número não-oficial para disparo em massa — é o caminho mais rápido para o banimento.

## Conversas do número (WhatsApp Web)

Cada número tem uma tela de **conversas no estilo do WhatsApp Web**, para você **ver e responder** as mensagens daquele número direto do ERP — sem abrir o celular. Clique no botão **Conversas** na linha do número.

![WhatsApp Web do número — lista de conversas e conversa aberta](/img/manual/crm/whatsapp-web.jpg)

A tela tem duas colunas, igual ao WhatsApp Web:

- **À esquerda**, a **lista de conversas**: foto, nome/telefone do contato, prévia da última mensagem, horário e o **contador de não lidas**. No topo há a **busca** por nome ou número.
- **À direita**, a **conversa aberta**: cabeçalho com o contato e um botão **Atualizar**, o **histórico** com balões (mensagens recebidas à esquerda, suas à direita), horários e os **tiques de entrega**, e a **barra de digitação** embaixo (emoji, anexo e o botão de enviar).

Para responder, é só **digitar e apertar Enter** (ou o botão verde de enviar). A mensagem sai pelo **mesmo número** que recebeu a conversa.

### Emojis e anexos

- **Emoji** 🙂 — o botão de carinha abre um seletor rápido; clique num emoji para inseri-lo no texto.
- **Anexo** 📎 — o clipe abre o seletor de arquivos do computador. Você pode enviar **imagem, áudio, vídeo ou documento** (até **16 MB**); o arquivo é enviado ao contato pelo mesmo número, com a mesma aparência do WhatsApp. No modo real, o arquivo vai de verdade; no modo simulação, fica só no histórico local.

### "Me identificar" — assinar a mensagem com seu nome

Quando **várias pessoas da equipe** atendem pelo **mesmo número** de WhatsApp, o cliente não sabe **com quem** está falando. O botão **Me identificar**, no cabeçalho da conversa, resolve isso: quando **ligado** (fica verde), toda mensagem que você enviar sai **prefixada com o seu nome**, em **negrito**, numa linha acima do texto:

> **\*Tiago Felipe\*:**
> Boa tarde! Já verifiquei sua habilitação, está tudo certo. 👍

![Botão "Me identificar" ligado e mensagens assinadas com o nome do atendente](/img/manual/crm/whatsapp-me-identificar-enviada.jpg)

- O **nome vem do usuário logado** (o seu cadastro) — não dá para "assinar" com o nome de outra pessoa. É o próprio ERP que coloca o prefixo, com base em quem está logado.
- A preferência **fica lembrada** no seu navegador: se você ligar, continua ligado nas próximas vezes que abrir a tela.
- Vale também para as mensagens **enviadas por comando do bot** (veja abaixo): com o "Me identificar" ligado, o texto do comando também sai assinado.

:::tip Quando usar
Ligue **Me identificar** em números de **atendimento compartilhado**, para o cliente saber quem respondeu. Em um número que fala "em nome da empresa" (avisos, cobranças), deixe **desligado**.
:::

### Acionar comandos do bot na conversa

Você pode disparar um **comando do bot** — aquelas respostas prontas que você cadastra em **Comandos do bot** — **direto da conversa aberta**, sem digitar tudo à mão. É útil para respostas frequentes (horário de atendimento, como arrematar, apresentação) e para comandos que **consultam dados** (com IA + add-ons).

No compositor, ao lado do emoji e do clipe, há o botão **/** (comando). Clique nele para abrir a lista dos **comandos ativos**; escolha um e o sistema **resolve e envia** o texto resultante como sua mensagem.

![Seletor de comandos do bot aberto no compositor da conversa](/img/manual/crm/whatsapp-comandos-seletor.jpg)

- **Atalho:** digite **`/`** no campo de mensagem para abrir o mesmo seletor.
- O comando é **resolvido no servidor**: se ele tiver instruções de IA e add-ons configurados, o texto final já vem **pronto e completo** — as instruções internas **nunca** aparecem para o cliente.
- Se ainda **não houver comandos** cadastrados, o seletor mostra um atalho para a tela de **[Comandos do bot](./crm-comandos-bot.md)**, onde você os cria.
- Combina com o **Me identificar**: o texto do comando também é assinado com seu nome quando o botão está ligado.

### Mídia no histórico (áudio, vídeo, imagem e documento)

As mensagens com **mídia** — tanto as que o contato envia quanto as que você envia — aparecem **direto no histórico**, sem precisar baixar nada. Cada tipo é renderizado da sua forma, igual ao WhatsApp Web:

| Tipo | Como aparece na conversa |
|---|---|
| **Áudio** 🎧 | Vira um **player** com botão de tocar e barra de progresso — dá para ouvir o áudio ali mesmo. |
| **Vídeo** 🎬 | Vira um **player de vídeo** com controles (play/pause, volume, tela cheia). |
| **Imagem** 🖼️ | Aparece a **miniatura**; um clique abre a imagem ampliada em nova aba. |
| **Documento** 📄 | Vira um **link de arquivo** (PDF, planilha, etc.) — clique para abrir/baixar. |

:::tip Ouça e assista sem sair do ERP
Antes era preciso abrir o celular para ver a mídia recebida. Agora o áudio toca e o vídeo roda dentro da própria tela de conversas — o atendente resolve tudo sem trocar de aparelho.
:::

### Todas as conversas do aparelho (Z-API)

Quando o número está **conectado via Z-API**, a lista mostra **todas as conversas do aparelho** — inclusive as que **ainda não passaram pelo sistema**. Essas conversas trazidas direto do aparelho aparecem com uma etiqueta **"aparelho"** no cabeçalho; ao abrir, o **histórico é carregado do próprio WhatsApp**. Assim você não precisa esperar o contato mandar mensagem "pelo sistema" para conseguir responder — vê e responde qualquer conversa do número.

:::info Só a Z-API lista o aparelho
A **API Oficial da Meta** (Cloud API / 360dialog) **não permite** listar as conversas do aparelho. Para números oficiais, a tela mostra **apenas as conversas que passaram pelo sistema** (webhook) e exibe um aviso explicando isso. É uma limitação do provedor, não do ERP.
:::

### Grupos nas conversas

Quando o número tem o papel **Atende grupos** (só Z-API), os **grupos de WhatsApp** aparecem **na mesma lista de conversas**, junto com os contatos 1:1. Cada grupo tem um **selo de grupo** no avatar e, ao abrir, o cabeçalho mostra a etiqueta **"grupo"**. No histórico do grupo, o **nome de quem enviou** aparece acima de cada mensagem recebida, igual ao WhatsApp. Você pode **responder no grupo** normalmente (texto, emoji e anexo) — a resposta sai pelo mesmo número.

![Grupo na lista de conversas do número, com etiqueta "grupo" no cabeçalho](/img/manual/crm/whatsapp-web-grupo.jpg)

:::warning O histórico do grupo começa a partir de agora
O WhatsApp atual (**multi-device**) **não permite** baixar as mensagens **antigas** de um grupo pelo Z-API. Por isso o sistema passou a **guardar as mensagens do grupo conforme elas chegam**: a partir do momento em que o número está recebendo os webhooks, **cada nova mensagem do grupo é registrada** e aparece aqui automaticamente — com o nome de quem enviou. **Não há como recuperar** o que foi conversado **antes** disso (não existe "importar histórico"). Se você abrir um grupo que ainda não recebeu nenhuma mensagem nova, verá o aviso *"Ainda não há mensagens capturadas deste grupo. As novas aparecerão aqui automaticamente."* — basta aguardar as próximas mensagens.

O que você **envia** pelo grupo por esta tela também fica registrado no histórico na hora.
:::

:::info Grupos e o painel "Grupos Detectados"
Ver os grupos aqui **não substitui** o painel **Grupos Detectados** da gerência (usado para a ponte grupo → chamado): são coisas diferentes e continuam funcionando em paralelo. Aqui é só o "WhatsApp Web" do número — para ler e responder o grupo direto do ERP. Um número **sem** o papel *Atende grupos* não mostra grupos nesta lista.
:::

:::tip Quem pode acessar
A tela de conversas fica disponível para qualquer usuário do ERP (perfil colaborador). O envio usa o número da própria conversa, respeitando o provedor configurado.
:::

### Modo simulação (para testar sem conectar)

Quando um número **ainda não tem uma conexão real** de WhatsApp (sem credenciais válidas), a tela entra em **modo simulação** — sinalizado por uma faixa amarela no topo:

> 🧪 **Modo simulação** — este número não tem uma conexão real de WhatsApp, então as conversas são de exemplo e **nada é enviado de verdade**.

Nesse modo você vê **conversas de exemplo** e pode **testar o envio**: sua mensagem aparece no histórico e o "contato" responde com uma mensagem automática — tudo **local**, sem nenhuma chamada externa. É ideal para conhecer a tela e treinar a equipe.

Assim que o número recebe **credenciais válidas** (Z-API conectada ou API Oficial configurada), ele passa **automaticamente** para o **modo real**: as conversas passam a ser as de verdade e o envio vai para o WhatsApp do contato. **Não há botão para "ligar" o envio real** — é o próprio provedor conectado que define o modo, o que evita disparo acidental durante testes.

:::info Como funciona o interruptor (resumo)
- **Sem credencial usável no número → simulação** (conversas de exemplo, envio só local).
- **Com credencial usável → real** (conversas reais, envio de verdade).
:::

### Casos de uso

- **Responder um cliente na hora:** o arrematante mandou uma dúvida no WhatsApp; o atendente abre **Conversas** do número, lê o histórico e responde sem sair do ERP.
- **Acompanhar vários números:** com um número para grupos (Z-API) e outro oficial (avisos), cada um tem sua própria caixa de conversas separada.
- **Treinar a equipe:** em um número novo (ainda sem conexão), use o **modo simulação** para praticar o atendimento antes de conectar de verdade.

## Templates das notificações (API Oficial)

Fora da janela de 24h desde a última mensagem do cliente, a Meta **só entrega mensagens por templates aprovados** (chamados HSM). Para enviar avisos como "seu leilão encerra hoje" por WhatsApp, você precisa aprovar o texto na Meta e ligar o gatilho ao template.

O ERP traz um **tutorial passo a passo** (em **Configurações → WhatsApp → "passo a passo"**), com os textos já prontos para copiar:

![Tutorial de templates WhatsApp](/img/manual/crm/notificacoes/01-whatsapp-tutorial.jpg)

Depois de aprovar o template na Meta, abra o número **oficial** (Meta Cloud API) e, na seção **Templates das notificações**, ligue cada gatilho ao seu template aprovado:

![Mapeamento de templates](/img/manual/crm/notificacoes/04-whatsapp-templates-mapeamento.jpg)

1. Clique em **Carregar templates aprovados**.
2. Para cada gatilho (leilão encerra hoje, publicado, cobrança…), selecione o template correspondente.
3. **Salve**. Agora os [avisos automáticos](./crm-avisos-leilao.md) por WhatsApp usam esses templates.

:::info Ordem das variáveis
Os parâmetros do template (`{{1}}`, `{{2}}`…) precisam bater com a ordem indicada em cada gatilho — senão os campos saem trocados. O tutorial mostra a ordem correta de cada um.
:::

## Veja também

- [Avisos automáticos de leilão](./crm-avisos-leilao.md) — os avisos que usam esses templates.
- [Comandos do bot](./crm-comandos-bot.md) — respostas prontas (gatilho → texto) que você pode acionar direto da conversa.
- [Add-ons do bot](./crm-configuracoes-bot-addons.md) — dar novas capacidades ao bot (integrações HTTP sem código).
- [Aprovadores do bot](./crm-configuracoes-bot-aprovadores.md) — quem pode autorizar operações sensíveis.
- [Integrações externas](./crm-configuracoes-integracoes-config.md) — chaves dos serviços (e-mail, IA, SMS).
- [Chatbot](./crm-configuracoes-chatbot.md)
- [Biblioteca de mensagens](./crm-biblioteca-mensagens.md) — templates usados nos disparos.
