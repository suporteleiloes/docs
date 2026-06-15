---
title: Notas de Arrematação
sidebar_position: 56
---

# Notas de Arrematação

Esta tela centraliza, em um único lugar, as notas de arrematação de todos os leilões. A nota é o documento que comprova a venda de um lote a um arrematante. Aqui você registra (emite) notas, baixa o PDF, reimprime a 2ª via, envia a nota ao cliente e cancela quando necessário.

> Esta é a lista geral de notas (rota `/notas`). Para trabalhar as notas dentro de um leilão específico (gerar nota, baixar todas em ZIP), veja a aba **Notas Fiscais** do [Fechamento](./fechamento.md).

## Como acessar

**Leilões** → **Notas** (rota `/notas`).

![Notas de Arrematação](/img/manual/erp/notas.png)

## O que você vê nesta tela

No topo, abas que separam as notas por situação, cada uma com um contador. Abaixo, um campo de busca e a tabela de notas.

| Aba | O que mostra |
|---|---|
| Todas | Todas as notas. |
| Emitidas | Notas que já têm número. |
| Pendentes | Notas ainda não registradas (sem número). |
| Inválidas | Notas cujos arremates foram cancelados, mas a nota não. |
| Canceladas | Notas marcadas como canceladas. |

| Coluna | O que é |
|---|---|
| # | Identificador da nota. |
| Nº da nota | Número da nota (e início da chave de segurança, quando houver). |
| Leilão | Leilão(ões) dos arremates da nota (clicável para abrir o leilão). |
| Arrematante | Comprador/arrematante e documento; indica quando há mais de um. |
| Lotes | Lotes incluídos na nota. |
| Valor | Valor total da nota. |
| Situação | Emitida, Pendente, Inválida ou Cancelada. |
| Emissão | Data/hora de emissão (e data manual, se houver). |
| Ações | Registrar, baixar, reimprimir, enviar e cancelar (conforme a situação). |

## O que dá pra fazer aqui

### Buscar uma nota

- Use o campo de busca para filtrar por número, arrematante ou leilão.

### Alternar entre situações

- Clique nas abas (Todas, Emitidas, Pendentes, Inválidas, Canceladas) para filtrar a lista. O contador de cada aba mostra a quantidade.

### Registrar (emitir) uma nota

1. Em uma nota **Pendente** (sem número e não cancelada), clique no ícone de **registrar** (visto / check).
2. A nota é registrada e passa a ter número, mudando para **Emitida**.

### Baixar a nota em PDF

1. Em uma nota **Emitida**, clique no ícone de **baixar** (seta para baixo).
2. O PDF da nota de arrematação é gerado e baixado.

### Reimprimir a 2ª via

1. Em uma nota **Emitida**, clique no ícone de **reimprimir** (impressora).
2. O PDF é baixado marcado como 2ª via.

### Enviar a nota ao cliente

1. Em uma nota **Emitida** e não cancelada, clique no ícone de **enviar** (avião de papel).
2. A nota é enviada ao cliente.

### Cancelar uma nota

1. Em uma nota não cancelada, clique no ícone de **cancelar** (círculo com "x").
2. Confirme. A nota é marcada como cancelada — a ação fica registrada.

## Dicas e observações

- As ações variam conforme a situação: **registrar** só aparece em notas pendentes; **baixar/reimprimir/enviar** só em notas emitidas; **cancelar** em qualquer nota ainda não cancelada.
- Uma nota fica **Inválida** quando os arremates dela foram cancelados, mas a nota em si não — vale revisar essas para regularizar.
- Clique no nome do leilão na coluna **Leilão** para abrir o leilão correspondente.

## Veja também

- [Notas Fiscais (Fechamento)](./fechamento.md)
- [Fila de Vendas](./fila-vendas-leilao.md)
- [Ponto de Atendimento (PDA)](./pda.md)
