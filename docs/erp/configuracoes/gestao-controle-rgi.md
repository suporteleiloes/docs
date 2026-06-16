---
title: Controle de RGI
sidebar_position: 1
---

# Controle de RGI

O Controle de RGI registra e acompanha os pedidos de documentos junto aos Cartórios de Registro de Imóveis (CRI). Para cada matrícula você guarda os dados do pedido, anexa os documentos recebidos e marca quando a certidão foi entregue.

## Como acessar

**Gestão** → **Controle de RGI**.

![Controle de RGI](/img/manual/erp/gestao-controle-rgi.png)

## O que você vê nesta tela

No topo há três abas que filtram a lista: **Todos**, **Pendentes** e **Entregues** (a aba ativa mostra a contagem de registros). Logo abaixo, um campo de busca e a tabela de registros.

A busca procura por matrícula, CRI, comarca ou processo. Você pode escolher exibir 20, 50 ou 100 registros por página.

| Coluna | O que é |
|---|---|
| # | Número interno do registro |
| Matrícula | Número da matrícula do imóvel |
| Transcrição | Número da transcrição (registro antigo), quando houver |
| CRI | Cartório de Registro de Imóveis responsável |
| Comarca | Comarca do cartório |
| Processo | Processo judicial vinculado |
| Pedido | Data em que o pedido foi feito |
| Entrega | Data em que o documento foi entregue |
| Status | **Pendente** (aguardando) ou **Entregue** |

Na última coluna de cada linha há três botões: **Arquivos**, **Editar** e **Excluir**.

## O que dá pra fazer aqui

### Cadastrar um novo registro

1. Clique em **Novo registro** (canto superior direito).
2. No topo do formulário, deixe o **Status** em **Pendente** e mantenha a chave **Ativo** ligada.
3. Em **Solicitante**, digite para buscar a pessoa que pediu o documento e selecione-a.
4. Em **Processo**, digite para buscar e vincular o processo judicial (opcional).
5. A **Data do Pedido** já vem preenchida com a data de hoje e não é editável. A **Data da Entrega** também não é editável neste formulário.
6. Preencha a **Matrícula** (campo obrigatório).
7. Preencha **Transcrição**, **CRI**, **Comarca** e **Valor (R$)** conforme tiver os dados.
8. Use **Observações** para anotações livres sobre o pedido.
9. Clique em **Criar**. O registro aparece na lista.

![Novo registro de RGI](/img/manual/erp/gestao-controle-rgi-novo.png)

### Editar um registro

1. Clique no ícone de **lápis (Editar)** na linha desejada.
2. Altere os campos necessários. Para marcar a entrega, mude o **Status** para **Entregue**.
3. Clique em **Salvar**.

### Anexar e baixar documentos

1. Clique no ícone de **clipe (Arquivos)** na linha do registro.
2. Na janela de arquivos, clique em **Adicionar arquivo(s)** e escolha um ou mais arquivos do computador.
3. Os arquivos enviados aparecem em lista, com nome e tamanho.
4. Para baixar, clique no ícone de **download** ao lado do arquivo.
5. Para remover, clique no ícone de **lixeira** e confirme.

![Arquivos do RGI](/img/manual/erp/gestao-controle-rgi-arquivos.png)

### Excluir um registro

1. Clique no ícone de **lixeira (Excluir)** na linha.
2. Confirme na janela. O registro é removido.

## Dicas e observações

- O status tem apenas dois valores: **Pendente** e **Entregue**. Use as abas para encontrar rapidamente o que ainda está em aberto.
- A **Matrícula** é o único campo obrigatório para salvar.
- A **Data do Pedido** é registrada automaticamente na criação e não pode ser alterada por aqui.
- Você pode anexar vários arquivos de uma vez na janela de Arquivos.

## Veja também

- [Importador](configuracoes-importador.md)
