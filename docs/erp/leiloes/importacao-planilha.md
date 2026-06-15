---
title: Importação por planilha
sidebar_position: 5
---

# Importação por planilha

Esta tela permite adicionar muitos lotes de uma vez subindo uma planilha (XLSX ou CSV). Cada linha válida do arquivo vira um lote no leilão. É a forma mais rápida de carregar um leilão grande a partir de uma lista pronta.

## Como acessar

**Leilões** → abra um leilão → aba **Preparação** → **Importação por planilha**.

![Importação por planilha](/img/manual/erp/importacao-planilha.png)

## O que você vê nesta tela

A tela é dividida em blocos:

1. **Cabeçalho** com o botão **Baixar modelo** e a lista das colunas esperadas.
2. **Comitente (opcional)** — para vincular os bens importados a um comitente.
3. **Área de upload** do arquivo.
4. **Mapeamento de colunas** (aparece quando o sistema consegue ler os cabeçalhos do arquivo).
5. **Resultado** da importação, com a contagem de sucessos e a lista de erros.

### Colunas esperadas

As colunas marcadas com asterisco (\*) são obrigatórias.

| Coluna | Obrigatória |
|---|---|
| Número do Lote | Não |
| Descrição | Sim |
| Placa, Chassi, Renavam | Não |
| Marca, Modelo | Não |
| Ano Fabricação, Ano Modelo | Não |
| Cor | Não |
| Valor Avaliação (R$) | Sim |
| Valor Inicial (R$) | Não |
| Valor 2º Leilão (R$), Valor 3º Leilão (R$) | Não |
| Venda Mínima (R$) | Não |
| Incremento (R$) | Não |
| Sublote de (nº lote pai) | Não |
| Observação | Não |

## O que dá pra fazer aqui

### Baixar o modelo

- Clique em **Baixar modelo** para baixar uma planilha de exemplo (CSV) com todas as colunas e duas linhas de exemplo — incluindo um lote pai e um sublote.

### Importar uma planilha

1. (Opcional) Em **Comitente**, busque e selecione um comitente para vincular os bens importados.
2. Clique na área de upload e escolha o arquivo (XLSX, XLS ou CSV).
3. Se o sistema conseguir ler os cabeçalhos (caso comum em CSV), o bloco **Mapeamento de colunas** aparece, já mapeando automaticamente cada coluna do arquivo para um campo do sistema.
4. Confira o mapeamento. Para corrigir, escolha o campo correto na lista ao lado de cada coluna; colunas sem campo (`— ignorar —`) não serão importadas.
5. Se você ajustou manualmente e quer voltar ao automático, clique em **Re-aplicar auto-mapeamento**.
6. Clique em **Importar arquivo** e confirme.
7. Acompanhe a barra de progresso. Ao final, o bloco **Resultado** mostra quantos lotes foram importados e lista as linhas com erro, se houver.

### Trocar o arquivo

- Clique em **Remover** ao lado do arquivo escolhido para selecionar outro.

## Dicas e observações

- A coluna **Sublote de (nº lote pai)** permite criar sublotes: indique nela o número do lote pai.
- O mapeamento automático reconhece variações de nome de cabeçalho (por exemplo, "avaliação", "valor avaliacao"). Mesmo assim, sempre confira antes de importar.
- Em arquivos XLSX o sistema pode não exibir o mapeamento na tela; nesse caso o próprio servidor identifica as colunas pelos cabeçalhos.
- Se precisar revisar antes de gravar, use a [Importação com análise](./importacao-analise.md), que mostra uma pré-visualização.

## Veja também

- [Importação com análise](./importacao-analise.md)
- [Importação por webservice](./importacao-webservice.md)
- [Loteamento rápido](./loteamento-rapido.md)
- [Lotes do leilão](./lotes.md)
