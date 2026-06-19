---
title: Monitoramento de Leilão
sidebar_position: 2
---

# Monitoramento de Leilão

Esta tela é o painel de acompanhamento ao vivo de um leilão em andamento. Ela reúne, em tempo real, as estatísticas de acesso, o progresso do pregão (lotes vendidos, retirados, não vendidos), o uso de hardware do servidor e o estado dos serviços. Use durante o leilão para saber, num só lugar, como tudo está rodando.

## Como acessar

**Leilões** → **Monitoramento**. Você também chega aqui pela ação **Serviços → Monitoramento** dentro de um leilão, que já abre com o leilão selecionado.

![Monitoramento de Leilão](/img/manual/erp/leiloes-monitoramento.png)

## O que você vê nesta tela

### Seletor do leilão

No topo há o campo para escolher qual leilão monitorar. Você pode digitar o **ID do leilão** e clicar em **Monitorar**, ou clicar em um dos atalhos da lista **Em andamento** (mostra os leilões mais recentes nos status agendado, em andamento ou em pregão — até seis atalhos). O leilão escolhido fica registrado no endereço da página, então você pode atualizar a aba ou compartilhar o link mantendo o mesmo leilão aberto.

Enquanto nenhum leilão estiver selecionado, a tela mostra uma mensagem orientando a escolher um leilão.

### Cabeçalho do leilão

Depois de selecionar, aparece o cabeçalho com o ID, a descrição, o status (badge), a classificação e o leiloeiro. À direita, um indicador de **Realtime** mostra se a conexão ao vivo está conectada.

### Cartões de monitoramento

| Cartão | O que mostra |
|---|---|
| Estatística de Acesso | Lances de participantes online (autenticados) e da plateia, com percentuais; total de participantes online |
| Progresso do Leilão | Lote atual, total de lotes, barra de progresso (% concluído) e contagem de Vendidos, Retirados, Não vendidos e Com lances |
| Hardware | Uso de CPU, memória e disco do servidor. **Depende de o servidor reportar esses dados**; enquanto isso não estiver disponível, o cartão informa que ainda não há dados de hardware |
| Serviços | Estado dos serviços de apoio: WebSocket (realtime), API HTTP e endpoint de estatísticas |

## O que dá pra fazer aqui

### Monitorar um leilão

1. Digite o **ID do leilão** no campo do topo (ou clique em um leilão da lista "Em andamento").
2. Clique em **Monitorar** (ou pressione Enter).
3. Os cartões passam a se atualizar em tempo real enquanto o leilão estiver acontecendo.

### Trocar de leilão

- Basta digitar outro ID e clicar em **Monitorar**, ou clicar em outro chip da lista "Em andamento".

## Dicas e observações

- O indicador de Realtime verde com pulso significa que os dados estão chegando ao vivo. Se ficar vermelho (desconectado), os números podem não estar atualizando.
- O cartão de Hardware depende de o servidor reportar esses dados; quando não houver, a tela informa que ainda não há dados de hardware.
- Esta tela é de leitura/acompanhamento: o controle efetivo do pregão (vender, dou-lhe, etc.) é feito no Controlador e no Painel do Leiloeiro.

## Veja também

- [Gestão de Leilões (lista)](./leiloes.md)
- [Resumo do leilão](./resumo.md)
- [Página do leilão](./leiloes-id.md)
