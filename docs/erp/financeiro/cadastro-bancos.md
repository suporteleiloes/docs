---
title: Contas Bancárias
sidebar_position: 3
---

# Contas Bancárias

Aqui você cadastra e gerencia as **contas bancárias** da leiloeira (conta corrente, poupança, conta de pagamentos etc.). São essas contas que recebem os lançamentos financeiros, importações de extrato e que compõem o saldo total do caixa.

## Como acessar

**Financeiro** → **Cadastro** → **Bancos** (Contas Bancárias).

![Contas Bancárias](/img/manual/erp/cadastro-bancos.png)

## O que você vê nesta tela

No topo, três indicadores (KPIs) resumem a situação. Abaixo, uma barra de busca e filtro. O corpo da tela mostra cada conta como um **card** clicável.

| Indicador (KPI) | O que é |
|---|---|
| **Saldo total** | Soma dos saldos de todas as contas exibidas. Fica vermelho se negativo. |
| **Contas ativas** | Quantidade de contas ativas, sobre o total exibido. |
| **Bancos distintos** | Quantos bancos diferentes você tem cadastrados. |

| Elemento do card | O que é |
|---|---|
| **Logo + Nome** | Logotipo do banco e o nome/apelido da conta. |
| **Linha de identificação** | Código do banco, agência e conta (ex.: `Bco 001 · Ag 1234 · Cc 56789-0`). |
| **Saldo atual** | Saldo da conta, atualizado pelas movimentações. |
| **Titular** | Pessoa titular vinculada (ou o favorecido em texto livre). |
| **Etiqueta Ativa / Inativa** | Situação da conta. |
| **Ícones de ação** | Botões de **Editar** (lápis) e **Excluir** (lixeira) no canto do card. |

### Filtros

- **Busca:** filtra por banco, agência, conta ou titular.
- **Somente ativas:** quando marcado (padrão), esconde as contas inativas.

## O que dá pra fazer aqui

### Cadastrar uma nova conta

1. Clique em **Nova conta** (canto superior direito).
2. No formulário, preencha **Nome / Apelido** — único campo obrigatório (ex.: "Conta Principal BB").
3. Em **Banco**, selecione a instituição na lista (códigos FEBRABAN; há a opção "Outro / Caixa").
4. Informe **Agência** e **Conta**.
5. (Opcional) **Chave PIX**: CPF, e-mail, telefone ou chave aleatória.
6. (Opcional) **Pessoa Titular**: busque pelo nome para vincular um cadastro de pessoa.
7. (Opcional) **Favorecido** (texto livre) e **Documento (CPF/CNPJ)**, quando o titular não estiver cadastrado como pessoa.
8. (Opcional) **Saldo inicial (R$)** e **Data do saldo inicial**: ponto de partida do saldo da conta. Digite só os números — a vírgula dos centavos é aplicada automaticamente.
9. Deixe o interruptor **Ativo** ligado.
10. Clique em **Criar conta**. A conta passa a aparecer na lista.

![Nova conta bancária](/img/manual/erp/cadastro-bancos-novo.png)

### Editar uma conta

1. Clique sobre o **card** da conta, ou no ícone de **lápis (Editar)**.
2. Ajuste os campos no formulário (mesmos da criação).
3. Clique em **Salvar alterações**.

### Ativar / inativar uma conta

1. Abra a conta para edição.
2. Use o interruptor **Ativo** para ligar ou desligar.
3. Clique em **Salvar alterações**. Contas inativas somem da lista quando **Somente ativas** está marcado.

### Excluir uma conta

1. No card, clique no ícone de **lixeira (Excluir)**.
2. Confirme no aviso **"Excluir conta bancária?"** clicando em **Excluir**.
3. Se a conta tiver lançamentos vinculados, o sistema **bloqueia a exclusão** e mostra **"Banco em uso"** — nesse caso, prefira **inativar** a conta em vez de excluí-la.

### Buscar uma conta

- Digite na barra de busca por banco, agência, conta ou titular. A lista filtra na hora.

## Dicas e observações

- **Nome / Apelido** é o único campo obrigatório; os demais ajudam na identificação e nos relatórios.
- O **Saldo atual** do card é mantido pelas movimentações da conta. Logo após cadastrar, ele reflete o **saldo inicial** informado até as movimentações começarem a recalcular.
- Para o titular, você pode **vincular uma pessoa** cadastrada (recomendado) ou apenas preencher **Favorecido** em texto livre.
- Não consegue excluir uma conta com histórico? Isso é esperado, para preservar os lançamentos. **Inative-a** e ela deixa de atrapalhar a operação do dia a dia.

## Veja também

- [Importar extrato bancário](./importar-extrato.md)
- [Demonstrativo de Resultado (DRE)](./dre.md)
