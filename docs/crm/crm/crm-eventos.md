---
title: Eventos de Domínio
sidebar_position: 25
---

# Eventos de Domínio

Esta tela mostra os **eventos canônicos do leilão** que o sistema registra automaticamente — lances dados, lances superados, lotes arrematados, habilitações pendentes e aprovadas. Esses eventos são o que dispara as **automações** do CRM. Aqui você acompanha a linha do tempo recente e pode **emitir um evento de teste** para conferir se uma automação está funcionando.

## Como acessar

**CRM** → **Eventos de Domínio**.

![Eventos de Domínio](/img/manual/crm/crm-eventos.png)

## O que você vê nesta tela

No topo há os botões **Atualizar** e **Emitir evento (teste)**. Abaixo, os filtros e a tabela de eventos.

Filtros disponíveis:

- **Tipo** do evento (ou todos).
- **Pessoa (ID)** — filtra pelos eventos de uma pessoa.
- **Leilão (ID)** — filtra pelos eventos de um leilão.
- **Quantidade** — quantos eventos mostrar (50, 100 ou 200 mais recentes).
- Botão **Limpar** quando há filtros aplicados.

| Coluna | O que é |
|---|---|
| **Data** | Quando o evento ocorreu. |
| **Tipo** | O tipo do evento (Lance dado, Lance superado, Lote arrematado, Habilitação pendente, Habilitação aprovada). |
| **Vínculos** | A pessoa, o leilão e/ou o lote ligados ao evento. |
| **Valor** | Valor envolvido (ex.: valor do lance), quando houver. |

## O que dá pra fazer aqui

- **Filtrar** os eventos por tipo, pessoa, leilão e quantidade.
- **Atualizar** a lista.
- **Emitir um evento de teste** para acionar uma automação manualmente.

### Emitir um evento de teste

1. Clique em **Emitir evento (teste)**.
2. Escolha o **Tipo do evento** (obrigatório).
3. Preencha, se quiser (todos opcionais): **Pessoa (ID)**, **Leilão (ID)**, **Lote (ID)** e **Valor (R$)**.
4. Em **Dados extras (JSON opcional)**, você pode informar dados adicionais em formato JSON — ex.: `{ "origem": "teste" }`. Se preencher, precisa ser um objeto JSON válido.
5. A chave **Disparar automações do gatilho** indica que as automações ligadas a esse evento serão acionadas.
6. Clique em **Emitir evento**. O evento é registrado e as automações do gatilho são acionadas; a lista se atualiza.

![Emitir evento de teste](/img/manual/crm/crm-eventos-emitir.png)

## Dicas e observações

- A emissão de evento **sempre aciona as automações** configuradas para aquele tipo — por isso é uma ótima forma de testar um fluxo sem precisar esperar um lance ou arremate real acontecer.
- Os filtros de **Pessoa** e **Leilão** usam o número (ID) do registro.
- Os eventos aparecem aqui conforme o domínio do leilão os emite; você normalmente não precisa criá-los à mão no dia a dia — a emissão manual é uma ferramenta de teste.

## Veja também

- [Automações](crm-automacoes.md)
- [Segmentos](crm-segmentos.md)
