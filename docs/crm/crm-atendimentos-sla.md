---
title: Painel de SLA
sidebar_position: 12
---

# Painel de SLA

O painel de SLA mostra, em um só lugar, quais chamados estão **vencidos** ou **em risco** de estourar o prazo de atendimento, além da satisfação dos clientes e da carga de cada atendente. É a tela do supervisor para garantir que nada fique sem resposta no prazo.

## Como acessar

**CRM** → **Atendimentos** → **SLA**.

![Painel de SLA](/img/manual/crm/crm-atendimentos-sla.png)

## O que você vê nesta tela

Quando não há nada fora do prazo, um aviso verde informa **"Tudo dentro do SLA agora"**. Caso contrário, a tela mostra indicadores, listas de chamados e a carga por atendente.

### Indicadores (KPIs)

| Indicador | O que mostra |
|---|---|
| **Vencidos** | Quantidade de chamados que já passaram do prazo e exigem ação imediata. |
| **Em risco** | Chamados cujo prazo vence nos próximos minutos (janela configurável). |
| **Satisfação média** | Nota média dada pelos clientes (de 0 a 5) e o total de respostas. |

### Lista de vencidos

Cada linha traz o protocolo, o assunto, a prioridade, o atendente responsável (ou "sem atribuição") e o prazo. Clicar em um item leva você à caixa de entrada de atendimentos.

### Lista de em risco

Mostra protocolo, assunto, prioridade e prazo dos chamados prestes a vencer.

### Por atendente

Uma tabela com a carga de cada atendente:

| Coluna | O que é |
|---|---|
| **Atendente** | Quem é o responsável (ou "Sem atribuição"). |
| **Aberto** | Chamados abertos com esse atendente. |
| **Em atendimento** | Chamados que ele está atendendo. |
| **Aguardando** | Chamados aguardando resposta. |

## O que dá pra fazer aqui

### Acompanhar e agir sobre os prazos

1. Confira os indicadores **Vencidos** e **Em risco** no topo.
2. Clique em um chamado vencido para abrir a caixa de entrada e tratá-lo.
3. Use a tabela **Por atendente** para reequilibrar a carga entre a equipe.

### Definir as metas de SLA por prioridade

Na seção **Metas de SLA por prioridade**, você ajusta o prazo de cada nível de prioridade (Baixa, Média, Alta, Urgente). Cada cartão tem dois campos:

1. **1ª resposta (h)** — em quantas horas o cliente deve receber a primeira resposta.
2. **Resolução (h)** — em quantas horas o chamado deve ser resolvido.
3. Clique em **Salvar** no cartão da prioridade.

Regras de preenchimento:

- As duas metas precisam ser maiores que zero.
- A meta de **Resolução** deve ser maior ou igual à de **1ª resposta**.
- Cartões que ainda não foram personalizados exibem a etiqueta **padrão**.

### Tentar novamente em caso de erro

Se o painel não carregar, clique em **Tentar novamente**.

## Dicas e observações

- O sistema escala automaticamente os chamados vencidos para o supervisor a cada 15 minutos, sem você precisar fazer nada.
- A janela de "em risco" considera os próximos minutos para que você aja antes de o prazo estourar.
- Esta tela é voltada à supervisão do atendimento; o trabalho do dia a dia (responder, transferir, encerrar) é feito na caixa de entrada.

## Veja também

- [Atendimentos (caixa de entrada)](./crm-atendimentos.md)
- [Times de atendimento](./crm-atendimentos-times.md)
- [Relatórios — Atendimento](./crm-relatorios-atendimento.md)
