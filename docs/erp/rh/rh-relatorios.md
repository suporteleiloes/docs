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
| **Resumo (à direita)** | Para *Pagamentos*, mostra os totais **Previsto** e **Pago**; para os demais, mostra a quantidade de registros encontrados. |
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
| **Valor** | Valor do pagamento (valores negativos aparecem em vermelho). |
| **Status** | Situação do pagamento, com cor: verde (concluído), amarelo (pendente) e cinza (demais). |

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
- Esta tela mostra dados sensíveis (CPF e salários). O acesso ao módulo de RH costuma exigir permissão específica — fale com o administrador do sistema se não conseguir abrir a tela.

## Veja também

- [Colaboradores](./rh-colaboradores.md)
- [Departamentos](./rh-departamentos.md)
- [Eventos](./rh-eventos.md)
- [Financeiro (RH)](./rh-financeiro.md)
