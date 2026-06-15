---
title: Fila de mensagens (Messenger)
sidebar_position: 7
---

# Fila de mensagens (Messenger)

Esta tela mostra as mensagens internas que o sistema tem para processar em segundo plano (e-mails, webhooks, automações). Em operação normal, elas são enviadas automaticamente. A tela serve para conferir o que está pendente e, em caso de falha do envio automático, despachar manualmente.

## Como acessar

**Configurações** → **Sistema** → **Fila de mensagens (Messenger)**.

![Fila de mensagens](/img/manual/erp/configuracoes-fila-mensagens.png)

## O que você vê nesta tela

No topo, os botões **Atualizar** e, quando há pendências, **Despachar todas**. Abaixo, um aviso informa quantas mensagens estão pendentes e em qual transport, com o lembrete de que o envio automático costuma dar conta sozinho.

A área principal mostra:

- **Resumo por tipo** — cartões agrupando as mensagens por tipo. Cada cartão traz a quantidade, o nome curto do tipo e um botão para despachar aquele grupo.
- **Amostra** — uma tabela com as primeiras mensagens da fila.

| Coluna da amostra | O que é |
|---|---|
| Tipo | Nome curto do tipo da mensagem |
| Tentativas | Quantas vezes já se tentou processar (0 = ainda não tentada) |
| ID | Identificador da mensagem |
| Ação | Botão **Despachar** para executar só aquela mensagem |

Se o broker de mensagens não permitir listar a fila, a tela exibe o aviso **"Fila não inspecionável neste transport"** com a opção **Consumir um lote**.

## O que dá pra fazer aqui

### Atualizar a fila

Clique em **Atualizar** para recarregar a contagem e a amostra.

### Despachar todas as mensagens

1. Clique em **Despachar todas (N)** no topo.
2. Confirme na janela de aviso. O sistema processa em lotes e mostra o progresso.

### Despachar um grupo (por tipo)

No cartão do tipo desejado, clique em **Despachar N**. Só as mensagens daquele tipo são processadas.

### Despachar uma mensagem específica

Na tabela de amostra, clique em **Despachar** na linha da mensagem. Confirme para executar apenas ela.

### Consumir um lote (fila não inspecionável)

Se a fila não puder ser listada, clique em **Consumir um lote** para processar um conjunto de mensagens mesmo sem ver a lista.

## Dicas e observações

- **Em condições normais, não use o despacho manual.** As mensagens são enviadas automaticamente; só recorra a esta tela se notar que a fila parou de ser processada.
- Despachar **executa de verdade**: e-mails, webhooks e automações podem ser disparados na hora. Por isso cada despacho pede confirmação.
- A coluna **Tentativas** ajuda a identificar mensagens que vêm falhando (valor maior que 0).
- Para filas muito grandes, a tela exibe só uma amostra parcial.

## Veja também

- [WhatsApp](configuracoes-whatsapp.md)
- [Importador](configuracoes-importador.md)
