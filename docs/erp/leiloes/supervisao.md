---
title: Supervisão do Leilão
sidebar_position: 41
---

# Supervisão do Leilão

Painel de acompanhamento ao vivo do pregão, pensado para quem precisa só observar — sem botões de ação. Mostra os números do leilão (usuários online, lances, lote atual e maior lance) e a lista dos lotes que estão em movimento agora.

## Como acessar

**Leilões** → abra um leilão → **Supervisão**.

(A tela é específica do leilão aberto; a URL termina em `/leiloes/{id}/supervisao`.)

![Supervisão do Leilão](/img/manual/erp/supervisao.png)

## O que você vê nesta tela

### Indicadores do topo

| Indicador | O que mostra |
|---|---|
| Usuários online | Quantas pessoas estão conectadas ao leilão agora |
| Total de lances | Total de lances dados no leilão |
| Lote atual | Número do lote que está em pregão no momento |
| Maior lance | O maior valor de lance registrado |

### Tabela "Lotes em andamento"

Lista apenas os lotes nos status ativos do pregão: **Em pregão**, **Homologando** e **Vendido**. Lotes em outros status (rascunho, retirado, cancelado, sem licitantes, etc.) não aparecem aqui.

| Coluna | O que é |
|---|---|
| Atualização | Horário do último lance / última mudança do lote |
| Lote | Número do lote |
| Bem | Descrição do bem |
| Arrematante atual | Quem está com o lote no momento |
| Lance atual | Maior lance recebido |
| Status | Situação do lote |

## O que dá pra fazer aqui

Esta é uma tela **somente de leitura**: ela não tem botões de ação. Serve para acompanhar o pregão em tempo real, projetar em um segundo monitor ou deixar aberta para a equipe observar o andamento.

Para abrir, fechar ou homologar lotes, use a tela de [Realização do Leilão](./realizacao.md).

## Dicas e observações

- Os números e a lista se atualizam sozinhos a cada 5 segundos.
- Quando não há lote em pregão, a tabela mostra "Nenhum lote em pregão agora".
- Em telas pequenas (celular), os lotes aparecem como cartões em vez de tabela.

## Veja também

- [Realização do Leilão](./realizacao.md)
- [Fechamento](./fechamento.md)
