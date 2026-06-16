---
title: Automação
sidebar_position: 10
---

# Automação

A aba **Automação** reúne ações em massa que afetam todos os lotes de um leilão de uma vez só. Em vez de abrir lote por lote, você dispara aqui uma única operação (atualizar valores, alterar status, gerar notas, etc.) e o sistema aplica em todo o leilão.

## Como acessar

Abra um leilão e, no menu do leilão, clique em **Automação**.

![Automação](/img/manual/erp/automacao.png)

## O que você vê nesta tela

No topo há um cabeçalho com o título **Automação do Leilão** e uma descrição. Abaixo, na seção **Ações disponíveis**, ficam cartões. Cada cartão tem um título, uma breve explicação e um botão **Executar**.

| Ação | O que faz |
|---|---|
| Atualizar valores do 2º leilão | Aplica o desconto configurado no leilão sobre todos os valores iniciais, gerando os valores do 2º leilão. |
| Enviar aviso de início de leilão | Notifica todos os habilitados pelos canais que você escolher. |
| Alterar status de lotes em massa | Migra todos os lotes que estão em um status para outro (ex.: Rascunho → Aberto). |
| Gerar todas as notas do leilão | Solicita a emissão de todas as notas e envia o link de download por e-mail. |
| Formalizar todas as vendas | Gera contratos de formalização dos lotes vendidos. (**Em breve**.) |
| Formalizar com carimbo do tempo | Igual à anterior, mas com assinatura digital com carimbo do tempo. (**Em breve**.) |
| Atualizar incrementos pelos critérios | Aplica os critérios de incremento configurados em todos os lotes. |
| Gerar títulos e descrições | Aplica o template de título/descrição configurado em cada tipo de bem. |

## O que dá pra fazer aqui

### Atualizar valores do 2º leilão

1. Clique em **Executar** no cartão **Atualizar valores do 2º leilão**.
2. Confirme na janela de aviso (todos os valores iniciais do 2º leilão serão recalculados com base no desconto definido no leilão).
3. Clique em **Atualizar**. Ao terminar, aparece uma mensagem de sucesso.

### Enviar aviso de início de leilão

1. Clique em **Executar** no cartão **Enviar aviso de início de leilão**.
2. Na janela, marque os canais desejados. Hoje apenas **E-mail** está disponível; Whatsapp, SMS e Push estão marcados como **em breve**.
3. Clique em **Enviar aviso**. O sistema envia o aviso aos habilitados pelos canais escolhidos.

### Alterar status de lotes em massa

1. Clique em **Executar** no cartão **Alterar status de lotes em massa**.
2. Em **Status atual**, escolha de qual status os lotes vão sair.
3. Em **Novo status**, escolha para qual status os lotes vão.
4. Clique em **Confirmar alteração**. Só os lotes que estão no status atual selecionado serão alterados.

> Se você deixar de selecionar o status atual ou o novo status, o sistema avisa que a seleção está incompleta.

### Gerar todas as notas do leilão

1. Clique em **Executar** no cartão **Gerar todas as notas do leilão**.
2. Informe o **E-mail** que deve receber o link de download.
3. Clique em **Solicitar emissão**. A geração roda em segundo plano; em alguns minutos chega um e-mail com o link para baixar todas as notas.

### Atualizar incrementos pelos critérios

1. Clique em **Executar** no cartão **Atualizar incrementos pelos critérios**.
2. Confirme (antes, certifique-se de que as definições de Montagem de Valores de Incremento estão corretas).
3. Clique em **Atualizar**.

### Gerar títulos e descrições

1. Clique em **Executar** no cartão **Gerar títulos e descrições**.
2. Confirme (antes, certifique-se de que as definições de Montagem de Título e Descrição estão corretas no cadastro dos tipos de bem presentes no leilão).
3. Clique em **Gerar**. O sistema regrava título e descrição de cada bem usando o template do seu tipo.

## Dicas e observações

- Toda ação em massa é **irreversível em escala**: ela altera todos os lotes que se enquadram no critério. Revise as configurações antes de confirmar.
- As ações de **Formalizar vendas** (com e sem carimbo do tempo) estão marcadas como **Em breve** e ainda não executam.
- Enquanto uma ação está em andamento, os botões ficam desabilitados para evitar disparos duplicados.

## Veja também

- [Relatórios](relatorios.md)
- [Histórico](historico.md)
- [Documentos](documentos.md)
