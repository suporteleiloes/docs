---
title: Andamentos Processuais
sidebar_position: 16
---

# Andamentos Processuais

Esta tela reúne, em uma só lista, as **movimentações de todos os processos** do escritório — incluindo as publicações captadas automaticamente. É o painel para acompanhar, no dia a dia, o que está acontecendo nos processos e saber quais movimentações chegaram por notificação (push).

## Como acessar

Pelo menu principal, em **Andamentos** (URL `/andamentos`). Cada linha leva ao processo correspondente.

![Andamentos Processuais](/img/manual/erp/andamentos.png)

## O que você vê nesta tela

No topo há uma barra de filtros; abaixo, a tabela paginada de movimentações (20, 50 ou 100 por página).

### Filtros

| Filtro | O que faz |
|---|---|
| Pesquisa inteligente | Busca por palavras-chave / texto da movimentação. |
| Tipo | Filtra por processo Eletrônico ou Físico (ou todos). |
| Data | Define qual data considerar: Publicação, Registro ou Leilão. |

### Colunas

| Coluna | O que é |
|---|---|
| # | Identificador da movimentação. |
| Processo | Número do processo (formato CNJ) e o tribunal. |
| Movimentação | Texto/descrição da movimentação (até 2 linhas). |
| Data publicação | Data em que a movimentação foi publicada. |
| Registro sistema | Data em que entrou no sistema. |
| Push | Indica se há notificação não vista. Um ponto azul significa novidade. |

## O que dá pra fazer aqui

### Filtrar a lista
Digite na **Pesquisa inteligente** e ajuste os seletores de **Tipo** e **Data**. A lista atualiza automaticamente e volta para a primeira página.

### Abrir o processo de uma movimentação
Dê **duplo clique** na linha para abrir a tela de detalhe do processo.

### Marcar uma notificação como vista
Quando houver o ponto azul na coluna **Push**, clique nele para marcar a notificação como vista. O indicador some.

## Dicas e observações

- A ordenação padrão é pela data de registro no sistema, das mais recentes para as mais antigas.
- O ponto azul (push) ajuda a localizar rapidamente o que chegou de novo e ainda não foi conferido. Ele aparece quando há uma **notificação de movimentação** ainda não vista (gerada quando o robô capta uma publicação relevante).
- Esta tela é **somente leitura/consulta**: ela reúne movimentações de todos os processos, mas não cadastra novas aqui. Para **lançar uma movimentação manual**, abra o processo e use a área de andamentos do próprio processo.
- As movimentações entram de duas formas: **automaticamente**, pelo [robô de monitoramento](./configuracao-robo.md) (publicações do DJEN), e por **lançamento manual** dentro de cada processo.
- O seletor **Data** muda qual data a busca por período considera (Publicação / Registro / Leilão), útil quando você quer filtrar por quando a movimentação foi publicada versus quando entrou no sistema.

## Veja também

- [Processo (detalhe)](./-id.md)
- [Configuração do robô](./configuracao-robo.md)
- [Intimações](./intimacoes.md)
