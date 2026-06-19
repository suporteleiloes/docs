---
title: Cobrança (Fechamento)
sidebar_position: 45
---

# Cobrança (Fechamento)

A Cobrança é a segunda aba do [Fechamento](./fechamento.md). É onde você cobra os arrematantes e controla os recebimentos: gerar boletos, enviar e-mails de cobrança, confirmar pagamentos, lançar valores no Financeiro e emitir recibos, faturas, termos de retirada e extratos. Cada linha é um lote vendido (ou condicional) do leilão.

## Como acessar

**Leilões** → abra um leilão → **Fechamento** → aba **Cobrança**.

(A URL termina em `/leiloes/{id}/fechamento/cobranca`.)

![Cobrança](/img/manual/erp/cobranca.png)

## O que você vê nesta tela

No topo, cinco cartões de totais:

| Cartão | O que mostra |
|---|---|
| Total arrecadado | Soma de arremate + comissão + impostos de todos os lotes |
| Comissão arrecadada | Soma das comissões |
| Pago / Pendente em R$ | Quanto já foi pago e quanto ainda falta, em valor |
| Pagamentos confirmados | Quantos lotes estão pagos |
| Pendentes de pagamento | Quantos lotes ainda não foram pagos |

Logo abaixo, o cabeçalho da lista traz os botões de ações em massa, e uma barra com **Selecionar todos** e um filtro de cobrança (**Todos / Com cobrança / Sem cobrança**).

### Colunas da lista

As colunas marcadas como "personalizável" podem ser ocultadas no botão de engrenagem (Configurar colunas).

| Coluna | O que é |
|---|---|
| (caixa de seleção) | Marca a linha para ações em massa |
| Lote | Número do lote |
| Comitente | Dono do bem (personalizável) |
| Arrematante | Quem comprou (personalizável) |
| Arremate | Valor do arremate (personalizável) |
| Comissão | Valor da comissão (personalizável) |
| Total | Arremate + comissão + impostos (personalizável) |
| A receber | Valor que falta receber (personalizável) |
| Recebido | Valor já recebido — fica vermelho se em aberto, verde se quitado (personalizável) |
| Pagamento | Situação: Pago, Parcial, Pendente ou Cancelado (personalizável) |
| Cobrança | Quantas cobranças foram enviadas e se já foram lidas (personalizável) |
| (ações) | Botões por linha (ver abaixo) |

## O que dá pra fazer aqui

### Ações em massa (cabeçalho)

| Botão | O que faz |
|---|---|
| Lançar Vendas no Financeiro | Cria um registro de Conta a Receber para cada lote vendido |
| Registrar pagamentos no financeiro | Lança no Financeiro os pagamentos já registrados individualmente nos lotes |
| Recalcular vendas | Recalcula os impostos das vendas com as configurações atuais de taxa do leilão |
| Log de operações | Abre o histórico das operações em massa de cobrança |
| Enviar cobrança geral | Envia a cobrança para todos os arrematantes do leilão (com preview antes) |
| (engrenagem) | Configurar quais colunas aparecem |

### Enviar cobrança (geral ou de selecionados)

1. Para enviar a todos, clique em **Enviar cobrança geral**. Para enviar só a alguns, marque as caixas e clique em **Enviar cobrança** na barra de seleção.
2. Abre um **preview** com a amostra do e-mail (lote, arrematante, e-mails de destino) e o conteúdo que será enviado.
3. Confira e clique em **Enviar**. Para ajustar o modelo do e-mail, clique em **Editar template**.
4. Ao final, o sistema confirma que os arrematantes foram notificados.

![Preview da cobrança](/img/manual/erp/cobranca-preview.png)

### Confirmar um pagamento

1. Em um lote com pagamento **Pendente**, clique em **Confirmar** na última coluna.
2. Confirme na mensagem.
3. O lote passa a constar como pago. O sistema registra um pagamento no valor do arremate do lote.

> O botão **Confirmar** registra o pagamento integral do arremate de uma vez. Para baixas parciais ou pagamentos com valores específicos, use a edição do lote (duplo clique) ou os lançamentos no Financeiro.

### Ações por linha (ícones)

| Ícone | O que faz |
|---|---|
| Visualizar (olho) | Mostra o documento de cobrança do lote, sem enviar (preview do template configurado para o leilão) |
| Boleto | Gera o boleto do lote |
| Recibo | Baixa o recibo de pagamento em PDF |
| Fatura | Baixa a fatura de arrematação em PDF |
| E-mails de cobrança (envelope) | Abre o histórico de e-mails de cobrança do lote e permite reenviar |
| Termo de retirada | Baixa o termo de retirada em PDF |
| Extrato | Mostra o extrato de arrematação do lote |
| Transferir (setas) | Transfere o arremate para outro arrematante |
| Confirmar | Aparece só em lotes pendentes; confirma o pagamento |

### Transferir um arremate

1. Na linha do lote, clique no ícone de **transferir**.
2. Informe o **ID do novo arrematante**.
3. Clique em **Transferir** e confirme.

> Atenção: a transferência é **irreversível** e afeta notas fiscais, cobranças e recibos do lote.

### Ver e reenviar e-mails de cobrança de um lote

1. Clique no contador da coluna **Cobrança** ou no ícone de **envelope** da linha.
2. Abre o histórico com data de envio, destinatário, status e quando foi lido.
3. Para mandar de novo, clique em **Reenviar cobrança**.

### Editar um lote (duplo clique)

- Dê um **duplo clique** na linha para abrir a janela de edição do lote (a mesma janela de lote do sistema).

## Dicas e observações

- A configuração de colunas fica salva no seu navegador — cada usuário tem a sua.
- O olho verde na coluna **Cobrança** indica que a cobrança já foi lida pelo arrematante; passe o mouse para ver a data da leitura.
- **Recalcular vendas** muda os impostos com base nas taxas atuais — use com cuidado e só quando precisar refazer os cálculos.
- **Lançar Vendas no Financeiro** e **Registrar pagamentos no financeiro** são ações diferentes: a primeira registra as vendas como contas a receber; a segunda lança os pagamentos já feitos.

## Veja também

- [Fechamento](./fechamento.md)
- [Formalização](./formalizacao.md)
- [Notas Fiscais](./notas.md)
