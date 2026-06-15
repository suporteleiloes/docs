---
title: Operações pendentes de aprovação
sidebar_position: 31
---

# Operações pendentes de aprovação

Esta é a fila de trabalho do Autorizador. Quando alguém tenta executar uma operação configurada como **"Pedir aprovação"**, ela não acontece na hora: fica retida aqui, esperando que um responsável **aprove** ou **rejeite**. Use esta tela no dia a dia para liberar (ou barrar) operações sensíveis.

## Como acessar

**Configurações** → **Autorizador** → botão **Ver pendentes**.

![Operações pendentes de aprovação](/img/manual/erp/configuracoes-autorizador-pendentes.png)

## O que você vê nesta tela

Um aviso no topo lembra que a lista se atualiza sozinha a cada 30 segundos e que operações aprovadas são executadas pelo sistema imediatamente. Abaixo, a tabela com as solicitações.

| Coluna | O que é |
|---|---|
| **#** | Número identificador da solicitação. |
| **Data** | Quando a operação foi solicitada. |
| **Solicitante** | Quem tentou executar a operação. |
| **Operação** | Qual operação está sendo pedida (ex.: "Cancelar venda"). |
| **Dados** | Um resumo dos dados envolvidos na operação, para você decidir com contexto. Passe o mouse para ver o texto completo. |
| **Status** | **Pendente** (amarelo), **Aprovado** (verde) ou **Rejeitado** (vermelho). |

No cabeçalho há dois botões:

- **Ver regras** — volta para a tela de [regras de aprovação](./configuracoes-autorizador.md).
- **Atualizar** — recarrega a lista imediatamente (sem esperar os 30 segundos).

## O que dá pra fazer aqui

Para cada linha ainda **Pendente**, aparecem dois botões à direita: **Aprovar** e **Rejeitar**. Linhas já decididas mostram apenas o status, sem botões.

### Aprovar uma operação

1. Localize a operação na lista (status **Pendente**).
2. Confira o **Solicitante** e a coluna **Dados** para entender o que será feito.
3. Clique em **Aprovar**.
4. Confirme na janela que aparece. A operação é então **aprovada e executada pelo sistema imediatamente**.

### Rejeitar uma operação

1. Localize a operação **Pendente**.
2. Clique em **Rejeitar**.
3. Confirme na janela. A operação é **rejeitada e não será executada**.

## Dicas e observações

- A lista **atualiza automaticamente a cada 30 segundos**. Se quiser ver o estado mais recente na hora, clique em **Atualizar**.
- Uma operação aprovada **roda na sequência**, sem nenhuma ação adicional sua — por isso, revise os dados antes de aprovar.
- O que cai nesta fila depende das regras configuradas em **Configurações → Autorizador**. Só operações com regra **"Pedir aprovação"** geram pendências aqui.
- Quem pode aprovar/rejeitar costuma ser definido pelo **aprovador** (usuário ou grupo) da regra correspondente.

## Veja também

- [Autorizador — Regras de aprovação](./configuracoes-autorizador.md)
