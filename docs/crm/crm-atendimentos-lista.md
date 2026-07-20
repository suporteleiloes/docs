---
title: Lista de atendimentos
sidebar_position: 11.5
---

# Lista de atendimentos

A Lista de atendimentos é uma visão em **tabela** (estilo tickets) de todas as conversas de atendimento — uma alternativa à [Caixa de entrada](./crm-atendimentos.md). Enquanto a caixa de entrada é feita para **atender em tempo real**, a lista é feita para **enxergar o conjunto**: filtrar, ordenar, medir e fazer triagem em massa. As duas mostram as mesmas conversas, de jeitos diferentes.

## Como acessar

**CRM** → **Atendimentos** → **Lista de atendimentos** (rota `/crm/atendimentos/lista`).

Há um botão para **alternar entre a Lista e a Caixa de entrada**, então você troca de visão sem sair do módulo.

![Lista de atendimentos](/img/manual/crm/crm-atendimentos-lista.png)

## O que você vê nesta tela

A tela tem três partes: um cabeçalho com **indicadores (KPIs)**, os **filtros** e a **tabela** de atendimentos.

### Indicadores (KPIs)

No topo, cartões resumem a situação da amostra que está sob os filtros atuais:

| Indicador | O que mostra |
|---|---|
| **Total no filtro** | Quantos atendimentos batem com os filtros aplicados. |
| **Abertos agora** | Atendimentos ainda em aberto neste momento. |
| **Aguardando** | Conversas na fila, esperando um atendente. |
| **Em atendimento** | Conversas que um agente já assumiu. |
| **Encerrados** | Conversas concluídas. |
| **Tempo de 1ª resposta** | Tempo médio até a primeira resposta ao cliente. |
| **Tempo de resolução** | Tempo médio até o encerramento do atendimento. |

> Os tempos de **1ª resposta** e **resolução** são **aproximados**: eles são calculados sobre a amostra visível (os atendimentos que estão sob os filtros e a paginação atuais), e servem como termômetro, não como número fechado. Para métricas consolidadas do período, use os [Relatórios — Atendimento](./crm-relatorios-atendimento.md).

Ao lado dos números, dois mini-gráficos ajudam a ler o cenário de relance:

- **Volume por canal** — a distribuição dos atendimentos entre os canais (site, WhatsApp, e-mail, etc.).
- **Atividade dos últimos 14 dias** — a evolução do volume nas últimas duas semanas.

### Filtros

Acima da tabela você combina os filtros para recortar exatamente o que quer ver:

- **Busca textual** — por nome do contato, assunto ou conteúdo.
- **Status** — aberto, aguardando, em atendimento, encerrado.
- **Canal** — site, WhatsApp, e-mail, Instagram, Messenger, voz.
- **Setor** — o setor responsável pela conversa.
- **Responsável** — o agente atribuído.
- **Prioridade** — o nível de urgência.
- **Período** — a faixa de datas.

Um botão **Limpar** remove todos os filtros de uma vez.

### Tabela

Cada linha é um atendimento, com estas colunas:

| Coluna | O que mostra |
|---|---|
| **Contato** | Avatar e nome de quem está sendo atendido. |
| **Canal** | Por onde a conversa chegou. |
| **Assunto / última mensagem** | O assunto ou uma prévia da mensagem mais recente. |
| **Status** | A fase atual (aberto, aguardando, em atendimento, encerrado). |
| **Setor** | O setor responsável. |
| **Responsável** | O agente atribuído (ou sem atribuição). |
| **Prioridade** | O nível de urgência. |
| **Aberto há** | Há quanto tempo o atendimento foi aberto. |
| **Atualizado** | Quando houve a última movimentação. |

A tabela é **ordenável por coluna** (clique no cabeçalho) e tem **paginação** no rodapé para percorrer grandes volumes.

## O que dá pra fazer aqui

### Filtrar e ordenar

1. Combine os filtros do topo para recortar os atendimentos que interessam (por exemplo, canal **WhatsApp** + status **Aguardando**).
2. Clique no cabeçalho de uma coluna para ordenar (por exemplo, por **Aberto há** para achar os mais antigos primeiro).
3. Use a paginação para percorrer o restante.
4. Clique em **Limpar** para recomeçar do zero.

### Abrir a conversa no painel lateral (drawer)

1. Clique em uma linha da tabela.
2. Um **painel lateral (drawer)** abre com a **conversa completa** — histórico e detalhes — sem tirar você da lista.
3. Para atuar na conversa como faria no dia a dia, clique em **Abrir na caixa de entrada**: a conversa é levada para o inbox, onde você responde, transfere, encerra, etc.

![Conversa aberta no painel lateral](/img/manual/crm/crm-atendimentos-lista-drawer.png)

### Fazer triagem em massa

Como a lista mostra muitos atendimentos de uma vez, é o lugar ideal para **revisar a fila**, redistribuir responsáveis e identificar o que está parado — antes de entrar na caixa de entrada para tratar caso a caso.

## Quando usar a Lista e quando usar a Caixa de entrada

| Use a **Lista de atendimentos** | Use a **Caixa de entrada** |
|---|---|
| Visão gerencial e analítica do conjunto. | Atender em tempo real, conversa a conversa. |
| Filtrar, ordenar e medir (KPIs e gráficos). | Responder, anexar, usar notas internas e o copiloto. |
| Triagem em massa e redistribuição. | Assumir, transferir, priorizar, adiar e encerrar. |

As duas visões são complementares: use a lista para **enxergar e organizar**, e a caixa de entrada para **atender**.

## Dicas e observações

- Os KPIs e os tempos refletem **a amostra sob os filtros e a paginação atuais** — ajuste os filtros para mudar o recorte. Para números consolidados do período, veja os relatórios.
- O botão de alternância no topo troca rapidamente entre a **Lista** e a **Caixa de entrada** sem perder o contexto.

## Veja também

- [Atendimentos (caixa de entrada)](./crm-atendimentos.md)
- [Painel de SLA](./crm-atendimentos-sla.md)
- [Relatórios — Atendimento](./crm-relatorios-atendimento.md)
