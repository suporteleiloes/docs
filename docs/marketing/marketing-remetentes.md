---
title: Remetentes
sidebar_position: 5
---

# Remetentes

Os remetentes definem de quem as campanhas são enviadas — o e-mail (e o servidor SMTP) ou o número/credenciais usados para WhatsApp, SMS e voz. Toda campanha precisa de um remetente.

## Como acessar

**Marketing** → **Remetentes**.

![Remetentes](/img/manual/marketing/marketing-remetentes.png)

## O que você vê nesta tela

Uma tabela com os remetentes cadastrados e um campo de busca.

| Coluna | O que é |
|---|---|
| # | Número (ID) do remetente |
| Nome | Nome amigável (ex.: "Marketing SL") |
| Identificador | O e-mail ou o número de telefone do remetente |
| Canal | E-mail, WhatsApp, SMS ou Voz |
| Servidor | Servidor SMTP configurado (para e-mail) |

## O que dá pra fazer aqui

### Cadastrar um novo remetente

1. Clique em **Novo remetente**.
2. Preencha o **Nome** (obrigatório).
3. Escolha o **Canal**: E-mail, WhatsApp, SMS ou Voz.
4. Preencha o identificador — **E-mail** (para canal e-mail) ou **Número (telefone)** (para os demais), obrigatório.
5. Para o canal **E-mail**, preencha a **Configuração SMTP**:
   - **Servidor SMTP** (ex.: smtp.exemplo.com)
   - **Porta** (ex.: 587)
   - **Usuário**
   - **Senha**
   - **Segurança** (Nenhuma, SSL ou TLS)
6. Para os demais canais, preencha as **Credenciais de gateway**: **Usuário / API key** e **Senha / secret**.
7. Clique em **Criar**.

![Novo remetente](/img/manual/marketing/marketing-remetentes-novo.png)

### Editar um remetente

1. Clique no ícone **Editar** na linha do remetente.
2. Altere os campos necessários.
3. Clique em **Salvar**.

> Ao editar, o campo de senha aparece vazio com a indicação "não alterar". Deixe-o em branco para manter a senha já salva; preencha apenas se quiser trocá-la.

### Validar / enviar teste

1. Clique no botão **Validar** na linha do remetente.
2. Informe o destino do teste — um **e-mail** (canal e-mail) ou um **número** (DDD + número, para os demais canais).
3. Clique em **Enviar**. Confira a caixa de entrada / o WhatsApp do destinatário para confirmar que o remetente está funcionando.

### Excluir um remetente

1. Clique no ícone **Excluir** na linha do remetente.
2. Confirme.

## Dicas e observações

- É obrigatório informar nome e identificador (e-mail ou número).
- Use o botão **Validar** sempre que cadastrar ou alterar um remetente, para confirmar que o envio funciona antes de usá-lo em uma campanha.
- As campanhas usam o remetente escolhido na etapa **Destinatários** do assistente.

## Veja também

- [Nova campanha](marketing-campanhas-nova.md)
- [Campanhas](marketing-campanhas.md)
- [Listas de contatos](marketing-listas.md)
