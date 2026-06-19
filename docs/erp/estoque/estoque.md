---
title: Estoque (Saldos)
sidebar_position: 1
---

# Estoque (Saldos)

Esta é a tela central do almoxarifado. Aqui você vê, em uma única lista, **quanto tem de cada produto em cada depósito**, o custo médio de cada item e quais produtos estão abaixo do estoque mínimo. É também por aqui que você registra entradas, saídas, transferências e ajustes de inventário.

## Pré-requisitos

Antes de movimentar estoque, você precisa de:

- **Pelo menos um depósito cadastrado** — veja [Depósitos](./estoque-depositos.md). Sem depósito, não há onde guardar saldo.
- **Produtos marcados para controlar estoque** no catálogo. Só aparecem no seletor de produto os itens com **Controlar estoque** ligado. Produtos do tipo **serviço** nunca controlam estoque e não aparecem aqui.
- Permissão de acesso ao almoxarifado (ver [Permissões](#permissões)).

## Como acessar

**ERP** → **Almoxarifado** → **Estoque**.

![Tela de Estoque (Saldos)](/img/manual/erp/estoque.png)

## O que você vê nesta tela

No topo há uma faixa de filtros e, abaixo, a lista de saldos. Cada linha representa um produto em um depósito.

### Filtros

| Filtro | O que faz |
|---|---|
| Buscar produto | Procura por nome ou código do produto. |
| Depósito | Mostra só os saldos de um depósito específico (ou "Todos os depósitos"). |
| Apenas abaixo do mínimo | Quando ligado, exibe somente os produtos cujo saldo está abaixo do estoque mínimo configurado. |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Produto | Nome do produto e, abaixo, o código (quando houver). |
| Depósito | Onde esse saldo está guardado. |
| Quantidade | Saldo atual do produto naquele depósito. |
| Custo médio | Custo médio **ponderado** unitário, recalculado pelo sistema a cada entrada com custo informado. Mostra "—" quando ainda não há custo registrado. |
| Mínimo | Estoque mínimo definido para o produto. Mostra "—" quando não há mínimo configurado. |
| Status | Etiqueta **OK** (verde) quando o saldo está acima do mínimo, ou **Abaixo do mínimo** (vermelho) quando precisa de reposição. |

## O que dá pra fazer aqui

No canto superior direito da tela há quatro botões de operação:

- **+ Entrada** — registra a chegada de produto no estoque.
- **− Saída** — registra a baixa/consumo de produto.
- **⇄ Transferência** — move produto de um depósito para outro.
- **Inventário / Ajuste** — corrige o saldo de um produto para um valor contado fisicamente.

Em todas as operações, se você já tiver um depósito selecionado no filtro, ele vem pré-preenchido no formulário para agilizar.

### Registrar uma Entrada

1. Clique em **+ Entrada**.
2. Em **Produto**, comece a digitar o nome ou código e selecione o produto na lista.
3. Selecione o **Depósito** onde o produto está entrando.
4. Informe a **Quantidade** que está entrando.
5. (Opcional) Informe o **Custo unitário** do item. Quando informado e maior que zero, esse valor recalcula o **custo médio ponderado** do produto naquele depósito (mistura o valor que já estava em estoque com o que está entrando). Se deixar em branco, a quantidade entra, mas o custo médio não muda.
6. (Opcional) Escreva uma **Observação** (ex.: número da nota fiscal).
7. Clique em **Confirmar**. O saldo é somado e a movimentação aparece em [Movimentações](./estoque-movimentos.md).

![Modal de Entrada de estoque](/img/manual/erp/estoque-entrada.png)

### Registrar uma Saída

1. Clique em **− Saída**.
2. Selecione o **Produto** e o **Depósito**.
3. Informe a **Quantidade** a ser baixada.
4. Se for necessário dar saída mesmo sem saldo suficiente, ligue **Permitir saldo negativo**. Caso contrário, o sistema bloqueia a saída quando não há saldo.
5. (Opcional) Escreva uma **Observação**.
6. Clique em **Confirmar**. O saldo é reduzido.

### Fazer uma Transferência entre depósitos

1. Clique em **⇄ Transferência**.
2. Selecione o **Produto**.
3. Escolha o **Depósito de origem** (de onde sai) e o **Depósito de destino** (para onde vai). Eles precisam ser diferentes.
4. Informe a **Quantidade** a transferir.
5. (Opcional) Escreva uma **Observação**.
6. Clique em **Confirmar**. O sistema gera duas movimentações: uma saída na origem e uma entrada no destino. O **custo médio** do destino herda o custo médio que o produto tinha na origem, de modo que a transferência não distorce os valores. A saída na origem respeita o saldo disponível: se não houver saldo suficiente, a transferência é bloqueada (não há opção de saldo negativo na transferência).

### Fazer um Inventário / Ajuste

Use o ajuste quando a contagem física não bate com o saldo do sistema.

1. Clique em **Inventário / Ajuste**.
2. Selecione o **Produto** e o **Depósito**.
3. Em **Saldo-alvo (quantidade final)**, informe a quantidade **real** que você contou na prateleira — não a diferença.
4. (Opcional) Escreva uma **Observação** justificando o ajuste.
5. Clique em **Confirmar**. O sistema calcula a diferença entre o saldo atual e o saldo-alvo e registra um movimento de ajuste para igualar os valores. O saldo-alvo pode ser **zero** (para zerar um item). O ajuste não altera o custo médio do produto.

## Regras de negócio

- **Quantidade** em Entrada, Saída e Transferência deve ser **maior que zero**. No Ajuste, o saldo-alvo pode ser zero, mas não pode ser negativo.
- **Saída só ocorre com saldo suficiente.** Sem saldo, a operação é bloqueada — exceto se você ligar **Permitir saldo negativo** na Saída. A transferência nunca permite saldo negativo na origem.
- **Custo médio ponderado:** mantido por produto e por depósito. Só muda nas Entradas com custo informado (> 0). Saídas, transferências e ajustes não alteram o custo médio.
- **Movimentações são imutáveis.** Cada operação grava um registro permanente em [Movimentações](./estoque-movimentos.md) (kardex). Não há como apagar um movimento; para corrigir um erro, registre um movimento contrário (entrada/saída) ou um ajuste de inventário.
- **Produto precisa controlar estoque.** Tentar movimentar um produto que não controla estoque (ou um serviço) é recusado pelo sistema.

## Erros comuns

| Mensagem / situação | Por que acontece | Como resolver |
|---|---|---|
| *Saldo insuficiente: disponível X, solicitado Y* | Tentou dar saída/transferência de mais do que existe no depósito. | Reduza a quantidade, ou ligue **Permitir saldo negativo** (apenas na Saída) se a regra do negócio permitir. |
| *Quantidade inválida* | Quantidade zero ou negativa numa Entrada/Saída/Transferência. | Informe um número maior que zero. |
| *Produto não controla estoque* | O produto escolhido não está marcado para controlar estoque (ou é um serviço). | Ajuste o cadastro do produto no catálogo ou escolha outro produto. |
| *Depósitos de origem e destino devem ser diferentes* | Numa transferência, escolheu o mesmo depósito nos dois campos. | Selecione depósitos distintos. |
| *Selecione o produto / Informe a quantidade / Selecione o depósito* | Campo obrigatório em branco no formulário. | Preencha o campo destacado antes de confirmar. |

## Permissões

O acesso ao almoxarifado é controlado por permissões específicas (defina-as no cadastro do perfil/usuário):

| Permissão | O que libera |
|---|---|
| Listar estoque (`estoque/l`) | Ver as telas de Saldos, Movimentações e Depósitos. |
| Movimentar (`estoque/movimentar`) | Registrar Entrada, Saída e Transferência. |
| Inventário (`estoque/inventario`) | Fazer ajuste de inventário (saldo-alvo). |
| Gerir depósitos (`estoque/deposito/gerir`) | Criar e editar depósitos. |

## Dicas e observações

- O **custo médio** é calculado automaticamente pelo sistema. Para mantê-lo correto, informe o custo unitário nas entradas.
- Para localizar rapidamente o que precisa repor, ligue o filtro **Apenas abaixo do mínimo**.
- Só aparecem no seletor de produto os itens marcados para **controlar estoque** no catálogo. Se um produto não aparece, verifique seu cadastro no catálogo.
- O estoque mínimo é definido no cadastro do produto, não nesta tela.

## Veja também

- [Movimentações](./estoque-movimentos.md)
- [Depósitos](./estoque-depositos.md)
