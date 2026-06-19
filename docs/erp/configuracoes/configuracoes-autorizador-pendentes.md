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

Um aviso no topo lembra que a lista se atualiza sozinha a cada 30 segundos. Abaixo, a tabela com as solicitações.

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
4. Confirme na janela que aparece. A solicitação passa para o status **Aprovado**.

> **O que acontece ao aprovar.** Aprovar **libera** a operação, mas não necessariamente a executa na mesma hora. Para operações sensíveis, o sistema espera que o **próprio solicitante reenvie a ação** (ele tenta de novo o que estava bloqueado, agora autorizado) para que ela seja de fato executada. Ou seja: aprovar é dar o "sinal verde"; quem dispara o resultado costuma ser quem pediu. Por isso, avise o solicitante quando aprovar, e revise sempre os **Dados** antes de liberar. *> A confirmar com Tiago: quais operações executam automaticamente ao aprovar e quais dependem de reenvio do solicitante.*

### Rejeitar uma operação

1. Localize a operação **Pendente**.
2. Clique em **Rejeitar**.
3. Confirme na janela. A operação é **rejeitada e não será executada**.

## Dicas e observações

- A lista **atualiza automaticamente a cada 30 segundos**. Se quiser ver o estado mais recente na hora, clique em **Atualizar**.
- **Aprovar libera, não executa por você.** Revise os dados antes de aprovar e, se a operação depender de reenvio, avise quem solicitou (ver a observação acima).
- Cada solicitação só pode ser decidida **uma vez**: depois de aprovada ou rejeitada, não há como reverter pela tela — se decidir por engano, peça ao suporte. Tentar decidir de novo uma solicitação já resolvida é bloqueado pelo sistema.
- O que cai nesta fila depende das regras configuradas em **Configurações → Autorizador**. Só operações com regra **"Pedir aprovação"** geram pendências aqui.
- Quem pode aprovar/rejeitar é controlado por **permissão** (perfil/grupo do usuário). Em geral, o **aprovador** (usuário ou grupo) definido na regra é quem cuida da fila.

## Veja também

- [Autorizador — Regras de aprovação](./configuracoes-autorizador.md)
