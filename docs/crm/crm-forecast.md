---
title: Previsão & Metas de Vendas
sidebar_position: 8
---

# Previsão & Metas de Vendas

Esta tela projeta **quanto a equipe deve fechar** no período e compara o resultado com as **metas** definidas. Ela responde perguntas como "vamos bater a meta do mês?", "quanto já está no pipeline?" e "quem está mais perto de fechar?". É a visão de forecast do CRM, construída a partir dos negócios do funil.

## Como acessar

**CRM** → **Pipeline** → **Previsão & Metas** (rota `/crm/forecast`).

![Previsão e Metas](/img/manual/crm/crm-forecast.png)

## O conceito de "pipeline ponderado"

O número mais importante desta tela é o **pipeline ponderado**. A ideia é simples: nem todo negócio aberto vai fechar, então não faz sentido somar o valor cheio de todos eles como se fosse dinheiro garantido.

Cada negócio tem uma **probabilidade** de fechamento (%). O sistema multiplica o **valor do negócio pela sua probabilidade** e soma tudo. Assim, um negócio de R$ 100 mil com 30% de chance entra na conta como R$ 30 mil — uma expectativa mais realista do que fechará de fato.

> Quando um negócio não tem probabilidade própria, o sistema usa a **probabilidade da etapa do funil** em que ele está como valor de reserva (fallback). Ou seja, negócios em etapas mais avançadas naturalmente pesam mais na previsão.

## O que você vê nesta tela

### Indicadores (KPIs)

No topo, cartões resumem a situação do período selecionado:

| Indicador | O que mostra |
|---|---|
| **Pipeline ponderado** | Soma do valor de cada negócio aberto multiplicado pela sua probabilidade. A expectativa realista do que ainda pode fechar. |
| **Pipeline bruto** | Soma do valor cheio de todos os negócios abertos, sem ponderar. O "teto" do que há em jogo. |
| **Previsão do período** | O que o período tende a fechar: o **realizado** somado ao **pipeline ponderado**. |
| **Realizado** | Valor dos negócios **ganhos** dentro do período. |
| **Meta do período** | A soma das metas definidas para o período. |
| **% de atingimento** | Quanto do total de metas já foi realizado. |

> O **realizado** considera a **data de fechamento** do negócio (quando ele foi marcado como ganho), não a data em que foi criado. Um negócio ganho conta para o período em que foi fechado.

### Gráficos

- **Forecast por mês** — a evolução mês a mês, comparando o **pipeline bruto** com o **ponderado**.
- **Valor ponderado por etapa** — quanto de valor ponderado está represado em cada etapa do funil, mostrando onde o pipeline se concentra.

### Tabelas

- **Pipeline por vendedor** — para cada vendedor, o valor **bruto**, o **ponderado** e o **número de negócios** em aberto. Serve para ver quem tem mais oportunidades em jogo.
- **Metas & atingimento** — cada meta com uma **barra de progresso** do realizado contra o alvo, para acompanhar quem está perto ou distante de bater.

## O que dá pra fazer aqui

### Gerenciar metas

Na gestão de metas você cria, edita e exclui as metas usadas nesta tela.

Ao **criar ou editar** uma meta, defina:

| Campo | O que é |
|---|---|
| **Vendedor** | A quem a meta pertence. Deixar **sem vendedor** cria uma **meta de equipe** (do time todo). |
| **Funil** *(opcional)* | Restringe a meta a um funil específico. Sem funil, vale para todos. |
| **Tipo** | **Valor** (em reais) ou **Quantidade** (número de negócios). |
| **Valor** | O alvo da meta (o número a ser atingido). |
| **Período** | A data de **início** e de **fim** que a meta cobre. |

Para **excluir** uma meta, use a ação de remover na própria lista de metas.

### Acompanhar o período

Ajuste o período em análise para ver a previsão e o atingimento de um mês, trimestre ou faixa específica. Os KPIs, os gráficos e as tabelas se atualizam para refletir o recorte escolhido.

## Dicas e observações

- Mantenha as **probabilidades dos negócios** (ou das etapas do funil) atualizadas: é delas que sai o pipeline ponderado. Probabilidades irreais tornam a previsão irreal.
- Uma **meta sem vendedor** é a meta do time; uma **meta por vendedor** permite comparar o desempenho individual na tabela de atingimento.
- A **Previsão do período** (realizado + ponderado) é o melhor termômetro de fechamento: ela junta o que já foi ganho com a expectativa do que ainda está em aberto.

## Veja também

- [Funil de Relacionamento](./crm-pipeline.md)
- [Configurar etapas do funil](./crm-pipeline-config.md)
- [Funis de Venda](./crm-funis-venda.md)
- [Detalhe do negócio](./crm-negocios-id.md)
- [Kanban do funil](./crm-negocios-kanban.md)
