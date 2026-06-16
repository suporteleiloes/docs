---
slug: lancamento-erp-v5
title: "Lançamento do ERP Suporte Leilões 5.0"
authors: [tiagofelipe]
tags: [lançamento, v5, novidades]
date: 2026-06-15
---

# Suporte Leilões 5.0 — uma nova plataforma

A versão **5.0** não é uma atualização: é o ERP da Suporte Leilões **reconstruído do zero**. Saímos de um sistema monolítico para uma **plataforma modular, multi‑tenant e nativamente apoiada por IA** — mais rápida, mais segura e muito mais completa.

<!-- truncate -->

## O que mudou em relação ao sistema antigo

| | Antes (v4) | Agora (5.0) |
|---|---|---|
| **Interface** | Vue 2 + Quasar | **Vue 3 + Vite** — mais rápida, responsiva, com **modo escuro** e design consistente |
| **Arquitetura** | Monolítica | **Multi‑tenant banco‑por‑tenant** — cada leiloeira isolada, com escala horizontal |
| **Inteligência** | Sem IA | **IA nativa** — relatórios por linguagem natural, robô de processos, antifraude, geração de conteúdo |
| **Escopo** | Foco em leilão | **20 módulos** cobrindo todo o negócio: pregão, jurídico, financeiro, CRM, marketing, pátio, sites e mais |
| **Segurança** | Básica | **2FA, restrição por IP/horário, sessões ao vivo, auditoria e anti‑brute‑force** |
| **Sites** | Site único | **Multisite + marketplace + domínio próprio** self‑service |

Na prática: as telas abrem mais rápido, os dados de cada cliente ficam isolados, e tarefas que antes eram manuais agora têm automação e IA por trás.

## Tudo que o 5.0 entrega

### Pregão e operação do leilão
- **Leilões ao vivo** — tela do leiloeiro + controlador, **telão e transmissão**, **lance automático (proxy bid)**, **auditório e fila de vendas**, **esteira de fechamento** (formalização → cobrança → notas), calendário e monitor consolidado, comitente acompanhando o pregão ao vivo.
- **Bens & Lotes** — cadastro de **veículos e imóveis**, fotos/vídeos/mapa, loteamento drag‑and‑drop e importação, **publicação em portais**, checklist de providências, localização física no pátio, propostas de compra direta e painel de insights do estoque.

### Jurídico e captação
- **Processos & Robô IA** — **robô DJEN nos 27 tribunais**, **análise do processo por IA (que cita a fonte)**, detector de bens, fila de oportunidades, intimações e andamentos centralizados, estrutura jurídica pré‑configurada.

### Pessoas
- **Arrematantes & Antifraude** — habilitação digital, **verificação de identidade (SERPRO DataValid)**, monitor de negativados, **ficha 360º** e habilitação granular por lote.
- **Comitentes & Integrações** — gestão de comitentes, devolução automática de resultados, integrações com seguradoras (Grupo Porto, Mapfre, Resale).
- **RH** — colaboradores, cargos, departamentos, eventos e integração financeira.

### Operação física
- **Pátio & Remoção** — painel, solicitações, mapa operacional, entradas/saídas, estadias e custos, guias GRV/GGV, reboquistas/motoristas, contratos e tabela de preços.
- **Vistorias** — laudo digital, formulário por papel, comparação com o cadastro do bem.

### Relacionamento e marketing
- **CRM** — pessoas, **funil de relacionamento e de negócios (kanban)**, lead scoring, leads e pedidos do site, automações **no‑code**.
- **Atendimento Omnichannel** — caixa de entrada unificada, **chatbot com IA**, chamados, times, SLA e mensagens proativas.
- **Marketing & IA** — campanhas (e‑mail/WhatsApp), segmentos, **estúdio de artes com IA**, A/B, listas e remetentes.

### Gestão e back‑office
- **Financeiro & Fiscal** — contas a pagar/receber, extrato, **conciliação bancária**, plano de contas, gateways de pagamento, compras e estoque.
- **Relatórios & BI com IA** — relatórios gerenciais, **dashboards de BI** e **relatórios gerados por linguagem natural (text‑to‑SQL)**.
- **Documentos & Assinatura** — templates, geração e controle de validade de documentos.
- **Automações & No‑code** — fluxos automáticos por evento de negócio, com **autorizador por alçada**.

### Presença digital e plataforma
- **Sites & Marketplace** — multisite, páginas, blog, banners/popups, menus, webhooks e **domínio próprio** self‑service.
- **Venda Direta** — Compre Já, Oferta e Proposta, com buscador e ofertas públicas.
- **Aplicativos** — apps de **arrematante** e **vistoria**.
- **Segurança & Auditoria** — 2FA, restrição por IP e horário, sessões ao vivo, anti‑brute‑force e trilha de auditoria.

---

> 📚 Toda a operação de cada módulo está detalhada, tela a tela, na [documentação](/docs). Esta é a régua do que o 5.0 faz — e estamos só começando.
