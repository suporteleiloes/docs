---
title: Advogados
sidebar_position: 7
---

# Advogados

A tela de **Advogados** lista as pessoas que figuram como advogado (do réu ou do autor) em algum processo. Diferente de uma simples agenda de contatos, ela mostra **apenas quem realmente atua** em processos do sistema, com o número de processos vinculados, o documento e atalhos para os processos.

## Como acessar

**ERP** → **Processos** → **Advogados**.

![Advogados](/img/manual/erp/advogados.png)

## O que você vê nesta tela

No topo, o título **Advogados** e o botão **+ Cadastrar advogado**. Abaixo, dois cartões de contagem, um campo de busca e a tabela de advogados.

### Cartões de contagem

| Cartão | O que é |
|---|---|
| Advogados no sistema | Quantos advogados figuram em processos. |
| Vínculos a processos | Total de vínculos (somatório de processos por advogado). |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Nome | Nome da pessoa. Clique para abrir o cadastro dela. |
| Tipo | **PF** (pessoa física) ou **PJ** (pessoa jurídica). |
| Documento | CPF/CNPJ formatado. |
| Natureza | Se o advogado atua **do Réu** ou **do Autor** (coluna exclusiva desta tela). |
| Processos | Quantidade de processos vinculados, em etiqueta. |
| Em quais | Etiquetas com os números dos processos (mostra até 3; o "+N" abre o restante). |
| Ações | Ver processos da pessoa e editar o cadastro. |

## O que dá pra fazer aqui

- **Buscar** um advogado por nome ou documento.
- **Abrir o cadastro** da pessoa (clicando no nome).
- **Ver os processos** de um advogado.
- **Cadastrar** um novo advogado.
- **Editar** o cadastro de um advogado.

### Cadastrar um advogado

1. Clique em **+ Cadastrar advogado**. Abre a janela de cadastro de pessoa.
2. Preencha os dados da pessoa e **marque o papel "Advogado"** no modal.
3. Salve. A lista é atualizada.

### Ver os processos de um advogado

1. Na linha do advogado, clique no ícone de "ver processos" (ou em uma das etiquetas de número de processo).
2. Se houver só um processo, ele abre direto; se houver vários, abre o perfil da pessoa, que lista os envolvimentos.

### Editar um advogado

1. Na linha, clique no ícone de lápis.
2. Ajuste os dados na janela de pessoa.
3. Salve.

## Dicas e observações

- A lista mostra **somente** pessoas que já figuram como advogado em algum processo. Para um advogado aparecer aqui, vincule-o pela aba de envolvidos de um processo ou cadastre a pessoa marcando o papel **Advogado**.
- O cadastro e a edição reutilizam a mesma janela de **Pessoas** — os dados ficam centralizados no cadastro de pessoa.
- Ao **cadastrar um novo** advogado pelo botão, o modal **não** vem com o papel já marcado: lembre-se de marcar **Advogado** você mesmo, senão a pessoa não passará a figurar nesta lista.
- A coluna **Em quais** mostra até **3** números de processo; clique no **+N** para abrir os demais (leva ao perfil da pessoa, que lista todos os envolvimentos).
- Os dois cartões de contagem são calculados sobre a lista carregada. A tela traz até **300** advogados por vez — use a **busca** para refinar quando houver muitos.
- A **Natureza** (do Réu / do Autor) é exclusiva desta tela de advogados; as telas de Réus, Autores e Escrivães não a exibem.

## Veja também

- [Processos](./processo.md)
- [Cadastros Auxiliares](./cadastros.md)
- [Oportunidades](./oportunidades.md)
