---
title: Detran PB
sidebar_position: 5
---

# Detran PB

Esta tela permite comunicar ao Detran da Paraíba a venda de veículos arrematados no leilão. Use-a quando precisar registrar oficialmente, no sistema do Detran PB, que um lote de veículo foi vendido.

## Como acessar
**Integrações** → **Detran PB** (rota `/integra/detranpb`).

![Detran PB](/img/manual/erp/integra-detranpb.png)

## O que você vê nesta tela

A tela tem dois blocos:

| Bloco | O que é |
|---|---|
| Integração Detran PB | Painel de **Status**, mostrando se a integração está **Disponível** (verde) ou **Indisponível** (vermelho) |
| Comunicação de venda | Campo **ID do lote vendido** e botão para enviar a comunicação ao Detran PB |

## O que dá pra fazer aqui

### Comunicar a venda de um veículo ao Detran PB
1. Confira no bloco **Integração Detran PB** se o status está **Disponível**.
2. No bloco **Comunicação de venda**, informe o **ID do lote vendido** (você também pode pressionar Enter para confirmar).
3. Clique em **Comunicar venda**.
4. Confirme na janela que aparece. O sistema avisa **Comunicação enviada** quando a venda é registrada no Detran da Paraíba (ou informa a falha, se houver).

## Dicas e observações
- O botão **Comunicar venda** fica desabilitado enquanto o campo de lote estiver vazio.
- Cada comunicação é feita por **lote vendido**. No sistema antigo, essa ação era disparada em conjunto, para todos os lotes de um leilão encerrado; aqui você informa o lote individualmente.
- Se o status estiver **Indisponível**, a comunicação provavelmente não vai funcionar — verifique a configuração da integração ou acione o suporte.

## Veja também
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [Mapfre — Boletos](./integra-mapfre.md)
