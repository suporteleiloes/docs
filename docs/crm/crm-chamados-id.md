---
title: Detalhe do ticket
sidebar_position: 31
---

# Detalhe do ticket

Esta é a tela de atendimento de um ticket específico. Aqui você lê o histórico da conversa com o cliente, responde, muda o status, atribui um responsável e consulta os dados de SLA. É onde o atendimento acontece de fato.

## Como acessar

**CRM** → **Tickets** → clique em qualquer ticket (na lista ou no board). A barra de endereço fica como `/crm/chamados/123`, onde o número é o ID do ticket.

![Detalhe do ticket](/img/manual/crm/crm-chamados-id.png)

## O que você vê nesta tela

No **cabeçalho** ficam: botão de voltar (seta), sinal de prioridade, protocolo, assunto, selo **SLA vencido** (quando aplicável) e a pílula de status atual.

A tela é dividida em duas áreas:

**Coluna central — a conversa**

- A **descrição** original do ticket (quando houver), num bloco de destaque no topo.
- A **thread** (linha do tempo) com as mensagens e eventos do sistema.
- O **campo de resposta** (composer) na parte de baixo.

Cada item da thread pode ser:

| Tipo | O que é |
|---|---|
| Mensagem do cliente | Balão com o nome do cliente e a marca "Cliente". |
| Resposta do atendente | Balão destacado com o nome do atendente e a marca "Atendente". |
| Evento do sistema | Linha discreta em itálico (ex.: mudanças automáticas), com data e hora. |

**Coluna lateral — os atributos**

| Cartão | O que mostra |
|---|---|
| Status | Botões para trocar a situação do ticket. |
| Atendente | Responsável atual, com botão **Atribuir** / **Reatribuir**. |
| Cliente | Pessoa vinculada ao ticket (ou "Não vinculado"). |
| Canal | Por onde o contato chegou (e-mail, chat, etc.). |
| SLA | Datas: Aberto em, Prazo, 1ª resposta e Resolvido. O prazo vencido aparece em vermelho. |
| Tags | Etiquetas do ticket, quando houver. |

## O que dá pra fazer aqui

### Responder ao cliente

1. No campo de resposta (parte de baixo da conversa), escolha a aba:
   - **Resposta do atendente** — para registrar o que você respondeu ao cliente.
   - **Mensagem do cliente** — para registrar manualmente algo que o cliente disse por outro meio.
2. Escreva o texto.
3. Clique em **Enviar** (ou use o atalho **Ctrl + Enter**).
4. A mensagem entra na thread e a conversa rola automaticamente para o fim.

> Se o ticket estiver **fechado**, o campo de resposta some e aparece um aviso. Reabra o ticket mudando o status para voltar a responder.

### Mudar o status

1. No cartão **Status** (coluna lateral), clique no botão da situação desejada: Aberto, Em atendimento, Aguardando, Resolvido ou Fechado.
2. O status é atualizado na hora e refletido também na lista de tickets.

### Atribuir ou reatribuir um responsável

1. No cartão **Atendente**, clique em **Atribuir** (ou **Reatribuir**, se já houver um).
2. Na janela, busque o usuário pelo nome.
3. Clique em **Atribuir**. O responsável passa a aparecer no ticket e na fila.

![Atribuir atendente](/img/manual/crm/crm-chamados-id-atribuir.png)

### Analisar o sentimento de uma mensagem (IA)

1. Em uma mensagem da thread, clique em **Analisar sentimento**.
2. A IA retorna o **tom** (Positivo, Neutro, Atenção ou Crítico), o nível de **urgência** e algumas **palavras-chave** detectadas.
3. Se quiser refazer a leitura, clique em **Reanalisar**.

Esse recurso ajuda a identificar rapidamente clientes irritados ou casos urgentes.

## Dicas e observações

- **Ctrl + Enter** envia a resposta sem precisar tirar a mão do teclado.
- O bloco de **SLA** é a referência para saber se o atendimento está dentro do prazo — fique atento ao "Prazo" em vermelho.
- A análise de sentimento depende da IA estar disponível; se falhar, você verá um aviso e pode tentar de novo.

## Veja também

- [Tickets (chamados)](crm-chamados.md)
- [Atendimentos / SLA](crm-atendimentos-sla.md)
- [Centro de notificações](crm-notificacoes.md)
