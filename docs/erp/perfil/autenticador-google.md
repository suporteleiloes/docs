---
title: Google Authenticator (verificação em 2 etapas)
sidebar_position: 1.5
---

# Google Authenticator (verificação em 2 etapas)

O **Google Authenticator** é a forma mais segura de proteger o seu acesso ao ERP. Depois da senha, o sistema pede um código de 6 dígitos que o **aplicativo do seu celular** gera a cada 30 segundos. Mesmo que alguém descubra a sua senha, não consegue entrar sem o seu celular.

É a opção **recomendada** de verificação em duas etapas (2FA). Ela é melhor que o código por e-mail ou WhatsApp porque o código nasce no seu aparelho: não passa por nenhum canal que possa ser interceptado e funciona até sem internet no celular.

## Pré-requisitos

- Um celular com um aplicativo autenticador instalado. Funciona com qualquer um destes:
  - **Google Authenticator** (Android e iPhone);
  - **Microsoft Authenticator**;
  - **1Password**;
  - **Authy**.
- O horário do celular no **automático** (o código depende do relógio).

## Como acessar

Há dois caminhos:

- **No login**, quando a sua organização exige o autenticador e você ainda não cadastrou: o próprio login mostra o QR code (veja abaixo).
- **Por conta própria**, a qualquer momento: clique no seu **avatar** (canto superior direito) → **Meu Perfil** → aba **Segurança** → **Configurar 2FA**.

## Cadastrando no primeiro login

Se o administrador ativou o Google Authenticator para a sua conta, logo depois de digitar usuário e senha aparece a tela **Ative o Google Authenticator**:

![Tela de login pedindo para ler o QR code do Google Authenticator](/img/manual/erp/perfil/login-totp-cadastro.jpg)

1. No celular, abra o Google Authenticator e toque em **+** → **Ler código QR**.
2. Aponte a câmera para o QR code da tela. A conta **Suporte Leilões** aparece no aplicativo.
3. Não consegue ler o QR? Escolha **Inserir chave de configuração** no app e digite a chave mostrada em **"Não consegue ler? Digite a chave no app"**.
4. Digite no campo **Código de 6 dígitos que aparece no app** o número exibido no celular.
5. Clique em **Ativar e entrar**.

Pronto: o autenticador está cadastrado e você já entra no sistema.

## Entrando nos próximos logins

A partir daí, todo login pede o código do aplicativo depois da senha:

![Tela de login pedindo o código do Google Authenticator](/img/manual/erp/perfil/login-totp-codigo.jpg)

1. Abra o aplicativo autenticador no celular.
2. Digite o código de 6 dígitos da conta **Suporte Leilões**.
3. Clique em **Confirmar e entrar**.

:::tip O código muda a cada 30 segundos
Se o número estiver quase sumindo no aplicativo (a barrinha ou o círculo acabando), espere o próximo. Cada código só pode ser usado **uma vez**.
:::

## Ativando ou trocando de celular pelo perfil

Em **Meu Perfil → Segurança**, a seção **Autenticação em dois fatores (2FA)** mostra se o autenticador está ativo:

![Aba Segurança do perfil com o Google Authenticator ativo](/img/manual/erp/perfil/perfil-seguranca-totp.jpg)

- **Configurar 2FA**: abre a escolha do método. Selecione **Google Authenticator (Recomendado)**, clique em **Gerar QR code**, leia o QR no celular e confirme com o código.
- **Trocar celular**: use quando mudar de aparelho. Por segurança, o sistema pede o **código atual** do autenticador antigo antes de gerar um QR novo.
- **Desativar 2FA**: pede o código atual do aplicativo para confirmar.

![Janela de ativação do 2FA com o Google Authenticator recomendado](/img/manual/erp/perfil/perfil-2fa-modal.jpg)

## Regras de negócio

| Situação | O que acontece |
|---|---|
| Organização exige 2FA e você não cadastrou | O login mostra o QR code para cadastrar na hora. |
| Código digitado errado 5 vezes | A verificação expira. Volte ao login e entre de novo. |
| Mesmo código usado duas vezes | É recusado. Espere o próximo código do aplicativo. |
| Login de um computador "conhecido" | Com o Google Authenticator, o código é pedido **sempre**, em qualquer computador. |
| Desativar o 2FA numa organização que o exige | O 2FA continua sendo pedido no login (a regra da organização prevalece). |

## Erros comuns

| Mensagem | Causa | O que fazer |
|---|---|---|
| "Código inválido. Confira o horário do celular…" | Relógio do celular adiantado/atrasado, ou código de outra conta. | Ative **data e hora automáticas** no celular e use o código da conta **Suporte Leilões**. |
| "Falha ao validar o código de segurança" | Código expirado, já usado, ou verificação expirada após vários erros. | Use o código atual. Se persistir, clique em **Voltar ao login** e entre de novo. |
| "Para trocar de celular, informe o código atual do seu autenticador" | Você já tem um autenticador cadastrado. | Digite o código do celular antigo. Perdeu o aparelho? Veja abaixo. |

:::warning Perdeu ou trocou de celular sem acesso ao antigo?
Peça ao **administrador da sua organização**. Ele abre o seu usuário em **Configurações → Usuários**, marca **Redefinir autenticador** e salva. No próximo login você lê um QR novo.
:::

## Dicas e observações

- Ao trocar de celular, transfira as contas pelo próprio Google Authenticator (**Transferir contas**) ou use **Trocar celular** no perfil.
- Gerenciadores como 1Password e Authy guardam o autenticador na nuvem, o que facilita a troca de aparelho.
- A chave mostrada no cadastro é secreta: não envie por e-mail nem por mensagem.

## Veja também

- [Meu Perfil](./perfil.md)
- [Acessando o sistema (login)](../../primeiros-passos/login.md)
- [Usuários (administrador)](../configuracoes/configuracoes-usuarios.md)
