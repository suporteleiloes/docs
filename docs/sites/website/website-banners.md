---
title: Banners e Popups
sidebar_position: 2
---

# Banners e Popups

Esta tela gerencia os **banners** (imagens promocionais exibidas em seções do site) e os **popups** (janelas que aparecem sobre o site, sempre em formato GIF). É aqui que você cadastra, agenda, ordena e desativa cada peça que aparece no site público.

## Como acessar

**Sites** → **Banners** (para banners) ou **Sites** → **Popups** (para popups). É a **mesma tela** nos dois casos — o que muda é apenas o filtro de tipo: ao abrir por **Popups**, o título passa a "Popups", o botão vira **Novo popup** e a lista mostra só popups.

![Banners e Popups](/img/manual/sites/website-banners.png)

## O que você vê nesta tela

No topo há três abas que filtram a lista e, abaixo, um campo de busca e a tabela.

### Abas

| Aba | O que mostra |
|---|---|
| Ativos | Peças marcadas como ativas e dentro do período de exibição (em exibição hoje). |
| Agendados | Peças com início de exibição no futuro. |
| Inativos | Peças marcadas como inativas ou com período de exibição já encerrado. |

> As abas combinam o campo **Ativo** (Sim/Não) com o **período de exibição**. Marcar **Ativo = Não** tira a peça da aba "Ativos" mesmo que a data ainda esteja em vigor.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| (alça de arraste) | Ícone para arrastar e reordenar os banners. |
| # | Número de identificação do banner. |
| Seção | Seção do site onde o banner aparece (quando informada). Este campo **não** é editável pelo formulário de cadastro/edição da peça nesta versão; aparece em branco (—) se não tiver sido definido. |
| Tipo | **Banner** ou **Popup**. |
| Banner | Miniatura da imagem (clique para abrir em tamanho cheio). |
| Resolução | Dimensões da imagem (ex.: 1200x400). |
| Descrição | Título do banner. |
| Posição | Ordem de exibição. |
| Exibição | Período de exibição (data de início — data de fim). |
| Ativo | **Sim** ou **Não**. |

## O que dá pra fazer aqui

### Cadastrar um novo banner ou popup

Os campos abaixo aparecem na janela de cadastro, nesta ordem:

1. Clique em **Novo banner** (ou **Novo popup**) no topo.
2. Preencha o **Título** (obrigatório) — serve para identificar a peça.
3. Informe a **Posição** (ordem em que aparece; número). Se deixar em branco, vale 0.
4. Escolha o **Tipo**: Banner ou Popup. (Ao abrir pelo menu de Popups, já vem como Popup.)
5. Preencha o **Link** — URL que abre quando o visitante clica na peça (opcional).
6. Defina **Início da exibição** e **Fim da exibição** (ambos obrigatórios — ver Regras de negócio).
7. Em **Ativo**, escolha **Sim** ou **Não** (obrigatório — não há valor padrão; sem escolher, o botão Cadastrar fica desabilitado).
8. Em **Sites**, marque em qual(is) site(s) a peça deve aparecer. Se deixar tudo desmarcado, ela aparece em **todos** os sites.
9. Ligue **Possui vídeo** se o link aponta para uma mídia/vídeo.
10. Clique na área de imagem para selecionar o arquivo:
    - **Banner**: qualquer imagem.
    - **Popup**: somente arquivo **GIF** (a animação é o ponto do popup) — o sistema valida a extensão **e** o tipo do arquivo; outro formato é recusado na hora.
11. Clique em **Cadastrar**.

> Não há campo **Seção** no formulário nesta versão (ele só aparece como coluna na lista).

![Cadastro de banner](/img/manual/sites/website-banners-novo.png)

### Editar um banner

1. Dê duplo clique na linha ou clique no ícone de **lápis**.
2. Altere os campos e clique em **Atualizar**.

### Reordenar banners

1. Na aba desejada, segure a **alça de arraste** (ícone de pontos) no início da linha.
2. Arraste a linha até a posição desejada e solte. A nova ordem é salva automaticamente.

### Excluir um banner

1. Clique no ícone de **lixeira** na linha.
2. Confirme. **A peça some da lista e não há como recuperá-la pela tela** — trate como exclusão definitiva.

## Regras de negócio

- **Datas obrigatórias**: tanto **Início** quanto **Fim** da exibição são obrigatórios. A data de fim é exigida porque o site usa esse intervalo para decidir o que está "em exibição agora"; sem ela, o cadastro é recusado.
- **Fim não pode ser antes do início**.
- **Início não pode estar no passado** ao criar uma peça nova (ou ao alterar a data de início de uma peça existente). Ao editar uma peça antiga sem mexer na data de início, a data já vencida é mantida — você consegue editar normalmente.
- **Ativo é obrigatório** e não tem padrão: é preciso escolher Sim ou Não.
- **Popup só aceita GIF**: a validação confere a extensão `.gif` e o tipo do arquivo (`image/gif`). Qualquer outro formato é recusado com aviso.
- **Sites em branco = todos**: deixar a lista de sites vazia faz a peça aparecer em todos os sites cadastrados.
- **Permissões**: cadastrar, editar, reordenar e excluir exigem as permissões de Banner (criar / atualizar / excluir). Sem elas, a ação é recusada.

## Impactos

- Banners e popups ativos e dentro do período aparecem no **site público de leilões**.
- A contagem de **Banners ativos** no [Painel de Sites](./sites-dashboard.md) usa as peças marcadas como ativas e em exibição agora.
- Se uma alteração não refletir no site, peça ao **slroot** para **apagar o cache** pelo Painel de Sites.

## Dicas e observações

- Ao **editar um popup**, a miniatura usada na pré-visualização é o GIF original, para preservar a animação.
- A coluna **Resolução** mostra as dimensões da imagem enviada; aparece "—" enquanto não houver imagem.

## Veja também

- [Painel de Sites](./sites-dashboard.md)
- [Páginas](./website-paginas.md)
