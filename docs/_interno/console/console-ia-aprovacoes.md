---
title: IA — Aprovações pendentes
sidebar_position: 11
---

# IA — Aprovações pendentes

Esta tela mostra apenas as operações da IA que estão **aguardando sua aprovação**. É a fila de revisão das operações de risco antes de elas rodarem.

## Como acessar
**Console** → **IA Operacional** → **Aprovações pendentes**

![IA — Aprovações pendentes](/img/manual/_interno/console-ia-aprovacoes.png)

## O que você vê nesta tela

É a mesma tabela da tela de [Operações (Sistema A)](console-ia-operacoes.md), mas **filtrada para mostrar só o status pendente**. Por isso, aqui não há o formulário "Nova operação" — esta tela serve apenas para revisar e decidir. A lista se atualiza sozinha a cada poucos segundos.

| Coluna | O que é |
|---|---|
| # | Número da operação. |
| Tipo | Tipo solicitado (escrita, dump, ssh, deploy). |
| Cliente | Base em que a operação rodaria. |
| Descrição | O que foi pedido e por quê. |
| Usuário | Quem solicitou. |
| Status | Sempre "pendente" nesta tela. |
| Quando | Data e hora do pedido. |
| (ações) | Botões Aprovar / Rejeitar. |

## O que dá pra fazer aqui

### Aprovar uma operação
1. Leia a **Descrição** e o **Tipo** para entender o que será executado e em qual **Cliente**.
2. Clique em **Aprovar** na linha correspondente. A operação sai da fila e segue para execução.

### Rejeitar uma operação
1. Na linha que deseja recusar, clique em **Rejeitar**. A operação é marcada como rejeitada e não roda.

Se não houver nada aguardando, a tela mostra "Nenhuma operação".

## Dicas e observações
- Tela exclusiva de **gerência** (perfil ROLE_ROOT).
- Só operações de **risco** (escrita, dump, ssh, deploy) caem aqui — leitura e diagnóstico permitidos pelo perfil rodam direto sem aprovação.
- dump, ssh e deploy estão **simulados** neste ambiente.
- Quem pode pedir cada tipo de operação é controlado em [Perfis de acesso (IA)](console-ia-perfis.md).

## Veja também
- [IA — Operações (Sistema A)](console-ia-operacoes.md)
- [Perfis de acesso (IA)](console-ia-perfis.md)
