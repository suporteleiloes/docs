---
title: Templates de E-mail
sidebar_position: 2
---

# Templates de E-mail

Os **templates** são os modelos de e-mail que o sistema reutiliza em toda a plataforma: boas-vindas, cobrança, notificações, confirmações e muito mais. Aqui você cria, edita, testa e organiza esses modelos. Cada template tem um assunto, um corpo (em HTML e em texto puro) e pode usar **variáveis** que são substituídas automaticamente no momento do envio.

## Pré-requisitos

- Permissões de template para cada ação (criar, listar, visualizar, editar, excluir — ACLs `gestao/template/*`). Sem a permissão correspondente, o botão/ação não funciona. Peça ao administrador da conta.
- Para usar variáveis, é útil conhecer quais estão disponíveis — elas aparecem na coluna **Variáveis disponíveis** do editor e são cadastradas na área de Configurações.

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
6. Escreva o conteúdo do e-mail na aba **Corpo HTML**. Para inserir uma variável, clique nela na lista **Variáveis disponíveis** (à direita) e ela é colada onde o cursor estiver. O switch **Código-fonte** (ao lado das abas) alterna o editor para edição do HTML cru, útil quando você cola um modelo pronto.
7. Opcional: preencha a aba **Versão texto puro** (usada por programas de e-mail que não exibem HTML).
8. Use a aba **Preview** para visualizar como o e-mail vai ficar, com as variáveis destacadas.
9. Deixe **Template ativo** ligado para que ele possa ser usado.
10. Clique em **Cadastrar**.

O botão **Cadastrar / Atualizar** só habilita quando **Nome** (mais de 2 caracteres), **Código** e **Corpo HTML** estão preenchidos. O **Assunto** é obrigatório pela tela, mas a validação final é feita pelo servidor.

![Novo template](/img/manual/erp/comunicacao-templates-novo.png)

### Usar variáveis no conteúdo

- As variáveis ficam no formato `{{NOME}}`, `{{EMAIL}}` etc. e são substituídas pelo valor real no envio.
- Na coluna direita do editor, em **Variáveis disponíveis**, clique em qualquer variável para inseri-la no corpo na posição do cursor.
- Você também pode digitar a variável manualmente, desde que use o formato com chaves duplas.

### Importar conteúdo de um arquivo Word ou PDF

Quando você já tem o texto do e-mail em um documento, dá para importá-lo em vez de digitar tudo.

:::info Recurso em implantação
A importação de **Word/PDF** depende de um recurso no servidor. Se ainda não estiver habilitado para a sua conta, ao tentar importar você verá a mensagem **"Funcionalidade indisponível / em implementação"** — nesse caso, copie o texto manualmente ou fale com o suporte.
:::

1. No editor (aba **Corpo HTML**), clique em **Importar de arquivo (Word/PDF)**.
2. Selecione um arquivo **.docx** ou **.pdf**.
3. Se já houver conteúdo no corpo, o sistema pede confirmação antes de substituir.
4. O texto é carregado no editor. Se o sistema detectar variáveis no arquivo, elas aparecem como **chips** logo acima do editor — clique em uma para inseri-la no corpo.

### Editar um template existente

1. Dê **duplo clique** na linha ou clique no ícone de **lápis**.
2. Faça as alterações. Templates **internos** também podem ser editados (assunto, corpo), mas não excluídos.
3. Clique em **Atualizar**.

### Enviar um e-mail de teste

Disponível apenas em templates já salvos (em edição). Se você tentar antes de salvar, o sistema avisa para cadastrar o template primeiro.

1. Abra o template para editar.
2. No campo **Enviar e-mail de teste para**, informe um endereço de e-mail válido (precisa conter `@`).
3. Clique em **Enviar teste**. O sistema dispara o e-mail com o template atual para esse endereço.

:::info Recurso em implantação
O **envio de teste** depende de um recurso no servidor. Se ainda não estiver habilitado, você verá a mensagem **"Funcionalidade em implementação"** — nesse caso, fale com o suporte. Falhas de envio também podem indicar problema na configuração de SMTP.
:::

### Excluir um template

1. Clique no ícone de **lixeira** na linha (só aparece em templates personalizados).
2. Confirme na janela. **Atenção:** a exclusão é irreversível e pode quebrar funcionalidades que dependem do template.

## Regras de negócio

- **Origem do template:** **Sistema** (interno) — vem pronto e é usado por automações da plataforma; ou **Personalizado** — criado pela sua equipe. Apenas os personalizados podem ser excluídos.
- **Status Ativo/Inativo:** só templates **ativos** ficam disponíveis para uso. Inativar é a forma segura de "desligar" um template sem apagá-lo.
- **Código:** é o identificador usado pelo sistema para localizar o template (por exemplo, em automações). Evite alterá-lo depois que o template entra em uso.
- **Variáveis:** seguem o formato `{{NOME}}` e são substituídas pelo valor real no momento do envio. Variáveis digitadas fora desse formato não são substituídas.

## Erros comuns

- **Botão Cadastrar/Atualizar desabilitado:** falta **Nome**, **Código** ou **Corpo HTML** — preencha os três.
- **"Categoria inválida" ao salvar:** problema raro de formato da categoria enviada; tente selecionar a categoria novamente ou deixe **Sem categoria**.
- **Não aparece o ícone de excluir:** o template é **interno do Sistema** e não pode ser excluído (apenas editado).
- **Variável não foi substituída no e-mail:** confira se usou chaves duplas exatamente como em `{{NOME}}` e se a variável existe na lista **Variáveis disponíveis**.

## Dicas e observações

- **Templates internos (Sistema)** não podem ser excluídos, pois o próprio sistema depende deles. Você ainda pode editar o conteúdo deles.
- O **Código** é o que identifica o template para o sistema — escolha algo claro e evite mudá-lo depois de em uso.
- Para inativar um template temporariamente, desligue o switch **Template ativo** em vez de excluí-lo.
- O envio de teste e a importação de Word/PDF dependem de recursos no servidor; se ainda não estiverem habilitados, o sistema avisa para entrar em contato com o suporte.

## Veja também

- [Comunicação (visão geral)](./comunicacao.md)
- [Histórico de Envio de E-mail](./comunicacao-historico.md)
