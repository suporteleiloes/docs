---
title: Funis de Venda
sidebar_position: 34
---

# Funis de Venda

Esta tela é onde você **configura os funis de venda** do CRM: cria funis, define as etapas de cada um (com probabilidade, cor e alerta de estagnação) e acompanha indicadores de cada funil. Também permite mover vários negócios de uma etapa para outra de uma só vez.

## Como acessar

**CRM** → **Pipeline** → **Funis de Venda** (ou pela barra de endereço em `/crm/funis-venda`).

![Funis de Venda](/img/manual/crm/crm-funis-venda.png)

## O que você vê nesta tela

A tela tem duas áreas:

**Coluna da esquerda — Funis**

Lista de todos os funis cadastrados, com a contagem total. Clique em um funil para selecioná-lo e ver seus detalhes à direita.

**Área da direita — Detalhe do funil**

Para o funil selecionado, aparecem:

- Indicadores no topo (cartões): **Negócios**, **Ganhos**, **Perdidos** e **Etapas**.
- A tabela de **etapas** do funil.
- O bloco **Conversão entre etapas** (quando há dados), com a taxa de conversão de uma etapa para a próxima.

A tabela de etapas mostra:

| Coluna | O que é |
|---|---|
| Cor | Bolinha colorida que identifica a etapa visualmente. |
| Etapa | Nome da etapa. |
| Probabilidade | Chance de fechamento atribuída à etapa (%). |
| Estagnação | Após quantos dias um negócio parado é considerado estagnado (ou —). |
| Negócios | Quantos negócios estão atualmente na etapa. |
| Tempo médio | Tempo médio que os negócios passam na etapa. |
| Ações | Links **Editar** e **Remover**. |

## O que dá pra fazer aqui

### Criar um novo funil

1. Clique em **Novo funil** (canto superior direito).
2. Informe o **Nome do funil** (ex.: "Vendas Diretas").
3. Clique em **Criar**. O novo funil é selecionado automaticamente.

### Adicionar ou editar uma etapa

1. Selecione o funil e clique em **Nova etapa** (ou **Editar** numa etapa existente).
2. Preencha:
   - **Nome da etapa** (obrigatório, ex.: "Qualificação").
   - **Probabilidade (%)** de fechamento.
   - **Cor** da etapa (seletor de cor).
   - **Alertar estagnação** — ligue para ser avisado quando um negócio ficar parado; ao ligar, informe os **dias até considerar estagnado**.
3. Clique em **Salvar**.

![Nova etapa](/img/manual/crm/crm-funis-venda-etapa.png)

### Remover uma etapa

1. Clique em **Remover** na linha da etapa.
2. Confirme. Etapas que ainda têm **negócios ativos não podem ser removidas** — mova-os antes (veja abaixo).

### Mover negócios em massa

1. Clique em **Mover negócios em massa** (no topo).
2. Escolha a **Etapa de origem** e a **Etapa de destino** (devem ser diferentes).
3. Marque os negócios que quer mover (ou use **Selecionar todos**). Cada item mostra o título e o valor do negócio.
4. Clique em **Mover**. Os negócios selecionados passam para a etapa de destino.

![Mover negócios em massa](/img/manual/crm/crm-funis-venda-mover.png)

## Dicas e observações

- A **probabilidade** de cada etapa alimenta as previsões do pipeline — mantenha-a coerente com a realidade do funil.
- O alerta de **estagnação** ajuda a não deixar negócios "esquecidos" parados numa etapa.
- Para remover uma etapa com negócios, primeiro use **Mover negócios em massa** para esvaziá-la.
- O bloco de **conversão entre etapas** mostra quão bem os negócios avançam de uma etapa para a seguinte — taxas baixas indicam gargalos.

## Veja também

- [Negócios](negocios.md)
- [Kanban do funil](crm-negocios-kanban.md)
- [Detalhe do negócio](<crm-negocios-id.md>)
