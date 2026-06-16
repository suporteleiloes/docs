---
title: Detalhe do Arrematante
sidebar_position: 7
---

# Detalhe do Arrematante

Esta é a ficha completa de um arrematante. Reúne, em abas, todos os dados e o histórico da pessoa: cadastro, contato, análise, documentos, vendas, lances, habilitações, financeiro, acesso, CRM, comunicação e logs. É também de onde você aprova o cadastro, consulta CPF/CNPJ, gera documentos e dá suporte ao arrematante.

## Como acessar

Clique no nome de um arrematante em qualquer lista do módulo (Gestão de Arrematantes, Aprovação, Análises, Habilitações).

A rota desta ficha é `/arrematantes/:id/detalhe`. O ERP também usa uma janela-modal equivalente que abre direto sobre a lista; esta página de detalhe funciona como visão em tela cheia do mesmo arrematante.

![Detalhe do Arrematante](/img/manual/erp/arrematantes-id-detalhe.png)

## O que você vê nesta tela

No topo (barra superior) ficam: botão **voltar** para a lista, o **nome** do arrematante, um **selo de situação** (Pendente, Aprovado, etc.), a **navegação por abas** e os **botões de ação**.

### Abas da ficha

| Aba | O que mostra |
|---|---|
| Dados | Resumo: perfil, dados pessoais, contato, endereço e dados da conta |
| Contato/Endereço | Edição/gestão de e-mails, telefones e endereços |
| Análise Cadastral | Situação da análise do cadastro (SPC/Serasa/Score) |
| Anexos | Documentos anexados pela equipe |
| Documentos Cliente | Documentos exigidos/enviados pelo próprio arrematante |
| Vendas | Compras/arrematações do arrematante |
| Lances | Lances dados |
| Habilitações | Habilitações em leilões |
| Hab. Comitente | Habilitações relacionadas a comitentes |
| Leilões | Leilões de que participou |
| Financeiro | Situação financeira, saldo e pendências |
| Acesso | Credenciais e usuário de acesso (só para cadastro já existente) |
| CRM | Histórico de relacionamento |
| Comunicação | Mensagens/notificações |
| Assinaturas | Assinaturas/aceites |
| Logs de acesso | Registros de acesso do arrematante |
| Sócios/Representantes | Apenas para Pessoa Jurídica |

### Aba "Dados" (resumo)

Mostra cartões com:

- **Perfil**: foto (com botão para trocar), nome, apelido, tipo, documento, data de cadastro e KPIs (Compras, Lances, Total de compras).
- **Dados pessoais**: nome, tipo, CPF/CNPJ, apelido, nascimento, nacionalidade (PF).
- **Contato**: e-mail principal e telefone (com botão **Validar** ao lado de cada um), além de outros e-mails/telefones.
- **Endereço**: CEP, logradouro, número, complemento, bairro, cidade/UF.
- **Conta**: cadastrado em, status, saldo, newsletter, lance automático, termo recebido.

## O que dá pra fazer aqui

### Aprovar o cadastro

Disponível quando o cadastro ainda não está aprovado:

1. Clique em **Aprovar** (botão verde, na barra superior).
2. Confirme. O arrematante passa a poder participar de leilões.

### Editar o cadastro

1. Clique em **Editar**.
2. Ajuste os dados na janela que abre e salve.

### Excluir

1. Clique no botão de **lixeira** (vermelho).
2. Confirme. **Atenção:** a exclusão é irreversível e remove todos os dados.

### Consultar CPF ou CNPJ

1. Clique em **CPF** (Pessoa Física) ou **CNPJ** (Pessoa Jurídica) na barra superior.
2. Os dados retornados aparecem em uma janela. Você pode optar por atualizar o cadastro com base nessas informações (a ficha abre em modo de edição para você aplicar as correções).

### Validar contatos

Na aba **Dados**, ao lado de cada e-mail ou telefone, clique em **Validar**. Quando validado, o campo passa a exibir o selo "Validado ✓".

### Imprimir histórico

1. Clique em **Imprimir Histórico**.
2. Abre uma página pronta para impressão com os **leilões** e **lances** do arrematante.

### Recuperar senha do arrematante

Disponível quando há usuário de acesso vinculado:

1. Clique em **Recuperar Senha**.
2. Confirme. Um e-mail com nova senha é enviado ao arrematante.

### Gerar documento

1. Clique em **Gerar Documento** (abre um menu).
2. Escolha o template. **Contrato de Adesão** gera um PDF. (Outros templates podem aparecer como "Disponível por leilão" ou "Em breve".)

Há também o botão direto **Contrato Adesão**, que baixa o PDF do contrato de adesão imediatamente.

### Anexar e gerenciar documentos (aba Anexos)

- Para **anexar**: abra a janela de upload, escolha o arquivo e (opcionalmente) uma descrição, e confirme.
- Para **baixar**: clique no documento — o link de download abre em nova aba.
- Para **excluir**: use o botão de remover e confirme (ação irreversível).

Cada documento tem um status: Aguardando envio, Em análise, Verificado, Ilegível, Incorreto ou Fraude.

### Trocar a foto

Na aba **Dados**, passe o mouse sobre a foto do perfil e clique no ícone de **câmera** para enviar uma nova imagem.

## Dicas e observações

- A aba **Sócios/Representantes** só aparece para arrematantes do tipo **Pessoa Jurídica**.
- A aba **Acesso** só existe para cadastros já salvos (com ID) — não há credenciais a gerenciar em um cadastro ainda sendo criado.
- A consulta de **CPF** aparece para Pessoa Física e a de **CNPJ** para Pessoa Jurídica, conforme o tipo do cadastro.
- Ao aprovar, em casos raros o sistema pode salvar a aprovação no banco mas avisar de uma falha parcial (ex.: no envio de notificação). Se isso ocorrer, confira a situação na ficha — o status normalmente já estará atualizado.

## Veja também

- [Gestão de Arrematantes](./arrematantes-lista.md)
- [Aprovação de Cadastros](./arrematantes-aprovacao.md)
- [Análises Cadastrais](./arrematantes-analises.md)
- [Habilitação em Leilões](./arrematantes-habilitacao.md)
