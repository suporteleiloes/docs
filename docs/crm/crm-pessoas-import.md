---
title: Importar pessoas (CSV)
sidebar_position: 3
---

# Importar pessoas (CSV)

Esta tela cadastra **várias pessoas de uma vez** a partir de um arquivo CSV — útil para migrar uma base ou subir uma lista grande de contatos. Cada linha do arquivo vira uma pessoa, com detecção automática de duplicados.

## Como acessar

**CRM** → **Pessoas** → **Importar pessoas (CSV)** (rota `/crm/pessoas/import`).

![Importar pessoas (CSV)](/img/manual/crm/crm-pessoas-import.png)

## O que você vê nesta tela

- Um bloco **"Colunas reconhecidas no CSV"** (clique para expandir) com a lista de colunas aceitas.
- Uma **área de upload** onde você arrasta o arquivo ou clica para escolher.
- Depois de importar, um bloco de **Resultado** com os números da operação.

### Colunas reconhecidas no arquivo

A primeira linha do CSV deve conter o cabeçalho com os nomes das colunas. São aceitas (em qualquer ordem):

| Coluna | O que é |
|---|---|
| **nome** | Nome da pessoa (**obrigatório** em cada linha). |
| document | CPF ou CNPJ. |
| email | E-mail. |
| telefone | Telefone. |
| area_code | DDD. |
| status_interno | Status interno da pessoa. |
| origem / origem_ref | Origem do contato e referência da origem. |
| address, number, complement, district, zip, city, state | Endereço (logradouro, número, complemento, bairro, CEP, cidade, estado). |

Colunas extras que não estejam na lista são **ignoradas** sem erro.

## O que dá pra fazer aqui

### Importar um arquivo CSV

1. Prepare o CSV com a **primeira linha de cabeçalho** e a coluna **nome** preenchida em todas as linhas.
2. **Arraste o arquivo** para a área pontilhada **ou** clique em **clique pra escolher** e selecione o `.csv`.
3. Confira o nome e o tamanho do arquivo. Se errou, clique em **Trocar arquivo**.
4. Clique em **Importar** e aguarde o processamento.
5. Veja o **Resultado**.

### Ler o resultado da importação

| Número | Significado |
|---|---|
| **Linhas lidas** | Quantas linhas o sistema processou. |
| **Pessoas criadas** | Quantos cadastros novos foram feitos. |
| **Duplicadas (puladas)** | Linhas que correspondem a alguém já existente (por documento/e-mail) e foram ignoradas. |
| **Erros** | Linhas que não puderam ser importadas. |

Se houver erros, clique em **Mostrar erro(s)** para ver a lista detalhada (linha e motivo).

## Dicas e observações

- Limite de **5.000 linhas** por importação. Para bases maiores, divida em vários arquivos.
- A **anti-duplicidade é automática**: pessoas já cadastradas (mesmo documento ou e-mail) são puladas, não duplicadas.
- **nome** é obrigatório por linha — linhas sem nome entram como erro.
- Salve o arquivo em **CSV** (não em XLSX). Para importar entregas em lote, use a tela de [Entregas](./entrega-itens.md), que aceita CSV e XLSX.

## Veja também

- [Listas de contatos](./crm-listas.md)
- [Edições pendentes](./crm-pessoas-edicoes.md)
