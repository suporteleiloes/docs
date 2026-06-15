---
title: Templates de E-mail
sidebar_position: 2
---

# Templates de E-mail

Os **templates** são os modelos de e-mail que o sistema reutiliza em toda a plataforma: boas-vindas, cobrança, notificações, confirmações e muito mais. Aqui você cria, edita, testa e organiza esses modelos. Cada template tem um assunto, um corpo (em HTML e em texto puro) e pode usar **variáveis** que são substituídas automaticamente no momento do envio.

## Como acessar

**Plataforma** → **Comunicação** → **Templates**

![Templates de E-mail](/img/manual/erp/comunicacao-templates.png)

## O que você vê nesta tela

No topo há um aviso lembrando que você pode usar variáveis no formato `{{NOME_VARIAVEL}}` — elas serão trocadas pelo valor real (nome do cliente, e-mail etc.) na hora do envio.

Logo abaixo ficam os **filtros**: um campo de busca (por nome, assunto ou código) e uma fileira de **chips** para filtrar por categoria.

| Filtro (chip) | O que mostra |
|---|---|
| **Todas** | Todos os templates. |
| **Internos** | Templates do sistema (já vêm prontos e não podem ser excluídos). |
| **Personalizados** | Templates criados pela sua equipe. |
| (demais chips) | Cada categoria cadastrada aparece como um chip próprio. |

A lista de templates traz as colunas:

| Coluna | O que é |
|---|---|
| **#** | Número (código interno) do template. |
| **Template** | Nome do template e, abaixo, o código (ex.: `WELCOME_USER`). |
| **Assunto** | A linha de assunto do e-mail. |
| **Categoria** | Categoria à qual o template pertence (ou "—" se não tiver). |
| **Origem** | **Sistema** (interno) ou **Personalizado** (criado por você). |
| **Status** | **Ativo** ou **Inativo**. |

## O que dá pra fazer aqui

- **Novo template** (botão no topo): cria um modelo do zero.
- **Editar** (ícone de lápis ou duplo clique na linha): abre o template para alterar.
- **Excluir** (ícone de lixeira): remove um template personalizado. Templates **internos do sistema** não têm esse ícone e não podem ser excluídos.

### Criar um novo template

1. Clique em **Novo template**.
2. Preencha **Nome do template** (obrigatório, ex.: "Boas vindas arrematante").
3. Preencha **Código** (obrigatório, ex.: `WELCOME_USER`) — é o identificador usado pelo sistema.
4. Opcional: preencha a **Descrição** (um resumo do propósito) e escolha uma **Categoria**.
5. Preencha o **Assunto do e-mail** (obrigatório). Você já pode usar variáveis aqui, ex.: `Olá {{NOME}}, seu cadastro foi aprovado!`.
6. Escreva o conteúdo do e-mail na aba **Corpo HTML**. Para inserir uma variável, clique nela na lista **Variáveis disponíveis** (à direita) e ela é colada onde o cursor estiver.
7. Opcional: preencha a aba **Versão texto puro** (usada por programas de e-mail que não exibem HTML).
8. Use a aba **Preview** para visualizar como o e-mail vai ficar, com as variáveis destacadas.
9. Deixe **Template ativo** ligado para que ele possa ser usado.
10. Clique em **Cadastrar**.

![Novo template](/img/manual/erp/comunicacao-templates-novo.png)

### Usar variáveis no conteúdo

- As variáveis ficam no formato `{{NOME}}`, `{{EMAIL}}` etc. e são substituídas pelo valor real no envio.
- Na coluna direita do editor, em **Variáveis disponíveis**, clique em qualquer variável para inseri-la no corpo na posição do cursor.
- Você também pode digitar a variável manualmente, desde que use o formato com chaves duplas.

### Importar conteúdo de um arquivo Word ou PDF

Quando você já tem o texto do e-mail em um documento, dá para importá-lo em vez de digitar tudo.

1. No editor (aba **Corpo HTML**), clique em **Importar de arquivo (Word/PDF)**.
2. Selecione um arquivo **.docx** ou **.pdf**.
3. Se já houver conteúdo no corpo, o sistema pede confirmação antes de substituir.
4. O texto é carregado no editor. Se o sistema detectar variáveis no arquivo, elas aparecem como **chips** logo acima do editor — clique em uma para inseri-la no corpo.

### Editar um template existente

1. Dê **duplo clique** na linha ou clique no ícone de **lápis**.
2. Faça as alterações. Templates **internos** também podem ser editados (assunto, corpo), mas não excluídos.
3. Clique em **Atualizar**.

### Enviar um e-mail de teste

Disponível apenas em templates já salvos (em edição).

1. Abra o template para editar.
2. No campo **Enviar e-mail de teste para**, informe um endereço de e-mail válido.
3. Clique em **Enviar teste**. O sistema dispara o e-mail com o template atual para esse endereço.

### Excluir um template

1. Clique no ícone de **lixeira** na linha (só aparece em templates personalizados).
2. Confirme na janela. **Atenção:** a exclusão é irreversível e pode quebrar funcionalidades que dependem do template.

## Dicas e observações

- **Templates internos (Sistema)** não podem ser excluídos, pois o próprio sistema depende deles. Você ainda pode editar o conteúdo deles.
- O **Código** é o que identifica o template para o sistema — escolha algo claro e evite mudá-lo depois de em uso.
- Para inativar um template temporariamente, desligue o switch **Template ativo** em vez de excluí-lo.
- O envio de teste e a importação de Word/PDF dependem de recursos no servidor; se ainda não estiverem habilitados, o sistema avisa para entrar em contato com o suporte.

## Veja também

- [Comunicação (visão geral)](./comunicacao.md)
- [Histórico de Envio de E-mail](./comunicacao-historico.md)
