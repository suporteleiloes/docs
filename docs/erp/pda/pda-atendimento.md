---
title: PDA — Atendimento ao arrematante
sidebar_position: 3
---

# PDA — Atendimento ao arrematante

Esta é a tela de **balcão** do PDA. É aqui que você atende o arrematante presencialmente: localiza a pessoa pelo CPF/CNPJ ou pelo nome, vê o resumo financeiro dela (saldo, total arrematado, pago e pendente), as pendências de pagamento, os arremates e, a partir daí, registra pagamentos, imprime documentos e faz ações por lote (transferir comprador, cancelar venda).

A tela funciona como um fluxo de "telas dentro da tela": você navega entre **Início**, **Iniciar atendimento**, **Pesquisar** e **Perfil** sem recarregar a página.

## Como acessar

**PDA → Atendimento**. Você também chega aqui ao voltar das telas de pagamento, pesquisa de lote e atendimento no leilão.

![Atendimento ao arrematante](/img/manual/erp/pda-atendimento.png)

## O que você vê nesta tela

A barra superior tem a seta de **voltar** (à esquerda), o título "PDA — Atendimento" e, à direita, um atalho para a tela de inventário.

A área central muda conforme a etapa:

| Etapa | O que mostra |
|---|---|
| Início | Três cartões grandes de ação: **Iniciar atendimento**, **Pesquisar arrematante** e **Pesquisar lote**. |
| Iniciar atendimento | Campo para digitar o CPF/CNPJ. |
| Pesquisar arrematante | Campo de busca por nome, apelido, e-mail ou documento, com a lista de resultados. |
| Perfil | Os dados completos do arrematante (veja abaixo). |

### O que aparece no Perfil do arrematante

| Bloco | O que é |
|---|---|
| Cartão de resumo | Número do arrematante, **status** (Pendente, Aprovado, Não aprovado, Bloqueado, Em análise), score (quando houver), nome, tipo (Física/Jurídica), documento, apelido, telefones e e-mails. |
| KPIs | Quatro indicadores: **Saldo**, **Arrematado**, **Pago** e **Pendente**. |
| Pendências de pagamento | Lista de lotes em aberto, com lote, leilão e valor devido. Cada linha tem as ações **Transferir comprador** e **Cancelar venda**. |
| Sócios / Representantes | Aparece só para Pessoa Jurídica; lista os representantes cadastrados. |
| Últimos arremates | Os arremates mais recentes do arrematante. |
| Ações | Botões de pagamento e impressão (veja abaixo). |

## O que dá pra fazer aqui

### Iniciar atendimento por CPF/CNPJ

1. Na tela Início, clique em **Iniciar atendimento** (ou tecle **F3**).
2. Digite o CPF ou CNPJ e tecle **Enter** (ou clique em **Iniciar**).
3. Se o arrematante existir, o sistema abre direto o **Perfil**. Se não existir, aparece "Arrematante não encontrado para o documento informado".

### Pesquisar um arrematante

1. Na tela Início, clique em **Pesquisar arrematante** (ou tecle **F4**).
2. Digite ao menos 2 letras do nome, apelido, e-mail ou documento e tecle **Enter**.
3. Clique no arrematante desejado na lista para abrir o **Perfil**.

### Registrar pagamento

No Perfil, clique em **Registrar pagamento** (ou tecle **F3**). Você vai para a [tela de pagamento de lotes](./pda-pagamento.md) já com este arrematante carregado.

### Imprimir documentos

No Perfil, use os botões da área de ações para gerar cada documento em uma nova janela:

- **Imprimir recibo**
- **Nota de arrematação**
- **Extrato**
- **Termo de retirada**

Cada um abre a [tela de impressão](./pda-print-tipo-id.md).

### Abrir o cadastro completo

Clique em **Abrir cadastro completo** (ou tecle **F4** no Perfil) para abrir a ficha completa do arrematante no ERP, em uma nova aba — sem sair do PDA.

### Transferir comprador de um lote

1. Na lista de **Pendências**, clique em **Transferir comprador** na linha do lote.
2. No modal, digite o **CPF/CNPJ do novo comprador** e clique em **Buscar**.
3. Confira os dados do novo comprador que aparecem no cartão.
4. Clique em **Confirmar transferência**. A pendência é atualizada.

![Transferir comprador](/img/manual/erp/pda-atendimento-transferir.png)

### Cancelar a venda de um lote

1. Na lista de **Pendências**, clique em **Cancelar venda** na linha do lote.
2. No modal, escolha o **Motivo do cancelamento** (e, se houver, a classificação/subtipo).
3. Opcionalmente, detalhe o motivo no campo de texto.
4. Clique em **Confirmar cancelamento**. O status do lote muda para cancelado e a lista é atualizada.

![Cancelar venda](/img/manual/erp/pda-atendimento-cancelar.png)

## Dicas e observações

- **Atalhos de teclado** (pensados para o balcão): **F2** foca a busca; **F3** inicia atendimento (ou registra pagamento no Perfil); **F4** pesquisa arrematante (ou abre o cadastro completo no Perfil); **F6** pesquisa lote; **F7** vai para o atendimento no leilão; **Esc** volta uma etapa.
- O bloco **Sócios / Representantes** só aparece para arrematantes Pessoa Jurídica.
- As ações **Transferir comprador** e **Cancelar venda** mudam o status do lote — use com atenção.
- Abrir o cadastro completo não tira você do atendimento: ele abre em outra aba.

## Veja também

- [PDA — Pagamento de lote(s)](./pda-pagamento.md)
- [PDA — Pesquisa de lote](./pda-pesquisa-lote.md)
- [PDA — Atendimento no leilão](./pda-leilao.md)
- [PDA — Impressão de documentos](./pda-print-tipo-id.md)
