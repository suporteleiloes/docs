---
title: Detalhe do envio
sidebar_position: 4
---

# Detalhe do envio

Esta tela mostra **tudo sobre um e-mail específico** que o sistema disparou: para quem foi, com qual template, o conteúdo enviado, os eventos de entrega e, se houver, a mensagem de erro. Use-a para investigar um envio em detalhe e reenviá-lo se preciso.

## Como acessar

**Plataforma** → **Comunicação** → **Histórico de Envio** → duplo clique em um envio (ou ícone de **olho**).

![Detalhe do envio](/img/manual/erp/comunicacao-historico-id.png)

## O que você vê nesta tela

O título mostra o número do envio (ex.: "Envio #123"). A tela é dividida em blocos (cartões):

| Bloco | O que mostra |
|---|---|
| **Resumo** | Status, data, destinatário, e-mail, assunto, template usado e remetente. |
| **Cabeçalhos** | Os cabeçalhos técnicos do e-mail (aparece só quando existem). |
| **Corpo do e-mail** | O conteúdo do e-mail exatamente como foi enviado. |
| **Logs de entrega** | Linha do tempo dos eventos do e-mail (enviado, aberto, falha etc.), cada um com data e mensagem. |
| **Mensagem de erro** | Detalhe do erro, quando o envio falhou (aparece só nesses casos). |

No cabeçalho da tela há dois botões: **Voltar** (retorna ao histórico) e **Reenviar**.

## O que dá pra fazer aqui

### Voltar ao histórico

1. Clique em **Voltar** no topo da tela.

### Reenviar este e-mail

1. Clique em **Reenviar** no topo da tela.
2. Confirme na janela. O e-mail é reprocessado pela fila de envio.

## Dicas e observações

- Os **Logs de entrega** ajudam a entender o que aconteceu após o disparo (por exemplo, se o e-mail foi aberto ou retornou com falha). Se nenhum evento aparecer, ainda não há registro de entrega para esse envio.
- Quando o status é **Falha**, leia a **Mensagem de erro** antes de reenviar — ela costuma indicar a causa (endereço inválido, problema de SMTP etc.).
- **Reenvio em implantação:** o botão **Reenviar** já existe, mas a ação automática ainda está sendo habilitada no servidor. Enquanto isso, ao clicar você pode ver a mensagem **"Funcionalidade em implementação"** — nesse caso, entre em contato com o suporte.
- Os blocos **Cabeçalhos** e **Mensagem de erro** só aparecem quando há esses dados no registro; é normal não vê-los em um envio bem-sucedido.

## Veja também

- [Histórico de Envio de E-mail](./comunicacao-historico.md)
- [Templates de E-mail](./comunicacao-templates.md)
