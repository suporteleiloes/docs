---
title: Filas de Atendimento
sidebar_position: 3
---

# Filas de Atendimento

As filas organizam por onde os atendimentos de suporte entram e são tratados. Cada fila tem uma prioridade e um prazo de atendimento (SLA), ajudando a equipe a saber o que responder primeiro. Aqui você cadastra, edita e ativa ou desativa as filas.

## Como acessar
**Suporte** → **Filas**

![Filas de Atendimento](/img/manual/erp/suporte-filas.png)

## O que você vê nesta tela

No topo da lista há um campo de busca para filtrar as filas pelo nome. Abaixo, a lista paginada mostra uma fila por linha.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação da fila. |
| **Nome** | Nome da fila (ex.: Suporte Técnico). |
| **Prioridade** | Nível da fila: 1 Baixa, 2 Normal, 3 Alta ou 4 Urgente. Prioridades Alta e Urgente aparecem destacadas. |
| **SLA (h)** | Prazo de atendimento em horas. Mostra "—" quando não definido. |
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
4. Informe o **SLA (horas)** — o prazo, em horas, para atender os chamados dessa fila (opcional).
5. Use a chave **Fila ativa** para deixar a fila disponível (ligada) ou indisponível (desligada).
6. Clique em **Criar fila**. A fila aparece na lista.

![Nova fila](/img/manual/erp/suporte-filas-novo.png)

### Editar uma fila
1. Clique no ícone de lápis na linha (ou dê duplo clique na linha).
2. Ajuste nome, prioridade, SLA ou o estado ativo/inativo.
3. Clique em **Salvar alterações**.

### Excluir uma fila
1. Clique no ícone de lixeira na linha da fila.
2. Confirme em **Excluir**. A ação é irreversível.

## Dicas e observações
- O **SLA** é o tempo-alvo de resposta em horas. Defina-o de acordo com o que sua operação se compromete a cumprir.
- Em vez de excluir uma fila que não está mais em uso, prefira desligar a chave **Fila ativa**: ela some do uso corrente sem apagar o histórico.
- Use prioridades **Alta** e **Urgente** com critério — elas ficam destacadas para chamar a atenção da equipe.

## Veja também
- [Clientes de Suporte](./suporte-clientes.md)
- [Projetos de Suporte](./suporte-projetos.md)
