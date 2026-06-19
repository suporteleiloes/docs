---
title: Clientes de Suporte
sidebar_position: 1
---

# Clientes de Suporte

Esta tela é o cadastro dos clientes que sua empresa atende em contratos de suporte. Aqui você define quem é o cliente, qual o plano contratado, o valor mensal e quem é o responsável interno por ele. É a base para organizar projetos e filas de atendimento.

## Como acessar
**Suporte** → **Clientes**

> A confirmar: nesta versão a tela é acessada pela URL `/suporte/clientes`. O item de menu correspondente pode ainda não estar visível na barra lateral em todos os perfis — se não encontrar o atalho, acesse pelo endereço direto.

![Clientes de Suporte](/img/manual/erp/suporte-clientes.png)

## Pré-requisitos

- A **Pessoa** que será o cliente já precisa existir no cadastro de **Pessoas** do ERP. Esta tela apenas vincula uma pessoa existente a um contrato de suporte; ela não cria a pessoa.
- Você precisa estar autenticado no ERP. A listagem fica disponível para usuários do suporte e da gerência.

## O que você vê nesta tela

A tela mostra uma lista paginada com todos os clientes de suporte cadastrados. Cada linha é um cliente.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação do cliente no sistema. |
| **Cliente** | Nome da pessoa (física ou jurídica) que é o cliente do suporte. |
| **Plano** | Plano de suporte contratado: Básico, Profissional, Enterprise ou Personalizado. |
| **Valor/mês** | Valor mensal do contrato, em reais. Mostra "—" quando não há valor informado. |
| **Status** | Situação do cliente: Ativo (verde), Inativo ou Suspenso (amarelo). |

No rodapé da lista você encontra a paginação e pode escolher quantos itens ver por página.

## O que dá pra fazer aqui

- **Novo cliente** — botão no topo direito, abre o formulário de cadastro.
- **Editar** — ícone de lápis na linha, ou um duplo clique sobre a linha do cliente.
- **Excluir** — ícone de lixeira na linha (pede confirmação).

### Cadastrar um novo cliente de suporte
1. Clique em **Novo cliente** no canto superior direito.
2. Em **Pessoa** (obrigatório), digite o nome para buscar e selecione a pessoa já cadastrada no sistema. Sem este campo o botão de salvar fica bloqueado.
3. Escolha o **Plano**: Básico, Profissional, Enterprise ou Personalizado.
4. Informe o **Valor mensal (R$)** — o campo já formata como moeda enquanto você digita.
5. Em **Responsável**, busque e selecione o usuário interno que cuidará desse cliente (opcional).
6. Defina o **Status**: Ativo, Inativo ou Suspenso.
7. Clique em **Criar cliente**. O cliente aparece na lista.

> Apenas a **Pessoa** é obrigatória. Plano, valor, responsável e status têm valores padrão (Plano **Básico** e Status **Ativo**) e podem ser ajustados depois.

![Novo cliente de suporte](/img/manual/erp/suporte-clientes-novo.png)

### Editar um cliente
1. Clique no ícone de lápis na linha do cliente (ou dê duplo clique na linha).
2. Ajuste os campos desejados — pessoa, plano, valor, responsável ou status.
3. Clique em **Salvar alterações**.

### Excluir um cliente
1. Clique no ícone de lixeira na linha do cliente.
2. Confirme em **Excluir** na janela de confirmação. O cliente sai da lista (a exclusão é tratada como definitiva pela interface).

## Regras de negócio

- **Status e o que cada um significa.** O status do cliente define como ele aparece e é tratado nos demais módulos:
  - **Ativo** — contrato vigente, cliente em atendimento normal.
  - **Inativo** — cliente desligado/encerrado. Use quando o contrato terminou e você quer manter o histórico em vez de excluir.
  - **Suspenso** — atendimento temporariamente parado (ex.: pendência financeira), com intenção de retomar.
- **Vínculo com Pessoa.** O cliente sempre aponta para uma pessoa do cadastro central. O nome exibido na lista é o da pessoa vinculada.
- **Responsável.** O campo Responsável vincula um usuário interno do ERP (não uma pessoa qualquer) como ponto de contato. Serve para organização e filtros da equipe.
- **Valor mensal.** É apenas o registro do valor do contrato; este cadastro não gera cobranças nem lançamentos financeiros automáticos.

## Erros comuns

- **Botão Criar bloqueado:** falta selecionar a **Pessoa**. É o único campo obrigatório.
- **Pessoa não aparece na busca:** ela ainda não está no cadastro de **Pessoas**. Cadastre-a primeiro e volte aqui.
- **Excluiu por engano:** prefira mudar o **Status** para **Inativo** em vez de excluir, pois a exclusão remove o cliente da lista de trabalho.

## Dicas e observações
- A **Pessoa** precisa já existir no cadastro de pessoas do ERP. Se o cliente ainda não estiver lá, cadastre-o antes em **Pessoas**.
- A exclusão não pode ser desfeita. Em vez de excluir um cliente que apenas parou de ser atendido, considere mudar o **Status** para **Inativo** ou **Suspenso** para manter o histórico.
- Use o campo **Responsável** para deixar claro quem na equipe é o ponto de contato daquele cliente.

## Veja também
- [Projetos de Suporte](./suporte-projetos.md)
- [Filas de Atendimento](./suporte-filas.md)
