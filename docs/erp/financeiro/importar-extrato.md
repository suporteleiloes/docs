---
title: Importar extrato bancário
sidebar_position: 2
---

# Importar extrato bancário

Esta tela traz para o ERP, de uma só vez, as movimentações do extrato do seu banco. Você envia o arquivo (OFX ou CSV) baixado do internet banking, revisa as transações encontradas e confirma a importação. Assim você evita digitar lançamento por lançamento e mantém o extrato do sistema em dia.

## Como acessar

**Financeiro** → **Importar extrato**.

![Importar extrato bancário](/img/manual/erp/importar-extrato.png)

## O que você vê nesta tela

A importação é guiada por um **passo a passo (stepper)** com três etapas, mostradas no topo: **Upload**, **Preview** e **Resumo**. Você avança de uma para a outra conforme conclui cada parte. A qualquer momento (a partir da etapa 2) o botão **Recomeçar**, no topo, zera tudo e volta para o início.

### Etapa 1 — Upload

| Campo | O que é |
|---|---|
| **Conta bancária** | A conta do ERP onde as transações serão lançadas. Obrigatório. |
| **Formato** | **OFX** (arquivos `.ofx` / `.qfx`) ou **CSV** (`.csv` / `.txt`). O sistema tenta detectar pelo nome do arquivo. |
| **Categoria padrão (opcional)** | Categoria financeira aplicada a todas as transações importadas. Pode deixar em **"Não definir (categorizar depois)"** e classificar conta a conta mais tarde. |
| **Área de envio (dropzone)** | Onde você arrasta o arquivo ou clica para selecioná-lo. Aceita OFX, QFX, CSV e TXT. |

### Etapa 2 — Preview (revisar transações)

Mostra, em tabela, as transações lidas do arquivo, com um resumo no topo: total encontrado, quantas são **possíveis duplicadas**, quantas estão **selecionadas** e a soma das selecionadas.

| Coluna | O que é |
|---|---|
| (caixa de seleção) | Marca/desmarca a transação para importação. |
| **Data** | Data da transação. |
| **Descrição** | Texto da transação. **Editável** antes de importar. |
| **Documento** | Número do documento, se houver. **Editável**. |
| **Valor** | Valor da transação. **Editável**. Verde para entradas, vermelho para saídas. |
| **Status** | Etiqueta: **Entrada**, **Saída** ou **Duplicada**. |

### Etapa 3 — Resumo

Tela final de confirmação, com três indicadores: **Importadas**, **Duplicadas (ignoradas)** e **Erros**. Se houver erros, há um item **"Ver detalhes dos erros"** que lista cada falha.

## O que dá pra fazer aqui

### Importar um extrato (fluxo completo)

1. Em **Conta bancária**, escolha a conta que receberá os lançamentos.
2. Confira o **Formato** (OFX ou CSV). Se você enviar o arquivo primeiro, o sistema costuma acertar o formato sozinho.
3. (Opcional) Escolha uma **Categoria padrão** para já classificar tudo.
4. Arraste o arquivo para a área pontilhada ou clique nela e selecione o arquivo. O nome e o tamanho aparecem quando o arquivo é aceito.
5. Clique em **Pré-visualizar**. (O botão só fica disponível com arquivo, conta e formato definidos.)
6. Na etapa **Preview**, revise a lista. As transações **possíveis duplicadas** já vêm **desmarcadas** — só marque se realmente quiser importá-las.
7. Ajuste o que precisar: corrija **Descrição**, **Documento** ou **Valor** direto na tabela; use **Marcar todas** / **Desmarcar todas** ou a caixa no cabeçalho para selecionar em lote.
8. Clique em **Importar N transações** (N é a quantidade selecionada).
9. Na etapa **Resumo**, confira quantas foram **Importadas**, **Duplicadas (ignoradas)** e quantos **Erros** houve.
10. Daí você pode clicar em **Ver extrato** para conferir os lançamentos na conta, ou em **Importar outro arquivo** para recomeçar.

### Revisar e corrigir antes de gravar

- As colunas **Descrição**, **Documento** e **Valor** são editáveis na etapa Preview. Ajuste-as antes de importar; o que você gravar é o que ficará no extrato.
- Para deixar de fora uma transação (por exemplo, uma transferência interna), basta **desmarcar** a caixa dela.

### Recomeçar

- Clique em **Recomeçar** (topo) para limpar o arquivo, as transações e voltar à etapa 1. Útil se você escolheu a conta ou o arquivo errado.

## Dicas e observações

- **Duplicadas:** o sistema identifica transações que provavelmente já existem no extrato e as marca como **Duplicada**, deixando-as desmarcadas por padrão. Isso evita lançar o mesmo valor duas vezes. Confirme antes de marcá-las manualmente.
- Só aparecem na lista de **Conta bancária** as contas **ativas** cadastradas em [Contas Bancárias](./cadastro-bancos.md). Cadastre a conta antes de importar.
- Se o arquivo não tiver transações, o sistema avisa que **nenhuma transação foi encontrada** — confira se baixou o extrato correto e no formato certo.
- A **Categoria padrão** é só um atalho: você pode importar sem categoria e classificar os lançamentos depois, no extrato.

## Veja também

- [Contas Bancárias](./cadastro-bancos.md)
- [Demonstrativo de Resultado (DRE)](./dre.md)
