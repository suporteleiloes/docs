---
title: Unidades de medida
sidebar_position: 3
---

# Unidades de medida

A tela de **Unidades de medida** é o cadastro auxiliar das unidades usadas pelos produtos — como quilograma, unidade, metro quadrado, litro etc. Você cadastra cada unidade uma vez e depois a reaproveita ao cadastrar produtos.

## Como acessar
**ERP** → **Catálogo** → **Unidades de medida**.

![Unidades de medida](/img/manual/erp/catalogo-unidades.png)

## O que você vê nesta tela

No topo há um campo de busca e, abaixo, a lista de unidades cadastradas. A lista mostra **apenas unidades ativas**.

> Observação: o campo de busca está presente nesta tela, mas atualmente **não filtra** a lista de unidades — ela é exibida por completo. Como a lista costuma ser curta, percorra-a para encontrar a unidade desejada.

**Colunas da lista:**

| Coluna | O que é |
|---|---|
| Sigla | A abreviação da unidade (ex.: `kg`, `un`, `m²`). |
| Nome | O nome por extenso da unidade (ex.: *Quilograma*). Se você não preencher o nome no cadastro, o sistema usa a própria sigla como nome. |
| Fracionável | Indica se a unidade aceita valores fracionados: **Sim** ou **Não**. |

No fim de cada linha há os botões de **Editar** (✎) e **Remover** (⨯).

## O que dá pra fazer aqui

- Cadastrar uma nova unidade.
- Editar uma unidade existente.
- Remover uma unidade.
- Buscar na lista.

### Cadastrar uma nova unidade

1. Clique em **+ Nova unidade** (canto superior direito).
2. Preencha a **Sigla** (obrigatório). Ex.: `kg`, `un`, `m²`.
3. Preencha o **Nome** (opcional) — o nome por extenso. Ex.: *Quilograma*.
4. Ative **Fracionável** se a unidade puder ser usada com quantidades fracionadas (ex.: 1,5 kg). Deixe desligado para unidades inteiras (ex.: unidade).
5. Clique em **Salvar**. A unidade passa a aparecer na lista.

![Nova unidade](/img/manual/erp/catalogo-unidades-novo.png)

### Editar uma unidade

1. Localize a unidade na lista (use a busca, se necessário).
2. Clique no botão **Editar** (✎) na linha da unidade.
3. Ajuste os campos desejados.
4. Clique em **Salvar**.

### Remover uma unidade

1. Clique no botão **Remover** (⨯) na linha da unidade.
2. Confirme na janela **Remover unidade?** clicando em **Remover**.

> A remoção é um **arquivamento** (exclusão lógica): a unidade some da lista, mas o registro é preservado internamente.
>
> **Impacto nos produtos:** ao remover uma unidade que estava em uso, os produtos que a usavam **não são bloqueados nem excluídos** — eles simplesmente ficam **sem unidade** (passam a mostrar `—`). Ainda assim, prefira manter a unidade em vez de removê-la, para não esvaziar a referência nos itens cadastrados.

## Regras de negócio

- **Sigla obrigatória.** É o único campo exigido. Sem ela, o botão **Salvar** fica desabilitado e o sistema recusa o cadastro ("Sigla é obrigatória").
- **Nome opcional com preenchimento automático.** Se você não informar o nome, o sistema adota a própria sigla como nome.
- **Fracionável** define se a unidade aceita quantidades com casas decimais (ex.: 1,5 kg). Use desligado para unidades que só fazem sentido inteiras (ex.: unidade, caixa).
- **Status.** Toda unidade é criada ativa e a lista exibe apenas ativas; a remoção é o que a torna inativa.
- **Permissões.** Listar, criar, editar e remover são controladas por permissão (`catalogo/unidade/*`).

## Dicas e observações

- As unidades cadastradas aqui ficam disponíveis no campo **Unidade de medida** ao cadastrar [Produtos](catalogo-produtos.md).

## Veja também
- [Produtos](catalogo-produtos.md)
- [Planos](catalogo-planos.md)
