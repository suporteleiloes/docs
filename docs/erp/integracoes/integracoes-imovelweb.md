---
title: ImóvelWeb
sidebar_position: 7
---

# ImóvelWeb

Esta tela integra o ERP ao portal ImóvelWeb. Por aqui você publica imóveis do sistema como anúncios no portal, atualiza esses anúncios e os despublica quando o imóvel sai do ar.

## Como acessar
**Integrações** → **ImóvelWeb** (rota `/integracoes/imovelweb`).

![ImóvelWeb](/img/manual/erp/integracoes-imovelweb.png)

## O que você vê nesta tela

A tela tem um painel de status e uma lista de imóveis organizada em abas:

| Área | O que é |
|---|---|
| Status da integração | Mostra se a integração está **Ativa** ou **Desativada**. Traz o link **Configurar credenciais** |
| Aba **Publicados** | Imóveis já anunciados no ImóvelWeb |
| Aba **Não publicados** | Imóveis ainda não anunciados |
| Aba **Todos os imóveis** | Todos os imóveis, independentemente do status |
| Filtros | Campo de busca por descrição ou endereço, e botão **Buscar** |

### Colunas da lista

| Coluna | O que é |
|---|---|
| ID | Identificador do bem |
| Descrição | Descrição/título do imóvel e o tipo de bem |
| Endereço | Cidade e estado do imóvel |
| Valor | Valor mínimo, em reais |
| Status | **Publicado** (com a data) ou **Não publicado** |
| (ações) | Botões de **Publicar**, **Ver**, **Atualizar** e **Despublicar**, conforme o status |

## Pré-requisitos
- A integração precisa estar **Ativa** e com credenciais preenchidas em **Configurações → Globais** (link **Configurar credenciais**). Sem isso, as ações de publicar/atualizar/despublicar falham.
- Só **imóveis** entram nesta lista. O ERP filtra os bens pela categoria imóvel — bens de outras categorias (veículos, diversos) não aparecem aqui.

## O que dá pra fazer aqui

### Filtrar/buscar imóveis
1. Use as abas (**Publicados**, **Não publicados**, **Todos os imóveis**) para alternar a lista.
2. Para buscar, digite no campo **Buscar por descrição ou endereço...** e clique em **Buscar** (ou pressione Enter).

### Publicar um imóvel no ImóvelWeb
1. Encontre o imóvel (a aba **Não publicados** ajuda).
2. Na linha do imóvel, clique em **Publicar**.
3. Confirme na janela. O sistema avisa **Imóvel publicado** quando o anúncio é enviado ao portal.

### Atualizar um anúncio já publicado
1. Na linha de um imóvel **Publicado**, clique em **Atualizar**.
2. Confirme na janela. O anúncio atual é substituído pelos dados mais recentes do bem.

> **Como funciona:** **Publicar** e **Atualizar** usam a mesma operação no portal — atualizar significa reenviar o anúncio, e o ImóvelWeb sobrescreve o conteúdo anterior. Use sempre que mudar foto, valor, descrição ou endereço do imóvel no ERP.

### Ver o anúncio no portal
- Na linha de um imóvel publicado, clique em **Ver** para abrir o anúncio no ImóvelWeb em uma nova aba (disponível quando o portal retorna o link).

### Despublicar um anúncio
1. Na linha de um imóvel **Publicado**, clique em **Despublicar**.
2. Confirme na janela. O sistema avisa **Imóvel despublicado** quando o anúncio é removido do portal.

## Erros comuns
- **Imóvel não aparece na lista:** confirme que o bem é da categoria **imóvel** e que está dentro da página atual (use a busca ou aumente a quantidade por página).
- **Ação "em implementação":** se a listagem ou uma ação ainda não estiver liberada no servidor, o sistema avisa que a funcionalidade está em implementação — nesse caso, fale com o suporte.
- **Despublicar por engano:** o anúncio sai do portal imediatamente. Para voltar ao ar, publique de novo (gera um novo anúncio).

## Dicas e observações
- Se a integração estiver **Desativada**, configure as credenciais pelo link **Configurar credenciais** (leva a **Configurações → Globais**).
- A lista é paginada (20, 50 ou 100 imóveis por página).
- O botão **Ver** só aparece quando o portal devolveu o link do anúncio; em alguns casos o anúncio existe mas o link não fica disponível.

## Veja também
- [Resale](./integra-resale.md)
- [Santander Imóveis](./integra-santander-imoveis.md)
- [iCarta Pro](./integracoes-icarta.md)
