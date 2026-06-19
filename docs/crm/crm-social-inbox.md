---
title: Inbox omnichannel (DMs Meta)
sidebar_position: 24
---

# Inbox omnichannel (DMs Meta)

Esta é a caixa de entrada de mensagens diretas (DMs) das redes da Meta: Facebook Messenger e Instagram Direct. Você vê as conversas privadas em um único lugar e responde sem sair do CRM.

## Como acessar
**CRM** → **Social** → **Inbox**.

![Inbox omnichannel](/img/manual/crm/crm-social-inbox.png)

## O que você vê nesta tela

No topo há o seletor de canal (**Messenger** e **Instagram**) e um aviso de que WhatsApp e e-mail ficam na inbox unificada do atendimento. A tela é dividida em duas colunas:

- **Coluna da esquerda**: lista de conversas do canal selecionado.
- **Coluna da direita (thread)**: as mensagens da conversa aberta, com a caixa de resposta no rodapé.

### Lista de conversas (esquerda)

| Elemento | O que é |
|---|---|
| **Avatar e nome** | Identificação do contato na conversa. |
| **Horário** | Quando a conversa foi atualizada pela última vez. |
| **Prévia** | Quantidade de mensagens na conversa. |
| **Contador** | Selo vermelho com o número de mensagens não lidas, quando houver. |

### Thread (direita)

Mostra o cabeçalho com o nome do contato e o canal, o histórico de mensagens em ordem cronológica (mensagens recebidas à esquerda, suas respostas à direita) e, no rodapé, a caixa para escrever a resposta.

## O que dá pra fazer aqui

### Trocar de canal
1. Clique em **Messenger** ou **Instagram** no seletor de canal. A lista de conversas é recarregada para o canal escolhido.

### Abrir e ler uma conversa
1. Clique em uma conversa na lista da esquerda.
2. As mensagens são carregadas na coluna da direita, em ordem cronológica.

### Responder uma conversa
1. Com a conversa aberta, escreva o texto na caixa de resposta no rodapé.
2. Pressione **Enter** para enviar (use **Shift+Enter** para quebrar linha) ou clique em **Enviar**.
3. A resposta é enviada ao contato e aparece na thread.

## Pré-requisitos

- Uma **integração com a Meta (Graph API)** configurada com um *page access token* válido da página do Facebook/conta do Instagram vinculada. Sem isso, a tela mostra o aviso **"Integração Meta não configurada"** e não lista conversas.
- O Instagram Direct exige conta **Instagram Business** vinculada à página do Facebook.

> A integração da Meta (provider `meta_graph`) **não aparece na tela padrão de [Integrações externas](./crm-configuracoes-integracoes-config.md)** — ela é provisionada à parte (token de página + configuração do webhook). Fale com o suporte da Suporte Leilões para habilitar.

## Como o destinatário é identificado

Ao responder, o sistema resolve automaticamente o destinatário (o identificador do contato na conversa). Se não for possível identificá-lo, aparece o aviso **"Não foi possível identificar o destinatário desta conversa."** e o envio é bloqueado.

## Dicas e observações

- **WhatsApp e e-mail não aparecem aqui** — ficam na inbox unificada do atendimento. O seletor de canal traz apenas **Messenger** e **Instagram**.
- A **prévia** de cada conversa mostra a **quantidade de mensagens** (não o último texto), porque o canal da Meta não devolve a última mensagem na listagem.
- O atalho da caixa de resposta: **Enter envia**, **Shift+Enter** quebra linha.
- Se a lista de conversas ou as mensagens falharem ao carregar, use o botão **Tentar de novo**.

## Veja também
- [Comentários (moderação)](./crm-social-comentarios.md)
- [Atendimentos](./crm-atendimentos.md)
