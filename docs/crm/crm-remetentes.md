---
title: Remetentes
sidebar_position: 7
---

# Remetentes

Remetentes são os "de quem" das suas campanhas: os e-mails ou números autorizados a enviar mensagens em nome da leiloeira. Antes de disparar qualquer campanha, você cadastra aqui pelo menos um remetente — com os dados de envio (servidor SMTP, no caso de e-mail) — e pode testar se está funcionando.

## Como acessar

**CRM** → **Marketing** → **Remetentes**.

![Remetentes](/img/manual/crm/crm-remetentes.png)

## O que você vê nesta tela

No topo, o botão **Novo remetente** e uma busca. A lista traz:

| Coluna | O que é |
|---|---|
| # | Número do remetente |
| Nome | Nome amigável (ex.: "Marketing SL") |
| Identificador | O e-mail ou número usado no envio |
| Canal | E-mail, SMS ou WhatsApp |
| Servidor | Servidor SMTP configurado (para e-mail) |

Na coluna de ações você encontra **Testar**, **Editar** e **Excluir**.

## O que dá pra fazer aqui

### Cadastrar um remetente de e-mail

1. Clique em **Novo remetente**.
2. Preencha o **Nome** (ex.: "Marketing SL").
3. Em **E-mail**, informe o endereço de envio (ex.: `noreply@empresa.com`).
4. Mantenha o **Canal** em **E-mail**.
5. Na seção **Configuração SMTP**, preencha:
   - **Servidor SMTP** (ex.: `smtp.exemplo.com`)
   - **Porta** (ex.: `587`)
   - **Usuário**
   - **Senha**
   - **Segurança** (Nenhuma, SSL ou TLS)
6. Clique em **Criar**.

![Novo remetente](/img/manual/crm/crm-remetentes-novo.png)

### Cadastrar um remetente de SMS ou WhatsApp

1. Clique em **Novo remetente**.
2. Preencha o **Nome**.
3. Em **Número (telefone)**, informe o número de envio.
4. Escolha o **Canal** (SMS ou WhatsApp).
5. Na seção **Credenciais de gateway**, informe **Usuário / API key** e **Senha / secret**.
6. Clique em **Criar**.

### Editar um remetente

Clique no ícone de **editar** (lápis). O formulário abre preenchido.

> Ao editar um remetente de e-mail, deixe o campo **Senha** em branco para manter a senha atual — só preencha se quiser trocá-la.

### Testar um remetente

Clique em **Testar** na linha do remetente. O sistema dispara um envio de teste; confira a caixa de entrada do endereço configurado para confirmar que está funcionando.

### Excluir um remetente

Clique no ícone de **lixeira** e confirme.

## Dicas e observações

- Cadastre e **teste** o remetente antes de criar campanhas — sem um remetente válido, a campanha não tem como sair.
- A senha SMTP nunca é exibida de volta na edição; o campo aparece em branco por segurança.

## Veja também

- [Campanhas](marketing-campanhas.md)
- [Gerador de Conteúdo](marketing-gerador.md)
