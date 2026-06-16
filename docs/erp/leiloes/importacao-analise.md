---
title: Importação com análise
sidebar_position: 6
---

# Importação com análise

Esta é a versão em duas etapas da importação por planilha. Primeiro você **analisa** o arquivo e vê uma pré-visualização — o sistema indica, linha a linha, se o bem já existe e qual ação vai tomar. Só depois você **confirma** e os lotes são criados. É a forma mais segura de importar, porque você revê tudo antes de gravar.

## Como acessar

**Leilões** → abra um leilão → aba **Preparação** → **Importação com análise**.

![Importação com análise](/img/manual/erp/importacao-analise.png)

## O que você vê nesta tela

No cabeçalho há um indicador das duas etapas: **1. Analisar** e **2. Confirmar**. Ele mostra em que ponto do processo você está.

Os blocos da tela:

1. **Comitente (opcional)** — para vincular os bens importados a um comitente.
2. **Área de upload** do arquivo (mesmas colunas do modelo da importação simples).
3. **Mapeamento de colunas** (quando o sistema lê os cabeçalhos do arquivo).
4. **Pré-visualização** — a tabela com o resultado da análise.

### Tabela de pré-visualização

| Coluna | O que é |
|---|---|
| Linha | Número da linha no arquivo |
| Descrição | Descrição do bem lido |
| Placa | Placa do bem, quando houver |
| Encontrado | Indica "Sim" se o bem já existe no sistema |
| Ação | O que será feito com a linha |

Resumo no topo da pré-visualização: total de linhas analisadas, quantos bens foram encontrados, quantos são novos e quantos erros.

## O que dá pra fazer aqui

### Etapa 1 — Analisar

1. (Opcional) Selecione um **Comitente**.
2. Clique na área de upload e escolha o arquivo (XLSX, XLS ou CSV).
3. Confira o **Mapeamento de colunas**, se aparecer, e ajuste o que for preciso.
4. Clique em **Analisar arquivo**.
5. A **Pré-visualização** abre com a análise de cada linha.

### Etapa 2 — Revisar e confirmar

1. Para cada linha, escolha a **Ação** na lista:
   - **Criar novo bem** — cadastra um bem novo.
   - **Usar existente** — aproveita o bem já encontrado no sistema.
   - **Ignorar linha** — não importa essa linha.
2. Se houver divergências, você pode baixar a lista delas em **Baixar erros (XLSX)**.
3. Clique em **Confirmar e importar** e confirme. Ao final, o sistema avisa quantos lotes foram importados.

### Cancelar

- Clique em **Cancelar** para descartar a análise e começar de novo.

## Dicas e observações

- As linhas marcadas com erro não são importadas.
- O sistema sugere automaticamente uma ação por linha (usar existente quando o bem foi encontrado, criar quando é novo); você pode mudar antes de confirmar.
- Se quiser importar de forma direta, sem a etapa de revisão, use a [Importação por planilha](./importacao-planilha.md).

## Veja também

- [Importação por planilha](./importacao-planilha.md)
- [Importação por webservice](./importacao-webservice.md)
- [Loteamento rápido](./loteamento-rapido.md)
- [Lotes do leilão](./lotes.md)
