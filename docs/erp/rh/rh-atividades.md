---
title: Relatório mensal de atividades
sidebar_position: 11
---

# Relatório mensal de atividades

O **relatório de atividades** mostra, mês a mês, o que cada pessoa da equipe fez: tarefas, chamados, atendimentos, agenda, acessos ao sistema e as atividades que ela registrou. Ele serve para **comprovar o trabalho do mês** e é entregue pela própria pessoa até o **1º dia útil do mês seguinte**.

O relatório é montado sozinho pelo sistema. A pessoa só precisa registrar o que **não deixa rastro** no ERP, como um atendimento pelo WhatsApp do próprio celular, uma ligação ou uma reunião. Veja [Registrar atividade](#registrar-atividade).

<!-- PRINTS: capturar no ERP de teste depois do deploy (erp.erp-teste.suporteleiloes.com.br, usuário IA Teste):
     rh-atividades.png (tela Minhas atividades), rh-atividades-registrar.png (modal), rh-atividades-entregar.png (modal de entrega), rh-atividades-entregas.png (visão do gestor) -->

## Como acessar

**ERP** → **RH** → **Atividades** → **Minhas atividades**.

Atalho: botão **+** no topo do ERP → **Atividade** (abre direto o registro).

## O que você vê nesta tela

| Parte | O que mostra |
|---|---|
| **Mês** | O mês do relatório. Por padrão, o mês anterior (o que deve ser entregue). |
| **Indicadores** | Dias úteis com atividade, horas registradas, tarefas concluídas, chamados resolvidos, respostas e mensagens de atendimento, atividades registradas. |
| **Avisos** | Atendimentos registrados **sem chamado** e **dias úteis sem nenhum registro**. |
| **Linha do tempo** | Um dia por linha: primeiro e último horário de atividade, horas e o que foi feito. Dias sem registro aparecem em vermelho; férias, licenças e faltas lançadas no RH, em amarelo. |
| **Atividades registradas** | O que você registrou à mão no mês, com opção de editar ou excluir. |
| **Chamados resolvidos** e **Tarefas concluídas** | A lista do mês, com link para cada um. |

### O que entra no relatório

| Fonte | O que conta |
|---|---|
| Tarefas | Tarefas concluídas, tempo apontado nas tarefas e comentários. |
| Chamados | Chamados recebidos e resolvidos por você, suas respostas e a satisfação dos clientes. |
| Atendimento | Mensagens que você enviou como atendente no chat do site e no WhatsApp integrado. |
| Agenda | Compromissos em que você é organizador ou participante. |
| Atividades registradas | O que você lançou em **Registrar atividade**. |
| Acessos | Dias em que você entrou no sistema e quantas ações fez nele. |
| Ausências | Férias, licença, afastamento e faltas lançadas no RH (esses dias não contam como "sem registro"). |

:::info
O relatório **não mostra salário nem custo**. Ele é sobre atividade, não sobre remuneração.
:::

## Registrar atividade

Use para o que não fica registrado no sistema: atendimento pelo WhatsApp do seu celular, ligação, reunião, atendimento presencial, e-mail ou trabalho interno.

1. Clique em **+ Registrar atividade**.
2. Informe a **data**, o **tipo** e o **horário** (início e fim) ou a **duração** em minutos.
3. Se foi com um cliente, informe o **cliente** (por exemplo, o domínio do leiloeiro).
4. Descreva **o que foi feito**.
5. Clique em **Salvar**.

### Atendimento de cliente vira chamado

Quando o tipo é um atendimento (WhatsApp, ligação, e-mail ou presencial), o sistema oferece **Abrir chamado para este atendimento**, já marcado. Deixe marcado: o chamado é criado com você como atendente, no canal certo, e fica ligado à atividade. Assim o atendimento entra também nos indicadores de chamados.

:::tip
Registre no mesmo dia, enquanto lembra dos detalhes. Você pode lançar atividades dos últimos 45 dias.
:::

## Entregar o relatório

Todo **1º dia útil do mês**, entregue o relatório do mês anterior:

1. Em **Mês**, deixe o mês anterior.
2. Confira a linha do tempo. Se faltou algo, registre agora.
3. Clique em **Entregar relatório**.
4. Se houver dias sem registro, explique no campo **Observações** (por exemplo, "dia 05: visita a cliente, sem acesso ao sistema").
5. Clique em **Entregar**.

O sistema guarda uma cópia do relatório como estava no momento da entrega. Depois de entregue, os registros daquele mês só podem ser alterados pelo gestor. Se precisar corrigir, use **Reentregar relatório** (a nova entrega substitui a anterior).

**Baixar PDF** gera o relatório em PDF, com a logomarca da empresa e campos de assinatura.

## Visão do gestor

Quem tem a permissão **Relatório de atividades: gerar de qualquer colaborador** (`rh/atividades/gerir`) pode:

- em **Minhas atividades**, escolher outro colaborador no campo **Colaborador (gestores)** e ver, baixar ou entregar o relatório dele;
- registrar atividade por outra pessoa;
- abrir **RH** → **Atividades** → **Entregas do relatório**, que mostra, para o mês escolhido, quem **entregou**, quem está **pendente** e quem está **atrasado** (depois do 1º dia útil), com o resumo e o PDF de cada entrega.

## Regras de negócio

- Cada pessoa vê e registra **só as próprias** atividades. Ver de outra pessoa exige a permissão de gestor.
- Só é possível registrar atividades de até **45 dias atrás** e nunca no futuro.
- Depois que o mês é entregue, só o gestor altera os registros dele.
- Dias úteis = segunda a sexta (feriados ainda não são descontados). Dias futuros não contam.
- O período máximo de um relatório é de 62 dias.

## Erros comuns

| Mensagem | O que fazer |
|---|---|
| "Você só pode ver e registrar as suas próprias atividades" | Você não tem a permissão de gestor. Peça ao administrador ou consulte só o seu relatório. |
| "O relatório deste mês já foi entregue" | Peça ao gestor para ajustar o registro, ou use **Reentregar relatório**. |
| "Só é possível registrar atividades dos últimos 45 dias" | Peça ao gestor para lançar a atividade antiga. |
| "Colaborador sem usuário no sistema" | O colaborador do RH não tem login no ERP. Crie o usuário dele ou vincule-o à pessoa certa. |

## Veja também

- [Painel da Equipe](./rh-painel-equipe.md)
- [Eventos (férias, faltas, licenças)](./rh-eventos.md)
- [Colaboradores](./rh-colaboradores.md)
