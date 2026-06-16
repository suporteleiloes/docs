---
title: Formulários
sidebar_position: 2
---

# Formulários

A tela de Formulários lista todos os formulários personalizados do sistema. A partir daqui você cria novos formulários, abre o construtor visual para montar os campos, copia a URL pública e gerencia cada formulário.

## Como acessar

**Configurações** → **Administração** → **Formulários**.

![Formulários](/img/manual/erp/forms.png)

## O que você vê nesta tela

No topo há o botão **Novo formulário** e um campo de busca. Abaixo, os formulários aparecem como cartões. Cada cartão mostra:

| Elemento | O que é |
|---|---|
| Nome | Título do formulário |
| Status | Selo **Ativo** ou **Inativo** |
| Categoria | Categoria à qual o formulário pertence (quando definida) |
| Descrição | Texto explicando para que serve |
| Campos | Quantidade de campos do formulário |
| Tópicos | Quantidade de tópicos (agrupamentos) |
| Respostas | Quantidade de respostas recebidas |

Cada cartão tem quatro ações: **Construtor**, **URL**, **Editar** e **Excluir**.

## O que dá pra fazer aqui

### Criar um formulário

1. Clique em **Novo formulário** (ou em **Criar primeiro**, se a lista estiver vazia).
2. Preencha o **Nome** (obrigatório).
3. Opcionalmente informe o **Código (slug)** — se deixar em branco, o sistema gera automaticamente a partir do nome.
4. Defina o **Status** (Ativo/Inativo), escolha uma **Categoria** e informe a **Ordem** de exibição.
5. Ligue a chave **Público** se o formulário deve ser acessível externamente, sem login.
6. Preencha a **Descrição**.
7. Se o formulário deve gravar dados em um registro específico, preencha **Nome da entidade** e **ID da entidade** na seção *Vínculo com Entidade* (uso técnico).
8. As seções *Folha de Estilo (CSS)* e *Configuração Avançada (JSON)* são opcionais e voltadas a usos avançados.
9. Clique em **Criar formulário**.

![Novo formulário](/img/manual/erp/forms-novo.png)

### Montar os campos no construtor

Clique em **Construtor** no cartão para abrir o editor visual e adicionar/ordenar campos. Veja [Construtor de Formulário](forms-builder-id.md).

### Copiar a URL pública

1. Clique em **URL** no cartão.
2. A URL pública do formulário é copiada para a área de transferência — pronta para colar em um site ou enviar a alguém.

### Editar dados do formulário

1. Clique em **Editar** no cartão.
2. Ajuste nome, categoria, status e demais campos.
3. Clique em **Salvar alterações**.

### Excluir um formulário

1. Clique em **Excluir** no cartão.
2. Confirme. O formulário e todos os seus campos/tópicos são removidos.

## Dicas e observações

- A busca filtra a lista pelo nome do formulário.
- Antes de divulgar a URL pública, monte os campos no **Construtor** e marque o formulário como **Público**.
- A categoria que aparece no formulário vem da aba **Categorias** em Configuração de Formulários.

## Veja também

- [Construtor de Formulário](forms-builder-id.md)
- [Configuração de Formulários](forms-config.md)
