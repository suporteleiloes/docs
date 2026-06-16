---
title: Grupos e Permissões
sidebar_position: 3
---

# Grupos e Permissões

Os **Grupos** (ou Perfis de Acesso) definem conjuntos de permissões reutilizáveis. Em vez de configurar permissão por permissão para cada usuário, você cria um grupo (por exemplo "Financeiro" ou "Gerência"), define o que ele pode fazer e atribui esse grupo como perfil padrão de cada usuário — todas as permissões do grupo passam a valer automaticamente.

## Como acessar

**Configurações** → **Usuários** → botão **Grupos e Permissões**.

![Grupos e Permissões](/img/manual/erp/configuracoes-user-groups.png)

## O que você vê nesta tela

Logo abaixo do título há um cartão explicativo sobre os Perfis de Acesso. Em seguida vêm o campo de busca e a tabela de grupos:

| Coluna | O que é |
|---|---|
| **ID** | Número interno do grupo |
| **Nome do Grupo** | Nome do perfil, com a descrição abaixo (quando houver) |
| **Papéis (Roles)** | Etiquetas dos papéis derivados das permissões (Admin, Gestão, Financeiro...) |
| **Permissões** | Quantidade de permissões (ACLs) que o grupo concede |
| **Status** | Ativo ou Inativo |

À direita de cada linha há os botões **Editar** e **Excluir**.

## O que dá pra fazer aqui

### Criar um novo grupo (modo rápido)

1. Clique em **Novo grupo**.
2. No modal, preencha o **Nome do grupo** (obrigatório) e, se quiser, a **Descrição** e o **Status**.
3. Na coluna da direita (**Permissões / ACL**), marque as permissões que o grupo deve conceder. Use as **abas de módulo** (Bens, Leilão, Financeiro...) para filtrar, o campo **Buscar permissão** para localizar, e os atalhos **Selecionar tudo** / **Limpar tudo** ou **Marcar todas de [módulo]** / **Limpar módulo**.
4. Acompanhe o **Resumo de Permissões**, que mostra quantas foram selecionadas.
5. Clique em **Criar grupo**.

![Novo grupo](/img/manual/erp/configuracoes-user-groups-novo.png)

### Editar um grupo

Dê um duplo clique na linha do grupo ou clique no botão **Editar**. Isso abre a tela detalhada do grupo, com mais espaço para gerenciar permissões e membros. Veja [Detalhe do Grupo](configuracoes-grupos-id.md).

### Excluir um grupo

1. Clique no botão **Excluir** (lixeira) na linha do grupo.
2. Confirme. O grupo é removido; os usuários que o usavam perdem a referência, mas **as permissões individuais que já tinham são preservadas**.

## Dicas e observações

- Um grupo aplicado como perfil padrão de um usuário faz com que ele herde todas as ACLs do grupo automaticamente — qualquer alteração no grupo reflete nos membros.
- Os **papéis (roles)** são derivados das permissões marcadas; você não os escolhe manualmente.
- Para atribuir um grupo a um usuário, edite o usuário e selecione o **Grupo / Perfil padrão**, ou use a aba **Membros** na tela de detalhe do grupo.

## Veja também

- [Detalhe do Grupo](configuracoes-grupos-id.md)
- [Usuários](configuracoes-usuarios.md)
