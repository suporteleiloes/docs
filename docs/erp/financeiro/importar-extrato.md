---
title: Importar extrato bancário
sidebar_position: 2
---

# Importar extrato bancário

Esta tela traz para o ERP, de uma só vez, as movimentações do extrato do seu banco. Você envia o arquivo (OFX ou CSV) baixado do internet banking, revisa as transações encontradas e confirma a importação. Assim você evita digitar lançamento por lançamento e mantém o extrato do sistema em dia.

## Como acessar

Esta tela **não tem aba própria** na barra do módulo Financeiro nem um atalho no Dashboard. Você chega a ela pelo endereço direto **`/financeiro/importar-extrato`** (cole na barra do navegador ou salve nos favoritos).

> A confirmar com Tiago: incluir um atalho/menu para esta tela (hoje só acessível por URL direta).

![Importar extrato bancário](/img/manual/erp/importar-extrato.png)

## Pré-requisitos

- Ter ao menos **uma conta bancária ativa** cadastrada em [Contas Bancárias](./cadastro-bancos.md). Sem isso, o seletor de conta vem vazio e não há onde lançar as transações.
- Ter em mãos o **arquivo do extrato** (OFX/QFX ou CSV/TXT) baixado do internet banking da conta correspondente.
- (Opcional) Ter o **Plano de Contas** montado, se quiser aplicar uma categoria padrão na importação.

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

## Regras de negócio

- **O que a importação grava:** as transações entram em uma **área de preparação (staging)** do extrato bancário, vinculadas à conta escolhida. Elas servem para a **Conciliação Bancária** — onde você liga cada transação do banco a um lançamento do sistema (uma conta a pagar/receber). A importação **não cria automaticamente** lançamentos no contas a pagar/receber; ela traz o extrato do banco para depois ser conferido. Ver [Conciliação Bancária](./conciliacao.md).
- **Entrada × Saída:** o sistema usa o sinal do valor — valor **negativo = Saída (débito)**, valor **positivo ou zero = Entrada (crédito)**.
- **Como a duplicidade é detectada:** cada transação ganha uma "impressão digital" (hash). Quando o arquivo é OFX, usa-se o identificador único da transação (FITID); quando não há FITID (caso típico de CSV), usa-se a combinação **conta + data + valor + documento**. Se já existir uma transação com a mesma impressão digital na mesma conta, ela é marcada como **Duplicada**. Isso vale tanto no preview quanto na gravação: mesmo que você marque uma duplicada para importar, se ela já existir no staging, ela é **ignorada** (entra na contagem de "Duplicadas") em vez de gravar repetido.
- **Permissão:** importar extrato exige a permissão de importação de extrato (perfil financeiro). Sem ela, a tela retorna erro.

## Erros comuns

- **"Nenhum arquivo recebido" / botão Pré-visualizar desabilitado:** falta o arquivo, a conta bancária ou o formato. Os três são obrigatórios para avançar.
- **"Nenhuma transação reconhecida no arquivo":** o arquivo está vazio, é de outro tipo, ou o formato escolhido não bate com o conteúdo. Confira se baixou o extrato certo e se o **Formato** (OFX/CSV) corresponde ao arquivo.
- **Importei e o saldo da conta não mudou como eu esperava:** a importação só popula o extrato bancário (staging). O efeito no saldo do sistema vem da **baixa dos lançamentos**, feita na Conciliação ou no contas a pagar/receber.

## Dicas e observações

- **Duplicadas:** o sistema identifica transações que provavelmente já existem no extrato e as marca como **Duplicada**, deixando-as desmarcadas por padrão. Isso evita lançar o mesmo valor duas vezes. Confirme antes de marcá-las manualmente.
- Só aparecem na lista de **Conta bancária** as contas **ativas** cadastradas em [Contas Bancárias](./cadastro-bancos.md). Cadastre a conta antes de importar.
- Se o arquivo não tiver transações, o sistema avisa que **nenhuma transação foi encontrada** — confira se baixou o extrato correto e no formato certo.
- A **Categoria padrão** é só um atalho: você pode importar sem categoria e classificar os lançamentos depois, no extrato.

## Veja também

- [Contas Bancárias](./cadastro-bancos.md)
- [Conciliação Bancária](./conciliacao.md)
- [Demonstrativo de Resultado (DRE)](./dre.md)
