---
title: Webhooks
sidebar_position: 2
---

# Webhooks

Esta tela mostra o registro dos **webhooks** — as notificações automáticas que o ERP envia para o seu site (ou para sistemas integrados) quando algo muda, como a atualização de um lote ou leilão. Use-a para acompanhar o que foi disparado e diagnosticar quando uma notificação não chegou ao destino.

## Como acessar
**Sites** → **Website** → **Webhooks**

![Webhooks](/img/manual/sites/website-webhooks.png)

## O que você vê nesta tela

Uma barra de busca no topo e, abaixo, a lista dos webhooks disparados.

| Coluna | O que é |
|---|---|
| **#** | Número (ID) do webhook. |
| **Evento** | O que originou a notificação (ex.: o tipo da entidade e seu número). |
| **URL** | O endereço de destino para onde a notificação foi enviada. |
| **Status** | Situação do envio: **Pendente**, **Enviado** ou **Erro**. |
| **Disparado** | Data e hora em que o webhook foi gerado. |
| **(ações)** | Botões de **Ver detalhes** e **Excluir**. |

Use o campo **Buscar por evento/URL...** para filtrar. Você pode exibir 20, 50 ou 100 itens por página.

### O que significa cada status
| Status | O que indica |
|---|---|
| **Pendente** | A notificação ainda não foi enviada (na fila). |
| **Enviado** | A notificação foi entregue ao destino com sucesso. |
| **Erro** | Houve falha no envio (o destino não respondeu ou recusou). |

## O que dá pra fazer aqui

- **Ver detalhes** (ícone de olho na linha, ou dê duplo clique na linha): abre a janela com as informações completas do disparo.
- **Excluir** (ícone de lixeira na linha): remove o registro do webhook permanentemente.

### Ver os detalhes de um webhook
1. Na linha desejada, clique no ícone de **olho** (ou dê duplo clique na linha).
2. A janela **Detalhe do webhook** mostra:
   - **ID** e **Status** do disparo.
   - **Evento** que originou a notificação.
   - **Disparado** (quando foi gerado) e, quando houver, **Executado** (quando foi efetivamente enviado).
   - **Tentativas**, quando houver, indicando quantas vezes o sistema tentou entregar.
   - **URL** de destino.
   - **Payload** — os dados enviados na notificação.
   - **Histórico / Resposta** — o retorno do destino, quando disponível.
3. Clique em **Fechar** ao terminar.

![Detalhe do webhook](/img/manual/sites/website-webhooks-detalhe.png)

### Excluir um webhook
1. Na linha desejada, clique no ícone de **lixeira**.
2. Confirme em **Excluir**. O registro é removido permanentemente.

## Dicas e observações
- Esta tela é principalmente de **consulta**: você acompanha os disparos e os apaga, mas os webhooks são gerados automaticamente pelo sistema — não há cadastro manual aqui.
- Se um webhook ficar em **Erro**, verifique se a **URL do webhook** configurada no site está correta na tela de [Sites](./website-sites.md), e se o destino está no ar.
- O **Payload** e o **Histórico / Resposta** ajudam a entender o que foi enviado e como o destino respondeu — úteis ao reportar um problema de integração ao suporte.

## Veja também
- [Sites](./website-sites.md)
