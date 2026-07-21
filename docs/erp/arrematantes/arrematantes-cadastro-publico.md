---
title: Cadastro público do arrematante
sidebar_position: 1
---

# Cadastro público do arrematante

É o cadastro que o próprio arrematante faz, sozinho, pelo **aplicativo/painel do arrematante** (ex.: `app.seusite.com.br/cadastro`) — antes de participar dos leilões. O fluxo é **um só, contínuo**: a pessoa preenche os dados, a conta é criada (já logada) e, na sequência, aparecem **etapas extras conforme o que você exige no ERP** (validação de contatos, selfie, documentos). Cada etapa extra **só aparece se você ligar a configuração correspondente**.

:::tip Onde configurar
As opções abaixo ficam em **Configurações → Arrematante / Cadastro** (chaves de configuração global). Ligar/desligar cada uma muda o que o arrematante vê no cadastro, sem precisar de nada no app.
:::

## As etapas do formulário

### 1. Tipo de conta

O arrematante escolhe **Pessoa Física** ou **Pessoa Jurídica**. Se você permitir estrangeiros, ele também escolhe o país (e informa se tem CPF no Brasil).

![Cadastro — tipo de conta](/img/manual/erp/cadastro-arrematante-tipo.png)

| Configuração | Efeito |
|---|---|
| `arrematante.permitirEstrangeiros` | Libera escolher país diferente do Brasil (documento livre, sem CPF) |
| `arrematante.bloquearCadPj` | Bloqueia cadastrar empresa direto (exige antes ter conta PF sócia) |

### 2. Dados

Nome, documento (CPF/CNPJ, ou documento livre para estrangeiro), RG (opcional), data de nascimento, gênero e — para PF — estado civil (com bloco do cônjuge quando casado). Para PJ, os dados da empresa e sócios/representantes.

![Cadastro — dados](/img/manual/erp/cadastro-arrematante-dados.png)

### 3. Endereço, 4. Contatos e 5. Acesso

Endereço (com busca automática por CEP), telefone e e-mail (com confirmação), e a criação do **apelido/login + senha** (com verificação de disponibilidade do login e critérios de força de senha) e aceite dos termos de uso.

### 6. Contrato de adesão

Aparece **apenas se** o contrato estiver habilitado. Mostra o contrato gerado e exige o aceite antes de concluir.

![Cadastro — contrato de adesão](/img/manual/erp/cadastro-arrematante-contrato.png)

| Configuração | Efeito |
|---|---|
| `arrematante.habilitarContratoAdesao` | Insere a etapa do contrato de adesão antes de criar a conta |

## O que acontece depois de criar a conta

Ao concluir o formulário, a **conta é criada e o arrematante já entra logado**. Na sequência, ainda dentro do mesmo fluxo, aparecem as etapas abaixo — **cada uma só se a configuração estiver ligada**:

### Validação de contatos (código por e-mail/SMS)

O arrematante confirma o e-mail e/ou o telefone digitando um código de 6 dígitos que enviamos.

![Cadastro — código de validação](/img/manual/erp/cadastro-arrematante-otp.png)

| Configuração | Efeito |
|---|---|
| `cliente.confirmarEmailCadastro` | Exige validar o e-mail por código |
| `cliente.confirmarTelefoneCadastro` | Exige validar o telefone por código (SMS) |

### Selfie / biometria

O arrematante tira uma **selfie pela câmera do próprio dispositivo** (celular **ou** computador com webcam). Quem estiver num computador **sem câmera** vê um **QR Code** para continuar no celular, já logado, e a tela do computador segue sozinha quando a selfie chega.

<div style={{display:'flex',gap:'12px',flexWrap:'wrap'}}>

![Cadastro — selfie](/img/manual/erp/cadastro-arrematante-selfie.png)

![Cadastro — selfie por QR no celular](/img/manual/erp/cadastro-arrematante-selfie-qr.png)

</div>

| Configuração | Efeito |
|---|---|
| `arrematante.exigirSelfie` | Pede a selfie de verificação no cadastro |
| `arrematante.biometriaFacial` | Habilita a comparação facial (a selfie é comparada com o documento) |
| `business.analiseCadastral` | Liga a análise automática de segurança (biometria + cruzamento de dados) |

### Documentos

O arrematante envia os documentos que você configurou como requeridos. Os **obrigatórios** precisam ser enviados para concluir; o restante pode ficar para depois, pelo painel.

![Cadastro — documentos](/img/manual/erp/cadastro-arrematante-documentos.png)

| Configuração | Efeito |
|---|---|
| `arrematante.exigirDocsCadastro` | A conta fica inativa até o envio dos documentos |

### Conclusão

No fim, o arrematante vê a confirmação. Se enviou selfie/documentos, a mensagem informa que o cadastro **entrou em análise** e ele será avisado por e-mail quando aprovado.

![Cadastro — conclusão](/img/manual/erp/cadastro-arrematante-conclusao.png)

## Depois do cadastro

Os cadastros novos entram na fila de **[Aprovação de Cadastros](./arrematantes-aprovacao.md)** e, quando há biometria/documentos, também nas **[Análises Cadastrais](./arrematantes-analises.md)**. É lá que sua equipe homologa quem pode participar dos leilões.
