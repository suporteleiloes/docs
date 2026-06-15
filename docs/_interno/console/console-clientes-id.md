---
title: Detalhe do cliente
sidebar_position: 3
---

# Detalhe do cliente

Ficha completa de um cliente (leiloeira). Aqui você consulta todos os dados — identificação, contato, plano e contrato, mensalidade, atendimento e chaves de API —, edita as informações comerciais e técnicas, gerencia arquivos, verifica o DNS do domínio e executa o setup automático.

> Tela de uso **interno** da equipe Suporte Leilões.

## Como acessar

**Console** → **Clientes** → clique (ou duplo clique) sobre um cliente da lista.

![Detalhe do cliente](/img/manual/_interno/console-clientes-id.png)

## O que você vê nesta tela

No topo: o nome do cliente, um selo de status e as abas **Dados**, **Financeiro**, **Arquivos** e **Setup**. À direita ficam os botões **Verificar DNS**, **Editar** e **Excluir**.

### Aba Dados

Mostra o cabeçalho do cliente (logo, domínio, tipo de pessoa, documento e indicadores de bens/leilões/base/vendas/satisfação) e vários cartões:

| Cartão | Conteúdo |
|---|---|
| Identificação | Nome/razão social, nome fantasia, tipo, CPF/CNPJ, domínio (com botão Verificar DNS) e data de criação. |
| Contato | E-mail, telefone, endereço e CEP. |
| Plano e Contrato | Plano, se o contrato está assinado, início do contrato e periodicidade. |
| Mensalidade | Valor, dia de vencimento, último pagamento, próximo vencimento, pagamentos pendentes e status. |
| Atendimento | Gerente responsável, infraestrutura (servidor), valor de setup, saldo e meta mensal. |
| Chaves de API | API Key e API Secret (quando existirem), com botão de copiar. |
| Observações / Descrições | Observações internas, descrição dos serviços, descrição para nota fiscal e mensagem de status. |
| Suporte — Tickets | Entrada, saída e saldo de tickets. |

### Aba Financeiro

Resumo financeiro do cliente: mensalidade e valores pendentes.

### Aba Arquivos

Lista de arquivos anexados ao cliente, com envio por botão ou arrastando-e-soltando.

### Aba Setup

Botão para executar as rotinas de provisionamento/configuração inicial do cliente.

## O que dá pra fazer aqui

### Editar o cliente

1. Clique em **Editar**.
2. Ajuste os campos por seção:
   - **Detalhes do cliente:** Domínio, Status, Descrição/Observações, Descrição dos serviços (fatura), Descrição para a nota fiscal e Mensagem de status.
   - **Plano e contrato:** Plano, Servidor (infraestrutura), Início do contrato, Contrato assinado, Mensalidade, Meta mensal, Setup, Periodicidade, Dia de vencimento e Próximo vencimento.
   - **Instância:** Domínio do ERP, Domínio do Arrematante, Conexão Banco de Dados, **Aliases** (domínio + conexão, com **+ Adicionar alias**) e o interruptor **Desativar avisos de cobrança**.
3. Clique em **Salvar**.

> Nome, e-mail e documento são da pessoa e são editados no cadastro de Pessoas, não aqui.

![Editar cliente](/img/manual/_interno/console-clientes-id-editar.png)

### Verificar o DNS do domínio

1. Clique em **Verificar DNS** (no topo ou no cartão Identificação).
2. Aguarde a consulta. O resultado mostra o domínio, um selo de situação (apontamento correto, parcial, IP não bate, sem domínio, etc.), o servidor e o IP esperado, e os registros A/AAAA/CNAME por host (com indicação de quais apontam corretamente).
3. Para repetir, clique em **↻ Verificar de novo**.

### Gerenciar arquivos

1. Abra a aba **Arquivos**.
2. Para enviar, clique em **Enviar arquivo** e escolha o arquivo, ou **arraste** o arquivo para a área indicada.
3. Em cada arquivo da lista, use o ícone de **baixar** ou de **excluir**.

### Executar o setup automático

1. Abra a aba **Setup**.
2. Clique em **Executar setup** e confirme. As rotinas de provisionamento são iniciadas (pode demorar alguns segundos).

### Excluir o cliente

1. Clique em **Excluir**.
2. Confirme na janela. **Essa ação não pode ser desfeita.**

## Dicas e observações

- O botão **Verificar DNS** fica desabilitado quando o cliente não tem domínio cadastrado.
- O campo **Conexão Banco de Dados** e os **Aliases** são técnicos — altere apenas se você sabe o que está fazendo.
- As chaves de API só aparecem quando o cliente tem chave/segredo configurados.

## Veja também

- [Clientes](console-clientes.md)
- [Servidores](gerencia-servidores.md)
