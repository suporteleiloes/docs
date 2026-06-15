---
title: Papéis de Pessoa
sidebar_position: 25
---

# Papéis de Pessoa

Esta tela administra os **papéis** que uma pessoa pode ter no sistema — por exemplo, arrematante, comitente ou parceiro. Os papéis ajudam a classificar quem é quem no cadastro de pessoas do CRM.

## Como acessar
**CRM** → **Admin** → **Papéis**.

![Papéis de Pessoa](/img/manual/crm/crm-admin-papeis.png)

## O que você vê nesta tela

No topo há o botão **+ Novo papel** e um campo de busca por nome. Abaixo, a lista de papéis cadastrados.

### Cada papel na lista mostra

| Elemento | O que é |
|---|---|
| **Nome** | O rótulo do papel (ex.: Arrematante). |
| **Código (slug)** | Identificador interno do papel, exibido como etiqueta. É somente leitura. |
| **Inativo** | Etiqueta que aparece quando o papel está desativado. |
| **Editar / Excluir** | Ações por linha. |

## O que dá pra fazer aqui

### Criar um novo papel
1. Clique em **+ Novo papel**.
2. Preencha o **Nome** (obrigatório).
3. Deixe **Ativo** ligado para que o papel possa ser usado (ou desligue para criá-lo já inativo).
4. Clique em **Criar**.

![Novo papel](/img/manual/crm/crm-admin-papeis-novo.png)

### Editar um papel
1. Clique em **Editar** na linha do papel.
2. Ajuste o **Nome** e/ou o estado **Ativo**.
3. Clique em **Salvar**.

### Excluir um papel
1. Clique em **Excluir** na linha do papel.
2. Confirme a remoção no aviso. **Atenção: essa ação não pode ser desfeita.**

### Buscar
1. Digite parte do nome no campo de busca e pressione **Enter**.

## Dicas e observações

- O **Código (slug)** é gerado pelo sistema e **não pode ser alterado** — aparece só para identificação. Ao criar ou editar, você só define o **Nome** e se está **Ativo**.
- Em vez de excluir um papel em uso, prefira **desativá-lo** (desligar **Ativo**) para preservar os vínculos existentes.
- Esta é uma tela administrativa; normalmente requer permissão de administração do CRM.

## Veja também
- [Tags de Pessoa](./crm-admin-tags.md)
