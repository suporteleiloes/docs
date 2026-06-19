---
title: Contas (a pagar, a receber e extrato)
sidebar_position: 2
---

# Contas (a pagar, a receber e extrato)

É o coração do Financeiro: a lista de todos os lançamentos da leiloeira — o que você tem a pagar, o que tem a receber e o extrato completo. Aqui você cadastra despesas e receitas, registra pagamentos (baixas), emite recibos e faturas, envia cobranças e acompanha vencimentos e atrasos.

## Como acessar

**ERP** → **Financeiro** → **Contas**.

A tela tem três abas internas: **Extrato** (tudo), **Contas a Pagar** (despesas) e **Contas a Receber** (receitas). Você também pode chegar direto numa aba pelos atalhos do Dashboard.

![Contas](/img/manual/erp/contas.png)

## Pré-requisitos

Você consegue criar lançamentos avulsos sem nenhum cadastro prévio, mas para aproveitar o módulo vale ter antes:

- **Contas bancárias** ([Contas Bancárias](./cadastro-bancos.md)) — para indicar de/para qual conta o dinheiro entra ou sai e ver saldos.
- **Plano de Contas** ([categorias](./categorias.md)) — para classificar cada lançamento (entra no DRE e nos relatórios).
- (Opcional) **Centros de custo** ([Centro de Custo](./cc.md)) e **Formas de pagamento** ([Formas de Pagamento](./formas-pagamento.md)).

## O que você vê nesta tela

### Resultado previsto para o mês

No topo, um painel resume o mês: o **resultado previsto** (receitas menos despesas), e duas barras de progresso — **Recebimentos** (quanto já foi recebido do previsto) e **Despesas** (quanto já foi pago do previsto). O ícone de olho oculta/mostra os valores, útil para apresentar a tela sem expor números.

### Abas e contador

Abaixo do painel ficam as abas **Extrato**, **Contas a Pagar** e **Contas a Receber**, com o total de registros da lista atual ao lado.

### Filtros

| Filtro | Para que serve |
|---|---|
| Busca | Procura por descrição ou pessoa |
| Período (De / até) | Limita por intervalo de datas |
| Tipo de data | Define a qual data o período se aplica: Vencimento, Pagamento ou Competência |
| Atalhos de período | Botões rápidos: Hoje, Esta semana, Mês passado, Este mês, Próximo mês, Este ano |
| Pagos / Não pagos | Mostra só pagos, só não pagos, ou todos |
| Mais filtros | Abre o painel com filtros avançados (ver abaixo) |

Em **Mais filtros** você ainda tem: ID do lançamento, Pessoa (por ID), Categoria, Centro de Custo, Dedutível, Recorrente, Conta bancária, **Status** (Pago, Pendente, Atrasado, Cancelado — pode marcar vários), **Apenas vencidas**, contas bancárias (várias de uma vez), Forma de pagamento (várias de uma vez), Processo e Participante (usuário). O número ao lado de "Mais filtros" indica quantos filtros avançados estão ativos. Use **Remover filtros** para limpar.

### Colunas da lista

A lista vem com um conjunto de colunas visíveis e outras que você pode habilitar pelo botão de configurar colunas da tabela. As principais:

| Coluna | O que é |
|---|---|
| Data | Data de vencimento. Lançamentos vencidos e não pagos mostram uma etiqueta com os dias de atraso |
| Descrição | Texto do lançamento. Mostra "x/y" quando é parcela e um "R" quando é recorrente |
| Credor / Devedor / Pessoa | A pessoa do lançamento (o rótulo muda conforme a aba) |
| Lançamento | Categoria (ou "Rateio" quando o valor foi rateado) |
| Valor | Valor com sinal: + para receita, − para despesa |
| Situação | Pago, Pendente, Atrasado, Cancelado ou Estornado |

Colunas adicionais disponíveis: Nro Doc, Data Pagamento, Lançamento Detalhado, Conta, Centro de Custo, Data Registro, Forma de Pagamento, Dedutível e Valor Pago.

No rodapé há os **totais do período**, separados em recebimentos (Recebidas, Descontos, Juros/Multa, A receber, Vencidas, Total) e despesas (Pagas, Descontos, Juros/Multa, A pagar, Vencidas, Total).

### Painel lateral (saldos)

O botão **Painel lateral** abre/fecha uma coluna à direita com o saldo total de todas as contas, a previsão de fechamento do mês e a lista de contas bancárias com seus saldos.

## O que dá pra fazer aqui

Os botões do cabeçalho: **Sincronizar Saldos**, **Exportar** (gera uma planilha Excel da lista filtrada), **Painel lateral** e **Novo lançamento**.

### Cadastrar um novo lançamento

1. Clique em **Novo lançamento** (ou pressione **Shift+N**).
2. Na aba **Detalhes do lançamento**, preencha:
   - **Descrição** (obrigatório).
   - **Credor/Devedor** (a pessoa).
   - **Valor** (obrigatório).
   - **Data competência** (obrigatório) e, se quiser, **Código de referência** e **Dedutível?**.
   - **Categoria** (obrigatório, a não ser que use rateio) e **Centro de custo**.
   - Opcionalmente vincule um **Processo**.
3. Para dividir o valor em várias categorias, ligue **Habilitar rateio** e preencha a tabela (descrição, categoria, valor e porcentagem por linha). O resumo mostra o restante e o total rateado.
4. Em **Condição de pagamento**, escolha **À vista** ou **Parcelado** (informando o número de parcelas), defina o **Vencimento**, a **Forma de pagamento** e a **Conta**.
   - Para lançamentos que se repetem, ligue **Repetir lançamento?** e configure o intervalo (a cada N dias/semanas/meses) e o término (nunca, em uma data, ou após N ocorrências).
