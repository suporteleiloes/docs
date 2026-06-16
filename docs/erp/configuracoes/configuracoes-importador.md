---
title: Importador
sidebar_position: 5
---

# Importador

O Importador traz dados de planilhas (CSV, XLSX ou JSON) para dentro do sistema. Ele guia você por quatro etapas: escolher o tipo de dado, enviar o arquivo, mapear cada coluna para um campo do sistema e acompanhar o processamento linha a linha.

## Como acessar

**Configurações** → **Sistema** → **Importador**.

![Importador](/img/manual/erp/configuracoes-importador.png)

## O que você vê nesta tela

A tela funciona como um assistente em quatro passos, indicados por uma barra de progresso: **1. Tipo → 2. Upload → 3. Mapear → 4. Migrar**. Na primeira tela também aparece o **Histórico de importações**, com as importações anteriores e seu status.

Tipos de importação disponíveis:

| Tipo | O que importa |
|---|---|
| Arrematantes | Cadastro de arrematantes |
| Pessoas | Cadastro de pessoas |
| Bens | Cadastro de bens |
| Lotes (de leilão) | Lotes vinculados a um leilão (exige informar o leilão) |
| Tabela FIPE | Tabela FIPE |

Os status que uma importação pode ter: **Pendente**, **Enviado**, **Em análise**, **Processando**, **Concluído** e **Erro**.

## O que dá pra fazer aqui

### Importar um arquivo (fluxo completo)

1. **Escolher o tipo** — na etapa 1, clique no cartão do tipo de dado (Arrematantes, Pessoas, Bens, Lotes ou Tabela FIPE) e clique em **Avançar**.
2. **Enviar o arquivo** — na etapa 2, se o tipo for **Lotes**, informe o **ID do leilão de destino**. Em seguida, clique ou arraste um arquivo **CSV, XLSX ou JSON** para a área indicada. Confira o nome e o tamanho do arquivo selecionado e clique em **Analisar arquivo**.
3. **Mapear as colunas** — na etapa 3, para cada coluna detectada no arquivo, escolha o **Campo do sistema** correspondente. O sistema já sugere a correspondência quando reconhece o nome da coluna. Deixe em **— ignorar —** as colunas que não devem ser importadas. A coluna *Exemplo* mostra um valor da primeira linha para ajudar.
4. **Aprovar e iniciar** — clique em **Aprovar e iniciar migração**. O sistema começa a processar.
5. **Acompanhar** — na etapa 4, veja o status de cada linha: sucesso, erro ou pendente, com a mensagem correspondente. A lista se atualiza sozinha a cada poucos segundos.

![Mapeamento de colunas](/img/manual/erp/configuracoes-importador-map.png)

### Abrir uma importação do histórico

Na etapa 1, clique sobre uma linha do **Histórico de importações**. Se ela já estiver concluída, em processamento ou com erro, você vai direto para o painel de status por linha; caso contrário, retoma na etapa de mapeamento.

### Cancelar uma migração

Durante a etapa de status, clique em **Cancelar migração** (canto superior) e confirme. A importação é marcada como cancelada — esta ação não pode ser desfeita.

### Iniciar uma nova importação

Na etapa de status, clique em **Nova importação** para recomeçar o assistente do zero.

## Dicas e observações

- Formatos aceitos: **CSV, XLSX, XLS e JSON**.
- Importar **Lotes** exige informar o **ID do leilão de destino** — os lotes serão criados nesse leilão.
- O botão **Voltar** retrocede uma etapa por vez.
- Linhas que falharem aparecem destacadas com a mensagem do erro, para você corrigir o arquivo e tentar de novo.

## Veja também

- [Controle de RGI](gestao-controle-rgi.md)
- [Fila de mensagens (Messenger)](configuracoes-fila-mensagens.md)
