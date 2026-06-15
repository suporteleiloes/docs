---
title: Mensagens proativas
sidebar_position: 13
---

# Mensagens proativas

As mensagens proativas aparecem sozinhas para o visitante no widget de chat do site, sem que ele precise iniciar a conversa. Você define o que dizer e quando dizer — por exemplo, oferecer ajuda depois de alguns segundos em uma página de leilão. É uma forma de puxar conversa com quem está navegando.

## Como acessar

**CRM** → **Atendimentos** → **Proativas**.

![Mensagens proativas](/img/manual/crm/crm-atendimentos-proativas.png)

## O que você vê nesta tela

No topo ficam o contador de mensagens, o filtro por widget e o botão **Nova mensagem**. Abaixo, a lista de mensagens proativas já configuradas.

Cada linha da lista mostra:

| Elemento | O que é |
|---|---|
| **Prioridade** | Número que define a ordem; quando há mais de uma mensagem elegível, a de maior prioridade aparece. |
| **Título** | O título da mensagem (o que o visitante vê em destaque). |
| **Regra** | Quando a mensagem é exibida (por tempo, página ou segmento). |
| **Mensagem** | O texto que será mostrado. |
| **Widget** | Em qual widget de chat a mensagem aparece. |
| **Interruptor (ativa/inativa)** | Liga ou desliga a mensagem com um clique. |

## O que dá pra fazer aqui

### Criar uma mensagem proativa

1. Clique em **Nova mensagem**.
2. Em **Widget**, escolha em qual widget de chat a mensagem deve aparecer.
3. Preencha o **Título** (obrigatório, ex.: "Precisa de ajuda?").
4. Escreva a **Mensagem** (obrigatória, ex.: "Estamos aqui pra tirar suas dúvidas sobre os leilões.").
5. Em **Quando exibir**, escolha a regra:
   - **Após X segundos na página** — informe os **Segundos** de espera.
   - **Em página específica** — informe um trecho que a **URL contém** (deixe em branco para qualquer página).
   - **Por segmento de visitante** — escolha entre **Todos os visitantes**, **Visitantes novos (1ª visita)** ou **Visitantes recorrentes**.
6. Defina a **Prioridade** (número) e marque **Ativa** se quiser que ela já entre no ar.
7. Acompanhe a **Pré-visualização** à direita, que mostra como o balão ficará no widget.
8. Clique em **Salvar**.

### Editar uma mensagem

Clique em **Editar** na linha desejada, ajuste os campos no mesmo modal e clique em **Salvar**.

### Ativar ou desativar rapidamente

Use o **interruptor** na linha da mensagem. Ele liga ou desliga a exibição na hora, sem precisar abrir a edição. Mensagens inativas ficam esmaecidas na lista.

### Excluir uma mensagem

Clique em **Excluir** na linha, confirme, e a mensagem deixa de aparecer no widget.

### Filtrar por widget

Use o seletor **Todos os widgets** no topo para ver apenas as mensagens de um widget específico.

## Dicas e observações

- A **prioridade** decide qual mensagem ganha quando mais de uma poderia aparecer ao mesmo tempo; quanto maior o número, mais relevante.
- A regra **Em página específica** casa qualquer URL que **contenha** o trecho digitado (ex.: `/leilao`), então use trechos curtos e específicos.
- Se a área de mensagens proativas ainda não estiver disponível na sua instância, a tela aparece vazia em vez de mostrar erro.

## Veja também

- [Atendimentos (caixa de entrada)](./crm-atendimentos.md)
- [Times de atendimento](./crm-atendimentos-times.md)
