---
title: Servidores
sidebar_position: 4
---

# Servidores

Lista dos servidores de infraestrutura usados pela Suporte Leilões para hospedar os clientes. Aqui você cadastra, edita, ativa e desativa servidores e consulta seus endpoints, IPs, token e configurações.

> Tela de uso **interno** da equipe Suporte Leilões.

## Como acessar

**Gerência** → **Servidores**.

![Servidores](/img/manual/_interno/gerencia-servidores.png)

## O que você vê nesta tela

Uma barra de busca no topo e a tabela de servidores.

| Coluna | O que é |
|---|---|
| # | Número (ID) do servidor. |
| Servidor | Nome do servidor. |
| URL | Endpoint do servidor. |
| Situação | Ativo ou Inativo. |

## O que dá pra fazer aqui

### Buscar

Digite na barra de busca (por nome ou host) e pressione Enter.

### Cadastrar um novo servidor

1. Clique em **Novo servidor**.
2. Preencha **Nome** (obrigatório) e **Endpoint (URL)** (obrigatório).
3. Opcionalmente informe os **IPs** (separados por vírgula), a **Situação** (Ativo/Inativo), o **Token** e a **Descrição**.
4. Se necessário, preencha **Configurações (JSON)** — o sistema valida se o JSON é válido antes de permitir salvar.
5. Clique em **Criar**.

![Novo servidor](/img/manual/_interno/gerencia-servidores-novo.png)

### Editar um servidor

1. Na linha do servidor, clique no ícone de **lápis** (roxo).
2. Ajuste os campos e clique em **Salvar**.

### Ativar ou desativar um servidor

Não existe exclusão de servidor — em vez disso, ele é **desativado**.

1. Na linha do servidor, clique no ícone de **cadeado** (cadeado fechado = desativar; cadeado aberto = ativar).
2. Confirme na janela. Um servidor desativado não será mais utilizado pelo sistema.

## Dicas e observações

- O campo **Configurações** precisa ser um JSON válido (ex.: `{ "websocket": "wss://..." }`); o botão de salvar fica bloqueado enquanto o JSON estiver inválido.
- Dê **duplo clique** numa linha para abrir o detalhe completo do servidor.

## Veja também

- [Detalhe do servidor](gerencia-servidores-id.md)
- [Detalhe do cliente](console-clientes-id.md)
