---
title: Usuários
sidebar_position: 2
---

# Usuários

A tela de **Usuários** é onde você controla quem pode acessar o ERP. Aqui você cadastra novos usuários, edita os dados de quem já existe, define se a pessoa é administrador ou pertence a um grupo de permissões, troca ou reseta senhas e ativa/desativa o acesso de cada um.

## Como acessar

**Configurações** → **Usuários**.

![Usuários](/img/manual/erp/configuracoes-usuarios.png)

## O que você vê nesta tela

No topo, três abas filtram a lista pelo status do usuário, com a contagem ao lado:

| Aba | Mostra |
|---|---|
| **Ativos** | Usuários habilitados a acessar o sistema |
| **Desativados** | Usuários cujo acesso está bloqueado |
| **Todos** | Todos os usuários, ativos ou não |

Abaixo das abas há um campo de busca (por nome, e-mail ou usuário) e a tabela com as colunas:

| Coluna | O que é |
|---|---|
| **ID** | Número interno do usuário |
| **Nome** | Nome da pessoa, com foto/inicial e o ID da pessoa vinculada |
| **Documento** | CPF ou CNPJ da pessoa |
| **Usuário** | Login (username) usado para entrar |
| **E-mail** | E-mail de acesso |
| **Papéis** | Tipo de acesso (Admin, Usuário, ERP, Leiloeiro...) |
| **Perfil de Acesso** | Indica "Administrador" ou o nome do grupo padrão |
| **Última atividade** | Quando o usuário esteve ativo pela última vez (ex.: "há 2h", "agora") |
| **Habilitado** | Status: Ativo ou Desativado |

## O que dá pra fazer aqui

No canto direito de cada linha há botões de ação rápida: **Resetar senha**, **Alterar senha**, **Desativar/Reativar**, **Editar** e **Excluir**. No celular, essas ações ficam no botão de três pontinhos (Mais ações).

### Cadastrar um novo usuário

1. Clique em **Novo usuário** (canto superior direito).
2. Na seção **Cadastro da Pessoa**, escolha o **Tipo** (Pessoa Física ou Jurídica) e preencha o **CPF/CNPJ** e o **Nome completo / Razão Social** (obrigatório). Para PJ, há também o campo **Nome Fantasia**.
3. Para Pessoa Física, preencha os blocos **Dados Pessoais** (data de nascimento, sexo), **Contato** (DDI e telefone) e **Endereço** (CEP, UF, logradouro, número, complemento, bairro, cidade). Para PJ, preencha o bloco **Responsável** (CPF, nome, e-mail e celular do responsável).
4. Na seção **Acesso**, confira o **Usuário (login)** — ele é sugerido automaticamente a partir do nome, mas você pode editar ou clicar em **Gerar sugestão**. Preencha o **E-mail** (obrigatório).
5. Em **Senha inicial**, defina uma senha ou deixe em branco para o sistema gerar uma senha forte automaticamente. Se você digitar, ela precisa ter no mínimo 8 caracteres, com letra maiúscula, minúscula e um caractere especial.
6. Ajuste o **Status** (Ativo/Desativado) e, se quiser, informe o **Cargo**.
7. Na seção **Segurança**, escolha a **Verificação em duas etapas (2FA)**: Desativado, Código por e-mail ou Código por WhatsApp.
8. Na seção **Perfil de Acesso**, defina se é **Administrador** (Sim = acesso total). Se não for admin, escolha um **Grupo / Perfil padrão**, que aplica automaticamente todas as permissões daquele grupo.
9. (Opcional) Clique na foto, no topo do formulário, para escolher uma **Foto de perfil** — ela é enviada quando você salvar.
10. Clique em **Criar usuário**.

![Novo usuário](/img/manual/erp/configuracoes-usuarios-novo.png)

### Editar um usuário

1. Dê um duplo clique na linha do usuário, ou clique no botão **Editar** (lápis).
2. Ajuste os campos desejados. Atenção: o **login (username) não pode ser alterado** na edição.
3. Clique em **Salvar alterações**.

### Resetar a senha (gera uma nova automaticamente)

1. Clique no botão **Resetar senha** na linha do usuário.
2. Confirme. A senha atual deixa de funcionar imediatamente.
3. O sistema gera uma nova senha temporária. Se ela for exibida na tela, **anote-a antes de fechar** — ela não será mostrada de novo. Em alguns casos a nova senha é enviada por e-mail ao usuário.

### Alterar a senha manualmente

1. Clique no botão **Alterar senha** (cadeado) na linha do usuário.
2. Digite a **Nova senha** (mínimo 6 caracteres) e repita em **Confirmar nova senha**.
3. Clique em **Alterar senha**. O usuário **não é notificado** — informe-o pessoalmente.

### Ativar ou desativar um usuário

1. Clique no botão de **Desativar/Reativar** na linha.
2. Confirme. Ao desativar, a pessoa não consegue mais acessar o sistema; ao reativar, volta a usar login e senha normalmente.

### Excluir um usuário

1. Clique no botão **Excluir** (lixeira).
2. Confirme. **A exclusão é definitiva** e não pode ser desfeita.

## Dicas e observações

- Prefira **desativar** em vez de excluir quando o objetivo for apenas bloquear o acesso temporariamente — desativar preserva o histórico.
- O 2FA por WhatsApp exige que o usuário cadastre o número em **Perfil → Segurança**; enquanto isso, o código cai para e-mail.
- Grupos e permissões são gerenciados na tela ligada ao botão **Grupos e Permissões**.

## Veja também

- [Grupos e Permissões](configuracoes-user-groups.md)
- [Cadastro Básico](cadastro.md)
