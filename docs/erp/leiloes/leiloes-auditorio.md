---
title: Auditório Unificado
sidebar_position: 53
---

# Auditório Unificado

O Auditório Unificado é a tela de operação ao vivo do leiloeiro. Em tela cheia (fundo preto), ele mostra um card para cada lote em pregão, com todos os controles para conduzir a venda: abrir tempo, dar lances, registrar "Dou-lhe uma/duas", vender ou marcar sem licitante. É a partir daqui que o leiloeiro toca o leilão em tempo real.

## Pré-requisitos

- Existir pelo menos um leilão com lotes marcados para a **data** que você vai abrir (o auditório busca os lotes pela data, não por um leilão específico).
- Para operar (dar lances, vender), o operador precisa de permissão de leiloeiro/pregão.

## Como acessar

**Leilões** → **Auditório** (rota `/leiloes/auditorio`).

![Auditório Unificado](/img/manual/erp/leiloes-auditorio.png)

## O que você vê nesta tela

A tela ocupa o monitor inteiro. No topo fica a barra de controle; o restante é um grid com os cards dos lotes do dia. Os dados são atualizados automaticamente a cada poucos segundos para refletir os lances que chegam.

### Barra superior

| Elemento | O que é |
|---|---|
| Data dos leilões | Campo de data (dd/mm/aaaa). Digite e clique em **Buscar** para carregar os lotes daquela data. |
| Habilitar controles | Quando ligado, exibe todos os botões de operação em cada card. Desligado, mostra os cards apenas para visualização (modo telão). |
| Ocultar cancelados | Esconde os cards de lotes cancelados/retirados. |
| Ocultar encerrados | Esconde os lotes que já saíram de pregão. |
| Quantidade de leilões | Indica quantos leilões estão sendo exibidos. |
| Sair | Fecha o auditório e volta para a lista de leilões (também pelo **Esc**). |

### Card de cada lote

Cada card mostra a imagem do bem, o número e título do lote, o valor inicial, o lance atual (com indicação de robô quando aplicável), o autor do lance, a forma de pagamento, o status do lote e o cronômetro do pregão. A cor da borda e do timer muda conforme o estado do lote (com lance, em fechamento, vendido, etc.).

## O que dá pra fazer aqui

### Carregar os lotes de uma data

1. No campo **Data dos leilões**, digite a data desejada.
2. Clique em **Buscar** (ou tecle Enter). Os cards dos lotes daquela data aparecem no grid.

### Conduzir um lote (com controles habilitados)

Em cada card, os botões do leiloeiro:

- **Status do leilão** (botão com seta): abre a lista de status do leilão (Rascunho, Em breve, Em loteamento, Aberto para lances, Em leilão, Cancelado, Adiado, Suspenso, Encerrado). Escolha o novo status e confirme.
- **▶ Tempo**: coloca o lote em pregão (abre o cronômetro).
- **+R$ / valor inicial**: registra um lance somando o incremento ao lance atual (ou aplica o valor inicial, se ainda não houver lance). Para cobrir um lance que **veio online** (não da plateia), pressione duas vezes em sequência — é uma trava para não cobrir um lance de internet por engano.
- **Lance Manual**: abre um campo para digitar um valor de lance livre (em reais).
- **Dou-lhe Uma** / **Dou-lhe Duas**: registra os avisos de fechamento da venda.
- **⚖ Vender**: marca o lote como vendido.
- **Sem Licitante**: marca o lote como sem licitantes.

### Mais opções

No rodapé do card, em **Mais opções**:

- **Deletar Lance**: remove o último lance do lote (pede confirmação).
- **Voltar status para Aberto**: devolve o lote ao status "Aberto para lances".
- **Editar leilão**: abre o cadastro do leilão correspondente.

## Dicas e observações

- O grid se atualiza sozinho a cada poucos segundos para mostrar lances em tempo real — não é preciso recarregar a página.
- Desligue **Habilitar controles** para usar a tela como painel de exibição (sem botões), por exemplo em um telão.
- O cronômetro e a borda do card mudam de cor quando o tempo está acabando, ajudando o leiloeiro a fechar o lote na hora certa.
- No card, o ícone de robô ao lado do lance indica que o lance atual veio de um **lance automático** (robô) configurado por um arrematante.
- A área **Status do leilão** muda o status do **leilão inteiro** (não do lote): mudar para Cancelado, Adiado, Suspenso ou Encerrado afeta todos os lotes daquele leilão — confirme com atenção.
- **Voltar status para Aberto** (em Mais opções) é a forma de desfazer um "Vendido"/"Sem licitante" aplicado por engano, devolvendo o lote a "Aberto para lances".
- Tecle **Esc** a qualquer momento para sair do auditório.

## Veja também

- [Realização do Leilão](./realizacao.md)
- [Transmissão ao Vivo](./transmissao.md)
- [Fila de Vendas](./fila-vendas-leilao.md)
