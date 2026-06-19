---
title: Registro do comitente
sidebar_position: 6
---

# Registro do comitente

Esta é a ficha completa de um comitente. Aqui você vê e gerencia tudo sobre ele: dados de identificação, contas bancárias, endereços, contatos, os bens que ele entregou, manifestos por bem, status de aprovação, usuários com acesso e a automação de documentos. É a tela onde você passa a maior parte do tempo ao trabalhar um comitente específico.

## Como acessar

**ERP** → **Comitentes** → **Comitentes** → clique duas vezes em um comitente da lista. (Ou use o botão **Editar** na linha para abrir direto o formulário.)

![Registro do comitente](/img/manual/erp/comitentes-id.png)

## O que você vê nesta tela

No topo aparece o **nome do comitente** e um selo de **situação** (Ativo / Inativo). Logo abaixo há uma barra de abas que organiza todas as informações:

| Aba | O que mostra |
|---|---|
| Dados | Perfil, identificação, contato principal, classificação e descrição interna |
| Dados Bancários | Contas bancárias cadastradas para repasse |
| Endereço | Endereços cadastrados |
| Contato | E-mails, telefones e outros contatos |
| Bens | Os bens entregues por este comitente |
| Manifestos | Observações/pendências registradas por bem |
| Aprovação | Status de aprovação e pendências |
| Acesso | Usuários autorizados a operar como este comitente |
| Automação | Templates padrão de cobrança, fatura e nota |

No canto direito da barra ficam os botões de ação: **Aprovar**, **Reprovar**, **Mensagem**, **Editar** e **Desativar** (no celular, esses três últimos ficam agrupados no menu "⋯").

## As abas em detalhe

### Aba Dados

Mostra um cartão de perfil (foto/avatar, nome, apelido, tipo de pessoa, documento e data desde quando é comitente) e cartões com:

- **Identificação:** nome/razão social, tipo de pessoa, CPF/CNPJ, RG (para PF) e apelido.
- **Contato:** e-mail principal, outros e-mails, telefone e outros telefones.
- **Classificação:** tipo, grupo(s), inscrição em newsletter, depósito direto, prazo de remoção e situação.
- **Descrição interna:** observações cadastradas.

Você também pode **trocar a logomarca** do comitente: clique na miniatura de logomarca no cartão de perfil e escolha um arquivo de imagem (JPG, PNG ou WebP).

### Aba Dados Bancários

Lista as contas bancárias cadastradas (código do banco, banco, agência, conta, tipo, favorecido, documento do favorecido, chave PIX e observações). A conta marcada como **Padrão** é a usada para repasse. Para alterar, clique em **Editar no formulário**.

### Aba Endereço

Lista os endereços cadastrados (logradouro, número, complemento, bairro, cidade/UF e CEP), indicando qual é o **Padrão**. Para alterar, clique em **Editar no formulário**.

### Aba Contato

Mostra três blocos — **E-mails**, **Telefones** e **Outros contatos** — cada um indicando o registro padrão. Para alterar, clique em **Editar**.

### Aba Bens

Lista os bens deste comitente, com descrição, placa/tipo, valor de avaliação e status. Clique em um bem para abrir a ficha dele.

### Aba Manifestos

Permite registrar manifestos (anotações) por bem:

1. Selecione um bem na lista à esquerda.
2. Os manifestos desse bem aparecem à direita.
3. Clique em **Novo manifesto**, preencha **Título**, **Descrição** e escolha o **Tipo** (Observação, Pendência, Aprovação ou Recusa) e clique em salvar.

### Aba Aprovação

Mostra o **status de aprovação** (Pendente, Aprovado ou Reprovado) e a lista de **pendências** — lotes em situação **condicional** que aguardam a decisão do comitente (vendas sujeitas à confirmação). Para decidir, use os botões **Aprovar** / **Reprovar** no topo.

> A confirmar: este fluxo de aprovação opera sobre **lotes condicionais** de um leilão. O caminho mais direto e confiável para aprovar/reprovar condicionais costuma ser pela própria tela do leilão. Em caso de dúvida sobre qual lote está sendo decidido aqui, valide pelo leilão.

### Aba Acesso

Lista os **usuários com acesso** a este comitente (login, e-mail, último acesso e situação). Aqui você pode **alterar a senha** de um acesso (ícone de chave). Para **conceder ou revogar** acessos, use a área de **Usuários** do sistema — esta aba é de consulta.

### Aba Automação

Define os **templates padrão** usados automaticamente ao gerar documentos para este comitente: **Template de cobrança**, **Template de fatura** e **Template de nota**. Escolha os modelos e clique em **Salvar automação**.

## O que dá pra fazer aqui

### Aprovar ou reprovar (lotes condicionais)

1. Clique em **Aprovar** (verde) ou **Reprovar** (vermelho) no topo.
2. Opcionalmente, informe um **motivo**.
3. Confirme. Ao **Aprovar**, o lote condicional é efetivado como **vendido**; ao **Reprovar**, registra **baixa por oferta insuficiente**. O status na aba Aprovação é atualizado.

