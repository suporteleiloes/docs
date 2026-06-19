---
title: Tags de Pessoa
sidebar_position: 26
---

# Tags de Pessoa

Esta tela administra as **tags** (etiquetas livres) que você pode atribuir às pessoas no CRM. Tags ajudam a agrupar e segmentar contatos — por exemplo, "VIP", "Interessado em imóveis" ou "Inadimplente".

## Como acessar
**CRM** → **Admin** → **Tags**.

![Tags de Pessoa](/img/manual/crm/crm-admin-tags.png)

## O que você vê nesta tela

No topo há o botão **+ Nova tag** e um campo de busca por nome. Abaixo, a lista de tags cadastradas.

### Cada tag na lista mostra

| Elemento | O que é |
|---|---|
| **Nome** | O nome da etiqueta. |
| **Descrição** | Texto opcional explicando para que serve a tag (aparece quando preenchido). |
| **Editar / Excluir** | Ações por linha. |

## O que dá pra fazer aqui

### Criar uma nova tag
1. Clique em **+ Nova tag**.
2. Preencha o **Nome** (obrigatório).
3. Opcionalmente, preencha a **Descrição**.
4. Clique em **Criar**.

![Nova tag](/img/manual/crm/crm-admin-tags-novo.png)

### Editar uma tag
1. Clique em **Editar** na linha da tag.
2. Ajuste o **Nome** e/ou a **Descrição**.
3. Clique em **Salvar**.

### Excluir uma tag
1. Clique em **Excluir** na linha da tag.
2. Confirme a remoção no aviso. **Atenção: essa ação não pode ser desfeita.**

### Buscar
1. Digite parte do nome no campo de busca. A lista é filtrada **enquanto você digita**.
2. Pressionar **Enter** recarrega a lista a partir do servidor (útil depois de outra pessoa ter criado tags).

## Regras e permissões

- **Nome é obrigatório.** Tentar salvar sem nome mostra o aviso "Nome é obrigatório".
- O sistema gera automaticamente um **código interno** (slug) a partir do nome — você não precisa informá-lo.
- Todas as operações (listar, criar, editar, excluir) usam a **mesma permissão** de acesso às tags de pessoa. Quem pode ver a tela pode também criar/editar/excluir.

## Erros comuns

- **Salvei sem nome**: o sistema bloqueia e pede o nome.
- **Excluí uma tag por engano**: a remoção é definitiva (não há lixeira). Recrie a tag se necessário — o nome pode ser o mesmo.

## Dicas e observações

- As tags criadas aqui ficam disponíveis para serem atribuídas às pessoas no cadastro de pessoas do CRM.
- Excluir uma tag a remove do catálogo; faça isso apenas quando tiver certeza de que ela não é mais necessária.
- Esta é uma tela administrativa; normalmente requer permissão de administração do CRM.

> A confirmar: o efeito da exclusão sobre pessoas que já tinham a tag atribuída (se a etiqueta some dos cadastros ou fica órfã).

## Veja também
- [Papéis de Pessoa](./crm-admin-papeis.md)
- [Importar pessoas](./crm-pessoas-import.md)
