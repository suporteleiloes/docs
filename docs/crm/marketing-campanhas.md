---
title: Campanhas
sidebar_position: 5
---

# Campanhas

A tela de Campanhas é onde você cria e dispara comunicações em massa para seus contatos — por e-mail, SMS, WhatsApp ou voz. Aqui você acompanha cada campanha do rascunho ao envio, vê quantas pessoas receberam e abriram, importa listas de contatos e dispara testes antes do envio real.

## Como acessar

**CRM** → **Marketing** → **Campanhas**.

![Campanhas](/img/manual/crm/marketing-campanhas.png)

## O que você vê nesta tela

No topo há o botão **Nova campanha** e, logo abaixo, as **abas de filtro** por situação, cada uma com a contagem da aba ativa:

| Aba | Mostra |
|---|---|
| Ativas | Campanhas em qualquer fase ainda não concluída |
| Rascunho | Campanhas ainda sendo montadas |
| Preparando | Campanhas em preparação |
| Pronto p/ envio | Prontas para disparar |
| Em andamento | Disparando agora |
| Concluídas | Já finalizadas |

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número da campanha |
| Campanha | Nome (e o assunto logo abaixo) |
| Canal | E-mail, SMS, WhatsApp ou Voz |
| Inscritos | Quantos contatos estão na lista |
| Enviados | Quantas mensagens já saíram |
| Abertos | Quantos abriram (e a taxa de abertura em %) |
| Status | Situação atual da campanha |
| Início | Data de início |

A coluna de ações (à direita) muda conforme o status da campanha.

## O que dá pra fazer aqui

### Criar uma campanha

O cadastro é um assistente em **4 etapas**:

1. Clique em **Nova campanha**.
2. **Destinatários** — escolha uma lista existente ou importe um arquivo CSV (colunas nome, email ou telefone).
3. **Design** — informe o nome da campanha, o assunto (para e-mail), escolha um template ou escreva o conteúdo. Se quiser, ative o **Teste A/B** e defina a divisão entre as variantes A e B.
4. **Configuração** — escolha o canal, o remetente e se vai **enviar agora** ou **agendar** para data/hora.
5. **Confirmar** — revise o resumo e clique em **Criar campanha**.

![Assistente de nova campanha](/img/manual/crm/marketing-campanhas-novo.png)

### Editar uma campanha

Clique no ícone de **editar** (lápis) na linha. O mesmo assistente abre preenchido.

### Ver inscritos

Clique no ícone de **inscritos** (pessoas) para abrir a lista de contatos da campanha, com status Enviado/Pendente. Você pode **remover** um inscrito por ali.

### Importar lista (CSV)

Clique no ícone de **importar** e selecione um arquivo `.csv` ou `.txt` para adicionar contatos à campanha.

### Enviar um teste

Disponível em campanhas em rascunho, preparando ou prontas. Clique no ícone de **enviar teste**, informe o e-mail (ou o número, no WhatsApp) e confirme. Você recebe uma prévia para conferir antes do disparo real.

### Disparar a campanha

Quando o status é **Pronto para envio**, clique no ícone verde de **disparar**. Confirme — a campanha será enviada para todos os inscritos. Essa ação não pode ser desfeita.

### Concluir uma campanha

Clique no ícone de **concluir** (check) para marcar como concluída.

### Excluir

Clique no ícone de **lixeira** e confirme. Todos os dados da campanha são perdidos, sem recuperação.

## Dicas e observações

- Antes de disparar, confira a contagem de **Inscritos** e faça um **teste** — o disparo real é definitivo.
- A taxa de abertura na coluna Abertos é calculada sobre os enviados; só faz sentido depois do disparo.
- Para criar campanhas você precisa ter pelo menos uma **lista** e um **remetente** cadastrados.

## Veja também

- [Remetentes](crm-remetentes.md)
- [Gerador de Conteúdo](marketing-gerador.md)
