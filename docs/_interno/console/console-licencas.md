---
title: Licenças
sidebar_position: 14
---

# Licenças

Esta tela controla as **licenças dos clientes** da Suporte Leilões: qual módulo cada cliente contratou, com que limite, até quando vale e em que situação está. Use-a para cadastrar, editar e acompanhar as licenças.

## Como acessar
**Console** → **Cadastro** → **Licenças**

![Licenças](/img/manual/_interno/console-licencas.png)

## O que você vê nesta tela

No topo há a barra de busca e o botão **Nova licença**. O corpo é uma **tabela paginada** de licenças. Você pode buscar por módulo ou cliente e escolher quantas linhas exibir por página (20, 50 ou 100).

| Coluna | O que é |
|---|---|
| # | Número da licença. |
| Cliente | Nome do cliente (ou o ID, quando o nome não está disponível). |
| Módulo | Produto/recurso licenciado (ex.: Leilão Eletrônico). |
| Limite | Limite contratado (ex.: 15 usuários). |
| Validade | Data até quando a licença vale. |
| Status | Situação: Ativa, Expirando, Expirada ou Cancelada. |
| (ações) | Botões de Editar e Excluir. |

## O que dá pra fazer aqui

### Cadastrar uma nova licença
1. Clique em **Nova licença**.
2. Preencha **ID do cliente** (opcional) e **Cliente** (nome).
3. Preencha **Módulo** (obrigatório, ex.: Leilão Eletrônico).
4. Informe o **Limite** (texto livre, ex.: 15 usuários) e a **Validade** (data no formato AAAA-MM-DD).
5. Escolha o **Status** (Ativa, Expirando, Expirada ou Cancelada).
6. Se quiser, escreva uma **Observação**.
7. Clique em **Criar**. Aparece a confirmação "Licença salva".

O botão de salvar fica desabilitado enquanto o **Módulo** estiver vazio.

### Editar uma licença
1. Dê um **duplo clique** na linha, ou clique no ícone de **lápis** (Editar) na coluna de ações.
2. Ajuste os campos no modal.
3. Clique em **Salvar**.

### Excluir uma licença
1. Clique no ícone de **lixeira** (Excluir) na linha.
2. Confirme na janela de confirmação. Atenção: a exclusão **não pode ser desfeita**.

## Dicas e observações
- Tela exclusiva de **gerência** (Console).
- O campo **Módulo** é o único obrigatório do cadastro.
- A **Validade** deve ser informada no formato AAAA-MM-DD.
- O **Status** é informado manualmente no cadastro/edição.

## Veja também
- [Notas Fiscais](console-notas-fiscais.md)
- [Colaboradores](console-colaboradores.md)
