---
title: Upload de imagens (Root)
sidebar_position: 32
---

# Upload de imagens (Root)

Área administrativa avançada para enviar imagens diretamente ao armazenamento do sistema e obter uma URL pública de cada uma. É usada para hospedar imagens avulsas (banners, ícones, peças de comunicação) que não pertencem a um bem ou lote específico. **O acesso é exclusivo de usuários com papel Root.**

> **Recurso ainda não disponível no servidor.** A tela já existe, mas o serviço de upload no backend (rotas `/api/uploads/imagem` e `/api/uploads/imagens`) **ainda não foi publicado**. Na prática, ao tentar enviar ou listar imagens você verá o aviso **"Endpoint indisponível"** e nada será gravado. As instruções abaixo descrevem como a tela funcionará quando o recurso entrar no ar. Enquanto isso, para hospedar uma imagem avulsa, fale com o suporte. *> A confirmar com Tiago: data de publicação do `UploadController`.*

## Como acessar

**Configurações** → **Root** → **Upload de imagens**.

![Upload de imagens (Root)](/img/manual/erp/configuracoes-root-uploads.png)

## O que você vê nesta tela

Se você **não** for um usuário Root, a tela mostra apenas um aviso de **"Acesso restrito"** com um botão para voltar ao painel. As demais seções só aparecem para quem tem o papel Root.

Sendo Root, a tela tem três partes:

- **Área de envio (dropzone)** — o retângulo tracejado no topo, onde você arrasta ou seleciona arquivos.
- **Mensagens de erro** — aparecem abaixo da dropzone caso algum arquivo do último envio seja recusado.
- **Imagens enviadas** — uma grade com todas as imagens já hospedadas.

Cada cartão da grade mostra:

| Item | O que é |
|---|---|
| **Miniatura** | Pré-visualização da imagem. |
| **Nome do arquivo** | O nome do arquivo enviado. |
| **Tamanho e data** | Tamanho do arquivo e data de envio. |
| **URL** | O endereço público da imagem, em um campo somente leitura, com botão **Copiar**. |
| **Abrir em nova aba** | Link que abre a imagem em uma nova guia do navegador. |

No cabeçalho há o botão **Atualizar lista**, que recarrega a grade de imagens.

## O que dá pra fazer aqui

### Enviar imagens

1. **Arraste** um ou mais arquivos de imagem para a área tracejada — ou **clique** nela para abrir o seletor de arquivos do seu computador.
2. Selecione as imagens. São aceitos os formatos **JPG, PNG, GIF, WEBP, SVG e AVIF**, com até **20 MB por arquivo**. Você pode enviar **vários de uma vez**.
3. Aguarde o envio (a área mostra "Enviando…"). Ao terminar, uma mensagem informa quantas imagens foram enviadas e quantas falharam.
4. As novas imagens aparecem na grade **Imagens enviadas**.

Se algum arquivo for recusado (formato inválido, tamanho acima do limite, etc.), ele é listado em **"Alguns arquivos não foram aceitos"**, com o motivo de cada um. Os arquivos válidos do mesmo envio são aceitos normalmente.

### Copiar a URL de uma imagem

Clique em **Copiar** ao lado da URL no cartão da imagem. O endereço vai para a área de transferência, pronto para colar onde você precisar. Você também pode clicar dentro do campo de URL para selecionar o texto.

### Abrir a imagem

Clique em **Abrir em nova aba** no cartão para ver a imagem em tamanho real em outra guia.

### Atualizar a lista

Clique em **Atualizar lista** no cabeçalho para recarregar a grade — útil após envios feitos por outra pessoa.

## Dicas e observações

- **Restrição de acesso:** somente usuários com o papel **Root** veem e usam esta tela. Os demais recebem o aviso de acesso restrito.
- **Limites de arquivo:** formatos JPG, PNG, GIF, WEBP, SVG, AVIF; até 20 MB cada; vários arquivos por envio.
- As imagens enviadas aqui ficam **públicas** pela URL gerada — não use esta área para conteúdo sigiloso.
- Caso apareça o aviso **"Endpoint indisponível"**, o recurso de upload ainda não está disponível no servidor; tente novamente mais tarde.

## Veja também

- [Autorizador — Regras de aprovação](./configuracoes-autorizador.md)
