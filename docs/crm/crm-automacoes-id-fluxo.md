---
title: Fluxo da automação
sidebar_position: 3
---

# Fluxo da automação

Esta é a tela onde você desenha, visualmente, o que uma automação faz: a partir de um evento (gatilho), aplica condições e executa ações (enviar template, criar tarefa, adicionar tag, etc.). É um editor de fluxograma — você monta o caminho arrastando blocos e ligando-os.

## Como acessar
**CRM** → **Automações** → clique em uma automação da lista → botão **Fluxo** (ou abra a automação e vá para a aba/ação de editar o fluxo). A URL termina em `/fluxo`.

![Fluxo da automação](/img/manual/crm/crm-automacoes-fluxo.png)

## O que você vê nesta tela

No topo: o nome da automação, um botão **Voltar** e um botão para **Ativar / Desativar** a automação.

O editor tem três áreas:

| Área | O que é |
|---|---|
| Paleta (esquerda) | Os blocos disponíveis: Blocos (Condição, Espera, Decisão IF/ELSE) e Ações (Enviar template, Adicionar tag, Criar tarefa, Notificar operador, Atualizar campo, Webhook). |
| Canvas (centro) | A tela onde o fluxo é montado. Sempre começa pelo bloco **Gatilho**. |
| Inspetor (direita) | Aparece quando você clica num bloco; ali você configura os detalhes dele. |

Na barra do editor há ainda um indicador de **Válido / X erro(s)**, o botão **Testar (dry-run)** e o botão **Salvar fluxo**.

### Tipos de bloco
- **Gatilho** (verde): o evento que dispara tudo (ex.: pessoa criada, lance dado, habilitação pendente). É único e fica no início.
- **Condição** (azul): filtra antes de agir, comparando campos da pessoa. Aceita várias linhas combinadas em "E".
- **Ação** (roxo): o que será feito (enviar template, atualizar campo, etc.).
- **Espera** (amarelo): aguarda um tempo (horas ou dias) antes de seguir.
- **Decisão IF/ELSE** (laranja): ramifica o fluxo em dois caminhos, SIM e NÃO.

## O que dá pra fazer aqui

### Montar o fluxo
1. Clique no bloco **Gatilho** e escolha o **Evento gatilho** no inspetor à direita.
2. Arraste um bloco da paleta para o canvas (ou clique nele para adicioná-lo já conectado ao último bloco).
3. Clique em cada bloco e preencha a configuração no inspetor.
4. Para ligar blocos manualmente, arraste de uma alça (ponto) de um bloco até outro. Em um bloco de decisão, a saída da esquerda é SIM e a da direita é NÃO.
5. Para remover um bloco, selecione-o e clique em **Remover nó** (o gatilho não pode ser removido).

### Configurar uma condição
1. Clique no bloco **Condição**.
2. Escolha **Campo**, **Operador** e **Valor**. Para operadores de lista (em / não em), separe os valores por vírgula.
3. Clique em **Adicionar condição** para incluir mais linhas — todas precisam bater (E).

### Configurar uma ação
1. Clique no bloco de ação e preencha os campos conforme o tipo. Exemplos: "Enviar template" exige escolher um template; "Adicionar tag" exige a tag; "Webhook" exige a URL.

### Testar antes de ativar (dry-run)
1. Clique em **Testar (dry-run)**.
2. Informe um **ID de pessoa** para simular (ou deixe em branco para usar o contexto padrão).
3. Veja o resultado: quantas ações seriam executadas, ignoradas (por condição/quota/opt-out) ou com erro. Nada é enviado de verdade no dry-run.

### Salvar e ativar
1. Confira o indicador de validação na barra — ele lista os erros se houver.
2. Clique em **Salvar fluxo**.
3. Use o botão **Ativar** no topo para a automação passar a rodar de verdade.

## Dicas e observações
- O indicador **X erro(s)** mostra exatamente o que falta (ex.: "Ação enviar template exige um template"). Corrija antes de salvar.
- O conector "OU" entre condições é apenas visual por enquanto: o motor ainda avalia tudo como "E" (todas precisam bater).
- Sempre faça um dry-run antes de ativar para não disparar mensagens indevidas.

## Veja também
- [Construtor de fluxos de bot](./crm-automacoes-workflow-bot.md)
- [Biblioteca de Mensagens](./crm-biblioteca-mensagens.md)
