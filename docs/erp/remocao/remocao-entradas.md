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
5. Selecione o **Contrato (estadia)** que vai reger a cobrança.
6. Informe a equipe: **Reboquista**, **Motorista** e **Receptador**.
7. Informe a **Data/hora de entrada**.
8. Preencha **Observações** e, se houver, **Divergências**.
9. Deixe ativada a opção **Abrir estadia (iniciar cobrança de diárias)** se a entrada já deve iniciar a contagem das diárias. Desative para registrar a entrada sem abrir estadia.
10. Clique em **Registrar entrada**.

![Registrar entrada](/img/manual/erp/remocao-entradas-nova.png)

## Dicas e observações

- O campo **Vaga** só lista vagas livres e fica habilitado **somente após** você escolher o pátio.
- Ao informar algo em **Divergências**, a entrada tende a aparecer com o status **Divergente** na lista.
- Com **Abrir estadia** ligado, a estadia é criada automaticamente e a cobrança de diárias começa — você acompanha o custo na tela [Estadias & Custos](./remocao-estadias.md).

## Veja também

- [Estadias & Custos](./remocao-estadias.md)
- [Contratos de Pátio](./remocao-contratos.md)
- [Solicitações de Remoção](./remocao-solicitacoes.md)
- [Painel do Pátio](./remocao.md)
