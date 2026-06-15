---
title: Reboques (veículos)
sidebar_position: 4
---

# Reboques (veículos)

Aqui você cadastra os **reboques** — os veículos de remoção (guincho, plataforma, asa-delta) usados para buscar bens e levá-los ao pátio. Cada reboque pertence a um **reboquista**, e seu **custo** serve de referência para o frete da remoção.

## Como acessar

**ERP** → **Pátio & Remoção** → **Reboques** (endereço `/remocao/reboques`).

![Reboques](/img/manual/erp/remocao-reboques.png)

## O que você vê nesta tela

No topo, uma faixa de informação explica que cada reboque pertence a um reboquista e que o custo é usado como referência no frete da remoção. Em seguida, o campo de busca e a lista de veículos.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação do reboque no sistema. |
| **Reboque** | Descrição do veículo. Abaixo aparece a marca/modelo e o tipo, quando preenchidos. |
| **Placa** | Placa do veículo. |
| **Reboquista** | Nome do reboquista dono do veículo. |
| **Custo** | Valor de referência do frete, em reais. Mostra `—` quando não informado. |
| **Ativo** | **Sim** ou **Não**. |

A busca filtra pela **descrição** ou pela **placa** enquanto você digita.

## O que dá pra fazer aqui

- **Novo reboque** — botão no canto superior direito.
- **Buscar** — campo de busca por descrição ou placa.
- **Editar** (ícone de lápis) e **Remover** (ícone de lixeira) na coluna de ações de cada linha.

### Cadastrar um novo reboque

1. Clique em **Novo reboque**.
2. Em **Reboquista**, selecione a pessoa dona do veículo (obrigatório).
3. Preencha a **Descrição** (obrigatório). Ex.: "Guincho plataforma 01".
4. Informe a **Placa** (opcional) — o campo aplica a máscara automaticamente, aceitando os formatos ABC-1234 e ABC1D23 (Mercosul).
5. Preencha o **Tipo** (opcional), ex.: plataforma, asa-delta.
6. Informe **Marca/Modelo** (opcional).
7. Informe o **Custo (R$)** (opcional) — usado como referência de frete.
8. Clique em **Salvar**. O reboque passa a aparecer na lista.

![Novo reboque](/img/manual/erp/remocao-reboques-novo.png)

### Editar um reboque

1. Clique no ícone de **lápis** na linha do reboque.
2. Ajuste os campos desejados.
3. Clique em **Salvar**.

### Remover um reboque

1. Clique no ícone de **lixeira** na linha do reboque.
2. Confirme na janela **Remover reboque?**.

## Dicas e observações

- O botão **Salvar** só habilita quando há um **reboquista selecionado** e uma **descrição** preenchida — são os dois campos obrigatórios.
- O reboquista precisa já estar cadastrado para aparecer na lista de seleção.
- O **custo** é apenas referência; ele não é cobrado automaticamente, serve para orientar o frete da remoção.

## Veja também

- [Receptadores](./remocao-receptadores.md)
- [Pátios](./patios-lista.md)
