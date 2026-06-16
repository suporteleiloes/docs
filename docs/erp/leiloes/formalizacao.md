---
title: Formalização (Fechamento)
sidebar_position: 43
---

# Formalização (Fechamento)

A Formalização é a primeira aba do [Fechamento](./fechamento.md). Aqui você oficializa as vendas do leilão: gera as atas de arrematação, baixa recibos de comissão dos comitentes e envia a documentação aos arrematantes por e-mail. Cada linha representa uma venda (um arremate) na fila do leilão.

## Como acessar

**Leilões** → abra um leilão → **Fechamento** → aba **Formalização**.

(A URL termina em `/leiloes/{id}/fechamento/formalizacao`. É a aba que abre por padrão ao entrar no Fechamento.)

![Formalização](/img/manual/erp/formalizacao.png)

## O que você vê nesta tela

No topo, três cartões com o resumo da fila:

| Cartão | O que conta |
|---|---|
| Total na fila | Todas as vendas na fila de formalização |
| Formalizados | Vendas já formalizadas |
| Pendentes | Vendas ainda não formalizadas |

Em seguida, a **Fila de Formalização de Vendas**, com dois filtros no cabeçalho:

- **Período**: Tudo, Hoje, Esta semana, Este mês.
- **Tipo**: Tudo, Para Formalizar, Para Receber.

E uma barra de seleção com **Selecionar todos**, que libera ações em massa para os itens marcados.

### Colunas da fila

| Coluna | O que é |
|---|---|
| (caixa de seleção) | Marca a linha para ações em massa |
| Data Compra | Data e hora do arremate |
| Lote | Número do lote |
| Bem | Descrição do bem |
| Arrematante | Quem comprou |
| Valor Lance | Valor do arremate |
| Tipo Leilão | Em qual praça/instância (1º, 2º leilão...) |
| Formalizado por | Usuário que registrou a formalização |
| Situação | Status do lote |
| Formalizado? | Caixa que indica/confirma se a venda foi formalizada |
| (ações) | Botões **Formalizar**, **Ata** e **Comissão** |

## O que dá pra fazer aqui

### Gerar a ata de arrematação de um lote

1. Na linha do lote, clique em **Ata**.
2. O documento de formalização (ata) é gerado para aquele lote.

### Baixar o recibo de comissão do comitente

1. Na linha do lote, clique em **Comissão**.
2. O recibo de comissão do comitente é baixado em PDF.

### Formalizar um lote (enviar documento por e-mail)

1. Na linha do lote, clique em **Formalizar**.
2. Abre uma janela com a **mensagem do e-mail** (o template já vem preenchido) e os **destinatários** (os e-mails cadastrados do arrematante).
3. Ajuste o texto se quiser. Para incluir outro destinatário, digite o e-mail no campo e pressione **Enter** (ou clique em **Adicionar**); para remover, clique no **×** do e-mail.
4. Escolha uma ação:
   - **Registrar e enviar** — envia o documento por e-mail e marca a venda como formalizada.
   - **Marcar como formalizado** — apenas registra a formalização, sem enviar e-mail.
   - **Cancelar** — fecha sem fazer nada.

![Janela de formalização](/img/manual/erp/formalizacao-modal.png)

### Confirmar a formalização pela coluna "Formalizado?"

1. Na coluna **Formalizado?**, marque a caixa da linha.
2. Confirme na mensagem que aparece.
3. A venda passa a constar como formalizada.

> Observação: a formalização só pode ser **marcada** — depois de confirmada, a caixa fica travada (não é possível "desformalizar" por aqui).

### Enviar formalização em massa

1. Marque as caixas das linhas desejadas (ou use **Selecionar todos**).
2. Na barra de seleção, clique em **Enviar formalização**.
3. Confirme a quantidade de arrematantes.
4. O sistema envia o documento para cada arrematante selecionado e mostra quantos foram enviados (e eventuais falhas).

## Dicas e observações

- O botão **Registrar e enviar** fica desabilitado se o arrematante não tiver nenhum e-mail cadastrado — nesse caso, adicione um e-mail manualmente ou use **Marcar como formalizado**.
- Quando você abre o leilão direto na Formalização, o filtro de período começa em **Tudo** (mostra a fila inteira).
- Use o filtro **Para Formalizar** para focar só no que falta oficializar.

## Veja também

- [Fechamento](./fechamento.md)
- [Cobrança](./cobranca.md)
- [Notas Fiscais](./notas.md)
