---
title: Negócios
sidebar_position: 1
---

# Negócios

A tela de Negócios reúne todas as oportunidades de venda da leiloeira (consultorias, captação de comitentes, vendas diretas, etc.) em um único lugar. Você acompanha cada negócio do início ao fechamento, em dois modos de visualização: **Kanban** (cartões por etapa do funil) e **Lista** (tabela completa).

## Como acessar

**CRM** → **Negócios**.

![Negócios](/img/manual/crm/negocios.png)

## O que você vê nesta tela

No topo há os botões para alternar entre **Kanban** e **Lista**, além do botão **Novo negócio**. Logo abaixo ficam a busca inteligente e o filtro de status.

### Filtro de status

| Opção | Mostra |
|---|---|
| Somente ativos | Negócios ainda abertos (não fechados) — é o padrão |
| Somente fechados | Negócios já encerrados (ganhos ou perdidos) |
| Todos | Todos os negócios, abertos e fechados |
| Ganhos | Apenas os fechados como ganho |
| Perdidos | Apenas os fechados como perdido |

### Visão Kanban

Cada coluna é uma **etapa do funil** padrão. As colunas mostram a quantidade de negócios e a soma dos valores. Cada cartão exibe o título do negócio, a pessoa, o valor e a previsão de fechamento. Na última etapa, cartões ainda abertos exibem o botão **Ganhar**.

### Visão Lista

| Coluna | O que é |
|---|---|
| ID | Número do negócio |
| Título | Nome do negócio (e o valor logo abaixo) |
| Pessoa | Cliente/contato principal |
| Empresa | Organização vinculada |
| Previsão | Data esperada de fechamento |
| Funil | Funil ao qual o negócio pertence |
| Etapa | Etapa atual dentro do funil |
| Situação | Aberto, Ganho ou Perdido |
| Fechado | Se o negócio já foi encerrado |

Todas as colunas da lista permitem ordenação ao clicar no cabeçalho.

## O que dá pra fazer aqui

### Cadastrar um novo negócio

1. Clique em **Novo negócio**.
2. Preencha **Título** (obrigatório). Ex.: "Consultoria de Leilão".
3. Em **Pessoa** (obrigatório), digite o nome para buscar um cadastro existente. Se não existir, você pode clicar em **Criar novo cadastro** para abrir o cadastro de pessoa, ou simplesmente deixar o nome digitado para criar junto.
4. Opcionalmente informe a **Organização** (empresa).
5. Adicione **Tags** se quiser classificar o negócio.
6. Preencha o **Valor (R$)** e a **Previsão de fechamento**.
7. Escolha o **Funil** e a **Etapa do funil** (obrigatória).
8. Ajuste a **Probabilidade (%)** e a **Cor** do cartão se desejar.
9. Escreva uma **Descrição** e, se aplicável, vincule um **Processo**.
10. Clique em **Criar negócio**.

![Novo negócio](/img/manual/crm/negocios-novo.png)

> Ao cadastrar uma pessoa nova direto no negócio, abra **Contatos rápidos da pessoa** para já registrar telefones e e-mails dela.

### Editar um negócio

- No Kanban, clique no cartão.
- Na Lista, dê duplo clique na linha.

O mesmo formulário de cadastro abre preenchido para ajustes.

### Mover de etapa (arrastar e soltar)

No Kanban, arraste o cartão de uma coluna para outra. A etapa é atualizada na hora.

### Marcar como ganho

Nos cartões da última etapa que ainda estão abertos, clique em **Ganhar** e confirme. O negócio é fechado como ganho.

## Dicas e observações

- A visão Kanban depende de existir um funil configurado. Sem funil, a mensagem "Nenhum funil configurado" aparece.
- A busca inteligente procura por título, pessoa e empresa ao mesmo tempo.
- Para o fluxo completo de ganho/perda com motivo e valor final, use o [Kanban do funil](crm-negocios-kanban.md) ou a [tela de detalhe do negócio](<crm-negocios-id.md>).
- Acesso exige o perfil de CRM (permissão `crm/negocio`).

## Veja também

- [Kanban do funil](crm-negocios-kanban.md)
- [Detalhe do negócio](<crm-negocios-id.md>)
- [Callcenter](callcenter.md)
