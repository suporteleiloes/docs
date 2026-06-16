---
title: Fila de Vendas
sidebar_position: 54
---

# Fila de Vendas

A Fila de Vendas mostra, em ordem, as vendas de lotes que estão aguardando formalização. É a lista de trabalho para quem precisa concluir (formalizar) as vendas logo após o pregão. A tela se atualiza automaticamente para refletir as vendas que vão entrando.

## Como acessar

**Leilões** → **Fila de Vendas** (rota `/fila-vendas-leilao`).

![Fila de Vendas](/img/manual/erp/fila-vendas-leilao.png)

## O que você vê nesta tela

No cabeçalho há um indicador de **atualização automática**. Abaixo, a tabela com as vendas na ordem da fila.

| Coluna | O que é |
|---|---|
| Pos. | Posição da venda na fila (numeração sequencial). |
| Lote | Número/identificação do lote vendido. |
| Bem | Título/descrição do bem. |
| Arrematante | Nome do comprador/arrematante e seu documento, quando disponível. |
| Leilão | Leilão a que o lote pertence. |
| Valor | Valor do lance vencedor. |
| Status | **Aguardando** (ainda não formalizada) ou **Formalizado**. |
| Ações | Botão para formalizar a venda. |

## O que dá pra fazer aqui

### Formalizar uma venda

1. Localize a venda com status **Aguardando**.
2. Clique em **Formalizar** na coluna de ações.
3. A venda é processada; quando concluída, o status muda para **Formalizado**.

### Navegar pela lista

- Use a paginação no rodapé da tabela e ajuste a quantidade de itens por página (20, 50 ou 100).

## Dicas e observações

- A tela atualiza sozinha periodicamente — novas vendas entram na fila sem precisar recarregar.
- A coluna **Pos.** reflete a ordem de chegada considerando a página atual; vendas já formalizadas continuam visíveis marcadas como **Formalizado**.

## Veja também

- [Auditório Unificado](./leiloes-auditorio.md)
- [Ponto de Atendimento](./pda.md)
- [Notas de Arrematação](./notas.md)
