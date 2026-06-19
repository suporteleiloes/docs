---
title: Sites (Multisite)
sidebar_position: 1
---

# Sites (Multisite)

Esta tela controla os **sites** onde os seus leilões podem ser publicados (recurso de multisite). Cada site cadastrado recebe um **token** próprio — usado para autenticar as requisições que o ERP envia — e uma **URL de webhook**, que recebe as atualizações dos leilões em tempo real. É aqui que você liga (ou desliga) cada endereço público da sua leiloeira.

## Como acessar

**Configurações** → **Sites (Multisite)**

![Sites (Multisite)](/img/manual/erp/configuracoes-sites.png)

## O que você vê nesta tela

No topo há um cartão explicativo sobre o multisite. Logo abaixo, a barra de ferramentas traz a **busca** (por nome ou URL) e as abas de status **Ativos / Inativos / Todos**. O restante é a lista de sites.

| Coluna | O que é |
|---|---|
| # | Número (identificador) do site. |
| Nome | Nome do site cadastrado. |
| URL | Endereço público do site (clique para abrir em nova aba). |
| Webhook | Endereço que recebe as atualizações do ERP. |
| Token | Token de autenticação do site (exibido encurtado; clique para copiar). |
| Status | Indica se o site está **Ativo** ou **Inativo**. |

## O que dá pra fazer aqui

Cada linha da lista traz três ações rápidas (à direita):

- **Enviar configuração ao site** (ícone de avião de papel): empurra as configurações atuais para o site.
- **Editar** (ícone de lápis): abre o cadastro do site.
- **Excluir** (ícone de lixeira): remove o site.

Você também pode **dar duplo clique** em qualquer linha para abrir a edição, e **clicar no token** para copiá-lo.

### Cadastrar um novo site

1. Clique em **Novo site** (canto superior direito).
2. Na aba **Geral**, preencha **Nome do site**, **URL** (deve começar com `https://` e sem barra no final) e **URL do Webhook** — os três são obrigatórios.
3. O campo **Token** já vem preenchido automaticamente. Se quiser gerar outro, clique em **Gerar**.
4. Deixe a chave **Site ativo** ligada para que o site publique leilões.
5. (Opcional) Percorra as abas **Site**, **Website**, **Contato** e **Exibição** para ajustar a aparência e o comportamento do site (veja abaixo).
6. Marque a caixa de concordância no rodapé: ela confirma que, ao salvar, os dados serão transmitidos para o site.
7. Clique em **Criar site**.

![Cadastro de site](/img/manual/erp/configuracoes-sites-novo.png)

#### Abas do cadastro

| Aba | O que você configura |
|---|---|
| **Geral** | Nome, URL, URL do webhook, token e se o site está ativo. |
| **Site** | Título e descrição do site, nome e matrícula do leiloeiro, tema, cores principal e secundária, logomarca, logomarca mobile e favicon. |
| **Website** | Modelos de cabeçalho, home e rodapé, CSS personalizado, scripts, metatags e as chaves do Google reCAPTCHA. |
| **Contato** | Telefone, WhatsApp, e-mails, redes sociais (Instagram, LinkedIn, Facebook, TikTok), comunidade no WhatsApp e endereço completo. |
| **Exibição** | Opções de exibição do site público: mostrar/bloquear leilões encerrados e suspensos, botão de WhatsApp flutuante, buscador, mapa de bens, agenda, blog, destaques na home, layout dos lotes, modal de newsletter e o que mostrar em cada leilão/lote. |

### Editar um site

1. Clique no ícone de **lápis** (ou dê duplo clique na linha).
2. Ajuste os campos nas abas desejadas.
3. Marque a caixa de concordância no rodapé.
4. Clique em **Salvar alterações**.

### Enviar a configuração ao site

Use isso quando você alterou algo no site (cores, contatos, opções de exibição) e quer aplicar imediatamente, sem reabrir o cadastro.

1. Na linha do site, clique no ícone de **avião de papel** (Enviar configuração).
2. Aguarde a mensagem de confirmação **"Configuração enviada ao site com sucesso."**

### Copiar o token

1. Clique sobre o **token** (na coluna Token).
2. O valor completo é copiado para a área de transferência — cole-o no painel do site para autenticá-lo.

### Excluir um site

1. Clique no ícone de **lixeira**.
2. Confirme na janela de confirmação. Atenção: leilões vinculados perderão a publicação automática nesse site.

## Erros comuns e impactos

- **Token incorreto no painel do site**: o site público usa o token para validar que as requisições vêm mesmo do seu ERP. Se o token cadastrado aqui não for o mesmo configurado no site, as publicações e atualizações falham. Ao **gerar** um novo token, lembre-se de atualizá-lo também no site.
- **Webhook indisponível**: o webhook é o endereço que recebe as atualizações dos leilões em tempo real. Se ele estiver fora do ar ou com URL errada, o site deixa de receber as mudanças do ERP — os leilões podem ficar desatualizados no site público.
- **Site inativo**: desligar a chave **Site ativo** faz o site parar de receber/publicar leilões. Use para tirar um endereço do ar temporariamente sem excluí-lo.
- **Excluir um site**: os leilões vinculados perdem a publicação automática nesse endereço. Prefira **inativar** quando a intenção é apenas pausar.
- **Alterar configurações sem reenviar**: mudanças de cores, contatos e opções de exibição só chegam ao site quando os dados são transmitidos (ao salvar com a caixa de concordância marcada, ou pelo botão **Enviar configuração**).

## Dicas e observações

- **URL e Webhook** precisam começar com `https://` e ter um domínio válido. Barras no final são removidas automaticamente.
- A **caixa de concordância** é obrigatória para salvar — ela confirma que os dados vão ser transmitidos para o site.
- A aba **Geral** mostra um aviso: alterações nessas áreas sem o devido conhecimento podem prejudicar o funcionamento do website. Mexa com cuidado.
- Use as abas **Ativos / Inativos / Todos** para filtrar a lista rapidamente.

## Veja também

- [Domínio próprio](./configuracoes-dominio.md)
- [Apelidos proibidos para arrematantes](./configuracoes-apelidos-proibidos.md)
