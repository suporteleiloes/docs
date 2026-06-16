---
title: Validade de Documentos
sidebar_position: 5
---

# Validade de Documentos

Esta tela controla a **validade dos documentos** da leiloeira (certidões, alvarás, registros, etc.) — quando foram emitidos, quando vencem e quando você deve pedir a renovação. Cada documento pode ter arquivos anexados e é classificado por **Tipo** e por **Titular** (a pessoa a quem o documento pertence). Ajuda a não deixar nenhum documento importante vencer.

## Como acessar

**Gestão** → **Validade de Documentos**

![Validade de Documentos](/img/manual/erp/validade-documentos.png)

## O que você vê nesta tela

Logo abaixo do título há as abas **Todos / Ativos / Vencidos / Renovados** (a aba selecionada mostra o total). Em seguida, a **busca** (por documento, tipo ou titular) e a lista.

| Coluna | O que é |
|---|---|
| # | Número (identificador) do documento. |
| Documento | Nome do documento, com a validade configurada abaixo. |
| Tipo | Tipo do documento (ver [Tipos](./validade-documentos-tipos.md)). |
| Titular | Pessoa titular do documento (ver [Titulares](./validade-documentos-titulares.md)). |
| Emissão | Data de emissão. |
| Vencimento | Data de vencimento. |
| Próximo Pedido | Data prevista para solicitar a renovação. |
| Status | **Ativo**, **Vencido** ou **Renovado**. |

## O que dá pra fazer aqui

Em cada linha há três ações: **Arquivos** (clipe), **Editar** (lápis) e **Excluir** (lixeira).

### Cadastrar um novo documento

1. Clique em **Novo documento**.
2. Preencha o **Nome do documento** (obrigatório, ex.: "Certidão Negativa Federal").
3. Informe a **Validade** em texto livre (ex.: "30 dias") e o **Status** (Ativo / Vencido / Renovado).
4. Selecione o **Tipo** e o **Titular** (opcionais — veja as telas relacionadas para cadastrá-los).
5. Preencha as datas: **Data de Emissão**, **Data de Vencimento**, **Próximo Pedido** e **Data do Pedido**.
6. (Opcional) Informe a **URL de Renovação** (link do portal onde se renova o documento) e deixe a chave **Ativo** ligada.
7. (Opcional) Escreva **Observações**.
8. Clique em **Criar**.

![Novo documento de validade](/img/manual/erp/validade-documentos-novo.png)

### Editar um documento

1. Clique no ícone de **lápis** na linha.
2. Ajuste os campos.
3. Clique em **Salvar**.

### Gerenciar os arquivos de um documento

1. Clique no ícone de **clipe** (Arquivos) na linha.
2. Na janela, clique em **Adicionar arquivo(s)** e selecione um ou mais arquivos do seu computador.
3. Os arquivos enviados aparecem na lista. Para cada um, você pode **Baixar** (seta para baixo) ou **Excluir** (lixeira).
4. Clique em **Fechar** ao terminar.

![Arquivos do documento](/img/manual/erp/validade-documentos-arquivos.png)

### Excluir um documento

1. Clique no ícone de **lixeira**.
2. Confirme na janela. A remoção é permanente.

## Dicas e observações

- Use as abas **Todos / Ativos / Vencidos / Renovados** para focar nos documentos que precisam de atenção.
- O campo **Validade** é apenas um texto descritivo (ex.: "30 dias", "1 ano"). As datas que valem para os cálculos são **Emissão**, **Vencimento** e **Próximo Pedido**.
- Para padronizar os documentos, cadastre antes os **Tipos** e os **Titulares** nas telas relacionadas.

## Veja também

- [Validade de Documentos · Tipos](./validade-documentos-tipos.md)
- [Validade de Documentos · Titulares](./validade-documentos-titulares.md)
- [Documentos e Templates](./documentos.md)
