---
title: Robô de Processos
sidebar_position: 3
---

# Robô de Processos

Painel do **Robô de Processos**, que monitora automaticamente as movimentações dos seus processos judiciais (TJMG). O robô faz consultas em segundo plano e gera notificações quando algo novo é capturado. Aqui você acompanha os processos monitorados, vê as movimentações e notificações, e pode forçar uma consulta imediata.

## Como acessar

**ERP** → **Integrações** → **Robô de Processos**.

![Robô de Processos](/img/manual/erp/integracoes-robo-processos.png)

## O que você vê nesta tela

No topo, um cartão de **status** mostra se a integração está **Ativa** ou **Desativada**, com o atalho **Configurar credenciais** ao lado.

Abaixo, o conteúdo é dividido em quatro abas: **Monitoramento**, **Notificações**, **Histórico** e **Logs**.

### Aba Monitoramento

Lista os processos com robô ativo. Colunas:

| Coluna | O que é |
|---|---|
| Número | Número do processo (é um link que abre a ficha do processo). |
| Tribunal | Tribunal do processo. |
| Comarca | Comarca do processo. |
| Status | Situação atual do processo. |
| Robô | **Ativo** ou **Inativo** — se o monitoramento automático está ligado para aquele processo. |
| (ação) | Botão **Consultar agora** para forçar uma consulta imediata. |

### Aba Notificações

Mostra as movimentações recém-capturadas que ainda aguardam ciência. Colunas:

| Coluna | O que é |
|---|---|
| Data | Quando a notificação foi gerada. |
| Processo | Número do processo relacionado. |
| Conteúdo | Resumo da movimentação. |
| Status | **Nova** ou **Lida**. |
| (ação) | Botão **Marcar como lida** (aparece só nas notificações novas). |

### Aba Histórico

Lista as movimentações capturadas ao longo do tempo. Colunas:

| Coluna | O que é |
|---|---|
| Data | Data da movimentação. |
| Processo | Número do processo. |
| Movimentação | Descrição do que foi capturado. |

### Aba Logs

Diário de execução do robô, com **Data**, **Nível** (info, warning ou error) e **Mensagem**. Útil para acompanhar o funcionamento e identificar erros do serviço.

## Pré-requisitos

- Integração **Ativa** e credenciais preenchidas em **Configurações globais** (atalho **Configurar credenciais**).
- O processo precisa ter o **robô ligado** (coluna **Robô = Ativo** na aba Monitoramento). O monitoramento de cada processo é ligado/desligado na própria ficha do processo, não nesta tela.

## O que dá pra fazer aqui

### Forçar uma consulta imediata de um processo

1. Abra a aba **Monitoramento**.
2. Localize o processo (use **Atualizar** para recarregar a lista, se precisar).
3. Clique em **Consultar agora** na linha do processo.
4. Confirme na janela — a operação pode levar alguns segundos.
5. Ao terminar, uma mensagem informa o resultado, incluindo se foram identificadas novas relações/vínculos. As listas de processos e movimentações são atualizadas automaticamente.

### Dar ciência em uma notificação

1. Abra a aba **Notificações**.
2. Para recarregar, clique em **Atualizar**.
3. Nas notificações marcadas como **Nova**, clique em **Marcar como lida**.
4. O status passa a **Lida**.

### Consultar movimentações já capturadas

1. Abra a aba **Histórico**.
2. Percorra a lista pela paginação no rodapé (você pode mostrar 20, 50 ou 100 por página).

### Acompanhar a execução do robô

1. Abra a aba **Logs**.
2. Veja as mensagens recentes e o **Nível** de cada uma (erros aparecem destacados em vermelho).

## Regras de negócio

- O **robô roda sozinho em segundo plano** e gera notificações quando captura algo novo. O botão **Consultar agora** apenas antecipa uma consulta — não substitui o monitoramento automático.
- Ao terminar uma consulta forçada, a mensagem informa se foram identificados novos **vínculos/relações** entre o processo e bens/pessoas do ERP (ou que não houve novidade). As listas de processos e movimentações são recarregadas automaticamente.
- **Notificação** existe para registrar a ciência: você marca como **Lida** as movimentações que já tratou. **Marcar como lida** só aparece enquanto a notificação está **Nova**.

## Erros comuns

- **Consultar agora em processo sem robô ativo:** ligue o monitoramento na ficha do processo antes — a aba lista apenas processos com robô.
- **Esperar movimentação de outro tribunal:** o monitoramento atual cobre o **TJMG**. Processos de outros tribunais não são acompanhados.

## Dicas e observações

- O botão **Número**, na aba Monitoramento, abre a ficha completa do processo.
- As abas **Histórico** e **Logs** podem aparecer vazias se não houver movimentações registradas (ou se o serviço de logs ainda não estiver disponível no servidor).
- Se o **disparo manual** do robô estiver em implementação no servidor, ao usar **Consultar agora** o sistema avisa que a funcionalidade ainda está sendo desenvolvida — nesse caso, fale com o suporte.
- As credenciais do robô são definidas em **Configurações globais** (atalho **Configurar credenciais**).

## Veja também

- [Youse Seguradora](./integracoes-youse.md)
- [Veículo Verificado](./integracoes-veiculo-verificado.md)
- [Configurações globais](../configuracoes/configuracoes-globais.md)
