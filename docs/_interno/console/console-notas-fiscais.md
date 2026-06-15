---
title: Notas Fiscais
sidebar_position: 15
---

# Notas Fiscais

Esta tela gerencia as **notas fiscais de serviço** emitidas pela Suporte Leilões aos seus clientes. Aqui você cria rascunhos, emite, cancela e exclui notas, além de acompanhar o status de cada uma.

## Como acessar
**Console** → **Financeiro** → **Notas Fiscais**

![Notas Fiscais](/img/manual/_interno/console-notas-fiscais.png)

## O que você vê nesta tela

No topo há a busca e o botão **Nova nota**. Quando a integração fiscal real está em **simulação** (sem as credenciais do provedor configuradas), aparece um aviso amarelo: as notas geram número/referência, mas a emissão real (Focus NFe / NFE.io) ainda não está conectada.

O corpo é uma **tabela paginada** de notas. Busque por cliente ou número e escolha quantas linhas por página (20, 50 ou 100).

| Coluna | O que é |
|---|---|
| Número | Número/referência da nota. |
| Cliente | Cliente da nota. |
| Descrição | Descrição do serviço. |
| Valor | Valor da nota (em R$). |
| Status | Situação: Rascunho, Emitida, Cancelada ou Erro. |
| Data | Data de emissão ou de criação. |
| (ações) | Botões que mudam conforme o status (veja abaixo). |

## O que dá pra fazer aqui

### Criar um rascunho de nota
1. Clique em **Nova nota**.
2. Preencha **ID do cliente** (opcional) e **Cliente** (obrigatório).
3. Informe o **Valor** (obrigatório, precisa ser maior que zero).
4. Descreva o serviço em **Descrição do serviço**.
5. Se aplicável, preencha **Tomador — CNPJ/CPF** e **Tomador — nome**.
6. Adicione uma **Observação**, se quiser.
7. Clique em **Criar rascunho**. Aparece a confirmação "Rascunho criado".

O botão de salvar só é liberado quando **Cliente** está preenchido e **Valor** é maior que zero.

### Emitir uma nota
1. Em uma linha com status **Rascunho**, clique em **Emitir**.
2. Confirme na janela (mostra o cliente e o valor). A nota passa a **Emitida**.

### Cancelar uma nota
1. Em uma linha com status **Emitida**, clique em **Cancelar**.
2. Confirme na janela. Atenção: o cancelamento **pode ser irreversível na SEFAZ**.

### Excluir um rascunho
1. Em uma linha com status **Rascunho** ou **Erro**, clique no ícone de **lixeira** (Excluir).
2. Confirme. A exclusão **não pode ser desfeita**. (Notas já emitidas não podem ser excluídas, apenas canceladas.)

## Dicas e observações
- Tela exclusiva de **gerência** (Console).
- Os botões de ação dependem do status: **Emitir** só em rascunhos; **Cancelar** só em emitidas; **Excluir** só em rascunhos ou notas com erro.
- Em ambiente de **simulação**, as notas recebem número/referência mas não são transmitidas de fato à SEFAZ — falta configurar as credenciais do provedor (Focus NFe / NFE.io).

## Veja também
- [Licenças](console-licencas.md)
- [Colaboradores](console-colaboradores.md)
