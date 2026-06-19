---
title: Ficha da pessoa
sidebar_position: 3
---

# Ficha da pessoa

A ficha é a visão completa de uma pessoa: identidade, contatos, status de relacionamento, histórico, documentos, negócios e papéis. É de onde você acompanha o relacionamento e dispara ações rápidas (WhatsApp, e-mail, ligação, tarefa, observação, novo negócio).

## Pré-requisitos

- Permissão **Ver pessoas** (`CRM_PESSOA_VER`) para abrir a ficha.
- Para editar, mesclar ou excluir: permissão **Editar pessoas** (`CRM_PESSOA_EDITAR` / `PESSOAS_ATUALIZAR` / `PESSOAS_DELETAR`).
- O CPF/CNPJ aparece por extenso só para quem tem **Ver documentos** (`CRM_PESSOA_DOCS_VER`).

## Como acessar

**Cadastros** → **Pessoas** → clique em qualquer linha da lista.

![Ficha da pessoa](/img/manual/erp/pessoas-id.png)

## O que você vê nesta tela

A ficha tem um **cabeçalho** no topo e, abaixo, um **corpo de duas colunas**.

### Cabeçalho

- **Voltar** — botão **← Pessoas** no canto superior esquerdo retorna à lista.
- **Avatar + nome** da pessoa.
- **Etiqueta Ativo / Inativo** — indica se o cadastro está ativo no sistema.
- **Etapa do funil de relacionamento** (quando houver) — uma pílula colorida com a etapa atual: Visitante, Cadastrado, Habilitado, Deu lance, Arrematou, Pós-venda, Fidelizado ou Descartado.
- **Tipo** (Física/Jurídica), **CPF/CNPJ** e **score** de relacionamento (★), quando disponíveis.
- **Tags** da pessoa, com o botão **+ tag** para adicionar uma nova.
- **Responsável** — mostra o responsável atual com o link **trocar**; se não houver, aparece **atribuir a mim**.

### Ações do cabeçalho

| Botão | O que faz |
|---|---|
| Seguir / Seguindo | Passa a (ou deixa de) receber notificações sobre a pessoa; mostra o número de seguidores |
| WhatsApp | Abre o diálogo de comunicação por WhatsApp para o telefone principal |
| E-mail | Abre o diálogo de comunicação por e-mail para o e-mail principal |
| Ligar | Vai para a aba **Ligar** já com o telefone principal preenchido |
| Novo negócio | Cria um negócio no CRM já vinculado a esta pessoa (abre o kanban) |
| Editar | Abre o formulário de edição completo da pessoa |
| ⋮ (Mais ações) | Menu com: Adicionar nova pessoa, Consultar documento oficial, Duplicar cadastro, Fundir com outra pessoa e Excluir pessoa |

> Se a pessoa não tiver telefone ou e-mail cadastrado, a ação correspondente (WhatsApp/E-mail) avisa que falta o contato.

### Coluna esquerda — dados da pessoa

- **Detalhes** — Tipo, CPF/CNPJ (com botão de consulta ao documento), Código, Nascimento (ou Fundação, para PJ), Nacionalidade e Gênero. O botão de lápis no título entra no **modo de edição inline** desses campos.
- **E-mail / Telefone / Endereço** — contatos cadastrados; cada item pode ser removido pelo ícone de lixeira. Endereços têm link para o Google Maps.
- **CRM (status / funil / score)** — quando o módulo CRM responde, mostra o **status interno** (Lead, Novo, Ativo, Inativo, Inadimplente), a data da última mudança, a **etapa do funil** e o **score**.
- **Negócios**, **Representantes/Representados** e **Processos** vinculados à pessoa, com atalhos para abrir cada item.

### Coluna direita — abas de trabalho

A coluna direita reúne tudo o que você faz no dia a dia com a pessoa, em sete abas:

