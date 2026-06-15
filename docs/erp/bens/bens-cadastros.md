---
title: Cadastros de Bens
sidebar_position: 10
---

# Cadastros de Bens

Esta é a central de **cadastros auxiliares** do módulo Bens. É aqui que você cria e mantém as "tabelas de apoio" que alimentam os formulários de bem em todo o sistema: cores, combustíveis, marcas, modelos, tipos de bem, características, campos extras, seções, acessórios, tipos de arquivo, e muito mais.

Pense nela como o painel de configuração do módulo Bens: você prepara estes cadastros uma vez e, depois, eles aparecem como opções (listas, selos, campos) sempre que alguém cadastra ou edita um bem.

## Como acessar

**Bens** → **Cadastros**

A tela tem duas áreas:

- À **esquerda**, uma barra lateral com a lista de todos os cadastros, agrupados por categoria. No celular, essa barra vira uma gaveta: toque no botão **Cadastros** no topo para abri-la.
- À **direita**, o conteúdo do cadastro selecionado: a lista de itens já cadastrados e o botão para criar novos.

![Cadastros de Bens](/img/manual/erp/bens-cadastros.png)

## O que você vê nesta tela

### Barra lateral (lista de cadastros)

No topo da barra há um campo **Filtrar cadastros...**: digite parte do nome para encontrar rapidamente o cadastro que procura. Abaixo, os cadastros aparecem agrupados nas seguintes categorias:

| Categoria | Cadastros incluídos |
|---|---|
| **Classificação de Bens** | Classificações de Bem, Tipos de Bem, Tipos de Apreensão, Acessórios |
| **Estado / Conservação** | Tipos de Conservação, Tipos de Perícia |
| **Veículos** | Cores, Combustíveis, Marcas, Modelos |
| **Imóvel** | Finalidades de Imóvel |
| **Estrutura / Campos Customizados** | Campos Extras, Seções de Campos, Seções de Checklist, Características |
| **Pessoa (referência)** | Tipos de Arquivo (Arrematante), Tipos de Contato, Tipos de Documento |
| **Outros** | Eventos de Bem, Tipos de Pátio, Tipos de Vaga de Pátio, Tipos de Arquivo (Bem), Tipos de Notificação, Categorias / Raças (Rural) |

Alguns itens trazem o selo **ref.** ("referência"). Eles existem em uma tela dedicada própria; aqui aparecem só por conveniência. Ao abri-los, surge um botão **Abrir tela dedicada** que leva à tela completa.

### Área da direita (cadastro selecionado)

Quando você escolhe um cadastro, a direita mostra:

- O **título** e uma breve **descrição** do que aquele cadastro representa.
- Um campo **Buscar...** para filtrar a lista de itens.
- O botão **Novo &lt;item&gt;** para criar um registro.
- A **tabela** com os itens já cadastrados.

As colunas variam por cadastro, mas a maioria segue este padrão:

| Coluna | O que é |
|---|---|
| **ID** | Número interno do registro. |
| **Nome** | Rótulo do item (o que aparece nos formulários de bem). |
| **Situação** | **Ativo** ou **Inativo**. Itens inativos deixam de aparecer como opção nos formulários. |
| (colunas extras) | Conforme o cadastro: Código, Tipo Pai, Marca, Permissão, Obrigatório, Global, etc. |
| **Ações** | Botões de **Editar** (lápis) e **Excluir** (lixeira) em cada linha. |

## O que dá pra fazer aqui

Todos os cadastros funcionam da mesma forma: criar, editar, excluir, buscar e ativar/inativar. O que muda são os campos de cada um.

### Cadastrar um novo item

1. Na barra lateral, selecione o cadastro desejado (ex.: **Cores**).
2. Clique em **Novo &lt;item&gt;** (ex.: **Novo Cor**).
3. Preencha os campos do formulário. **Nome** é sempre obrigatório.
4. Deixe a chave **Ativo** ligada para que o item já fique disponível nos formulários de bem.
5. Clique em **Criar**. O item aparece na lista e uma mensagem de confirmação é exibida.

Se faltar algum campo obrigatório, uma lista de avisos aparece no rodapé do formulário e o salvamento é bloqueado até você corrigir.

### Editar um item

1. Na lista, clique no ícone de **lápis** da linha (ou dê **duplo clique** na linha).
2. Ajuste os campos no formulário.
3. Clique em **Salvar alterações**.

### Excluir um item

1. Clique no ícone de **lixeira** da linha.
2. Confirme na janela de aviso clicando em **Excluir**. A remoção é definitiva.

> Dica: em vez de excluir, considere **inativar** o item (desligue a chave **Ativo** ao editar). Assim ele some das opções novas sem afetar bens antigos que já o utilizam.

### Buscar e paginar

- Use o campo **Buscar...** acima da tabela para filtrar por nome.
- No rodapé da tabela você escolhe quantos itens ver por página (**25**, **50** ou **100**) e navega entre as páginas.

## Cadastros e seus campos

A seguir, o que cada cadastro representa e os campos próprios do formulário (além de **Nome** e **Ativo**, comuns a quase todos).

### Classificação de Bens

