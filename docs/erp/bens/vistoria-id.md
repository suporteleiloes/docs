---
title: Detalhe da vistoria
sidebar_position: 5
---

# Detalhe da vistoria

A tela de **Detalhe da vistoria** mostra tudo sobre uma vistoria específica: os dados do bem e da avaliação, o formulário GRV (preenchível) e as fotos. Daqui você também baixa o laudo em PDF e atualiza o BIN.

## Como acessar

Em **ERP** → **Bens** → **Vistorias**, dê **duplo clique** na linha da vistoria desejada.

![Detalhe da vistoria](/img/manual/erp/vistoria-id.png)

## O que você vê nesta tela

No topo há o botão **Vistorias** (voltar), o título, a etiqueta de **situação** (Solicitado, Iniciada, Concluído ou Cancelado), as abas e os botões **Atualizar BIN** e **Laudo PDF**.

A tela tem três abas:

| Aba | O que mostra |
|---|---|
| Dados | Identificação e avaliação do bem vistoriado. |
| GRV / Formulário | Formulário dinâmico de vistoria (preenchível). |
| Fotos | Galeria de fotos da vistoria. |

### Aba Dados

Dividida em cartões:

- **Identificação:** bem vistoriado (com link para a ficha do bem), placa, chassi, vistoriador, tipo, status, data da vistoria, data agendada e data de criação.
- **Avaliação:** estado geral, quilometragem, se o veículo "liga", se possui chave e manual, combustível e cor.
- **Observações / Laudo** e **Avarias / Itens Verificados**, quando houver, aparecem em cartões adicionais.

### Aba GRV / Formulário

Mostra o(s) formulário(s) dinâmico(s) associado(s) ao tipo da vistoria, organizados por tópicos. Os campos podem ser texto, áreas de texto, listas, opções (rádio), caixas de seleção e datas.

### Aba Fotos

Galeria das fotos da vistoria, com a foto principal destacada.

## O que dá pra fazer aqui

### Preencher o formulário GRV

1. Abra a aba **GRV / Formulário**.
2. Preencha os campos do formulário (enquanto a vistoria não estiver **Concluída** ou **Cancelada**, os campos ficam editáveis).
3. Clique em **Salvar respostas** no cabeçalho do formulário.

> Se a vistoria estiver **cancelada**, a edição do formulário fica desabilitada e um aviso aparece no topo. Se não houver formulário configurado para o tipo de vistoria, a aba mostra uma mensagem orientando a configurar em **Formulários**.

### Adicionar e gerenciar fotos

1. Abra a aba **Fotos**.
2. Clique em **Adicionar fotos** e selecione uma ou mais imagens.
3. Para cada foto você pode **Definir principal** (capa) ou **Remover** (com confirmação).

### Baixar o laudo (PDF)

Clique em **Laudo PDF** no topo. O documento é gerado e baixado automaticamente.

### Atualizar BIN

Clique em **Atualizar BIN** para buscar/atualizar as informações do BIN do veículo. Uma mensagem confirma o sucesso.

> A consulta de BIN depende da integração estar habilitada na sua conta (configuração `vistoria.bin`). Se não estiver, o botão não retorna dados. A busca usa primeiro o **chassi** (campo `chassi-niv` do formulário, ou o chassi do bem) e, na falta dele, a **placa**. Chassi marcado como "oxidado" é ignorado. Fale com o suporte se precisar habilitar a integração.

### Voltar para a lista

Clique em **Vistorias** (canto superior esquerdo) ou no link da ficha do bem, na aba Dados.

## Dicas e observações

- Os campos do GRV só ficam editáveis enquanto a vistoria não está Concluída ou Cancelada; depois disso, ficam em modo somente leitura.
- A foto principal definida aqui é a mesma do bem — ela vale para a ficha do bem. Internamente, definir a foto principal de uma vistoria usa o endpoint de fotos do **bem** (a foto pertence ao bem, não à vistoria).
- As fotos exibidas na aba **Fotos** são as fotos do bem associadas a esta vistoria — não há uma galeria separada só da vistoria.

## Veja também

- [Vistorias](./vistoria.md)
- [A ficha do bem](./bens-id.md)
