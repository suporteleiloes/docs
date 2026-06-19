---
title: Departamentos
sidebar_position: 5
---

# Departamentos

A tela de Departamentos organiza a estrutura da sua leiloeira em setores (por exemplo, Administrativo, Comercial, Operacional). Você pode definir um responsável para cada departamento e montar uma hierarquia, indicando a qual departamento outro está subordinado.

## Como acessar

**ERP** → **RH** → **Departamentos**.

![Departamentos](/img/manual/erp/rh-departamentos.png)

## O que você vê nesta tela

Um campo de busca no topo e a tabela com todos os departamentos cadastrados.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Departamento | Nome do departamento |
| Subordinado a | Departamento "pai" na hierarquia (quando houver) |
| Responsável | Nome da pessoa responsável pelo departamento |
| Colab. | Quantidade de colaboradores no departamento |

## O que dá pra fazer aqui

### Buscar um departamento

Digite no campo **Buscar departamento…** para filtrar a lista pelo nome.

### Cadastrar um novo departamento

1. Clique em **+ Novo departamento**.
2. Preencha **Nome** (obrigatório).
3. Informe o **Código** (opcional).
4. Preencha o **Responsável** (nome da pessoa que responde pelo setor).
5. Em **Subordinado a (hierarquia)**, escolha o departamento superior — ou deixe em **Nenhum (raiz)** se este for um departamento de topo.
6. Use **Descrição** para detalhar o setor, se quiser.
7. Clique em **Salvar**. O departamento passa a aparecer na lista e fica disponível no cadastro de cargos e colaboradores.

![Novo departamento](/img/manual/erp/rh-departamentos-novo.png)

### Editar um departamento

1. Na linha desejada, clique no ícone de lápis (**✎**).
2. Ajuste os campos.
3. Clique em **Salvar**.

### Remover um departamento

1. Na linha desejada, clique no ícone **⨯**.
2. Confirme a mensagem **"Remover departamento?"** clicando em **Remover**.

## Regras de negócio

- **Nome é obrigatório**; código, descrição, responsável e hierarquia são opcionais.
- **Um departamento não pode ser subordinado a ele mesmo** — o sistema ignora a tentativa e deixa a hierarquia sem o vínculo inválido.
- **Remover não apaga os colaboradores.** Ao remover um departamento, ele é desativado (some da lista) e os colaboradores e cargos que apontavam para ele apenas ficam **sem departamento** — nada é excluído. Confira a coluna **Colab.** antes de remover, para saber quantas pessoas ficarão sem setor.
- **Responsável é texto livre.** O campo Responsável guarda apenas o nome digitado; não é um vínculo com um colaborador cadastrado.

## Erros comuns

- **"Nome é obrigatório"** — você tentou salvar sem nome. Preencha o nome do departamento.

## Dicas e observações

- A lista de **Subordinado a** mostra os demais departamentos já cadastrados; um departamento não pode ser subordinado a ele mesmo.
- Monte a hierarquia de cima para baixo: cadastre primeiro os departamentos principais (raiz) e depois os que ficam abaixo deles.
- A coluna **Colab.** indica quantas pessoas estão no setor — útil antes de remover ou reorganizar.

## Veja também

- [Cargos](./rh-cargos.md)
- [Colaboradores](./rh-colaboradores.md)
