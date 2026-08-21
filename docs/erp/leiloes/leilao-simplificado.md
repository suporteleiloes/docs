---
title: Leilão Simplificado
sidebar_position: 4.5
---

# Leilão Simplificado

O **Leilão Simplificado** é um jeito guiado, passo a passo, de montar e realizar um leilão com o mínimo de configuração. Em vez de preencher dezenas de opções, você informa só o essencial (leiloeiro, comitentes, título, data e os lotes) — o sistema já aplica um padrão de fábrica pronto para funcionar (robô de fechamento, cronômetro, auditório, publicação no site). Depois de criar, uma **esteira** com 5 etapas te acompanha até o fim: montar, realizar, cobrar, documentos e fechar.

É o caminho recomendado para quem está começando ou quer publicar um leilão rápido sem se preocupar com os ajustes avançados.

## Como acessar

**ERP** → **Leilões** → **Leilão Simplificado**.

![Listagem](/img/manual/erp/leilao-simplificado/listagem.jpg)

## O que você vê nesta tela

Uma lista de **cards**, um por leilão, com o essencial de cada um. No topo há o botão **+ Novo leilão simplificado**, um campo de busca por título e um filtro de status.

### Cada card mostra

| Item | O que é |
|---|---|
| Título | Nome/descrição interna do leilão |
| Status | Etiqueta colorida da situação (Em preparação, Aberto para lances, Em leilão, Encerrado) |
| Fecha em | Data e hora de fechamento |
| Lotes | Quantidade de lotes cadastrados |
| Código | Número (#) de identificação do leilão |
| Abrir esteira → | Clique no card para abrir a esteira daquele leilão |

### Busca e filtro

| Item | O que faz |
|---|---|
| Buscar por título | Filtra os cards pelo texto digitado |
| Status | Mostra só os leilões de uma fase: Em preparação, Aberto para lances, Em leilão ou Encerrados |

## Criar um leilão simplificado

Clique em **+ Novo leilão simplificado**. Abre uma janela única com **3 passos**.

### Passo 1 — Leiloeiro e comitentes

![Passo 1 — leiloeiro e comitentes](/img/manual/erp/leilao-simplificado/modal-1-leiloeiro-comitentes.jpg)

1. Escolha o **Leiloeiro** (busca por nome).
2. Adicione um ou mais **Comitentes** — busque e clique; cada um vira uma etiqueta. Pelo menos um é obrigatório.
3. Informe o **Título do leilão** (ex.: *1º Leilão de Veículos*).
4. Informe a **Data de fechamento**.
5. Clique em **Continuar**.

:::info O primeiro comitente é o principal
Ao criar os lotes, o sistema usa o **primeiro comitente** da lista como comitente dos bens. Se seus bens são de comitentes diferentes, cadastre-os depois pela tela de [Lotes](./lotes.md) ou pelo [Loteamento rápido](./loteamento-rapido.md).
:::

### Passo 2 — Configuração automática

![Passo 2 — configuração automática](/img/manual/erp/leilao-simplificado/modal-2-configuracao-automatica.jpg)

O sistema resolve sozinho a melhor configuração e mostra um resumo. Por padrão de fábrica, ele já deixa:

- **Robô de fechamento** ativo (conduz o pregão automaticamente);
- **Cronômetro** de **180 segundos**, do tipo *renovar* (reinicia a cada lance);
- **Fechamento simultâneo** de todos os lotes;
- **Cronômetro sempre ativo**;
- **Lance automático** e **lance antecipado** permitidos;
- **Auditório** no formato *cards lado a lado*;
- **Publicado no site** automaticamente.

O texto ao lado do resumo indica de onde veio a configuração (*padrão de fábrica*, *padrão global*, *padrão do leiloeiro* ou *padrão do comitente*). Se quiser mudar algo pontual, clique em **Ajustar** para abrir os campos avançados (tempo do cronômetro, intervalo entre lotes, ligar/desligar robô, etc.). Depois, clique em **Continuar**.

:::tip Não precisa mexer aqui
Na maioria dos casos, você só clica em **Continuar**. A configuração automática já foi pensada para um leilão funcionar de ponta a ponta. Para mudar o padrão de todos os próximos leilões, use a tela de configuração (veja [Configuração do padrão](#configuracao-do-padrao) mais abaixo).
:::

### Passo 3 — Lotes (planilha rápida)

![Passo 3 — planilha de lotes](/img/manual/erp/leilao-simplificado/modal-3-lotes-planilha.jpg)

Uma planilha com **uma linha por lote**. Preencha as colunas e use **+ Adicionar lote** para novas linhas.

| Coluna | O que é |
|---|---|
| Nº | Número do lote |
| Matrícula / Placa | Identificador do bem (matrícula do imóvel, placa do veículo…) |
| Descrição * | Descrição abreviada do bem (**obrigatória**) |
| Tipo do bem * | Categoria do bem, escolhida numa árvore (**obrigatório**) |
| Avaliação | Valor de avaliação |
| Lance inicial | Valor inicial dos lances |
| Venda mínima | Valor mínimo de venda |
| Fotos | Uma ou mais imagens do bem |
| Arquivos | Documentos anexos (laudos, matrícula em PDF…) |

Cada linha preenchida cria um **Bem** e um **Lote** já vinculados ao leilão. Ao terminar, clique em **Criar leilão**. O sistema cria o leilão, depois cada lote (mostrando o progresso *"Criando lote 3 de 10…"*) e sobe as fotos/arquivos. Ao final, abre direto a **esteira** do leilão recém-criado.

:::warning Descrição e Tipo do bem são obrigatórios
Toda linha que você começar a preencher precisa ter pelo menos a **Descrição** e o **Tipo do bem**. Categorias em negrito na árvore de tipos são apenas agrupadoras e não podem ser selecionadas — escolha um item filho.
:::

## A esteira

Depois de criar (ou clicando em **Abrir esteira** num card), você chega à esteira do leilão: um trilho de **5 etapas** — **Montar → Realizar → Cobrar → Documentos → Fechar**. A etapa sugerida é destacada conforme o status do leilão, mas você pode clicar em qualquer etapa para navegar livremente.

![Leilão na esteira](/img/manual/erp/leilao-simplificado/esteira-criado.jpg)

### Montar

![Etapa Montar](/img/manual/erp/leilao-simplificado/esteira-montar.jpg)

Mostra quantos lotes já existem. Use **Adicionar / editar lotes** para abrir o [Loteamento rápido](./loteamento-rapido.md) e ajustar tudo. Quando terminar, clique em **Concluir montagem →** — o leilão passa para **Aberto para lances**. Você ainda pode ajustar lotes depois disso.

### Realizar

![Etapa Realizar](/img/manual/erp/leilao-simplificado/esteira-realizar.jpg)

Abre as telas de condução do pregão:

- **Abrir Controlador** — painel de condução em tela cheia (veja [Controlador](./controlador.md));
- **Tela do Leiloeiro** — visão do leiloeiro no pregão (veja [Leiloeiro](./leiloeiro.md));
- **Auditório** — transmissão pública do pregão (veja [Auditório](./auditorio.md)).

Clique em **Iniciar leilão** para entrar em pregão (**Em leilão**). A partir daí, o **robô fecha os lotes automaticamente** conforme o cronômetro.

### Cobrar

Lista os lotes vendidos com o nome do arrematante e o valor. Você pode **Gerar nota** de um lote por vez, ou abrir a **tela completa de cobrança** (veja [Cobrança](./cobranca.md)). A geração em massa fica na etapa de Documentos.

### Documentos

Gera os documentos do leilão:

- **Edital** — botões **Gerar edital** e **Baixar edital** (PDF);
- **Notas de arrematação** — **Gerar notas em massa** (envia um ZIP com todas as notas por e-mail);
- **Ata e relatórios** — atalhos para [Relatórios](./relatorios.md) e [Documentos do leilão](./documentos.md).

### Fechar

![Etapa Fechar](/img/manual/erp/leilao-simplificado/esteira-fechar.jpg)

Mostra a situação atual do leilão. Normalmente o **robô encerra o leilão sozinho** ao fechar todos os lotes — só use **Encerrar leilão** manualmente se precisar.

## Configuração do padrão {#configuracao-do-padrao}

Você pode mudar o padrão aplicado no Passo 2 de todos os leilões simplificados em **Configurações** → **Leilão Simplificado**.

São **3 escopos**, com esta ordem de precedência (o mais específico vence):

> **comitente** > **leiloeiro** > **global** > **fábrica**

| Escopo | Para que serve |
|---|---|
| **Padrão global** | Um preset base para todo o seu ambiente |
| **Por leiloeiro** | Sobrescreve o global para leilões de um leiloeiro específico |
| **Por comitente** | Sobrescreve o leiloeiro e o global para um comitente específico |

Todos os escopos editam os mesmos campos, organizados em seções: **Robô e cronômetro** (controle automático, fechamento simultâneo, cronômetro, tempo do pregão, intervalos), **Lances** (automático, antecipado), **Auditório** (layout padrão, permitir escolha) e **Geral** (tipo de leilão, habilitação, publicar no site, fuso horário). Onde você não definir nada, vale o padrão de fábrica. O botão **Restaurar padrão de fábrica** recarrega os valores originais (salve para aplicar).

## Regras de negócio

- **Sempre de 1 praça.** O leilão simplificado é criado com praça única. Para leilões de 2ª ou 3ª praça, use o cadastro completo em [Novo leilão](./leiloes-novo.md).
- **Usa a taxa padrão.** O sistema de taxação aplicado é o padrão do ambiente — não há escolha de taxa no fluxo simplificado.
- **Publica no site por padrão.** Salvo se você desmarcar *Publicar no site* nos ajustes (Passo 2) ou na configuração do padrão.
- **Primeiro comitente vira o comitente dos bens.** Todos os lotes criados pela planilha ficam sob o primeiro comitente da lista.
- **Cada linha vira um Bem + um Lote.** Não é uma importação em massa "solta": cada linha preenchida gera as duas entidades já ligadas ao leilão.

## Erros comuns

- **"Preencha leiloeiro, ao menos um comitente, título e data de fechamento."** — falta um dos campos obrigatórios do Passo 1. Complete-os para avançar.
- **"Todas as linhas preenchidas precisam de Descrição (título) e Tipo do bem."** — alguma linha da planilha tem dados, mas sem descrição ou sem tipo. Complete ou remova a linha (botão ×).
- **"Adicione ao menos um lote à planilha."** — você tentou criar o leilão sem nenhum lote. Preencha ao menos uma linha.
- **Falha ao criar um lote no meio do processo.** — o sistema interrompe naquele ponto para você corrigir; os lotes já criados permanecem. Abra a esteira e continue a montagem pelo Loteamento rápido.

## Dicas e observações

- A criação dos lotes acontece um a um, com barra de progresso. Em leilões grandes, isso pode levar alguns segundos — não feche a janela até terminar.
- Você não precisa concluir tudo de uma vez: crie o leilão com poucos lotes e complete depois pela etapa **Montar** da esteira.
- Precisa de controle fino (várias praças, taxas específicas, campos avançados)? Use o fluxo completo em [Novo leilão](./leiloes-novo.md). O Leilão Simplificado e o leilão completo compartilham as mesmas telas de pregão, cobrança e documentos.

## Veja também

- [Loteamento rápido](./loteamento-rapido.md)
- [Novo leilão](./leiloes-novo.md)
- [Auditório](./auditorio.md)
- [Controlador](./controlador.md)
- [Cobrança](./cobranca.md)
- [Robô de encerramento](./robo-encerramento.md)
