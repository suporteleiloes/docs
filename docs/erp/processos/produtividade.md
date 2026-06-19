---
title: Leilões Próximos
sidebar_position: 3
---

# Leilões Próximos

O **Painel de Leilões Próximos** mostra os processos em que o sistema detectou uma **data de leilão** se aproximando. A detecção vem da análise do texto das publicações somada à IA. É a tela ideal para se antecipar e priorizar processos por urgência.

## Como acessar

**ERP** → **Processos** → aba **Leilões Próximos**.

![Painel de Leilões Próximos](/img/manual/erp/produtividade.png)

## O que você vê nesta tela

No topo, o título do painel e a explicação. Abaixo, quatro cartões de atalho por janela de tempo e a tabela de leilões detectados.

### Cartões de período

Cada cartão filtra a lista por uma janela de dias e mostra a quantidade de leilões dentro dela. Clique no cartão para aplicar o filtro.

| Cartão | O que mostra |
|---|---|
| Próximos 7 dias | Leilões nos próximos 7 dias (destaque de urgência). |
| Próximos 30 dias | Leilões nos próximos 30 dias. |
| Próximos 60 dias | Leilões nos próximos 60 dias. |
| Próximos 90 dias | Leilões nos próximos 90 dias. |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Data | Data do leilão (e hora, quando detectada). |
| Faltam | Quantos dias faltam, em etiqueta colorida por urgência (vermelho ≤ 7 dias, amarelo ≤ 15, azul ≤ 30, verde acima disso). Mostra "Hoje" quando é no dia. |
| Processo | Número do processo. |
| Comarca / UF | Órgão/comarca e estado. |
| Evento | Descrição do evento detectado. |
| Sistema | Sistema de origem da publicação. |
| Fonte | Ícone (🔍) indicando que a data foi detectada automaticamente — a origem pode ser por padrão de texto (regex) ou por IA. |

Cada processo aparece **uma vez**, com a data de leilão **mais próxima** detectada. A janela padrão ao abrir a tela é a de **30 dias**.

## O que dá pra fazer aqui

- **Mudar a janela de tempo**: clique em um dos cartões (7, 30, 60 ou 90 dias) para recarregar a lista naquele período.
- **Abrir um processo**: clique em qualquer linha para ir ao detalhe do processo.

### Acompanhar um leilão próximo

1. Escolha a janela de tempo no cartão correspondente (por exemplo, **Próximos 7 dias**).
2. Veja na coluna **Faltam** quais estão mais urgentes (etiquetas vermelhas).
3. Clique na linha do processo para abrir o detalhe e tomar as providências.

## Dicas e observações

- Se o painel estiver vazio, é porque ainda não há leilões detectados na janela escolhida. Para popular, **ative a Análise IA** nos processos ou aguarde o robô puxar novas publicações.
- A detecção de data depende da qualidade do texto da publicação; sempre confira a data oficial no processo.

## Veja também

- [Processos](./processo.md)
- [Oportunidades](./oportunidades.md)
- [Configuração do robô](./configuracao-robo.md)
