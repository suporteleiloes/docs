---
title: Estúdio de Artes / Design IA
sidebar_position: 32
---

# Estúdio de Artes / Design IA

O Estúdio de Artes é a galeria de peças visuais do CRM para divulgar leilões e ações de marketing. Aqui você cadastra artes, gera textos e imagens com ajuda da IA, cria variações de design e publica uma arte como post em redes sociais. Também é onde você define a identidade visual (Brand Kit) da operação.

## Como acessar

**CRM** → **Marketing** → **Estúdio de Artes / Design IA** (ou pela barra de endereço em `/crm/estudio-artes`).

![Estúdio de Artes / Design IA](/img/manual/crm/crm-estudio-artes.png)

## O que você vê nesta tela

No topo há os botões **Identidade visual**, **Variações com IA** e **Nova arte**.

Logo abaixo, a barra de filtros permite:

- **Buscar** por título, chamada ou legenda.
- **Filtrar por leilão**, vinculando a galeria a um leilão específico.

A **galeria** mostra as artes em cartões. Cada cartão traz:

| Elemento | O que é |
|---|---|
| Imagem | A prévia da arte (com o tamanho/proporção no canto). |
| Título | Título da arte (ou a chamada, se não houver título). |
| Selo de leilão | Indicado quando a arte está vinculada a um leilão. |
| Chamada e legenda | Textos da peça. |
| #ID e data | Identificador e quando a arte foi criada. |
| Ações | Botões **Publicar** e **Excluir** (lixeira). |

## O que dá pra fazer aqui

### Criar uma nova arte

1. Clique em **Nova arte**.
2. Na coluna **Conteúdo**, preencha:
   - **Título** e **Chamada** (headline).
   - **Legenda** para redes sociais.
   - **Tamanho** da peça (Feed 1200×628, Quadrado 1080×1080 ou Stories 1080×1920).
   - **Leilão** (opcional) para vincular a peça a um leilão.
   - **URL da imagem** — campo obrigatório. Você pode colar uma URL ou gerar uma com a IA (veja abaixo).
3. Clique em **Salvar arte**. A arte aparece na galeria.

![Nova arte](/img/manual/crm/crm-estudio-artes-novo.png)

### Gerar texto com IA (dentro do cadastro)

1. No modal **Nova arte**, na coluna **Texto com IA**, descreva o **Briefing** (ex.: "leilão de imóveis em Vilhena, 12 lotes, encerra sexta").
2. Escolha o **Tom** (Profissional, Formal, Descontraído, Urgente) e o **Canal** (E-mail, WhatsApp, Push, Redes sociais).
3. Clique em **Sugerir texto**.
4. A IA lista sugestões; clique em uma para aplicá-la nos campos Título e Chamada.

### Gerar imagem com IA (dentro do cadastro)

1. Na coluna de IA, em **Imagem com IA**, descreva no **Prompt** a imagem desejada.
2. Escolha a **Proporção** (Quadrado, Paisagem ou Retrato).
3. Clique em **Gerar imagem**.
4. Clique em uma das imagens geradas para usá-la — ela vira a imagem da arte.

### Criar variações de design com IA

1. Clique em **Variações com IA**.
2. Cole o **HTML base** de um template.
3. Opcionalmente, escreva **instruções extras** (ex.: "paleta mais sóbria, foco no preço").
4. Clique em **Gerar variações**. A IA cria opções com paletas e layouts alternativos mantendo o conteúdo.
5. Em uma variação, clique em **Renderizar em imagem** para transformá-la em imagem; ao concluir, a arte abre no cadastro para você revisar e salvar.

> A renderização em imagem acontece no servidor. Se o renderizador não estiver configurado, você verá um aviso amigável — nesse caso, fale com o responsável técnico.

### Publicar uma arte como post social

1. No cartão da arte, clique em **Publicar**.
2. Escolha a **Rede** (Facebook, Instagram, X/Twitter ou LinkedIn).
3. Ajuste o **Título** (opcional) e o **Conteúdo** do post (obrigatório).
4. Defina a data/hora em **Publicar em** (já vem preenchida com daqui a uma hora).
5. Clique em **Agendar publicação**.

> O que esse botão faz é **agendar** o post (registrar a rede, o conteúdo e a data/hora). A publicação efetiva na rede social é feita por uma integração externa; enquanto ela não estiver liberada/configurada para a sua conta, o post fica agendado, mas não sai automaticamente. Confirme com o responsável técnico se a publicação em redes já está ativa.

![Publicar como post social](/img/manual/crm/crm-estudio-artes-publicar.png)

### Excluir uma arte

1. No cartão, clique no ícone de **lixeira**.
2. Confirme. A arte é removida permanentemente da galeria.

### Definir a identidade visual (Brand Kit)

1. Clique em **Identidade visual**.
2. Preencha **Nome**, **Logo** e **Logo dark** (URLs), as **cores** (primária, secundária e de acento) e as **tipografias** (título e corpo).
3. Clique em **Salvar identidade**.

A identidade visual orienta as artes e variações geradas. Veja também a tela dedicada de [Brand Kit](crm-configuracoes-brand-kit.md).

## Dicas e observações

- A **URL da imagem** é obrigatória para salvar; gere uma com IA se não tiver uma pronta.
- Os recursos de IA (texto, imagem, variações) dependem da IA estar disponível. Quando indisponível, a tela exibe sugestões padrão ou um aviso, sem travar.
- Use o **filtro por leilão** para organizar as artes por campanha de divulgação.

## Veja também

- [Identidade visual (Brand Kit)](crm-configuracoes-brand-kit.md)
- [Gerador de marketing](marketing-gerador.md)
- [Campanhas](marketing-campanhas.md)
- [Campanhas Agendadas](crm-marketing-agendadas.md)
