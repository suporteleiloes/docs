---
title: Vistoriadores
sidebar_position: 16
---

# Vistoriadores

Esta tela cadastra os vistoriadores — quem executa os checklists e vistorias (formulários dinâmicos) no aplicativo. Cada vistoriador pode ter um modelo de checklist preferido, definido pelo "form padrão".

## Como acessar
**Remoção** → **Pátio** → **Vistoriadores**.

![Vistoriadores](/img/manual/erp/remocao-vistoriadores.png)

## O que você vê nesta tela
No topo há um aviso explicando o papel do vistoriador. Abaixo, um campo de busca por nome e a lista de vistoriadores cadastrados.

| Coluna | O que é |
|---|---|
| # | Número do vistoriador no sistema. |
| Vistoriador | Nome (com avatar). |
| Form padrão | Código do modelo de checklist preferido deste vistoriador. |
| Status | Pendente, Aprovado, Suspenso ou Inativo. |

## O que dá pra fazer aqui

### Buscar um vistoriador
Digite parte do nome no campo de busca.

### Cadastrar um vistoriador
1. Clique em **Novo vistoriador**.
2. Preencha **Nome completo** — é o único campo obrigatório.
3. Informe o **CPF** (opcional). O campo formata e valida o documento; se preenchido, precisa ser válido. Quando o CPF já existe como pessoa no sistema, o vistoriador é vinculado a essa mesma pessoa.
4. Defina o **Status**: Pendente, Aprovado ou Suspenso. O padrão é **Aprovado**.
5. Em **Form padrão (code)**, informe o código do modelo de checklist preferido. O campo já vem sugerido como `vistoria`.
6. Clique em **Salvar**.

![Novo vistoriador](/img/manual/erp/remocao-vistoriadores-novo.png)

### Editar um vistoriador
Na linha do vistoriador, clique no ícone de lápis (**Editar**), ajuste os campos e clique em **Salvar**.

### Abrir a pessoa
Clique no ícone de pessoa (**Abrir pessoa**) para abrir o cadastro da pessoa vinculada ao vistoriador.

### Desativar um vistoriador
Na linha do vistoriador, clique no ícone de desativar e confirme.

## Regras de negócio
- O **nome** é obrigatório; o **CPF é opcional**, mas, se preenchido, precisa ser válido — o salvar fica bloqueado enquanto o CPF estiver inválido.
- O vistoriador é um **papel sobre a Pessoa** — o mesmo cadastro de pessoa pode ter outros papéis no sistema (motorista, reboquista etc.).
- Os três status são **Pendente**, **Aprovado** e **Suspenso**. O rótulo **Inativo** que aparece na lista não é um status que você escolhe: ele indica um vistoriador **desativado** (removido logicamente). Para desativar, use o botão de desativar na linha.
- Os modelos de checklist (formulários dinâmicos, por tipo de bem) são criados no módulo de **Vistorias**; aqui você apenas aponta qual é o **form padrão** do vistoriador (o `code` do formulário). Se o code informado não existir no módulo de Vistorias, o app não terá um modelo válido para abrir.

## Veja também
- [GRV / GGV](../remocao/remocao-guias.md)
- [Configurações do Pátio](../remocao/remocao-configuracoes.md)
- [Motoristas](../remocao/remocao-motoristas.md)
