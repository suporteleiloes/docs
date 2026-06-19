---
title: Transmissão ao Vivo
sidebar_position: 50
---

# Transmissão ao Vivo

Esta tela serve para configurar o vídeo da transmissão ao vivo de um leilão. É aqui que você informa o link do stream (YouTube, vídeo ou iframe) e confere a prévia no player. **O recurso central, hoje em funcionamento, é salvar a URL da transmissão**: o link que você salva aqui é o mesmo que aparece para o público no auditório do site, e a mudança é propagada na hora para quem está assistindo.

> Os controles **Iniciar/Parar stream**, o contador de **espectadores** e o **chat ao vivo** ainda estão em implementação no servidor. Eles aparecem na tela, mas hoje funcionam apenas na sua interface (não afetam o público nem persistem). Veja os detalhes em cada item abaixo.

## Como acessar

**Leilões** → abra um leilão → aba/menu **Transmissão ao Vivo**.

![Transmissão ao Vivo](/img/manual/erp/transmissao.png)

## O que você vê nesta tela

No topo, o cabeçalho mostra o nome do leilão, um selo de status (**No ar** quando a transmissão está ativa, **Offline** quando não) e o contador de espectadores.

A área central tem duas colunas: à esquerda o player e a configuração do stream; à direita o chat ao vivo.

| Área / Campo | O que é |
|---|---|
| Player | Mostra a prévia da transmissão (vídeo do YouTube, MP4/HLS ou iframe). Fica vazio enquanto não houver URL configurada. |
| Tipo de transmissão | Define como o link será exibido: **YouTube Live**, **Iframe genérico**, **HTML5 `<video>` (MP4/HLS)** ou **RTMP (requer player externo)**. |
| URL de transmissão | O endereço do stream. O sistema valida o formato conforme o tipo escolhido. |
| Selo No ar / Offline | Indica o estado do botão Iniciar/Parar **na sua tela**. (Como esse controle ainda está em implementação, o selo não reflete um estado real do servidor.) |
| Espectadores | Contador de pessoas assistindo. **Em implementação** — hoje mostra 0. |
| Chat ao vivo | Painel de mensagens da transmissão. **Em implementação** — hoje as mensagens ficam só no seu navegador (marcado como "Stub" na própria tela). Para falar com o público online, use o [Auditório ao vivo](./auditorio.md). |

## O que dá pra fazer aqui

### Configurar e salvar a URL da transmissão

1. Em **Tipo de transmissão**, escolha o formato do seu stream. Na maioria dos casos é **YouTube Live**.
2. Cole o link em **URL de transmissão**. Para YouTube, valem links `youtube.com/watch?v=`, `youtu.be/`, `/live/` e `/shorts/`.
3. Confira a prévia no player ao lado. Se a URL estiver inválida para o tipo escolhido, aparece um aviso embaixo do campo.
4. Clique em **Salvar URL**. A transmissão é atualizada e o link passa a valer para os espectadores do auditório automaticamente.

### Iniciar e parar a transmissão (em implementação)

Os botões **Iniciar stream** / **Parar stream** já existem na tela, mas a integração com o servidor ainda está em desenvolvimento. Hoje eles apenas alternam o selo **No ar/Offline** na sua interface; não ligam nem desligam o stream para o público. Para colocar a transmissão no ar de fato, o que importa é **salvar a URL** (passo acima) — é isso que faz o vídeo aparecer no auditório do site.

> A confirmar: ativação dos endpoints de iniciar/parar transmissão no servidor.

### Copiar o link

- Clique em **Copiar** ao lado da URL para copiá-la para a área de transferência (útil para divulgar a transmissão). Se o navegador bloquear a cópia automática, o sistema abre uma janela com o link para você copiar manualmente.

### Usar o chat ao vivo (em implementação)

O painel de chat à direita ainda não está conectado ao servidor (aparece marcado como "Stub"). As mensagens que você digita ficam visíveis apenas no seu navegador e não chegam ao público. Para se comunicar com os participantes online durante o pregão, use a tela [Auditório ao vivo](./auditorio.md).

## Dicas e observações

- O tipo **RTMP** não pode ser exibido direto no navegador. Use um player externo (OBS, VLC) para essa modalidade.
- O sistema tenta detectar o tipo de transmissão automaticamente a partir do link colado, mas você pode ajustar manualmente.
- **Salvar a URL aqui é o passo essencial**: é o que faz o vídeo aparecer no auditório do site para os participantes. Ao salvar, o link é gravado e enviado em tempo real para quem já está no auditório, atualizando o player automaticamente.

## Veja também

- [Auditório Unificado](./leiloes-auditorio.md)
- [Realização do Leilão](./realizacao.md)
