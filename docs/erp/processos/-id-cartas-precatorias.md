---
title: Cartas precatórias do processo
sidebar_position: 15
---

# Cartas precatórias do processo

Esta tela lista e gerencia as **cartas precatórias** (e recursos relacionados) de um processo. É a mesma tela de Cartas Precatórias, mas já filtrada pelo processo aberto. Aqui você cadastra novas cartas, edita as existentes e acompanha o status de cada uma.

## Como acessar

Abra um processo em **ERP** → **Processos** e vá para o atalho **Cartas Precatórias** (aba **Recursos / Carta Precatória**). A URL é `/processo/{id}/cartas-precatorias`.

> A versão geral, com todas as cartas precatórias de todos os processos, fica em **/cartas-precatorias**.

![Cartas precatórias do processo](/img/manual/erp/-id-cartas-precatorias.png)

## O que você vê nesta tela

Uma tabela com as cartas precatórias do processo:

| Coluna | O que é |
|---|---|
| # | Identificador da carta. |
| Número | Número da carta/recurso (formato CNJ). |
| Tipo | Tipo do recurso (precatória, agravo etc.). |
| Origem | Comarca/órgão de origem. |
| Destino | Comarca/órgão de destino. |
| Envio | Data de envio. |
| Status | Em andamento, Finalizada ou Cancelada. |
| (ações) | Botões para editar e excluir. |

## O que dá pra fazer aqui

### Cadastrar uma carta precatória
1. Clique em **Nova carta**.
2. Preencha os campos. São **obrigatórios**: **Número (CNJ)**, **Tipo**, **Status**, **Instância**, **Órgão**, **Data** e **Advogado**.
3. Campos opcionais: **Processo** (já vem preenchido quando você acessa pelo processo), **Cidade**, **UF**, **Comarca**, **Vara** (selecione a comarca primeiro para liberar a lista de varas), **Origem**, **Destino**, **Data de envio**, **Data de retorno** e **Descrição / observações**.
4. Clique em **Criar**.

> Se faltar algum campo obrigatório, o sistema avisa quais preencher antes de salvar.

### Editar uma carta
1. Clique no botão de **editar** (lápis) na linha.
2. Ajuste os campos.
3. Clique em **Salvar**.

### Excluir uma carta
1. Clique no botão de **excluir** (lixeira) na linha.
2. Confirme a exclusão.

## Dicas e observações

- O campo **Vara** só fica disponível depois que você seleciona uma **Comarca**; ao trocar a comarca, a vara é reiniciada.
- O **Número** usa máscara CNJ automaticamente conforme você digita.
- Status possíveis: **Em andamento**, **Finalizada** e **Cancelada**.
- A exclusão é **lógica** (soft-delete): a carta some da lista, mas o registro é preservado internamente.

> A confirmar: as colunas/campos **Origem**, **Destino**, **Data de envio** e **Data de retorno** ainda **não são gravados** pela API atual — você consegue digitá-los, mas eles não ficam salvos e a lista os mostra como traço (—). Use **Comarca/Vara**, **Cidade/UF** e a **Descrição / observações** para registrar essas informações enquanto a persistência não é implementada. Mesmo comportamento da tela geral de [Cartas Precatórias](./cartas-precatorias.md).

## Veja também

- [Processo (detalhe)](./-id.md)
- [Etapas / Produtividade do processo](./-id-produtividade.md)
