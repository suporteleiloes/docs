---
title: Início do CRM
sidebar_position: 1
---

# Início do CRM

A tela inicial do CRM é o seu **feed de ações**: ela não mostra gráficos nem números gerais, e sim só o que precisa da sua atenção agora — chamados com prazo estourando, edições aguardando aprovação e automações com falha. Quando não há nada pendente, a tela mostra "Tudo em ordem".

## Como acessar

**CRM** → abre direto nesta tela ao entrar no módulo (rota `/crm`).

![Início do CRM](/img/manual/crm/crm.png)

## O que você vê nesta tela

No topo, um cartão azul com a **saudação** (bom dia/boa tarde, conforme o horário), a **data** e a **hora** atuais. Logo abaixo, quatro indicadores e, em seguida, o feed de cartões com pendências.

| Área | O que é |
|---|---|
| Saudação + data/hora | Cumprimento contextual; a hora se atualiza sozinha. |
| Botão **Ver relatórios** | Atalho para os KPIs gerais (ficam em Relatórios, não aqui). |
| **Total de ações** | Soma de tudo que precisa de ação: SLA vencido + em risco + edições pendentes + automações com erro. |
| **SLA vencido** | Chamados cujo prazo de atendimento já estourou. |
| **Em risco** | Chamados cujo prazo vence nos próximos 60 minutos. |
| **Pendentes** | Edições em campos críticos aguardando aprovação. |
| Feed de cartões | Lista de pendências, cada uma com um rótulo (SLA, RISCO, EDIT, AUTO, INBOX) e um atalho para resolver. |

## O que dá pra fazer aqui

Os indicadores são informativos. A ação acontece nos **cartões do feed**: cada cartão leva você direto para a tela onde o problema é resolvido.

| Cartão | Para onde leva |
|---|---|
| **SLA** (chamados vencidos) | Painel de SLA do atendimento. |
| **RISCO** (chamados perto de vencer) | Caixa de entrada do atendimento. |
| **EDIT** (edições pendentes) | [Edições pendentes](./crm-pessoas-edicoes.md). |
| **AUTO** (automações com falha) | [Automações](./crm-automacoes.md). |
| **INBOX** (notificações não lidas) | Apenas informa quantas notificações você tem para ler. |

### Resolver uma pendência

1. Localize o cartão no feed.
2. Leia o título e a descrição (eles dizem o que aconteceu).
3. Clique no cartão. Você é levado para a tela onde aquela pendência é tratada.

### Ver os números gerais (KPIs)

1. Clique em **Ver relatórios** (no cartão azul do topo) ou em **Abrir Relatórios** (quando a tela está "Tudo em ordem").
2. Os indicadores de funil e métricas gerais ficam na tela de Relatórios.

## Dicas e observações

- Esta tela é proposital e enxuta: serve para **agir**, não para analisar. Se quiser acompanhar desempenho, use Relatórios.
- A tela "no zero" (sem cartões) é o estado ideal: significa que não há nada crítico pendente.
- Os indicadores ficam destacados (vermelho/amarelo) só quando há algo a fazer.

## Veja também

- [Edições pendentes](./crm-pessoas-edicoes.md)
- [Automações](./crm-automacoes.md)
- [Listas de contatos](./crm-listas.md)
