---
title: Detalhe do negócio
sidebar_position: 3
---

# Detalhe do negócio

Esta é a ficha completa de um negócio. Aqui você vê o resumo da oportunidade, muda a etapa do funil, fecha como ganho ou perdido, gera a **proposta comercial em PDF** e gerencia tudo o que está ligado a ele: arquivos, notas, contatos, e-mails, propostas, bens, envolvidos, tarefas, movimentações e histórico.

## Pré-requisitos e permissões

- Visualizar a ficha exige a permissão de **ver negócio** (`NEGOCIO_SHOW`).
- Editar, trocar etapa, ganhar, perder e reabrir exigem a permissão de **editar negócio** (`NEGOCIO_UPDATE`).
- Sem a permissão correspondente o botão/ação não aparece (ou retorna erro de acesso negado).

## Como acessar

Abra a partir da tela de [Negócios](negocios.md) (clicando/duplo clique em um negócio) ou do [Kanban do funil](crm-negocios-kanban.md). A URL é `/crm/negocios/<número do negócio>`.

![Detalhe do negócio](/img/manual/crm/crm-negocios-id.png)

## O que você vê nesta tela

No cabeçalho ficam o título do negócio e os botões de ação (Voltar, Editar, **Gerar proposta (PDF)**, Ganhar, Perder ou Reabrir).

Logo abaixo, o **cartão-resumo** com:

| Campo | O que é |
|---|---|
| Situação | Aberto, Ganho ou Perdido |
| Valor | Valor do negócio |
| Pessoa | Cliente/contato principal |
| Organização | Empresa vinculada |
| Funil / Etapa | Funil e etapa atual (a etapa pode ser trocada aqui mesmo num menu) |
| Previsão | Data esperada de fechamento |
| Probabilidade | Chance de fechamento (%) |
| Descrição | Texto livre do negócio |
| Motivo da perda | Aparece quando o negócio foi perdido |

Abaixo do resumo, as **abas** de conteúdo.

## O que dá pra fazer aqui

### Trocar a etapa do funil

No resumo, em **Funil / Etapa**, escolha outra etapa no menu suspenso. A mudança é registrada na hora (disponível enquanto o negócio estiver aberto).

### Editar o negócio

Clique em **Editar** para abrir o formulário completo (mesmos campos do cadastro).

### Marcar como ganho

1. Clique em **Ganhar**.
2. Informe o **valor final** fechado. Se você alterar o valor aqui, ele é salvo no negócio antes do fechamento; o negócio é então marcado como **ganho** e **fechado**.
3. Clique em **Confirmar ganho**.

### Marcar como perdido

1. Clique em **Perder**.
2. Escolha o **Motivo** (Preço, Concorrência, Timing, Produto ou Outros) e adicione **Observações** se quiser. O motivo escolhido (com as observações) passa a aparecer no resumo em **Motivo da perda**.
3. Clique em **Confirmar perda**. O negócio é marcado como **perdido** e **fechado**.

### Reabrir um negócio fechado

Quando o negócio já está ganho ou perdido, o botão **Reabrir negócio** aparece. Clique e confirme para que ele volte ao fluxo ativo (e reapareça no Kanban).

## As abas

### Arquivos

Anexe documentos (contratos, propostas).

1. Clique em **Enviar arquivo**.
2. Selecione um ou vários arquivos.

Cada arquivo da lista pode ser **baixado** ou **removido**. O envio também fica registrado na aba Histórico.

### Notas

Registre anotações sobre o negócio.

1. Escreva o texto na caixa.
2. Clique em **Publicar nota**.

As notas mostram autor e data, e podem ser removidas.

### Contatos

Mostra os **telefones** e **e-mails** da pessoa do negócio, com botões de ação rápida: **Ligar**, **WhatsApp** e **Enviar e-mail**. Para adicionar/alterar contatos, edite o cadastro da pessoa.

### E-mail

Histórico de e-mails trocados com a pessoa (ID, data de envio, data de leitura, assunto, destinatário e canal). O botão **Novo e-mail** abre seu programa de e-mail já endereçado ao contato.

> **Rastreio de e-mail (abertura e clique):** ao enviar um e-mail individual (1:1) para a pessoa pelo CRM, o sistema passa a **registrar quando ele é aberto e quando um link é clicado**. O histórico então indica se a mensagem foi **aberta** e se o contato **clicou** — útil para saber se vale a pena um novo contato.

### Propostas

Propostas comerciais em PDF geradas para o negócio.

- Clique em **Gerar proposta (PDF)** (também disponível no cabeçalho) para gerar um documento profissional a partir das **linhas de produto** do negócio. A proposta sai com a **identidade visual** da leiloeira (Brand Kit), os **dados do cliente e do vendedor**, os **itens**, o **valor total**, a **validade** (em dias) e as **observações**.
- A lista de propostas mostra cada uma gerada, com **número**, **valor**, **validade** e **status**, e permite **baixar de novo** (re-download) a qualquer momento.

![Proposta comercial em PDF](/img/manual/crm/crm-negocio-proposta.png)

### Bens

Bens (imóveis, veículos, etc.) vinculados ao negócio.

1. Clique em **Vincular bem**.
2. Busque pelo título/descrição e selecione.
3. Confirme.

Cada bem pode ser desvinculado pelo ícone de lixeira.

### Envolvidos

Pessoas envolvidas além do contato principal.

1. Clique em **Adicionar envolvido**.
2. Busque a pessoa e escolha o **papel** (Comprador, Vendedor, Interessado ou Outro).
3. Confirme.

### Tarefas

Tarefas ligadas ao negócio.

1. Clique em **Nova tarefa**.
2. Preencha os dados da tarefa e salve.

Duplo clique em uma linha (ou o ícone de editar) abre a tarefa.

### Movimentações

Lista cronológica das movimentações registradas no negócio.

### Histórico

Linha do tempo completa de eventos do negócio (criação, mudanças, anexos, notas, etc.), com autor e data.

## Erros comuns

- **Não consigo trocar a etapa / não vejo Ganhar e Perder**: o negócio já está fechado (ganho ou perdido). Use **Reabrir negócio** para voltá-lo ao fluxo ativo.
- **Não vejo o botão de uma ação**: provavelmente falta a permissão de editar negócio (`NEGOCIO_UPDATE`). Fale com o administrador.
- **Aba Arquivos ou Notas vazia após anexar**: como a lista é reconstruída do histórico, atualize a tela; o item também consta na aba Histórico.

## Dicas e observações

- Notas e arquivos não têm "lista própria" no sistema: eles são reconstruídos a partir do histórico, por isso aparecem também na aba Histórico.
- Trocar etapa, ganhar, perder e reabrir só ficam disponíveis conforme a situação do negócio (um negócio fechado não mostra Ganhar/Perder, e sim Reabrir).
- Toda troca de etapa e todo fechamento (ganho/perdido/reaberto) são registrados na aba **Histórico**, com autor e data.

## Veja também

- [Negócios](negocios.md)
- [Kanban do funil](crm-negocios-kanban.md)
- [Previsão & Metas de Vendas](crm-forecast.md)
- [Atividades e Agenda](crm-atividades.md)
