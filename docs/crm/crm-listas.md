---
title: Listas de contatos
sidebar_position: 2
---

# Listas de contatos

As listas de contatos agrupam pessoas (nome + e-mail e/ou telefone) para uso em marketing — por exemplo, "Arrematantes ativos" ou "Interessados em imóveis". Cada lista guarda seus próprios inscritos, com status de envio (ativo, desinscrito, etc.).

## Como acessar

**CRM** → **Marketing** → **Listas de contatos** (rota `/crm/listas`).

![Listas de contatos](/img/manual/crm/crm-listas.png)

## O que você vê nesta tela

Uma tabela com todas as listas e uma barra de busca no topo.

| Coluna | O que é |
|---|---|
| **#** | Número (ID) da lista. |
| **Nome** | Nome da lista. |
| **Descrição** | Texto livre de uso interno. |
| **Inscritos** | Quantidade de contatos na lista. |
| (ações) | Botões para gerenciar inscritos, editar e excluir. |

## O que dá pra fazer aqui

- **Nova lista** — botão no canto superior direito.
- **Buscar** — filtra as listas pelo nome.
- **Gerenciar inscritos** — ícone de pessoas na linha (ou dê duplo clique na linha).
- **Editar** — ícone de lápis na linha.
- **Excluir** — ícone de lixeira na linha.

### Criar uma nova lista

1. Clique em **Nova lista**.
2. Preencha **Nome** (obrigatório). Ex.: "Arrematantes ativos".
3. Preencha **Descrição** (opcional) — uma nota de uso interno.
4. Clique em **Criar**. A lista aparece na tabela.

![Nova lista](/img/manual/crm/crm-listas-nova.png)

### Editar uma lista

1. Clique no ícone de **lápis** na linha da lista.
2. Ajuste o nome e/ou a descrição.
3. Clique em **Salvar**.

### Gerenciar inscritos de uma lista

1. Clique no ícone de **pessoas** na linha (ou dê duplo clique na linha).
2. Abre uma janela com o formulário de inscrito à esquerda e a lista de inscritos à direita.
3. Para **adicionar**: preencha **Nome** (obrigatório) e ao menos **E-mail** ou **Telefone**; escolha o **Status** (Ativo, Inativo, Bounced ou Desinscrito) e clique em **Adicionar**.
4. Para **editar um inscrito**: clique no lápis ao lado dele, ajuste os dados e clique em **Salvar**.
5. Para **remover um inscrito**: clique na lixeira ao lado dele e confirme.
6. Clique em **Fechar** quando terminar.

![Inscritos da lista](/img/manual/crm/crm-listas-inscritos.png)

### Excluir uma lista

1. Clique no ícone de **lixeira** na linha.
2. Confirme. **Atenção:** a lista e todos os seus inscritos são removidos.

## Dicas e observações

- Ao adicionar um inscrito você precisa informar **nome + (e-mail ou telefone)** — só o nome não basta.
- O **status** do inscrito controla envios: "Bounced" (e-mail rejeitou) e "Desinscrito" sinalizam que aquele contato não deve mais receber mensagens.
- Excluir uma lista é definitivo e leva junto todos os inscritos — confira antes de confirmar.

## Veja também

- [Importar pessoas (CSV)](./crm-pessoas-import.md)
- [Início do CRM](./crm.md)
