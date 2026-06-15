---
title: Transmissão ao Vivo
sidebar_position: 50
---

# Transmissão ao Vivo

Esta tela serve para configurar e operar o vídeo da transmissão ao vivo de um leilão. É aqui que você informa o link do stream (YouTube, vídeo ou iframe), acompanha o player e usa o chat ao vivo. O link configurado aqui é o mesmo que aparece para o público no auditório do site.

## Como acessar

**Leilões** → abra um leilão → aba/menu **Transmissão ao Vivo**.

![Transmissão ao Vivo](/img/manual/erp/transmissao.png)

## O que você vê nesta tela

No topo, o cabeçalho mostra o nome do leilão, um selo de status (**No ar** quando a transmissão está ativa, **Offline** quando não) e o contador de espectadores.

A área central tem duas colunas: à esquerda o player e a configuração do stream; à direita o chat ao vivo.

| Área / Campo | O que é |
|---|---|
| Player | Mostra a prévia da transmissão (vídeo do YouTube, MP4/HLS ou iframe). Fica vazio enquanto não houver URL configurada. |
| Tipo de transmissão | Define como o link será exibido: **YouTube Live**, **Iframe genérico**, **HTML5 (MP4/HLS)** ou **RTMP**. |
| URL de transmissão | O endereço do stream. O sistema valida o formato conforme o tipo escolhido. |
| Selo No ar / Offline | Indica se a transmissão está sendo exibida no momento. |
| Espectadores | Quantidade de pessoas assistindo. |
| Chat ao vivo | Painel de mensagens da transmissão. |

## O que dá pra fazer aqui

### Configurar e salvar a URL da transmissão

1. Em **Tipo de transmissão**, escolha o formato do seu stream. Na maioria dos casos é **YouTube Live**.
2. Cole o link em **URL de transmissão**. Para YouTube, valem links `youtube.com/watch?v=`, `youtu.be/`, `/live/` e `/shorts/`.
3. Confira a prévia no player ao lado. Se a URL estiver inválida para o tipo escolhido, aparece um aviso embaixo do campo.
4. Clique em **Salvar URL**. A transmissão é atualizada e o link passa a valer para os espectadores do auditório automaticamente.

### Iniciar e parar a transmissão

1. Com uma URL válida configurada, clique em **Iniciar stream** para colocar a transmissão no ar (o selo muda para **No ar**).
2. Para encerrar, clique em **Parar stream** e confirme. Isso encerra o stream para todos os espectadores.

### Copiar o link

- Clique em **Copiar** ao lado da URL para copiá-la para a área de transferência (útil para divulgar a transmissão).

### Usar o chat ao vivo

1. Digite a mensagem no campo embaixo do chat.
2. Clique em **Enviar** (ou tecle Enter). A mensagem aparece na lista com seu nome e horário.

## Dicas e observações

- O tipo **RTMP** não pode ser exibido direto no navegador. Use um player externo (OBS, VLC) para essa modalidade.
- O sistema tenta detectar o tipo de transmissão automaticamente a partir do link colado, mas você pode ajustar manualmente.
- Salvar a URL aqui é o passo essencial: é o que faz o vídeo aparecer no auditório do site para os participantes.

## Veja também

- [Auditório Unificado](./leiloes-auditorio.md)
- [Realização do Leilão](./realizacao.md)
