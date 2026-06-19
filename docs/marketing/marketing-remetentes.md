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

## Regras de negócio

- **Canais suportados.** O cadastro aceita quatro canais: **E-mail**, **WhatsApp**, **SMS** e **Voz**. O assistente de campanha, hoje, usa remetentes de **E-mail** e **WhatsApp**.
- **Validar é o teste real de envio.** O botão **Validar** dispara uma mensagem de teste usando a configuração salva (SMTP ou credenciais de gateway). Se a configuração estiver errada, o erro aparece na hora — por isso vale validar antes de usar em campanha.
- **Senha não é exibida.** Ao editar, o campo de senha vem vazio. Deixe em branco para preservar a senha já salva; preencha só para trocá-la. As demais chaves de configuração (ex.: parâmetros de gateways/SES) são preservadas ao salvar.
- **Excluir é reversível no banco, não na tela.** A exclusão marca o remetente como removido (soft delete) e ele some da lista; não é uma remoção física, mas pela interface não há "desfazer".

## Erros comuns

- **Falha ao validar (e-mail)**: servidor, porta, usuário, senha ou tipo de segurança incorretos. Confirme os dados com seu provedor de e-mail.
- **Senha apagada sem querer**: se preencher o campo de senha na edição, ela substitui a anterior. Em dúvida, deixe em branco.
- **Remetente não aparece na campanha**: confira se o canal do remetente é compatível com o canal da campanha (E-mail ou WhatsApp).

## Dicas e observações

- É obrigatório informar nome e identificador (e-mail ou número).
- Use o botão **Validar** sempre que cadastrar ou alterar um remetente, para confirmar que o envio funciona antes de usá-lo em uma campanha.
- As campanhas usam o remetente escolhido na etapa **Destinatários** do assistente.

## Veja também

- [Nova campanha](marketing-campanhas-nova.md)
- [Campanhas](marketing-campanhas.md)
- [Listas de contatos](marketing-listas.md)
