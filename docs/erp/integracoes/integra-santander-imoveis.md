---
title: Santander Imóveis
sidebar_position: 4
---

# Santander Imóveis

Esta tela integra o ERP com o Santander Imóveis. Por aqui você importa, de uma vez, todos os imóveis disponibilizados pelo Santander para um leilão, e transmite as devoluções de bens.

## Pré-requisitos

- A integração com a API do Santander precisa estar **configurada** no ERP (acione o suporte).
- Deve existir um **comitente Santander cadastrado** com a observação `SANTANDER_CODE=1`. É a ele que os imóveis importados são vinculados. Se esse comitente não existir, a importação lista o item como erro e o pula.

![Santander Imóveis](/img/manual/erp/integra-santander-imoveis.png)

## O que você vê nesta tela

Diferente das integrações de Grupo Porto e Resale, aqui **não há consulta nem seleção item a item**: o Santander entrega a lista completa de imóveis disponíveis, e o sistema importa todos eles. A tela tem três áreas:

| Área | O que é |
|---|---|
| Importar imóveis Santander para um leilão | Escolha o **Leilão** de destino para importar todos os imóveis disponíveis |
| Transmitir devolução | Campo **ID do bem/lote** para enviar uma devolução |
| Última resposta | Aparece após uma importação, mostrando o retorno detalhado da operação |

## O que dá pra fazer aqui

### Importar imóveis do Santander para um leilão
1. No campo **Leilão**, selecione o leilão de destino.
2. Clique em **Importar imóveis para o leilão**.
3. Confirme na janela. **Todos** os imóveis disponíveis na API do Santander serão importados/atualizados e relacionados ao leilão escolhido.
4. Ao final, o sistema avisa **Relacionado com sucesso** (ou **Concluído com erros**, listando o que falhou). O retorno completo aparece em **Última resposta**.

> **O que é trazido para cada imóvel:** título, descrição (com finalidade, áreas, número de cômodos etc.), matrícula, RGI/cartório, inscrição municipal, endereço, valor de avaliação e valor de venda (usado como valor inicial e mínimo), situação de ocupação, fotos e documentos, e localização (cidade/UF/CEP/coordenadas). Imóveis já existentes (casados pelo código do imóvel) são **atualizados**, não duplicados.

### Transmitir uma devolução
1. No campo **ID do bem/lote**, informe o **ID do lote** a devolver (é por lote que a transmissão é feita).
2. Clique em **Transmitir devolução**.
3. Confirme na janela. O sistema envia ao Santander a atualização daquele imóvel (data do próximo leilão, URL do lote no site, número do lote e valor inicial) e avisa quando a transmissão é concluída. A ação fica registrada no histórico/log do lote.

## Dicas e observações
- A importação traz a **lista inteira** de imóveis do Santander — você não escolhe quais. Por isso, basta selecionar o leilão de destino.
- Tanto a importação quanto a devolução só são executadas após a confirmação; o sistema também avisa se você esquecer de selecionar o leilão ou de informar o ID.
- A área **Última resposta** ajuda a conferir o que foi importado e diagnosticar problemas — guarde essa informação se precisar acionar o suporte.

## Veja também
- [Resale](./integra-resale.md)
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [ImóvelWeb](./integracoes-imovelweb.md)
