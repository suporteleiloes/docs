---
title: Classificações de Leilão
sidebar_position: 2
---

# Classificações de Leilão

Uma **classificação de leilão** é um modelo de configuração que define como um leilão se comporta: se usa robô (controle automático), se tem cronômetro, regras de parcelamento, sublote, direito de preferência e qual auditório usar por padrão. Ao criar um leilão dessa classificação, essas definições já vêm aplicadas, poupando você de configurar tudo de novo a cada pregão.

## Como acessar

**Sistema** → **Cadastros** → **Classificações de Leilão** (na barra lateral, seção Comercial).

![Classificações de Leilão](/img/manual/erp/cadastros-classificacoes-leilao.png)

## O que você vê nesta tela

No topo há um botão **Nova** e um campo **Buscar...**. A área principal é a lista das classificações cadastradas.

| Coluna | O que é |
|---|---|
| ID | Número de identificação da classificação |
| Nome | Nome da classificação |
| Robô | **Automático** (controle automático ligado) ou **Manual** |
| Situação | **Ativo** ou **Inativo** |
| (ações) | Botões de editar e excluir |

## O que dá pra fazer aqui

### Criar uma nova classificação

1. Clique em **Nova** (canto superior direito).
2. Preencha o **Nome** (obrigatório).
3. Ajuste as definições do leilão (ver detalhamento abaixo).
4. Deixe a chave **Ativo** ligada para a classificação ficar disponível.
5. Clique em **Salvar**.

![Nova classificação](/img/manual/erp/cadastros-classificacoes-leilao-novo.png)

### Editar uma classificação

1. Clique no ícone de **lápis** na linha — ou dê **duplo clique** na linha.
2. Ajuste os campos.
3. Clique em **Salvar**.

### Excluir uma classificação

1. Clique no ícone de **lixeira** na linha.
2. Confirme na janela que aparece. A remoção é definitiva.

## Campos do formulário

O formulário é dividido em duas seções.

### Definição de informações para leilão

| Campo | O que faz |
|---|---|
| Habilitar robô (controle automático) | Liga o controle automático do pregão (o robô conduz a venda) |
| Fechamento simultâneo | Permite o fechamento simultâneo dos lotes |
| Habilitar cronômetro | Ativa o cronômetro. Fica indisponível quando o robô está ligado |
| Cronômetro sempre ativo | Mantém o cronômetro sempre rodando |
| Lances automáticos | Permite que arrematantes programem lances automáticos |
| Lances antecipados | Permite lances antes do início do pregão |
| Cronômetro (s) | Tempo do cronômetro do pregão, em segundos |
| Tipo do cronômetro | **Renovar** (reinicia a cada lance) ou **Incremental** |
| Intervalo entre lotes (s) | Tempo de intervalo entre um lote e outro, em segundos |
| Intervalo primeiro lote (s) | Tempo de espera antes do primeiro lote, em segundos |
| Tipo do auditório | Layout padrão do auditório: **Lote a Lote v1**, **Lote a Lote vBlack**, **Cards Lado a Lado v1** ou **Cards Lado a Lado v2** |
| Permitir escolha do auditório | Deixa o arrematante escolher o layout do auditório |

### Parcelamento e lances

| Campo | O que faz |
|---|---|
| Parcelamento | **Sim** ou **Não** — habilita o parcelamento da arrematação |
| Máximo de parcelas | Quantidade máxima de parcelas permitidas |
| Entrada mínima (%) | Percentual mínimo de entrada |
| Permitir sublote | **Sim** ou **Não** |
| Direito de preferência | **Sim** ou **Não** |

No fim do formulário fica a chave **Ativo**, que controla se a classificação fica disponível para uso.

## Dicas e observações

- O **Nome** é obrigatório; o botão **Salvar** fica desabilitado enquanto ele estiver vazio.
- Quando o **robô (controle automático)** está ligado, o campo **Habilitar cronômetro** fica indisponível — o robô conduz o tempo do pregão.
- A coluna **Robô** na lista mostra de relance se a classificação usa controle **Automático** ou **Manual**.
- **Templates de documento** e **contas de cobrança** podem fazer parte de uma classificação criada no sistema antigo. Esta tela **preserva** essas configurações ao salvar, mas a edição delas ainda não está disponível aqui — uma nota no formulário lembra disso.
- Prefira **desativar** (chave Ativo) em vez de excluir uma classificação que já tenha sido usada em leilões.

## Veja também

- [Cadastros (Tipos)](./cadastros-tipos.md)
