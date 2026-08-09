---
title: Add-ons do bot
sidebar_position: 9
---

# Add-ons do bot

Os **add-ons** dão **capacidades extras** ao bot de atendimento — no estilo de "plugins/MCP". Cada add-on acrescenta uma ou mais **ferramentas** que o bot pode usar durante uma conversa (ex.: consultar um CEP, um rastreio, uma API própria da empresa). Você configura tudo **sem escrever código**.

## Como acessar

**ERP** → **Configurações** → **Integrações** → **Add-ons do bot**.

![Lista de add-ons do bot](/img/manual/crm/bot-addons-lista.jpg)

A lista mostra, por add-on: o **nome**, o **tipo**, o **escopo**, quantas **atribuições** ele tem (grupos/números onde está ativo) e se está **ativo**.

## O que é um add-on

Pense no bot como um atendente que, por padrão, sabe conversar e consultar o que já existe no sistema. Um **add-on** ensina uma **habilidade nova** a esse atendente. Quando um cliente pergunta algo que a habilidade cobre, o bot **usa a ferramenta** do add-on, pega o resultado e responde naturalmente.

### Tipos de add-on

| Tipo | O que faz |
|---|---|
| **HTTP (integração externa)** | Chama uma **API externa** (ou interna) que você configura: URL, método, cabeçalhos e parâmetros. **Sem código.** É o tipo mais usado. |
| **ia-worker (operação)** | Consulta a **operação/infraestrutura** via agente. **Exclusivo da gerência** (não aparece para leiloeiros). |
| **Nativo** | Ferramenta **embutida** no sistema (feita por código pela nossa equipe). |

### Escopo: global × gerência

- **Global (ERP + leiloeiros):** o add-on vale para os leiloeiros também. Use para habilidades úteis a qualquer negócio (consultar CEP, rastreio, etc.).
- **Gerência (exclusivo nosso):** só funciona no ambiente da gerência. Use para coisas internas da nossa operação.

:::info Um add-on só age onde é atribuído
Depois de criado, o add-on fica **inerte** até você **atribuí-lo** a um ou mais **grupos/números** de WhatsApp. É a atribuição que "liga" a habilidade naquele canal.
:::

## Criar um add-on HTTP (passo a passo)

Clique em **Novo add-on**. Vamos usar um exemplo real: um add-on que **consulta um CEP** pela API pública [ViaCEP](https://viacep.com.br).

![Novo add-on HTTP — Consulta CEP](/img/manual/crm/bot-addons-http.jpg)

1. **Nome:** um rótulo para você (ex.: `Consulta CEP`).
2. **Tipo:** **HTTP (integração externa)**.
3. **Escopo:** **Global** (serve para qualquer leiloeiro).
4. **Ferramenta (o que o bot enxerga):**
   - **Nome da ferramenta:** um identificador técnico, em minúsculas com `_` (ex.: `consultar_cep`). É por esse nome que o bot "chama" a habilidade.
   - **Descrição (quando o bot deve usar):** explique em linguagem clara **quando** usar — o bot decide com base nisso (ex.: *"Consulta o endereço (rua, bairro, cidade, UF) a partir de um CEP usando a API pública ViaCEP."*).
5. **Chamada HTTP:**
   - **URL:** o endereço da API. Use **`{param}`** para interpolar valores que o bot preenche. Ex.: `https://viacep.com.br/ws/{cep}/json/`
   - **Método:** `GET` (para consultas). `POST`/`PUT`/`PATCH` quando for enviar dados.
   - **Cabeçalhos:** pares chave/valor (ex.: `Authorization: Bearer ...`) — para APIs que exigem autenticação. No exemplo do CEP não é preciso.
   - **Parâmetros (o bot preenche):** liste cada valor que a ferramenta aceita — **nome** (ex.: `cep`), **tipo** (string/number/boolean), se é **obrigatório** e uma **descrição**. O nome do parâmetro é o que casa com o `{param}` da URL.
   - **Body (JSON, opcional):** para `POST`/`PUT`, o corpo da requisição, também com `{param}` (ex.: `{"codigo": "{codigo}"}`).
6. Clique em **Salvar**.

:::tip Interpolação
Onde você escreve `{cep}` na URL (ou no body), o bot substitui pelo valor do **parâmetro** de mesmo nome que ele preencheu a partir da conversa.
:::

### Atribuir a grupos/números

Depois de salvar, aparece a seção **Atribuições**. Escolha **Grupo** ou **Número**, selecione qual e clique em **Atribuir**. A partir daí o bot passa a oferecer aquela habilidade **naquele canal**. Remova a atribuição a qualquer momento pelo **✕** na etiqueta.

## Caso de uso completo — "Consulta CEP"

1. Você cria o add-on `Consulta CEP` (HTTP, global) com a ferramenta `consultar_cep`, URL `https://viacep.com.br/ws/{cep}/json/`, parâmetro `cep` (string, obrigatório).
2. Atribui ao **número/grupo** de atendimento.
3. No WhatsApp, o cliente escreve: *"qual o endereço do CEP 01001-000?"*.
4. O bot entende, chama `consultar_cep` com `cep=01001000`, recebe o JSON da ViaCEP e responde: *"Esse CEP é da Praça da Sé, Sé — São Paulo/SP."*

## Regras de negócio

- Um add-on **sem atribuição** não faz nada — precisa estar ligado a um grupo/número.
- Add-ons **HTTP** e **globais** valem para leiloeiros; **ia-worker** e **gerência** são exclusivos da nossa operação.
- O **Body** precisa ser um **JSON válido** — o sistema recusa salvar se estiver malformado.
- **Nome da ferramenta** e **URL** são obrigatórios no tipo HTTP.

## Erros comuns

- **"body_template não é um JSON válido"** — revise o JSON do campo Body (aspas, vírgulas).
- **O bot não usa a ferramenta** — a **descrição** está vaga; deixe claro *quando* usar. Confira também se o add-on está **ativo** e **atribuído** ao canal certo.
- **A API externa recusa a chamada** — falta um **cabeçalho** de autenticação, ou a URL/parâmetro estão errados.

## Veja também

- [WhatsApp — números, provedores e guardrail](./crm-configuracoes-whatsapp.md)
- [Aprovadores do bot](./crm-configuracoes-bot-aprovadores.md)
- [Chatbot](./crm-configuracoes-chatbot.md)
