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
2. Preencha **Nome completo** (obrigatório).
3. Informe o **CPF** (o campo já formata e valida o documento).
4. Defina o **Status**: Pendente, Aprovado ou Suspenso.
5. Em **Form padrão (code)**, informe o código do modelo de checklist preferido (ex.: `vistoria`).
6. Clique em **Salvar**.

![Novo vistoriador](/img/manual/erp/remocao-vistoriadores-novo.png)

### Editar um vistoriador
Na linha do vistoriador, clique no ícone de lápis (**Editar**), ajuste os campos e clique em **Salvar**.

### Abrir a pessoa
Clique no ícone de pessoa (**Abrir pessoa**) para abrir o cadastro da pessoa vinculada ao vistoriador.

### Desativar um vistoriador
Na linha do vistoriador, clique no ícone de desativar e confirme.

## Dicas e observações
- O nome é obrigatório e o CPF precisa ser válido; o botão de salvar fica bloqueado até as duas condições serem atendidas.
- O vistoriador é um **papel sobre a Pessoa** — o mesmo cadastro de pessoa pode ter outros papéis no sistema.
- Os modelos de checklist (formulários dinâmicos, por tipo de bem) são criados no módulo de **Vistorias**; aqui você apenas aponta qual é o form padrão do vistoriador.

## Veja também
- [GRV / GGV](../remocao/remocao-guias.md)
- [Configurações do Pátio](../remocao/remocao-configuracoes.md)
- [Motoristas](../remocao/remocao-motoristas.md)
