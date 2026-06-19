---
title: Eventos
sidebar_position: 6
---

# Eventos

A tela de Eventos é o registro de tudo que acontece na vida funcional de cada colaborador: faltas, atrasos, férias, licenças, afastamentos, advertências, observações, avaliações e também eventos com valor, como alteração salarial, bônus e desconto. É o histórico de pessoal da sua leiloeira.

## Como acessar

**ERP** → **RH** → **Eventos**.

![Eventos](/img/manual/erp/rh-eventos.png)

## O que você vê nesta tela

No topo, uma barra de filtros; abaixo, a tabela com todos os eventos registrados.

### Filtros

| Filtro | O que faz |
|---|---|
| Campo de busca | Procura por colaborador ou descrição |
| Tipo | Filtra por tipo de evento (falta, atraso, férias, bônus etc.) |
| Status | Filtra por situação: Pendente, Aprovado, Rejeitado ou Concluído |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Colaborador | Pessoa a quem o evento se refere |
| Tipo | Tipo do evento |
| Data | Data do evento |
| Descrição | Detalhes informados |
| Valor | Valor, quando o tipo de evento tiver valor (alteração salarial, bônus, desconto) |
| Status | Situação do evento (Pendente, Aprovado, Rejeitado, Concluído) |

## O que dá pra fazer aqui

### Registrar um novo evento

1. Clique em **+ Registrar evento**.
2. Em **Colaborador**, comece a digitar o nome e selecione a pessoa na lista que aparece.
3. Escolha o **Tipo de evento** (obrigatório).
4. Selecione o **Status** (por padrão começa como Pendente).
5. Informe a **Data** (obrigatória) e, se for um período (como férias), também a **Data fim**.
6. Se o tipo escolhido tiver valor (alteração salarial, bônus, desconto), preencha o campo **Valor (R$)**, que aparece automaticamente.
7. Use **Descrição** para detalhar o evento.
8. Clique em **Salvar**. O evento entra na lista e passa a aparecer também na ficha do colaborador e no Dashboard.

![Registrar evento](/img/manual/erp/rh-eventos-novo.png)

### Editar um evento

1. Na linha desejada, clique no ícone de lápis (**✎**).
2. Ajuste os campos. (Ao editar, o colaborador fica fixo e não pode ser trocado.)
3. Clique em **Salvar**.

### Remover um evento

1. Na linha desejada, clique no ícone **⨯**.
2. Confirme a mensagem **"Remover evento?"** clicando em **Remover**. Esta ação não pode ser desfeita.

## Regras de negócio

- **Tipos disponíveis:** Falta, Atraso, Férias, Licença, Afastamento, Advertência, Observação interna, Avaliação, Alteração salarial, Bônus e Desconto.
- **Colaborador e Tipo são obrigatórios.** Se a data ficar em branco no cadastro, o sistema assume a data de hoje.
- **Valor só nos tipos financeiros.** O campo Valor aparece apenas para Alteração salarial, Bônus e Desconto, e é opcional mesmo nesses tipos.
- **Status é informativo.** Pendente, Aprovado, Rejeitado e Concluído descrevem a situação do evento; não há um fluxo de aprovação automático — você muda o status manualmente ao editar.
- **Eventos não geram lançamento financeiro.** Um evento de Bônus ou Desconto aqui é apenas o registro funcional. O pagamento/desconto efetivo é lançado à parte no [Financeiro de RH](./rh-financeiro.md). São telas independentes.
- **Remover é definitivo.** A ação ⨯ exclui o evento e não pode ser desfeita.

## Erros comuns

- **"Colaborador é obrigatório"** — você não selecionou ninguém. Busque e selecione o colaborador antes de salvar.
- **"Tipo de evento inválido"** — escolha um dos tipos da lista.

## Dicas e observações

- O campo **Valor** só aparece para os tipos que envolvem dinheiro (alteração salarial, bônus, desconto). Para os demais tipos, ele fica oculto.
- Use a **Data fim** quando o evento cobrir um período (férias, afastamento, licença); para eventos pontuais (uma falta, um atraso), deixe-a em branco.
- Eventos recém-criados aparecem automaticamente nos "Eventos recentes" do Dashboard de RH.

## Veja também

- [Ficha do colaborador](./rh-colaboradores-id.md)
- [Financeiro de RH](./rh-financeiro.md)
- [Dashboard de RH](./rh.md)
