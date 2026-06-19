---
title: Oportunidades
sidebar_position: 4
---

# Oportunidades

A tela de **Oportunidades** lista processos que vão a leilão e **ainda não têm leiloeiro nomeado**. É a janela de ouro para a leiloeira se antecipar e petitar ao juízo se colocando à disposição. A detecção vem da análise por IA das publicações.

## Como acessar

**ERP** → **Processos** → aba **Oportunidades**.

![Oportunidades](/img/manual/erp/oportunidades.png)

## Pré-requisitos

- A detecção depende da **Análise IA** das publicações dos processos. Um processo só vira oportunidade aqui depois que a IA analisou suas movimentações e identificou que ele vai a leilão **sem leiloeiro nomeado**.
- Por isso, se a lista vier vazia, o caminho é **gerar a Análise IA em mais processos** (na tela de detalhe do processo) para alimentar a detecção.

## O que você vê nesta tela

No topo, o título e o botão **Atualizar**. Abaixo, uma faixa de indicadores e, em seguida, os cartões de oportunidade.

### Indicadores (faixa de estatísticas)

| Indicador | O que é |
|---|---|
| Oportunidades detectadas | Total de oportunidades encontradas. |
| Valor total estimado | Soma estimada dos valores dos bens (cartão em destaque dourado). |
| Por fase | Um indicador para cada fase detectada (Penhora, Avaliação, Edital publicado, 1º Leilão, 2º Leilão), com a quantidade. |

### Cartões de oportunidade

Cada cartão representa um processo. Mostra:

| Elemento | O que é |
|---|---|
| Número | Número do processo. |
| Fase | Etiqueta da fase processual (Penhora, Avaliação, Edital publicado, 1º Leilão, 2º Leilão). |
| Órgão / UF | Órgão/comarca e estado. |
| Status atual | Situação detectada do processo. |
| Valor estimado dos bens | Valor estimado, quando disponível. |
| Bens | Lista resumida dos bens (mostra até 2; o restante aparece como "+ N bem(ns)"). |
| Próximo | Próxima ação detectada e sua data, quando houver. |
| Rodapé | Aviso "Sem leiloeiro nomeado" e o atalho "Ver processo". |

## O que dá pra fazer aqui

- **Atualizar a lista**: clique em **Atualizar** para recarregar as oportunidades.
- **Abrir um processo**: clique em qualquer cartão para ir ao detalhe do processo.

### Trabalhar uma oportunidade

1. Confira os indicadores no topo para ter a visão geral (quantas oportunidades, valor total, distribuição por fase).
2. Percorra os cartões e identifique processos relevantes (atenção à **fase** e ao **valor estimado dos bens**).
3. Clique no cartão para abrir o processo e avaliar a viabilidade de se habilitar como leiloeira.

## Regras de negócio

- Só entram aqui processos detectados como indo a leilão e **sem leiloeiro nomeado** — daí o aviso "Sem leiloeiro nomeado" no rodapé de cada cartão. Quando um leiloeiro é identificado, o processo deixa de ser oportunidade.
- A **fase** de cada cartão (Penhora, Avaliação, Edital publicado, 1º Leilão, 2º Leilão) e os **bens** vêm da análise das publicações pela IA — são estimativas, não dados oficiais dos autos.
- Os indicadores no topo (total, valor estimado, distribuição por fase) são recalculados sobre as oportunidades atualmente detectadas.

## Dicas e observações

- Se nenhuma oportunidade aparecer, **gere a Análise IA em mais processos** para que o sistema consiga detectá-las.
- O valor total estimado é uma referência calculada a partir dos bens detectados — confirme sempre nos autos.
- A lista não se atualiza sozinha: use o botão **Atualizar** após gerar novas análises.

## Veja também

- [Processos](./processo.md)
- [Leilões Próximos](./produtividade.md)
- [Advogados](./advogados.md)
