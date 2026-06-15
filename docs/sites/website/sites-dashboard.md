---
title: Painel de Sites
sidebar_position: 1
---

# Painel de Sites

O Painel de Sites é a tela inicial do módulo **Sites & Website**. Ela reúne, em um só lugar, os números do seu site público de leilões (cadastros capturados, banners, páginas e posts), a lista dos seus sites e as últimas atividades feitas no site.

## Como acessar

**Sites** → **Dashboard**

![Painel de Sites](/img/manual/sites/sites-dashboard.png)

## O que você vê nesta tela

A tela é dividida em quatro áreas: os indicadores no topo, o bloco de visitas, a lista dos seus sites e o painel de atividade recente.

### Indicadores (no topo)

| Indicador | O que é |
|---|---|
| Cadastros capturados (7d/30d) | Quantidade de leads (interessados que se cadastraram) vindos dos sites no período escolhido. Quando há base anterior, mostra a variação percentual em relação ao período anterior. |
| Banners ativos | Quantos banners estão em exibição agora. Abaixo, mostra quantos sites você tem cadastrados. |
| Páginas publicadas | Total de páginas/conteúdos do CMS do site. |
| Posts no blog | Total de artigos publicados no blog. |

> Quando uma métrica não tem dado disponível, ela aparece como **—**.

### Visitas dos sites

Bloco com o tráfego consolidado dos sites. Use o botão **7 dias** / **30 dias** no canto para trocar o período. A medição de visitas ainda não está integrada a este painel; enquanto não houver, aparece um aviso informando que a métrica não está disponível. Os demais indicadores (cadastros, banners, páginas e posts) são dados reais.

### Seus sites

Cada site cadastrado vira um cartão com:

| Campo | O que é |
|---|---|
| Nome | Nome do site. |
| Status | **Online** (tem domínio configurado), **Configurando** (ainda sem domínio) ou **Inativo**. |
| Domínio | Endereço do site. |
| Atalhos | Botões **Banners**, **Blog** e **Páginas** que levam direto para a tela correspondente. |

### Atividade recente

Painel lateral com as últimas ações realizadas nos sites (novos leads, banners, posts, páginas e limpeza de cache), cada uma com o tempo desde que ocorreu (ex.: "há 5 min", "ontem").

## O que dá pra fazer aqui

### Cadastrar um novo site

1. Clique em **+ Novo site** no topo da tela.
2. Você será levado para a tela de **Configurações de Sites**, já na opção de cadastro.

### Abrir uma seção de um site

1. No cartão do site, clique em **Banners**, **Blog** ou **Páginas** para ir direto à tela daquela seção.
2. Para abrir a administração geral do site, clique no próprio cartão.

### Apagar o cache do site

Use quando uma alteração feita no ERP não estiver aparecendo no site público.

1. Clique em **Apagar cache** no topo (o botão só aparece para quem tem permissão).
2. Confirme na janela de aviso. O cache do site público é limpo e uma re-sincronização é disparada.
3. Aguarde: o site pode ficar momentaneamente mais lento enquanto recarrega.

## Dicas e observações

- **Apagar cache é restrito**: só o usuário **slroot** (papel `ROLE_ROOT`) consegue executar. Para os demais, o botão nem aparece, e a ação é recusada com aviso.
- Apagar o cache afeta o site público e pode causar lentidão momentânea — use apenas quando necessário.
- O indicador de **visitas** depende de uma integração de analytics que ainda não está disponível neste painel.

## Veja também

- [Banners e Popups](./website-banners.md)
- [Páginas](./website-paginas.md)
- [Publicações do blog](./website-blog-posts.md)
- [Menus](./website-menus.md)
