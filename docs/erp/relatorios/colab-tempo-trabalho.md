---
title: Tempo de Trabalho
sidebar_position: 7
---

# Tempo de Trabalho

Este relatório mostra as **horas trabalhadas por colaborador**, dia a dia, dentro de um período. É a visão usada para acompanhar a carga de trabalho da equipe e conferir o total de horas de cada pessoa.

## Como acessar

**ERP** → **Relatórios** → **Tempo de Trabalho**.

![Tempo de Trabalho](/img/manual/erp/colab-tempo-trabalho.png)

## O que você vê nesta tela

A tela tem um cartão de **Filtros**. Depois de gerar, o resultado aparece em uma tabela cruzada (colaboradores nas linhas, dias nas colunas).

### Filtros

| Filtro | O que é |
|---|---|
| Data inicial | Início do período. Se você informar só a data inicial, o relatório considera **apenas aquele dia**. Se deixar as duas datas em branco, considera o **dia de hoje**. |
| Data final | Fim do período. Use junto com a data inicial para ver um intervalo de dias. |
| Colaborador | Campo de busca por colaborador. **Atenção:** hoje este filtro **não tem efeito** — o relatório sempre traz **todos** os colaboradores. Para ver só uma pessoa, localize a linha dela na tabela. |

> A confirmar com a equipe: se o filtro por colaborador será ativado em uma próxima versão.

### Resultado

| Coluna | O que é |
|---|---|
| Colaborador | Nome do colaborador (coluna fixa à esquerda). |
| Colunas por dia | Uma coluna para cada dia do período, com as horas trabalhadas naquele dia (ex.: "7h 30m"). Mostra **0** quando não houve registro. |
| Total | Soma das horas do colaborador no período. |

## O que dá pra fazer aqui

### Gerar o relatório

1. Informe a **Data inicial** e a **Data final** (deixe ambas em branco para ver o dia de hoje).
2. Clique em **Gerar relatório**.
3. A tabela aparece logo abaixo, com cada colaborador em uma linha, as horas por dia e o total no fim.
4. Se não houver nenhum registro de horas no período, aparece um aviso informando que não foi possível gerar.

## Dicas e observações

- Este relatório é exibido apenas na tela — não há exportação para Excel ou PDF aqui.
- O relatório sempre lista a equipe inteira; para conferir uma pessoa, procure a linha dela na tabela.
- Os horários são apresentados em horas e minutos (ex.: "8h 15m"); dias sem registro mostram **0**.
- As horas vêm dos registros de ponto/trabalho dos colaboradores no sistema; quem não tiver nenhum registro no período não aparece na tabela.

## Veja também

- [Produtividade por Período](./produtividade.md)
- [Módulo de Relatórios](./relatorios.md)