| Aba | Para que serve |
|---|---|
| Observações | Notas internas sobre a pessoa |
| Contatos | Contatos extras (WhatsApp, LinkedIn, Instagram, site) |
| Tarefas | Tarefas vinculadas à pessoa, com criação/edição em modal |
| Ligar | Disca pelo computador (`tel:`) ou pela plataforma Caller e registra a ligação no histórico |
| Comunicação | Histórico de comunicações (e-mails, ligações, WhatsApp) com filtro por período |
| Arquivos | Documentos digitalizados (você também pode arrastar um arquivo para cá) |
| Linha do tempo | Histórico unificado, com filtros: Tudo, Observações, Contatos, Arquivos, Negócios, Financeiro, Alterações |

## O que dá pra fazer aqui

### Editar os dados da pessoa

- **Edição inline** (rápida): clique no lápis do card **Detalhes** para editar tipo, documento, nascimento, nacionalidade, gênero e contatos na própria tela.
- **Edição completa**: clique em **Editar** no cabeçalho para abrir o formulário com todas as seções.

> Campos **críticos** (nome, documento e endereço fiscal) têm tratamento especial no backend: alterá-los pode exigir um fluxo de aprovação. Se uma alteração desses campos for barrada, o sistema avisa que ela precisa passar pela edição protegida.

### Mudar o status / etapa de relacionamento

O **status interno** (Lead/Novo/Ativo/Inativo/Inadimplente) e a **etapa do funil** são gerenciados pelo módulo CRM (card **CRM** na coluna esquerda e tela de **Funil**). A etapa avança automaticamente conforme o comportamento da pessoa nos leilões; quando alguém a move à mão, ela passa a não avançar mais sozinha.

### Atribuir um responsável

- Sem responsável: clique em **atribuir a mim** para se tornar o responsável.
- Com responsável: clique em **trocar** e escolha outra pessoa.

### Seguir a pessoa

Clique em **Seguir** para acompanhar as movimentações da pessoa; o contador mostra quantas pessoas a seguem. Clique de novo (**Seguindo**) para deixar de seguir.

### Consultar o documento oficial

No menu **⋮** ou no botão de lupa ao lado do CPF/CNPJ, use **Consultar documento oficial** para buscar dados nos órgãos de proteção ao crédito (quando o serviço estiver disponível).

### Duplicar ou fundir cadastros

- **Duplicar cadastro** cria uma cópia da pessoa **sem documento** (para ajustes).
- **Fundir com outra pessoa** mescla dois cadastros: o atual é mantido e o outro tem os dados absorvidos. **É irreversível** — confirme que são a mesma pessoa.

### Registrar uma ligação

Na aba **Ligar**, informe (ou confirme) o número, escolha entre **discador do computador** e **plataforma Caller** e inicie. A ligação fica registrada no histórico.

### Gerenciar contatos, tarefas, observações e arquivos

Use as abas da coluna direita para adicionar/remover e-mails e telefones, criar tarefas, anotar observações e anexar documentos — tudo sem sair da ficha.

### Voltar para a lista

Clique no botão **← Pessoas** no topo.

## Erros comuns

- **A ficha não abre** — falta a permissão **Ver pessoas**.
- **CPF/CNPJ aparece mascarado** — você não tem a permissão **Ver documentos**.
- **WhatsApp/E-mail avisa que falta contato** — a pessoa não tem telefone/e-mail principal; cadastre um na coluna esquerda ou na aba **Contatos**.
- **Consulta de documento falha** — o documento não foi encontrado ou o serviço externo está indisponível no momento.
- **Não consigo alterar o nome/documento direto** — são campos críticos; a alteração pode exigir o fluxo de aprovação.

## Dicas e observações

- A **etapa do funil** ajuda a entender em que ponto do relacionamento a pessoa está; quando movida manualmente, o avanço automático fica bloqueado.
- A aba **Linha do tempo** consolida tudo (observações, comunicações, arquivos, negócios, financeiro e alterações) — use os filtros para focar no que importa.
- Arrastar um arquivo para a coluna direita troca automaticamente para a aba **Arquivos**.
- A ficha pode ter uma **assinatura digital** anexada (upload ou desenho à mão livre), usada em documentos.

## Veja também

- [Pessoas (lista)](./pessoas.md)
- [Nova pessoa](./pessoas-novo.md)
