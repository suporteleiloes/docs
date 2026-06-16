---
title: Meu Perfil (versão antiga)
sidebar_position: 2
---

# Meu Perfil (versão antiga)

Esta é a **versão antiga** da tela Meu Perfil, mantida como alternativa enquanto o novo layout por abas é consolidado. Ela reúne, numa única página com menu lateral, o seu cadastro, informações de acesso e a troca de senha. Para a experiência completa e atual (com 2FA, preferências, sessões, logs e assinatura), use a tela [Meu Perfil](perfil.md).

## Como acessar

Abre pela URL `/perfil/legacy`. No uso normal, prefira a tela nova em **Meu Perfil** (`/perfil`).

![Meu Perfil (versão antiga)](/img/manual/erp/perfil-legacy.png)

## O que você vê nesta tela

A tela tem duas partes lado a lado:

- **Menu lateral (esquerda)**: sua foto, nome, e-mail, documento e os selos de papéis. Abaixo, os itens de navegação.
- **Conteúdo (direita)**: muda conforme o item escolhido no menu.

| Item do menu | O que mostra |
|---|---|
| **Meu cadastro** | Identificação, contato e endereço, com botão para salvar. |
| **Meu acesso** | Resumo do seu papel no sistema, perfil de acesso, usuário, escritório/depto e a lista de permissões (roles). |
| **Alterar senha** | Campos para trocar a senha de acesso. |
| **Acessar site como root** | Atalho que só aparece para usuários root (administração técnica). |
| **Sair do sistema** | Encerra a sua sessão. |

## O que dá pra fazer aqui

### Atualizar o cadastro (Meu cadastro)

1. Clique em **Meu cadastro** no menu lateral.
2. Para trocar a foto, clique no avatar, escolha a imagem e clique em **Salvar foto** (ou **Cancelar**).
3. Edite os blocos **Identificação** (documento, nacionalidade, sexo, nome completo, nome de tratamento, data de nascimento), **Contato** (e-mail, DDI e telefone) e **Endereço** (CEP, endereço, número, complemento, bairro, UF, cidade).
4. Clique em **Salvar alterações** e confirme em **Alterar dados cadastrais**.

> O campo **Usuário de acesso** é apenas leitura.

### Conferir seu acesso (Meu acesso)

1. Clique em **Meu acesso**.
2. Veja os cartões com **Papel no sistema**, **Perfil de acesso**, **Usuário** e (se houver) **Escritório / Depto**, além da lista de **Permissões (roles)**.
3. Pelo botão **Alterar minha senha** você vai direto para a troca de senha.

### Trocar a senha (Alterar senha)

1. Clique em **Alterar senha**.
2. Informe a **Senha atual**, a **Nova senha** e **Confirmar nova senha** (os dois precisam ser iguais).
3. Clique em **Alterar senha** e confirme.

### Sair do sistema

Clique em **Sair do sistema** no menu lateral e confirme para encerrar sua sessão.

## Dicas e observações

- O item **Acessar site como root** só aparece para usuários com permissão técnica (root). Ele gera um token de uso único, válido por poucos minutos, para acessar o site público de um cliente — uso restrito à administração.
- Esta versão **não** tem as abas de 2FA, Preferências, Sessões, Logs e Assinatura. Para esses recursos, use a tela [Meu Perfil](perfil.md).

## Veja também

- [Meu Perfil](perfil.md)
- [Mensagens](perfil-mensagens.md)
