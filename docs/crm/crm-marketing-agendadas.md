---
title: Campanhas Agendadas
sidebar_position: 33
---

# Campanhas Agendadas

Esta tela reúne as campanhas de marketing com **disparo programado** — aquelas que vão (ou já foram) enviadas por e-mail, WhatsApp, SMS ou push. Aqui você acompanha o status de cada uma, consulta o tamanho do público, edita campanhas que ainda não saíram, dispara na hora ou cancela.

## Como acessar

**CRM** → **Marketing** → **Campanhas Agendadas** (ou pela barra de endereço em `/crm/marketing/agendadas`).

![Campanhas Agendadas](/img/manual/crm/crm-marketing-agendadas.png)

## O que você vê nesta tela

No topo há o botão **Atualizar**, que recarrega a lista.

A barra de filtros tem busca por **nome da campanha** e chips de status: **Todas**, **Rascunho**, **Aguardando**, **Enviando**, **Enviada** e **Cancelada**.

A tabela mostra:

| Coluna | O que é |
|---|---|
| Campanha | Nome da campanha (e o assunto, quando houver). |
| Canal | Meio de envio: E-mail, WhatsApp, SMS ou Push. |
| Disparo | Data e hora programadas para o envio. |
| Status | Situação atual (Rascunho, Aguardando, Enviando, Enviada ou Cancelada). |
| Enviados | Quantos foram enviados (e quantas falhas, se houver). |
| Ações | Botões **Ver**, **Disparar agora** e **Cancelar**, conforme o status. |

## O que dá pra fazer aqui

### Filtrar e buscar

1. Clique em um chip de status para ver só as campanhas naquela situação.
2. Digite no campo de busca para localizar por nome.
3. Clique em **Atualizar** para recarregar os dados.

### Ver os detalhes de uma campanha

1. Clique na linha da campanha (ou no botão **Ver**).
2. A janela mostra status, canal, **público estimado** (quantas pessoas receberão), nome, assunto, disparo, corpo da mensagem e quantos foram enviados.
3. Se a campanha já tentou enviar e houve erro, a mensagem de erro aparece em destaque.

![Detalhe da campanha agendada](/img/manual/crm/crm-marketing-agendadas-detalhe.png)

### Editar uma campanha

1. Abra a campanha e clique em **Editar** (disponível só para campanhas em **Rascunho** ou **Aguardando**).
2. Ajuste **Nome**, **Assunto**, **Disparo** (data/hora) e **Corpo** da mensagem. O **canal** não pode ser alterado.
3. Use o interruptor **Agendada para disparo** para alternar entre:
   - **Aguardando** — será disparada na data/hora definida.
   - **Rascunho** — fica guardada e não dispara.
4. Clique em **Salvar alterações**.

> Se a campanha começar a enviar (ou já tiver sido enviada) enquanto você edita, a edição é bloqueada com um aviso — o conteúdo de uma campanha em envio não pode mais mudar.

### Disparar agora

1. Em uma campanha em **Rascunho** ou **Aguardando**, clique em **Disparar agora** (na linha ou no detalhe).
2. A confirmação mostra o canal e o **público estimado**. Quem optou por não receber naquele canal (opt-out) é ignorado automaticamente.
3. Confirme em **Disparar agora**.
4. Ao final, um resumo informa quantos foram **enviados**, **ignorados** (opt-out/sem contato) e **falhas**.

### Cancelar uma campanha

1. Clique em **Cancelar** (na linha ou no detalhe). Disponível enquanto a campanha não foi enviada nem já está cancelada.
2. Confirme. A campanha não será disparada.

> Se a campanha já tiver sido enviada, o cancelamento é recusado com um aviso.

## Regras de negócio

- **Ciclo de status**: Rascunho → Aguardando → Enviando → Enviada (ou Cancelada). Uma campanha em **Aguardando** é disparada automaticamente pelo sistema quando chega a data/hora de disparo; **Disparar agora** apenas antecipa esse envio.
- **Data de disparo deve ser futura** quando a campanha está **Aguardando**. Em Rascunho a data fica guardada sem essa exigência, mas ao ligar o interruptor "Agendada para disparo" ela precisa ser no futuro.
- **O canal não muda depois de criada** (e-mail, WhatsApp, SMS ou Push). Para trocar de canal, crie outra campanha.
- **Conteúdo "congela" no envio**: assim que a campanha entra em **Enviando** ou **Enviada**, nome, assunto, corpo e disparo não podem mais ser alterados (a edição é recusada com aviso). É o que garante que todos recebam exatamente a mesma mensagem.
- **Cancelar é definitivo** e só vale antes do envio: não dá para cancelar uma campanha já **Enviada**.

## Erros comuns

- **Tentar editar/disparar uma campanha que já saiu**: o sistema bloqueia com aviso. Se isso acontecer enquanto a janela está aberta, feche e reabra para ver o status atualizado.
- **Definir disparo no passado** com a campanha em Aguardando: a validação acusa "o disparo deve ser no futuro". Ajuste a data ou deixe como Rascunho.

## Dicas e observações

- O **público estimado** é calculado na hora; se indisponível, a tela segue funcionando e mostra "indisponível".
- O disparo **respeita o opt-out**: contatos que pediram para não receber naquele canal não são incluídos. No resumo do disparo, eles entram na contagem de **ignorados** (junto de quem não tem contato no canal).
- Só campanhas em **Rascunho** ou **Aguardando** podem ser editadas ou disparadas manualmente.
- Esta tela não cria campanhas novas — ela gerencia as já programadas. Use o fluxo de campanhas para criar.

## Veja também

- [Campanhas](marketing-campanhas.md)
- [Métricas da campanha](<crm-marketing-campanhas-id-metricas.md>)
- [Comparar campanhas](crm-marketing-comparar.md)
- [Estúdio de Artes / Design IA](crm-estudio-artes.md)
