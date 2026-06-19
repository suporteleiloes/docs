---
title: Configuração do robô
sidebar_position: 5
---

# Configuração do robô

Esta tela controla o **robô de monitoramento de publicações**: quais estados ele varre, quais palavras-chave ele procura (e quais ignora) e o histórico das últimas execuções. Também permite **disparar o robô manualmente** para um período específico. É a base de como sua leiloeira descobre novos processos de leilão automaticamente.

## Como acessar

**ERP** → **Gestão · Automação de Processos** → **Configuração do robô**.

![Configuração do robô](/img/manual/erp/configuracao-robo.png)

## O que você vê nesta tela

No topo, o título **Configuração do robô** e o botão **Executar agora**. O corpo tem três blocos: **Estados monitorados**, **Palavras-chave** (duas colunas) e **Últimas execuções**.

### Estados monitorados

Grade com todos os estados do Brasil. Os estados ativos ficam destacados — são os tribunais estaduais que o robô varre diariamente.

- Cada estado é um botão clicável (liga/desliga).
- A caixa **Todos os estados** marca ou desmarca todos de uma vez, com um contador (selecionados / total).
- Quando há mudanças não salvas, aparece o aviso **Alterações não salvas**, com os botões **Descartar** e **Salvar**.

### Palavras-chave

Duas colunas lado a lado:

| Coluna | O que é |
|---|---|
| Palavras-chave a buscar | Termos que o robô procura nas publicações. Qualquer publicação que mencione um deles é monitorada (ex.: "leilão", "hasta pública", "alienação judicial"). |
| Palavras-chave a ignorar | Termos que descartam um resultado, mesmo que ele tenha casado uma palavra de busca (ex.: "criminal", "danos morais"). |

Cada coluna tem um campo para digitar o termo, o botão **Adicionar** e a lista de palavras em forma de etiquetas (com botão de remover em cada uma). Um contador mostra quantas palavras há em cada lista.

### Últimas execuções

Tabela com o histórico dos ciclos do robô deste cliente.

| Coluna | O que é |
|---|---|
| Status | Resultado do ciclo: em andamento, sucesso, falha ou parcial. |
| Data ref. | Data de referência do ciclo. |
| Iniciado | Data e hora em que o ciclo começou. |
| Duração | Tempo de execução. |
| Hits | Total de resultados brutos encontrados. |
| Movs novas | Movimentações novas registradas. |
| Dedup | Movimentações descartadas por duplicidade. |
| Descobertos | Processos novos descobertos. |

## O que dá pra fazer aqui

### Configurar os estados monitorados

1. No bloco **Estados monitorados**, clique nos estados que o robô deve varrer (ou use **Todos os estados**).
2. Confira o contador de selecionados.
3. Clique em **Salvar**. Use **Descartar** para reverter as mudanças não salvas.

### Adicionar uma palavra-chave de busca

1. Na coluna **Palavras-chave a buscar**, digite o termo.
2. Clique em **Adicionar** (ou pressione Enter).
3. A palavra aparece como etiqueta na lista.

### Adicionar uma palavra-chave a ignorar

1. Na coluna **Palavras-chave a ignorar**, digite o termo.
2. Clique em **Adicionar**.
3. A palavra entra na lista de exclusão.

### Remover uma palavra-chave

1. Localize a etiqueta da palavra na coluna correspondente.
2. Clique no **⨯** dentro da etiqueta.
3. Confirme na janela **Remover palavra-chave?**.

### Executar o robô manualmente

1. Clique em **Executar agora** (no topo).
2. Na janela **Executar robô**, escolha o período:
   - Use um dos atalhos rápidos (**Ontem**, **Últimos 7 dias**, **Últimos 15 dias**, **Últimos 30 dias**), **ou**
   - Defina as datas **De** e **Até** manualmente.
3. Confira o resumo (dias do intervalo, quantidade de palavras-chave e estados). Intervalos grandes podem demorar minutos.
4. Clique em **Executar**. O ciclo é despachado e o histórico de **Últimas execuções** se atualiza em seguida.

![Janela de execução do robô](/img/manual/erp/configuracao-robo-executar.png)

## Dicas e observações

- A mesma palavra **não pode** estar nas duas listas ao mesmo tempo. Se você tentar adicionar um termo que já está na outra lista, o sistema avisa e pede para removê-lo de lá primeiro.
- Para executar o robô, é preciso ter **pelo menos uma palavra-chave de busca** e **pelo menos um estado** selecionado.
- Se já houver um ciclo em andamento, o sistema avisa e pede para aguardar a conclusão antes de disparar outro. (A trava considera ciclos iniciados nos últimos 30 minutos.)
- O **intervalo máximo por ciclo é de 60 dias**. Acima disso, o sistema recusa a execução — divida em períodos menores.
- A execução manual roda **na hora**, durante a própria solicitação (não é enfileirada). Por isso intervalos grandes podem levar minutos até a tela responder; aguarde sem fechar.
- O robô busca as publicações no **DJEN** (Diário de Justiça Eletrônico Nacional) dentro do intervalo escolhido, casa com as palavras-chave e registra as movimentações novas. Resultados repetidos são descartados (deduplicação) e contabilizados na coluna **Dedup**.
- Cada estado ligado equivale a uma sigla de tribunal no DJEN. Quanto mais estados e palavras-chave, mais demorado e pesado o ciclo — monitore tudo só se a leiloeira realmente atua nacionalmente.

## Veja também

- [Processos](./processo.md)
- [Cadastrar Processo](./novo.md)
- [Cadastros Auxiliares](./cadastros.md)
