---
title: Clientes
sidebar_position: 2
---

# Clientes

Lista de todos os clientes (leiloeiras) da Suporte Leilões. Aqui você busca, filtra, cadastra e gerencia os clientes — desde um cadastro rápido até o provisionamento completo de um novo tenant (banco de dados, admin, e-mail e armazenamento).

> Tela de uso **interno** da equipe Suporte Leilões.

## Como acessar

**Console** → **Clientes** (ou clique no atalho **Clientes** na tela do Console de Gestão).

![Clientes](/img/manual/_interno/console-clientes.png)

## O que você vê nesta tela

No topo há a busca e os filtros avançados; abaixo, a tabela de clientes.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número (ID) do cliente. |
| Cliente | Logo, nome/razão social e, abaixo, o domínio ou documento (CPF/CNPJ). |
| Plano | Plano comercial contratado. |
| Status | Situação do cliente (Ativo, Inativo, Suspenso, etc.). |
| Desde | Data de cadastro. Quando há mensalidade, mostra também o próximo vencimento. |

### Filtros

| Filtro | Para que serve |
|---|---|
| Busca | Procura por nome, CNPJ ou e-mail. |
| Cadastro (de) / (até) | Faixa de datas de cadastro. |
| Contrato assinado | Filtra por Sim, Não ou Qualquer. |

O botão **Limpar** (aparece quando há filtro avançado ativo) zera as datas e o filtro de contrato.

## O que dá pra fazer aqui

### Buscar e filtrar

1. Digite na barra de busca e pressione Enter para procurar por nome, CNPJ ou e-mail.
2. Para refinar, preencha a faixa de **Cadastro (de/até)** e/ou escolha **Contrato assinado**.
3. Para descartar os filtros, clique em **Limpar**.

### Cadastro rápido (criar só o registro)

Use quando você quer apenas registrar o cliente, **sem** criar a instalação (tenant) dele.

1. Clique em **Cadastro rápido**.
2. Preencha **Nome / Razão social** (obrigatório).
3. Opcionalmente preencha **CPF / CNPJ**, **E-mail** e **Plano**.
4. Escolha o **Status** (Ativo, Inativo, Suspenso, Cancelado, Pendente ou Bloqueado).
5. Clique em **Criar**.

![Cadastro rápido de cliente](/img/manual/_interno/console-clientes-novo.png)

### Provisionar tenant novo (wizard completo)

Cria toda a estrutura do cliente: banco de dados, schema, usuário admin, e-mail e armazenamento. O processo leva de 30 segundos a 2 minutos — **não interrompa**.

1. Clique em **Provisionar tenant novo**.
2. **Passo 1 — Identificação:** preencha **Nome / Razão social**, o **Slug** (chave técnica, vira o nome do banco), e opcionalmente **CNPJ** e **Domínio principal**.
3. **Passo 2 — Administrador:** preencha **Nome completo**, **E-mail** e **Username** do primeiro usuário. Deixe marcado **Gerar senha aleatória** ou desmarque para definir a **Senha inicial**.
4. **Passo 3 — Configuração:** escolha o **Plano comercial** (Básico, Pro ou Enterprise), marque os **Módulos ativos** (CRM, marketing, leilões, vistoria, remoção, financeiro) e, se quiser, informe **E-mail remetente** e **Nome remetente**.
5. **Passo 4 — Revisão:** confira o resumo e clique para provisionar.
6. Acompanhe a execução: o wizard mostra 11 etapas em tempo real (criar banco, registrar o cliente, aplicar schema, instalar CRM, semear automações/funis/inadimplência, criar admin, configurar o app, reservar armazenamento e enviar o e-mail de boas-vindas). Etapas com falha podem ser repetidas pelo botão **Retry**.
7. Ao final, **copie e salve a senha do admin** exibida — ela não aparece de novo.

### Executar rotinas automáticas

Recalcula os valores em atraso (pagamentos pendentes) de **todos** os clientes.

1. Clique em **Executar rotinas automáticas** (no topo).
2. Confirme na janela. O processo pode levar alguns segundos.

### Atualizar valor da mensalidade (por cliente)

Migra o cliente para a nova mensalidade, recriando a assinatura no financeiro.

1. Na linha do cliente, clique no ícone de **Atualizar valor** (setas circulares).
2. Confirme na janela.

### Editar ou excluir um cliente

- Clique no ícone de **lápis** (ou dê duplo clique na linha) para abrir o detalhe do cliente, onde fica a edição completa.
- Clique no ícone de **lixeira** para excluir.

## Dicas e observações

- O **Cadastro rápido** não cria a instalação do cliente — para isso use **Provisionar tenant novo**.
- A edição completa (domínio, plano, servidor, mensalidade, contrato, instância) é feita na [tela de detalhe do cliente](console-clientes-id.md). Nome, e-mail e documento pertencem à pessoa e são editados no cadastro de Pessoas.
- Você pode mostrar 20, 50 ou 100 clientes por página.

## Veja também

- [Detalhe do cliente](console-clientes-id.md)
- [Servidores](gerencia-servidores.md)
- [Console de Gestão](console.md)
