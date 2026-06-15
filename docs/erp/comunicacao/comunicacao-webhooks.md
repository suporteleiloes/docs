---
title: Webhooks
sidebar_position: 5
---

# Webhooks

Os **webhooks** são endereços (URLs) de sistemas externos que o sistema avisa automaticamente a cada evento, como um e-mail enviado, aberto ou com falha. É a forma de integrar a comunicação da sua leiloeira com outras ferramentas: quando o evento acontece, o sistema envia uma notificação para a URL cadastrada.

## Como acessar

**Plataforma** → **Comunicação** → **Webhooks**

![Webhooks](/img/manual/erp/comunicacao-webhooks.png)

## O que você vê nesta tela

No topo há um aviso explicando que cada webhook recebe uma notificação (um POST) com os dados do evento, e que a URL precisa responder com sucesso (código 2xx) para confirmar o recebimento.

Abaixo ficam o campo de **busca** (por nome ou URL) e a lista de webhooks cadastrados.

| Coluna | O que é |
|---|---|
| **#** | Número do webhook. |
| **Nome** | Nome ou descrição do webhook. |
| **URL** | O endereço que recebe as notificações. |
| **Eventos** | Quais eventos disparam a notificação para este endpoint. |
| **Status** | **Ativo**, **Inativo** ou **Erro**. |

## O que dá pra fazer aqui

- **Novo webhook** (botão no topo): cadastra um novo endpoint.
- **Editar** (ícone de lápis ou duplo clique na linha): altera um webhook.
- **Remover** (ícone de lixeira): exclui o webhook; ele deixa de receber notificações.

### Cadastrar um novo webhook

1. Clique em **Novo webhook**.
2. Preencha **Nome / descrição** (opcional, ex.: "Integração Sistema X").
3. Preencha a **URL do endpoint** (obrigatória) — precisa começar com `http://` ou `https://`.
4. Em **Eventos**, marque os eventos que devem notificar este endpoint. As opções disponíveis são:
   - **E-mail Enviado**
   - **E-mail Aberto**
   - **E-mail com Falha**
   - **E-mail Rejeitado**
   - **Link Clicado**
   - **Leilão Iniciado**
   - **Leilão Encerrado**
   - **Lote Arrematado**
5. Escolha o **Status** (**Ativo** para já começar a receber, ou **Inativo / Cancelado**).
6. Opcional: informe um **Secret** — um token usado para assinar o envio, para o sistema externo verificar a autenticidade.
7. Opcional: em **Headers extras**, informe cabeçalhos adicionais em formato JSON (ex.: `{ "Authorization": "Bearer xyz" }`).
8. Clique em **Cadastrar**.

![Novo webhook](/img/manual/erp/comunicacao-webhooks-novo.png)

### Editar um webhook

1. Dê **duplo clique** na linha ou clique no ícone de **lápis**.
2. Ajuste o que precisar e clique em **Atualizar**.

### Ver o histórico de disparos de um webhook

Disponível ao editar um webhook já cadastrado.

1. Abra o webhook para editar.
2. Clique na aba **Histórico**.
3. A aba lista os disparos feitos para aquele endpoint, com o status (sucesso/erro), o evento, a data e a resposta recebida.

### Remover um webhook

1. Clique no ícone de **lixeira** na linha (ou no botão **Remover** dentro da edição).
2. Confirme na janela. O endpoint deixa de receber notificações.

## Dicas e observações

- A **URL precisa responder com sucesso (2xx)**; caso contrário, o disparo é considerado falho.
- Use o **Secret** quando o sistema externo precisar confirmar que a notificação veio mesmo da sua leiloeira.
- Para pausar um webhook sem apagá-lo, mude o **Status** para **Inativo / Cancelado**.
- Esta funcionalidade depende de suporte no servidor. Se o cadastro de webhooks ainda não estiver habilitado, a tela informa "Funcionalidade disponível em breve" — nesse caso, entre em contato com o suporte.

## Veja também

- [Comunicação (visão geral)](./comunicacao.md)
- [Histórico de Envio de E-mail](./comunicacao-historico.md)
