---
title: Projetos de Suporte
sidebar_position: 2
---

# Projetos de Suporte

Esta tela organiza o trabalho do suporte em projetos. Cada projeto agrupa as tarefas de uma frente específica — um contrato de suporte, um desenvolvimento, uma manutenção ou uma consultoria — e pode estar ligado a um cliente e a um líder responsável.

## Como acessar
**Suporte** → **Projetos**

> A confirmar: nesta versão a tela é acessada pela URL `/suporte/projetos`. O item de menu correspondente pode ainda não estar visível na barra lateral em todos os perfis — se não encontrar o atalho, acesse pelo endereço direto.

![Projetos de Suporte](/img/manual/erp/suporte-projetos.png)

## Pré-requisitos

- Você precisa estar autenticado no ERP. A listagem fica disponível para usuários do suporte e da gerência.
- **Cliente** e **Líder** são opcionais, mas, se for usá-los, a pessoa (cliente) e o usuário (líder) já devem existir nos cadastros do ERP — esta tela só vincula registros existentes.

## O que você vê nesta tela

A tela exibe uma lista paginada de projetos. Cada linha é um projeto.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação do projeto. |
| **Projeto** | Nome do projeto. Logo abaixo aparece o código, quando houver. |
| **Tipo** | Categoria do projeto: Suporte, Desenvolvimento, Manutenção, Consultoria ou Outro. |
| **Status** | Situação: Ativo (verde), Pausado (amarelo), Concluído (azul) ou Cancelado. |
| **Prazo** | Data limite do projeto, quando definida. Mostra "—" se não houver. |

No rodapé há a paginação e a opção de itens por página.

## O que dá pra fazer aqui

- **Novo projeto** — botão no topo direito, abre o formulário de cadastro.
- **Editar** — ícone de lápis na linha, ou duplo clique sobre a linha.
- **Excluir** — ícone de lixeira na linha (pede confirmação).

### Cadastrar um novo projeto
1. Clique em **Novo projeto** no canto superior direito.
2. Preencha o **Nome** (obrigatório) — por exemplo, "Portal do Cliente". Sem nome o botão de salvar fica bloqueado.
3. Informe o **Código** do projeto, se usar uma sigla interna (ex.: PORTAL-CLI). É opcional.
4. Escolha o **Tipo**: Suporte, Desenvolvimento, Manutenção, Consultoria ou Outro.
5. Defina o **Status**: Ativo, Pausado, Concluído ou Cancelado.
6. Em **Cliente**, busque e selecione a pessoa/empresa ligada ao projeto (opcional).
7. Em **Líder**, busque e selecione o usuário responsável pelo projeto (opcional).
8. Defina o **Prazo** usando o seletor de data (opcional).
9. Escreva uma **Descrição** com o objetivo do projeto, se quiser.
10. Clique em **Criar projeto**. O projeto aparece na lista.

![Novo projeto](/img/manual/erp/suporte-projetos-novo.png)

### Editar um projeto
1. Clique no ícone de lápis na linha (ou dê duplo clique na linha).
2. Ajuste os campos desejados.
3. Clique em **Salvar alterações**.

### Excluir um projeto
1. Clique no ícone de lixeira na linha do projeto.
2. Confirme em **Excluir**. O projeto sai da lista (a exclusão é tratada como definitiva pela interface).

> **Importante:** o sistema **não deixa excluir** um projeto que ainda tenha tarefas vinculadas. Se houver tarefas, você verá uma mensagem pedindo para **mover ou encerrar as tarefas antes**. Para "tirar de circulação" sem mexer nas tarefas, use o **Status** (Pausado, Concluído ou Cancelado).

## Regras de negócio

- **Código gerado automaticamente.** Se você não informar um **Código**, o sistema gera um identificador interno sozinho. O campo serve para você definir uma sigla legível (ex.: PORTAL-CLI) quando quiser.
- **Status e o que cada um significa:**
  - **Ativo** — projeto em andamento.
  - **Pausado** — temporariamente parado, com intenção de retomar.
  - **Concluído** — trabalho finalizado.
  - **Cancelado** — encerrado sem conclusão.
  - Mudar o status **não** apaga nem move as tarefas do projeto; apenas sinaliza a situação.
- **Exclusão protegida.** Projetos com tarefas vinculadas não podem ser excluídos — primeiro mova ou encerre essas tarefas. Isso evita que tarefas fiquem "órfãs" de projeto.
- **Filas e o projeto.** Filas de atendimento podem ser globais (sem projeto) ou específicas de um projeto. Ao abrir um projeto, ele exibe as filas globais ativas mais as filas próprias dele. Ver [Filas de Atendimento](./suporte-filas.md).

## Erros comuns

- **Botão Criar bloqueado:** falta preencher o **Nome**, que é o único campo obrigatório.
- **"Existem tarefas vinculadas a este projeto":** o projeto tem tarefas e por isso não pode ser excluído. Mova ou encerre as tarefas antes, ou apenas mude o **Status** para Cancelado/Concluído.
- **Cliente ou Líder não aparecem na busca:** a pessoa (cliente) ou o usuário (líder) ainda não está cadastrado no ERP.

## Dicas e observações
- Em vez de **excluir** um projeto, na maioria dos casos é melhor mudar o **Status** para **Pausado**, **Concluído** ou **Cancelado** — preserva o histórico e contorna o bloqueio de exclusão quando há tarefas.
- O **Cliente** e o **Líder** vêm dos cadastros de pessoas e de usuários do ERP — selecione registros já existentes.
- Use o **Código** para padronizar a identificação dos projetos e facilitar buscas internas.

## Veja também
- [Clientes de Suporte](./suporte-clientes.md)
- [Filas de Atendimento](./suporte-filas.md)
