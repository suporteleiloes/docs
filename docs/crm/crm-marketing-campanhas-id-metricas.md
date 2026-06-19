---
title: Métricas da campanha
sidebar_position: 20
---

# Métricas da campanha

Esta tela mostra o desempenho de uma campanha de marketing já enviada: quantas pessoas receberam, abriram, clicaram, deram bounce e converteram. Use no dia a dia para entender se um disparo deu certo e comparar resultados.

## Como acessar
**CRM** → **Marketing** → abra uma campanha e clique em **Métricas** (ou acesse diretamente o link de métricas da campanha). A tela é sempre referente a uma campanha específica.

![Métricas da campanha](/img/manual/crm/crm-marketing-campanhas-id-metricas.png)

## O que você vê nesta tela

No topo aparece o nome da campanha. Logo abaixo, uma faixa de indicadores (cards) com os números principais e, em seguida, dois gráficos. Por fim, há a seção de **Teste A/B** quando a campanha foi configurada com variantes.

### Cards de indicadores

| Indicador | O que é |
|---|---|
| **Enviados** | Total de destinatários que receberam a campanha. |
| **Abertos** | Quantos abriram, com a taxa de abertura entre parênteses (abertos ÷ enviados). |
| **Cliques** | Quantos clicaram em algum link, com a taxa de cliques (cliques ÷ abertos). |
| **Bounces** | Quantos não foram entregues (e-mail inválido, caixa cheia etc.), com a taxa de bounce. |
| **Conversões** | Quantos completaram a ação esperada (ex.: cadastro, habilitação). |

### Gráficos

| Gráfico | O que mostra |
|---|---|
| **Funil de Engajamento** | A queda em cada etapa: Enviados → Abertos → Clicaram → Converteram. |
| **Taxas (%)** | Barras comparando taxa de Abertura, Cliques e Bounces. |

### Seção Teste A/B

Aparece quando a campanha tem teste A/B configurado. Mostra a divisão usada (ex.: divisão 50% / 50%), a variante vencedora (a de maior taxa de clique) e um comparativo entre as variantes — em cards e em tabela.

| Coluna da tabela A/B | O que é |
|---|---|
| **Variante** | Identificador da variante (A, B, …). A vencedora recebe um selo. |
| **Assunto** | Assunto/título testado naquela variante. |
| **Enviados / Abertos / Cliques** | Volume absoluto de cada métrica. |
| **Taxa abertura / Taxa clique** | Percentuais de cada variante. |

## O que dá pra fazer aqui

Esta é uma tela de leitura — você consulta os resultados, não edita nada. As ações disponíveis são:

- **Conferir os indicadores e gráficos** do desempenho geral.
- **Ler o resultado do Teste A/B**, quando houver, para saber qual variante venceu.

## Como as taxas são calculadas

- **Taxa de abertura** = abertos ÷ enviados.
- **Taxa de cliques** = cliques ÷ **abertos** (não sobre enviados) — é a proporção de quem abriu e também clicou.
- **Taxa de bounce** = bounces ÷ enviados.

Saber a base de cada taxa evita interpretar errado: uma taxa de cliques alta com poucas aberturas significa que poucos abriram, mas quem abriu se interessou.

## Regras de negócio

- **Os números dependem de retorno externo**: aberturas, cliques e bounces chegam por webhooks do provedor de envio (ex.: e-mail). Por isso eles aparecem aos poucos após o disparo, não na hora.
- **Conversões** contam quem completou a ação esperada da campanha (ex.: cadastro, habilitação) — depende de a campanha ter sido configurada com uma meta de conversão.
- **Vencedor do A/B** é sempre a variante de **maior taxa de clique**; enquanto não houver volume suficiente, fica "Sem vencedor definido ainda".

## Dicas e observações

- Se aparecer **"Sem dados de métricas"**, a campanha ainda não foi enviada ou os retornos (webhooks) das aberturas/cliques ainda não chegaram. Aguarde e recarregue.
- A seção A/B mostra **"A/B não habilitado nesta campanha"** quando a campanha foi enviada sem teste de variantes — é o comportamento normal nesse caso.
- A vencedora do A/B é definida pela **maior taxa de clique**. Enquanto não houver dados suficientes, aparece **"Sem vencedor definido ainda"**.

## Veja também
- [Comparar campanhas A vs B](./crm-marketing-comparar.md)
- [BI do CRM](./crm-bi.md)
