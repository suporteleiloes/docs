---
title: Mapa Operacional
sidebar_position: 4
---

# Mapa Operacional

O **Mapa Operacional** mostra, num mapa ao vivo, onde estão as remoções em andamento. Cada guincho que está enviando localização aparece como um ponto colorido, e você pode clicar para ver o trajeto percorrido. É a tela ideal para acompanhar a operação de recolhimento em tempo real.

## Como acessar

**ERP** → **Pátio & Remoção** → **Monitor** (ou abra o endereço `/remocao/monitor`). Também dá para chegar aqui pelo botão **Mapa operacional** na tela de [Solicitações de Remoção](./remocao-solicitacoes.md).

![Mapa Operacional](/img/manual/erp/remocao-monitor.png)

## O que você vê nesta tela

A tela tem duas áreas: uma lista lateral à esquerda e o mapa à direita. Os dados se atualizam automaticamente a cada 15 segundos.

### Lista lateral

| Seção | O que mostra |
|---|---|
| Remoções ativas | Remoções que estão enviando localização por GPS. Cada item mostra o número (#), a etapa, a descrição do bem e o motorista. Clique para ver o trajeto no mapa. |
| Sem GPS | Remoções em andamento que **não** estão enviando localização. Aparecem apenas para sua referência (não dá para clicar para ver trajeto). |

Quando não há nenhuma remoção ativa, a lista exibe **Nenhuma remoção ativa**.

### Mapa

No mapa, cada remoção ativa é um ponto colorido, e a cor indica a etapa:

| Cor do ponto | Etapa |
|---|---|
| Azul | A caminho |
| Laranja | Recolhendo |
| Verde | Em transporte |
| Cinza | Outras etapas |

Clique num ponto para abrir um balão com o número, a descrição do bem, a etapa e o motorista, e para desenhar no mapa o trajeto já percorrido.

## O que dá pra fazer aqui

### Ver o trajeto de uma remoção

Clique num item da lista **Remoções ativas** ou num ponto do mapa. O sistema desenha o trajeto percorrido (linha tracejada escura) e ajusta o zoom para enquadrá-lo.

### Voltar para as solicitações

Clique em **Solicitações** no topo da tela para voltar à lista de ordens de serviço.

## Dicas e observações

- O mapa se atualiza sozinho a cada 15 segundos; mantenha a tela aberta para acompanhar a operação em tempo real.
- Só aparecem no mapa as remoções que estão **enviando localização**. As que não enviam ficam na seção **Sem GPS**, apenas como referência.
- Se uma remoção sumir do mapa, provavelmente ela mudou para uma etapa final (entregue/cancelada) ou parou de enviar localização.

## Veja também

- [Solicitações de Remoção](./remocao-solicitacoes.md)
- [Painel do Pátio](./remocao.md)
