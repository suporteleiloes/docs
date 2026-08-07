---
title: Painel da Equipe
sidebar_position: 10
---

# Painel da Equipe

O Painel da Equipe é o centro de controle operacional do RH: ele cruza **tarefas**, **chamados**, **presença** e **custo** por colaborador e por time, num só lugar. É a tela para o gestor enxergar, rapidamente, quem está sobrecarregado, qual time está com gargalo e quanto custa a operação num período.

Diferente do [Dashboard de RH](./rh.md) (que mostra números gerais de cadastro e folha), o Painel da Equipe é focado em **carga de trabalho e desempenho operacional** — por isso só entram nele os colaboradores marcados para participar de Tarefas e/ou Chamados (seção "Participação, custo e times" em [Colaboradores](./rh-colaboradores.md)).

## Como acessar

**ERP** → **RH** → **Painel da Equipe**.

![Painel da Equipe — Visão Geral](/img/manual/erp/rh/painel-visao-geral.jpg)

## O que você vê nesta tela

### KPIs com comparação de período

No topo, cartões de indicadores (tarefas concluídas, chamados atendidos, tempo médio de resposta, carga da equipe etc.), cada um mostrando o valor do período selecionado **e a variação em relação ao período anterior** (por exemplo, "▲ 12% vs. semana passada").

### Abas

| Aba | O que mostra |
|---|---|
| Visão Geral | Resumo consolidado: KPIs principais e destaques do período |
| Equipe | Cartão individual de cada colaborador participante (veja abaixo) |
| Times | Números agrupados (rollup) por [Time](./rh-times.md) |
| Gargalos & Alertas | Pontos de atenção: sobrecarga, atrasos, chamados parados |
| Performance | Indicadores de desempenho por pessoa/time ao longo do tempo |
| Timeline | Linha do tempo dos eventos operacionais do período |

### Filtros

| Filtro | O que faz |
|---|---|
| Período | Define a janela de tempo analisada (e a base de comparação dos KPIs) |
| Departamento | Restringe a análise a um departamento |
| Time | Restringe a análise a um [time](./rh-times.md) |
| Prioridade | Filtra tarefas/chamados por prioridade |
| Status | Filtra por situação (em aberto, concluído, atrasado etc.) |

## Cartões por colaborador (aba Equipe)

Cada colaborador participante aparece em um cartão com cargo, presença no período, quantidade de tarefas/chamados, indicador de carga (sobrecarregado, normal, ocioso) e custo.

![Cartões da equipe](/img/manual/erp/rh/painel-equipe-cards.jpg)

## Rollup por time (aba Times)

Os mesmos números dos cartões individuais, somados por [time](./rh-times.md): quantidade de membros, carga total, tarefas/chamados do time e custo consolidado. Times com foco **Tarefas** entram no rollup de Tarefas; **Chamados**, no de Chamados; **Geral**/**Ambos**, nos dois.

## Participação — quem entra no painel

Só entra no Painel da Equipe quem está marcado como participante. Isso é controlado de duas formas:

- No próprio cadastro do colaborador, pelos campos **Participa de Tarefas** / **Participa de Chamados** (veja [Colaboradores](./rh-colaboradores.md)).
- Na tela **RH** → **Participação**, que lista os usuários e permite ligar/desligar a participação de cada um sem precisar abrir a ficha completa do colaborador.

![Participação da equipe](/img/manual/erp/rh/participacao.jpg)

Use essa tela quando quiser ajustar rapidamente quem aparece no painel — por exemplo, ao promover alguém para uma função que passa a lidar com chamados, ou ao tirar do painel quem saiu de uma frente operacional (sem precisar inativar o colaborador).

## Custos de pessoas e times

O Painel da Equipe também estima o custo da operação no período:

1. **Custo/hora do colaborador**: usa o campo **Custo/hora** cadastrado na ficha, quando preenchido; senão, calcula automaticamente por **Salário ÷ Horas/mês** (padrão 220h/mês quando o colaborador não tem horas/mês definidas).
2. **Custo do período**: **Custo/hora × horas efetivamente trabalhadas** no período filtrado.
3. **Custo mensal da equipe**: soma dos salários de todos os colaboradores participantes.
4. **Custo por time**: soma do custo dos colaboradores que fazem parte de cada [time](./rh-times.md).

:::danger Custos só aparecem para quem tem permissão
Todo valor de custo e salário exibido neste painel — nos KPIs, nos cartões individuais e nos rollups por time — depende da permissão **`rh/custo/ver`**. Quem não tem essa permissão continua vendo tarefas, chamados, presença e carga normalmente, mas os campos de **custo/salário aparecem mascarados**. Ter acesso ao Painel da Equipe **não** implica automaticamente ver quanto cada pessoa ou time custa — são permissões independentes.
:::

## Regras de negócio

- **Participação é o que decide quem entra no painel.** Colaborador sem "Participa de Tarefas" nem "Participa de Chamados" marcado não aparece em nenhuma aba do Painel da Equipe, mesmo que esteja ativo no RH.
- **KPIs sempre comparam com o período anterior equivalente** (mesma duração, imediatamente anterior ao período filtrado).
- **Custo é estimado, não é folha de pagamento fechada.** O cálculo usa o salário/custo-hora cadastrado e as horas trabalhadas no período; ajustes de folha (13º, encargos, horas extras) não entram aqui — para o financeiro efetivo, use o [Financeiro de RH](./rh-financeiro.md).

## Dicas e observações

- Use os filtros de **Time** e **Departamento** juntos para comparar equipes específicas sem precisar sair da tela.
- A aba **Gargalos & Alertas** é o primeiro lugar para olhar quando o objetivo é identificar quem está sobrecarregado ou quais chamados estão parados há mais tempo.
- Ajuste a participação de um colaborador direto na tela de **Participação** quando a mudança for pontual (ex.: cobrir um time por uma semana), sem precisar editar a ficha completa.

## Veja também

- [Colaboradores](./rh-colaboradores.md)
- [Times](./rh-times.md)
- [Dashboard de RH](./rh.md)
- [Financeiro de RH](./rh-financeiro.md)
