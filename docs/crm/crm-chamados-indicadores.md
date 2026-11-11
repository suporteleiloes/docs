---
title: Indicadores de chamados
sidebar_position: 32
---

# Indicadores de chamados

Mostra, para um período que você escolhe, como está o atendimento de chamados **por atendente, por time, por cliente, por categoria ou por prioridade**: quantos chegaram, quantos foram resolvidos, quanto ficou dentro do SLA, tempo de resposta e de solução, reaberturas, satisfação dos clientes e tarefas entregues. Serve para a revisão semanal da equipe e para acompanhar metas.

## Como acessar

**ERP** → **RH** → **Painel da Equipe** → aba **Chamados**. Atalho: na lista de **Tickets** (CRM), clique em **Indicadores**. O endereço fica `/rh/painel-equipe?aba=chamados`.

Precisa da permissão **Ver indicadores de chamados** (CRM → atendimento) ou da permissão do **Painel da Equipe**.

![Indicadores de chamados por atendente](/img/manual/crm/crm-chamados-indicadores.jpg)

## O que você vê nesta tela

**Barra de filtros**

| Filtro | Para que serve |
|---|---|
| Esta semana, Semana passada, Mês atual, Mês passado, 30 dias | Atalhos de período. |
| De / Até | Período livre (até 366 dias). |
| Atendente, Time, Cliente, Categoria, Prioridade | Como agrupar as linhas da tabela. |
| Exportar CSV | Baixa a tabela (abre no Excel). |

**Cartões do topo** — os totais do período: Recebidos, Resolvidos, 1ª resposta no SLA, Resolvidos no SLA, Tempo médio de 1ª resposta, Tempo médio de solução, Reabertura e Satisfação.

**Tabela** — uma linha por grupo e o **Total** no fim. Clique no título de uma coluna para ordenar. Passe o mouse sobre um número para ver o detalhe (ex.: quais protocolos foram reabertos).

| Coluna | O que significa |
|---|---|
| Recebidos | Chamados abertos no período. |
| Atendidos | Chamados que receberam a 1ª resposta no período. |
| Resolvidos | Chamados que foram para Resolvido ou Fechado no período. |
| 1ª resp. no SLA | % dos chamados recebidos respondidos dentro do prazo de 1ª resposta da prioridade. Só entram os que já foram respondidos ou cujo prazo já passou. |
| Resolvidos no SLA | % dos resolvidos no período que foram resolvidos até o prazo de SLA. |
| TM 1ª resp. | Tempo médio até a 1ª resposta. Entre parênteses, contando só horário útil (segunda a sexta, 8h às 18h). |
| TM solução | Tempo médio da abertura até a resolução (e em horário útil, entre parênteses). |
| P1 ≤ 15 min | % dos chamados **urgentes** respondidos em até 15 minutos. |
| Reaberturas | Quantas vezes chamados voltaram de resolvido/fechado para em aberto; entre parênteses, chamados reabertos ÷ resolvidos. |
| Satisfação | Média das notas (1 a 5) dadas pelos clientes no período. |
| Abertos agora / Vencidos agora | Situação neste momento (não depende do período). |
| Tarefas entregues / Tarefas no prazo | Só nos agrupamentos por atendente e por time: tarefas concluídas no período e % até o prazo. |

![Indicadores por categoria](/img/manual/crm/crm-chamados-indicadores-categoria.jpg)

## Regras de negócio

- **Atribuição:** o chamado conta para o **atendente atual**. Se você reatribuir, os números vão junto.
- **Categoria:** é a tag padronizada do chamado (ver [Detalhe do ticket](crm-chamados-id.md)). Sem categoria, o chamado aparece em "Sem categoria".
- **Reabertura:** conta toda volta de resolvido/fechado para em aberto, inclusive quando o cliente responde depois de resolvido. Vale também para chamados antigos (o histórico já guardava as trocas de status).
- **SLA:** os prazos vêm de **CRM → Atendimentos → SLA** e contam em horas corridas. O horário útil aparece só como informação nos tempos médios.
- **Time:** quem está em mais de um time conta em cada time; o Total conta cada chamado uma vez.
- **Cores:** verde/vermelho comparam com a referência do padrão de atendimento (1ª resposta 85%, solução 80%, satisfação 4,3, reabertura até 10%). Não bloqueiam nada.

## Dicas

- Para a revisão semanal, use **Semana passada** + **Atendente** e exporte o CSV.
- Abra **Como cada indicador é calculado**, no fim da tela, para ver as definições.
- Muitos chamados em "Sem atendente" ou "Sem categoria" indicam triagem incompleta.

## Veja também

- [Tickets (chamados)](crm-chamados.md)
- [Detalhe do ticket](crm-chamados-id.md)
- [Atendimentos / SLA](crm-atendimentos-sla.md)
