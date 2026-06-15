---
title: Santander Imóveis
sidebar_position: 4
---

# Santander Imóveis

Esta tela integra o ERP com o Santander Imóveis. Por aqui você importa, de uma vez, todos os imóveis disponibilizados pelo Santander para um leilão, e transmite as devoluções de bens.

## Como acessar
**Integrações** → **Santander Imóveis** (rota `/integra/santander-imoveis`).

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

### Transmitir uma devolução
1. No campo **ID do bem/lote**, informe o identificador do bem/lote a devolver.
2. Clique em **Transmitir devolução**.
3. Confirme na janela. O sistema avisa quando a transmissão é concluída.

## Dicas e observações
- A importação traz a **lista inteira** de imóveis do Santander — você não escolhe quais. Por isso, basta selecionar o leilão de destino.
- Tanto a importação quanto a devolução só são executadas após a confirmação; o sistema também avisa se você esquecer de selecionar o leilão ou de informar o ID.
- A área **Última resposta** ajuda a conferir o que foi importado e diagnosticar problemas — guarde essa informação se precisar acionar o suporte.

## Veja também
- [Resale](./integra-resale.md)
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [ImóvelWeb](./integracoes-imovelweb.md)
