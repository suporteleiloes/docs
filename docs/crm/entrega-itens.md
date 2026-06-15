---
title: Entregas
sidebar_position: 6
---

# Entregas

A tela de Entregas controla os **itens físicos e documentos** que precisam chegar ao arrematante — CRLV, chave, pasta, procuração, placa, documentos judiciais e afins. Você acompanha cada entrega do "aguardando chegada" até o "entregue", avisa o cliente e registra a confirmação de recebimento.

## Como acessar

**Operação** → **Entregas** (rota `/entrega-itens`).

![Entregas](/img/manual/crm/entrega-itens.png)

## O que você vê nesta tela

No topo, cinco **cartões de contadores** (clicáveis, funcionam como filtros). Abaixo, uma barra de filtros e a tabela de entregas.

### Cartões de contadores

| Cartão | O que mostra |
|---|---|
| **Pendentes** | Entregas aguardando chegada + recebidas no escritório. |
| **Aguardando chegada** | Itens que ainda não chegaram. |
| **Disp. p/ retirada** | Prontas para o cliente retirar. |
| **Entregues** | Já entregues. |
| **Atrasadas** | Passaram da data prevista (destaque em vermelho). |

Clique em um cartão para filtrar a tabela por aquela situação; clique de novo para limpar.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| **Código** | Identificador da entrega; ganha etiqueta "Atrasada" quando aplicável. |
| **Cliente** | Nome e CPF/CNPJ do arrematante. |
| **Itens** | Tipos de item da entrega (mostra até 3, com "+N" para o restante). |
| **Lote / Leilão** | Lote e leilão vinculados, quando houver. |
| **Situação** | Status atual (Aguardando chegada, Disponível p/ retirada, Entregue, etc.). |
| **Prevista** | Data prevista de entrega. |

### Filtros

Busca por código/cliente/item, **situação**, **tipo de item**, **atraso** (somente atrasadas), **CPF/CNPJ**, **Lote ID**, **Leilão ID** e intervalo de **datas previstas** (de → até). O botão **Limpar** zera tudo.

## O que dá pra fazer aqui

### Criar uma nova entrega

1. Clique em **Nova entrega**.
2. Em **Cliente / Arrematante**, busque por nome ou CPF/CNPJ e selecione (obrigatório).
3. Preencha os vínculos opcionais: **Lote (ID)**, **Arremate (ID)**, **Processo (ID)** e **Data prevista**.
4. Escolha a **Situação** inicial (por padrão "Aguardando chegada").
5. Em **Itens da entrega**, escolha o **tipo** (CRLV, chave, pasta, etc.) e preencha **descrição** e **identificador**. Clique em **Adicionar item** para incluir mais itens.
6. Preencha **Orientações de retirada** (que o cliente verá) e **Observações internas**, se quiser.
7. Clique em **Criar entrega**.

![Nova entrega](/img/manual/crm/entrega-itens-nova.png)

### Abrir os detalhes de uma entrega

1. Clique na linha da entrega.
2. Abre o painel de detalhe com os dados, itens, anexos, ações de situação, botões de aviso e o histórico (linha do tempo).
3. Para editar, clique no ícone de **lápis** no topo do painel.

### Mudar a situação de uma entrega

1. No painel de detalhe, na coluna lateral **Mudar situação**, clique no próximo status desejado (só os válidos a partir do status atual aparecem).
2. Confirme. A situação muda na hora.
3. Se escolher **Entregue**, abre a janela de [confirmação de recebimento](#confirmar-o-recebimento).

### Confirmar o recebimento

1. Mude a situação para **Entregue** (ou use o botão correspondente).
2. Informe o **Nome de quem recebeu** (obrigatório) e o **Documento do recebedor** (opcional).
3. Escolha o **Canal de entrega**: presencial, correios/transportadora, motoboy, e-mail ou outro.
4. Se quiser, capture a **assinatura** desenhando na área (dedo ou mouse) e anexe um **comprovante/foto**.
5. Clique em **Confirmar entrega**. A entrega passa para "Entregue".

![Confirmar entrega](/img/manual/crm/entrega-itens-confirmar.png)

### Avisar o cliente

1. No painel de detalhe, em **Avisar cliente**, clique em **E-mail** ou **WhatsApp**.
2. O sistema envia o aviso e mostra o resultado real (enviado, ignorado por opt-out, ou erro). O envio fica registrado no histórico.

### Anexar arquivos

1. No painel de detalhe, no bloco **Anexos**, clique em **Anexar** e escolha o arquivo.
2. Os anexos ficam disponíveis para abrir/baixar.

### Importar entregas em lote

1. Clique em **Importar** (no topo da tela).
2. Baixe o **CSV-modelo** se precisar de referência das colunas.
3. Escolha um arquivo **CSV ou XLSX** — cada linha vira uma entrega com um item; as pessoas são encontradas pelo **CPF/CNPJ**.
4. Confira a **pré-visualização**: o sistema mostra quantas linhas são válidas e quais têm erro (linhas com erro são ignoradas).
5. Clique em **Importar N entrega(s)** para confirmar.
6. Veja o resumo com os códigos criados.

![Importar entregas](/img/manual/crm/entrega-itens-importar.png)

## Dicas e observações

- **Colunas do arquivo de importação:** documento, tipo_item, descricao, identificador, data_prevista, observacoes. O separador do CSV pode ser `;` ou `,`.
- As transições de situação seguem um fluxo lógico (ex.: de "Recebido no escritório" para "Disponível p/ retirada", "Enviado" ou "Cancelado") — por isso só aparecem os próximos status que fazem sentido.
- O aviso ao cliente respeita opt-out/LGPD: se a pessoa pediu para não receber, o sistema reporta "ignorado" em vez de enviar.
- **Pelo menos um item** é obrigatório ao criar uma entrega, além do cliente.

## Veja também

- [Minhas entregas](./minhas-entregas.md)
- [Início do CRM](./crm.md)
