---
title: Marketplace API
sidebar_position: 52
---

# Marketplace API

Esta tela reúne as integrações de um leilão com marketplaces externos (Imóvel Web, Santander Imóveis, Resale, Detran/PB) e com os sites do leiloeiro. A partir daqui você publica, remove ou atualiza os lotes nessas plataformas e dispara a geração automática de títulos e descrições dos bens.

## Como acessar

**Leilões** → abra um leilão → aba/menu **Marketplace API**.

![Marketplace API](/img/manual/erp/marketplace-api.png)

## O que você vê nesta tela

No topo, um cabeçalho com o botão **Sincronizar todos**. Logo abaixo, três indicadores: o número do leilão, o status atual e se a comunicação com o **Detran PB** está habilitada (só fica habilitada quando o leilão está encerrado). Mais abaixo, a lista de integrações disponíveis, cada uma com um botão **Executar**.

| Indicador | O que é |
|---|---|
| Leilão | Número (ID) do leilão atual. |
| Status | Situação do leilão (rascunho, em leilão, encerrado, etc.). |
| Detran PB | Mostra **Habilitado** quando o leilão está encerrado, ou **Aguardando encerramento** caso contrário. |

### Integrações disponíveis

| Integração | O que faz |
|---|---|
| Imóvel Web — Sincronizar lotes | Cria/atualiza os anúncios dos bens do leilão na Imóvel Web. |
| Imóvel Web — Remover lotes | Remove os anúncios deste leilão da Imóvel Web. |
| Santander Imóveis | Transmite a devolução dos lotes ao Santander Imóveis. |
| Resale — Atualizar URL | Atualiza a URL dos lotes na plataforma Resale. |
| Resale — Sincronizar lotes | Em desenvolvimento (aparece como **Em breve**). |
| Detran Paraíba — Comunicar vendas | Comunica as vendas ao Detran/PB. Só funciona com o leilão encerrado e apenas para lotes vendidos. |
| Gerar títulos e descrições automáticos | Aplica o template configurado em cada tipo de bem para preencher título e descrição. |

## O que dá pra fazer aqui

### Sincronizar com todos os sites

1. Clique em **Sincronizar todos** no topo da tela.
2. Confirme. O leilão e todos os lotes são republicados nos sites e marketplaces vinculados.

### Executar uma integração específica

1. Localize a integração desejada na lista.
2. Clique em **Executar**.
3. Confirme a operação na janela. O sistema processa lote a lote e mostra uma barra de progresso com o andamento (ex.: "lote 3 de 20").
4. Ao terminar, aparece uma mensagem com o total de itens processados.

### Comunicar vendas ao Detran/PB

1. Verifique que o leilão está **encerrado** (o indicador Detran PB deve mostrar **Habilitado**).
2. Clique em **Executar** na linha **Detran Paraíba — Comunicar vendas** e confirme.
3. O sistema seleciona somente os lotes vendidos e comunica cada venda. Se não houver lotes vendidos, ele avisa.

### Gerar títulos e descrições automaticamente

1. Antes de tudo, confira no cadastro dos tipos de bem que as definições de montagem de título e descrição estão corretas.
2. Clique em **Executar** na linha **Gerar títulos e descrições automáticos** e confirme.
3. O sistema aplica o template e atualiza os textos de todos os bens do leilão.

## Dicas e observações

- Durante qualquer integração aparece uma janela de progresso; aguarde o término antes de iniciar outra ação.
- A integração **Detran Paraíba** fica bloqueada enquanto o leilão não estiver encerrado.
- A opção **Resale — Sincronizar lotes** ainda está em desenvolvimento e aparece como **Em breve**.
- A geração automática de títulos/descrições depende dos templates configurados em cada tipo de bem; se eles estiverem errados, os textos sairão errados.

## Veja também

- [Lotes do leilão](./lotes.md)
- [Realização do Leilão](./realizacao.md)
