---
title: Kanban do funil
sidebar_position: 2
---

# Kanban do funil

Esta é a visão de pipeline dedicada de um funil específico. Diferente do Kanban geral da tela de [Negócios](negocios.md), aqui você escolhe **qual funil** quer enxergar e trabalha os negócios coluna a coluna, com indicadores de probabilidade, idade do cartão e ações de fechamento (ganhar/perder) direto no quadro.

## Como acessar

**CRM** → **Negócios** → **Kanban do funil** (ou pela barra de endereço em `/crm/negocios/kanban`).

![Kanban do funil](/img/manual/crm/crm-negocios-kanban.png)

## O que você vê nesta tela

No topo ficam:

- **Funil** — seletor para trocar o funil exibido. As colunas e etapas mudam conforme o funil escolhido.
- **Filtrar cards** — busca rápida por título, pessoa ou empresa dentro do funil atual.
- Botão de **atualizar** (recarrega o quadro) e **Novo negócio**.

Logo abaixo há uma **barra-resumo** com três indicadores do funil:

| Indicador | O que é |
|---|---|
| Negócios | Total de negócios no funil (após o filtro) |
| Em aberto | Quantos ainda não foram ganhos nem perdidos |
| Valor total | Soma dos valores de todos os negócios exibidos |

### As colunas (etapas)

Cada coluna representa uma etapa do funil, com uma faixa colorida no topo. O cabeçalho mostra o nome da etapa, a contagem de negócios e um botão **+** para criar um negócio já naquela etapa. Etapas finais ganham a marcação **Ganho** ou **Perdido**. Abaixo do nome aparece a soma de valores da coluna e a probabilidade (%) da etapa, quando configurada.

### Os cartões

Cada cartão mostra:

- Título do negócio
- Avatar + nome da pessoa e a organização
- Tags (até 3)
- Valor e probabilidade (%)
- Idade do cartão (há quanto tempo foi criado) e a previsão de fechamento
- Um marcador de alerta quando o negócio está **parado há 14 dias ou mais**

## O que dá pra fazer aqui

### Trocar de funil

Use o seletor **Funil** no topo. A escolha fica memorizada para a próxima vez e pode ser compartilhada por link.

### Criar um negócio numa etapa específica

1. Clique no **+** no cabeçalho da coluna desejada (ou em **Adicionar negócio**, quando a coluna está vazia).
2. O formulário de novo negócio abre já com o funil e a etapa daquela coluna pré-selecionados.
3. Preencha os dados e clique em **Criar negócio**.

### Mover negócios entre etapas

Arraste o cartão de uma coluna para outra. A mudança é aplicada imediatamente. Se você soltar o cartão em uma etapa de **Perdido**, abre automaticamente o formulário para informar o motivo da perda.

### Marcar como ganho

1. Nos cartões da etapa final (ou última) ainda abertos, clique em **Ganhar**.
2. Informe o **valor final** fechado com o cliente.
3. Clique em **Confirmar ganho**.

![Fechar negócio como ganho](/img/manual/crm/crm-negocios-kanban-ganhar.png)

### Marcar como perdido

1. Clique no botão **X** (perder) no cartão, ou arraste para uma etapa de "Perdido".
2. Escolha o **Motivo** (Preço, Concorrência, Timing, Produto ou Outros).
3. Adicione **Observações** se quiser e clique em **Confirmar perda**.

![Marcar negócio como perdido](/img/manual/crm/crm-negocios-kanban-perder.png)

### Abrir/editar um negócio

Clique no corpo do cartão para abrir o formulário de edição.

## Dicas e observações

- O marcador laranja de "negócio parado" ajuda a identificar oportunidades estagnadas (14+ dias sem fechar) que precisam de atenção.
- O quadro atualiza em tempo real após mover, ganhar ou perder; use o botão de atualizar se quiser forçar uma recarga.
- Acesso exige o perfil de CRM.

## Veja também

- [Negócios](negocios.md)
- [Detalhe do negócio](<crm-negocios-id.md>)
