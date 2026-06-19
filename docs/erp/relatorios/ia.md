---
title: Relatórios com IA
sidebar_position: 2
---

# Relatórios com IA

Esta tela deixa você pedir um relatório **em português, como uma pergunta**. A IA entende o que você quer, monta a consulta, executa nos seus dados e devolve o resultado em tabela — sem você precisar saber nada de técnica. A consulta é sempre **somente leitura**: a IA nunca altera, cria ou apaga dados.

## Como acessar

**ERP** → **Relatórios** → **Relatórios com IA**.

![Relatórios com IA](/img/manual/erp/ia.png)

## O que você vê nesta tela

| Área | O que é |
|---|---|
| Caixa de pergunta | Campo grande onde você digita a pergunta em português (ex.: "quantos lotes existem em cada status?"). |
| Botão **Gerar relatório** | Envia a pergunta para a IA processar. |
| Sugestões (chips) | Botões com perguntas de exemplo. Clique em um deles para já gerar aquele relatório na hora. |
| Explicação | Frase em que a IA resume o que entendeu da sua pergunta. |
| **SQL gerado** | Mostra a consulta técnica que a IA montou, mais o número de linhas retornadas e o tempo que levou. Serve para conferência; você não precisa entender. |
| Tabela de resultados | O resultado da consulta, com as colunas que a IA escolheu. |
| Botão **Exportar CSV** | Aparece no topo quando há resultado. Baixa a tabela em arquivo CSV (abre no Excel). |

## O que dá pra fazer aqui

### Gerar um relatório a partir de uma pergunta

1. Digite sua pergunta na caixa de texto. Seja direto, como você falaria com um colega (ex.: "Top 10 arrematantes por valor total arrematado").
2. Clique em **Gerar relatório**. (Atalho: pressione **Ctrl+Enter**, ou **Cmd+Enter** no Mac.)
3. Aguarde alguns instantes. A IA mostra a explicação, a consulta gerada e a tabela com o resultado.
4. Se a consulta não retornar nada, aparece a mensagem **Sem resultados**.

### Usar uma pergunta de exemplo

1. Clique em uma das sugestões abaixo da caixa de pergunta.
2. A pergunta é preenchida e o relatório é gerado automaticamente.

Exemplos disponíveis: "Quantos lotes existem em cada status?", "Top 10 arrematantes por valor total arrematado", "Total de receitas e despesas do financeiro" e "Quantos leilões foram criados por mês em 2026?".

### Exportar o resultado para Excel/CSV

1. Gere um relatório que retorne linhas.
2. Clique em **Exportar CSV** no canto superior direito.
3. O arquivo `relatorio-ia.csv` é baixado. Abra-o no Excel ou em outra planilha.

## Regras e limites

- **Somente leitura, garantida.** A IA só pode gerar consultas do tipo `SELECT`. O sistema bloqueia automaticamente qualquer comando que altere dados (INSERT, UPDATE, DELETE, DROP, ALTER etc.) — não há como a IA modificar a operação.
- **Resultado limitado a 500 linhas.** Mesmo que a consulta encontre mais, a tabela e o CSV trazem no máximo 500 linhas. Para recortes maiores, refine a pergunta (período, status, agrupamento).
- **Tentativa automática de correção.** Se o primeiro SQL der erro no banco, a IA tenta corrigir e executar de novo uma vez antes de desistir.
- **Tempo de execução limitado.** Consultas muito pesadas são interrompidas pelo banco (limite de alguns segundos). Se isso acontecer, simplifique a pergunta.
- **Apenas dados da sua leiloeira.** A consulta roda sempre no banco do seu próprio ERP — você nunca vê dados de outra leiloeira.
- **Permissão.** Disponível para usuários do ERP (e perfis administrativos). Cada pergunta fica registrada para auditoria interna.
- **Pré-requisito de configuração.** A IA precisa estar habilitada na conta. Se aparecer "IA não configurada", fale com o suporte da Suporte Leilões.

## Dicas e observações

- Se a pergunta ficar ambígua, reformule de forma mais específica (cite o período, o status, o que quer agrupar).
- Quando algo dá errado, aparece uma mensagem de erro em vermelho (às vezes acompanhada do SQL gerado, para conferência). Tente reescrever a pergunta de forma mais simples.
- O CSV exportado usa **ponto e vírgula** como separador (abre direto no Excel em português).
- Para análises que você repete sempre, considere criar um [Relatório Dinâmico](./dinamicos.md), que fica salvo e pode ser reexecutado quando quiser.

## Veja também

- [Relatórios Dinâmicos](./dinamicos.md)
- [Módulo de Relatórios](./relatorios.md)
