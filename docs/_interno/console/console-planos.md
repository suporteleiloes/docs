---
title: Planos
sidebar_position: 10
---

# Planos

Tela onde você cadastra e mantém os **planos comerciais** que a Suporte Leilões oferece aos clientes (leiloeiras). Cada plano define a mensalidade, o valor de setup, a periodicidade de cobrança e a lista de recursos incluídos. É a partir daqui que o time monta o catálogo usado na contratação.

## Como acessar

**Console** → **Marketplace** → **Planos** (rota `/console/planos`).

![Planos](/img/manual/_interno/console-planos.png)

## O que você vê nesta tela

No topo há o título **Planos** e o botão **Novo plano**. Logo abaixo, um campo de busca e a tabela com todos os planos cadastrados (ordenados do mais novo para o mais antigo).

| Coluna | O que é |
|---|---|
| **#** | Número (ID) do plano. |
| **Nome** | Nome comercial do plano. |
| **Mensalidade** | Valor cobrado por ciclo, em reais. Mostra "—" quando não preenchido. |
| **Setup** | Valor único de instalação/configuração, em reais. Mostra "—" quando não preenchido. |
| **Periodicidade** | Ciclo de cobrança: Mensal, Bimestral, Trimestral, Semestral ou Anual. |
| **Recursos** | Quantidade de recursos incluídos no plano. |
| **Situação** | **Ativo** (disponível para contratação) ou **Inativo**. |

Use o campo **Buscar por nome...** para filtrar a lista. No rodapé da tabela você escolhe quantos itens ver por página (20, 50 ou 100) e navega entre as páginas.

## O que dá pra fazer aqui

### Cadastrar um novo plano

1. Clique em **Novo plano**.
2. Preencha **Nome do plano** (obrigatório).
3. Informe **Mensalidade (R$)** e **Setup (R$)** — use ponto/vírgula para centavos. Se deixar em branco, o sistema grava zero.
4. Escolha a **Periodicidade** (Mensal, Bimestral, Trimestral, Semestral ou Anual).
5. Defina a **Situação** (Ativo ou Inativo).
6. Opcionalmente, escreva uma **Descrição**.
7. Em **Recursos do plano**, adicione os itens incluídos: digite o **Nome do recurso** (ex.: "Leilões/mês"), o **Valor** (ex.: "10" ou "ilimitado") e clique em **Adicionar**. Repita para cada recurso. Para remover um recurso da lista, clique no **X** ao lado dele.
8. Clique em **Criar**. O plano passa a aparecer na lista.

![Novo plano](/img/manual/_interno/console-planos-novo.png)

### Editar um plano

1. Dê **duplo clique** na linha do plano, ou clique no ícone de **lápis** (Editar) na última coluna.
2. Ajuste os campos no mesmo formulário do cadastro.
3. Clique em **Salvar**.

### Excluir um plano

1. Clique no ícone de **lixeira** (Excluir) na linha do plano.
2. Confirme na janela que aparece.

Atenção: a exclusão **não pode ser desfeita**.

## Dicas e observações

- Periodicidade e recursos não têm campo próprio no cadastro do cliente — eles fazem parte da configuração do plano. Mantenha os recursos claros, pois eles descrevem o que o cliente leva ao contratar.
- Para tirar um plano de circulação sem perdê-lo, prefira marcá-lo como **Inativo** em vez de excluir.
- Esta é uma tela interna (Console da gerência). Você precisa de acesso ao Console para usá-la.

## Veja também

- [Clientes](./console-clientes.md)
- [Tarefas de Suporte](./console-tarefas.md)
