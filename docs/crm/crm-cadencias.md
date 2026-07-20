---
title: Cadências de vendas
sidebar_position: 9
---

# Cadências de vendas

Uma **cadência** é uma sequência planejada de contatos com um cliente — mensagens, esperas e tarefas — que você **matricula manualmente** nas pessoas certas. É o roteiro de follow-up do vendedor: "no dia 1, mande um e-mail; espere 2 dias; ligue; espere mais 3 dias; mande um WhatsApp". Em vez de lembrar de cada passo na mão, você inscreve a pessoa na cadência e o sistema conduz a sequência.

## Como acessar

**CRM** → **Pipeline** → **Cadências de vendas**.

O atalho leva você para a tela de [Automações](./crm-automacoes.md) já **filtrada pelas cadências** (rota `/crm/automacoes?tipo=cadencia`). As cadências ficam marcadas com o selo **Cadência**.

![Matricular em cadência](/img/manual/crm/crm-cadencia-matricular.png)

## Cadência × automação por evento

Cadências e automações são o **mesmo motor**, com uma diferença central: **quem dá o start**.

| | **Cadência** | **Automação por evento** |
|---|---|---|
| Como começa | Você **matricula** a pessoa manualmente. | Dispara **sozinha** quando um evento acontece (pessoa criada, lote arrematado, etc.). |
| Para quê | Roteiro de follow-up conduzido pelo vendedor. | Reação automática a algo que aconteceu no sistema. |
| Onde aparece | Filtro **Cadências**, com o selo **Cadência**. | Filtro **Por evento**. |

Na tela de Automações, o filtro alterna entre as **Cadências** e as automações **Por evento**, então você vê cada grupo separadamente.

## Como é uma cadência por dentro

Uma cadência é uma sequência de **passos**, que podem ser:

- **Mensagem** — enviar um e-mail/WhatsApp a partir de um template.
- **Espera** — aguardar **N dias** antes do próximo passo (é o que dá o "ritmo" da cadência).
- **Ligação** — criar uma **tarefa de ligação** para o vendedor, para que ele faça o contato pessoalmente. A cadência não liga sozinha: ela lembra o vendedor de ligar.

Cada pessoa matriculada percorre esses passos na ordem, respeitando as esperas entre eles.

## O que dá pra fazer aqui

### Matricular pessoas em uma cadência

A matrícula é feita **a partir da lista de pessoas**:

1. Abra a **lista de Pessoas** do CRM.
2. **Selecione** uma ou mais pessoas (caixas de seleção).
3. Clique em **Matricular em cadência**.
4. **Escolha a cadência** desejada.
5. **Confirme**.

Cada pessoa selecionada **começa a sequência** a partir do primeiro passo.

### Ver e ajustar uma cadência

Como as cadências vivem na tela de Automações, você as abre e edita como qualquer automação: passos, mensagens, tempos de espera e condições. Veja o detalhe em [Automações](./crm-automacoes.md).

## Dicas e observações

- Use **cadência** quando **você decide** quem entra no follow-up (uma lista de leads mornos, por exemplo); use **automação por evento** quando quer uma **reação automática** a algo que aconteceu.
- O passo de **Ligação** não substitui o vendedor — ele **cria a tarefa** para que a ligação seja feita e registrada.
- Ajuste bem as **esperas** entre passos: elas definem se a cadência é insistente ou espaçada.

## Veja também

- [Automações](./crm-automacoes.md)
- [Fluxo da automação](./crm-automacoes-id-fluxo.md)
- [Atividades e Agenda](./crm-atividades.md)
- [Previsão & Metas de Vendas](./crm-forecast.md)
