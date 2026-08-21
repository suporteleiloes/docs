---
title: Avisos automáticos de leilão
sidebar_position: 36
---

# Avisos automáticos de leilão (WhatsApp e e-mail)

O ERP pode avisar sozinho os participantes de um leilão em momentos importantes — por exemplo, quando **o leilão está para encerrar hoje** ou quando **um leilão que a pessoa acompanha abriu**. As mensagens saem por **WhatsApp e/ou e-mail**, para o público que você escolher.

:::info Tudo começa desligado
Nenhum aviso é enviado sem você ligar. E cada aviso respeita quem pediu para não receber (opt-out) e evita repetição (não manda o mesmo aviso duas vezes no mesmo dia).
:::

## Como acessar

**CRM** → **Configurações** → **Avisos proativos**.

## O que você vê nesta tela

Uma lista de avisos, cada um com um botão liga/desliga:

![Tela de avisos proativos](/img/manual/crm/notificacoes/02-notificacoes-lista.jpg)

| Aviso | Quando dispara |
|---|---|
| **Seu leilão encerra hoje** | Na reta final do leilão, avisa os participantes com o link para acompanhar e dar lances. |
| **O leilão que você acompanha abriu** | Quando um leilão é publicado, avisa quem favoritou o leilão (ou lotes dele). |
| **Re-lance ao ser superado** | Avisa quem foi superado e convida a dar novo lance. |
| **Lembrete de lote/leilão favorito** | Lembra quem favoritou um lote/leilão que vai abrir em breve. |
| **Pós-arremate** | Parabéns + instruções de pagamento e retirada. |
| **Régua de cobrança** | Sequência de lembretes para arremates pendentes. |

## Configurando um aviso

Ao ligar um aviso, aparecem as opções:

![Configuração do aviso encerra hoje](/img/manual/crm/notificacoes/03-notificacoes-encerra-hoje-config.jpg)

- **Canais** — WhatsApp, E-mail (ou os dois).
- **Quem recebe** — marque os públicos do leilão: habilitados, quem deu lance, quem favoritou, quem visitou, ou todos os participantes.
- **Horas antes** — com quanta antecedência avisar (no "encerra hoje", é quanto antes do fechamento).
- **Intervalo mínimo** — evita repetir o mesmo aviso dentro desse período.

O texto de cada aviso é um modelo editável no **módulo de Documentos** (indicado no rodapé do aviso).

## Passo a passo

1. Acesse **CRM → Configurações → Avisos proativos**.
2. Ligue o aviso desejado (ex.: **Seu leilão encerra hoje**).
3. Marque os **canais** e o **público**.
4. Ajuste **horas antes** e salve. Pronto — o sistema envia sozinho.

:::warning WhatsApp fora da janela de 24h
Para enviar por WhatsApp a quem não te mandou mensagem nas últimas 24h, a Meta exige um **template aprovado**. Configure isso em [WhatsApp Oficial — templates](./crm-configuracoes-whatsapp.md). Sem template aprovado, o WhatsApp não sai — mas o **e-mail** sai normalmente.
:::

## Veja também

- [WhatsApp — números e templates](./crm-configuracoes-whatsapp.md)
- [Marketing dentro do leilão](./crm-marketing-no-leilao.md)
- [Rastreamento e Analytics](./crm-rastreamento-analytics.md)
