---
title: Log Operacional
sidebar_position: 4
---

# Log Operacional

O **Log Operacional** é o registro de auditoria do sistema: ele mostra quem fez o quê e quando. Cada vez que alguém cria, edita ou exclui algo, faz login ou acessa uma área, fica registrada uma linha aqui. Use esta tela para investigar uma alteração, conferir uma ação suspeita ou acompanhar a atividade de um usuário.

## Pré-requisitos

- O acesso depende da permissão de **listar logs** (ACL). Sem ela, o item não aparece no menu e a tela retorna erro. Peça liberação ao administrador da conta.
- Não há nada a configurar: o registro de auditoria é automático. Cada ação relevante feita no ERP gera uma linha aqui, sem ação do usuário.

## Como acessar

**ERP** → **Relatórios** → **Central de Relatórios** → seção **Colaboradores** → **Log Operacional**.

O endereço direto é `/relatorios/operacional/logs`. O cabeçalho da tela mostra a trilha **Relatórios · Auditoria**.

![Log Operacional](/img/manual/erp/operacional-logs.png)

## O que você vê nesta tela

No topo há a barra de filtros; abaixo, a tabela com os registros.

### Filtros

| Filtro | O que é | Efeito atual |
|---|---|---|
| Campo de busca | Busca por texto no conteúdo do registro (usuário, descrição etc.). | Funciona. |
| Pessoa | Filtra os registros de uma pessoa específica. Comece a digitar o nome e selecione na lista. | Funciona. |
| Entidade | Lista para limitar a um tipo de item: Bens, Leilões, Lotes, Arrematantes, Comitentes, Pessoas, Processos, Financeiro, Usuários. | **Sem efeito no momento** — a seleção não chega ao servidor e não filtra os resultados. |
| Ação | Lista para limitar a um tipo de ação: Criar, Editar, Excluir, Login, Logout, Acesso. | **Sem efeito no momento** — a seleção não chega ao servidor e não filtra os resultados. |
| Período (de / até) | Duas datas para filtrar por intervalo. | > A confirmar: o intervalo é enviado, mas a aplicação no servidor ainda não está confirmada. |

:::caution Filtros que ainda não afetam o resultado
Hoje, os filtros que efetivamente reduzem a lista são **Busca** e **Pessoa**. Os campos **Entidade** e **Ação** aparecem na tela, mas a seleção ainda não é aplicada pelo servidor — a lista continua a mesma. Para localizar um registro específico, use **Busca** + **Pessoa** e, se precisar, a busca textual pela ação (ex.: digite `excluir` no campo de busca).
:::

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número do registro. |
| Data/Hora | Quando a ação aconteceu (dia, mês, ano e horário). |
| Usuário | Quem realizou a ação, com a inicial em avatar e o nome de usuário (@login) abaixo. |
| Ação | Tipo de ação, em etiqueta colorida. A cor segue o tipo: criar = verde, editar = azul, excluir/erro = vermelho, login/logout/acesso = neutro. O texto da etiqueta mostra o código da ação registrado pelo sistema (ex.: `create`, `update`, `delete`, `login`). |
| Entidade | Item afetado e seu número (ex.: lote #123). |
| Descrição | Texto explicando o que foi feito. |
| IP | Endereço de onde a ação partiu. |

## O que dá pra fazer aqui

Esta é uma tela de **consulta** — você filtra e lê os registros; não há cadastro nem edição.

### Investigar uma ação

1. Escolha a **Pessoa** (e, se quiser, o **Período**) para reduzir os resultados.
2. Para focar em um tipo de operação, digite a palavra no campo de **Busca** (ex.: `excluir`, `login`, ou o nome do item). As listas **Ação** e **Entidade** ainda não filtram (ver aviso acima).
3. Confira na tabela a **Data/Hora**, a **Descrição** e o **IP** de cada registro.
4. Ajuste o número de itens por página (20, 50 ou 100) e navegue pelas páginas conforme necessário. A lista vem ordenada do registro mais recente para o mais antigo.

## Dicas e observações

- Os filtros que funcionam somam entre si: combine **Pessoa** + **Período** + **Busca** para chegar ao registro que procura.
- A coluna **IP** ajuda a identificar acessos de fora do esperado — útil em investigações de segurança.
- O acesso a esta tela costuma ser restrito a perfis administrativos. Se você não a vê no menu, fale com o administrador da conta.
- Esta tela não exporta nem exclui: é só leitura. Os registros não podem ser apagados pela interface — é justamente o que garante a confiabilidade da auditoria.

## Veja também

- [Módulo de Relatórios](./relatorios.md)
