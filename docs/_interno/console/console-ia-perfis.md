---
title: Perfis de acesso (IA)
sidebar_position: 12
---

# Perfis de acesso (IA)

Esta tela define o **nível de acesso de cada colaborador** quando usa a IA: em quais clientes ele pode mexer, quais operações pode fazer, quais tabelas pode tocar, quais tarefas de infra pode acionar e o que exige aprovação humana antes de rodar.

## Como acessar
**Console** → **IA Operacional** → **Perfis de acesso (IA)**

![Perfis de acesso (IA)](/img/manual/_interno/console-ia-perfis.png)

## O que você vê nesta tela

No alto há o botão **Novo perfil**. Em seguida vem a **lista de perfis** já cadastrados e, mais abaixo, o bloco **Editar perfil**, que mostra os detalhes do perfil selecionado. Clicar numa linha da lista carrega aquele perfil no editor.

### Colunas da lista

| Coluna | O que é |
|---|---|
| Colaborador | Nome de usuário do colaborador. |
| Clientes | Quais clientes ele pode tocar ("todos" ou a lista). |
| Operações | Tipos de operação liberados (read, insert, update, delete). |
| Tabelas | Quais tabelas ele pode acessar ("todas" ou a lista). |
| Infra | Tarefas de infra liberadas (dump, ssh, deploy, git_pr). |

### Campos do bloco "Editar perfil"

| Campo | O que é |
|---|---|
| Colaborador (username) | Nome de usuário do colaborador (ex.: ana.suporte). |
| Clientes | Marque "todos" para liberar tudo, ou desmarque e digite a lista de clientes separados por vírgula. |
| Operações | Caixas de seleção: read, insert, update, delete. Marque o que ele pode fazer. |
| Tabelas | Marque "todas" para liberar tudo, ou desmarque e digite a lista de tabelas (ex.: lote, lance, fin_movimentacao). |
| Infra | Caixas de seleção: dump, ssh, deploy, git_pr. |
| Exige aprovação para | Caixas de seleção (operações + infra) que, mesmo permitidas, só rodam após aprovação humana. |

## O que dá pra fazer aqui

### Criar um novo perfil
1. Clique em **Novo perfil**. O editor é preenchido com valores iniciais seguros: apenas leitura liberada e aprovação exigida para update, delete, dump, ssh, deploy e git_pr.
2. Em **Colaborador (username)**, digite o nome de usuário.
3. Em **Clientes**, deixe "todos" marcado ou desmarque e liste os clientes permitidos.
4. Em **Operações**, marque o que ele pode fazer (read, insert, update, delete).
5. Em **Tabelas**, deixe "todas" marcado ou liste as tabelas permitidas.
6. Em **Infra**, marque as tarefas de infra liberadas.
7. Em **Exige aprovação para**, marque as ações que sempre passarão por aprovação humana.
8. Clique em **Salvar perfil**.

### Editar um perfil existente
1. Clique na linha do colaborador na lista. Os dados dele aparecem no editor.
2. Ajuste o que for preciso (clientes, operações, tabelas, infra, aprovações).
3. Clique em **Salvar perfil**.

O botão **Salvar perfil** fica desabilitado enquanto o campo Colaborador estiver vazio. Ao salvar, aparece a confirmação "Perfil salvo".

## Dicas e observações
- Tela exclusiva de **gerência** (perfil ROLE_ROOT).
- Comece sempre pelo mínimo: libere só o necessário e mantenha as ações de risco em "Exige aprovação para".
- "Operações" controla o que a IA pode fazer no banco; "Infra" controla tarefas fora do banco (dump, ssh, deploy, abertura de PR no git).
- O que cada colaborador efetivamente solicita e o que exige aprovação aparece nas telas de [Operações](console-ia-operacoes.md) e [Aprovações pendentes](console-ia-aprovacoes.md).

## Veja também
- [IA — Operações (Sistema A)](console-ia-operacoes.md)
- [IA — Aprovações pendentes](console-ia-aprovacoes.md)
- [IA — Configuração](console-ia-config.md)
