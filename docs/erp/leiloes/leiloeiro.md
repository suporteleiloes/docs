---
title: Tela do Leiloeiro
sidebar_position: 16
---

# Tela do Leiloeiro

A **Tela do Leiloeiro** é o painel de condução do pregão. É daqui que o leiloeiro comanda o leilão ao vivo: avança e volta lotes, registra lances, dá "Dou-lhe uma/duas", altera o status do lote (Em pregão, Vendido, Sem licitantes…), controla o cronômetro e envia mensagens ao auditório. A tela já abre mostrando as **estatísticas** do pregão; o **teclado de controle** fica a um clique de distância.

## Como acessar

Abra o leilão que vai ser conduzido e, no menu do leilão, clique em **Leiloeiro**. A tela abre em modo de operação, com fundo escuro próprio para o pregão.

![Tela do Leiloeiro](/img/manual/erp/leiloeiro.png)

## O que você vê nesta tela

A tela se divide em painéis:

| Área | O que mostra |
|---|---|
| Alternador de visão (topo) | Dois botões: **teclado** e **estatísticas**, para escolher o que aparece no painel principal. |
| Estatísticas do leiloeiro | Resumo do andamento do leilão (totais e indicadores). |
| Lote atual | Dados do lote que está em pregão. |
| Cronômetro e status | Coluna com o cronômetro e o status do lote, com aviso de lance automático. |
| Estatísticas de tempo / lances | Acompanhamento dos lances em tempo real. |

O painel principal alterna entre **Estatísticas** (visão padrão) e o **Teclado de controle**, conforme o botão escolhido no topo.

## O que dá pra fazer aqui

### Alternar entre estatísticas e teclado

1. No topo, clique no ícone de **teclado** para exibir os controles do pregão.
2. Clique no ícone de **gráfico** para voltar à visão de estatísticas.

### Conduzir o pregão pelo teclado de controle

Com o teclado visível, cada botão executa uma ação no lote atual. A maioria também tem um **atalho de teclado** (mostrado no próprio botão):

| Ação | Atalho | O que faz |
|---|---|---|
| Anterior | ← | Volta para o lote anterior. |
| Próximo | → | Avança para o próximo lote. |
| Deletar Lance | Delete | Apaga o último lance (pede confirmação). |
| Aberto | 1 | Coloca o lote como Aberto para lances. |
| Em Pregão | 2 | Coloca o lote em pregão. |
| Incremento | + | Registra um lance somando o incremento ao último valor. |
| Dou-lhe Uma | 3 | Anuncia "dou-lhe uma". |
| Dou-lhe Duas | 4 | Anuncia "dou-lhe duas". |
| Rejeitado | 0 | Marca o lote como baixa oferta / rejeitado. |
| Sem Licitantes | , | Marca o lote como sem licitantes. |
| Homologando | * | Coloca o lote em homologação. |
| Repasse | - | Marca o lote como repasse. |
| Condicional | 9 | Marca o lote como condicional. |
| Vendido | . | Marca o lote como vendido. |
| Renovar tempo | T | Renova o cronômetro do lote. |
| Selecionar lote | F6 | Pede o número de um lote específico e vai até ele. |

Há também o atalho **Shift + Delete** para apagar **todos** os lances do lote (operação irreversível — exige digitar "SIM" para confirmar).

### Registrar um lance

1. Pressione **+** (ou clique em **Incremento**) para lançar somando o incremento ao último lance.
2. Se o último lance veio do online, o sistema pede que você pressione **+** duas vezes rapidamente para cobrir o lance — isso evita cobrir um lance online por engano.
3. Para um valor específico, use o **Lance Manual** ou o **Lance Auxiliar** disponíveis no teclado.

### Mudar de lote

1. Use **←** / **→** para ir ao lote anterior / próximo.
2. Para pular direto a um lote, pressione **F6** (ou use **Selecionar lote**), digite o número e confirme.

### Alterar o status do lote

1. Pressione o atalho correspondente (ex.: **.** para Vendido, **,** para Sem Licitantes).
2. Confirme na janela "Alterar Status para…". O status novo é enviado ao pregão na hora.

### Enviar mensagem ao auditório

1. No teclado, use a ação de **mensagem pública**.
2. Digite a mensagem e confirme. Ela fica visível ao público do auditório por cerca de 15 segundos.

### Controlar o cronômetro

1. Pressione **T** para renovar o tempo do lote atual.
2. Pelas opções do teclado você também altera o cronômetro do lote ou do leilão inteiro.

### Auto confirmar ações

- No teclado há a chave **Auto confirmar ações**: quando ligada, as ações são executadas sem pedir confirmação a cada passo. Use com cautela durante o pregão ao vivo.

## Dicas e observações

- Os atalhos de teclado **não funcionam enquanto você digita em um campo** (caixa de texto/número) — isso evita disparos acidentais.
- Se não houver mais lotes ao avançar, o sistema avisa "Não há mais lotes para passar".
- Quando o leilão usa cronômetro e está configurado para **homologar automaticamente**, ao zerar o tempo de um lote em pregão o sistema o coloca em **Homologando** sozinho.
- **Deletar todos os lances do lote** (Shift + Delete) é irreversível; só faça com certeza absoluta.

## Veja também

- [Histórico](historico.md)
- [Relatórios](relatorios.md)
- [Visitas](visitas.md)
