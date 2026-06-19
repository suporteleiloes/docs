---
title: PDA — Atendimento no leilão
sidebar_position: 6
---

# PDA — Atendimento no leilão

Esta tela trabalha no contexto de **um leilão inteiro**: você escolhe o leilão, vê todos os seus lotes (com arrematante e valor) e imprime documentos **em lote** — Auto Positivo, Auto Negativo, Termo de Retirada e Termo de Alienação — para os lotes que você selecionar.

## Como acessar

Em **PDA → Atendimento**, tecle **F7**. (A tela também pode ser aberta diretamente em **PDA → Atendimento no leilão**.)

![Atendimento no leilão](/img/manual/erp/pda-leilao.png)

## O que você vê nesta tela

A tela tem duas etapas:

**Etapa 1 — Escolha do leilão:** um campo de busca e a lista de leilões encontrados (descrição interna/título e código).

**Etapa 2 — Lotes do leilão:** depois de escolher o leilão, aparece a lista de lotes e os botões de impressão em lote.

### Colunas de cada lote

| Coluna | O que é |
|---|---|
| Caixa de seleção | Marca o lote para imprimir em lote. |
| Lote | Número e descrição do lote. |
| Arrematante | Nome do arrematante, ou "Sem arrematante". |
| Valor | Lance atual do lote (ou o valor inicial, se não houver lance). |

## O que dá pra fazer aqui

### Escolher o leilão

1. Digite o código ou a descrição do leilão e tecle **Enter** (ou clique em **Buscar**).
2. Clique no leilão desejado na lista. Os lotes dele são carregados.
3. Para trocar, clique em **Trocar leilão** no cabeçalho do bloco.

### Imprimir documentos em lote

1. Marque a caixa de seleção dos lotes que você quer incluir.
2. Clique no botão do documento desejado:
   - **Auto Positivo** — auto de arrematação dos lotes **vendidos** (com arrematante e lance).
   - **Auto Negativo** — certidão negativa dos lotes **sem vencedor** (sem arrematante).
   - **Termo de Retirada** — comprovante de retirada do bem pelo arrematante.
   - **Termo de Alienação** — termo de alienação do bem.
3. O documento abre na [tela de impressão](./pda-print-tipo-id.md), em uma nova janela, já com todos os lotes selecionados.

Selecione os lotes coerentes com o documento: por exemplo, **Auto Positivo** faz sentido para lotes vendidos e **Auto Negativo** para lotes sem arrematante. A tela não impede selecionar lotes "errados" para um tipo, então confira a coluna **Arrematante** antes de imprimir.

## Dicas e observações

- Os botões de impressão só ficam ativos quando há ao menos um lote selecionado.
- A impressão sempre abre em uma nova janela, mantendo esta tela aberta para você continuar selecionando.
- A coluna **Valor** mostra o **lance atual** do lote; se ainda não houver lance, mostra o **valor inicial**.
- Trocar de leilão (botão **Trocar leilão**) limpa a lista de lotes; a seleção começa do zero no novo leilão.

## Erros comuns

- **Nenhum leilão encontrado** — refine o termo (código ou parte da descrição). A busca é restrita aos leilões do seu cliente.
- **Botões de impressão desabilitados** — marque ao menos um lote.
- **Documento sai "vazio" ou com lote indevido** — você pode ter selecionado um lote incompatível com o tipo (ex.: Auto Positivo em lote sem arrematante). Revise a seleção pela coluna **Arrematante**.

## Veja também

- [PDA — Pesquisa de lote](./pda-pesquisa-lote.md)
- [PDA — Impressão de documentos](./pda-print-tipo-id.md)
- [PDA — Atendimento ao arrematante](./pda-atendimento.md)
