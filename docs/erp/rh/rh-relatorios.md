---
title: Relatórios (RH)
sidebar_position: 8
---

# Relatórios (RH)

A tela de **Relatórios** do RH reúne, em um único lugar, visões prontas sobre o seu time: quem está ativo, como os colaboradores se distribuem por departamento, quanto foi pago em um período e quais eventos (descontos, bonificações etc.) foram lançados. Você escolhe o relatório, ajusta o período quando for o caso e pode exportar o resultado para uma planilha.

## Como acessar

**ERP** → **RH** → **Relatórios**

![Relatórios (RH)](/img/manual/erp/rh-relatorios.png)

## O que você vê nesta tela

No topo há o título **Relatórios** e o botão **Exportar CSV**. Logo abaixo, um cartão de **filtros** onde você escolhe o relatório (e o período, quando aplicável). O cartão principal exibe o título do relatório selecionado, um resumo à direita (totais ou contagem de registros) e a tabela com os dados.

| Área | O que é |
|---|---|
| **Relatório** | Lista para escolher qual relatório ver. Opções: *Colaboradores ativos*, *Colaboradores por departamento*, *Pagamentos por período* e *Eventos*. |
| **De** / **Até** | Campos de data que aparecem **apenas** nos relatórios que usam período (*Pagamentos por período* e *Eventos*). |
| **Título do relatório** | Nome do relatório atualmente exibido. |
| **Resumo (à direita)** | Para *Pagamentos*, mostra os totais **Previsto** (lançamentos ainda não pagos) e **Pago** (já quitados); para os demais, mostra a quantidade de registros encontrados. Os descontos entram no total com sinal negativo. |
| **Tabela** | As colunas mudam conforme o relatório escolhido (veja abaixo). |

### Colunas por relatório

**Colaboradores ativos** (relatório inicial):

| Coluna | O que é |
|---|---|
| **Colaborador** | Nome do colaborador. |
| **CPF** | CPF do colaborador (ou "—" quando não informado). |
| **Cargo** | Cargo atual. |
| **Departamento** | Departamento ao qual pertence. |
| **Salário** | Salário cadastrado (ou "—" quando não informado). |

**Colaboradores por departamento:**

| Coluna | O que é |
|---|---|
| **Departamento** | Nome do departamento. |
| **Colaboradores** | Quantidade de colaboradores no departamento. |
| **Folha (salários)** | Soma dos salários do departamento. |

**Pagamentos por período:**

| Coluna | O que é |
|---|---|
| **Colaborador** | A quem se refere o pagamento. |
| **Tipo** | Tipo do pagamento. |
| **Competência** | Mês/ano de competência. |
| **Valor** | Valor do pagamento (valores negativos, como descontos, aparecem em vermelho). |
| **Status** | Situação do pagamento, com cor: **verde** quando **Pago** e **amarelo** quando **Previsto** (ainda não pago). |

**Eventos:**

| Coluna | O que é |
|---|---|
| **Colaborador** | Colaborador relacionado ao evento. |
| **Tipo** | Tipo do evento. |
| **Data** | Data em que o evento ocorreu. |
| **Descrição** | Detalhe do evento (ou "—"). |
| **Valor** | Valor do evento, quando houver (senão "—"). |

## O que dá pra fazer aqui

### Gerar um relatório

1. No campo **Relatório**, escolha o relatório desejado.
2. O resultado é carregado automaticamente — você verá "Carregando…" por um instante e, em seguida, a tabela.
3. Se não houver dados, aparece a mensagem **"Nenhum dado para os filtros selecionados."**

### Filtrar por período (Pagamentos e Eventos)

1. Selecione **Pagamentos por período** ou **Eventos** no campo **Relatório**.
2. Preencha **De** e **Até** com as datas que delimitam o período.
3. A tabela é atualizada automaticamente conforme você informa as datas.

> Os campos **De** e **Até** só aparecem para esses dois relatórios. Nos relatórios de *Colaboradores ativos* e *por departamento*, não há filtro de período.

### Exportar para planilha (CSV)

1. Gere o relatório que deseja exportar.
2. Clique em **Exportar CSV** (no topo da tela).
3. O arquivo é baixado com o nome `rh_<relatório>.csv` (por exemplo, `rh_pagamentos.csv`) e pode ser aberto no Excel, Google Planilhas ou similar.

> O botão **Exportar CSV** fica desabilitado quando não há nenhum registro na tabela. Gere um relatório com resultados antes de exportar.

## Dicas e observações

- O relatório é recalculado **na hora** sempre que você troca de tipo ou ajusta as datas; não há botão de "buscar".
- No relatório de **Pagamentos**, confira o resumo à direita: **Previsto** (o que estava planejado) e **Pago** (o que de fato foi pago, em verde).
- O CSV usa **ponto e vírgula** como separador, o que facilita abrir direto no Excel em português. Eventuais ponto e vírgula no conteúdo são trocados por vírgula para não quebrar as colunas.
- Os relatórios **Colaboradores ativos** e **Colaboradores por departamento** consideram **apenas colaboradores com status Ativo** — inativos e desligados não entram nessas contagens nem na folha somada. Quem aparece com "Sem departamento" são colaboradores ativos que ainda não foram vinculados a nenhum departamento.
- O relatório **Pagamentos por período** é alimentado pelo [Financeiro de RH](./rh-financeiro.md): cada linha é um lançamento (Salário, Bônus, Comissão, Desconto ou Benefício) filtrado pela **data de competência** dentro do intervalo De/Até. Para registrar, editar ou quitar um pagamento, use a tela de Financeiro — aqui é só consulta.
- O relatório **Eventos** lista as ocorrências de RH (falta, atraso, férias, advertência, bônus etc.) filtradas pela **data do evento** no intervalo De/Até. Apenas eventos dos tipos *Alteração salarial*, *Bônus* e *Desconto* têm valor em R$; nos demais a coluna **Valor** aparece como "—".
- Esta tela mostra dados sensíveis (CPF e salários). O acesso ao módulo de RH exige a permissão **Relatórios de RH** (`rh/relatorio`) — fale com o administrador do sistema se não conseguir abrir a tela.

## Veja também

- [Colaboradores](./rh-colaboradores.md)
- [Departamentos](./rh-departamentos.md)
- [Eventos](./rh-eventos.md)
- [Financeiro (RH)](./rh-financeiro.md)
