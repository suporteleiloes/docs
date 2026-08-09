---
title: Robô de encerramento
sidebar_position: 54
---

# Robô de encerramento (fechamento automático)

O **robô de encerramento** é quem fecha os lotes automaticamente quando o tempo acaba: decide se o lote foi **vendido**, ficou **sem licitante**, virou **condicional** ou **repasse** — sem o leiloeiro precisar clicar em cada um. Ele roda continuamente no servidor e opera todos os leilões que estão com o controle automático ligado.

## Como ligar

No cadastro do leilão, ative **Controle automático**. Opcionalmente, **Fechamento simultâneo** (fecha todos os lotes cujo tempo acabou de uma vez) ou deixe desligado para o modo **sequencial** (um lote em pregão de cada vez).

## O que o robô decide em cada lote

Quando o tempo de um lote acaba (mais uma pequena carência), o robô fecha assim:

| Situação | Resultado |
|---|---|
| Teve pelo menos um lance | **Vendido** (o vencedor é o maior lance) |
| Teve lance, mas o leilão está como venda condicional | **Condicional** |
| Teve lance abaixo do valor mínimo (e a opção de condicional está ligada) | **Condicional** |
| Não teve nenhum lance | **Sem licitante** |
| Não teve lance, mas o leilão está marcado para repasse | **Repasse** |

Quando todos os lotes de uma praça fecham, o robô **avança para a próxima praça** (reabrindo os sem-licitante) ou **encerra o leilão** se já era a última.

## Monitor do robô

Para acompanhar o robô em tempo real existe um **monitor** por leilão. Ele mostra:

- Se o robô está **ativo** naquele leilão e a **configuração** em vigor (simultâneo, tempo de pregão, carência).
- O **próximo lote a fechar** e **quando**, e **o que o robô vai fazer** em cada um (vender / sem licitante / condicional / repasse).
- **Quando foi o último ciclo** do robô e a **saúde**: se houver lote vencido há muito tempo ainda aberto, o monitor **alerta** que o robô pode não estar rodando.

![Pregão ao vivo — lote em pregão e lances](/img/manual/erp/leiloes/robo-demo-holofote.jpg)

:::tip Confiabilidade
O fechamento é **resiliente**: se um lote específico apresenta um problema, o robô **registra o erro e segue fechando os demais** — um lote com defeito não trava mais o fechamento dos outros. O ciclo seguinte reencontra o que ficou pendente e conclui.
:::

## Regras de negócio

- O robô só opera leilões com **Controle automático** ligado; desligado, o encerramento é **manual** (pelo Auditório Unificado).
- No modo **sequencial**, o robô coloca um lote em pregão por vez (não fecha vários de uma vez).
- A **carência** de fechamento (poucos segundos após o tempo zerar) evita cortar um lance de última hora; é configurável.

## Erros comuns

- **"Liguei o controle automático e o lote não fechou"** — confira no monitor se o robô teve um **ciclo recente**; se o último ciclo foi há muito tempo, avise o suporte (o serviço do robô pode estar parado no servidor).
- **"O lote fechou como sem licitante mas tinha lance"** — verifique se o lance estava **válido/aprovado**; lances cancelados não contam.

## Veja também

- [Auditório Unificado](./leiloes-auditorio.md)
- [Tipos de auditório](./tipos-de-auditorio.md)
