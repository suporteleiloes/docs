---
title: PDA — Impressão de documentos
sidebar_position: 7
---

# PDA — Impressão de documentos

Esta é a tela que **gera e imprime** os documentos do PDA. Ela não é acessada por menu: você chega nela ao clicar em um botão de impressão nas outras telas do PDA (atendimento ou atendimento no leilão). A tela monta o documento pronto e abre em uma nova janela, já preparada para você mandar imprimir.

## Como acessar

Por meio dos botões de impressão de outras telas:

- Em **PDA → Atendimento** (perfil do arrematante): Recibo, Nota de arrematação, Extrato, Termo de retirada.
- Em **PDA → Atendimento no leilão**: Auto Positivo, Auto Negativo, Termo de Retirada, Termo de Alienação.

![Impressão de documentos](/img/manual/erp/pda-print-tipo-id.png)

## O que você vê nesta tela

No topo, uma barra de ações (que **não** aparece na impressão) com o título do documento e os botões. Abaixo, o documento renderizado, pronto para impressão.

Os tipos de documento possíveis são: **Recibo**, **Nota de Arrematação**, **Extrato de Arrematação**, **Termo de Retirada**, **Termo de Alienação**, **Auto Positivo**, **Auto Negativo** e **Recibo do Comitente**.

| Botão | O que faz |
|---|---|
| Imprimir | Abre a caixa de impressão do navegador para imprimir o documento. |
| Salvar nota | Aparece só para a **Nota de Arrematação**: registra a nota no sistema. |
| Enviar ao arrematante | Aparece só para a **Nota de Arrematação**: envia a nota por e-mail (registra antes, se ainda não tiver salvado). |
| Fechar | Fecha a janela do documento. |

## O que dá pra fazer aqui

### Imprimir um documento

1. Aguarde a mensagem "Gerando documento..." sumir e o documento aparecer.
2. Clique em **Imprimir**.
3. Escolha a impressora (ou "Salvar como PDF") na caixa do navegador e confirme.

### Salvar e enviar a Nota de Arrematação

1. Gere a Nota de Arrematação (a partir do perfil do arrematante).
2. Clique em **Salvar nota** para registrá-la no sistema (o botão passa a mostrar "Nota salva").
3. Clique em **Enviar ao arrematante** para mandá-la por e-mail. Se ainda não tiver salvado, o sistema salva automaticamente antes de enviar.

## Dicas e observações

- A barra de botões do topo **não sai na impressão** — só o documento é impresso.
- Se a tela mostrar "Nenhum lote disponível para gerar este documento", é porque o arrematante (ou a seleção de lotes) não tem lotes válidos para aquele tipo de documento. Volte e selecione os lotes corretos.
- Os botões **Salvar nota** e **Enviar ao arrematante** só aparecem para a **Nota de Arrematação**.

## Veja também

- [PDA — Atendimento ao arrematante](./pda-atendimento.md)
- [PDA — Atendimento no leilão](./pda-leilao.md)
- [PDA — Pagamento de lote(s)](./pda-pagamento.md)
