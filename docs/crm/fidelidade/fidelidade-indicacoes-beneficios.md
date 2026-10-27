---
title: Indicações e benefícios
sidebar_position: 5
---

# Indicações e benefícios

Cada participante tem um **código de indicação**. Quando um amigo se cadastra com esse código, nasce uma **indicação**. Se o amigo for aprovado e fizer a 1ª compra paga, quem indicou ganha pontos e um **benefício em R$** (desconto na taxa), controlado na aba **Benefícios**.

## Como acessar

**CRM** → **Fidelidade** → abas **Indicações** e **Benefícios**.

## Indicações

![Indicações](/img/manual/crm/fidelidade/fidelidade-indicacoes.png)

| Coluna | O que é |
|---|---|
| **Quem indicou** | O participante dono do código (clique para abrir a ficha). |
| **Indicado** | O novo cliente. |
| **Status** | Registrada, Qualificada, Recompensada ou Cancelada. |
| **Linha do tempo** | Datas do vínculo, da aprovação do cadastro e da 1ª compra. |
| **Benefício (R$)** | Valor, situação e validade do benefício gerado. |

| Status | Quando acontece | O que quem indicou ganha |
|---|---|---|
| **Registrada** | O indicado se cadastrou com o código. | — |
| **Qualificada** | O cadastro do indicado foi aprovado. | Pontos de "indicação — cadastro aprovado". |
| **Recompensada** | A 1ª compra do indicado foi paga. | Pontos de "indicação — 1ª compra" + benefício em R$ conforme as [faixas](./fidelidade-configuracao.md#faixas-de-indicação). |

Se a compra do indicado for cancelada ou o pagamento desfeito, os pontos são estornados, o benefício disponível é cancelado e a indicação volta para **Qualificada** — a próxima compra paga do indicado recompensa de novo.

### Regras da indicação

- Cada cliente só pode ser indicado **uma vez**.
- Não vale **autoindicação** (mesmo arrematante ou mesmo CPF/CNPJ).
- Não vale indicar quem **já tem arremate**.
- Se houver prazo configurado, a conta do indicado precisa ter sido criada dentro dele.

## Benefícios

![Benefícios](/img/manual/crm/fidelidade/fidelidade-beneficios.png)

Créditos em R$ gerados pelas indicações recompensadas. Por padrão a lista mostra os **disponíveis**; mude o filtro para ver usados, expirados e cancelados.

:::info O uso do benefício é registrado à mão
Ao aplicar o desconto na cobrança do cliente, marque o benefício como **usado** aqui e anote onde ele foi aplicado. O desconto ainda não é aplicado automaticamente no pagamento online.
:::

### Marcar como usado

1. Na linha do benefício disponível, clique em **Marcar usado**.
2. Informe onde foi aplicado (opcional, recomendado). Ex.: "desconto na taxa do lote 12 do leilão 45/2026".
3. Clique em **Marcar como usado**.

### Cancelar um benefício

1. Clique em **Cancelar** na linha.
2. Informe o **motivo** (obrigatório) e confirme em **Cancelar benefício**. O cliente perde o crédito; não dá para desfazer.

## Regras de negócio

- Benefício vencido não pode ser usado (o botão fica desabilitado e a data aparece em vermelho). O sistema expira os vencidos automaticamente todo dia.
- Só benefícios **disponíveis** podem ser usados ou cancelados.
- Excluir um participante cancela os benefícios disponíveis dele.

## Erros comuns

- **"Benefício não está disponível."** — ele já foi usado, cancelado ou expirou.
- **"Benefício expirado."** — passou da validade.

## Veja também

- [Configurações, níveis e faixas](./fidelidade-configuracao.md)
- [Participantes](./fidelidade-participantes.md)
- [Visão geral do programa](./fidelidade.md)
