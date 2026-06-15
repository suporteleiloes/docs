---
title: Intimações
sidebar_position: 1
---

# Intimações

A tela de **Intimações** é onde você controla as intimações ligadas aos processos judiciais da leiloeira. Cada intimação registra um assunto, um prazo e se já foi cumprida ou ainda está pendente — assim a equipe não perde nenhuma data e mantém o acompanhamento de cada processo em dia.

## Como acessar

**Processos** → **Intimações**.

O cabeçalho da tela exibe a trilha **Gestão · Produtividade** e o título **Intimações**.

![Intimações](/img/manual/erp/intimacoes.png)

## O que você vê nesta tela

A tela é uma lista (tabela) com todas as intimações cadastradas, com paginação no rodapé. Você pode escolher exibir **20**, **50** ou **100** registros por página.

| Coluna | O que é |
|---|---|
| **#** | Número (identificador) da intimação. Fica oculto na visão de celular. |
| **Assunto** | Título da intimação — a informação principal de cada linha. |
| **Processo** | Número do processo judicial vinculado (ou um traço, se não houver processo associado). |
| **Prazo** | Data-limite da intimação. Mostra um traço quando nenhum prazo foi informado. |
| **Status** | Etiqueta colorida indicando a situação: **Pendente** (amarelo) ou **Cumprida** (verde). |
| (ações) | Botões de **Editar** e **Excluir** no fim de cada linha. |

O status é definido automaticamente pela marcação **Cumprida**: enquanto a intimação não estiver marcada como cumprida, ela aparece como **Pendente**.

## O que dá pra fazer aqui

- **Nova intimação** — botão no canto superior direito, abre o formulário de cadastro.
- **Editar** (ícone de lápis) — reabre o formulário com os dados da intimação para alteração.
- **Excluir** (ícone de lixeira) — remove a intimação, após confirmação.
- **Paginar / mudar a quantidade por página** — controles no rodapé da lista.

### Cadastrar uma nova intimação

1. Clique em **Nova intimação**.
2. Preencha o **Assunto** (obrigatório) — é o título que identifica a intimação na lista.
3. Se quiser, escreva uma **Descrição** com detalhes adicionais.
4. No campo **Processo**, comece a digitar o número do processo e escolha-o na lista que aparece (busca por número). Esse vínculo é opcional.
5. Informe a **Etapa (ID)**, se você acompanha a intimação por etapa do processo (campo numérico, opcional).
6. Defina o **Prazo** escolhendo a data no calendário.
7. Marque **Cumprida** caso a intimação já tenha sido atendida. Deixe desmarcada para mantê-la como pendente.
8. Clique em **Criar**. A lista é atualizada automaticamente com a nova intimação.

![Nova intimação](/img/manual/erp/intimacoes-novo.png)

### Editar uma intimação

1. Na linha desejada, clique no ícone de **lápis** (Editar).
2. Ajuste os campos necessários — por exemplo, marque **Cumprida** quando a intimação for atendida.
3. Clique em **Salvar**.

### Excluir uma intimação

1. Na linha desejada, clique no ícone de **lixeira** (Excluir).
2. Confirme a exclusão na janela que aparece clicando em **Excluir**.

A remoção é imediata e a lista é recarregada.

## Dicas e observações

- O botão **Criar/Salvar** só fica disponível quando o campo **Assunto** estiver preenchido.
- O campo **Processo** usa busca por número: digite parte do número e aguarde as sugestões.
- Para marcar uma intimação como concluída, basta editá-la e ativar a opção **Cumprida** — o status muda de Pendente para Cumprida.
- A exclusão sempre pede confirmação, evitando remoções acidentais.

## Veja também

- [Cartas Precatórias](./cartas-precatorias.md)
