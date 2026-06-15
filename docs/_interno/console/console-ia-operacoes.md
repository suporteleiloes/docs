---
title: IA — Operações (Sistema A)
sidebar_position: 10
---

# IA — Operações (Sistema A)

Esta tela é o painel onde você pede para a IA executar operações privilegiadas (consultas e alterações no banco, diagnósticos e tarefas de infraestrutura) e acompanha o histórico de tudo o que foi solicitado. Cada pedido fica registrado e auditado.

## Como acessar
**Console** → **IA Operacional** → **Operações (Sistema A)**

![IA — Operações (Sistema A)](/img/manual/_interno/console-ia-operacoes.png)

## O que você vê nesta tela

No topo há um aviso de que estas são **operações privilegiadas e auditadas**. Leitura e diagnóstico são executados conforme o perfil de cada colaborador; **escrita, dump, ssh e deploy** exigem aprovação humana antes de rodar. As operações de dump, ssh e deploy estão **simuladas** neste ambiente.

Logo abaixo do aviso fica o bloco **Nova operação** (formulário) e, em seguida, a **tabela com o histórico** de operações. A lista se atualiza sozinha a cada poucos segundos.

### Campos do formulário "Nova operação"

| Campo | O que é |
|---|---|
| Tipo | O que você quer fazer. Opções: Consulta SQL (leitura), Alteração SQL (escrita) — risco, Diagnóstico, Dump de banco — risco, Comando SSH — risco, Deploy — risco. |
| Cliente (base) | Em qual base a operação roda. "Base atual (conexão corrente)" usa a conexão em que você está; ou escolha um cliente específico na lista. |
| Descrição | Texto livre explicando por que / o que você precisa. |
| SQL | Campo de comando, que só aparece quando o Tipo é Consulta SQL ou Alteração SQL. |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número da operação. |
| Tipo | Tipo da operação solicitada. |
| Cliente | Base em que rodou. |
| Descrição | O que foi pedido. |
| Usuário | Quem solicitou. |
| Status | Situação atual (veja abaixo). |
| Quando | Data e hora do pedido. |
| (ações) | Botões Aprovar / Rejeitar, que aparecem só nas pendentes. |

Os valores possíveis de **Status**: executada (verde), pendente (amarelo, aguardando aprovação), rejeitada, negada (sem permissão para o seu perfil) e erro.

## O que dá pra fazer aqui

### Enviar uma nova operação
1. No bloco **Nova operação**, escolha o **Tipo**.
2. Selecione o **Cliente (base)** onde a operação deve rodar.
3. Escreva a **Descrição** dizendo por que precisa.
4. Se o tipo for de SQL, preencha o campo **SQL**. Em alteração (escrita), use comandos do tipo `UPDATE ... WHERE ...` (sem DELETE/DROP). Em consulta, use `SELECT ...`.
5. Clique em **Enviar**.

O que acontece em seguida depende do tipo e do seu perfil:
- Se for uma operação de leitura/diagnóstico permitida ao seu perfil, ela é **executada** na hora.
- Se for uma operação de risco (escrita, dump, ssh, deploy) que exige aprovação, ela entra como **pendente** e segue para aprovação humana, com a mensagem "Operação de risco enviada para aprovação".
- Se o seu perfil não tem permissão, o pedido vem como **negada**, com o aviso "Sem permissão para esta operação".

### Aprovar ou rejeitar uma pendente
Nas linhas com status **pendente**, à direita aparecem os botões **Aprovar** e **Rejeitar**. Clique em **Aprovar** para liberar a execução ou em **Rejeitar** para recusar. (Você também pode usar a tela [Aprovações pendentes](console-ia-aprovacoes.md), que mostra apenas estas.)

## Dicas e observações
- Tela exclusiva de **gerência** (perfil ROLE_ROOT). Colaboradores comuns não veem o Console.
- O que cada colaborador pode fazer (quais clientes, operações, tabelas e infra) é definido em [Perfis de acesso (IA)](console-ia-perfis.md).
- dump, ssh e deploy estão **simulados** neste ambiente — servem para testar o fluxo de aprovação, não executam de fato.
- Tudo aqui é auditado: a operação, quem pediu, quando e o resultado.

## Veja também
- [IA — Aprovações pendentes](console-ia-aprovacoes.md)
- [Perfis de acesso (IA)](console-ia-perfis.md)
- [IA — Configuração](console-ia-config.md)
