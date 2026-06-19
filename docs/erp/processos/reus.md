---
title: Réus
sidebar_position: 10
---

# Réus

Esta tela lista as pessoas que figuram como **réu / executado** em algum processo do seu escritório. Diferente de um cadastro genérico de pessoas, aqui aparecem **apenas** as pessoas que realmente estão vinculadas como réu em pelo menos um processo, com a contagem de processos e atalhos para abri-los.

## Como acessar

**ERP** → **Processos** → **Réus**.

![Réus](/img/manual/erp/reus.png)

## O que você vê nesta tela

No topo há dois cartões de resumo: a quantidade de réus no sistema e o total de vínculos a processos. Logo abaixo, um campo de busca e a lista.

| Coluna | O que é |
|---|---|
| Nome | Nome da pessoa. Clique para abrir o cadastro completo dela em Pessoas. |
| Tipo | Indica se é Pessoa Física (PF) ou Pessoa Jurídica (PJ). |
| Documento | CPF ou CNPJ, formatado. |
| Processos | Quantos processos têm essa pessoa como réu. |
| Em quais | Atalhos com os números dos processos. Mostra até 3; o sinal **+N** indica que há mais. Clique em um número para abrir o processo. |
| (ações) | Botões para ver os processos da pessoa e editar o cadastro dela. |

## O que dá pra fazer aqui

### Buscar um réu
Digite o nome ou o documento no campo de busca. A lista filtra automaticamente.

### Abrir os processos de um réu
- Clique em um dos números na coluna **Em quais** para ir direto ao processo.
- Ou clique no botão de **ver processos** na coluna de ações. Se a pessoa tiver só um processo, ele abre direto; se tiver vários, abre o cadastro da pessoa, onde os envolvimentos ficam listados.

### Cadastrar um réu
1. Clique em **+ Cadastrar réu**.
2. Preencha os dados da pessoa no cadastro que abre (nome, documento, contatos etc.).
3. Marque o papel correspondente, quando aplicável.
4. Clique em **Salvar**. A pessoa volta a aparecer na lista assim que estiver vinculada a um processo.

### Editar um réu
1. Clique no botão de **editar** (lápis) na linha da pessoa.
2. Ajuste os dados no cadastro que abre.
3. Clique em **Salvar**.

## Dicas e observações

- A pessoa só aparece nesta lista quando está vinculada como **réu** em algum processo. Para criar o vínculo, use a aba **Envolvidos** dentro do processo.
- **Cadastrar pela tela só cria a pessoa, não o vínculo com o processo.** A ficha não pré-marca o papel de réu sozinha: a pessoa entra no módulo **Pessoas** e só aparece aqui depois de ser vinculada como réu em algum processo (aba **Envolvidos**).
- O cadastro e a edição usam a mesma ficha do módulo **Pessoas** — qualquer alteração reflete em todo o sistema.
- A lista respeita as permissões do seu perfil de acesso a processos.

## Veja também

- [Autores](./autores.md)
- [Escrivães](./escrivaes.md)
- [Processo (detalhe)](./-id.md)
