---
title: Histórico de Envio de E-mail
sidebar_position: 3
---

# Histórico de Envio de E-mail

O **Histórico de Envio** lista todos os e-mails que o sistema disparou, com o status de entrega de cada um. Use esta tela para conferir se uma mensagem foi entregue, investigar falhas e reenviar e-mails quando necessário.

## Como acessar

**Plataforma** → **Comunicação** → **Histórico de Envio**

![Histórico de Envio de E-mail](/img/manual/erp/comunicacao-historico.png)

## O que você vê nesta tela

No topo ficam os **filtros**: campo de busca (por destinatário ou assunto), chips de status, um intervalo de datas e um botão para limpar tudo.

| Filtro | O que faz |
|---|---|
| **Busca** | Procura por destinatário ou assunto. |
| **Todos / Enviados / Aguardando / Falhas** | Filtra a lista pelo status do envio. |
| **Intervalo de datas** (de … até) | Mostra só os envios dentro do período escolhido. |
| **Limpar** | Remove todos os filtros aplicados. |

A lista de envios traz as colunas:

| Coluna | O que é |
|---|---|
| **#** | Número do registro de envio. |
| **Data** | Data e hora do disparo. |
| **Destinatário** | Nome de quem recebeu (e o e-mail, quando diferente do nome). |
| **Assunto** | A linha de assunto do e-mail. |
| **Template** | Qual template foi usado no envio. |
| **Status** | **Enviado** (verde), **Aguardando** (amarelo) ou **Falha** (vermelho). |

## O que dá pra fazer aqui

- **Ver detalhe** (ícone de olho ou duplo clique na linha): abre a tela completa do envio.
- **Reenviar** (ícone de seta circular): coloca o e-mail de volta na fila para ser disparado outra vez.

### Filtrar e localizar um envio

1. Digite no campo de **busca** o nome do destinatário ou parte do assunto.
2. Se quiser, clique em um chip de status (**Enviados**, **Aguardando** ou **Falhas**).
3. Para restringir por período, preencha as datas **de** e **até**.
4. A lista é atualizada automaticamente. Use **Limpar** para zerar os filtros.

### Ver o detalhe de um envio

1. Dê **duplo clique** na linha ou clique no ícone de **olho**.
2. Você é levado à tela de detalhe, com resumo, corpo do e-mail e logs de entrega.

### Reenviar um e-mail

1. Clique no ícone de **seta circular** na linha do e-mail.
2. Confirme na janela. O e-mail é adicionado à fila de envio e disparado novamente para o mesmo destinatário.

## Dicas e observações

- Um status **Falha** indica que o e-mail não foi entregue — abra o detalhe para ver a mensagem de erro e decidir se vale reenviar.
- O reenvio depende de um recurso no servidor; se ainda não estiver habilitado, o sistema avisa para entrar em contato com o suporte.

## Veja também

- [Detalhe do envio](./comunicacao-historico-id.md)
- [Templates de E-mail](./comunicacao-templates.md)
- [Comunicação (visão geral)](./comunicacao.md)
