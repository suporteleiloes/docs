---
title: Pessoas
sidebar_position: 1
---

# Pessoas

A tela **Pessoas** é a sua agenda central de contatos no ERP. Aqui ficam todos os cadastros da leiloeira — arrematantes, comitentes, parceiros, reboquistas, vistoriadores, leads e operadores internos — em uma lista densa que você filtra, pesquisa e trabalha em massa.

## Como acessar

**Cadastros** → **Pessoas**.

![Tela de Pessoas](/img/manual/erp/pessoas.png)

## O que você vê nesta tela

A tela é dividida em quatro áreas, de cima para baixo:

1. **Resumo (KPIs)** — quatro números grandes lado a lado: **Total**, **Leads**, **VIPs** e **Inadimplentes**.
2. **Abas com contadores** — fatiam a lista por tipo de pessoa. Cada aba mostra quantos registros tem.
3. **Barra de busca e filtros** — pesquisa por texto mais filtros rápidos (tipo de pessoa, tags e letra inicial).
4. **Tabela de pessoas** — a lista em si, com uma linha por pessoa.

### Abas disponíveis

| Aba | Mostra |
|---|---|
| Todas | Todas as pessoas, **exceto** operadores internos |
| Leads | Pessoas ainda no início do funil (status Lead) |
| Arrematantes | Quem tem o papel de arrematante |
| Comitentes | Quem tem o papel de comitente |
| Inativos | Pessoas com status Inativo |

Em **Mais ▾** aparecem abas adicionais:

| Aba | Mostra |
|---|---|
| VIPs | Pessoas com pontuação (score) alta |
| Inadimplentes | Pessoas com pendência financeira |
| Parceiros | Quem tem o papel de parceiro |
| Reboquistas | Quem tem o papel de reboquista |
| Vistoriadores | Quem tem o papel de vistoriador |
| Operadores | Equipe interna com login no ERP (não aparecem na aba "Todas") |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| (caixa de seleção) | Marca a pessoa para ações em massa |
| Nome | Nome da pessoa, com avatar e estrela de VIP quando aplicável |
| Documento | CPF ou CNPJ |
| E-mail | E-mail principal (clicável para abrir o cliente de e-mail) |
| Telefone | Telefone principal (clicável para ligar) |
| Status | Etiqueta colorida: Lead, Novo, Ativo, Inativo ou Inadimplente |
| Papéis | Etiquetas dos papéis da pessoa (Arrematante, Comitente, etc.) |
| Atividade | Há quanto tempo foi a última interação (ex.: "hoje", "há 3 dias") |

## O que dá pra fazer aqui

### Pesquisar uma pessoa

1. Clique na caixa **Digite / para pesquisar** no topo da lista.
2. Digite parte do **nome, e-mail, CPF/CNPJ ou telefone**.
3. A lista filtra automaticamente enquanto você digita.
4. Para limpar, clique no **×** dentro da caixa de busca.

### Filtrar a lista

- **Por tipo**: use os botões **Todas / Físicas / Jurídicas** para mostrar só pessoas físicas ou só jurídicas.
- **Por tags**: clique no campo **Tags…** e escolha uma ou mais tags. A lista passa a mostrar só quem tem essas tags.
- **Por letra inicial**: clique no botão **A–Z** para abrir a barra de letras e clique numa letra para ver só os nomes que começam com ela.

Os filtros se combinam com a aba ativa — eles refinam, não substituem.

### Abrir uma pessoa

Clique em qualquer linha da tabela para abrir a [ficha completa da pessoa](./pessoas-id.md).

### Cadastrar uma nova pessoa

1. Clique em **Nova pessoa** (canto superior direito).
2. Você vai para a tela de [cadastro de pessoa](./pessoas-novo.md).

### Importar pessoas

1. Clique em **Importar**.
2. Siga o assistente de importação (envio de planilha/CSV).

### Exportar a lista

1. Clique em **Exportar**.
2. Escolha o formato: **CSV** ou **Excel (.xlsx)**.
3. O arquivo é baixado respeitando os filtros e a busca aplicados no momento.

### Ações em massa

Marque a caixa de seleção de duas ou mais pessoas (ou use a caixa no cabeçalho para marcar todas as visíveis). Uma barra escura aparece embaixo com as opções:

| Ação | O que faz |
|---|---|
| Adicionar tag | Aplica uma tag às pessoas selecionadas |
| Criar campanha | Leva você ao módulo de campanhas já com as pessoas selecionadas |
| Exportar CSV | Baixa um CSV das pessoas selecionadas |
| Mesclar | Unifica 2+ cadastros em um só (ver abaixo) |
| Excluir | Remove os cadastros selecionados |
| Limpar | Desmarca tudo |

#### Mesclar pessoas duplicadas

1. Marque **duas ou mais** pessoas que são a mesma pessoa duplicada.
2. Na barra inferior, clique em **Mesclar**.
3. Confirme. A **primeira pessoa selecionada é mantida**; as demais têm os dados absorvidos por ela e ficam excluídas.

> Atenção: a mesclagem é **irreversível**. Confirme que são realmente a mesma pessoa antes de mesclar.

#### Excluir pessoas

1. Marque as pessoas que quer remover.
2. Clique em **Excluir** e confirme. A ação **não pode ser desfeita**.

## Dicas e observações

- A aba **Todas** esconde os **Operadores** (equipe interna) de propósito — eles não são clientes. Para vê-los, use **Mais ▾ → Operadores**.
- A estrela amarela ao lado do nome indica uma pessoa **VIP** (pontuação alta de relacionamento).
- A exportação respeita o que está na tela: filtre antes de exportar para gerar uma planilha enxuta.
- Em telas menores, algumas colunas (Papéis, Documento, E-mail) somem automaticamente para caber.

## Veja também

- [Nova pessoa](./pessoas-novo.md)
- [Ficha da pessoa](./pessoas-id.md)
