---
title: Detalhe da assinatura
sidebar_position: 2
---

# Detalhe da assinatura

A tela de **Detalhe da assinatura** mostra tudo sobre uma cobrança recorrente específica: dados do cliente, valor, periodicidade, datas e o histórico de reajustes. É também daqui que você gerencia o ciclo de vida da assinatura — suspender, reativar, reajustar ou cancelar.

## Como acessar

**ERP** → **Financeiro** → **Assinaturas** → clique em qualquer linha da lista.

![Detalhe da assinatura](/img/manual/erp/assinaturas-id.png)

## O que você vê nesta tela

A página tem dois blocos: um **Resumo** no topo e o **Histórico de reajustes** abaixo. No cabeçalho aparece o nome do cliente e um botão **Voltar** para retornar à lista.

### Resumo

No alto do resumo você vê a inicial do cliente, o nome, a etiqueta de **status** (Ativa, Suspensa, Cancelada ou Inadimplente) e a referência, quando houver. À direita ficam os botões de ação, que mudam conforme o status.

| Campo | O que é |
|---|---|
| Valor | Valor cobrado a cada período. |
| Periodicidade | Frequência da cobrança: Mensal, Trimestral, Semestral ou Anual. |
| Próximo vencimento | Data da próxima cobrança a ser gerada. |
| Plano | Nome do plano contratado, ou "—" se for valor avulso. |
| Produto | Produto associado à assinatura, quando houver. |
| Início | Data em que a assinatura começou. |
| Término | Data prevista de término, quando definida. |
| Cancelada em | Data do cancelamento (aparece só em assinaturas canceladas). |
| Cobrança automática | "Sim" se o sistema gera a cobrança sozinho a cada vencimento. |
| Pré-pago | "Sim" se a cobrança é feita antes do período de uso. |
| Descrição | Anotações livres sobre a assinatura (aparece só se houver texto). |

### Histórico de reajustes

Tabela com todas as mudanças de valor já aplicadas a esta assinatura.

| Coluna | O que é |
|---|---|
| Data | Quando o reajuste foi feito. |
| De → Para | Valor anterior e o novo valor. |
| % | Variação percentual entre os dois valores. |
| Motivo | Justificativa registrada no reajuste. |
| Usuário | Quem fez o reajuste. |

Se nenhum reajuste foi feito, aparece "Nenhum reajuste registrado.".

## O que dá pra fazer aqui

Os botões disponíveis dependem do status atual da assinatura:

- **Assinatura ativa**: Suspender, Reajustar e Cancelar.
- **Assinatura suspensa**: Reativar e Cancelar.
- **Assinatura cancelada ou inadimplente**: nenhum botão de ação (a cancelada já encerrou seu ciclo).

### Suspender uma assinatura

1. Clique em **Suspender**.
2. Na janela que abre, digite o **Motivo da suspensão** (obrigatório).
3. Confirme. A assinatura passa para o status **Suspensa** e a geração de cobrança fica pausada.

### Reativar uma assinatura

1. Com a assinatura suspensa, clique em **Reativar**.
2. Confirme na pergunta "Reativar assinatura?". A cobrança volta a ser gerada normalmente e o status retorna para **Ativa**.

### Reajustar o valor

1. Clique em **Reajustar**.
2. Na janela, informe o **Novo valor** (obrigatório, maior que zero). O campo já vem preenchido com o valor atual.
3. (Opcional) Escreva o **Motivo** do reajuste, por exemplo "reajuste anual".
4. Clique em **Reajustar**. O novo valor passa a valer e a mudança é registrada no Histórico de reajustes.

![Reajustar valor](/img/manual/erp/assinaturas-id-reajuste.png)

### Cancelar uma assinatura

1. Clique em **Cancelar**.
2. Digite o **Motivo do cancelamento** (obrigatório).
3. Confirme. A assinatura passa para **Cancelada** e deixa de gerar cobranças. A data do cancelamento fica registrada no resumo.

### Editar dados da assinatura

A edição de dados (descrição, automatizar cobrança, lançar dias antes e próximo vencimento) é feita pelo mesmo formulário usado no cadastro. Campos como cliente, plano, valor, periodicidade, data de início, referência e pré-pago **não** podem ser alterados depois de criados — para mudar o valor, use **Reajustar**.

## Dicas e observações

- **Reajustar é a forma correta de mudar o valor** de uma assinatura ativa: o valor antigo, o novo, o percentual e o motivo ficam guardados no histórico, dando rastreabilidade.
- Suspender e cancelar **exigem um motivo** — ele fica registrado e ajuda a entender o histórico da conta depois.
- Cancelar é definitivo: não há botão para "descancelar". Se a intenção é apenas pausar temporariamente, use **Suspender**.
- As ações desta tela fazem parte do módulo Financeiro; sua disponibilidade depende das permissões do seu perfil de usuário.

## Veja também

- [Assinaturas (lista)](./assinaturas.md)
