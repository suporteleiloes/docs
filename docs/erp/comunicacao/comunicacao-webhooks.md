---
title: Webhooks
sidebar_position: 5
---

# Webhooks

Os **webhooks** são endereços (URLs) de sistemas externos que o sistema avisa automaticamente a cada evento, como um e-mail enviado, aberto ou com falha. É a forma de integrar a comunicação da sua leiloeira com outras ferramentas: quando o evento acontece, o sistema envia uma notificação para a URL cadastrada.

:::warning Recurso em implantação
O **cadastro, a edição e o histórico de disparos** de webhooks ainda estão sendo habilitados no servidor. A tela já existe e permite preencher os campos, mas, enquanto o recurso não estiver ativo, ao tentar salvar você verá a mensagem **"Funcionalidade em implementação / disponível em breve"** — nesse caso, fale com o suporte. A lista, quando ainda indisponível, mostra o aviso *"Funcionalidade disponível em breve"*.
:::

## Pré-requisitos

- Permissão de acesso a webhooks (ACL `config/webhooks`). Sem ela, a tela não carrega a lista. Peça ao administrador da conta.
- Uma URL de endpoint no sistema externo, acessível pela internet e capaz de receber requisições **POST** e responder com código **2xx**.

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
4. Em **Eventos**, marque os eventos que devem notificar este endpoint. As opções oferecidas na tela são:
   - **E-mail Enviado**
   - **E-mail Aberto**
   - **E-mail com Falha**
   - **E-mail Rejeitado**
   - **Link Clicado**
   - **Leilão Iniciado**
   - **Leilão Encerrado**
   - **Lote Arrematado**

   > A confirmar: essa lista de eventos é a oferecida pela tela. A emissão automática de cada evento pelo servidor (especialmente os de leilão e lote) está vinculada à implantação completa do recurso de webhooks.
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

> A remoção não apaga o registro permanentemente: ela muda o **Status** do webhook para **Cancelado**, o que o impede de continuar recebendo notificações. O efeito prático é o mesmo (o endpoint para de ser chamado).

## Regras de negócio

- **Status possíveis:** **Ativo** (recebendo), **Inativo / Cancelado** (pausado) e **Erro** (o sistema registrou falhas ao notificar o endpoint).
- A **URL é obrigatória** e precisa começar com `http://` ou `https://`; o botão **Cadastrar/Atualizar** só habilita quando a URL é válida.
- A **URL precisa responder com sucesso (2xx)**; caso contrário, o disparo é considerado falho e pode levar o webhook ao status **Erro**.
- **Headers extras** devem estar em **JSON válido**; se o texto não for um JSON válido, ele é enviado como está, então confira a formatação.

## Erros comuns

- **"Funcionalidade em implementação / disponível em breve"** ao salvar ou listar: o recurso ainda não está habilitado no servidor para a sua conta. Fale com o suporte.
- **Salvar não habilita o botão:** verifique se a **URL** começa com `http://` ou `https://` e tem mais de alguns caracteres.
- **Endpoint não recebe nada:** confirme que a URL é acessível pela internet (não um endereço interno/localhost) e que responde **2xx**.

## Dicas e observações

- Use o **Secret** quando o sistema externo precisar confirmar que a notificação veio mesmo da sua leiloeira (ele serve para assinar o payload).
- Para pausar um webhook sem apagá-lo, mude o **Status** para **Inativo / Cancelado**.

## Veja também

- [Comunicação (visão geral)](./comunicacao.md)
- [Histórico de Envio de E-mail](./comunicacao-historico.md)
