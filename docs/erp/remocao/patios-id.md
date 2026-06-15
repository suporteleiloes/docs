---
title: Detalhe do pátio
sidebar_position: 6
---

# Detalhe do pátio

Esta é a tela de um pátio específico. Aqui você vê a ocupação resumida, gerencia as vagas, acompanha as entradas e saídas de bens, define os responsáveis e edita os dados cadastrais — tudo organizado em abas.

## Como acessar

**ERP** → **Pátio & Remoção** → **Pátios** → **duplo clique** em um pátio (endereço `/patios/:id`).

![Detalhe do pátio](/img/manual/erp/patios-id.png)

## O que você vê nesta tela

No topo, um resumo do pátio: endereço, responsável e três indicadores — **Capacidade**, **Ocupadas** e **Disponíveis** — além de uma etiqueta com o **percentual ocupado** (que muda de cor conforme a lotação: verde, azul, laranja e vermelho).

Logo abaixo, a barra de abas:

| Aba | O que mostra |
|---|---|
| **Vagas** | Lista de vagas do local selecionado, com filtros e ações. Veja a página dedicada [Vagas do pátio](./patios-id-vagas.md). |
| **Layout visual** | Mapa colorido das vagas por andar, com legenda de status. |
| **Movimentações** | Histórico de entradas e saídas de bens. |
| **Responsáveis** | Pessoas responsáveis pelo pátio. |
| **Dados** | Dados cadastrais completos do pátio. |

No cabeçalho da tela há ainda os botões **Voltar** (retorna à lista) e **Editar dados**.

## O que dá pra fazer aqui

### Layout visual

Mostra todas as vagas do local selecionado em um grid, agrupadas por andar e coloridas por status (Disponível, Ocupada, Reservada, Manutenção, conforme a legenda). Cada quadrado traz o código da vaga e, se ocupada, a placa ou descrição do bem. Clique em um quadrado para abrir a edição daquela vaga.

![Layout visual](/img/manual/erp/patios-id-layout.png)

### Movimentações

Lista o histórico de entradas e saídas. As colunas são:

| Coluna | O que é |
|---|---|
| **#** | Número do registro. |
| **Bem** | Descrição do bem movimentado. |
| **Placa** | Placa do bem, quando houver. |
| **Vaga** | Vaga utilizada. |
| **Entrada** | Data e hora da entrada no pátio. |
| **Saída** | Data e hora da saída (em branco se o bem ainda está no pátio). |

### Responsáveis

Lista as pessoas responsáveis pelo pátio (nome, cargo, telefone, e-mail).

**Para adicionar um responsável:**

1. Vá na aba **Responsáveis** e clique em **Adicionar responsável**.
2. Em **Pessoa responsável**, busque por nome ou documento (a partir de 2 caracteres) e selecione uma pessoa já cadastrada.
3. Clique em **Adicionar**.

**Para remover**, clique no ícone de **lixeira** na linha da pessoa e confirme.

> Apenas pessoas/usuários já existentes no sistema podem ser vinculados como responsáveis.

### Dados

Mostra os dados cadastrais do pátio: nome, sigla, tipo, situação, endereço completo, bairro, CEP, cidade, UF, responsável, telefone, se faz **armazenamento** e **leilões**, latitude/longitude e observações.

**Para editar:** clique em **Editar** (na aba Dados) ou **Editar dados** (no cabeçalho). Abre o mesmo formulário do cadastro de pátio; ajuste os campos e clique em **Salvar alterações**.

![Editar dados do pátio](/img/manual/erp/patios-id-editar.png)

## Dicas e observações

- A cor da etiqueta de ocupação é um alerta visual rápido: vermelha a partir de 90%, laranja a partir de 70%.
- A gestão de **vagas e locais** (criar local, gerar vagas, liberar vaga ocupada) fica na aba **Vagas** — veja a página dedicada.
- A coluna **Saída** vazia nas Movimentações indica que o bem **ainda está no pátio**.

## Veja também

- [Vagas do pátio](./patios-id-vagas.md)
- [Pátios](./patios-lista.md)
