---
title: PDA — Pagamento de lote(s)
sidebar_position: 4
---

# PDA — Pagamento de lote(s)

Aqui você registra o pagamento dos lotes em aberto de um arrematante. Selecione os lotes, preencha os dados do pagamento (método, banco, valor, pagante) e confirme. O valor é distribuído automaticamente entre os lotes selecionados, e você pode anexar o comprovante e enviar o recibo por e-mail.

## Pré-requisitos

- O arrematante precisa ter **lotes em aberto** (vendas pendentes). Sem pendências, a tela mostra "Sem lotes em aberto para este arrematante" e o formulário de pagamento não aparece.
- É preciso haver **métodos de pagamento** e **contas bancárias** cadastrados no ERP — eles alimentam os selects obrigatórios.

## Como acessar

Em **PDA → Atendimento**, abra o perfil de um arrematante e clique em **Registrar pagamento** (ou tecle **F3**). Você também pode chegar e buscar o arrematante direto nesta tela.

![Pagamento de lotes](/img/manual/erp/pda-pagamento.png)

## O que você vê nesta tela

| Bloco | O que é |
|---|---|
| Arrematante | Campo de busca do arrematante (por nome, documento ou apelido). Já vem preenchido quando você veio do atendimento. |
| Lotes em aberto | Lista de pendências do arrematante, com caixa de seleção por lote, total em aberto e total selecionado. |
| Registrar pagamento | Formulário com os dados do pagamento. |

### Campos do formulário de pagamento

| Campo | O que é |
|---|---|
| Quem está pagando? | **Próprio** (o próprio arrematante) ou **Terceiros**. |
| CPF/CNPJ do pagante | Documento de quem está pagando. Vem pré-preenchido com o do arrematante quando o pagante é "Próprio". |
| Nome do pagante | Nome de quem está pagando. |
| Data do pagamento | No formato dd/mm/aaaa. Já vem com a data de hoje. |
| Método de pagamento | Obrigatório. Lista os métodos cadastrados (dinheiro, PIX, cartão etc.). |
| Banco / conta | Obrigatório. A conta bancária que recebe o valor. |
| Valor pago | Em reais. É sugerido automaticamente como o total dos lotes selecionados, mas você pode editar para um pagamento parcial. |
| Observação | Texto livre. |
| Enviar recibo ao arrematante por e-mail | Marcado por padrão. |
| Comprovante (opcional) | Anexe um arquivo do comprovante. |

## O que dá pra fazer aqui

### Registrar um pagamento

1. Se o arrematante ainda não estiver carregado, busque-o no campo **Arrematante** (digite ao menos 2 letras e selecione).
2. Na lista **Lotes em aberto**, marque os lotes que serão pagos. Use **Selecionar todos** para marcar todos de uma vez.
3. Confira o **Total selecionado** no rodapé da lista.
4. No formulário, escolha **Quem está pagando?** e confira/ajuste **CPF/CNPJ** e **Nome do pagante**.
5. Confirme a **Data do pagamento**.
6. Escolha o **Método de pagamento** e o **Banco / conta** (ambos obrigatórios).
7. Confira o **Valor pago** — ele já vem com o total selecionado; ajuste se for pagamento parcial.
8. (Opcional) escreva uma **Observação**, anexe o **Comprovante** e marque/desmarque o envio do recibo.
9. Clique em **Confirmar e registrar pagamento**.

O sistema registra o pagamento, anexa o comprovante (se houver) e atualiza a lista de lotes em aberto.

## Dicas e observações

- O valor é **distribuído automaticamente** entre os lotes selecionados; se você pagar mais do que o total selecionado, o **excedente vira saldo em conta** do arrematante.
- **Método** e **banco/conta** são obrigatórios — o sistema avisa se faltar algum.
- A data precisa estar no formato dd/mm/aaaa.
- O botão de confirmar só fica ativo com pelo menos um lote selecionado.
- O comprovante é opcional; se o envio dele falhar, o pagamento mesmo assim é registrado.
- O **Valor pago** segue o total selecionado **enquanto você não editar manualmente**. Depois de digitar um valor à mão, ele para de acompanhar a seleção — limpe o campo se quiser voltar ao automático.
- Ao pagar **um único lote**, o valor abate aquele lote; ao pagar **vários**, o valor é rateado entre eles. Em ambos os casos, o que sobra vira saldo em conta do arrematante.

## Erros comuns

- **"Selecione ao menos um lote"** — marque pelo menos um lote em aberto antes de confirmar.
- **"Informe o método de pagamento" / "Informe o banco/conta"** — os dois campos são obrigatórios.
- **"Informe um valor válido"** — o valor pago precisa ser maior que zero.
- **"Informe uma data válida (dd/mm/aaaa)"** — corrija o formato da data do pagamento.
- **Recibo não chega ao arrematante** — o envio depende de o arrematante ter e-mail cadastrado; confira o cadastro se o recibo não chegar.

## Veja também

- [PDA — Atendimento ao arrematante](./pda-atendimento.md)
- [PDA — Impressão de documentos](./pda-print-tipo-id.md)
