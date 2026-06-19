---
title: Campanhas
sidebar_position: 5
---

# Campanhas

A tela de Campanhas é onde você cria e dispara comunicações em massa para seus contatos — por e-mail, WhatsApp ou em ambos os canais ao mesmo tempo (multicanal). Aqui você acompanha cada campanha do rascunho à conclusão, vê quantas pessoas receberam, abriram e clicaram, importa listas de contatos e dispara testes antes do envio real.

## Pré-requisitos

Antes de criar uma campanha, tenha:

- Pelo menos um **remetente** verificado cadastrado (ver [Remetentes](crm-remetentes.md)) — sem isso o e-mail não tem de onde sair.
- Os destinatários: uma **lista** existente, um **segmento**, um **leilão** (envia para os envolvidos) ou um arquivo **CSV** para importar.
- Conteúdo: um **template** pronto ou o texto que você vai escrever no assistente.
- Saldo de envios disponível no seu plano — o consumo do mês aparece nesta tela (limite de e-mails do serviço).

## Como acessar

**CRM** → **Marketing** → **Campanhas**.

![Campanhas](/img/manual/crm/marketing-campanhas.png)

## O que você vê nesta tela

No topo há o botão **Nova campanha** e, logo abaixo, as **abas de filtro** por situação, cada uma exibindo a contagem da aba ativa:

| Aba | Mostra |
|---|---|
| Ativas | Campanhas em qualquer fase ainda não concluída (visão padrão) |
| Rascunho | Campanhas ainda sendo montadas |
| Preparando | Campanhas em preparação (gerando a lista de inscritos) |
| Pronto p/ envio | Prontas para disparar |
| Em andamento | Disparando agora |
| Concluídas | Já finalizadas |

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número da campanha |
| Campanha | Nome (e o assunto logo abaixo) |
| Canal | E-mail, WhatsApp ou E-mail + WhatsApp (multicanal) |
| Inscritos | Quantos contatos estão na lista |
| Enviados | Quantas mensagens já saíram |
| Abertos | Quantos abriram (e a taxa de abertura em %) |
| Cliques | Quantos clicaram em algum link (e a taxa em %) |
| Status | Situação atual da campanha |
| Início | Data de início |

A coluna de ações (à direita) muda conforme o status da campanha.

### Situações (status) de uma campanha

| Status | Significado |
|---|---|
| Rascunho | Recém-criada; ainda pode ser editada livremente. |
| Preparando | O sistema está montando a lista de inscritos a partir dos critérios (lista, segmento, leilão ou CSV). |
| Pronto para envio | Inscritos prontos; é aqui que o botão **Disparar** fica disponível. |
| Em andamento | As mensagens estão saindo. |
| Concluído | Encerrada — não envia mais. |

> Ao **salvar** uma campanha (criar ou editar), ela volta para **Pronto para envio**, exceto se já estiver Em andamento ou Concluída — esses estados são preservados.

## O que dá pra fazer aqui

### Criar uma campanha

Clique em **Nova campanha**. O cadastro é um assistente em **4 etapas**, nesta ordem:

1. **Configuração da campanha** — defina o **Nome** (obrigatório), o **Canal** (E-mail, WhatsApp ou E-mail + WhatsApp), o **Assunto** (para e-mail), uma **Descrição interna** (opcional, só para você identificar a campanha) e o **Agendamento**: **enviar agora** ou **agendar** para uma data/hora.
2. **Design do conteúdo** — escolha um **template** da galeria ou escreva/monte o conteúdo. No e-mail você pode usar o construtor de blocos; no WhatsApp, o texto da mensagem.
3. **Destinatários e remetente** — escolha o público (uma **lista**, um **segmento**, um **leilão** ou **importar um arquivo CSV**) e o **remetente**.
4. **Confirmação** — revise o resumo e clique em **Criar campanha**.

> **Multicanal (E-mail + WhatsApp):** ao salvar, o sistema cria **duas campanhas** — uma de e-mail e uma de WhatsApp — com o mesmo conteúdo e a mesma lista. Cada uma é liberada (disparada) separadamente.

![Assistente de nova campanha](/img/manual/crm/marketing-campanhas-novo.png)

### Editar uma campanha

Clique no ícone de **editar** (lápis) na linha. O mesmo assistente abre preenchido.

### Ver inscritos

Clique no ícone de **inscritos** (pessoas) para abrir a lista de contatos da campanha. A lista é paginada (campanhas reais têm dezenas de milhares de inscritos) e pode ser filtrada por **Enviados**, **Não enviados**, **Descadastrados**, **Lidos** e **Clicados**, além de busca por nome/contato. Você pode **remover** um inscrito ou **reenviar** a mensagem para um inscrito específico por ali.

### Atualizar inscritos

Clique no ícone **Atualizar inscritos** para recalcular a lista de contatos a partir dos critérios da campanha (lista, segmento ou leilão). Use quando o público-alvo mudou depois que a campanha foi criada — os números são recalculados em segundos.

### Importar lista (CSV)

Clique no ícone de **importar** e selecione um arquivo `.csv` ou `.txt` para adicionar contatos à campanha. O separador (`;` ou `,`) é detectado automaticamente; cada linha vira um inscrito.

### Enviar um teste

Disponível em campanhas em rascunho, preparando ou prontas. Clique no ícone de **enviar teste**, informe o e-mail (ou o número, no WhatsApp) e confirme. Você recebe uma prévia para conferir antes do disparo real.

### Disparar a campanha

Quando o status é **Pronto para envio**, clique no ícone verde de **disparar**. Confirme — a campanha entra em andamento e as mensagens são enviadas para todos os inscritos. Essa ação não pode ser desfeita.

> O disparo é processado em segundo plano (não trava a tela). Acompanhe o avanço pelas colunas **Enviados / Abertos / Cliques** e pelo status, que muda para **Em andamento** e depois **Concluído**.

### Concluir uma campanha

Clique no ícone de **concluir** (check) para marcar a campanha como **Concluída**. Use quando o envio terminou e você quer arquivá-la — campanhas concluídas não enviam mais e não voltam a "Pronto para envio" ao serem editadas.

### Excluir

Clique no ícone de **lixeira** e confirme. Todos os dados da campanha são perdidos, sem recuperação.

## Dicas e observações

- Antes de disparar, confira a contagem de **Inscritos** e faça um **teste** — o disparo real é definitivo.
- As taxas de **abertura** e **cliques** são calculadas sobre os enviados; só fazem sentido depois do disparo.
- Para criar e disparar campanhas você precisa ter pelo menos um **remetente** verificado e um público (lista, segmento, leilão ou CSV).
- Editou o conteúdo de uma campanha já em **Pronto para envio**? As mensagens que ainda estão pendentes são re-renderizadas com o conteúdo novo. Mensagens já enviadas não mudam.
- Os contatos que se **descadastram** (link de unsubscribe do e-mail) param de receber automaticamente — isso é exigência de boas práticas antispam e da lei.

## Erros comuns

- **Não aparece o botão Disparar:** ele só fica disponível quando o status é **Pronto para envio**. Se a campanha está em Rascunho ou Preparando, salve/aguarde a preparação dos inscritos.
- **Zero inscritos:** verifique se a lista/segmento/leilão escolhido tem contatos e use **Atualizar inscritos** após mudar o público-alvo.
- **Disparei sem querer:** não há como desfazer um disparo. Use o **envio de teste** para conferir antes.

## Veja também

- [Remetentes](crm-remetentes.md)
- [Gerador de Conteúdo](marketing-gerador.md)
