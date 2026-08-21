---
title: Rastreamento e Analytics (GA4, GTM, Pixel)
sidebar_position: 38
---

# Rastreamento e Analytics do site e do painel

Você pode medir o tráfego e a origem dos acessos do seu site e do painel do arrematante com **Google Analytics 4**, **Google Tag Manager** e **Meta Pixel**. Basta informar os IDs — o sistema injeta as tags automaticamente, respeitando o consentimento de cookies do visitante.

## Como acessar

**Configurações Globais** → **Marketing**.

## O que configurar

Na aba **Google Tag Manager**, informe os IDs modernos (é este campo que o site e o painel usam):

![Configuração de analytics](/img/manual/crm/notificacoes/07-analytics-config-ga4-gtm.jpg)

- **Google Analytics 4 — Measurement ID** — ex.: `G-XXXXXXXXXX` (Admin → Fluxos de dados, no GA4).
- **Google Tag Manager — Container ID** — ex.: `GTM-XXXXXXX` (opcional).
- Na aba **Facebook / Meta Ads**: **Meta Pixel ID** (Gerenciador de Eventos da Meta).

## Passo a passo

1. Em **Configurações Globais → Marketing → Google Tag Manager**, cole o **GA4 Measurement ID** e/ou o **GTM Container ID**.
2. Na aba **Facebook / Meta Ads**, cole o **Meta Pixel ID**.
3. **Salve**. As tags passam a carregar sozinhas no site público e no painel do arrematante.

:::info Consentimento de cookies (LGPD)
No site público, as tags só carregam depois que o visitante aceita os cookies de marketing/medição. No painel do arrematante (área logada), carregam direto.
:::

## Origem dos cadastros

Os leads capturados pelo site guardam a **origem de campanha** (UTM). Assim você distingue quem veio de **campanha paga** (ex.: Google Ads, `cpc`) de quem veio **organicamente**. Veja em **CRM → Leads do site**.
