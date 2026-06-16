---
title: Widgets do site (chat)
sidebar_position: 1
---

# Widgets do site (chat)

Esta tela gerencia os widgets de chat que você pode embutir em sites externos (seu site institucional, uma página de leilão, etc.). Cada widget tem um endereço (slug) próprio e gera um snippet de instalação que você cola no site. Os visitantes passam a falar com você (ou com o bot) por uma janelinha de chat no canto da página.

## Como acessar
**CRM** → **Configurações** → **Widgets do site (chat)**.

![Widgets do site (chat)](/img/manual/crm/crm-configuracoes-widget.png)

## O que você vê nesta tela

No topo há o botão **+ Novo widget** e um atalho para **Configurar comportamento do bot** (persona, mensagens, RAG e regras de transferência para humano — esse comportamento é compartilhado por todos os canais).

Abaixo, um campo de busca por nome ou slug e a lista de widgets já criados.

| Coluna / Elemento | O que é |
|---|---|
| Nome | Nome amigável do widget (ou o slug, se não tiver nome). |
| Selo Ativo / Inativo | Indica se o widget está funcionando. |
| Selo Bot | Aparece quando o bot responde automaticamente nesse widget. |
| `/widget/{slug}` | O endereço público do widget. |
| Bolinha colorida | A cor primária escolhida para o widget. |
| Como instalar | Abre o painel com o snippet e a pré-visualização. |
| Editar | Abre o formulário de configuração. |
| Excluir | Remove o widget. |

## O que dá pra fazer aqui

### Criar um novo widget
1. Clique em **+ Novo widget**.
2. Preencha **Nome** (ex.: "Site principal").
3. Confira o **Slug** — é gerado a partir do nome, mas você pode ajustar. Use apenas letras minúsculas, números e hífens. Depois de criado, o slug não pode mais ser alterado.
4. Escolha a **Cor primária** e a **Cor secundária** (acento / gradiente).
5. Use as chaves **Widget ativo** e **Bot responde automaticamente** conforme desejar.
6. Configure o visual do Messenger: **Tema**, **Posição na tela**, **Nome exibido no topo** e **Saudação** da aba Início.
7. Em **Abas habilitadas**, ligue/desligue: Início, Mensagens, Ajuda e Novidades.
8. Defina o **Horário de atendimento** (dias, início, fim e a mensagem exibida fora do horário) e os **domínios autorizados** a carregar o widget.
9. Clique em **Salvar**. O painel **Como instalar** abre automaticamente para esse widget.

### Instalar o widget no seu site
1. Na lista, clique em **Como instalar** no widget desejado.
2. Clique em **Copiar** para copiar o snippet.
3. Cole o snippet logo antes de `</body>` em todas as páginas do site.
4. Confira a **Pré-visualização** ao lado — ela mostra a página pública do widget. Se aparecer "Widget não encontrado", o widget pode ter acabado de ser criado; recarregue.

### Editar um widget
1. Clique em **Editar** na linha do widget.
2. Ajuste os campos e clique em **Salvar**.

### Excluir um widget
1. Clique em **Excluir**.
2. Confirme. Atenção: o loader instalado nos sites para de funcionar imediatamente após a remoção.

## Dicas e observações
- O slug é definitivo: pense bem no nome antes de criar, pois ele vira parte do endereço público.
- A configuração de comportamento do bot (o que ele responde, quando transfere para um humano) é separada e fica em **Configurar comportamento do bot**, pois vale para todos os canais.
- Restrinja os domínios autorizados para que o widget só carregue nos sites que você controla.

## Veja também
- [Base de Conhecimento](./crm-configuracoes-conhecimento.md)
- [Construtor de fluxos de bot](./crm-automacoes-workflow-bot.md)
