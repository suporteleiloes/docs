---
title: Assinaturas
sidebar_position: 1
---

# Assinaturas

A tela de **Assinaturas** lista todas as cobranças recorrentes da sua leiloeira — mensalidades de planos, serviços contratados ou qualquer valor que se repete a cada período. É aqui que você acompanha quem está em dia, quem está suspenso e quando cada cobrança vence novamente.

## Como acessar

**ERP** → **Financeiro** → **Assinaturas**.

![Lista de assinaturas](/img/manual/erp/assinaturas.png)

## Pré-requisitos

- O **cliente** já precisa estar cadastrado como pessoa no sistema — você o seleciona ao criar a assinatura.
- Usar um **plano** é opcional. Planos vêm do catálogo (Catálogo → Planos) e servem só de atalho para preencher valor e periodicidade; você pode criar assinaturas sem plano, com valor avulso.
- O acesso à tela e a cada ação depende das permissões do seu perfil (ACLs `financeiro/assinatura/*`: listar, ver, criar, editar, gerir — suspender/reativar/reajustar — e cancelar).

## O que você vê nesta tela

No topo há um campo de busca e um filtro de status; abaixo, a tabela com todas as assinaturas. Cada linha mostra um cliente com a inicial do nome em destaque e a referência (quando houver) logo abaixo do nome.

### Filtros

| Filtro | O que faz |
|---|---|
| Buscar por cliente, referência… | Filtra a lista conforme você digita (nome do cliente ou texto da referência). |
| Todos os status | Mostra somente as assinaturas de um status específico (Ativa, Suspensa, Cancelada ou Inadimplente). |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Cliente | Nome do cliente da assinatura. A referência, se cadastrada, aparece em cinza abaixo do nome. |
| Plano / Produto | Nome do plano contratado ou do produto associado. Mostra "—" quando a assinatura é de valor avulso. |
| Valor | Valor cobrado a cada período, em reais. |
| Periodicidade | Com que frequência a cobrança se repete: Mensal, Trimestral, Semestral ou Anual. |
| Próx. vencimento | Data da próxima cobrança a ser gerada. |
| Status | Situação atual: **Ativa** (verde), **Suspensa** (amarelo), **Cancelada** (cinza) ou **Inadimplente** (vermelho). |

A tabela é paginada. Você pode escolher exibir 20, 50 ou 100 assinaturas por página no rodapé.

## O que dá pra fazer aqui

### Abrir o detalhe de uma assinatura

Clique em qualquer linha da tabela para abrir a página de detalhe daquela assinatura, onde você vê todos os dados e pode suspender, reativar, reajustar ou cancelar. Veja [Detalhe da assinatura](./assinaturas-id.md).

### Cadastrar uma nova assinatura

1. Clique em **+ Nova assinatura** no canto superior direito.
2. Em **Cliente**, busque a pessoa por nome ou documento e selecione na lista. Este campo é obrigatório.
3. (Opcional) Em **Plano**, escolha um plano do catálogo. Ao selecionar um plano, o **Valor** e a **Periodicidade** são preenchidos automaticamente — mas você ainda pode alterá-los. Se preferir uma cobrança avulsa, deixe em "Sem plano (valor avulso)".
4. Confira ou ajuste a **Periodicidade** (Mensal, Trimestral, Semestral ou Anual).
5. Informe o **Valor** da cobrança. Se você não escolheu um plano, é obrigatório informar um valor maior que zero.
6. (Opcional) Em **Referência**, escreva um identificador livre para localizar a assinatura depois.
7. Preencha a **Data de início** e o **Próximo vencimento**. Se você não informar o próximo vencimento, ele assume a data de início.
8. (Opcional) Em **Lançar dias antes**, informe com quantos dias de antecedência ao vencimento a cobrança deve ser gerada. Se deixar em branco, o sistema usa **10 dias**. Exemplo: vencimento dia 30 e "10 dias antes" → a conta a receber é criada por volta do dia 20.
9. Use os interruptores:
   - **Automatizar cobrança** — ligado, o sistema gera a conta a receber sozinho a cada vencimento (respeitando o "Lançar dias antes"). Já vem ligado. Desligado, você teria de lançar a cobrança manualmente.
   - **Pré-pago** — marque se a cobrança é feita antes do período de uso. Isso muda a data de competência do lançamento: em pré-pago a competência é o próprio vencimento; em pós-pago (padrão) a competência recua um período (a periodicidade) para trás.
10. (Opcional) Escreva uma **Descrição** com anotações sobre a assinatura.
11. Clique em **Criar**. A assinatura aparece na lista.

![Cadastro de nova assinatura](/img/manual/erp/assinaturas-novo.png)

## Como as cobranças são geradas

Entender este ponto evita surpresas:

- Só assinaturas com status **Ativa** geram contas a receber. Assinaturas **Suspensa**, **Cancelada** ou **Inadimplente** não geram novas cobranças.
- A cada ciclo, o sistema cria uma **conta a receber** no Financeiro para o cliente, no valor da assinatura, com vencimento na **Próx. vencimento**. Depois de gerar, o próximo vencimento avança automaticamente um período (1, 3, 6 ou 12 meses, conforme a periodicidade).
- A cobrança não é criada de uma vez para o ano todo: ela nasce conforme a data se aproxima, dentro da janela de **Lançar dias antes**.
- Se já existir uma conta a receber em aberto para aquele cliente naquele mês, o sistema **soma o valor da assinatura à fatura existente** em vez de criar uma duplicada.
- Assinaturas com valor zero não geram lançamento.

## Dicas e observações

- Escolher um plano é um atalho: ele preenche valor e periodicidade automaticamente, poupando digitação. Você pode editar esses campos depois de escolher o plano.
- Para uma cobrança única e personalizada, deixe **Sem plano (valor avulso)** e informe o valor à mão.
- O **Valor** e a **Periodicidade** só podem ser definidos na criação. Para mudar o valor de uma assinatura já existente, use a ação **Reajustar** na tela de detalhe (que mantém o histórico).
- O status **Inadimplente** indica cobranças vencidas e não pagas — fique atento a essa cor vermelha.
- Esta tela faz parte do módulo Financeiro; o acesso depende das permissões do seu perfil de usuário.

## Erros comuns

- **Salvar sem selecionar o cliente** — o Cliente é obrigatório; o sistema recusa com "Cliente é obrigatório".
- **Sem plano e sem valor** — se você não escolheu um plano, precisa informar um valor maior que zero, senão aparece "Informe um plano ou um valor maior que zero".
- **Esperar cobrança de assinatura suspensa/cancelada** — elas não geram nada. Para voltar a cobrar, reative (no caso de suspensa) na tela de detalhe.

## Veja também

- [Detalhe da assinatura](./assinaturas-id.md)
