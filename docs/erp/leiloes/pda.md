---
title: Ponto de Atendimento (PDA)
sidebar_position: 55
---

# Ponto de Atendimento (PDA)

O Ponto de Atendimento (PDA) é a tela de pagamentos dos lotes. Aqui você acompanha os pagamentos dos arrematantes — pendentes, pagos e cancelados —, envia recibos e faz cancelamentos e estornos.

## Como acessar

**Leilões** → **Pagamentos** → **Ponto de Atendimento** (rota `/pda`).

![Ponto de Atendimento](/img/manual/erp/pda.png)

## O que você vê nesta tela

No topo, o botão **Novo pagamento** e três abas que separam os pagamentos por situação. Cada aba mostra um contador com o total. Abaixo, um campo de busca e a tabela de pagamentos.

> A confirmar: o registro manual de pagamento pelo botão **Novo pagamento** ainda não está ligado nesta versão. Na prática, os pagamentos chegam aqui a partir da arrematação dos lotes (ver [Fila de Vendas](./fila-vendas-leilao.md) e fechamento), e nesta tela você os acompanha e trata (recibo, cancelamento, estorno).

| Aba | O que mostra |
|---|---|
| Pendentes | Pagamentos pendentes ou em andamento. |
| Pagos | Pagamentos pagos ou confirmados. |
| Cancelados | Pagamentos cancelados ou estornados. |

| Coluna | O que é |
|---|---|
| # | Identificador do pagamento. |
| Arrematante | Nome do arrematante e documento, quando disponível. |
| Lote | Lote vinculado ao pagamento. |
| Leilão | Leilão correspondente. |
| Valor | Valor do pagamento. |
| Forma | Forma de pagamento. |
| Status | Pendente, Em andamento, Pago, Confirmado, Cancelado ou Estornado. |
| Data | Data do registro. |
| Ações | Enviar recibo, cancelar ou estornar (conforme o status). |

## O que dá pra fazer aqui

### Buscar um pagamento

- Use o campo de busca para filtrar por arrematante, lote ou leilão.

### Alternar entre situações

- Clique nas abas **Pendentes**, **Pagos** ou **Cancelados** para ver os pagamentos de cada situação.

### Enviar recibo

1. Em um pagamento com status **Pago** ou **Confirmado**, clique no ícone de **enviar recibo** (avião de papel) na coluna de ações.
2. O recibo é enviado ao arrematante.

### Cancelar um pagamento pendente

1. Em um pagamento **Pendente**, clique no ícone de **cancelar** (círculo com "x").
2. O pagamento é cancelado.

### Estornar um pagamento

1. Em um pagamento **Pago** ou **Confirmado**, clique no ícone de **estornar** (seta circular).
2. O pagamento é estornado.

## Dicas e observações

- As ações disponíveis dependem do status: recibo e estorno aparecem apenas em pagamentos pagos/confirmados; o cancelamento aparece apenas em pendentes.
- **Cancelar x Estornar** não são a mesma coisa. *Cancelar* desfaz um pagamento que ainda estava **pendente** (nunca chegou a ser pago). *Estornar* reverte um pagamento que já foi **pago/confirmado** — por isso só aparece nesses status. Ambos enviam o registro para a aba **Cancelados**.
- A busca filtra dentro da aba (situação) que estiver aberta; troque de aba para procurar em outra situação.
- Cada aba traz o total de pagamentos daquela situação no próprio rótulo.

## Veja também

- [Fila de Vendas](./fila-vendas-leilao.md)
- [Notas de Arrematação](./notas.md)
