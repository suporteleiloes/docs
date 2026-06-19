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

A janela abre em tamanho próprio (cerca de 860 x 900 px), separada da tela onde você estava, para você imprimir sem perder o atendimento em andamento.

## Pré-requisitos

- Você precisa ter selecionado o arrematante (em **Atendimento**) ou os lotes (em **Atendimento no leilão**) antes de clicar no botão de impressão. A tela de impressão sozinha não tem como buscar.
- Cada tipo de documento exige uma **permissão** específica no seu perfil de usuário. Se você não tiver a permissão, a tela mostra "Você não tem permissão para esta ação" e o documento não é gerado. Peça ao administrador para liberar a permissão correspondente (ver tabela em [Regras de negócio](#regras-de-negocio)).

## O que você vê nesta tela

No topo, uma barra de ações (que **não** aparece na impressão) com o título do documento e os botões. Abaixo, o documento renderizado, pronto para impressão.

Os tipos de documento são: **Recibo**, **Nota de Arrematação**, **Extrato de Arrematação**, **Termo de Retirada**, **Termo de Alienação**, **Auto Positivo**, **Auto Negativo** e **Recibo do Comitente**.

> Na prática, os botões das telas do PDA disparam apenas Recibo, Nota de Arrematação, Extrato e Termo de Retirada (em Atendimento) e Auto Positivo, Auto Negativo, Termo de Retirada e Termo de Alienação (em Atendimento no leilão). O **Recibo do Comitente** existe como tipo de documento, mas hoje não há botão no PDA que o acione — ele é gerado por outras telas do sistema.

| Botão | O que faz |
|---|---|
| Imprimir | Abre a caixa de impressão do navegador para imprimir o documento. |
| Salvar nota | Aparece só para a **Nota de Arrematação**: registra a nota no sistema e anexa o PDF ao bem. Depois de salvar, o botão muda para "Nota salva ✓" e fica desabilitado. |
| Enviar ao arrematante | Aparece só para a **Nota de Arrematação**: envia a nota por e-mail ao arrematante. Se a nota ainda não tiver sido salva, o sistema salva automaticamente antes de enviar (o e-mail leva o PDF já registrado em anexo). |
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

## Como os lotes do documento são escolhidos

Quando você imprime a partir do perfil de um arrematante (em **Atendimento**), a tela monta o documento com os lotes certos automaticamente:

- **Recibo, Nota de Arrematação, Extrato, Termo de Retirada, Auto Positivo:** usa as **vendas concluídas** do arrematante.
- **Auto Negativo e Termo de Alienação:** usa os lotes **pendentes / não vendidos**.
- **Extrato de Arrematação:** sai por lote (o sistema usa o primeiro lote encontrado).

Quando você imprime a partir de **Atendimento no leilão**, são usados exatamente os lotes que você marcou na lista antes de clicar no botão.

## Regras de negócio {#regras-de-negocio}

- **Permissões por tipo de documento.** Cada documento exige uma permissão própria. Sem ela, a geração é bloqueada com erro de permissão (403):

  | Documento | Permissão necessária |
  |---|---|
  | Recibo | Emitir recibo de pagamento de lote |
  | Nota de Arrematação (gerar / salvar / enviar) | Emitir nota de lote |
  | Extrato de Arrematação | Emitir extrato de arrematação |
  | Termo de Retirada | Emitir termo de retirada de lote |
  | Termo de Alienação | Relatório — termo de alienação |
  | Auto Positivo | Relatório — auto positivo |
  | Auto Negativo (Certidão Negativa) | Relatório — certidão negativa |
  | Recibo do Comitente | Emitir recibo de pagamento de lote |

- **Salvar a nota antes de enviar.** O e-mail ao arrematante anexa o PDF que foi registrado no momento de salvar; por isso, enviar sem ter salvado primeiro faz o sistema salvar automaticamente antes.
- **A nota fica anexada ao bem.** Ao salvar, a Nota de Arrematação é gravada como arquivo do bem do lote, ficando disponível no cadastro do bem.

## Erros comuns

- **"Nenhum lote disponível para gerar este documento":** o arrematante não tem lotes válidos para aquele tipo de documento (ex.: pedir Auto Negativo de quem só tem lotes vendidos, ou Recibo de quem não tem arrematação). Volte e confira a seleção.
- **"Você não tem permissão para esta ação":** seu perfil não tem a permissão da tabela acima. Peça liberação ao administrador.
- **"Backend retornou template vazio":** o servidor não conseguiu montar o documento. Verifique se o lote tem os dados necessários (arremate, valores) e tente de novo.

## Dicas e observações

- A barra de botões do topo **não sai na impressão** — só o documento é impresso.
- Para gerar um PDF, escolha "Salvar como PDF" como impressora na caixa do navegador.
- Os botões **Salvar nota** e **Enviar ao arrematante** só aparecem para a **Nota de Arrematação**.

## Veja também

- [PDA — Atendimento ao arrematante](./pda-atendimento.md)
- [PDA — Atendimento no leilão](./pda-leilao.md)
- [PDA — Pagamento de lote(s)](./pda-pagamento.md)
