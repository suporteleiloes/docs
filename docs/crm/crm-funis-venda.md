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

1. Clique em **Mover negócios em massa** (no topo). O botão só fica disponível quando o funil selecionado tem etapas.
2. Escolha a **Etapa de origem** e a **Etapa de destino** (devem ser diferentes).
3. A lista carrega os **negócios ativos** (não fechados) que estão na etapa de origem. Marque os que quer mover (ou use **Selecionar todos**). Cada item mostra o título e o valor do negócio.
4. Clique em **Mover**. Os negócios selecionados passam para a etapa de destino e o sistema informa quantos foram movidos.

> Mover negócios em massa é uma ação separada e exige a permissão de **ações em massa do funil** — ela pode estar liberada de forma independente das demais permissões do funil.

![Mover negócios em massa](/img/manual/crm/crm-funis-venda-mover.png)

## Regras de negócio

- **Remoção de etapa bloqueada:** uma etapa com **negócios ativos** não pode ser removida — o sistema retorna erro. Esvazie a etapa antes (mova ou conclua os negócios).
- **Conversão entre etapas:** a taxa é calculada comparando a quantidade de negócios de uma etapa com a da etapa anterior, na ordem do funil. Por isso a ordem das etapas importa para a leitura do indicador.
- **Cor da etapa:** a cor escolhida fica salva, mas a listagem de etapas usa uma paleta de cores por posição quando a cor não é devolvida pela consulta. Em alguns casos a cor exibida na tabela pode diferir da que você escolheu — isso não afeta o funcionamento do funil.
  > A confirmar com Tiago: alinhar o retorno de `cor` na consulta de etapas para a tabela refletir exatamente a cor salva.

## Permissões

O acesso é controlado por permissões (ACL) do perfil:

- **Ver** funis, etapas e indicadores (KPIs/conversão): permissão de visualização do funil.
- **Criar funil** e **criar/editar/remover etapas**: permissão de edição do funil.
- **Mover negócios em massa**: permissão específica de ações em massa do funil.

## Dicas e observações

- A **probabilidade** de cada etapa alimenta as previsões do pipeline — mantenha-a coerente com a realidade do funil.
- O alerta de **estagnação** ajuda a não deixar negócios "esquecidos" parados numa etapa.
- Para remover uma etapa com negócios, primeiro use **Mover negócios em massa** para esvaziá-la.
- O bloco de **conversão entre etapas** mostra quão bem os negócios avançam de uma etapa para a seguinte — taxas baixas indicam gargalos.

## Veja também

- [Negócios](negocios.md)
- [Kanban do funil](crm-negocios-kanban.md)
- [Detalhe do negócio](<crm-negocios-id.md>)
- [Previsão & Metas de Vendas](crm-forecast.md)
