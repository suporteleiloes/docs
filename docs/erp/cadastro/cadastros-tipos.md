---
title: Cadastros (Tipos)
sidebar_position: 1
---

# Cadastros (Tipos)

A tela de **Cadastros** é o painel central onde você gerencia as listas de "tipos" que o sistema usa em vários lugares: tipos de contato e de telefone de uma pessoa, papéis, tipos de pátio e de vaga, motivos de cancelamento de venda, leiloeiros, e mais. São cadastros simples (em geral um **nome** e uma **descrição**) que aparecem depois como opções em formulários de outras telas.

Tudo fica em uma única tela, organizada por uma barra lateral à esquerda. Você escolhe na lateral qual cadastro quer mexer e a área principal mostra a lista correspondente.

## Como acessar

**Sistema** → **Cadastros**

![Cadastros (Tipos)](/img/manual/erp/cadastros-tipos.png)

## O que você vê nesta tela

A tela tem três áreas:

- **Barra lateral (esquerda):** lista de todos os cadastros, agrupados por seção (Pessoa, Operacional, Comercial). Há um campo **Filtrar cadastros...** no topo para encontrar rapidamente o cadastro que você procura.
- **Barra de busca (topo da área principal):** campo **Buscar...** para filtrar os itens da lista que está aberta.
- **Lista (área principal):** a tabela com os itens do cadastro selecionado.

### Cadastros disponíveis na barra lateral

| Seção | Cadastro | Para que serve |
|---|---|---|
| Pessoa | Tipos de Contato | Classificações de contato de uma pessoa |
| Pessoa | Tipos de E-mail | Classificações de e-mail (ex.: pessoal, comercial) |
| Pessoa | Tipos de Endereço | Classificações de endereço (ex.: residencial, cobrança) |
| Pessoa | Tipos de Telefone | Classificações de telefone (ex.: celular, fixo) |
| Pessoa | Tipos de Documento | Tipos de documento da pessoa; tem campo extra **Código** |
| Pessoa | Papéis de Pessoa | Papéis que uma pessoa pode ter; tem campo extra **Código** |
| Operacional | Tipos de Pátio | Classificações de pátio |
| Operacional | Tipos de Vaga | Classificações de vaga de pátio |
| Operacional | Tipos de Notificação | Classificações de notificação |
| Comercial | Cancelamento de Venda | Motivos de cancelamento; permite hierarquia (campo **Parente**) |
| Comercial | Leiloeiros | Cadastro de leiloeiros, com vários campos extras |
| Comercial | Classificações de Leilão | Atalho — abre a [tela dedicada](./cadastros-classificacoes-leilao.md) |

### Colunas da lista

| Coluna | O que é |
|---|---|
| ID | Número de identificação do item |
| Nome | Nome / rótulo principal do item |
| Descrição | Texto livre de descrição (quando o cadastro usa esse campo) |
| Situação | **Ativo** ou **Inativo** |
| (ações) | Botões de editar e excluir |

## O que dá pra fazer aqui

Em cada cadastro você pode **criar**, **editar**, **excluir** e **buscar** itens. Alguns cadastros têm campos a mais (descritos abaixo).

### Trocar de cadastro

1. Na barra lateral, clique no cadastro desejado (ex.: **Tipos de Telefone**).
2. A área principal passa a mostrar a lista daquele cadastro.
3. Se a lista de cadastros for grande, digite no campo **Filtrar cadastros...** para encontrar o item mais rápido.

> Dica: ao clicar em **Classificações de Leilão**, o sistema leva você para a tela dedicada dessa funcionalidade, em vez de abrir a lista aqui.

### Cadastrar um novo item

1. Com o cadastro desejado aberto, clique em **Novo** (canto superior direito).
2. Preencha o campo **Nome** (obrigatório).
3. Preencha a **Descrição**, se o cadastro tiver esse campo (opcional).
4. Preencha os campos extras, quando houver (veja abaixo).
5. Deixe a chave **Ativo** ligada para que o item fique disponível para uso.
6. Clique em **Salvar**. O item passa a aparecer na lista.

![Novo cadastro](/img/manual/erp/cadastros-tipos-novo.png)

### Editar um item

1. Clique no ícone de **lápis** na linha do item — ou dê **duplo clique** na linha.
2. Ajuste os campos.
3. Clique em **Salvar**.

### Excluir um item

1. Clique no ícone de **lixeira** na linha do item.
2. Confirme na janela que aparece. A remoção é definitiva.

### Buscar itens

Digite no campo **Buscar...** acima da lista. A lista é filtrada conforme você digita.

## Campos extras de cadastros específicos

Alguns cadastros pedem mais informações no formulário de novo/editar:

- **Tipos de Documento** e **Papéis de Pessoa:** campo **Código**, um identificador curto do tipo.
- **Cancelamento de Venda:** campo **Parente** — permite escolher um motivo "pai" para montar uma hierarquia de motivos. Deixe em branco para um motivo raiz.
- **Leiloeiros:** vários campos adicionais —
  - **Pessoa relacionada:** vincula o leiloeiro a uma pessoa já cadastrada. Digite ao menos 3 letras do nome ou documento para buscar; ao selecionar, o nome do leiloeiro é preenchido automaticamente.
  - **UF**, **Matrícula**, **Saudação / Título**, **RG**, **CPF**, **Inscrição Mun./Estadual**.
  - **URL Logomarca**, **URL do Site**, **Endereço**, **Telefone(s)**, **E-mail(s)**.
  - **Numeração atual da Nota de Arrematação** — controla a sequência da numeração das notas.

## Dicas e observações

- O campo **Nome** é sempre obrigatório; o botão **Salvar** fica desabilitado enquanto ele estiver vazio.
- A chave **Ativo** controla se o item aparece como opção nas outras telas. Em vez de excluir um item que talvez ainda seja útil, considere apenas desativá-lo.
- A exclusão é definitiva — só exclua o que tem certeza de que não está em uso.
- Alguns tipos de cadastro mais ligados a um domínio específico ficam em outras telas, não aqui: tipos de bens, marcas e cores em **Bens → Cadastros**; tipos de comitente em **Comitentes**; bancos, categorias e formas de pagamento em **Financeiro**; tribunais, comarcas e varas em **Processos**.

## Veja também

- [Classificações de Leilão](./cadastros-classificacoes-leilao.md)
