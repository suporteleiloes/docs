---
title: Meu Perfil
sidebar_position: 1
---

# Meu Perfil

A tela **Meu Perfil** é a sua central pessoal no ERP. É aqui que você atualiza seus dados de cadastro, troca a senha, ativa a verificação em duas etapas (2FA), ajusta preferências (tema, idioma, notificações), confere as sessões abertas e o histórico de acessos da sua conta, e cadastra sua assinatura digital.

## Como acessar

Clique no seu **avatar** (foto/iniciais) no canto superior direito do ERP e escolha **Meu Perfil**. A tela também abre pela URL `/perfil`.

![Meu Perfil](/img/manual/erp/perfil.png)

## O que você vê nesta tela

No topo aparece um **cartão de identificação** com sua foto, seu nome, seu cargo, seu e-mail e os **selos de perfil** (papéis que você tem no sistema, como Administrador, Colaborador, Financeiro etc.). Se você tiver mais de quatro papéis, os demais aparecem resumidos em um selo "+N".

Logo abaixo há a **navegação por abas**. Cada aba é uma área diferente da sua conta:

| Aba | O que você faz nela |
|---|---|
| **Dados** | Atualiza foto, identificação (documento, nome, nascimento), contato (e-mail, telefone) e endereço. |
| **Segurança** | Troca a senha e configura a verificação em duas etapas (2FA). |
| **Preferências** | Define tema, idioma, fuso horário e quais notificações deseja receber. |
| **Sessões** | Vê em quais dispositivos sua conta está conectada e encerra os que quiser. |
| **Logs de acesso** | Consulta o histórico de logins, trocas de senha e eventos de segurança. |
| **Assinatura** | Cadastra sua assinatura digital usada em documentos gerados pelo ERP. |

> Dica: você pode abrir uma aba específica direto pela URL, por exemplo `/perfil?tab=seguranca`.

## O que dá pra fazer aqui

### Aba Dados — atualizar seu cadastro

1. Abra a aba **Dados**.
2. Em **Foto de perfil**, clique no círculo (ou em **Escolher imagem**), selecione uma imagem e clique em **Salvar foto**. A nova foto aparece imediatamente no topo e no menu. Para desistir antes de salvar, clique em **Cancelar**.
3. No bloco **Identificação**, confira/edite:
   - **Usuário de acesso** — só leitura, não pode ser alterado por aqui.
   - **CPF / CNPJ / Passaporte** — o rótulo muda conforme a nacionalidade e o tipo de documento. Para brasileiros, o documento é formatado automaticamente ao sair do campo.
   - **Nacionalidade** e **Sexo** — listas de seleção.
   - **Nome completo** (obrigatório), **Nome de tratamento** (como você gosta de ser chamado) e **Data de nascimento**.
4. No bloco **Contato**, ajuste o **E-mail** (obrigatório) e o **Telefone** (escolha o **DDI** ao lado e digite o número, que é mascarado automaticamente).
5. No bloco **Endereço**, digite o **CEP** e clique em **Buscar** (ou apenas termine de digitar): o ERP busca o endereço automaticamente e preenche logradouro, bairro, cidade e UF, deixando o cursor no campo **Número**. Complete o **Número** e o **Complemento** se precisar.
6. Clique em **Salvar alterações** e confirme na janela **Alterar dados cadastrais**. Ao concluir, aparece a mensagem "Salvo com sucesso!".

![Aba Dados](/img/manual/erp/perfil-dados.png)

### Aba Segurança — senha e 2FA

Esta aba reúne a troca de senha e a verificação em duas etapas. Os passos detalhados estão na seção **Dicas** abaixo, mas em resumo:

- **Alterar senha**: informe a senha atual, a nova senha (acompanhe o medidor de força e a lista de requisitos), confirme e clique em **Alterar senha**.
- **Autenticação em dois fatores (2FA)**: clique em **Configurar 2FA** para ativar (por e-mail ou WhatsApp) ou em **Desativar 2FA** para remover.

### Aba Preferências — aparência e notificações

1. Em **Aparência**, escolha o **Tema** (Claro, Escuro ou Automático, que segue o sistema operacional) e a **Densidade do menu** (Compacta ou Confortável). O tema muda na hora, em todas as abas abertas.
2. Em **Localização**, escolha **Idioma** e **Fuso horário**.
3. Em **Notificações**, ligue/desligue **e-mail**, **no sistema** (o sino na barra superior) e **SMS**.
4. Clique em **Salvar preferências**.

### Aba Sessões — gerenciar dispositivos conectados

1. Veja a lista de sessões com dispositivo, IP, localização, último acesso e status (**Atual** = este navegador; **Ativa** = outra sessão).
2. Para encerrar uma sessão que você não reconhece, clique em **Encerrar** na linha dela e confirme. A sessão **Atual** não pode ser encerrada por aqui.

> Se o recurso de sessões ainda não estiver habilitado no seu ERP, a aba mostra um aviso "Sessões em breve".

### Aba Logs de acesso — histórico de segurança

Mostra uma tabela com **Data**, **Ação** (Login, Logout, Senha alterada, 2FA ativado etc.), **IP**, **Dispositivo** (navegador / sistema) e **Resultado** (Sucesso ou Falhou). Use a paginação na base para navegar (20, 50 ou 100 por página).

### Aba Assinatura — assinatura digital

1. Clique em **Escolher imagem** (ou **Trocar imagem** se já houver uma), selecione um arquivo PNG/JPG/SVG.
2. Confira a prévia e clique em **Salvar assinatura**. Para remover a atual, clique em **Remover** e confirme.

A assinatura é usada em documentos gerados pelo ERP, como laudos, atas, recibos e certificados. Recomenda-se PNG com fundo transparente, proporção 4:1 (ex.: 800×200 px) e no máximo 1 MB.

## Dicas e observações

- **Política de senha**: a nova senha precisa ter pelo menos **8 caracteres**, **uma letra maiúscula**, **uma minúscula** e **um caractere especial** (ex.: `!@#$%`). O sistema mostra a força da senha e marca cada requisito conforme você digita.
- **Como ativar o 2FA**: na aba **Segurança**, clique em **Configurar 2FA**, escolha o canal (**E-mail** funciona sempre; **WhatsApp** depende de o ERP ter a integração configurada). Informe o telefone se escolher WhatsApp, clique em **Enviar código**, cole o **código de 6 dígitos** recebido (vale por 10 minutos) e confirme.
- **Como desativar o 2FA**: clique em **Desativar 2FA**. Por segurança, o sistema envia um código pelo canal ativo e pede que você o informe antes de desligar — assim, só quem tem o telefone/e-mail cadastrado consegue desativar.
- **Como funciona o 2FA no dia a dia**: o código só é pedido quando você loga de uma **rede/IP novo**. No computador onde você costuma trabalhar, o login passa direto.
- **Foto e assinatura** propagam para o restante do ERP (a foto aparece no menu; a assinatura entra nos documentos).
- A aba **Assinatura** só fica disponível se o seu usuário tiver uma **pessoa física vinculada**. Sem isso, aparece o aviso "Sem pessoa vinculada".

## Veja também

- [Mensagens](perfil-mensagens.md)
- [Comunicados internos](perfil-comunicados.md)
- [Meu Perfil (versão antiga)](perfil-legacy.md)
