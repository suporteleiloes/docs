---
title: Realização do Leilão
sidebar_position: 40
---

# Realização do Leilão

Esta é a central de operação durante o pregão. A partir dela você abre as ferramentas de condução do leilão (controlador, painel do leiloeiro, telão, transmissão), acompanha quem está online, vê os últimos lances em tempo real e controla o status de cada lote — tudo em uma só tela, atualizada automaticamente.

## Como acessar

**Leilões** → abra um leilão → **Realização**.

(A tela é específica do leilão aberto; a URL termina em `/leiloes/{id}/realizacao`.)

![Realização do Leilão](/img/manual/erp/realizacao.png)

## O que você vê nesta tela

A tela é dividida em blocos, de cima para baixo:

- **Atalhos** (botões grandes no topo): abrem as ferramentas de condução do pregão.
- **Usuários online**: contador e fotos de quem está conectado ao leilão agora.
- **Requer atenção**: lotes em pregão parados há mais de 5 minutos sem atualização.
- **Últimos lances**: os 5 lances mais recentes, em tempo real.
- **Indicadores (cards)**: total de lotes, em leilão, arrematados e aguardando.
- **Tabela de lotes**: lista operacional com valores e ação de abrir/homologar.
- **Log Operacional**: os últimos eventos registrados no leilão.

### Atalhos do topo

| Atalho | O que abre |
|---|---|
| Controlador do Leilão | Controle geral do pregão |
| Painel do Leiloeiro | Tela em tela cheia do leiloeiro |
| Monitor de Comitentes | Acompanhamento em tempo real para comitentes |
| Lances Automáticos | Robôs de lance programados |
| Tela para TV/Telão | Apresentação para TV/telão |
| Transmissão por Vídeo | Streaming ao vivo e acervo de gravações (mostra um selo **AO VIVO** quando a transmissão está ativa) |
| Monitoramento | Logs e atividade do leilão |

### Cards de indicadores

| Card | O que conta |
|---|---|
| Total de lotes | Todos os lotes do leilão |
| Em leilão | Lotes abertos para lances, em pregão ou homologando |
| Arrematados | Lotes vendidos |
| Aguardando | Lotes que ainda não entraram em pregão (rascunho ou aberto para lances) |

### Colunas da tabela de lotes

| Coluna | O que é |
|---|---|
| Lote | Número do lote |
| Bem | Descrição do bem |
| Avaliação | Valor de avaliação |
| Lance mín. | Lance mínimo (valor inicial) |
| Lance atual | Maior lance recebido até o momento |
| Arrematante | Quem está com o lote no momento |
| Status | Situação do lote |
| (ação) | Botão **Abrir** ou **Homologar**, conforme o status |

## O que dá pra fazer aqui

### Abrir um lote para pregão

1. Localize o lote na tabela com status **Aguardando** ou **Aberto**.
2. Clique em **Abrir** na última coluna.
3. O lote passa para **Em pregão** e a lista é atualizada automaticamente.

> Esta tela é um atalho operacional: ela apenas coloca o lote em pregão. A condução fina do lance a lance (incrementos, dou-lhe uma/duas, vendido/condicional) é feita no [Controlador](./controlador.md).

### Homologar um lote

1. Localize um lote com status **Em pregão**.
2. Clique em **Homologar**.
3. O lote passa para **Homologando** e some das ações de pregão.

### Acompanhar os últimos lances (com áudio)

1. No bloco **Últimos lances**, os lances aparecem sozinhos conforme chegam.
2. Para ouvir cada novo lance em voz alta, ligue a chave **🔊 Falar lances**.
3. A cada lance novo, o sistema fala o número do lote e o valor.

### Ver quem está online

- O bloco no topo mostra a quantidade de usuários conectados e as fotos dos primeiros.
- Clique em **Ver auditório →** para abrir o auditório unificado com todos os participantes.

### Ver o histórico completo

- No bloco **Log Operacional**, clique em **Ver histórico completo →** para abrir o histórico do leilão.

## Pré-requisitos

- O leilão precisa ter **lotes cadastrados** (veja [Preparação](./preparacao.md) e [Lotes do leilão](./lotes.md)).
- Para o público acompanhar o pregão, o **auditório virtual** precisa estar aberto — isso é feito no [Controlador](./controlador.md) (botão "Leilão Fechado" na barra superior).

## Regras de negócio

- **Requer atenção** lista apenas lotes em **Em pregão** parados há mais de 5 minutos (300 segundos) sem atualização — é um lembrete para não esquecer um lote aberto.
- O botão **Abrir** só aparece para lotes em **Aguardando** ou **Aberto para lances**; o botão **Homologar** só aparece para lotes **Em pregão**. Lotes já vendidos, sem licitantes ou em outros status não exibem ação.
- **Falar lances** usa a síntese de voz do navegador (idioma pt-BR). É uma preferência local, válida só enquanto a tela estiver aberta — ao recarregar, volta desligada.

## Dicas e observações

- A tela se atualiza sozinha: lotes a cada 10 segundos, lances a cada 5 segundos, online e log a cada 30 segundos. Não é preciso recarregar a página.
- Um lote só mostra o botão **Homologar** quando está **Em pregão**; só mostra **Abrir** quando está aguardando ou aberto.
- O bloco **Requer atenção** aponta lotes que ficaram parados em pregão por mais de 5 minutos — útil para não esquecer um lote aberto.
- A opção **Falar lances** usa a síntese de voz do navegador; pode não funcionar em navegadores muito antigos.

## Veja também

- [Supervisão do leilão](./supervisao.md)
- [Fechamento](./fechamento.md)
