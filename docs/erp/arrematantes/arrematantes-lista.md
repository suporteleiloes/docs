---
title: Gestão de Arrematantes
sidebar_position: 1
---

# Gestão de Arrematantes

Esta é a tela central do módulo de Arrematantes. Aqui você lista, busca, filtra, cadastra, edita e exclui os arrematantes (as pessoas físicas e jurídicas que participam dos seus leilões), além de acompanhar a situação de cadastro de cada um.

## Como acessar

**Arrematantes** → **Lista** (rota `/arrematantes/lista`).

A partir do topo desta tela você também chega rapidamente às telas de **Aprovação**, **Habilitação** e **Exportar**.

![Gestão de Arrematantes](/img/manual/erp/arrematantes-lista.png)

## O que você vê nesta tela

No topo há quatro indicadores rápidos (KPIs): **Cadastros hoje**, **Cadastros esta semana**, **Para analisar** e **Pendentes**.

Logo abaixo ficam as **abas** que filtram a lista por situação do cadastro, a **barra de busca** com filtros e a **tabela** de arrematantes.

### Abas (situação do cadastro)

| Aba | O que mostra |
|---|---|
| Todos | Todos os arrematantes, em qualquer situação |
| Pendentes | Cadastros aguardando alguma ação |
| Em análise | Cadastros em processo de análise |
| Aprovados | Cadastros já aprovados (podem participar) |
| Reprovados | Cadastros reprovados |
| Bloqueados | Cadastros bloqueados |

A aba ativa mostra ao lado o total de registros encontrados.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número de identificação (ID) do arrematante |
| Arrematante | Foto, nome e tipo (Pessoa Física ou Pessoa Jurídica) |
| Apelido | Apelido/usuário do arrematante, quando houver |
| CPF/CNPJ | Documento do arrematante |
| Compras | Quantidade de compras e, abaixo, o valor total comprado |
| Lances | Quantidade de lances dados |
| Cadastro | Data e hora em que o cadastro foi criado |
| Situação | Selo colorido com o status (Pendente, Aprovado, etc.) |

## O que dá pra fazer aqui

### Buscar e filtrar

- **Busca inteligente**: digite na barra de busca por nome, CPF/CNPJ ou e-mail.
- **Tipo de pessoa**: selecione Pessoa Física, Pessoa Jurídica ou Qualquer.
- **Status** (só na aba "Todos"): filtra por uma situação específica.
- **Mais filtros**: abre um painel com filtros avançados (veja abaixo).

#### Filtros avançados ("Mais filtros")

1. Clique em **Mais filtros**.
2. Preencha os campos desejados: **Documento (CPF/CNPJ)**, **ID**, **UF**, **Cidade**, período de cadastro (**de** / **até**) e/ou um ou mais **Status** (incluindo Inativo).
3. Clique em **Aplicar**. Os filtros viram "chips" abaixo da busca.
4. Para remover um filtro, clique no **x** do chip; para limpar todos, use **Limpar todos** ou **Limpar**.

### Cadastrar um novo arrematante

1. Clique em **Novo arrematante** (ou use o atalho **Shift+N**).
2. Preencha os dados na janela que abre (dados pessoais, documento, contato, endereço).
3. Salve. O novo arrematante aparece na lista.

### Editar um arrematante

- Clique no ícone de **lápis** na linha, ou dê **duplo clique** na linha.
- A janela do arrematante abre para edição.

### Excluir um arrematante

1. Clique no ícone de **lixeira** na linha.
2. Confirme na caixa de aviso. **Atenção:** a exclusão é irreversível — todos os dados do arrematante são perdidos.

### Ações em massa

Marque as caixas de seleção das linhas desejadas. Aparece uma barra de ações em massa:

- **Exportar**: baixa os selecionados em um arquivo CSV.
- **Excluir**: remove todos os selecionados de uma vez (irreversível).

## Dicas e observações

- **Atalhos de teclado**: **Shift+N** abre o cadastro de novo arrematante; **Shift+Enter** foca a busca; **Ctrl+Shift+R** limpa todos os filtros.
- O total na aba ativa reflete os filtros aplicados no momento.
- **Permissão necessária**: acesso ao módulo de Arrematantes (perfil com `earrematante/l`).
- Para exportar a base completa com escolha de colunas e mais filtros, use a tela **Exportar Base**.

## Veja também

- [Aprovação de Cadastros](./arrematantes-aprovacao.md)
- [Análises Cadastrais](./arrematantes-analises.md)
- [Habilitação em Leilões](./arrematantes-habilitacao.md)
- [Exportar Base](./arrematantes-exportar.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
