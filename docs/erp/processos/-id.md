---
title: Processo (detalhe)
sidebar_position: 13
---

# Processo (detalhe)

Esta é a tela completa de um processo. Reúne, em um só lugar, todas as informações e ações ligadas àquele processo: dados gerais, partes envolvidas, movimentações, planejamento, financeiro, etapas de produtividade, bens, recursos, checklist judicial, negócios do CRM e histórico de status.

## Como acessar

Em **ERP** → **Processos**, clique em qualquer processo da lista. Você também chega aqui pelos atalhos de número de processo nas telas de **Réus**, **Autores**, **Escrivães** e **Andamentos**.

![Processo (detalhe)](/img/manual/erp/-id.png)

## O que você vê nesta tela

No alto fica um **cabeçalho compacto** com o número do processo (formato CNJ), a comarca/vara, um selo de **status** atual e, quando for processo eletrônico, o selo do **sistema** (tribunal). Logo abaixo do cabeçalho ficam as **abas** — elas permanecem fixas enquanto você rola o conteúdo.

### Botões no topo da página

| Botão | O que faz |
|---|---|
| ← Voltar | Volta para a tela anterior. |
| Editar cadastro | Abre o formulário com todos os campos do processo para edição. |
| Consultar Robô | Dispara uma consulta ao robô para buscar movimentações/atualizações do processo no tribunal. |
| Gerar Briefing | Gera um PDF de briefing do processo, pronto para enviar ao advogado, e abre em nova aba. |

### Alterar o status do processo

No canto direito do cabeçalho há um **seletor de status** e o botão **Salvar**. Escolha o novo status na lista e clique em **Salvar** — o botão só fica ativo quando você muda o valor.

### As abas

| Aba | O que mostra |
|---|---|
| Visão Geral | Informações do processo, partes, responsável e a análise por IA (fase do processo, alertas). |
| Envolvidos | Lista de todas as partes do processo (autor, réu, advogado, escrivão etc.). |
| Movimentações do Processo | Andamentos registrados, incluindo lançamentos manuais. |
| Publicações DJEN | Publicações captadas do Diário de Justiça Eletrônico Nacional, com opção de resumo por IA. |
| Planejamento | Tarefas e atividades futuras agendadas para o processo. |
| Financeiro | Lançamentos financeiros (contas a pagar/receber) vinculados ao processo. |
| Etapas / Produtividade | Resumo das etapas do fluxo de produtividade do processo. |
| Bens vinculados | Bens ligados ao processo (somente leitura). |
| Recursos / Carta Precatória | Recursos e cartas precatórias do processo. |
| Checklist | Checklist judicial preenchido por bem do processo. |
| CRM (Negócios) | Negócios/oportunidades de CRM ligados ao processo. |
| Histórico de Status | Linha do tempo das mudanças de status. |

## O que dá pra fazer aqui

### Editar o cadastro do processo
1. Clique em **Editar cadastro** no topo.
2. Ajuste os campos no formulário que abre.
3. Clique em **Salvar**.

### Gerenciar os envolvidos (partes)
1. Abra a aba **Envolvidos** (ou use a seção de partes na **Visão Geral**).
2. Clique em **+ Adicionar envolvido**.
3. Escolha a **pessoa** (busca por nome) e o **tipo de parte** (autor, réu, advogado etc.).
4. Clique em **Salvar**.
5. Para editar ou remover uma parte existente, use os botões de **editar** (lápis) e **remover** (lixeira) na linha.

### Definir o responsável pelo processo
1. Na **Visão Geral**, na área do responsável, clique em **Trocar** (ou **Definir**).
2. Busque e selecione o usuário responsável.
3. Para tirar o responsável, clique em **Remover**.

### Usar a análise por IA
Na **Visão Geral**, clique em **Gerar análise** para que a IA identifique a fase atual do processo e aponte alertas. Você pode:
- Clicar em **↻** para gerar novamente.
- Corrigir manualmente a fase ou o leiloeiro nomeado pelo botão de **lápis**, ajustando e clicando em **Salvar**.

### Registrar um andamento manual
1. Abra a aba **Movimentações do Processo**.
2. Clique em **+ Novo andamento manual**.
3. Preencha **Data** e **Tipo** (obrigatórios), além de **Descrição**, **Texto/conteúdo** e **Responsável** se desejar.
4. Clique em **Registrar andamento**.

### Resumir uma publicação do DJEN por IA
Na aba **Publicações DJEN**, clique no botão de **resumo por IA** ao lado da publicação. Use **↻** para gerar de novo.

### Preencher o checklist judicial
1. Abra a aba **Checklist**.
2. Selecione o **bem** do processo no seletor (o checklist é por bem).
3. Preencha os itens.
4. Clique em **Salvar**.

> Observação: é preciso ter pelo menos um **bem vinculado** ao processo para preencher o checklist.

### Trabalhar negócios do CRM
1. Abra a aba **CRM (Negócios)**.
2. Escolha o **funil**.
3. Clique em **Novo** para criar um negócio ligado ao processo, ou clique em um negócio existente para editar.

## Dicas e observações

- A aba **Bens vinculados** é **somente leitura** — a gestão dos bens é feita no módulo de Bens.
- O seletor de status oferece apenas os status que podem ser definidos manualmente; outros são atualizados automaticamente pelo robô/fluxo.
- O briefing abre em uma nova aba do navegador; se nada acontecer, verifique o bloqueador de pop-ups.

## Veja também

- [Etapas / Produtividade do processo](./-id-produtividade.md)
- [Cartas precatórias do processo](./-id-cartas-precatorias.md)
- [Andamentos](./andamentos.md)
- [Intimações](./intimacoes.md)
