---
title: Segmentos
sidebar_position: 20
---

# Segmentos

Segmentos são grupos de pessoas montados a partir de critérios — por exemplo, "arrematantes que deram lance em imóveis" ou "leads do site com score alto". Você usa segmentos para mirar uma audiência específica nas campanhas de marketing, em vez de disparar para a base inteira.

## Como acessar

**CRM** → **Marketing** → **Segmentos**.

![Segmentos](/img/manual/crm/crm-segmentos.png)

## O que você vê nesta tela

No topo há a busca por nome e o botão **Novo segmento**. Logo abaixo, a tabela com os segmentos já criados.

| Coluna | O que é |
|---|---|
| **#** | Número (identificador) do segmento. |
| **Nome** | Nome que você deu ao segmento. |
| **Tipo** | **Dinâmico** (recalcula a audiência sempre que for usado) ou **Estático** (foto fixa de quem estava no grupo quando foi salvo). |
| **Critérios** | Quantos critérios o segmento combina (filtros de pessoa + comportamentos). |

Na ponta direita de cada linha estão os botões de **Editar** e **Excluir**.

## O que dá pra fazer aqui

- **Criar** um novo segmento.
- **Editar** um segmento existente.
- **Excluir** um segmento.
- **Buscar** pelo nome.

### Criar um novo segmento

1. Clique em **Novo segmento**.
2. Preencha o **Nome** (obrigatório) — ex.: "Interessados em imóveis".
3. Escolha o **Tipo**:
   - **Dinâmico (recalcula sempre)**: o segmento sempre reflete quem se encaixa nos critérios no momento do uso.
   - **Estático (foto fixa)**: congela o grupo de pessoas no estado atual.
4. No bloco **Critérios de audiência**, escolha como os critérios se combinam:
   - **Qualquer (OR)**: a pessoa entra se atender a pelo menos um critério.
   - **Todos (AND)**: a pessoa entra só se atender a todos os critérios.
5. Em **Filtros de pessoa**, defina o que quiser (todos opcionais):
   - **Status**: Lead, Novo, Ativo, Inativo ou Inadimplente.
   - **Papel**: Arrematante, Comitente, Parceiro, Reboquista ou Vistoriador.
   - **Origem**: Site, Leilão, Cadastro manual, Importação, Aplicativo ou Cadastro público.
   - **Score mínimo**: nota mínima de lead scoring.
   - **Busca (nome / documento)**: texto livre.
6. Em **Comportamento (seguimentos)**, ligue os comportamentos que quiser usar como critério:
   - Favoritou tipo de bem / Deu lance em tipo de bem — ao ligar, escolha o **tipo de bem**.
   - Favoritou um bem específico / Deu lance em um bem específico / Enviou proposta (venda direta) p/ bem — ao ligar, informe o **ID do bem**.
   - Arrematante pendente de aprovação / Arrematante aprovado / Arrematante que comprou.
7. Acompanhe a **contagem de audiência ao vivo** no rodapé do bloco: conforme você mexe nos critérios, o sistema estima quantas pessoas entram no segmento.
8. Clique em **Criar**. O segmento aparece na lista.

![Novo segmento](/img/manual/crm/crm-segmentos-novo.png)

### Editar um segmento

1. Clique no ícone de **lápis** na linha do segmento.
2. Ajuste nome, tipo ou critérios.
3. Clique em **Salvar**.

### Excluir um segmento

1. Clique no ícone de **lixeira** na linha.
2. Confirme em **Excluir**.

## Dicas e observações

- A **contagem ao vivo** só é calculada quando todos os comportamentos selecionados estão completos. Se você ligou "Deu lance em tipo de bem" mas não escolheu o tipo, aparece um aviso pedindo para definir o tipo de bem / bem antes de estimar a audiência.
- Para salvar, é obrigatório informar o **Nome** e completar qualquer comportamento que exija tipo de bem ou ID de bem.
- Segmento **dinâmico** é o mais comum: você não precisa atualizá-lo manualmente, ele recalcula a cada uso. Use **estático** quando quiser preservar exatamente o grupo de uma data específica.

## Veja também

- [Campanhas](marketing-campanhas.md)
- [Lead Scoring](crm-leads.md)
- [Importar pessoas](crm-pessoas-import.md)
