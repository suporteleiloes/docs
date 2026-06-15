---
title: Automações
sidebar_position: 5
---

# Automações

As automações executam ações sozinhas quando algo acontece no sistema — por exemplo, enviar um e-mail de boas-vindas quando uma pessoa é cadastrada, ou avisar quando um lote é arrematado. Esta tela lista todas as automações e permite ativar, desativar e criar novas.

## Como acessar

**CRM** → **Automações** (rota `/crm/automacoes`).

![Automações](/img/manual/crm/crm-automacoes.png)

## O que você vê nesta tela

Uma barra de filtros no topo e, abaixo, as automações em **grade** (cartões) ou **lista** (linhas).

| Elemento | O que é |
|---|---|
| Busca | Filtra por nome, descrição ou gatilho. |
| **Todos os gatilhos** | Filtra por evento que dispara a automação. |
| Ordenação | Nome (A–Z), Recém-criadas, Mais execuções ou Mais ações. |
| Abas **Todas / Ativas / Inativas** | Filtram pela situação, com a contagem de cada grupo. |
| Botões grade/lista | Alternam o modo de visualização (a escolha é lembrada). |

Cada automação mostra: o **nome**, a **descrição**, o **gatilho** (evento que a dispara), o número de **ações**, o total de **execuções** (e quantas deram erro), a etiqueta **DRY-RUN** quando está em modo de teste, e um **interruptor** para ligar/desligar.

### Gatilhos disponíveis

Alguns dos eventos que podem disparar uma automação: Pessoa criada, Status mudou, Papel adicionado, Inatividade detectada, Data atingida (agendamento), Negócio mudou de etapa, Atendimento fechado, Leilão publicado, Lance posto/dado/superado, Arremate concluído, Lote arrematado e várias etapas de Habilitação (iniciada, pendente, aprovada, 24h pendente).

## O que dá pra fazer aqui

### Criar uma nova automação

1. Clique em **Nova automação**.
2. Preencha **Nome** (obrigatório). Ex.: "Boas-vindas a novo cadastro".
3. Escolha o **Gatilho** (obrigatório) — o evento que vai disparar a automação.
4. Preencha a **Descrição** (opcional).
5. Clique em **Criar e montar fluxo**.
6. A automação é criada **inativa** e você é levado ao editor visual para montar as ações.

![Nova automação](/img/manual/crm/crm-automacoes-nova.png)

### Ativar ou desativar uma automação

1. Localize a automação na grade ou lista.
2. Clique no **interruptor** (ele fica verde quando ativo).
3. A mudança vale na hora — não é preciso salvar.

### Abrir os detalhes / editar o fluxo

1. Clique no cartão (grade) ou na linha (lista) da automação.
2. Abre a tela de detalhe, onde você vê e ajusta as ações, condições e logs de execução.

### Filtrar e organizar

- Use a **busca** para achar por nome, descrição ou gatilho.
- Use **Todos os gatilhos** para ver só as de um evento específico.
- Use as abas **Ativas / Inativas** para focar num grupo.
- Use a **ordenação** (ex.: "Mais ações") para priorizar.
- Clique em **Limpar filtros** se um filtro deixou a lista vazia.

## Dicas e observações

- Toda automação nasce **inativa**: monte o fluxo de ações antes de ligá-la.
- A etiqueta **DRY-RUN** indica modo de teste — a automação simula as ações sem executá-las de verdade. Bom para validar antes de soltar.
- Fique de olho no contador de **erros**: automações com falhas aparecem também no feed da [tela inicial do CRM](./crm.md).
- A escolha entre grade e lista fica salva no seu navegador.

## Veja também

- [Início do CRM](./crm.md)
- [Listas de contatos](./crm-listas.md)
