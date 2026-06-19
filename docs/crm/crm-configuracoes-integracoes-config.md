---
title: Integrações externas
sidebar_position: 5
---

# Integrações externas

Esta tela configura as credenciais dos serviços externos usados pelo CRM — envio de e-mail, WhatsApp, SMS, inteligência artificial e notificações push. Aqui você informa as chaves de acesso, ativa o serviço e testa a conexão de verdade.

## Como acessar

**CRM** → **Configurações** → **Integrações** (rota `/crm/configuracoes/integracoes-config`).

![Integrações externas](/img/manual/crm/crm-configuracoes-integracoes-config.png)

## O que você vê nesta tela

Uma lista de cartões, um para cada provedor disponível. Cada cartão mostra:

| Elemento | O que é |
|---|---|
| Nome do provedor | Identificação do serviço |
| Verificação | Quando foi verificado pela última vez e o resultado (ok / erro), ou "Nunca verificado" |
| Etiqueta de status | **Ativo**, **Inativo** (configurado mas desligado) ou **Não configurado** |

Clicar em um cartão abre o painel de configuração daquele provedor.

### Provedores disponíveis

| Provedor | Para que serve | O que o teste faz |
|---|---|---|
| **Z-API** (WhatsApp) | Envio/recebimento de WhatsApp | Consulta o status da instância (avisa se precisa escanear o QR code). Não cobra envio. |
| **Amazon SES** (e-mail) | Envio de e-mail | Envia um e-mail real de teste ao destinatário informado. |
| **SendGrid** (e-mail) | Envio de e-mail | Envia um e-mail real de teste ao destinatário informado. |
| **Twilio** (VoIP/SMS) | Envio de SMS | Envia um SMS real de teste ao número informado (formato E.164, ex.: +5511999998888). |
| **Zenvia** (VoIP/SMS) | Envio de SMS | Teste **ainda não implementado** — a credencial é salva, mas o botão de teste não valida o envio. |
| **OpenAI** (DALL-E + GPT) | Geração de imagem/texto por IA | Valida a chave consultando a lista de modelos (read-only, sem custo). |
| **Firebase Cloud Messaging** (push) | Notificações push | Valida apenas o formato do JSON da conta de serviço; o envio real depende de integração FCM completa (em desenvolvimento). |

> A integração com a Meta (Facebook Messenger / Instagram Direct), usada pela [Inbox omnichannel](./crm-social-inbox.md), **não é configurada por esta tela** — ela é provisionada à parte.

## O que dá pra fazer aqui

### Configurar um provedor

1. Clique no cartão do provedor desejado.
2. Preencha os campos de credenciais exibidos (eles variam conforme o provedor).
3. Ligue a chave **Ativar este provider** se quiser que ele passe a ser usado.
4. Clique em **Salvar configuração**. Aparece a confirmação "Configuração salva".

![Configurar provedor](/img/manual/crm/crm-configuracoes-integracoes-config-editar.png)

### Testar a conexão de verdade

Dentro do painel do provedor há o bloco **Testar conexão real**. O teste executa uma ação real conforme o serviço — por exemplo, envia um e-mail, consulta o status da instância de WhatsApp ou lista os modelos de IA.

1. Se o provedor exigir, informe um **Destinatário de teste** (e-mail ou número, conforme indicado pelo texto de ajuda).
2. Clique em **Testar agora**.
3. O resultado aparece abaixo, em verde (sucesso, com ✓) ou vermelho (falha, com ✗) e a mensagem retornada pelo serviço.

> Cada provedor mostra um texto de ajuda explicando exatamente o que o teste faz. Alguns testes (como IA e notificação push) só validam a credencial, sem disparar nada.

## Dicas e observações

- **Chaves sensíveis ficam mascaradas** depois de salvas. Para trocá-las, digite o novo valor; se deixar o campo como está, o valor anterior é mantido.
- O status do cartão muda conforme você configura e ativa o provedor; o resultado do último teste fica registrado como data e situação da verificação.
- Em ambiente de desenvolvimento, o envio de e-mail de teste pode ser redirecionado para um endereço de segurança em vez do destinatário informado.

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
- [Chatbot / Agente IA](./crm-configuracoes-chatbot.md)
