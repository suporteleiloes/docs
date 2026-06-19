---
title: Detran PB
sidebar_position: 5
---

# Detran PB

Esta tela permite comunicar ao Detran da Paraíba a venda de veículos arrematados no leilão. Use-a quando precisar registrar oficialmente, no sistema do Detran PB, que um lote de veículo foi vendido.

## Pré-requisitos

- A integração precisa estar **configurada** no ERP: cliente (client_id/client_secret), usuário e senha da API do Detran PB. Sem isso o status aparece **Indisponível** e a comunicação falha. Acione o suporte para configurar.
- O **lote já deve estar vendido** (arrematado). Comunicar um lote não vendido retorna o erro "Lote ainda não foi vendido, não foi possível comunicar a venda".

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
2. No bloco **Comunicação de venda**, informe o **ID do lote vendido** (o identificador do lote no ERP, não a placa nem o número do bem). Você também pode pressionar Enter para confirmar.
3. Clique em **Comunicar venda**.
4. Confirme na janela que aparece. O sistema avisa **Comunicação enviada** quando a venda é registrada no Detran da Paraíba (ou informa a falha, se houver).

> **O que acontece depois:** ao comunicar, o Detran PB devolve dados do registro (incluindo, quando aplicável, um link de boleto), que ficam guardados no próprio bem. Esse boleto pode ser disponibilizado depois ao arrematante por um link público de download (PDF). Se a comunicação ainda não foi feita, o boleto não fica disponível.

## Erros comuns

- **Campo de lote vazio:** o botão **Comunicar venda** fica desabilitado. Informe o ID do lote.
- **"Lote ainda não foi vendido":** você informou um lote que ainda não foi arrematado. Comunique apenas lotes vendidos.
- **Status Indisponível:** falta configuração da integração — a comunicação não vai funcionar. Acione o suporte.

## Dicas e observações
- Cada comunicação é feita por **lote vendido**. No sistema antigo, essa ação era disparada em conjunto, para todos os lotes de um leilão encerrado; aqui você informa o lote individualmente.
- Esta integração é específica do **Detran da Paraíba**; não se aplica a veículos vendidos para outros estados.

## Veja também
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [Mapfre — Boletos](./integra-mapfre.md)
