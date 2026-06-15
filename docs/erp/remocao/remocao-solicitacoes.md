---
title: Solicitações de Remoção
sidebar_position: 3
---

# Solicitações de Remoção

A tela de **Solicitações de Remoção** é a sua ordem de serviço de guincho. Aqui você abre o pedido para recolher um bem, designa o reboquista, o motorista e o veículo (reboque), acompanha cada etapa do recolhimento e ainda consegue ver o trajeto no mapa operacional com rastreamento por GPS.

## Como acessar

**ERP** → **Pátio & Remoção** → **Solicitações** (ou abra o endereço `/remocao/solicitacoes`).

![Solicitações de Remoção](/img/manual/erp/remocao-solicitacoes.png)

## O que você vê nesta tela

No topo há um aviso explicando o fluxo e dois botões: **Mapa operacional** (abre o acompanhamento por GPS) e **Nova solicitação**. Abaixo, um campo de busca e a lista de solicitações. A lista se atualiza sozinha a cada 20 segundos.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número da solicitação. |
| Bem | Descrição do bem a ser recolhido. |
| Origem → Destino | Endereço de origem e endereço de destino do recolhimento. Aparece **?** quando o endereço não foi informado. |
| Motorista | Motorista designado para a remoção. Mostra **—** quando ninguém foi designado. |
| Etapa | Situação atual da remoção, em etiqueta colorida. |

### Etapas de uma solicitação

| Etapa | O que significa |
|---|---|
| Solicitado | Pedido criado, aguardando aceite. |
| Aceito | A remoção foi aceita pela equipe. |
| A caminho | O guincho está indo até a origem. |
| Recolhendo | O bem está sendo recolhido. |
| Em transporte | O bem está a caminho do destino. |
| Entregue | Remoção concluída. |
| Cancelado | Solicitação cancelada. |
| Bem não encontrado | O bem não foi localizado na origem. |

## O que dá pra fazer aqui

### Buscar uma solicitação

Digite parte da descrição do **bem** no campo de busca para filtrar a lista.

### Criar uma nova solicitação

1. Clique em **Nova solicitação**.
2. No campo **Bem**, busque pela placa ou descrição e selecione o bem.
3. Preencha **Origem (endereço)** e **Destino (endereço)**.
4. Se quiser, informe as coordenadas em **Origem lat** e **Origem lng** (opcionais).
5. Informe o **Custo do frete (R$)**, se houver (opcional).
6. Escolha o **Canal** de origem do pedido: Sistema, Telefone, API ou App.
7. Clique em **Criar solicitação**. A nova solicitação entra na lista na etapa **Solicitado**.

![Nova solicitação](/img/manual/erp/remocao-solicitacoes-nova.png)

### Designar a equipe

1. Na linha da solicitação, clique no ícone de **Designar**.
2. Escolha o **Reboquista**, o **Motorista** e o **Reboque (veículo)**.
3. Clique em **Salvar designação**.

![Designar equipe](/img/manual/erp/remocao-solicitacoes-designar.png)

### Avançar a etapa

Quando há um próximo passo possível, aparece um botão na linha com o nome da próxima etapa (por exemplo, **▸ A caminho**). Clique nele para avançar a remoção para a etapa seguinte. A sequência é: Solicitado → Aceito → A caminho → Recolhendo → Em transporte → Entregue.

### Executar a vistoria

Clique no ícone de **Executar vistoria** na linha da solicitação para abrir a tela de vistoria já com o bem preenchido. Se a solicitação não tiver um bem associado, o sistema avisa e não abre a vistoria.

### Cancelar a solicitação

1. Na linha de uma solicitação que ainda não foi entregue, clique no ícone vermelho de **Cancelar**.
2. Confirme na janela que aparece. A solicitação passa para a etapa **Cancelado**.

### Abrir o mapa operacional

Clique em **Mapa operacional** no topo para acompanhar, no mapa, onde estão os guinchos em tempo real.

## Dicas e observações

- A lista se atualiza automaticamente a cada 20 segundos — você não precisa recarregar a página.
- Só dá para cancelar solicitações que ainda **não** chegaram à etapa Entregue.
- O botão de avançar etapa só aparece quando existe um próximo passo válido; em etapas finais (Entregue, Cancelado, Bem não encontrado) ele some.

## Veja também

- [Mapa Operacional](./remocao-monitor.md)
- [Entradas no Pátio](./remocao-entradas.md)
- [Painel do Pátio](./remocao.md)
