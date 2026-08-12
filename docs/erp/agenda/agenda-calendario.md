---
title: Calendário
sidebar_position: 1
---

# Agenda

A **Agenda** é o calendário da sua equipe: reuniões, treinamentos, visitas, bloqueios de horário e compromissos pessoais. Ela serve para **trancar a agenda** de cada colaborador e enxergar quem está livre ou ocupado — sem se misturar com o módulo de **Tarefas**.

:::tip Agenda × Tarefas — qual usar?
Use **Tarefas** para o trabalho que consome esforço numa demanda (e cujo tempo é apontado). Use a **Agenda** para compromissos que **ocupam um horário** mas não são uma demanda: uma reunião, um treinamento, uma visita. Assim, uma reunião não infla as métricas de produtividade das tarefas.
:::

## Como acessar

**ERP** → **Agenda** → **Calendário**.

![Agenda — visão semana](/img/manual/erp/agenda-calendario.jpg)

## O que você vê nesta tela

No topo fica a barra de navegação; logo abaixo, a legenda de cores; e ocupando o restante, o calendário.

### Barra de navegação

| Elemento | O que faz |
|---|---|
| **Hoje** | Retorna para a data atual |
| **‹ ›** | Volta/avança a semana (ou o dia) |
| Período | Mostra o intervalo em exibição (ex.: *10 – 16 de agosto de 2026*), logo após as setas |
| **Filtrar por colaborador** | Mostra apenas os compromissos de uma pessoa |
| **Semana / Dia / Lista** | Alterna o modo de visualização |
| **⤓ .ics** | Exporta a agenda para importar no Google Agenda, Outlook ou Apple |

### Modos de visualização

- **Semana** — grade de 7 dias com as horas na lateral. Cada compromisso aparece no seu horário; quando dois se sobrepõem, ficam lado a lado. Uma linha vermelha marca a **hora atual**.
- **Dia** — a mesma grade, focada em um único dia.
- **Lista** — os compromissos agrupados por dia, em formato de lista.

![Agenda — visão lista](/img/manual/erp/agenda-lista.jpg)

### Cores e ícones

Cada **tipo** de compromisso tem uma cor (Reunião, Treinamento, Visita, Bloqueio, Pessoal, Outro). O ícone **↻** indica que o compromisso **se repete**. Além dos seus compromissos, a Agenda mostra automaticamente mais duas fontes, para você ver **tudo num lugar só**:

