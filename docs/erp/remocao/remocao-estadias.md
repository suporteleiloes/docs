---
title: Estadias & Custos
sidebar_position: 6
---

# Estadias & Custos

A tela de **Estadias & Custos** controla a guarda de cada bem no pátio. Para cada estadia, o sistema calcula ao vivo as diárias e taxas com base no contrato aplicado. Aqui você abre estadias, simula o custo numa data futura, aplica ajustes ou isenções auditáveis, fatura (gerando a conta a receber no financeiro) e ainda gera a cobrança por PIX ou boleto.

## Como acessar

**ERP** → **Pátio & Remoção** → **Estadias** (ou abra o endereço `/remocao/estadias`).

![Estadias e Custos](/img/manual/erp/remocao-estadias.png)

## O que você vê nesta tela

No topo há o botão **Abrir estadia** e um aviso explicando o funcionamento. Abaixo, um campo de busca e a lista de estadias.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número da estadia. |
| Bem | Descrição do bem em guarda. |
| Contrato | Contrato aplicado. Mostra **Sem contrato** quando não há um vinculado. |
| Entrada | Data de início da cobrança. |
| Status | **Em guarda** ou **Encerrada**. Estadias isentas exibem ainda a etiqueta **Isenta**. |

## O que dá pra fazer aqui

### Buscar uma estadia

Digite parte da descrição do **bem** ou do nome do **contrato** no campo de busca.

### Abrir uma estadia

1. Clique em **Abrir estadia**.
2. No campo **Bem**, busque pela placa ou descrição e selecione o bem.
3. Selecione o **Contrato** que define a cobrança.
4. Informe o **Início da cobrança** (data).
5. Se for o caso, ative **Estadia isenta** para não cobrar diárias.
6. Clique em **Abrir estadia**.

![Abrir estadia](/img/manual/erp/remocao-estadias-abrir.png)

### Ver e gerenciar os custos de uma estadia

Clique no ícone de **Custos** na linha da estadia. Abre uma janela com o cálculo completo:

- **Valor total** em destaque, com o número de diárias e o valor de cada uma.
- **Detalhamento**: diárias, reboque, taxas e descontos, somando o total.
- **Notas de cálculo**, quando houver.

![Estadia e custos](/img/manual/erp/remocao-estadias-custos.png)

Dentro dessa janela você ainda pode:

#### Simular o custo em outra data

1. Em **Simular custo em outra data**, escolha a data.
2. Clique em **Simular**. O sistema mostra quantas diárias e qual o total naquela data, sem alterar a estadia.

#### Aplicar um ajuste de cobrança

1. Em **Aplicar ajuste de cobrança**, escolha o tipo: **Desconto (R$)**, **Acréscimo (R$)**, **Taxa extra (R$)** ou **Isenção total**.
2. Informe o **Valor** (não aparece no tipo Isenção total) e o **Motivo**.
3. Clique em **Aplicar**. O custo é recalculado na hora e o ajuste fica registrado.

#### Faturar a estadia

1. Confira o valor total.
2. Clique em **Faturar (conta a receber)**.
3. Confirme na janela. O sistema gera uma conta a receber no financeiro com o valor calculado.

#### Cobrar por PIX ou boleto

1. Em **Cobrar (gateway de pagamento)**, clique em **Gerar PIX** ou **Gerar boleto**.
2. No PIX, aparecem o QR Code e o código copia-e-cola — use **Copiar código** para copiá-lo. No boleto, use **Abrir boleto (PDF)**.
3. Quando disponível, o link **Abrir fatura** leva ao detalhe da cobrança.

## Dicas e observações

- O cálculo das diárias é **ao vivo**: muda conforme a data e o contrato aplicado.
- Ajustes e isenções ficam **registrados** (auditáveis) — sempre informe um motivo claro.
- Faturar gera uma **conta a receber no financeiro**; a cobrança por PIX/boleto usa o gateway de pagamento configurado.
- Estadias marcadas como **Isenta** aparecem com etiqueta própria na lista.

## Veja também

- [Contratos de Pátio](./remocao-contratos.md)
- [Entradas no Pátio](./remocao-entradas.md)
- [Painel do Pátio](./remocao.md)
