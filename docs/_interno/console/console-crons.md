---
title: Monitor de Crons
sidebar_position: 15
---

# Monitor de Crons

Painel que lista todos os **comandos automáticos da plataforma** (as rotinas que rodam sozinhas, como envios programados e processamentos em lote) e mostra como anda cada um: quando rodou pela última vez, se deu certo ou falhou, e o histórico recente. Você também pode **disparar um comando manualmente** sem precisar de acesso técnico ao servidor.

## Como acessar

**Console** → **Monitor de Crons** (rota `/console/crons`).

![Monitor de Crons](/img/manual/_interno/console-crons.png)

## O que você vê nesta tela

No topo, uma barra com **abas de filtro** e um campo de busca:

| Aba | O que mostra |
|---|---|
| **Todos** | Todos os comandos da aplicação. |
| **Crons** | Apenas os comandos agendados (rotinas automáticas). |
| **Já rodaram** | Comandos que têm ao menos uma execução registrada. |
| **Falhas** | Comandos cuja última execução **falhou**. |

Cada aba mostra a contagem ao lado do nome. O campo **Buscar comando...** filtra por nome ou descrição.

A lista de comandos exibe, em cada linha:

| Coluna | O que é |
|---|---|
| (bolinha de status) | Verde = última execução com sucesso; vermelho (piscando) = falhou; azul (piscando) = rodando agora; cinza = nunca rodou. |
| **Nome** | Nome do comando, com a etiqueta **CRON** quando é agendado, e a descrição abaixo. |
| **Última execução** | Há quanto tempo rodou (ex.: "5min atrás") e a duração. |
| **Estatísticas 7d** | Sucessos / falhas nos últimos 7 dias. |
| **Ações** | Botão **Rodar** e seta para expandir o histórico. |

O painel se atualiza sozinho a cada 30 segundos.

## O que dá pra fazer aqui

### Ver o histórico de um comando

1. Clique na **linha** do comando (ou na seta à direita).
2. A linha se expande mostrando as últimas execuções em uma tabela: número, **status** (com código de saída), início, duração, quem disparou e o host.
3. Quando a execução produziu saída, o **trecho final do log** aparece logo abaixo — útil para entender por que um comando falhou, sem precisar acessar o servidor.

### Disparar um comando manualmente

1. Localize o comando na lista.
2. Clique em **Rodar**.
3. Confirme na janela. O comando passa a rodar em segundo plano no servidor.
4. Aparece a confirmação de que foi disparado. Em poucos segundos a lista se atualiza e o histórico do comando abre sozinho com o resultado.

## Dicas e observações

- A bolinha **vermelha piscando** chama atenção para falhas recentes — use a aba **Falhas** para ver só esses casos.
- Antes de disparar um comando manualmente, confira na descrição o que ele faz; comandos rodam de verdade no servidor.
- Para diagnosticar uma falha, expanda o comando e leia o trecho final do log antes de acionar o time técnico.
- Esta é uma tela interna (Console da gerência) restrita ao administrador máximo (ROLE_ROOT).

## Veja também

- [Saúde dos Tenants](./console-saude.md)
- [Consulta assistida (IA)](./console-ia.md)