- **Ausência (RH)** — férias, licença, afastamento e falta, em **vermelho** (geridas no RH → Eventos).
- **Atividade (CRM)** — ligações, reuniões e visitas da agenda comercial, em **roxo tracejado** (geridas no CRM → Atividades). Veja [Atividades do CRM na Agenda](#atividades-do-crm-na-agenda).

## O que dá pra fazer aqui

### Criar um compromisso

1. Clique em **+ Novo compromisso** (ou clique direto num espaço vazio do calendário para já vir com o horário preenchido).
2. Escolha o **tipo** (Reunião, Treinamento, Visita, Bloqueio, Pessoal ou Outro).
3. Dê um **Título**.
4. Informe **Início** e **Fim** (ou marque **Dia inteiro**).
5. Em **Repetição**, deixe *Não repete* ou escolha a frequência (veja [Compromissos que se repetem](#compromissos-que-se-repetem)).
6. Opcionalmente preencha **Local** e **Link (online)**.
7. Adicione **Participantes**: digite o nome do colaborador e selecione na lista. Cada participante entra como *Convidado*.
8. Use **Descrição** para a pauta.
9. Escolha a **Visibilidade** — *Pública* ou *Privada* (veja [Quem enxerga o compromisso](#quem-enxerga-o-compromisso-pública-ou-privada)).
10. Clique em **Criar**.

![Novo compromisso](/img/manual/erp/agenda-novo.jpg)

### Editar um compromisso

Clique sobre o compromisso no calendário. A janela abre com todos os dados. Ajuste o que precisar e clique em **Salvar**.

### Excluir

Abra o compromisso e clique em **Remover**. Se o compromisso **se repete**, a exclusão remove a série inteira.

## Quem enxerga o compromisso (Pública ou Privada)

Todo compromisso tem uma **Visibilidade**, escolhida na criação (e alterável ao editar):

| Visibilidade | Quem vê os detalhes | O que os demais veem |
|---|---|---|
| **Pública** *(padrão)* | Todos que têm acesso à Agenda | O compromisso completo: título, local, link, participantes |
| **Privada** | Apenas o **organizador** e os **participantes** | Apenas um bloco **"Ocupado"** no horário — sem título, local, link, descrição ou participantes |

Ou seja, um compromisso **privado** ainda **tranca a agenda** da pessoa (os outros sabem que ela está ocupada e não a agendam por cima), mas o **conteúdo fica reservado** para quem participa. Use *Privada* para reuniões sensíveis ou compromissos pessoais.

:::info Vale também no aviso de conflito
Quando alguém tenta agendar em cima de um compromisso **privado** de outra pessoa, o aviso de conflito mostra apenas **"Ocupado"** — nunca o título do compromisso reservado.
:::

## Compromissos que se repetem

Ao criar ou editar, escolha em **Repetição**: *Diariamente*, *Semanalmente*, *A cada 2 semanas* ou *Mensalmente*. Informe também **Repetir até** para definir quando a série termina.

![Compromisso recorrente com participante](/img/manual/erp/agenda-recorrencia.jpg)

- O compromisso passa a aparecer em **todas as datas** da recorrência, marcado com **↻**.
- Você só cadastra **uma vez** — o sistema gera as repetições automaticamente.

## Participantes e confirmação

Ao abrir um compromisso já salvo, cada participante mostra um **ponto colorido** com sua resposta:

| Cor | Situação |
|---|---|
| Cinza | Convidado (ainda não respondeu) |
| Verde | Aceito |
| Vermelho | Recusado |
| Laranja | Talvez |

Use os botões **✓** (aceitar) e **✕** (recusar) ao lado do participante para registrar a resposta. O **✕** maior (à direita) **remove** a pessoa do compromisso.

:::info Aviso de conflito
Ao salvar, se algum participante já tiver outro compromisso naquele horário, o sistema avisa e pergunta se você quer **criar mesmo assim**. É só um alerta — você decide.
:::

## Atividades do CRM na Agenda

A Agenda é a **visão única de tempo** de cada pessoa. Por isso, além dos compromissos, ela também **mostra as atividades comerciais** do CRM (ligações, reuniões, visitas, e-mails e WhatsApp que a equipe tem para fazer com clientes).

![Atividade do CRM aparecendo na Agenda](/img/manual/erp/agenda-atividade-crm.jpg)

- As atividades do CRM aparecem em **roxo com borda tracejada**, para você distinguir do que é compromisso.
- Elas continuam sendo **criadas e geridas no CRM** — clicar numa atividade leva você direto para **CRM → Atividades**.
- Assim você enxerga, no mesmo calendário, **compromissos + ausências + atividades comerciais**, sem cadastrar nada duas vezes.

:::info Atividade (CRM) × Compromisso (Agenda)
- **Atividade** é uma **ação a fazer** com um cliente (ligar, reunir, visitar), com prazo e vinculada a uma pessoa/negócio — é acompanhada no CRM e entra na produtividade das Tarefas.
- **Compromisso** é um **bloco de tempo** que ocupa a sua agenda (reunião de equipe, treinamento, bloqueio) — trava a disponibilidade, mas não é uma demanda.
:::

## Exportar para o Google Agenda / Outlook

Clique em **⤓ .ics** na barra superior. Um arquivo `.ics` é baixado com seus compromissos (inclusive as repetições). Importe esse arquivo no **Google Agenda**, **Outlook** ou **Apple Calendário** para ver a agenda por lá.

## Regras de negócio

- **Compromisso não conta tempo de tarefa.** Ele ocupa a agenda e a disponibilidade da pessoa, mas nunca entra nas métricas de produtividade das Tarefas.
- **Título, Início e Fim são obrigatórios.** O fim não pode ser antes do início.
- **Ausências do RH aparecem automaticamente** na agenda (férias, licença, afastamento e falta), em vermelho, e são geridas no módulo **RH → Eventos** — não se editam pela Agenda.
- **Editar um compromisso que se repete altera a série toda.** A recorrência termina na data informada em *Repetir até*.
- **Compromisso privado tranca a agenda, mas esconde os detalhes.** Quem não é organizador nem participante vê só *"Ocupado"* no horário — inclusive no aviso de conflito.

## Erros comuns

- **"O fim não pode ser antes do início."** Ajuste os horários — o Fim precisa ser depois do Início.
- **Um participante não aparece na busca.** Só entram como participantes as pessoas cadastradas como **colaboradores** (RH → Colaboradores).
- **Coloquei repetição mas não aparece nas próximas semanas.** Confira se preencheu **Repetir até** com uma data no futuro.

## Dicas

- Clique num **espaço vazio** do dia/horário para criar um compromisso já com o horário certo.
- Use **Bloqueio** para trancar um período em que você não quer ser agendado (foco, deslocamento).
- **Filtre por colaborador** antes de exportar o `.ics` para levar só a agenda daquela pessoa.

## Veja também

- [Painel da Equipe](../rh/rh-painel-equipe.md) — visão operacional da equipe.
- [Eventos de RH](../rh/rh-eventos.md) — onde se registram férias, licenças e faltas que aparecem na Agenda.
- [Atividades e Agenda do CRM](../../crm/crm-atividades.md) — a agenda comercial (ligações, reuniões, visitas) que também aparece aqui.
- [Tarefas](../tarefas/sl-tarefas.md) — para o trabalho que consome esforço e tem tempo apontado.
