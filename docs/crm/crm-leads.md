---
title: Lead Scoring
sidebar_position: 22
---

# Lead Scoring

Esta tela lista as pessoas com **nota de lead scoring** — uma pontuação de 0 a 100 que indica o quão "quente" cada pessoa está, combinando o perfil dela com o interesse demonstrado (lances, favoritos, navegação). Serve para priorizar contatos: quem está mais quente tende a converter mais.

## Como acessar

**CRM** → **Lead Scoring**.

![Lead Scoring](/img/manual/crm/crm-leads.png)

## O que você vê nesta tela

No topo há a busca por nome e dois seletores: **Faixa de score** e **Ordenar por**. Abaixo, a tabela de leads pontuados.

| Coluna | O que é |
|---|---|
| **Nome** | Nome da pessoa. É um link que abre o perfil dela. |
| **Score total** | A nota geral (0–100), com uma etiqueta de faixa colorida. |
| **Perfil** | Parte da nota que vem dos dados de perfil da pessoa. |
| **Interesse** | Parte da nota que vem do comportamento/interesse demonstrado. |

As faixas de score são:

- **Frio (0–25)**
- **Morno (26–50)**
- **Quente (51–75)**
- **Muito quente (76–100)**

## O que dá pra fazer aqui

- **Filtrar** por faixa de score.
- **Ordenar** por score total, perfil, interesse ou nome.
- **Buscar** por nome (filtra a página exibida).
- **Abrir o perfil** de cada pessoa.

### Filtrar e ordenar

1. Em **Faixa de score**, escolha a faixa desejada (ou "Todas as faixas").
2. Em **Ordenar por**, escolha o critério de ordenação.
3. A lista atualiza automaticamente.

### Abrir o perfil de uma pessoa

- Clique no **nome** da pessoa, ou no ícone de **abrir** (seta) na ponta direita da linha. O perfil da pessoa é aberto numa nova visão.

## Regras de negócio

- **Score = perfil + interesse.** A nota total combina a parte de **perfil** (dados cadastrais da pessoa) com a parte de **interesse** (comportamento: lances, favoritos, navegação). As duas parcelas aparecem em colunas separadas para você entender de onde vem o "calor".
- **Recálculo automático.** Os scores são recalculados pelo sistema; esta tela apenas lê o resultado. Uma pessoa nova ou sem atividade pode ainda não ter score.
- **Paginação.** A lista é paginada (20, 50 ou 100 por página). Use a paginação junto com a faixa de score para varrer a base.

## Dicas e observações

- A busca por nome filtra apenas os leads da página atual carregada — não procura na base inteira. Para varrer toda a base, ajuste a faixa de score e a paginação.
- Esta tela é **somente leitura** sobre os scores: ela não edita o cadastro da pessoa, apenas leva você até o perfil.
- Se aparecer o aviso "Lead scoring indisponível neste ambiente", significa que o cálculo de scores ainda não está ativo neste tenant. O aviso traz o motivo técnico real, sem esconder o erro.

## Veja também

- [Segmentos](crm-segmentos.md)
- [Leads do Site](crm-leads-site.md)
