---
title: Produtividade
sidebar_position: 3
---

# Produtividade

A **Produtividade** acompanha o trabalho feito em cada processo em etapas — **Intimações**, **Indicação**, **Nomeação** e **Homologação** — e calcula quanto cada responsável deve receber por etapa concluída. Nesta tela você vê o resumo geral, pesquisa a produtividade de um processo, trabalha nas etapas (datas, responsáveis, pagamentos, intimações e anexos), exporta o relatório e lança os pagamentos no Financeiro.

## Como acessar

**ERP** → **Processos** → aba **Produtividade**.

![Painel de Produtividade](/img/manual/erp/processos/produtividade-painel.jpg)

## Pré-requisitos

- O processo precisa estar com **Produtividade habilitada** (interruptor no card **Detalhes** do [processo](./-id.md#card-detalhes)). Ao habilitar, as etapas são criadas automaticamente.
- Para o cálculo de pagamentos, cadastre as [comissões](#comissões-de-produtividade) de cada pessoa por etapa.

## O que você vê nesta tela

### Botões no topo

| Botão | O que faz |
|---|---|
| Intimações | Abre a tela de [Intimações](./intimacoes.md) de todos os processos. |
| Exportar relatório | Baixa uma planilha (XLSX) com a produtividade dos processos. |
| Processar lançamento no financeiro | Calcula o valor de cada responsável no período e baixa a planilha de lançamento. |

### Resumo dos processos

Quantidade de processos em cada situação, com os mesmos totais do sistema anterior:

| Linha | O que conta |
|---|---|
| Pendentes de Indicação | Processos com a etapa Indicação ainda pendente. |
| Indicados | Indicações concluídas, separadas em **pagos** e **não pagos**. |
| Pendentes de Nomeação | Processos aguardando a nomeação. |
| Nomeados | Nomeações concluídas (pagos / não pagos). |
| Pendentes de Homologação | Processos aguardando a homologação. |
| Homologados | Homologações concluídas (pagos / não pagos). |

## Pesquisar a produtividade de um processo

1. Em **Pesquisar produtividade pelo número do processo**, digite o número (com ou sem pontuação).
2. Clique em **Pesquisar**.
3. As etapas do processo aparecem logo abaixo, cada uma num cartão. **Abrir processo** leva à tela do processo; **Limpar** limpa a pesquisa.

![Etapas do processo pesquisado](/img/manual/erp/processos/produtividade-busca.jpg)

Cada cartão mostra a **situação** da etapa (Pendente/Concluído), o **canal de ciência**, as **datas** (ciência, indicação, despacho, protocolo, manifestação do leiloeiro), os **responsáveis** com quanto já receberam, as **intimações** (no cartão de Intimações) e os **anexos**.

## Trabalhar numa etapa

Clique nos três pontinhos (**•••**) no rodapé do cartão para ver as ações da etapa.

![Menu da etapa](/img/manual/erp/processos/produtividade-etapa-menu.jpg)

### Modificar a etapa

![Modificar etapa](/img/manual/erp/processos/produtividade-etapa-modificar.jpg)

1. No menu da etapa, clique em **Modificar etapa**.
2. Ajuste **Situação**, **Ciência via** (canal), **Data ciência**, a data própria da etapa (indicação, despacho ou protocolo), **Resumo** e **Descrição / observações**.
3. Marque **Estou ciente deste registro** quando for o caso.
4. Clique em **Salvar**.

### Incluir ou remover responsáveis

1. No menu da etapa, clique em **Adicionar pessoa**, busque a pessoa e confirme.
2. Cada responsável mostra **quanto já recebeu** e, se houver, quanto falta pagar.
3. Clique em **Remover** ao lado do nome para tirar a pessoa da etapa.

### Registrar o pagamento de uma etapa

![Registrar pagamento da etapa](/img/manual/erp/processos/produtividade-etapa-pagamento.jpg)

1. No menu da etapa, clique em **Registrar um pagamento** (ou em **Pagar** ao lado do responsável).
2. Escolha a **Pessoa** (um dos responsáveis) e informe o **Valor**.
3. Deixe **Já foi pago (baixar no financeiro)** ligado e informe a **Data do pagamento**, ou desligue para lançar como conta a pagar em aberto.
4. Escolha a **Categoria financeira** (padrão: Automática — Produtividade) e, se quiser, **Observações**.
5. Clique em **Registrar pagamento**. A despesa é criada no **Financeiro**, vinculada à etapa e ao processo.

### Registrar intimações

![Nova intimação](/img/manual/erp/processos/produtividade-etapa-intimacao.jpg)

1. No cartão **Intimações**, abra o menu e clique em **Adicionar intimação**.
2. Informe a **Data da intimação**, a **Data do prazo** e, quando houver, a **Data da resposta**.
3. Escreva as **Observações** e clique em **Salvar**.

As intimações também podem ser vistas e editadas na tela [Intimações](./intimacoes.md).

### Anexar arquivos

No bloco **Anexos** do cartão, clique em **Anexar arquivos** ou **arraste** os arquivos para o cartão. Em cada anexo há **Visualizar**, **Baixar** e excluir.

## Exportar o relatório

![Exportar relatório de produtividade](/img/manual/erp/processos/produtividade-exportar.jpg)

1. Clique em **Exportar relatório**.
2. Se quiser, informe **Data inicial** e **Data final**. Sem período, o relatório traz todos os processos com produtividade (etapas, datas, pagamento e responsáveis).
3. Clique em **Baixar XLSX**.

## Processar o lançamento no financeiro

![Processar lançamento no financeiro](/img/manual/erp/processos/produtividade-processar-financeiro.jpg)

1. Clique em **Processar lançamento no financeiro**.
2. Informe a **Data inicial** e a **Data final** (o padrão é o mês anterior).
3. Clique em **Processar**. O sistema considera as etapas concluídas com data de ciência no período, calcula o valor de cada responsável pelas comissões cadastradas e baixa o resultado em planilha.

## Etapas de produtividade

Cadastro das etapas que são criadas em cada processo quando a produtividade é habilitada.

**Como acessar:** **Configurações** → **Processos** → **Etapas de Produtividade** (ou pelo botão **Etapas** na tela de Comissões).

![Etapas de produtividade](/img/manual/erp/processos/produtividade-etapas-cadastro.jpg)

| Coluna | O que é |
|---|---|
| Ordem | Posição da etapa no processo. |
| Etapa | Nome da etapa. |
| Código | Código interno (ex.: `indicacao`). |
| Gera comissão | Se a conclusão da etapa gera comissão para o responsável. |
| Valor | Valor padrão da etapa. |
| Dia lanç. | Dia do mês em que o lançamento é feito. |
| Situação | Ativa ou inativa. |

Use **Nova etapa** para cadastrar e o lápis para editar (nome, código, cor, valor, dia do lançamento e se gera comissão).

## Comissões de produtividade

Define quanto cada pessoa recebe por etapa concluída.

**Como acessar:** **Configurações** → **Processos** → **Comissões** (ou pelo botão **Comissões** na tela de Etapas).

![Comissões de produtividade](/img/manual/erp/processos/produtividade-comissoes.jpg)

1. Clique em **Nova comissão**.
2. Escolha a **Pessoa** e a **Etapa**.
3. Marque se a etapa **paga comissão** e informe o **Valor**.
4. Se o valor depende da quantidade de conclusões no mês, adicione **critérios** em faixas (mínimo, máximo e valor; máximo 0 = sem limite).
5. Clique em **Salvar**.

## Regras de negócio

- Para concluir uma etapa é preciso ter **ao menos um anexo** que comprove a conclusão. Sem anexo, o sistema recusa a mudança de situação.
- O pagamento de etapa é sempre uma **despesa no Financeiro**, em nome de um responsável da etapa — não existe pagamento "solto".
- O **Processar lançamento** usa as comissões cadastradas; pessoa sem comissão para a etapa não entra no cálculo.
- Com critérios por faixa, o valor de cada conclusão depende de quantas a pessoa concluiu no mês.

## Erros comuns

- **"Necessário anexar ao menos um documento…"** — anexe o comprovante na etapa antes de marcá-la como concluída.
- **Pesquisa por número não encontra a produtividade** — o processo não está com **Produtividade habilitada**. Ligue o interruptor no card **Detalhes** do processo.
- **Processar lançamento trouxe planilha vazia** — não havia etapas concluídas com ciência no período, ou faltam comissões cadastradas.

## Dicas

:::tip
Cadastre as comissões antes de começar a concluir etapas: assim o **Processar lançamento** do fim do mês sai certo na primeira vez.
:::

## Veja também

- [Processo (detalhe)](./-id.md)
- [Etapas / Produtividade do processo](./-id-produtividade.md)
- [Intimações](./intimacoes.md)
- [Cadastros Auxiliares](./cadastros.md)
