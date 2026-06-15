---
title: Chatbot / Agente IA
sidebar_position: 7
---

# Chatbot / Agente IA

Aqui você configura o chatbot com inteligência artificial, separadamente para cada canal de atendimento. O bot responde às primeiras dúvidas usando IA combinada com a sua Base de Conhecimento e, quando necessário, escala o atendimento para uma pessoa (handoff).

## Como acessar

**CRM** → **Configurações** → **Chatbot** (rota `/crm/configuracoes/chatbot`).

![Chatbot / Agente IA](/img/manual/crm/crm-configuracoes-chatbot.png)

## O que você vê nesta tela

Logo abaixo da descrição há dois atalhos: **Editar base de conhecimento** (artigos que o bot consulta) e **Widgets do site** (chats embedáveis com snippet de instalação).

Em seguida, uma barra de abas para escolher o **canal** que você está configurando, e o formulário daquele canal.

### Canais

| Canal | Onde o bot atua |
|---|---|
| Chat do site | Widget de chat no site |
| WhatsApp | Conversas de WhatsApp |
| Instagram Direct | Mensagens diretas do Instagram |
| Facebook Messenger | Mensagens do Messenger |
| E-mail | Atendimento por e-mail |

### Campos do formulário

| Campo / bloco | O que é |
|---|---|
| Bot ativo neste canal | Liga ou desliga o bot no canal selecionado |
| Persona / voz da marca | Instrução que define o tom e a personalidade do bot |
| Mensagem de boas-vindas | Primeira mensagem que o bot envia |
| Handoff humano | Regras para passar a conversa a um atendente |
| Base de conhecimento usada (RAG) | Categorias da Base que o bot pode consultar |
| Provider IA | Provedor de IA (Anthropic ou OpenAI) e modelo opcional |

## O que dá pra fazer aqui

### Configurar o bot de um canal

1. Na barra de abas, clique no **canal** desejado.
2. Ligue **Bot ativo neste canal** para o bot atuar ali.
3. Em **Persona / voz da marca**, descreva como o bot deve falar (tom, formalidade, idioma).
4. Em **Mensagem de boas-vindas**, escreva a primeira mensagem que o cliente recebe.
5. Configure o **Handoff humano** (veja abaixo).
6. Marque as **categorias da Base de conhecimento** que o bot pode consultar.
7. Em **Provider IA**, escolha o provedor (Anthropic — Claude, ou OpenAI — GPT) e, se quiser, informe o **Modelo**.
8. Clique em **Salvar configuração**.

### Definir o handoff para atendente humano

No bloco **Handoff humano**:

1. Em **Palavras-chave que escalam imediatamente**, liste, separadas por vírgula, termos que devem passar a conversa direto para uma pessoa (ex.: "humano, atendente, gerente, reclamação").
2. Em **Escalar após N mensagens sem resolver**, defina o número de mensagens sem solução após o qual o bot transfere para um atendente.

### Escolher o que o bot pode consultar (RAG)

No bloco **Base de conhecimento usada (RAG)**, marque as categorias que o bot pode usar para responder. Se não houver nenhuma categoria, cadastre artigos primeiro na Base de Conhecimento (pelo atalho **Editar base de conhecimento** no topo).

## Dicas e observações

- A configuração é **por canal**: ao trocar de aba, você está editando outro canal. Salve antes de mudar de aba.
- O bot só consegue responder com base nos artigos das categorias que você marcar em **RAG** — mantenha a Base de Conhecimento atualizada.
- O provedor **Anthropic (Claude)** já vem configurado. O campo **Modelo** é opcional.
- Use os atalhos do topo para gerenciar os **artigos da base** e os **widgets de chat** do site.

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
- [Integrações externas](./crm-configuracoes-integracoes-config.md)