5. Se já estiver pago, ligue o interruptor **Pago** e informe **Data pagamento**, **Descontos/Taxas**, **Juros/Multa** e **Valor pago**.
6. Adicione **Observações** e, se precisar, **Anexos** (comprovantes).
7. Clique em **Salvar**.

![Novo lançamento](/img/manual/erp/contas-novo.png)

A aba **Histórico** (disponível ao editar um lançamento já existente) mostra as alterações feitas no lançamento e a comunicação enviada à pessoa.

### Editar um lançamento

Dê duplo clique na linha, ou clique no ícone de **lápis**. Abre a mesma janela do cadastro, já preenchida.

### Dar baixa (registrar pagamento)

1. Na linha de um lançamento ainda não pago, clique no ícone **Baixar (marcar pago)**.
2. Na janela de **Baixa / Estorno**, confira o resumo (Valor, Pago, Residual, Situação).
3. Informe o **Valor da baixa** (já vem preenchido com o valor residual — deixar assim quita o título), a **Conta**, e, se houver, **Juros**, **Multa**, **Desconto** e a **Data**.
4. Clique em **Registrar baixa**. É possível registrar **baixas parciais**: o título fica "Parcial" até quitar o residual.

![Baixa / Estorno](/img/manual/erp/contas-baixa.png)

Nessa mesma janela você vê o histórico de baixas e pode **Estornar** uma baixa específica ou **Estornar título** (gera um contra-lançamento de estorno).

### Emitir recibo e fatura

Em cada linha há ícones para:

- **Recibo (PDF)** — baixa o recibo no seu computador.
- **Baixar Fatura** — gera a fatura em PDF.
- **Enviar cobrança** (só em receitas não pagas) — envia o aviso de cobrança ao cliente, após confirmação.
- **Enviar Recibo por e-mail** (só em receitas já pagas) — envia o recibo de pagamento ao cliente.

### Excluir

Clique no ícone de **lixeira** na linha e confirme. A exclusão não pode ser desfeita.

### Ações em massa

Marque várias linhas pelos seletores à esquerda e use a barra de ações em massa para **Exportar** os selecionados em CSV ou **Excluir** em lote.

## Regras de negócio

- **Situações de um lançamento:** **Pendente** (em aberto), **Pago** (quitado), **Atrasado** (vencido e não pago — calculado pela data de vencimento), **Cancelado** e **Estornado**. Quando uma baixa cobre só parte do valor, o título fica **Parcial** até o residual ser quitado.
- **Baixa parcial e residual:** cada baixa abate do **residual** (valor que ainda falta receber/pagar). Você pode registrar várias baixas no mesmo título; ele só vira **Pago** quando o residual chega a zero. Juros, multa e desconto informados na baixa entram nessa conta.
- **Estorno:** estornar uma baixa devolve o título ao estado anterior (gera um contra-lançamento); **Estornar título** marca o lançamento como estornado. Operações de estorno ficam registradas no histórico do título.
- **Recorrência e parcelamento:** um lançamento **parcelado** gera várias parcelas (mostradas como "x/y"); um lançamento **recorrente** ("R") se repete conforme o intervalo e o término que você definir (nunca / em uma data / após N ocorrências).
- **Rateio:** ao habilitar rateio, o valor é dividido entre várias categorias e a categoria única deixa de ser obrigatória; na lista, esse lançamento aparece com "Rateio" na coluna de categoria.
- **Impacto no saldo e nos relatórios:** apenas o que está **pago** afeta o saldo realizado das contas e entra no [DRE](./dre.md) (que é por data de pagamento). Lançamentos em aberto contam como previsão (a receber / a pagar), não como saldo.
- **Permissões:** criar, editar, dar baixa, emitir recibo/fatura e excluir dependem das permissões de Movimentação no perfil do usuário.

## Erros comuns

- **"Lançamento sumiu da lista":** quase sempre é o filtro **Tipo de data** (Vencimento × Pagamento × Competência) combinado com o período. Verifique também a aba (Extrato × a Pagar × a Receber) e o filtro Pagos/Não pagos.
- **Não aparece o botão "Enviar cobrança" ou "Enviar recibo":** cobrança só aparece em **receitas ainda não pagas**; envio de recibo por e-mail só em **receitas já pagas**.
- **Exclusão não pode ser desfeita:** ao contrário do estorno, a exclusão de um lançamento é definitiva. Em caso de dúvida, prefira cancelar/estornar.

## Dicas e observações

- Atalhos de teclado: **Shift+N** abre novo lançamento; **Shift+Enter** foca a busca e recarrega; **Ctrl+Shift+R** limpa todos os filtros.
- O **Tipo de data** muda completamente o que o período filtra. Se um lançamento "sumiu" do intervalo, confira se está filtrando por Vencimento, Pagamento ou Competência.
- A baixa pelo botão da linha permite pagamentos parciais, juros, multa e desconto — prefira-a quando o recebimento não for exatamente o valor cheio.
- Sem período definido, o sistema traz todos os lançamentos até você filtrar; use os atalhos de período para focar no mês.

## Veja também

- [Dashboard Financeiro](./financeiro.md)
- [Plano de Contas (categorias)](./categorias.md)
- [Centro de Custo](./cc.md)
- [Formas de Pagamento](./formas-pagamento.md)
- [Conciliação Bancária](./conciliacao.md)
