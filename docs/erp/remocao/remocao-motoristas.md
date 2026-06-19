---
title: Motoristas
sidebar_position: 15
---

# Motoristas

Esta tela cadastra os motoristas do pátio. Um motorista pode estar vinculado a um reboquista (empresa) ou ser autônomo, e recebe acesso próprio ao aplicativo.

## Como acessar
**Remoção** → **Pátio** → **Motoristas**.

![Motoristas](/img/manual/erp/remocao-motoristas.png)

## O que você vê nesta tela
No topo há um aviso explicando o papel do motorista. Abaixo, um campo de busca por nome ou CNH e a lista de motoristas cadastrados.

| Coluna | O que é |
|---|---|
| # | Número do motorista no sistema. |
| Motorista | Nome (com avatar) e o documento (CPF) abaixo. |
| CNH | Número da CNH e a categoria, quando informada. |
| Reboquista | Empresa à qual o motorista está vinculado, ou o marcador **Autônomo**. |
| Status | Ativo ou Inativo. |

## O que dá pra fazer aqui

### Buscar um motorista
Digite parte do nome ou da CNH no campo de busca.

### Cadastrar um motorista
1. Clique em **Novo motorista**.
2. Preencha **Nome completo** — é o único campo obrigatório.
3. Informe o **CPF** (opcional). O campo formata e valida o documento; se preenchido, precisa ser válido, senão o salvar é bloqueado. Quando o CPF informado já existe como pessoa no sistema, o motorista é vinculado a essa mesma pessoa em vez de criar uma duplicada.
4. Em **Reboquista (empresa)**, escolha a empresa à qual o motorista pertence, ou deixe como **Autônomo (sem empresa)**.
5. Preencha a **CNH** e a **Categoria** (ex.: D).
6. Informe a **Validade da CNH** (campo de data).
7. Clique em **Salvar**.

![Novo motorista](/img/manual/erp/remocao-motoristas-novo.png)

### Editar um motorista
Na linha do motorista, clique no ícone de lápis (**Editar**), ajuste os campos e clique em **Salvar**.

### Desativar um motorista
Na linha do motorista, clique no ícone de desativar e confirme. A desativação é lógica (soft delete): o motorista some da lista, mas o histórico é preservado. O formulário de cadastro não tem um campo "Ativo" para reativar manualmente — recadastre com o mesmo CPF para reaproveitar o cadastro (o sistema reativa o papel automaticamente nesse caso).

## Regras de negócio
- O **nome** é obrigatório; o **CPF é opcional**, mas, se preenchido, precisa ser válido — o botão de salvar fica bloqueado enquanto o CPF estiver inválido.
- O motorista é um **papel sobre a Pessoa** — o mesmo cadastro de pessoa pode ter outros papéis no sistema (ex.: também ser reboquista ou vistoriador).
- Cada pessoa só pode ter **um** papel de motorista. Ao cadastrar com um CPF já existente, o sistema reusa o motorista daquela pessoa (e reativa, se estava desativado), em vez de duplicar.
- O motorista recebe **acesso próprio ao aplicativo** de campo (é por ele que os pings de GPS e o avanço de etapas da remoção chegam ao sistema).
- Os motoristas vinculados a um reboquista também aparecem na página de detalhe daquele reboquista.

## Veja também
- [Reboquistas](../remocao/remocao-reboquistas.md)
- [Detalhe do reboquista](../remocao/remocao-reboquistas-id.md)
- [Vistoriadores](../remocao/remocao-vistoriadores.md)
