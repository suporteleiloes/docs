---
title: Filas de Atendimento
sidebar_position: 3
---

# Filas de Atendimento

As filas organizam por onde os atendimentos de suporte entram e são tratados. Cada fila tem uma prioridade e um prazo de atendimento (SLA), ajudando a equipe a saber o que responder primeiro. Aqui você cadastra, edita e ativa ou desativa as filas.

## Como acessar
**Suporte** → **Filas**

> A confirmar: nesta versão a tela é acessada pela URL `/suporte/filas`. O item de menu correspondente pode ainda não estar visível na barra lateral em todos os perfis — se não encontrar o atalho, acesse pelo endereço direto.

![Filas de Atendimento](/img/manual/erp/suporte-filas.png)

## Pré-requisitos

- Você precisa estar autenticado no ERP. A listagem fica disponível para usuários do suporte e da gerência.
- Não há outro cadastro a fazer antes: a fila é o ponto de entrada das tarefas de suporte.

## O que você vê nesta tela

No topo da lista há um campo de busca para filtrar as filas pelo nome. Abaixo, a lista paginada mostra uma fila por linha.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação da fila. |
| **Nome** | Nome da fila (ex.: Suporte Técnico). |
| **Prioridade** | Nível da fila: 1 Baixa, 2 Normal, 3 Alta ou 4 Urgente. Prioridades Alta e Urgente aparecem destacadas. |
| **SLA (h)** | Prazo-alvo de atendimento em horas, quando informado. Veja a observação sobre o SLA em **Regras de negócio**. |
| **Status** | Ativa (verde) ou Inativa. |

## O que dá pra fazer aqui

- **Buscar** — digite no campo de busca no topo para filtrar filas pelo nome.
- **Nova fila** — botão no topo direito, abre o formulário de cadastro.
- **Editar** — ícone de lápis na linha, ou duplo clique sobre a linha.
- **Excluir** — ícone de lixeira na linha (pede confirmação).

### Cadastrar uma nova fila
1. Clique em **Nova fila** no canto superior direito.
2. Preencha o **Nome** (obrigatório) — por exemplo, "Suporte Técnico". Sem nome o botão de salvar fica bloqueado.
3. Escolha a **Prioridade**: 1 Baixa, 2 Normal, 3 Alta ou 4 Urgente.
4. Informe o **SLA (horas)** — o prazo-alvo, em horas, para atender os chamados dessa fila (opcional). Veja a observação sobre o SLA em **Regras de negócio**.
5. Use a chave **Fila ativa** para deixar a fila disponível (ligada) ou indisponível (desligada).
6. Clique em **Criar fila**. A fila aparece na lista.

> Apenas o **Nome** é obrigatório. A prioridade já vem como **2 — Normal** e a fila já nasce **ativa**.

![Nova fila](/img/manual/erp/suporte-filas-novo.png)

### Editar uma fila
1. Clique no ícone de lápis na linha (ou dê duplo clique na linha).
2. Ajuste nome, prioridade, SLA ou o estado ativo/inativo.
3. Clique em **Salvar alterações**.

### Excluir uma fila
1. Clique no ícone de lixeira na linha da fila.
2. Confirme em **Excluir**. A fila sai da lista (a exclusão é tratada como definitiva pela interface).

> **Importante:** o sistema **não deixa excluir** uma fila que ainda tenha tarefas vinculadas, para não prejudicar o funcionamento. Se houver tarefas, mova-as para outra fila antes. Para tirar a fila do uso corrente sem excluir, desligue a chave **Fila ativa**.

## Regras de negócio

- **A prioridade ordena o trabalho.** A prioridade serve para a equipe saber o que tratar primeiro. As filas de prioridade **Alta** e **Urgente** ficam destacadas na lista. Ela é gravada e usada para ordenar/destacar as filas.
- **Sobre o SLA.** O campo SLA representa o tempo-alvo de resposta em horas e existe como orientação para a equipe.
  > A confirmar: nesta versão o valor de SLA digitado **não é armazenado** pelo sistema (a fila guarda nome, prioridade e situação ativa/inativa). Trate-o como referência visual no momento do cadastro e, para acordos formais de prazo, registre o SLA em outro lugar até que o campo seja persistido.
- **Exclusão protegida.** Filas com tarefas vinculadas não podem ser excluídas — é preciso mover as tarefas para outra fila antes. Isso evita perder a referência das tarefas em andamento.
- **Ativa vs. inativa.** Desligar **Fila ativa** mantém a fila e o histórico, mas a tira do uso corrente. É a forma recomendada de "aposentar" uma fila.

## Erros comuns

- **Botão Criar bloqueado:** falta preencher o **Nome**, único campo obrigatório.
- **"Existem tarefas relacionadas à esta fila":** a fila tem tarefas e por isso não pode ser excluída. Mova as tarefas para outra fila antes, ou apenas desligue a chave **Fila ativa**.
- **O SLA que digitei sumiu depois de salvar:** comportamento esperado nesta versão — veja a observação sobre o SLA em **Regras de negócio**.

## Dicas e observações
- Em vez de excluir uma fila que não está mais em uso, prefira desligar a chave **Fila ativa**: ela some do uso corrente sem apagar o histórico.
- Use prioridades **Alta** e **Urgente** com critério — elas ficam destacadas para chamar a atenção da equipe.

## Veja também
- [Clientes de Suporte](./suporte-clientes.md)
- [Projetos de Suporte](./suporte-projetos.md)
