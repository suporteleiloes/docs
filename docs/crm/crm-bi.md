---
title: Dashboard de BI
sidebar_position: 1
---

# Dashboard de BI

O Dashboard de BI reúne, em uma única tela, os principais indicadores do CRM: valor arrematado, taxa de arremate, funil de relacionamento, inadimplência, pontuação de leads e desempenho de campanhas. Use no dia a dia para ter uma visão consolidada do andamento comercial da leiloeira.

## Como acessar

**CRM** → **Relatórios** → **Dashboard de BI** (rota `/crm/bi`).

![Dashboard de BI](/img/manual/crm/crm-bi.png)

## O que você vê nesta tela

No topo há um filtro de período (campos **De** e **Até**) e o botão **Aplicar**. Logo abaixo do título, uma linha indica qual período está sendo exibido (por padrão, os últimos dias configurados).

A tela é dividida em blocos. Cada bloco pode aparecer com o aviso **"Indisponível neste ambiente"** quando o dado correspondente ainda não existe na sua instalação — isso não atrapalha os demais blocos.

### Indicadores (KPIs)

| Indicador | O que é |
|---|---|
| GMV (arrematado) | Valor total arrematado no período, com o número de arremates abaixo |
| Ticket médio | Valor médio por arremate |
| Taxa de arremate | Percentual de lotes arrematados sobre os ofertados, com a proporção (arrematados / ofertados) |
| Inadimplência | Percentual de pessoas inadimplentes, com a contagem (inadimplentes de total) |

### Gráficos e blocos

| Bloco | O que mostra |
|---|---|
| Funil de relacionamento | Barras horizontais com a quantidade de pessoas em cada etapa do funil |
| Distribuição de lead score | Rosca com a divisão dos leads por faixa de pontuação (0-25, 26-50, 51-75, 76-100) |
| Métricas de campanha | Mensagens enviadas, abertas (com taxa de abertura) e clicadas (com taxa de clique) |
| Top Leads | Ranking dos leads mais pontuados, com a nota colorida por faixa |
| Pessoas no CRM | Total de pessoas, com gráficos por status interno e por origem |
| Métricas de funil | Pessoas por etapa, com tabela de conversão e tempo médio em cada etapa |

As faixas de pontuação seguem cores: vermelho (0-25), amarelo (26-50), azul (51-75) e verde (76-100).

## O que dá pra fazer aqui

### Filtrar por período

1. Informe a data inicial no campo **De**.
2. Informe a data final no campo **Até**.
3. Clique em **Aplicar**. Os indicadores e gráficos do período são recarregados.

> Se você não informar período, a tela usa um intervalo padrão (mostrado como "Últimos N dias (padrão)").

### Ler o ranking de Top Leads

O bloco **Top Leads** lista automaticamente os leads com maior pontuação. A nota aparece em uma etiqueta colorida — quanto mais verde, mais quente o lead. Use para priorizar contatos comerciais.

### Analisar conversão do funil

No bloco **Métricas de funil**, a tabela à direita mostra, para cada etapa: a **Quantidade** de pessoas, a **Conversão** (percentual em relação ao total do funil) e o **Tempo médio** que as pessoas levam naquela etapa. Use para identificar gargalos.

## Dicas e observações

- Esta é uma tela **somente leitura** — não há cadastro ou edição aqui.
- Os blocos são independentes: se um indicador estiver indisponível na sua instalação, os demais continuam funcionando normalmente.
- Passe o mouse sobre o aviso "Indisponível neste ambiente" para ver o motivo.
- Os blocos **Top Leads**, **Pessoas no CRM** e **Métricas de funil** carregam sozinhos, sem depender do filtro de período (são visões absolutas).

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
- [Campos dinâmicos](./crm-configuracoes-campos-dinamicos.md)
