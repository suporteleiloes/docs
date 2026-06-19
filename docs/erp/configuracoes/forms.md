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
| Status | Selo **Ativo** ou **Inativo** (ver observação abaixo — este campo ainda não é gravado pelo sistema) |
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
3. Opcionalmente informe o **Código (slug)** — se deixar em branco, o sistema gera automaticamente a partir do nome. O slug entra na URL pública do formulário, então use algo curto e sem acentos.
4. Escolha uma **Categoria**.
5. Preencha a **Descrição**.
6. Se o formulário deve gravar dados em um registro específico, preencha **Nome da entidade** e **ID da entidade** na seção *Vínculo com Entidade* (uso técnico).
7. As seções *Folha de Estilo (CSS)* e *Configuração Avançada (JSON)* são opcionais e voltadas a usos avançados.
8. Clique em **Criar formulário**.

![Novo formulário](/img/manual/erp/forms-novo.png)

> **Campos que a tela mostra mas o sistema ainda não grava.** O formulário de cadastro exibe as opções **Status (Ativo/Inativo)**, **Ordem** e a chave **Público**, porém hoje esses três valores **não são salvos** pelo sistema — ao reabrir o formulário, eles voltam ao padrão. Na prática:
> - **Não dá para "desativar" um formulário** por essa chave; todo formulário criado fica disponível.
> - **A ordem de exibição não é controlada** por esse campo.
> - **A URL pública funciona independente da chave Público** — qualquer formulário pode ser aberto pela URL gerada (ver "Copiar a URL pública"). Trate todo formulário como potencialmente acessível e não coloque nele perguntas sensíveis sem necessidade.
>
> *> A confirmar com Tiago: persistência de Status/Ordem/Público no formulário (campos existem na tela e no envio, mas a entidade da API não os armazena).*

### Montar os campos no construtor

Clique em **Construtor** no cartão para abrir o editor visual e adicionar/ordenar campos. Veja [Construtor de Formulário](forms-builder-id.md).

### Copiar a URL pública

1. Clique em **URL** no cartão.
2. A URL pública do formulário é copiada para a área de transferência — pronta para colar em um site ou enviar a alguém. O endereço segue o padrão `/form/<código>` (o código é o slug definido no cadastro).

### Editar dados do formulário

1. Clique em **Editar** no cartão.
2. Ajuste nome, categoria, descrição e demais campos.
3. Clique em **Salvar alterações**.

### Excluir um formulário

1. Clique em **Excluir** no cartão.
2. Confirme na janela.

> **Atenção.** A exclusão de formulários ainda **não está disponível no sistema**: ao confirmar, o sistema tenta apagar, mas a operação falha no servidor e o formulário **continua existindo** (pode ser preciso recarregar a página para vê-lo de novo na lista). Para remover um formulário de fato, fale com o suporte. Excluir **campos** e **tópicos** individuais pelo Construtor funciona normalmente.
>
> *> A confirmar com Tiago: rota de exclusão de formulário (`DELETE /api/forms/{id}`) não existe na API — o front a chama mesmo assim.*

## Dicas e observações

- A busca filtra a lista pelo nome do formulário.
- Antes de divulgar a URL pública, monte os campos no **Construtor**. Lembre-se de que a URL funciona para qualquer formulário, independentemente da chave **Público** (ver a observação na criação).
- A categoria que aparece no formulário vem da aba **Categorias** em Configuração de Formulários.

## Veja também

- [Construtor de Formulário](forms-builder-id.md)
- [Configuração de Formulários](forms-config.md)
