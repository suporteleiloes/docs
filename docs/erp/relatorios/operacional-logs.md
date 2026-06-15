---
title: Log Operacional
sidebar_position: 4
---

# Log Operacional

O **Log Operacional** é o registro de auditoria do sistema: ele mostra quem fez o quê e quando. Cada vez que alguém cria, edita ou exclui algo, faz login ou acessa uma área, fica registrada uma linha aqui. Use esta tela para investigar uma alteração, conferir uma ação suspeita ou acompanhar a atividade de um usuário.

## Como acessar

**ERP** → **Relatórios** → **Auditoria** → **Log Operacional**.

![Log Operacional](/img/manual/erp/operacional-logs.png)

## O que você vê nesta tela

No topo há a barra de filtros; abaixo, a tabela com os registros.

### Filtros

| Filtro | O que é |
|---|---|
| Campo de busca | Busca por usuário, descrição etc. |
| Pessoa | Filtra os registros de uma pessoa específica. Comece a digitar o nome e selecione na lista. |
| Entidade | Limita a um tipo de item: Bens, Leilões, Lotes, Arrematantes, Comitentes, Pessoas, Processos, Financeiro, Usuários. |
| Ação | Limita a um tipo de ação: Criar, Editar, Excluir, Login, Logout, Acesso. |
| Período (de / até) | Duas datas para filtrar por intervalo. |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número do registro. |
| Data/Hora | Quando a ação aconteceu (dia, mês, ano e horário). |
| Usuário | Quem realizou a ação, com inicial em avatar e o nome de usuário (@login) abaixo. |
| Ação | Tipo de ação, em etiqueta colorida (criar = verde, editar = azul, excluir/erro = vermelho). |
| Entidade | Item afetado e seu número (ex.: lote #123). |
| Descrição | Texto explicando o que foi feito. |
| IP | Endereço de onde a ação partiu. |

## O que dá pra fazer aqui

Esta é uma tela de **consulta** — você filtra e lê os registros; não há cadastro nem edição.

### Investigar uma ação

1. Use os filtros para reduzir os resultados — por exemplo, escolha a **Pessoa** e o **Período**.
2. Para focar em um tipo de operação, escolha a **Ação** (ex.: Excluir) e/ou a **Entidade** (ex.: Lotes).
3. Confira na tabela a **Data/Hora**, a **Descrição** e o **IP** de cada registro.
4. Ajuste o número de itens por página (20, 50 ou 100) e navegue pelas páginas conforme necessário.

## Dicas e observações

- Os filtros somam: você pode combinar Pessoa + Período + Ação ao mesmo tempo para chegar exatamente ao registro que procura.
- A coluna **IP** ajuda a identificar acessos de fora do esperado — útil em investigações de segurança.
- O acesso a esta tela costuma ser restrito a perfis administrativos. Se você não a vê no menu, fale com o administrador da conta.

## Veja também

- [Módulo de Relatórios](./relatorios.md)
