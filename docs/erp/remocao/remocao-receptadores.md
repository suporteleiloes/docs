---
title: Receptadores
sidebar_position: 3
---

# Receptadores

O **receptador** é a pessoa que recebe o bem na entrada do pátio: confere, faz a vistoria de entrada e registra a chegada. Nesta tela você cadastra esses profissionais, vincula cada um a um pátio e mantém a lista de quem está ativo.

## Como acessar

**ERP** → **Pátio & Remoção** → **Receptadores** (endereço `/remocao/receptadores`).

![Receptadores](/img/manual/erp/remocao-receptadores.png)

## O que você vê nesta tela

No topo há uma faixa de informação lembrando o papel do receptador (recebe o bem, confere e faz a vistoria de entrada, vinculado a um pátio com acesso próprio ao app). Logo abaixo, um campo de busca por nome e a lista de receptadores cadastrados.

| Coluna | O que é |
|---|---|
| **#** | Número de identificação do receptador no sistema. |
| **Receptador** | Nome da pessoa, com avatar (iniciais). |
| **Pátio** | Pátio ao qual o receptador está vinculado (nome e sigla). Mostra `—` quando não há pátio. |
| **Status** | **Ativo** ou **Inativo**. |

A busca filtra a lista pelo nome enquanto você digita.

## O que dá pra fazer aqui

- **Novo receptador** — botão no canto superior direito.
- **Buscar** — campo de busca por nome.
- **Editar** (ícone de lápis) e **Desativar** (ícone redondo) na coluna de ações de cada linha.

### Cadastrar um novo receptador

1. Clique em **Novo receptador**.
2. Preencha **Nome completo** (obrigatório).
3. Informe o **CPF / CNPJ** (opcional). O campo aplica a máscara automaticamente e avisa se o documento for inválido.
4. Em **Pátio**, escolha a qual pátio este receptador pertence (ou deixe em **Sem pátio**).
5. Clique em **Salvar**. O receptador passa a aparecer na lista.

![Novo receptador](/img/manual/erp/remocao-receptadores-novo.png)

### Editar um receptador

1. Clique no ícone de **lápis** na linha do receptador.
2. Ajuste o nome, o documento ou o pátio.
3. Clique em **Salvar**.

### Desativar um receptador

1. Clique no ícone de **desativar** (círculo cortado) na linha desejada.
2. Confirme na janela **Desativar receptador?**.

O receptador não é apagado: ele passa a aparecer como **Inativo** na lista. Use isso quando o profissional deixar de atuar mas você quiser preservar o histórico.

## Dicas e observações

- O **nome** é o único campo obrigatório para salvar. O documento é opcional, mas se preenchido precisa ser um CPF ou CNPJ válido.
- Vincular o receptador a um pátio é o que organiza quem atua em cada local — útil quando você opera mais de um pátio.
- O botão **Salvar** só habilita quando há nome preenchido e o documento (se informado) é válido.

## Veja também

- [Pátios](./patios-lista.md)
- [Reboques (veículos)](./remocao-reboques.md)
