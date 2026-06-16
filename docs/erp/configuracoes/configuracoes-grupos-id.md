---
title: Detalhe do Grupo
sidebar_position: 4
---

# Detalhe do Grupo

Esta é a tela completa de gestão de um **Grupo / Perfil de Acesso**. Ela abre quando você edita um grupo na lista de Grupos e Permissões, e oferece mais espaço para trabalhar com as permissões e os membros. Aqui você ajusta os dados básicos do grupo, escolhe as permissões em detalhe e gerencia quem pertence ao grupo.

## Como acessar

**Configurações** → **Usuários** → **Grupos e Permissões** → dê um duplo clique em um grupo (ou clique em **Editar**).

![Detalhe do Grupo](/img/manual/erp/configuracoes-grupos-id.png)

## O que você vê nesta tela

No topo, um cartão de resumo mostra o nome do grupo, o status (Ativo/Inativo), a descrição e três indicadores: **permissões atuais**, **roles** e **membros**.

Logo abaixo, três abas organizam o trabalho:

| Aba | O que contém |
|---|---|
| **Geral** | Nome do grupo, status (Ativo/Inativo) e descrição |
| **Membros** | Lista dos usuários que têm este grupo como perfil padrão |
| **Permissões** | Matriz de permissões (ACL) por módulo, com a contagem de selecionadas |

O botão **Salvar alterações** fica no topo e vale para as abas Geral e Permissões. As alterações de membros são aplicadas na hora, sem precisar salvar.

## O que dá pra fazer aqui

### Editar os dados básicos (aba Geral)

1. Abra a aba **Geral**.
2. Ajuste o **Nome do grupo**, ligue/desligue o **Status** e edite a **Descrição**.
3. Clique em **Salvar alterações** (no topo).

### Definir as permissões (aba Permissões)

1. Abra a aba **Permissões**.
2. Use as **abas de módulo** (Todos, Bens, Leilão, Financeiro...) para navegar e o campo **Buscar permissão** para localizar uma permissão específica.
3. Marque/desmarque cada permissão clicando na caixinha. Cada item mostra a descrição, o módulo e o código da permissão.
4. Para agilizar, use **Selecionar tudo** / **Limpar tudo**, ou, dentro de um módulo, **Marcar todas de [módulo]** / **Limpar módulo**.
5. Clique em **Salvar alterações**. Uma mensagem confirma que os usuários vinculados receberão as novas permissões automaticamente.

### Gerenciar membros (aba Membros)

1. Abra a aba **Membros** para ver os usuários que usam este grupo como perfil padrão. Use o campo de busca para filtrar.
2. Para **adicionar** alguém, clique em **Adicionar membro**, busque o usuário na janela que abre e clique em **Adicionar** ao lado dele.
3. Para **remover** alguém, clique no botão **Remover do grupo** (X) na linha do membro e confirme. Ele deixa de ter este grupo como padrão, mas mantém as permissões individuais que já tinha.

![Membros do grupo](/img/manual/erp/configuracoes-grupos-id-membros.png)

## Dicas e observações

- Adicionar ou remover um membro tem efeito imediato — não é preciso clicar em Salvar.
- Já alterar dados em **Geral** ou marcar permissões em **Permissões** só vale depois de clicar em **Salvar alterações**.
- O botão de editar usuário, na lista de membros, leva você de volta à tela de Usuários.

## Veja também

- [Grupos e Permissões](configuracoes-user-groups.md)
- [Usuários](configuracoes-usuarios.md)
