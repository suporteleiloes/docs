---
title: Campos dinâmicos
sidebar_position: 6
---

# Campos dinâmicos

Campos dinâmicos são campos extras que você cria para o cadastro de Pessoa, sem precisar de programação. Cada campo definido aqui aparece automaticamente no formulário de Pessoa. Use para guardar informações específicas do seu negócio, como "CRECI", "Número do processo" ou "Data da audiência".

## Como acessar

**CRM** → **Configurações** → **Campos dinâmicos** (rota `/crm/configuracoes/campos-dinamicos`).

![Campos dinâmicos](/img/manual/crm/crm-configuracoes-campos-dinamicos.png)

## O que você vê nesta tela

No topo, o botão **+ Novo campo**. Abaixo, a tabela dos campos já criados, ordenada pelo campo Ordem.

| Coluna | O que é |
|---|---|
| Nome | Nome do campo e, abaixo, a descrição |
| Tipo | Tipo de campo (Texto curto, Número, Data, Sim/Não, Seleção etc.) |
| Obrigatório | "Sim" se o preenchimento é exigido, "—" se opcional |
| Ativo | Etiqueta clicável que liga/desliga o campo |
| Ordem | Posição em que o campo aparece no formulário |
| (ações) | Botões **Editar** e **Excluir** |

### Tipos de campo disponíveis

| Tipo | Para que serve |
|---|---|
| Texto curto | Uma linha de texto |
| Texto longo | Vários parágrafos |
| Número | Valores numéricos |
| Data | Uma data |
| Sim/Não | Verdadeiro ou falso |
| Seleção única | Escolher uma opção de uma lista |
| Múltipla seleção | Escolher várias opções de uma lista |
| Caixas de seleção | Marcar várias caixas |

Os três últimos tipos (Seleção única, Múltipla seleção e Caixas de seleção) exigem que você cadastre as opções.

## O que dá pra fazer aqui

### Criar um campo dinâmico

1. Clique em **+ Novo campo**.
2. Preencha o **Nome** (obrigatório) — ex.: "CRECI".
3. Escolha o **Tipo**.
4. (Opcional) Preencha a **Descrição** — esse texto aparece como ajuda no formulário de Pessoa.
5. Ligue **Obrigatório** se o preenchimento for exigido.
6. Mantenha **Ativo** ligado para o campo já aparecer no formulário.
7. Defina a **Ordem** (número que determina a posição do campo).
8. Se o tipo for de seleção, no bloco **Opções** clique em **+ Opção** e preencha o **valor (interno)** e o **rótulo (visível)** de cada item. Remova opções pelo botão **×**.
9. Clique em **Salvar**.

![Novo campo dinâmico](/img/manual/crm/crm-configuracoes-campos-dinamicos-novo.png)

### Editar um campo

Clique em **Editar** na linha do campo, ajuste o que precisar e clique em **Salvar**.

### Ativar ou desativar rapidamente

Na coluna **Ativo**, clique na etiqueta para alternar entre **Ativo** e **Inativo**. Campos inativos não aparecem no formulário de Pessoa e ficam esmaecidos na tabela.

### Excluir um campo

Clique em **Excluir** na linha do campo e confirme.

> Atenção: ao excluir um campo, os valores já preenchidos para ele em todas as pessoas são perdidos.

## Dicas e observações

- Todo campo criado aqui aparece automaticamente no formulário de Pessoa, na posição definida em **Ordem**.
- Para tipos de seleção, só são salvas as opções que tiverem **valor** e **rótulo** preenchidos.
- Para esconder um campo sem perder os dados, prefira **desativá-lo** em vez de excluí-lo.

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
