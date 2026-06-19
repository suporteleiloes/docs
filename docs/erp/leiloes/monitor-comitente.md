---
title: Monitor do comitente
sidebar_position: 56
---

# Monitor do comitente

O **Monitor do comitente** é um painel de acompanhamento, em tempo real, dos **lotes de um comitente** dentro de um leilão. Mostra quantos lotes foram vendidos, quanto foi arrematado, o que está em pregão, e permite ao comitente **aprovar, recusar ou fazer contraproposta** nos lances condicionais que dependem da decisão dele. É uma tela de leitura (dashboard), pensada para o comitente acompanhar o resultado dos seus bens.

## Pré-requisitos

- Os lotes precisam ter **bens vinculados a um comitente** para aparecerem aqui. Lotes sem comitente não entram no monitor.
- Para que a tela filtre sozinha, o usuário logado deve estar **associado a um comitente**. Usuários administrativos (sem comitente próprio) usam o seletor de comitente no topo.

## Como acessar

**Leilões** → abra um leilão → **Monitor do comitente**.

![Monitor do comitente](/img/manual/erp/monitor-comitente.png)

## O que você vê nesta tela

Se o seu usuário já estiver vinculado a um comitente, a tela filtra automaticamente pelos lotes dele. Caso contrário (ex.: um administrador), aparece no topo um **seletor de comitente** para você escolher qual comitente acompanhar.

A tela é montada em blocos:

| Bloco | O que mostra |
|---|---|
| Cartão do comitente | Nome, total de lotes no leilão, total de lances recebidos e o valor já **arrematado**. |
| Indicadores (KPIs) | Total de lotes, Vendidos (e % do total), Condicionais, Retirados, **Em pregão agora** (ao vivo) e Valor em lances (com a avaliação total). |
| Progresso geral | Barra colorida com a proporção de Vendidos, Condicionais, Retirados e Pendentes. |
| Pendências de aprovação | Lista de lotes **condicionais** aguardando a decisão do comitente (aparece só quando há pendências). |
| Lotes do comitente | Tabela com cada lote: foto, número, descrição, avaliação, lance atual (e nº de lances), status e arrematante. |

A coluna/indicador **Em pregão agora** e o status dos lotes piscam quando algo está acontecendo ao vivo. A tabela de lotes se atualiza a cada **5 segundos**.

## O que dá pra fazer aqui

### Escolher o comitente a acompanhar

1. Se aparecer o seletor **Comitente** no topo, clique nele.
2. Selecione o comitente desejado.
3. Os indicadores e a tabela passam a refletir apenas os lotes desse comitente.

> Se o seu usuário já é um comitente, esse passo não aparece — a tela já vem filtrada.

### Aprovar um lance condicional

Quando um lote recebe um lance abaixo do valor mínimo, ele fica **condicional** e entra em "Pendências de aprovação". Para cada pendência você vê o **valor mínimo**, o **melhor lance** e a **diferença**.

1. No bloco **Pendências de aprovação**, localize o lote.
2. Clique em **Aprovar condicional**.
3. Confirme. O lote é aprovado e sai da lista de pendências.

### Recusar um lance condicional

1. Localize o lote em **Pendências de aprovação**.
2. Clique em **Recusar condicional**.
3. Confirme. O lance condicional é recusado.

### Fazer uma contraproposta

1. No lote condicional, clique em **Realizar contraproposta**.
2. Na janela que abre, informe o **valor mínimo aceitável** para aquele lote.
3. Clique em **Enviar proposta**. A contraproposta é registrada como uma mensagem/solicitação vinculada ao lote (não altera o valor automaticamente) — ela sinaliza ao leiloeiro o valor que o comitente aceitaria.

## Dicas e observações

- A tela atualiza os lotes a cada 5 segundos e reage em tempo real a novos lances e mudanças de status.
- As pendências de aprovação só aparecem quando existem lotes condicionais aguardando decisão.
- Os indicadores Vendidos/Condicionais/Retirados/Em pregão se baseiam no status atual de cada lote.
- Esta tela é, na maior parte, **somente leitura** — as únicas ações são aprovar, recusar e contrapropor os condicionais.

## Veja também

- [Controlador (pregão ao vivo)](./controlador.md)
- [Auditório ao vivo](./auditorio.md)
