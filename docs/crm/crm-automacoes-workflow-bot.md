---
title: Construtor de fluxos de bot
sidebar_position: 4
---

# Construtor de fluxos de bot

Aqui você monta fluxos de conversa para o bot do chat: o bot fala, faz perguntas, oferece menus de opções, decide caminhos conforme as respostas e, quando preciso, passa a conversa para um atendente humano ou entrega para o bot de IA. É um construtor visual com simulador embutido.

## Como acessar
**CRM** → **Automações** → **Construtor de fluxos de bot** (URL `/crm/automacoes/workflow-bot`).

![Construtor de fluxos de bot](/img/manual/crm/crm-automacoes-workflow-bot.png)

## O que você vê nesta tela

À esquerda, a **lista de fluxos** já criados (cada item mostra o canal e quantos passos tem, com uma bolinha verde quando está ativo). À direita, o **editor** do fluxo selecionado.

Acima do editor, uma barra de configuração com:

| Elemento | O que é |
|---|---|
| Ativo / Inativo | Liga ou desliga o fluxo no canal. |
| Canal | Em qual canal o fluxo roda: Qualquer, Webchat (site), WhatsApp, Facebook ou Instagram. |
| Excluir | Remove o fluxo. |

O editor em si tem a **paleta de passos** (esquerda), o **canvas** (centro) e o **inspetor** (direita), além dos botões **Simular** e **Salvar fluxo**.

### Tipos de passo do bot
- **Mensagem**: o bot fala um texto.
- **Pergunta**: o bot pergunta e guarda a resposta numa variável.
- **Menu de opções**: oferece uma escolha numerada; cada opção tem sua própria saída.
- **Condição**: ramifica em SIM/NÃO conforme uma variável coletada.
- **Ação**: dispara tag, tarefa, notificação ou atualização de campo.
- **Escalar humano**: encerra o bot e passa para o atendimento humano.
- **Bot IA (LLM)**: entrega a conversa para o bot de IA (RAG).
- **Fim**: encerra o fluxo.

## O que dá pra fazer aqui

### Criar um fluxo
1. Clique em **+ Novo fluxo**.
2. Dê um **nome** ao fluxo.
3. O fluxo nasce com um modelo mínimo (boas-vindas → escalar). Ajuste a partir dele.

### Montar o fluxo
1. Conecte o bloco **Início** ao primeiro passo.
2. Arraste passos da paleta para o canvas (ou clique para adicioná-los).
3. Clique em cada passo e configure no inspetor (texto da mensagem, variável da pergunta, opções do menu, etc.).
4. Ligue os passos arrastando das alças. Em **Condição**, a saída esquerda é SIM e a direita é NÃO; em **Menu de opções**, cada opção tem uma saída própria.
5. Para remover um passo, selecione-o e clique em **Remover passo** (o Início não pode ser removido).

### Configurar canal e ativação
1. Escolha o **Canal** na barra de configuração.
2. Clique no botão de status para deixar o fluxo **Ativo**. Quando ativo, ele roda no canal escolhido **antes** do bot de IA. Sem fluxo ativo, o bot de IA responde normalmente.

### Simular a conversa
1. Clique em **Simular** (no editor) — abre o painel de simulação no canto.
2. Digite as **falas do cliente**, uma por linha.
3. Clique em **Rodar simulação**.
4. Veja a **transcrição** da conversa, o **status final** (Concluído, Escalado para humano, Entregue ao bot IA, Aguardando resposta do cliente, Interrompido por loop) e as variáveis coletadas. A simulação não toca o chat real nem o histórico.

### Salvar e excluir
- Clique em **Salvar fluxo** para persistir (corrija os erros indicados antes).
- Clique em **Excluir** na barra de configuração para remover o fluxo (não pode ser desfeito).

## Regras de negócio e segurança
- **Ativação por canal:** quando um fluxo está **Ativo** num canal, ele roda **antes** do bot de IA naquele canal. Se nenhum fluxo ativo casar com o canal, o bot de IA (RAG) responde normalmente. Não é destrutivo: desligar o fluxo simplesmente devolve a conversa ao bot de IA.
- **Validação ao salvar:** o sistema valida o grafo de passos antes de salvar — cada passo precisa de um identificador único e de um tipo conhecido. Fluxos incompletos (em construção) são tolerados; só inconsistências grosseiras (id duplicado, tipo inválido, passo sem id) bloqueiam o salvamento.
- **Proteção anti-loop:** se um cliente ficar preso (erro de digitação repetido, beco sem saída ou loop), o fluxo encerra automaticamente e cai no fallback — entrega ao bot de IA ou escala para humano —, evitando travar a conversa.

## Permissões
O acesso é controlado por permissões (ACL) do perfil, reaproveitando as permissões de automação do CRM:

- **Ver e simular** fluxos: permissão de visualização de automações.
- **Criar, editar, ativar e excluir** fluxos: permissão de edição de automações.

## Dicas e observações
- O simulador permite testar até alterações ainda não salvas — use sempre antes de ativar.
- Em mensagens e perguntas você pode usar placeholders como `var.x` (variáveis coletadas) e `pessoa.name`.
- Um passo "Escalar humano" deixa a conversa em "aguardando humano"; "Bot IA (LLM)" entrega a conversa para o assistente de IA.

## Veja também
- [Fluxo da automação](./crm-automacoes-id(\\d+)-fluxo.md)
- [Base de Conhecimento](./crm-configuracoes-conhecimento.md)
- [Widgets do site (chat)](./crm-configuracoes-widget.md)
