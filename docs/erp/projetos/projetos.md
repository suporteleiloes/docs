---
title: Projetos
sidebar_position: 1
---

# Projetos

A tela **Projetos** é o ponto de partida do módulo. Aqui você vê todos os projetos do seu leiloeiro em cartões, cria novos projetos, filtra a lista e acessa as telas de configuração (Tipos, Papéis, Filas e Equipe). Cada projeto agrupa tarefas, membros e filas de trabalho em um só lugar.

## Como acessar

**ERP** → **Projetos**

![Lista de projetos](/img/manual/erp/projetos.png)

## O que você vê nesta tela

No topo, uma barra de busca e um cartão de **filtros avançados**. Abaixo, os projetos aparecem como cartões (um por projeto). Cada cartão mostra nome, situação, tipo, código e data de criação, além dos botões de editar e excluir que aparecem ao passar o mouse.

| Filtro | O que é |
|---|---|
| Busca | Campo de texto livre no topo; busca por nome do projeto. Pressione Enter para aplicar. |
| ID | Localiza um projeto pelo número (ex.: 12). |
| Tipo | Filtra pelo tipo de projeto cadastrado (ver Tipos de Projeto). |
| Situação | Todos, Ativos ou Inativos. |
| Cliente | Busca e seleciona uma pessoa/cliente para filtrar os projetos dela. |
| Líder | Busca e seleciona o responsável (usuário) pelos projetos. |
| Permissão | Todas, **Visível** (qualquer usuário vê) ou **Apenas membros**. |
| Visibilidade | Todos, **Públicos** ou **Privados**. |

Em cada cartão de projeto:

| Elemento | O que é |
|---|---|
| Nome | Nome do projeto. Clicar no cartão abre o detalhe do projeto. |
| Situação | Selo de status: Ativo, Pausado, Concluído ou Cancelado. |
| Descrição | Resumo do projeto (até 2 linhas). |
| Tipo | Tipo do projeto, quando definido. |
| Código | Código/slug do projeto (ex.: PROJ-001). |
| Data | Data de criação do projeto. |
| Editar / Excluir | Botões de ação que aparecem no rodapé do cartão. |

## O que dá pra fazer aqui

- **Buscar e filtrar** projetos pela barra de busca e pelo cartão de filtros.
- **Limpar filtros** com o botão **Limpar filtros**, que zera busca e filtros.
- **Abrir um projeto**: clique em qualquer ponto do cartão.
- **Criar, editar e excluir** projetos.
- Acessar as telas de configuração pelos botões do cabeçalho: **Tipos**, **Papéis**, **Filas** e **Equipe**.

### Cadastrar um novo projeto

1. Clique em **Novo projeto** (canto superior direito).
2. Preencha **Nome do projeto** (obrigatório).
3. Em **Código / slug**, informe um código curto, se usar (opcional, ex.: PROJ-001).
4. Escolha o **Tipo** (obrigatório) — a lista vem dos tipos cadastrados.
5. Em **Líder**, busque e selecione o responsável pelo projeto.
6. Em **Cliente**, busque e selecione a pessoa/cliente associada, se houver.
7. Defina a **Permissão**: **Visível** (qualquer usuário enxerga) ou **Apenas membros**.
8. Escolha o **Status**: Ativo, Pausado, Concluído ou Cancelado.
9. Use as chaves **Público** e **Ativo** conforme a necessidade.
10. Escreva a **Descrição** (opcional).
11. Clique em **Criar**. O projeto passa a aparecer na lista.

![Novo projeto](/img/manual/erp/projetos-novo.png)

### Editar um projeto

1. Passe o mouse sobre o cartão e clique no ícone de **lápis (Editar)**.
2. Ajuste os campos no formulário.
3. Clique em **Salvar**.

### Excluir um projeto

1. Passe o mouse sobre o cartão e clique no ícone de **lixeira (Excluir)**.
2. O projeto é removido da lista.

## Dicas e observações

- **Nome** e **Tipo** são obrigatórios para salvar — o botão fica desabilitado sem eles.
- Cadastre os **Tipos** antes de criar projetos, para que apareçam no seletor.
- **Permissão** controla quem vê o projeto: use **Apenas membros** para projetos restritos.
- A exclusão pelo ícone de lixeira é imediata; confira antes de clicar.

## Veja também

- [Detalhe do projeto](./projetos-id.md)
- [Tipos de Projeto](./projetos-tipos.md)
- [Papéis (grupos de membros)](./projetos-papeis.md)
- [Filas de Tarefas](./projetos-filas.md)
- [Equipe e Custos](./projetos-equipe.md)
