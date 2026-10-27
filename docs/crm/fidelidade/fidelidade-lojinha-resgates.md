---
title: Lojinha e resgates
sidebar_position: 4
---

# Lojinha e resgates

A **Lojinha** é o catálogo de recompensas que o cliente troca pelos pontos no site. Em **Resgates** você acompanha cada troca até a entrega.

## Como acessar

**CRM** → **Fidelidade** → abas **Lojinha** e **Resgates**.

## Lojinha (recompensas)

![Lojinha de recompensas](/img/manual/crm/fidelidade/fidelidade-lojinha.png)

Cada cartão é uma recompensa, com tipo, pontos necessários, valor de referência, estoque e nível mínimo. Recompensa **inativa** ou **sem estoque** aparece como indisponível no site. Filtre por **Todas / Só ativas / Só inativas**.

### Cadastrar ou editar uma recompensa

1. Clique em **+ Nova recompensa** (ou **Editar** no cartão).
2. Preencha os campos abaixo e clique em **Salvar**.

![Formulário da recompensa](/img/manual/crm/fidelidade/fidelidade-recompensa-form.png)

| Campo | O que é |
|---|---|
| **Nome** | Obrigatório. Ex.: "R$ 25 de desconto na taxa do leiloeiro". |
| **Tipo** | Desconto na taxa, Produto, Frete ou Outro. |
| **Pontos necessários** | Obrigatório, a partir de 1. |
| **Valor de referência (R$)** | Quanto a recompensa vale em dinheiro (informativo). |
| **Nível mínimo** | Só participantes desse nível ou acima podem resgatar. |
| **Descrição** | Como usar, regras, prazo de entrega. |
| **Imagem** | Envie um arquivo em **Enviar imagem** ou cole um endereço `https://`. |
| **Estoque limitado** | Desligado = ilimitado. Ligado = informe a quantidade; cada resgate desconta 1 e o cancelamento devolve. |
| **Ordem na lojinha** | Posição de exibição (menor aparece antes). |
| **Ativa** | Desligada some da lojinha do site. Também dá para ligar/desligar direto no cartão. |

### Excluir uma recompensa

Clique em **Excluir** no cartão e confirme. Resgates já feitos continuam no histórico (guardam o nome). Se quiser só tirar do ar por um tempo, prefira **desativar**.

## Resgates

![Resgates](/img/manual/crm/fidelidade/fidelidade-resgates.png)

Cada linha é um pedido de troca, com o **voucher** (código), a recompensa, o participante, os pontos, a data e a validade. Busque pelo código do voucher ou filtre pelo status.

### Ciclo do resgate

| Status | Significado | Pode ir para |
|---|---|---|
| **Solicitado** | O cliente pediu; os pontos já foram debitados. | Aprovado, Entregue, Cancelado |
| **Aprovado** | A equipe conferiu e vai entregar. | Entregue, Cancelado |
| **Entregue** | Recompensa entregue/aplicada. **Final.** | — |
| **Cancelado** | Os pontos voltam ao cliente e o estoque é reposto. **Final.** | — |

### Mudar o status de um resgate

1. Na linha, clique em **Mudar status**.
2. Escolha o novo status e, se quiser, escreva uma **observação** (ex.: "entregue no balcão em 12/03").
3. Clique em **Salvar**. Para **Cancelado**, o sistema pede confirmação.

![Mudar status do resgate](/img/manual/crm/fidelidade/fidelidade-resgate-status.png)

## Regras de negócio

- Os pontos são debitados **no momento do pedido**, não na entrega.
- **Cancelar** devolve os pontos **aos mesmos créditos de origem**, com a validade original — a parte que já venceu não volta.
- O resgate valida programa ativo, participante ativo, recompensa ativa, estoque, nível mínimo e saldo.
- O voucher tem validade (padrão 90 dias, em Configurações).

## Erros comuns

- **"Não é possível mudar de … para …"** — a transição não é permitida (ex.: tentar cancelar um resgate entregue).
- **"Imagem deve ser uma URL http(s)"** — o endereço colado não é um link válido.

## Dicas

- Use a busca por voucher quando o cliente chegar no balcão com o código.
- Anote na observação como e quando a recompensa foi entregue.

## Veja também

- [Participantes](./fidelidade-participantes.md)
- [Configurações, níveis e faixas](./fidelidade-configuracao.md)
- [Visão geral do programa](./fidelidade.md)
