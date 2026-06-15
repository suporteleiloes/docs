---
title: Detalhe do servidor
sidebar_position: 5
---

# Detalhe do servidor

Ficha completa de um servidor de infraestrutura. Aqui você consulta todos os dados do servidor — endpoint, IPs, token e configurações — e pode editá-lo, ativá-lo ou desativá-lo.

> Tela de uso **interno** da equipe Suporte Leilões.

## Como acessar

**Gerência** → **Servidores** → clique (ou duplo clique) sobre um servidor da lista.

![Detalhe do servidor](/img/manual/_interno/gerencia-servidores-id.png)

## O que você vê nesta tela

No topo, o nome do servidor e os botões **Voltar**, **Editar** e **Desativar/Ativar**. Abaixo, o cartão **Dados do Servidor**.

| Campo | O que é |
|---|---|
| ID | Número do servidor. |
| Registro | Data e hora de cadastro. |
| Última modificação | Data e hora da última alteração. |
| Situação | Ativo ou Inativo. |
| Nome | Nome do servidor. |
| Endpoint | URL do servidor (clicável, abre em nova aba). |
| IPs | Lista de IPs do servidor. |
| Token | Token de autenticação do servidor. |
| Descrição | Texto livre descritivo. |
| Configurações | JSON de configuração do servidor, formatado. |

## O que dá pra fazer aqui

### Editar o servidor

1. Clique em **Editar**.
2. Ajuste **Nome** (obrigatório), **Endpoint (URL)**, **IPs** (separados por vírgula), **Situação**, **Token**, **Descrição** e **Configurações (JSON)**.
3. Clique em **Salvar**.

![Editar servidor](/img/manual/_interno/gerencia-servidores-id-editar.png)

### Ativar ou desativar

1. Clique em **Desativar** (se estiver ativo) ou **Ativar** (se estiver inativo).
2. Confirme na janela. Um servidor desativado não será mais utilizado pelo sistema.

### Voltar para a lista

Clique em **Voltar** para retornar à lista de servidores.

## Dicas e observações

- O campo **Configurações** precisa ser um JSON válido; o botão de salvar fica bloqueado enquanto o JSON estiver inválido.
- Não existe exclusão de servidor — apenas desativação.

## Veja também

- [Servidores](gerencia-servidores.md)
- [Detalhe do cliente](console-clientes-id.md)
