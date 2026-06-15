---
title: Saúde dos Tenants
sidebar_position: 14
---

# Saúde dos Tenants

Painel que mostra, em tempo real, os **sinais vitais de cada cliente** (tenant) da plataforma: quando o administrador entrou pela última vez, quantos erros ocorreram, quantos leilões estão ativos e mais. Serve para identificar um cliente "morrendo" — pouco uso, muitos erros — **antes** que ele cancele.

## Como acessar

**Console** → **Saúde dos Tenants** (rota `/console/saude`).

![Saúde dos Tenants](/img/manual/_interno/console-saude.png)

## O que você vê nesta tela

No topo, um resumo geral com contadores clicáveis:

| Indicador | O que mostra |
|---|---|
| **Total** | Número de clientes monitorados (clicar atualiza o painel). |
| **OK** | Clientes com tudo normal. |
| **Atenção** | Clientes com algum sinal de alerta. |
| **Crítico** | Clientes com problema grave. |

Ao lado fica o botão **Atualizar**. O painel também se atualiza sozinho a cada 60 segundos.

Abaixo, um cartão por cliente. Cada cartão tem uma faixa colorida à esquerda (verde = OK, laranja = Atenção, vermelho = Crítico), o nome do tenant, a etiqueta de status e, quando há alertas, uma lista de **motivos** (ex.: "sem login há X dias"). Em seguida, as métricas:

| Métrica | O que é |
|---|---|
| **Último login admin** | Há quanto tempo o administrador do cliente entrou (hoje, ontem, X dias atrás ou "nunca"), com a data/hora exata. |
| **Erros 24h** | Quantidade de erros nas últimas 24 horas. |
| **Leilões ativos** | Leilões em andamento no cliente. |
| **Users ativos** | Total de usuários ativos. |
| **Jobs pendentes** | Tarefas na fila de processamento aguardando execução. |
| **Arrematantes 30d** | Atividade de arrematantes nos últimos 30 dias. |

Métricas em situação de alerta (ex.: mais de 30 dias sem login, mais de 100 erros, mais de 100 jobs pendentes) aparecem destacadas.

## O que dá pra fazer aqui

### Atualizar o painel

Clique em **Atualizar** (ou no contador **Total**) para recarregar os dados na hora. Caso contrário, ele atualiza sozinho a cada minuto.

### Investigar um cliente com problema

1. Procure os cartões com faixa **laranja** ou **vermelha**.
2. Leia a lista de **motivos** no cartão para entender o que disparou o alerta.
3. Use as métricas para confirmar o diagnóstico (ex.: muitos erros, login antigo, fila travada).

## Dicas e observações

- O painel é **somente leitura**: ele diagnostica, mas as ações de correção acontecem em outras telas/ferramentas.
- "Jobs pendentes" altos podem indicar fila de processamento travada; "Erros 24h" altos indicam instabilidade no cliente.
- Um cliente "Crítico" por falta de login + queda de arrematantes é forte sinal de risco de cancelamento — vale contato proativo do suporte.
- Esta é uma tela interna (Console da gerência) restrita ao administrador máximo (ROLE_ROOT).

## Veja também

- [Monitor de Crons](./console-crons.md)
- [Clientes](./console-clientes.md)
