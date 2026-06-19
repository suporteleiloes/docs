---
title: Funil de Relacionamento
sidebar_position: 6
---

# Funil de Relacionamento

O Funil de Relacionamento é um quadro Kanban que mostra a jornada das pessoas nos seus leilões, da primeira visita à fidelização. A etapa de cada pessoa é derivada automaticamente do comportamento dela (lances, arremates, habilitação), mas você pode movê-la manualmente arrastando o cartão.

## Como acessar
**CRM** → **Funil de Relacionamento** (URL `/crm/pipeline`).

![Funil de Relacionamento](/img/manual/crm/crm-pipeline.png)

## O que você vê nesta tela

As sete etapas principais como colunas:

**Visitante → Cadastrado → Habilitado → Lance → Arrematou → Pós-venda → Fidelizado**

E uma seção lateral recolhível para **Descartado**.

| Elemento | O que é |
|---|---|
| Faixa de KPIs (topo) | Taxas de conversão entre etapas consecutivas. Conversões baixas são marcadas como **Gargalo**. |
| Cabeçalho da coluna | Nome da etapa, cor, contagem de pessoas e tempo médio na etapa. Mostra selo "Gargalo" quando há pessoas paradas há muito tempo. |
| Cartão da pessoa | Iniciais, nome, documento e há quanto tempo está na etapa. |
| Selo VIP (estrela) | Aparece em pessoas com pontuação muito alta (score igual ou acima de 1.000). |
| Cadeado no cartão | Indica que a pessoa foi movida manualmente — a etapa automática fica travada. |

A coluna **Descartado** fica separada das sete principais (é a etapa interna 99) e funciona como saída do funil: você arrasta para lá pessoas que não fazem mais sentido acompanhar.

## O que dá pra fazer aqui

### Mover uma pessoa de etapa
1. Arraste o cartão da pessoa de uma coluna para outra.
2. A mudança é aplicada na hora. A pessoa passa a exibir o cadeado (movimento manual), o que bloqueia a recategorização automática.

### Abrir a ficha de uma pessoa
1. Clique no cartão da pessoa para abrir o cadastro completo dela.

### Carregar mais pessoas
1. Quando uma coluna tem mais pessoas do que as exibidas, clique em **Carregar mais** no fim da coluna.

### Ver descartados
1. Abra a seção recolhível **Descartado** no rodapé. Você também pode arrastar cartões para lá.

### Identificar gargalos
- Na faixa de KPIs, conversões abaixo do esperado aparecem destacadas como **Gargalo**.
- Nos cabeçalhos das colunas, o selo **Gargalo** sinaliza etapas onde as pessoas ficam paradas muito tempo (média acima de ~30 dias).

## Regras de negócio

- **Etapa automática (derive):** enquanto você não move a pessoa manualmente, a etapa dela é recalculada pelo sistema com base no comportamento (cadastro, habilitação, lances, arremate, pós-venda). Por isso o funil reflete a jornada real sem trabalho manual.
- **Trava manual:** ao arrastar um cartão, a pessoa recebe o marcador `etapa_manual` (o cadeado). A partir daí o derive automático fica desligado para ela — o sistema não vai mais sobrescrever a etapa. Para voltar ao automático, ajuste pela configuração de etapas.
- **Gargalo na conversão:** uma seta de conversão entre duas etapas é marcada como **Gargalo** quando a taxa fica abaixo de ~20% (poucas pessoas avançam).
- **Gargalo na coluna:** o selo **Gargalo** no cabeçalho aparece quando o tempo médio na etapa passa de ~30 dias (pessoas paradas).
- **Movimento otimista:** a mudança aparece na tela na hora; se a gravação falhar, a coluna é recarregada e a pessoa volta ao lugar de origem.

## Dicas e observações
- Mover manualmente "congela" a etapa daquela pessoa. Use com critério: pessoas travadas não acompanham mais a jornada automaticamente.
- Para mudar quais etapas existem, suas cores e critérios, use a tela de configuração de etapas.

## Veja também
- [Configurar etapas do funil](./crm-pipeline-config.md)
