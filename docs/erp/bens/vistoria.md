---
title: Vistorias
sidebar_position: 4
---

# Vistorias

A tela de **Vistorias** lista e organiza as vistorias dos bens — desde a solicitação até a conclusão. É aqui que você registra uma nova vistoria, acompanha o andamento, baixa o laudo em PDF e abre cada vistoria para ver e preencher os detalhes.

## Pré-requisitos

- Toda vistoria nasce **vinculada a um bem** já cadastrado — não existe vistoria "solta". Se o bem ainda não existe, cadastre-o primeiro em [Gestão de Bens](./bens-lista.md).
- O **vistoriador** é opcional na criação, mas, se quiser preencher, ele precisa estar cadastrado em **Pátio** → **Cadastros** → **Vistoriadores**.
- O **formulário GRV** que será preenchido na vistoria é definido por tipo de bem/vistoriador. Se nenhum formulário estiver configurado, a aba GRV avisa para configurá-lo em **Formulários**.

> Permissões: usuários com perfil de **Vistoriador** ou **Reboquista** enxergam e operam apenas as **suas próprias** vistorias. Perfis administrativos veem todas.

## Como acessar

**ERP** → **Bens** → **Administração de Bens** → **Vistoria** (o mesmo atalho também aparece em **Pátio** → **Estadia & Cobrança** → **Vistorias**).

![Vistorias](/img/manual/erp/vistoria.png)

## O que você vê nesta tela

No topo há três abas que filtram a lista pelo estágio da vistoria, cada uma mostrando a contagem de registros:

| Aba | O que mostra |
|---|---|
| Ativas | Vistorias **Solicitadas** ou **Iniciadas** (ainda em andamento). |
| Concluídas | Vistorias **Concluídas**. |
| Canceladas | Vistorias **Canceladas**. |

As quatro situações possíveis de uma vistoria são: **Solicitado** (recém-criada), **Iniciada** (vistoriador começou), **Concluído** (finalizada) e **Cancelado**.

Abaixo, a barra de busca (por bem ou vistoriador), o botão **Mais filtros** e a lista em tabela.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número (ID) da vistoria. |
| Registro | Data em que a vistoria foi criada. |
| Início | Data de início. |
| Conclusão | Data de conclusão. |
| Vistoriador | Responsável pela vistoria. |
| Bem | Bem vistoriado (com placa/código, quando houver). |
| Lote | Lote relacionado, se houver. |
| Cliente | Cliente/comitente do bem. |
| Situação | Etiqueta: Solicitado, Iniciada, Concluído ou Cancelado. |

Ao final de cada linha há os botões de ação: **Baixar laudo** e **Excluir**.

## O que dá pra fazer aqui

### Registrar uma nova vistoria

1. Clique em **Nova vistoria** (canto superior direito).
2. No modal, selecione o **Bem** (busque por nome, descrição ou placa) — campo obrigatório.
3. Opcionalmente, selecione o **Vistoriador**.
4. Clique em **Salvar**. A vistoria é registrada e aparece na lista.

> Dica: ao abrir esta tela a partir de uma remoção/entrada de bem, o campo **Bem** já vem preenchido e o modal de nova vistoria abre automaticamente.

### Abrir / preencher uma vistoria

Dê **duplo clique** na linha da vistoria para abrir o detalhe, onde você consulta os dados, preenche o formulário GRV e gerencia as fotos. Veja [Detalhe da vistoria](./vistoria-id.md).

### Baixar o laudo (PDF)

1. Na linha da vistoria, clique no botão **Baixar laudo**.
2. O PDF do laudo é gerado e baixado automaticamente.

### Excluir uma vistoria

1. Na linha da vistoria, clique no botão **Excluir**.
2. Confirme na caixa de diálogo. A ação não pode ser desfeita.

### Filtrar com "Mais filtros"

1. Clique em **Mais filtros**.
2. Informe o **Vistoriador**, o **Tipo de data** (Criação, Início ou Prazo) e o intervalo de **datas (De / Até)**.
3. Clique em **Aplicar**. Para zerar, use **Limpar filtros**.

## Dicas e observações

- A contagem ao lado de cada aba (Ativas / Concluídas / Canceladas) reflete o total daquele filtro.
- Você pode combinar a busca por texto com os filtros avançados.

## Veja também

- [Detalhe da vistoria](./vistoria-id.md)
- [A ficha do bem](./bens-id.md)
- [Gestão de Bens](./bens-lista.md)
