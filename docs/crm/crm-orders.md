---
title: Pedidos do Site
sidebar_position: 24
---

# Pedidos do Site

Esta tela acompanha os **pedidos de auto-contratação** feitos pelo site (página /assinar) — quando um cliente contrata um plano sozinho. Aqui você acompanha o pagamento, o provisionamento da conta e age quando algo falha.

> Observação: esta tela é exclusiva da equipe interna (tenant Gerência). Em contas de leiloeiras comuns ela não aparece.

## Como acessar

**CRM** → **Pedidos do Site**.

![Pedidos do Site](/img/manual/crm/crm-orders.png)

## O que você vê nesta tela

No topo, uma faixa de **indicadores (KPIs)** com a contagem de pedidos por situação: Aguardando, Pago, Provisionando, Pronto, Falhou e Inadimplente. Abaixo, os filtros (busca, **Status** e **Plano**) e a tabela de pedidos.

| Coluna | O que é |
|---|---|
| **Criado** | Data e hora em que o pedido foi feito. |
| **Pedido** | Código do pedido (ord_...). Clique para abrir o detalhe. |
| **Cliente** | Nome e e-mail do responsável e a razão social da empresa. |
| **Plano** | Plano contratado (Simplificado, Premium ou Enterprise) e o ciclo (/mês ou /ano). |
| **Valor** | Valor do pedido. |
| **Status** | Situação: Aguardando pagamento, Pago, Provisionando, Pronto, Falhou, Inadimplente ou Cancelado. |

## O que dá pra fazer aqui

- **Filtrar** por status, por plano e por texto (nome, e-mail, CNPJ, slug ou código ord_).
- **Abrir o detalhe** de um pedido.
- **Salvar notas** internas sobre o pedido.
- **Reenviar credenciais** ao cliente (quando o pedido está Pronto).

### Ver o detalhe de um pedido

1. Clique no **código do pedido** (ou na seta da coluna de ações).
2. No painel você vê: situação e plano/ciclo/valor, razão social, CNPJ, responsável, e-mail, telefone, CPF, o **tenant** (slug) criado, links do **ERP** e do **site público**, dados do gateway de pagamento (provedor e charge ID), datas de criação e pagamento e, quando aplicável, o **progresso do provisionamento** e a **mensagem de erro**.

![Detalhe do pedido](/img/manual/crm/crm-orders-detalhe.png)

### Registrar uma nota interna

1. Abra o detalhe do pedido.
2. Escreva em **Notas internas (equipe SL)**.
3. Clique em **Salvar notas**. (As notas não são enviadas ao cliente.)

### Reenviar credenciais ao cliente

1. Abra um pedido com status **Pronto**.
2. Clique em **Reenviar credenciais**. O cliente recebe novamente os dados de acesso.

> O botão **Reenviar credenciais** só aparece quando o pedido está **Pronto**.

## Dicas e observações

- Use os **KPIs** do topo para detectar rápido pedidos que precisam de atenção: **Falhou** e **Inadimplente** ficam destacados.
- Quando um pedido falha no provisionamento, a mensagem de erro aparece no detalhe — útil para diagnosticar antes de reprocessar.
- Os links de **ERP** e **site público** abrem em uma nova aba.

## Veja também

- [Leads do Site](crm-leads-site.md)
