---
title: Widgets do site (chat)
sidebar_position: 1
---

# Widgets do site (chat)

Esta tela gerencia os widgets de chat que você pode embutir em sites externos (seu site institucional, uma página de leilão, etc.). Cada widget tem um endereço (slug) próprio e gera um snippet de instalação que você cola no site. Os visitantes passam a falar com você (ou com o bot) por uma janelinha de chat no canto da página.

## Pré-requisitos

- Permissão **Ver configurações do CRM** (`CRM_CONFIG_VER`) para abrir e listar os widgets; **Editar configurações do CRM** (`CRM_CONFIG_EDITAR`) para criar, editar ou excluir.
- Acesso de edição ao site onde o widget será instalado (você cola o snippet no HTML do site).
- Para que o bot responda sozinho, o **comportamento do bot** precisa estar configurado em **Configurar comportamento do bot** (persona, mensagens e RAG). Sem isso, o widget funciona apenas como canal de atendimento humano.

## Como acessar
**CRM** → **Configurações** → **Widgets do site (chat)**.

![Widgets do site (chat)](/img/manual/crm/crm-configuracoes-widget.png)

## O que você vê nesta tela

No topo há o botão **+ Novo widget** e um atalho para **Configurar comportamento do bot** (persona, mensagens, RAG e regras de transferência para humano — esse comportamento é compartilhado por todos os canais).

Abaixo, um campo de busca por nome ou slug e a lista de widgets já criados.

| Coluna / Elemento | O que é |
|---|---|
| Nome | Nome **interno** do widget (não aparece para o visitante; serve para você identificá-lo na lista). Se não houver nome, mostra o slug. |
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
2. Preencha **Nome (interno)** (ex.: "Site principal") — obrigatório.
3. Confira o **Slug (chave pública)** — obrigatório. É gerado a partir do nome, mas você pode ajustar. Use apenas letras minúsculas, números e hífens. **Depois de criado, o slug não pode mais ser alterado** (ele vira parte do endereço público e do snippet já instalado).
4. Escolha a **Cor primária** e a **Cor secundária** (acento / gradiente). O padrão é azul (`#1A4DB3`) e dourado (`#C8A24B`).
5. Use as chaves **Widget ativo** e **Bot responde automaticamente** conforme desejar. Com o widget inativo, ele não carrega no site; com o bot desligado, as conversas vão direto para atendimento humano.
6. Configure o visual do Messenger: **Tema** (Escuro / Claro / Automático), **Posição na tela** (Direita / Esquerda), **Nome exibido no topo** e **Saudação** da aba Início.
7. Em **Abas habilitadas**, ligue/desligue: Início, Mensagens, Ajuda e Novidades.
8. Defina o **Horário de atendimento** (dias da semana, hora de início, hora de fim e a mensagem exibida fora do horário) e os **domínios autorizados** a carregar o widget. **Deixar a lista de domínios vazia libera qualquer origem** — preencha para restringir aos sites que você controla.
9. Clique em **Salvar**. O painel **Como instalar** abre automaticamente para esse widget.

> Campos como avatar, logo e botões rápidos existem na configuração avançada do widget (via API), mas não estão expostos neste formulário. Para ajustá-los, fale com o suporte.

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

## Erros comuns

| Situação | Causa provável | O que fazer |
|---|---|---|
| "Já existe widget com este slug" ao salvar | O slug precisa ser único na sua conta. | Escolha outro slug. |
| Slug recusado | Caracteres não permitidos (acentos, espaços, maiúsculas). | Use apenas letras minúsculas, números e hífens. |
| Widget não aparece no site | Widget inativo, snippet colado no lugar errado, ou domínio do site fora da lista de domínios autorizados. | Confira a chave **Widget ativo**, cole o snippet antes de `</body>` e inclua o domínio na lista (ou deixe a lista vazia). |
| Preview mostra "Widget não encontrado" | O widget acabou de ser criado e o cache ainda não atualizou. | Recarregue a pré-visualização. |
| Bot não responde | A chave **Bot responde automaticamente** está desligada, ou o comportamento do bot não foi configurado. | Ligue a chave e configure em **Configurar comportamento do bot**. |

## Dicas e observações
- O slug é definitivo: pense bem no nome antes de criar, pois ele vira parte do endereço público.
- A configuração de comportamento do bot (o que ele responde, quando transfere para um humano) é separada e fica em **Configurar comportamento do bot**, pois vale para todos os canais.
- Restrinja os domínios autorizados para que o widget só carregue nos sites que você controla.

## Veja também
- [Base de Conhecimento](./crm-configuracoes-conhecimento.md)
- [Construtor de fluxos de bot](./crm-automacoes-workflow-bot.md)
