---
title: Mídia
sidebar_position: 13
---

# Mídia

Galeria central de **arquivos reutilizáveis** (logos, banners, marcas d'água, imagens, vídeos e PDFs). Cada arquivo enviado aqui gera uma **URL pública e permanente** que você pode usar em e-mails, banners e templates. Antes desta tela, a única forma de gerar uma URL pública era subir o arquivo dentro de uma campanha de marketing — agora basta soltar aqui.

## Como acessar

**Console** → **Mídia** (rota `/console/midia`).

![Mídia](/img/manual/_interno/console-midia.png)

## O que você vê nesta tela

No topo, o título **Mídia** e uma barra de ferramentas com:

- **Abas de tipo**: Todos, Imagens, Vídeos, Documentos — filtram a galeria pelo tipo de arquivo (por padrão, abre em **Imagens**).
- **Campo de busca** por nome do arquivo.
- Botão **Enviar arquivos**.

Abaixo, a galeria mostra os arquivos em cartões. Cada cartão traz:

| Elemento do cartão | O que é |
|---|---|
| **Miniatura** | Pré-visualização da imagem, do vídeo ou da primeira página do PDF. Outros formatos mostram um ícone genérico. |
| **Nome** | Nome original do arquivo. |
| **Tamanho** | Tamanho do arquivo (B, KB ou MB). |
| **Resolução** | Dimensões, quando disponível. |
| **Data** | Data de envio. |
| **Ações** | Botões Copiar URL, Abrir e Remover. |

Quando há mais arquivos do que os exibidos, aparece o botão **Carregar mais** com a quantidade restante.

## O que dá pra fazer aqui

### Enviar arquivos

Você tem duas formas:

1. Clique em **Enviar arquivos** e selecione um ou mais arquivos do seu computador (pode selecionar vários de uma vez). **Ou** arraste os arquivos da sua área de trabalho e **solte** em qualquer parte da tela — aparece uma marca "Solte os arquivos pra enviar".
2. Acompanhe o progresso no próprio botão (ex.: "Enviando 60%").
3. Ao terminar, a galeria recarrega e os novos arquivos aparecem no topo.

Tipos aceitos: imagens, vídeos e PDF. Cada arquivo pode ter no máximo **50 MB** — arquivos maiores são recusados, com aviso.

### Copiar a URL de um arquivo

1. Passe o mouse sobre o cartão e clique em **Copiar URL**.
2. A URL pública vai para a área de transferência (aparece a confirmação "URL copiada"). Cole onde precisar.

### Abrir um arquivo

Clique no botão **Abrir** (ícone de seta) no cartão para ver o arquivo em uma nova aba do navegador.

### Remover um arquivo

1. Clique no botão de **lixeira** (Remover) no cartão.
2. Confirme na janela.

Atenção: o arquivo é removido **da galeria e do armazenamento** — a ação é **irreversível** e a URL deixa de funcionar.

## Dicas e observações

- A URL gerada é **pública e permanente**: qualquer pessoa com o link acessa o arquivo. Não suba aqui nada sigiloso.
- Se você for **administrador máximo** (ROLE_ROOT/Super Admin), enxerga **todos** os arquivos da galeria. Demais usuários veem apenas os arquivos que eles mesmos enviaram.
- Antes de remover um arquivo em uso, confirme que nenhum e-mail, banner ou template ainda aponta para a URL dele.
- Esta é uma tela interna (Console da gerência) restrita.

## Veja também

- [Saúde dos Tenants](./console-saude.md)
- [Clientes](./console-clientes.md)
