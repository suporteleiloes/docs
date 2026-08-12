---
title: Atividades
sidebar_position: 4
---

# Atividades

Esta é a **lista de trabalho** do CRM: ligações, reuniões, visitas, e-mails e tarefas que a equipe precisa fazer com clientes. Aqui você planeja o que vem pela frente, vê o que está **atrasado** e acompanha o que é seu — cada atividade vinculada, quando fizer sentido, a uma pessoa ou a um negócio.

Para ver estas atividades **num calendário** (junto de reuniões, treinamentos e ausências), use a **[Agenda](../erp/agenda/agenda-calendario.md)** — ela é o calendário único do sistema. Há um atalho **"Ver no calendário"** no topo desta tela.

:::tip Atividade (CRM) × Compromisso (Agenda) — não confunda
**Atividade** é uma **ação a fazer** com um cliente (ligar, reunir, visitar), com **prazo** e vinculada a uma pessoa/negócio. É acompanhada aqui no CRM e faz parte da produtividade da equipe.

Já um **Compromisso** (no módulo **ERP → Agenda**) é um **bloco de tempo** que ocupa a sua agenda (reunião de equipe, treinamento, bloqueio de horário) — ele trava a disponibilidade, mas não é uma demanda com prazo.

As atividades que você cria aqui **também aparecem** na [Agenda do ERP](../erp/agenda/agenda-calendario.md), para você ver, num só calendário, o que tem para fazer e quando está ocupado.
:::

## Como acessar

**CRM** → **Atividades** (rota `/crm/atividades`).

![Lista de atividades](/img/manual/crm/crm-atividades.jpg)

## O que você vê nesta tela

As atividades aparecem em **lista, agrupadas por dia**. No topo você tem os **presets** (recortes prontos) e, ao lado, os filtros por responsável e por tipo.

### Presets

A lista traz **presets** para focar no que importa:

| Preset | O que mostra |
|---|---|
| **Hoje** | As atividades do dia. |
| **Atrasadas** | As que já passaram do prazo e não foram concluídas. |
| **Esta semana** | As da semana corrente. |
| **Minhas** | As atividades em que você é o responsável. |
| **Todas** | Todas as atividades. |

Além dos presets, você filtra por **tipo** de atividade e por **responsável**, e pode **mostrar as concluídas** (que por padrão ficam fora da lista, para não poluir a visão do que ainda falta fazer).

### Tipos de atividade

Cada atividade tem um **tipo**, com ícone próprio:

| Tipo | Para quê |
|---|---|
| **Ligação** | Ligar para o contato. |
| **Reunião** | Encontro (presencial ou online). |
| **E-mail** | Enviar/dar retorno por e-mail. |
| **Visita** | Visita presencial. |
| **WhatsApp** | Contato por WhatsApp. |
| **Tarefa** | Uma tarefa genérica, sem canal específico. |

## O que dá pra fazer aqui

### Criar uma atividade

1. Clique em **+ Nova atividade**.
2. Preencha os campos:

| Campo | O que é |
|---|---|
| **Título** | O que precisa ser feito (ex.: "Ligar para confirmar visita"). |
| **Tipo** | Ligação, Reunião, E-mail, Visita, WhatsApp ou Tarefa. |
| **Responsável** | Quem vai executar. |
| **Data / hora** | Quando a atividade acontece. |
| **Prioridade** | O nível de urgência. |
| **Descrição** | Detalhes livres. |
| **Lembrete** *(opcional)* | Um aviso antes da hora, para não esquecer. |
| **Vínculo** *(opcional)* | Uma **Pessoa** ou um **Negócio** ao qual a atividade se refere. |

3. Salve. A atividade passa a aparecer na agenda e na lista.

### Marcar como concluída

Ao concluir uma atividade, ela sai da lista de pendências. Use **mostrar concluídas** na visão Lista para revê-las quando precisar.

## Relação com Tarefas, Pessoas e Negócios

As Atividades usam a **mesma base do módulo de Tarefas** — na prática, **uma atividade é uma tarefa com um tipo** (ligação, reunião, etc.). Por isso:

- Uma atividade vinculada a uma **pessoa** ou a um **negócio** também aparece na aba **Tarefas** daquele registro.
- O que você registra aqui e o que aparece no [módulo de Tarefas](../erp/tarefas/sl-tarefas.md) são a mesma coisa, vistas de ângulos diferentes: aqui, no formato de **agenda de CRM**; lá, no formato de **gestão de tarefas**.

## Dicas e observações

- Comece o dia pelo preset **Hoje** e confira **Atrasadas** para não deixar nada para trás.
- **Vincule** a atividade a uma pessoa ou negócio sempre que possível: assim o histórico daquele contato/oportunidade fica completo, e a atividade aparece também na ficha dele.
- Use o **lembrete** para compromissos sensíveis a horário (uma ligação de retorno, uma reunião).

## Veja também

- [Agenda (ERP)](../erp/agenda/agenda-calendario.md) — o calendário único, que também mostra estas atividades.
- [Tarefas (lista)](../erp/tarefas/sl-tarefas.md)
- [Detalhe do negócio](./crm-negocios-id.md)
- [Cadências de vendas](./crm-cadencias.md)
