---
title: Participantes
sidebar_position: 3
---

# Participantes

Lista de todos os clientes que aderiram ao programa, com saldo, nível e situação. Pela ficha do participante você vê o extrato de pontos, faz **ajustes manuais**, registra um resgate em nome dele e muda o status (suspender, reativar, excluir).

## Como acessar

**CRM** → **Fidelidade** → aba **Participantes**.

![Participantes](/img/manual/crm/fidelidade/fidelidade-participantes.png)

## O que você vê nesta tela

### Filtros

| Filtro | O que faz |
|---|---|
| **Busca** | Nome, apelido, CPF/CNPJ ou o código de indicação exato. |
| **Status** | Ativo, Suspenso ou Excluído. |
| **Nível** | Mostra só um nível. |

### Colunas

| Coluna | O que é |
|---|---|
| **Participante** | Nome e apelido do arrematante. |
| **Código de indicação** | Código que o cliente compartilha para indicar amigos. Diferencia maiúsculas de minúsculas. |
| **Nível** | Nível atual, com a cor definida em Níveis. |
| **Saldo** | Pontos válidos. Se houver **dívida de pontos** (estorno maior que o saldo), ela aparece em vermelho. |
| **Status** | Ativo, Suspenso ou Excluído. |
| **Adesão** | Data em que entrou no programa. |

Clique numa linha para abrir a ficha.

:::info A adesão é feita pelo cliente
Não existe "cadastrar participante" no ERP: o arrematante com cadastro aprovado entra pelo site, aceitando o regulamento.
:::

## Ficha do participante

![Ficha do participante](/img/manual/crm/fidelidade/fidelidade-participante.png)

| Quadro | O que mostra |
|---|---|
| **Dados** | Nome, apelido, CPF/CNPJ, código de indicação, data de adesão e a versão do regulamento aceita (com o IP do aceite). O atalho **Abrir pessoa no CRM** leva ao cadastro completo. |
| **Pontos e nível** | **Saldo válido**, **nível** (e quanto falta para o próximo), **a vencer** (pontos que vencem dentro do prazo de aviso) e os totais históricos: ganhos, resgatados e expirados. |
| **Extrato de pontos** | Todos os lançamentos, do mais novo para o mais antigo, com origem, pontos (+ crédito / − débito), validade e quanto ainda resta de cada crédito, e quem lançou. Filtre por origem. |
| **Resgates / Benefícios / Indicações feitas** | O que este participante resgatou, os benefícios em R$ dele e as pessoas que ele indicou. |

### Ajustar pontos

Use para bonificações manuais (ex.: "avaliou o leilão") ou para corrigir um lançamento.

1. Clique em **Ajustar pontos**.
2. Escolha **+ Creditar** ou **− Debitar**.
3. Informe a quantidade de **pontos** e o **motivo** (obrigatório).
4. Confira o saldo previsto e clique em **Creditar pontos** / **Debitar pontos**. Débitos pedem confirmação.

![Ajuste de pontos](/img/manual/crm/fidelidade/fidelidade-ajuste-pontos.png)

O ajuste vira uma linha no extrato com o seu usuário e o motivo. Um crédito manual vale pela validade padrão dos pontos.

### Mudar o status

1. Clique em **Mudar status**.
2. Escolha o novo status e informe o **motivo** (obrigatório para suspender ou excluir).
3. Clique em **Salvar status**.

![Mudar status](/img/manual/crm/fidelidade/fidelidade-mudar-status.png)

| Status | Efeito |
|---|---|
| **Ativo** | Participa normalmente. |
| **Suspenso** | Não ganha nem resgata pontos. Os pontos ficam guardados (mas continuam vencendo) e voltam a valer ao reativar. |
| **Excluído** | **Definitivo**: zera todos os pontos, cancela os benefícios disponíveis e impede nova adesão pelo site. Pede confirmação. |

### Registrar um resgate pelo cliente

Quando o cliente pede a troca por telefone ou no balcão: **Registrar resgate** → escolha a recompensa → **Registrar resgate**. Valem as mesmas regras do site (saldo, estoque e nível mínimo). Os pontos saem na hora e é gerado um voucher, que aparece em [Resgates](./fidelidade-lojinha-resgates.md#resgates).

## Regras de negócio

- **O extrato é a fonte da verdade.** Nada é apagado; correções são feitas com ajuste contrário.
- **Débito maior que o saldo**: no ajuste manual, o sistema recusa com "saldo insuficiente". Já num estorno automático (venda cancelada depois do resgate), a diferença vira **dívida de pontos**, descontada dos próximos créditos.
- O nível é recalculado a cada movimento.

## Erros comuns

- **"Informe o motivo do ajuste."** — o motivo é obrigatório.
- **"Saldo insuficiente"** — o débito é maior que o saldo válido.
- **"Participante inativo"** ao registrar resgate — participante suspenso ou excluído não resgata.
- **"Nível insuficiente" / "Sem estoque"** — a recompensa exige um nível maior ou acabou o estoque.

## Dicas

- Escreva motivos claros nos ajustes — eles aparecem no extrato e ajudam a responder o cliente.
- Para "desfazer" um ajuste errado, faça um ajuste do mesmo valor no sentido contrário.

## Veja também

- [Visão geral do programa](./fidelidade.md)
- [Lojinha e resgates](./fidelidade-lojinha-resgates.md)
- [Indicações e benefícios](./fidelidade-indicacoes-beneficios.md)
