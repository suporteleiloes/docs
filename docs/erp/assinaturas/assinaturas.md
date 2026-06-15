---
title: Assinaturas
sidebar_position: 1
---

# Assinaturas

A tela de **Assinaturas** lista todas as cobranças recorrentes da sua leiloeira — mensalidades de planos, serviços contratados ou qualquer valor que se repete a cada período. É aqui que você acompanha quem está em dia, quem está suspenso e quando cada cobrança vence novamente.

## Como acessar

**ERP** → **Financeiro** → **Assinaturas**.

![Lista de assinaturas](/img/manual/erp/assinaturas.png)

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
7. Preencha a **Data de início** e o **Próximo vencimento**.
8. (Opcional) Em **Lançar dias antes**, informe com quantos dias de antecedência a cobrança deve ser gerada.
9. Use os interruptores:
   - **Automatizar cobrança** — ligado, o sistema gera a cobrança sozinho a cada vencimento. Já vem ligado.
   - **Pré-pago** — marque se a cobrança é feita antes do período de uso.
10. (Opcional) Escreva uma **Descrição** com anotações sobre a assinatura.
11. Clique em **Criar**. A assinatura aparece na lista.

![Cadastro de nova assinatura](/img/manual/erp/assinaturas-novo.png)

## Dicas e observações

- Escolher um plano é um atalho: ele preenche valor e periodicidade automaticamente, poupando digitação. Você pode editar esses campos depois de escolher o plano.
- Para uma cobrança única e personalizada, deixe **Sem plano (valor avulso)** e informe o valor à mão.
- O **Valor** e a **Periodicidade** só podem ser definidos na criação. Para mudar o valor de uma assinatura já existente, use a ação **Reajustar** na tela de detalhe (que mantém o histórico).
- O status **Inadimplente** indica cobranças vencidas e não pagas — fique atento a essa cor vermelha.
- Esta tela faz parte do módulo Financeiro; o acesso depende das permissões do seu perfil de usuário.

## Veja também

- [Detalhe da assinatura](./assinaturas-id.md)
