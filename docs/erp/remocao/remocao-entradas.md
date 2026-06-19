---
title: Entradas no Pátio
sidebar_position: 7
---

# Entradas no Pátio

A tela de **Entradas no Pátio** formaliza o recebimento de um bem no pátio. Ao registrar a entrada, você informa quem trouxe o bem (reboquista, motorista, receptador), em qual vaga ele foi alocado e se houve divergências. Ao mesmo tempo, a entrada pode abrir a estadia, que passa a calcular as diárias.

## Como acessar

**ERP** → **Pátio & Remoção** → **Entradas** (ou abra o endereço `/remocao/entradas`).

![Entradas no Pátio](/img/manual/erp/remocao-entradas.png)

## O que você vê nesta tela

No topo há o botão **Registrar entrada** e um aviso explicando o fluxo. Abaixo, um campo de busca e a lista de entradas.

## Pré-requisitos

Antes de registrar uma entrada, é bom já ter:

- O **bem** cadastrado (você o busca por placa ou descrição).
- O **pátio** cadastrado e, de preferência, com **vagas** (para alocar o bem). Ver [Pátios](./patios-lista.md) e [Vagas do pátio](./patios-id-vagas.md).
- Opcionalmente, um **contrato de pátio** se a guarda vai gerar cobrança de diárias. Ver [Contratos de Pátio](./remocao-contratos.md).
- Opcionalmente, **reboquista**, **motorista** e **receptador** cadastrados, para registrar quem participou.

O único campo realmente obrigatório é o **bem**.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número da entrada. |
| Bem | Descrição do bem recebido. |
| Pátio | Sigla do pátio onde o bem entrou. |
| Entrada | Data/hora da entrada. |
| Estadia | Número da estadia aberta junto com a entrada (quando houver). |
| Status | **Registrada** (entrada normal) ou **Divergente** (houve divergência no recebimento). |

## O que dá pra fazer aqui

### Buscar uma entrada

Digite parte da descrição do **bem** no campo de busca.

### Registrar uma entrada

1. Clique em **Registrar entrada**.
2. No campo **Bem**, busque pela placa ou descrição e selecione o bem.
3. Selecione o **Pátio**.
4. Em **Vaga**, escolha uma das vagas livres do pátio (a lista só fica disponível depois de escolher o pátio; use **Sem vaga** se não for alocar).
5. Se a guarda vai gerar cobrança, selecione o **Contrato (estadia)** que vai reger as diárias (opcional — pode abrir a estadia sem contrato e definir depois).
6. Informe a equipe: **Reboquista**, **Motorista** e **Receptador** (todos opcionais).
7. Informe a **Data/hora de entrada** (se deixar em branco, o sistema usa a data/hora atual).
8. Preencha **Observações** e, se houver, **Divergências**.
9. Deixe ativada a opção **Abrir estadia (iniciar cobrança de diárias)** se a entrada já deve iniciar a contagem das diárias. Desative para registrar a entrada sem abrir estadia.
10. Clique em **Registrar entrada**.

![Registrar entrada](/img/manual/erp/remocao-entradas-nova.png)

## Dicas e observações

- O campo **Vaga** só lista vagas livres e fica habilitado **somente após** você escolher o pátio. Ao escolher uma vaga, ela passa a **Ocupada** e o bem fica vinculado a ela.
- Ao informar algo em **Divergências**, a entrada **passa** para o status **Divergente** na lista (caso contrário, fica **Registrada**).
- Com **Abrir estadia** ligado, a estadia é criada automaticamente e a cobrança de diárias começa — você acompanha o custo na tela [Estadias & Custos](./remocao-estadias.md). O sistema **não duplica estadias**: se o bem já tiver uma estadia em aberto, a entrada reaproveita a estadia existente em vez de criar outra.
- O registro da entrada **dispara um evento interno de remoção**. Quando o comitente do bem usa integrações (por exemplo, seguradoras/órgãos), esse evento é o que aciona a comunicação automática — você não precisa fazer nada a mais.

## Erros comuns

- **Tentar registrar sem informar o bem** — o bem é obrigatório; selecione-o antes de salvar.
- **Esquecer de escolher o pátio antes da vaga** — a lista de vagas só aparece depois do pátio.
- **Deixar "Abrir estadia" ligado sem querer iniciar cobrança** — desative a opção se a entrada não deve começar a contar diárias.

## Veja também

- [Estadias & Custos](./remocao-estadias.md)
- [Contratos de Pátio](./remocao-contratos.md)
- [Solicitações de Remoção](./remocao-solicitacoes.md)
- [Painel do Pátio](./remocao.md)
