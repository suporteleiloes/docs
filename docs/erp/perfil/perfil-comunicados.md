---
title: Comunicados internos
sidebar_position: 4
---

# Comunicados internos

A tela **Comunicados internos** é onde os **super-administradores** criam e enviam avisos para os usuários do ERP — por exemplo, uma manutenção programada, uma mudança de processo ou um alerta urgente. Cada comunicado vira uma notificação na caixa de [Mensagens](perfil-mensagens.md) dos destinatários e, opcionalmente, aparece no Quadro de Avisos do Dashboard.

## Como acessar

Na tela [Mensagens](perfil-mensagens.md), clique em **Comunicados (admin)** no canto superior direito (ou abra pela URL `/perfil/comunicados`).

![Comunicados internos](/img/manual/erp/perfil-comunicados.png)

## O que você vê nesta tela

No topo há os botões **Voltar** (retorna para Mensagens) e **Novo comunicado**. Abaixo, a **lista de comunicados** já criados.

Cada comunicado é um cartão com uma **faixa colorida à esquerda** que indica a severidade (azul = Informativo, laranja = Atenção, vermelho = Urgente). O cartão mostra:

| Informação | O que é |
|---|---|
| **Título** e **Mensagem** | O conteúdo do aviso. |
| **Destinatários** | Quem recebeu (Todos, um papel específico ou uma quantidade de usuários). |
| **Expira** | Data/hora em que o comunicado deixa de valer (se definida). |
| **No dashboard** | Indica que o comunicado também aparece no Quadro de Avisos do Dashboard. |
| **Autor e data** | Quem criou e quando. |

## O que dá pra fazer aqui

### Criar um novo comunicado

1. Clique em **Novo comunicado**. Abre o formulário.
2. Preencha o **Título** (obrigatório).
3. Escolha a **Severidade**: **Informativo**, **Atenção** ou **Urgente**.
4. Escreva a **Mensagem** (obrigatório).
5. Escolha os **Destinatários**:
   - **Todos os usuários ativos** — envia para todo mundo.
   - **Por papel (role)** — selecione o papel (ex.: ROLE_ADMIN, ROLE_ERP) e só quem tem aquele papel recebe.
   - **Lista de IDs específicos** — informe os IDs dos usuários separados por vírgula (ex.: `12, 45, 99`).
6. Se quiser, defina **Expira em** (data e hora) e marque/desmarque **Mostrar no Quadro de Avisos do Dashboard**.
7. Clique em **Enviar comunicado**. O sistema confirma quantos usuários foram notificados.

![Novo comunicado](/img/manual/erp/perfil-comunicados-novo.png)

### Excluir um comunicado

Clique no ícone de **lixeira** no cartão do comunicado e confirme em **Excluir comunicado?**.

> Importante: excluir o comunicado **não** apaga as notificações já entregues aos usuários — elas continuam na caixa de Mensagens de cada um. A exclusão apenas remove o registro desta lista.

## Dicas e observações

- Esta tela é **restrita a super-administradores**. Quem não tem esse perfil vê a mensagem "Acesso restrito a super-administradores".
- **Título** e **Mensagem** são obrigatórios; sem eles, o envio é bloqueado.
- Use a **severidade** com critério: deixe **Urgente** (vermelho) para situações que realmente exigem ação imediata.
- A opção **Mostrar no Quadro de Avisos do Dashboard** dá mais visibilidade ao comunicado, pois ele aparece logo na abertura do ERP, além da caixa de Mensagens.

## Veja também

- [Mensagens](perfil-mensagens.md)
- [Meu Perfil](perfil.md)
