---
title: Gestão de Arrematantes
sidebar_position: 1
---

# Gestão de Arrematantes

Esta é a tela central do módulo de Arrematantes. Aqui você lista, busca, filtra, cadastra, edita e exclui os arrematantes (as pessoas físicas e jurídicas que participam dos seus leilões), além de acompanhar a situação de cadastro de cada um.

## Pré-requisitos

- Ter permissão de acesso ao módulo de Arrematantes (perfil com `earrematante/l`). Sem ela, o item de menu não aparece e a tela não carrega.
- O indicador **Pendentes** (e o contador do botão **Aprovação**) usa uma permissão adicional de aprovação. Se o seu perfil não tiver essa permissão, esse número fica em branco — o restante da tela funciona normalmente.

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

A aba ativa mostra ao lado o total de registros encontrados. A lista vem **ordenada do cadastro mais recente para o mais antigo** (por ID, decrescente).

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
2. Preencha os campos desejados: **Documento (CPF/CNPJ)**, **ID**, **UF**, **Cidade**, período de cadastro (**Cadastro — de** / **Cadastro — até**) e/ou um ou mais **Status** (Aprovado, Pendente, Em análise, Reprovado, Bloqueado, Inativo).
3. Clique em **Aplicar**. Os filtros viram "chips" abaixo da busca.
4. Para remover um filtro, clique no **x** do chip; para limpar todos, use **Limpar todos** ou **Limpar**.

Observações importantes sobre os filtros avançados:

- **Período de cadastro**: o filtro só é aplicado quando **as duas datas** (de **e** até) estão preenchidas. Preencher só uma delas não restringe a lista.
- **Documento** e **ID** funcionam por correspondência exata/parcial direto na base.
- **UF** e **Cidade**: hoje a localização é considerada principalmente pela **busca inteligente** (digitar a cidade ou UF na barra de busca). Os campos UF/Cidade do painel avançado podem não restringir a lista por conta própria em todos os cadastros. Em caso de dúvida, prefira a barra de busca para localizar por cidade/UF.
  > A confirmar: comportamento exato dos campos UF/Cidade do painel avançado no backend atual.
- **Status (vários)**: a seleção de múltiplos status no painel avançado funciona em conjunto com a aba e o seletor de Status. Para um resultado previsível por situação, prefira usar as **abas** no topo da lista.
  > A confirmar: aplicação de seleção de múltiplos status simultâneos na aba "Todos".

### Cadastrar um novo arrematante

1. Clique em **Novo arrematante** (ou use o atalho **Shift+N**).
2. Preencha os dados na janela que abre (dados pessoais, documento, contato, endereço).
3. Salve. O novo arrematante aparece na lista.

### Editar um arrematante

- Clique no ícone de **lápis** na linha, ou dê **duplo clique** na linha.
- A janela do arrematante abre para edição (com as abas de Dados, Contato, Documentos, Financeiro, Habilitações, etc.).
- A janela pode ser aberta direto por link: a URL passa a conter `?open=<id>`, que é compartilhável — quem abrir esse link cai direto na janela daquele arrematante. Ver [Detalhe do Arrematante](./arrematantes-id-detalhe.md).

### Excluir um arrematante

1. Clique no ícone de **lixeira** na linha.
2. Confirme na caixa de aviso. **Atenção:** a exclusão é irreversível — todos os dados do arrematante são perdidos.

### Ações em massa

Marque as caixas de seleção das linhas desejadas. Aparece uma barra de ações em massa:

- **Exportar**: baixa os selecionados em um arquivo CSV (colunas: ID, Nome, Documento, Apelido, Status). Esta exportação rápida usa apenas as linhas **selecionadas na tela**. Para exportar toda a base com escolha de colunas, use a tela [Exportar Base](./arrematantes-exportar.md).
- **Excluir**: remove todos os selecionados de uma vez (irreversível).

### Paginação

No rodapé da tabela você escolhe quantos registros aparecem por página: **20**, **50** ou **100**. Trocar a quantidade volta para a primeira página.

## Erros comuns

- **"Não consigo excluir um arrematante."** A exclusão pode ser bloqueada quando o arrematante tem vínculos (lances, compras, habilitações). Nesse caso aparece uma mensagem de erro no rodapé. Avalie se o caso é de **bloquear** o cadastro em vez de excluir.
- **Excluí sem querer.** A exclusão é **irreversível** — não há lixeira para restaurar. Confira o nome no aviso de confirmação antes de confirmar.
- **"Filtrei por cidade/UF e não restringiu."** Use a **busca inteligente** (digite a cidade/UF na barra de busca) para localizar por localização de forma confiável (ver observações em "Filtros avançados").
- **"O período de cadastro não filtrou."** Preencha **as duas datas** (de e até); só uma não aplica o filtro.
- **"O número de Pendentes está vazio."** Falta a permissão de aprovação no seu perfil; peça ao administrador. O restante da tela continua funcionando.

## Dicas e observações

- **Atalhos de teclado**: **Shift+N** abre o cadastro de novo arrematante; **Shift+Enter** foca a busca; **Ctrl+Shift+R** limpa todos os filtros.
- O total na aba ativa reflete os filtros aplicados no momento.
- Para exportar a base completa com escolha de colunas e mais filtros, use a tela [Exportar Base](./arrematantes-exportar.md).

## Veja também

- [Aprovação de Cadastros](./arrematantes-aprovacao.md)
- [Análises Cadastrais](./arrematantes-analises.md)
- [Habilitação em Leilões](./arrematantes-habilitacao.md)
- [Exportar Base](./arrematantes-exportar.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
