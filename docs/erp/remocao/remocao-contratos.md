---
title: Contratos de Pátio
sidebar_position: 5
---

# Contratos de Pátio

O **Contrato de Pátio** define quanto e como cobrar pela guarda de um bem. É nele que você monta a tabela de preço por tipo de bem (diária, reboque, quilometragem) e as regras de cobrança (carência, teto de diárias, valores mínimo e máximo, descontos). É esse contrato que o sistema usa para calcular as diárias de cada estadia e gerar a conta a receber no financeiro.

## Como acessar

**ERP** → **Pátio & Remoção** → **Contratos** (ou abra o endereço `/remocao/contratos`).

![Contratos de Pátio](/img/manual/erp/remocao-contratos.png)

## O que você vê nesta tela

No topo há o botão **Novo contrato** e um aviso explicando o papel do contrato. Abaixo, um campo de busca e a lista de contratos.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número do contrato. |
| Contrato | Nome do contrato. |
| Pátio | Pátio ao qual o contrato pertence (nome e sigla). |
| Diária base | Valor da diária de referência do contrato. |
| Regras | Resumo das regras ativas (carência, teto, proporcional, sem fim de semana). Mostra **Diária cheia** quando não há regra especial. |
| Status | **Ativo** ou **Inativo**. |

## O que dá pra fazer aqui

### Buscar um contrato

Digite parte do **nome do contrato** ou do **pátio** no campo de busca.

### Criar um novo contrato

1. Clique em **Novo contrato**.
2. Preencha o **Nome do contrato** (obrigatório). Ex.: "Contrato DETRAN-RJ 2026".
3. Selecione o **Pátio** (obrigatório).
4. Em **Contratante**, busque e selecione a pessoa que paga a estadia (opcional).
5. Informe a **Vigência início** e a **Vigência fim** (opcionais).
6. Defina as regras de cobrança:
   - **Dias de carência** — quantos dias iniciais não são cobrados.
   - **Teto de diárias** — número máximo de diárias a cobrar (0 = sem teto).
   - **Cobrança mínima (R$)** e **Cobrança máxima (R$)** — limites de valor (opcionais).
7. Ative, se for o caso, as chaves:
   - **Diária proporcional (por hora)**
   - **Não cobrar entrada em fim de semana**
   - **Não cobrar entrada em feriado**
8. Monte a **Tabela de preço por tipo de bem**: em cada linha escolha o **Tipo de bem** e informe **Diária R$**, **Reboque R$** e **Km R$**. Use **+ Adicionar linha** para mais tipos e o ícone de lixeira para remover uma linha. Deixe o tipo como **Padrão (qualquer tipo)** para uma regra geral.
9. Clique em **Criar contrato**.

![Novo contrato](/img/manual/erp/remocao-contratos-novo.png)

### Editar um contrato

1. Na linha do contrato, clique no ícone de **Editar**.
2. Ajuste os campos e a tabela de preço.
3. Clique em **Salvar alterações**.

### Desativar um contrato

1. Na linha do contrato, clique no ícone vermelho de **Desativar**.
2. Confirme na janela. O contrato fica **Inativo**, mas o histórico de faturamento é preservado.

## Regras de negócio

- **Nome e Pátio são obrigatórios.** O botão de salvar só fica disponível quando os dois estão preenchidos.
- **A tabela de preço só guarda linhas com Diária.** Ao salvar, linhas sem valor de diária são descartadas; portanto, informe ao menos uma linha com **Diária** preenchida.
- **Tabela é recriada a cada salvamento.** Editar e salvar substitui a tabela de preço inteira pelo que estiver na tela — não há edição linha a linha no servidor.
- **Valores aceitam formato brasileiro.** Você pode digitar `1234,56` (vírgula como separador decimal); o sistema converte para o formato interno. Campos de valor em branco ficam sem valor.
- **Como o contrato é usado.** É a partir das regras do contrato (diária por tipo de bem, carência, teto, mínimo/máximo, descontos) que o sistema calcula as diárias de cada estadia e gera a conta a receber no financeiro. Ver [Estadias & Custos](./remocao-estadias.md).
- **Apenas contratos ativos aparecem por padrão.** A lista mostra só os contratos ativos; os desativados ficam ocultos.

## Dicas e observações

- Desativar um contrato **não** apaga nada: o contrato fica **Inativo** e o histórico de cobranças e estadias continua disponível.
- O campo **Contratante** é opcional e serve para indicar a pessoa que paga a estadia; deixe em branco se não se aplica.

## Veja também

- [Estadias & Custos](./remocao-estadias.md)
- [Entradas no Pátio](./remocao-entradas.md)
- [Painel do Pátio](./remocao.md)
