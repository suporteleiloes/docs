---
title: Saídas do Pátio
sidebar_position: 10
---

# Saídas do Pátio

Esta tela registra a retirada de um bem que estava guardado no pátio. Ao registrar a saída, você identifica quem retirou o bem, encerra a estadia (para de cobrar diárias), congela o custo final, libera a vaga física que o bem ocupava e, se quiser, já gera a cobrança no financeiro.

## Pré-requisitos
- O bem precisa ter uma **estadia em aberto** no pátio (ter passado por uma [Entrada](../remocao/remocao-entradas.md)). A saída sem estadia até é aceita, mas não há diárias a encerrar nem custo a congelar.
- Para faturar na saída, o módulo **Financeiro** precisa estar disponível — a saída gera uma **conta a receber**.

## Como acessar
**Remoção** → **Pátio** → **Saídas do Pátio**.

![Saídas do Pátio](/img/manual/erp/remocao-saidas.png)

## O que você vê nesta tela
No topo há um aviso lembrando o que a saída faz (identifica quem retirou, encerra a estadia, congela o custo e pode faturar). Abaixo, um campo de busca por bem e a lista de todas as saídas já registradas.

| Coluna | O que é |
|---|---|
| # | Número da saída no sistema. |
| Bem | Descrição do bem que foi retirado. |
| Retirada | Tipo de quem retirou (Proprietário, Comprador/Arrematante, Seguradora, Banco, Financeira, Terceiro autorizado ou Outro). |
| Quem retirou | Nome da pessoa que fez a retirada. |
| Custo final | Valor total congelado no momento da saída. |
| Fatura | Número da conta a receber gerada no financeiro (ou um traço, se não foi faturada). |
| Data | Data em que a saída foi registrada. |

## O que dá pra fazer aqui

### Buscar uma saída
Digite parte da descrição do bem no campo de busca para filtrar a lista.

### Registrar uma saída
1. Clique em **Registrar saída**.
2. Em **Estadia em aberto**, busque o bem que está em guarda digitando a placa ou a descrição. Ao escolher, o sistema preenche o bem automaticamente a partir da estadia.
3. Se preferir, use o campo **Bem** para buscar diretamente, ou clique no botão de lupa ao lado para abrir a busca de bens em guarda em uma lista.
4. Escolha o **Tipo de retirada** (Proprietário, Comprador/Arrematante etc.).
5. Preencha **Quem retirou (nome)** e o **Documento** (CPF/CNPJ) de quem está levando o bem.
6. Deixe **Faturar agora (gerar conta a receber)** ligado se quiser que o sistema crie a cobrança no financeiro na hora. Esse switch já vem **ligado por padrão**; desligue se for cobrar depois. O faturamento só ocorre quando há estadia vinculada à saída.
7. Clique em **Registrar saída**. O sistema confirma a saída e, se você optou por faturar, informa o número da conta gerada.

![Registrar saída](/img/manual/erp/remocao-saidas-novo.png)

### Imprimir o recibo
Na linha da saída, clique no ícone de documento (**Recibo PDF**) para gerar e abrir o recibo da retirada em uma nova aba.

## Regras de negócio e impactos
- **Bem obrigatório.** Sem selecionar o bem, o botão de registrar fica bloqueado (o sistema também recusa o envio sem `bem_id`).
- A busca de estadia mostra somente estadias **em aberto**, ou seja, bens que ainda estão sob guarda.
- Registrar a saída **encerra a estadia** (status passa a Encerrada), define a **data de fim** na data da saída e **congela o custo final** — não dá para continuar acumulando diárias depois disso.
- O **custo final** é calculado no momento da saída (diárias × valor da diária + reboque + taxas − descontos) e fica gravado na saída; é esse valor que aparece no recibo.
- A saída **libera a vaga física** que o bem ocupava no pátio (a vaga volta a ficar disponível). No legado a vaga ficava ocupada para sempre após a saída; aqui isso foi corrigido.
- **Faturar na saída** gera uma conta a receber no módulo Financeiro e grava o número dela na saída (coluna **Fatura**). Sem estadia vinculada, não há o que faturar.

## Erros comuns
- Esquecer de vincular a **estadia**: a saída é registrada, mas sem encerrar diárias nem congelar custo. Sempre comece pela busca de **Estadia em aberto** para o bem ser derivado automaticamente.
- Deixar **Faturar agora** ligado quando a cobrança será feita por outro meio — isso cria uma conta a receber duplicada no Financeiro.

## Veja também
- [Estadias](../remocao/remocao-estadias.md)
- [Entradas no Pátio](../remocao/remocao-entradas.md)
- [GRV / GGV](../remocao/remocao-guias.md)
- [Configurações do Pátio](../remocao/remocao-configuracoes.md)
