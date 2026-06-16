---
title: Saídas do Pátio
sidebar_position: 10
---

# Saídas do Pátio

Esta tela registra a retirada de um bem que estava guardado no pátio. Ao registrar a saída, você identifica quem retirou o bem, encerra a estadia (para de cobrar diárias), congela o custo final e, se quiser, já gera a cobrança no financeiro.

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
6. Deixe **Faturar agora (gerar conta a receber)** ligado se quiser que o sistema crie a cobrança no financeiro na hora. Desligue se for cobrar depois.
7. Clique em **Registrar saída**. O sistema confirma a saída e, se você optou por faturar, informa o número da conta gerada.

![Registrar saída](/img/manual/erp/remocao-saidas-novo.png)

### Imprimir o recibo
Na linha da saída, clique no ícone de documento (**Recibo PDF**) para gerar e abrir o recibo da retirada em uma nova aba.

## Dicas e observações
- O bem é obrigatório: sem selecionar o bem, o botão de registrar fica bloqueado.
- A busca de estadia mostra somente estadias **em aberto**, ou seja, bens que ainda estão sob guarda.
- Registrar a saída **encerra a estadia** e **congela o custo final** — não dá para continuar acumulando diárias depois disso.
- Faturar na saída gera uma conta a receber no módulo Financeiro.

## Veja também
- [Estadias](../remocao/remocao-saidas.md)
- [GRV / GGV](../remocao/remocao-guias.md)
- [Configurações do Pátio](../remocao/remocao-configuracoes.md)
