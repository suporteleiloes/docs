---
title: Controlador (pregão ao vivo)
sidebar_position: 51
---

# Controlador (pregão ao vivo)

O **Controlador** é a tela que o leiloeiro usa para **conduzir o leilão ao vivo**, lote a lote. É daqui que você passa de um lote para outro, registra lances, dá "Dou-lhe uma/duas", muda o status do lote (vendido, condicional, sem licitantes…), controla o cronômetro e abre/fecha o auditório virtual para o público. Tudo pode ser feito pelo mouse ou por **atalhos de teclado**, pensados para um pregão rápido.

## Como acessar

**Leilões** → abra um leilão → **Controlador**.

A tela ocupa o ambiente inteiro (modo de operação). Enquanto carrega, aparece "Carregando a aplicação".

![Controlador do pregão](/img/manual/erp/controlador.png)

## O que você vê nesta tela

A tela é dividida em áreas:

| Área | O que mostra |
|---|---|
| Barra superior (resumo do leilão) | Código do leilão, situação do auditório (Aberto/Fechado), total de lotes, lote anterior, próximo lote, quantos faltam, lances automáticos e o menu **Opções**. |
| Alternador de painel | Dois botões para trocar a área principal entre o **Teclado** de comandos e as **Estatísticas**. |
| Resumo do lote | Dados do lote atualmente em pregão. |
| Foto e valores do lote | Imagem do bem e os valores (inicial, mínimo, incremento) — com atalhos para alterá-los. |
| Status / Monitor / Histórico de lances | Situação do lote, monitor do pregão e a lista de lances do lote em ordem. |
| Teclado de comandos | Botões grandes para cada ação do pregão, cada um com sua tecla de atalho. |
| Estatísticas | Painel alternativo com totais do leilão (vendidos, condicionais, etc.). |

### Barra superior — situação do auditório

- **Leilão Aberto** (bolinha verde): o público online já enxerga o pregão.
- **Leilão Fechado (F4 p/ abrir)** (bolinha vermelha): clique para **abrir o auditório virtual** ao público.

## O que dá pra fazer aqui

### Conduzir o pregão pelo teclado de comandos

O painel **Teclado** traz um botão para cada ação, e cada botão tem a tecla de atalho indicada. As principais:

| Ação | Botão | Tecla |
|---|---|---|
| Lote anterior | Anterior | ← (seta esquerda) |
| Próximo lote | Próximo | → (seta direita) |
| Registrar lance (incremento) | Incremento | + |
| Deletar último lance | Deletar Lance | Delete |
| Abrir lote para lances | Aberto | 1 |
| Colocar em pregão | Em Pregão | 2 |
| Dou-lhe uma | Dou-lhe Uma | 3 |
| Dou-lhe duas | Dou-lhe Duas | 4 |
| Rejeitado (baixa oferta) | Rejeitado | 0 |
| Sem licitantes | Sem Licitantes | , (vírgula) |
| Homologando | Homologando | * |
| Repasse | Repasse | - |
| Condicional | Condicional | 9 |
| Vendido | Vendido | . (ponto) |
| Renovar o tempo | (dica na tela) | T |
| Ir para um lote específico | (menu Opções) | F6 |
| Deletar TODOS os lances do lote | — | Shift + Delete |

Há também um interruptor **Auto confirmar ações**: quando ligado, o sistema executa os comandos sem pedir confirmação a cada um (útil em pregões rápidos; use com cuidado).

### Registrar um lance

1. Tecle **+** (ou clique em **Incremento**).
2. Se não houver valor informado, o sistema soma o incremento ao último lance (ou usa o valor inicial, se for o primeiro lance).
3. Quando o último lance veio de um arrematante **online**, o sistema avisa e pede que você pressione **+** duas vezes seguidas para cobrir o lance — isso evita cobrir um lance da internet sem querer.

> Há também opções de **lance auxiliar** e **lance manual** dentro do teclado, para digitar um valor específico.

### Dar "Dou-lhe uma / duas"

1. Tecle **3** para "Dou-lhe uma" ou **4** para "Dou-lhe duas".
2. O comando é enviado ao auditório (público vê o aviso).

### Mudar o status do lote

1. Use a tecla correspondente (ex.: **.** para Vendido, **9** para Condicional, **,** para Sem Licitantes).
2. Confirme na janela (a não ser que **Auto confirmar** esteja ligado).

### Mudar de lote

- **Próximo / Anterior:** setas → e ←.
- **Ir para um lote específico:** tecle **F6** (ou menu **Opções** → "Ir para um lote"), informe o número e confirme. Se não houver mais lotes ao tentar passar, o sistema avisa.

### Deletar lances

- **Deletar último lance:** tecle **Delete**. O sistema pede confirmação mostrando o apelido do arrematante e o valor.
- **Deletar todos os lances do lote:** **Shift + Delete**. Por segurança, você precisa **digitar SIM** para confirmar — a operação não pode ser desfeita.

### Controlar o cronômetro

- **Renovar o tempo do lote atual:** tecle **T**.
- Há ações para **alterar o tempo do cronômetro** do lote ou de todo o leilão (pelas opções do teclado).
- Se o leilão estiver configurado para **homologar automaticamente**, quando o cronômetro chega a zero com o lote em pregão, o sistema passa o lote para "Homologando" sozinho.

### Alterar valores do lote

A partir da área de **foto e valores**, você pode acionar:

- **Alterar lance inicial**
- **Alterar valor mínimo**
- **Alterar incremento**

### Enviar mensagem ao público

1. Abra o menu **Opções** (canto superior).
2. Clique em **Enviar Mensagem Pública**.
3. Digite a mensagem e confirme. Ela fica visível por **15 segundos** no auditório.

### Abrir e fechar o auditório virtual

- **Abrir:** na barra superior, clique em "Leilão Fechado (F4 p/ abrir)" e confirme — o público passa a acompanhar.
- **Fechar:** menu **Opções** → **Fechar Auditório** (aparece quando o leilão está aberto). Confirme.

### Ver as estatísticas do leilão

1. Clique no botão de **Estatísticas** (alternador de painel).
2. O painel mostra: Vendidos, Condicionais, Não vendidos, Para leiloar/Saldo, Total em vendas (R$) e Total condicionais (R$), com percentuais.
3. Para voltar aos comandos, clique em **Teclado**.

### Sair do controlador

- Menu **Opções** → **Sair** (volta para a tela do leilão).

## Dicas e observações

- A tela atualiza os dados do pregão automaticamente (em tempo real). Os atalhos de teclado **não** disparam quando o cursor está dentro de um campo de digitação.
- O atalho **Shift + Delete** apaga TODOS os lances do lote e exige digitar **SIM** — confira o lote antes.
- "Auto confirmar ações" remove as confirmações; deixe desligado em leilões sensíveis.
- Lotes com status **Retirado** ou **Cancelado** mudam a aparência da tela (a área de foto/valores não é exibida).

## Veja também

- [Auditório ao vivo](./auditorio.md)
- [Apresentação em telão](./apresentacao-telao.md)
- [Monitor do comitente](./monitor-comitente.md)
- [Organizar lotes](./organizar-lotes.md)