- **Classificações de Bem** — subdivisões de um Tipo de Bem (ex.: Veículo → Carro, Moto). Campos: **Tipo de Bem pai** (obrigatório, escolha em lista), **Código**, e os templates de montagem automática (**Montagem do título / subtítulo / descrição / observação do bem**), usados para gerar automaticamente os textos do bem ao cadastrá-lo. Nos templates você pode usar marcadores como `{marca}` e `{modelo}`.
- **Tipos de Bem** — os tipos raiz e subtipos de bem. Campos: **Código**; **Parente** (deixe em branco para criar um tipo raiz, ou escolha um pai para criar um subtipo); os mesmos templates de **Montagem**; e **Campos Adicionais** — um repetidor onde você define campos extras (nome, se é obrigatório, valor padrão inicial e validação por regex) que serão exibidos no cadastro do bem e na vistoria. Esses campos adicionais são herdados pelos subtipos.
- **Tipos de Apreensão** — motivos/tipos de apreensão do bem. Só **Nome**.
- **Acessórios** — itens/acessórios anexos ao bem. Campos: **Global** (chave; se ligada, o acessório aparece em qualquer tipo de bem) e **Tipos de Bem** (árvore com caixas de seleção — aparece quando Global está desligado; marque os tipos/subtipos onde o acessório deve aparecer).

### Estado / Conservação

- **Tipos de Conservação** — estados de conservação do bem (ex.: novo, usado, sucata). Só **Nome**.
- **Tipos de Perícia** — observações/vícios/perícias. Campos: **Descrição** (obrigatória); chaves para **Adicionar descrição na Ata**, **no Catálogo** e **na Nota** do bem ao vincular; **Global** (aparece em qualquer tipo de bem); e **Tipos de Bem** (árvore — aparece quando Global está desligado).

### Veículos

- **Cores** — cores de veículos/bens. Só **Nome**.
- **Combustíveis** — tipos de combustível. Só **Nome**.
- **Marcas** — marcas de veículos (e outros bens). Campos: **Código** e **Tipos de Bem** (árvore; vazio = aparece para todos).
- **Modelos** — modelos vinculados a marcas. Campos: **Código**, **Marca** (obrigatória, escolha em lista) e **Tipos de Bem** (árvore).

### Imóvel

- **Finalidades de Imóvel** — residencial, comercial, rural, etc. Campos: **Código** e **Descrição**.

### Estrutura / Campos Customizados

- **Campos Extras** — campos dinâmicos exibidos no formulário de bem. Campos: **Tipo do campo** (Texto, Número, Data, Lista, Boolean ou Texto longo); **Seção do formulário** (em qual aba/seção o campo aparece); **Tipos de Bem** (árvore; vazio = todos); **Obrigatório**; **Público (site)**; **Valor padrão**; e **Ordem**.
- **Seções de Campos** — agrupam os campos extras no formulário de bem. Campos: **Código**, **Descrição** e **Ordem**.
- **Seções de Checklist** — agrupam itens do checklist do bem. Campos: **Código**, **Descrição** e **Ordem**.
- **Características** — características adicionais dos bens (dimensões, atributos, etc.). Campos: **Tipo do campo** (Texto simples, Texto longo, Select menu, Option menu ou Checkbox); **Obrigatório**; **Valores pré-definidos** (lista que você monta digitando e teclando Enter — só aparece para Select e Option); **Valor padrão**; **Ordem**; opção avançada de **bind com campo interno** (Entidade + Atributo — use só se souber o que faz); e **Tipos de Bem** (árvore).

### Pessoa (referência)

- **Tipos de Arquivo (Arrematante)** — categorias de documentos do arrematante (RG, comprovante, etc.). Campo extra: **Disponível no App de Vistoria**.
- **Tipos de Contato** — *(referência)* já existe em tela dedicada. Botão **Abrir tela dedicada** disponível.
- **Tipos de Documento** — *(referência)* já existe em tela dedicada. Campo: **Código**. Botão **Abrir tela dedicada** disponível.

### Outros

- **Eventos de Bem** — tipos de evento do histórico do bem. Campos: **Código**, **Descrição** e **Ordem**.
- **Tipos de Pátio** — categorias de pátio (coberto, descoberto, externo, etc.). Campo: **Descrição**.
- **Tipos de Vaga de Pátio** — categorias de vaga dentro do pátio (caminhão, carro, moto, container, etc.). Só **Nome**.
- **Tipos de Arquivo (Bem)** — categorias de arquivos anexados ao bem (foto do site, edital, conteúdo processual, etc.). Campos: **Disponível no App de Vistoria** e **Permissão** (Público, Arrematante, Comitentes ou Interno — obrigatória), que controla quem pode ver o arquivo.
- **Tipos de Notificação** — categorias de notificações vinculadas a bem (intimação, edital, citação, etc.). Só **Nome**.
- **Categorias / Raças (Rural)** — espécies/raças animais para leilões rurais. Campos: **Espécie**, **Sexo** (Qualquer / Macho / Fêmea), **Idade inicial (meses)** e **Idade final (meses)**.

## Dicas e observações

- **A chave Ativo é a forma segura de "aposentar" um item.** Inativar mantém o histórico dos bens que já usam o item; excluir remove definitivamente.
- **Campos com seleção em árvore (Tipos de Bem)** permitem marcar vários tipos e subtipos com caixas de seleção. Deixar tudo desmarcado normalmente significa "aplica-se a todos".
- **Cadastros marcados com ref.** (Tipos de Contato, Tipos de Documento) têm uma tela dedicada própria; o botão **Abrir tela dedicada** leva você até ela.
- **Categorias / Raças (Rural)** depende do módulo rural estar habilitado no seu plano. Se não estiver, o cadastro aparece como **indisponível**.
- Os templates de **Montagem** (em Tipos de Bem e Classificações) automatizam a geração de título, subtítulo, descrição e observação dos bens — vale a pena configurá-los para padronizar seus cadastros.

## Veja também

- **Configurações** → **Configurações globais** — alguns destes cadastros têm atalho direto (deep-link) a partir das configurações globais do sistema.
