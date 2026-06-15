---
title: Tickets (chamados)
sidebar_position: 30
---

# Tickets (chamados)

Esta é a central de atendimento por tickets do CRM. Cada solicitação de cliente vira um **ticket** (também chamado de chamado), com protocolo, prioridade, responsável e prazo de SLA. Aqui você acompanha a fila de atendimento em formato de lista ou de quadro (board) e abre novos tickets.

## Como acessar

**CRM** → **Tickets** (ou pela barra de endereço em `/crm/chamados`).

![Tickets (chamados)](/img/manual/crm/crm-chamados.png)

## O que você vê nesta tela

No topo, ao lado do título **Tickets**, aparece a contagem de tickets carregados. À direita há um seletor para alternar entre duas visões:

- **Lista** — fila em linhas, no estilo de uma caixa de entrada.
- **Board** — quadro com colunas por status, em que você arrasta cartões.

Na visão **Lista**, a barra de filtros traz:

- Campo de **busca** por assunto ou protocolo.
- **Pílulas de status**: Em fila, Aberto, Em atendimento, Aguardando, Resolvido, Fechado.
- **Pílulas de prioridade**: Baixa, Média, Alta, Urgente.

Cada linha da lista mostra:

| Coluna | O que é |
|---|---|
| Sinal de prioridade | Barrinhas que indicam o nível (1 a 4 barras): Baixa, Média, Alta, Urgente. |
| Protocolo | Código identificador do ticket. |
| Assunto | Resumo do atendimento. |
| Cliente | Nome da pessoa vinculada (quando houver). |
| SLA | Selo vermelho **SLA** quando o prazo foi estourado. |
| Status | Situação atual do ticket. |
| Responsável | Avatar do atendente; um ícone tracejado indica "sem responsável". |
| Horário | Quando o ticket foi aberto (hora no mesmo dia, ou data). |

## O que dá pra fazer aqui

### Filtrar e buscar tickets

1. Digite no campo de busca para localizar por **assunto** ou **protocolo**.
2. Clique em uma pílula de **status** para ver só os tickets daquela situação. Clique de novo na mesma pílula para desmarcar.
3. Clique em uma pílula de **prioridade** para refinar. Também funciona como liga/desliga.
4. A lista recarrega automaticamente a cada mudança de filtro.
5. Se houver mais resultados, clique em **Carregar mais** no fim da lista.

### Alternar entre Lista e Board

1. Clique em **Lista** ou **Board** no canto superior direito.
2. No **Board**, as colunas são: Aberto, Em atendimento, Aguardando, Resolvido e Fechado, cada uma com a contagem de cartões.
3. Para mudar o status de um ticket, **arraste o cartão** para outra coluna. A mudança é aplicada na hora.
4. Cartões com SLA vencido exibem o selo **SLA**; tickets urgentes recebem destaque na borda.

> Observação: os filtros de status e prioridade valem para a **Lista**. O **Board** sempre carrega todas as colunas.

### Abrir um ticket

- Clique em qualquer linha (na Lista) ou em qualquer cartão (no Board) para abrir a [tela de detalhe do ticket](<crm-chamados-id(\\d+).md>).

### Abrir um novo ticket

1. Clique em **Novo ticket** (canto superior direito).
2. Preencha **Assunto** (obrigatório) — o resumo do atendimento.
3. Opcionalmente, escreva a **Descrição** detalhando a solicitação do cliente.
4. Escolha a **Prioridade** (Baixa, Média, Alta, Urgente). O padrão é Média.
5. Escolha o **Canal** por onde o cliente entrou em contato (E-mail, Chat, Telefone, WhatsApp, Presencial, Instagram, Facebook ou Outro).
6. Se quiser, vincule um **Cliente** buscando a pessoa pelo nome.
7. Se quiser, defina um **Atendente** responsável buscando o usuário.
8. Clique em **Abrir ticket**. O ticket é criado e você é levado direto para a tela de detalhe dele.

![Novo ticket](/img/manual/crm/crm-chamados-novo.png)

## Dicas e observações

- O **assunto** é o único campo obrigatório para abrir um ticket; cliente e atendente podem ser preenchidos depois.
- A prioridade controla o "sinal" de barras exibido em toda a tela — use-o para priorizar a fila visualmente.
- O selo **SLA** sinaliza tickets que já passaram do prazo de atendimento — priorize-os.
- Mover um cartão no Board é a forma mais rápida de mudar o status sem abrir o ticket.

## Veja também

- [Detalhe do ticket](<crm-chamados-id(\\d+).md>)
- [Atendimentos / SLA](crm-atendimentos-sla.md)
- [Atendimentos](crm-atendimentos.md)
