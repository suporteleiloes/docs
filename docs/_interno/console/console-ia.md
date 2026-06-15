---
title: Consulta assistida (IA)
sidebar_position: 16
---

# Consulta assistida (IA)

Ferramenta que deixa você **fazer perguntas em português** sobre os dados da operação e receber a resposta sem saber escrever consultas técnicas. A IA interpreta sua pergunta, monta a consulta, executa e mostra o resultado em tabela. É uma ferramenta **somente de leitura e auditada** — não altera nenhum dado.

## Como acessar

**Console** → **IA Operacional** → **Consulta assistida** (rota `/console/ia`).

![Consulta assistida (IA)](/img/manual/_interno/console-ia.png)

## O que você vê nesta tela

No topo, o título e um aviso destacado lembrando que esta é a consulta **somente leitura, auditada**: a IA gera apenas consultas de leitura (com limite de linhas e tempo) e cada pergunta fica registrada na auditoria.

Abaixo há:

- Uma **caixa de texto** para escrever sua pergunta e o botão **Executar**.
- **Sugestões prontas** (chips) com exemplos de perguntas, como "Quantos lotes existem em cada status?" ou "Top 5 arrematantes por valor total arrematado".

Depois de executar, aparece a área de resultado com:

| Parte do resultado | O que é |
|---|---|
| **Explicação** | Texto em português explicando o que a consulta fez (quando disponível). |
| **SQL gerado** | A consulta que a IA montou, com o número de linhas e o tempo que levou. |
| **Tabela de resultados** | Os dados retornados, em colunas. |

## O que dá pra fazer aqui

### Fazer uma pergunta

1. Digite sua pergunta em português na caixa de texto (ex.: "quantos lotes existem em cada status?").
2. Clique em **Executar** — ou pressione **Ctrl+Enter** (ou **Cmd+Enter** no Mac).
3. Aguarde: a IA monta a consulta, executa e exibe a explicação, a consulta gerada e a tabela com o resultado.

### Usar uma pergunta de exemplo

Clique em qualquer um dos **chips de sugestão**. A pergunta é preenchida e executada automaticamente — ótimo ponto de partida para entender como perguntar.

### Quando a consulta falha

Se algo der errado, aparece um aviso "A consulta falhou" com a explicação. Em alguns casos, a tela ainda mostra a consulta que a IA tentou montar, o que ajuda a reformular a pergunta.

## Dicas e observações

- A IA **nunca altera dados**: ela só consulta. Operações que modificam algo ficam em outras telas da IA Operacional (Operações e Aprovações).
- Toda consulta fica **registrada na auditoria** — há rastreabilidade de quem perguntou o quê.
- Quanto mais específica a pergunta (período, status, quantidade), melhor o resultado. Use os exemplos como modelo.
- Esta é uma tela interna (Console da gerência) restrita ao administrador máximo (ROLE_ROOT).

## Veja também

- [Monitor de Crons](./console-crons.md)
- [Saúde dos Tenants](./console-saude.md)
