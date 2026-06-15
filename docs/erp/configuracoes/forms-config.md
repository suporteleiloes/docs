---
title: Configuração de Formulários
sidebar_position: 3
---

# Configuração de Formulários

Esta tela administra os "blocos de montagem" reutilizáveis dos formulários: as **Categorias** para organizá-los, os **Campos** (perguntas) e os **Tópicos** que agrupam visualmente os campos. O que você cadastra aqui fica disponível para ser usado em qualquer formulário.

## Como acessar

**Configurações** → **Formulários** → **Configuração de Formulários**.

![Configuração de Formulários](/img/manual/erp/forms-config.png)

## O que você vê nesta tela

Há três abas no topo. A aba escolhida muda a tabela exibida e o botão de cadastro (o botão muda para *Nova categoria*, *Novo campo* ou *Novo tópico*). Cada aba tem um campo de busca e permite exibir 20, 50 ou 100 itens por página.

### Aba Categorias

| Coluna | O que é |
|---|---|
| # | Número interno |
| Nome | Nome da categoria |
| Descrição | Descrição da categoria |
| Status | **Ativo** ou **Inativo** |

### Aba Campos

| Coluna | O que é |
|---|---|
| # | Número interno |
| Nome | Chave do campo (identificador, ex.: `nomeCompleto`) |
| Rótulo | Texto que o usuário vê (ex.: Nome Completo) |
| Tipo | Tipo do campo (texto, número, data, seleção, etc.) |
| Obrigatório | **Sim** ou **Não** |

### Aba Tópicos

| Coluna | O que é |
|---|---|
| # | Número interno |
| Nome | Nome do tópico |
| Descrição | Descrição do agrupamento |
| Ordem | Posição de exibição |

Em todas as abas, cada linha tem os botões **Editar** e **Excluir**.

## O que dá pra fazer aqui

### Criar/editar uma categoria ou tópico

1. Selecione a aba **Categorias** ou **Tópicos**.
2. Clique em **Nova categoria** / **Novo tópico** (ou no lápis para editar).
3. Preencha o **Nome** (obrigatório) e a **Descrição**.
4. Informe a **Ordem** e o **Status** (Ativo/Inativo).
5. Clique em **Criar** (ou **Salvar**).

### Criar/editar um campo

1. Selecione a aba **Campos** e clique em **Novo campo** (ou no lápis para editar).
2. Em *Identificação*, preencha o **Nome (chave)** — obrigatório, é o identificador interno — e o **Rótulo** que aparece para o usuário. Escolha o **Tipo**, defina se é **Obrigatório**, informe **Placeholder** e **Status**.
3. Em *Apresentação*, ajuste como o campo aparece: **Título em negrito**, **Campo em negrito**, **Somente leitura**, **Posição do título**, **Layout**, **Largura CSS** e **Altura CSS**. Se o layout for "Nova linha", surge o campo **Pré-título de seção**. Use **Texto de ajuda (tip)** para uma dica abaixo do campo.
4. Em *Dados*, informe o **Valor padrão** que virá preenchido.
5. Em *Tópico & Opções*, vincule um **Tópico** (agrupamento visual). Para campos do tipo seleção, rádio, checkbox ou múltipla escolha, preencha **Opções**, uma por linha, no formato `valor=Rótulo`.
6. *Layout Pre / Pos* permite inserir HTML livre antes e depois do campo (uso avançado).
7. *Configurações Avançadas* têm o **Bind** (integração com campos internos) e **Regras condicionais (JSON)** — ambos avançados.
8. Clique em **Criar** (ou **Salvar**).

![Cadastro de campo](/img/manual/erp/forms-config-campo.png)

### Salvar como cópia (duplicar campo)

Ao editar um campo, clique em **Salvar como cópia** no rodapé da janela para criar um novo campo idêntico, sem alterar o original.

### Excluir

1. Clique no ícone de **lixeira** na linha.
2. Confirme. O item é removido permanentemente.

## Dicas e observações

- O **Nome (chave)** do campo é o identificador técnico (sem espaços/acentos); o **Rótulo** é o que o usuário lê.
- O campo **Opções** só aparece para tipos de seleção (select, rádio, checkbox e múltipla escolha).
- Categorias, campos e tópicos criados aqui ficam disponíveis para todos os formulários — monte os campos uma vez e reaproveite.

## Veja também

- [Formulários](forms.md)
- [Construtor de Formulário](forms-builder-id.md)