> A decisão só altera o lote quando ele está em status **condicional**. Lotes já vendidos ou em outro status não são afetados.

### Enviar uma mensagem

1. Clique em **Mensagem**.
2. Preencha **Assunto** e **Mensagem**.
3. Envie. A mensagem fica registrada no histórico de mensagens do comitente.

> A confirmar: hoje o envio de mensagem é vinculado ao usuário logado que está associado a um comitente (fluxo do **portal do comitente**). Se você operar com um usuário do leiloeiro que não está vinculado a um comitente, o envio pode retornar "Comitente não encontrado". Em caso de dúvida, contate o administrador.

### Editar o comitente

Clique em **Editar** (ou no botão "Editar no formulário" / "Editar" dentro de cada aba) para abrir o formulário completo. Os botões dentro das abas Bancários, Endereço e Contato abrem o formulário já na seção correspondente.

O formulário tem seis abas:

- **Identificação:** tipo de pessoa, situação, nome/razão social, apelido (obrigatório), CPF/CNPJ, tipo de comitente, grupos e — para Pessoa Física — sexo, nacionalidade, data de nascimento e RG (número, órgão emissor e data de expedição, obrigatórios). Também há observações internas.
- **Endereços:** um ou mais endereços (CEP, tipo, logradouro, número, complemento, bairro, cidade, UF, marcando o padrão). O CEP preenche o endereço automaticamente.
- **Contatos:** e-mails (o primeiro é obrigatório), telefones (Celular, Residencial e Comercial sempre disponíveis, mais extras) e outros contatos (site, WhatsApp etc.).
- **Dados Bancários:** uma ou mais contas (código e nome do banco, agência, conta, tipo, chave PIX, favorecido, documento do favorecido, observações, marcando a conta padrão para repasse).
- **Automação:** modelos padrão de Cobrança de Arremate, Fatura/Recibo de Pagamento e Nota de Arrematação.
- **Configurações:**
  - **Forma de repasse:** "Repasse via leiloeiro" (padrão) ou "Depósito direto ao comitente".
  - **Newsletter:** inscrito ou não.
  - **Prazo de remoção:** Sim/Não. O campo **Prazo (horas)** só fica habilitado quando "Prazo de remoção" está como **Sim**.

Ao terminar, clique em **Salvar**.

### Alterar a senha de um usuário com acesso

1. Vá na aba **Acesso**.
2. Clique no ícone de **chave** na linha do usuário.
3. Escolha entre **gerar uma senha automaticamente** ou **definir uma senha manualmente** (mínimo 8 caracteres).
4. Opcionalmente, marque para **enviar a senha por e-mail**.
5. Confirme. No modo automático, a senha gerada aparece na tela para você copiar.

### Desativar / Reativar

Clique em **Desativar** (ícone no topo, ou no menu "⋯" no celular) e confirme. O comitente **não é excluído** — fica inativo e pode ser reativado depois pelo mesmo botão (que então mostra "Reativar").

## Erros comuns

- **"Dados do RG inválidos"** — ao salvar uma Pessoa Física sem RG: o sistema exige **número** e **órgão emissor** do RG. Preencha-os na aba Identificação antes de salvar.
- **Apelido já em uso** — o apelido é único; se já existir outro comitente com o mesmo apelido, o sistema bloqueia o salvamento. Escolha outro.
- **Cadastro inválido** — mensagem genérica de validação do formulário: revise os campos obrigatórios (apelido, ao menos um e-mail e, para PF, o RG).

## Dicas e observações

- Comitente nunca é apagado — apenas desativado/reativado.
- Toda a edição de identificação, endereços, contatos e dados bancários acontece pelo **formulário** (botão Editar). As abas de consulta servem para visualizar rapidamente.
- Na aba Acesso você só consulta e troca senha; **conceder/revogar acesso** é feito na área de **Usuários**.
- Ao **cadastrar** um comitente, o sistema cria automaticamente um **usuário de acesso** vinculado a ele (login igual ao apelido), que passa a aparecer na aba Acesso. É por esse acesso que o comitente entra no portal para aprovar/reprovar lotes condicionais e trocar mensagens.
- Para Pessoa Física, o RG (número e órgão emissor) é obrigatório no formulário.
- **Aprovar/Reprovar** no topo da ficha decide lotes **condicionais** (vendas sujeitas à confirmação do comitente): Aprovar efetiva a venda do lote; Reprovar registra baixa por oferta insuficiente. Isso muda o status do lote no leilão.

## Veja também

- [Gestão de Comitentes](./comitentes-lista.md)
- [Tipos de comitente](./comitentes-tipos.md)
- [Grupos de comitentes](./comitentes-grupos.md)
- [Prestação de Contas](./comitentes-prestacao.md)
