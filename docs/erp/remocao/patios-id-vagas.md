---
title: Vagas do pátio
sidebar_position: 7
---

# Vagas do pátio

Esta é a aba **Vagas** dentro do detalhe de um pátio. É onde você organiza os **locais** (zonas/galpões do pátio) e suas **vagas** — criando, gerando em lote, editando e liberando vagas ocupadas.

## Como acessar

**ERP** → **Pátio & Remoção** → **Pátios** → abra um pátio → aba **Vagas** (endereço `/patios/:id/vagas`).

![Vagas do pátio](/img/manual/erp/patios-id-vagas.png)

## O que você vê nesta tela

No cabeçalho da aba há os controles de seleção e os botões de ação:

- Um seletor de **local** (zona/galpão do pátio) — todas as vagas exibidas pertencem ao local escolhido. Ao lado, um botão para **editar o local** selecionado.
- Um seletor de **status** para filtrar as vagas: **Todas as vagas**, **Disponíveis**, **Ocupadas**, **Reservadas** ou **Em manutenção**.
- Os botões **Novo local**, **Gerar vagas** e **Nova vaga**.

Se o pátio ainda não tem nenhum local, a tela mostra um aviso convidando a **Cadastrar local** antes de gerenciar vagas.

> **Importante — o que o sistema realmente controla:** hoje a vaga guarda apenas **código**, **andar**, a observação (texto livre) e se está **ocupada ou disponível**. Os status **Reservada** e **Em manutenção** aparecem na interface, mas ainda não são gravados pelo sistema — na prática toda vaga fica **Disponível** ou **Ocupada** (esta última quando há um bem alocado). Por isso, filtrar por **Reservadas** ou **Em manutenção** normalmente não traz resultados. Trate esses dois estados como recurso em construção.

A tabela de vagas tem estas colunas:

| Coluna | O que é |
|---|---|
| **Código** | Código da vaga (ou número, se não houver código). |
| **Andar** | Andar onde a vaga fica. |
| **Tipo** | Tipo da vaga, herdado do **local** (carro, moto, caminhão...). O tipo é definido por local, não por vaga individual. |
| **Bem ocupante** | Placa e descrição do bem na vaga, quando ocupada. |
| **Status** | **Disponível** ou **Ocupada** (ver nota acima sobre Reservada/Manutenção). |

## O que dá pra fazer aqui

### Cadastrar um local

O **local** é uma zona ou galpão dentro do pátio. As vagas sempre pertencem a um local.

1. Clique em **Novo local**.
2. Preencha **Nome do local** (obrigatório). Ex.: "Galpão A".
3. Informe a **Sigla** (opcional).
4. Selecione o **Tipo de vaga** (obrigatório).
5. Escolha a **Localização**: **Interno** ou **Externo**.
6. Informe **Andares** e **Vagas por andar**.
7. Clique em **Criar local**.

Ao salvar, o sistema **gera as vagas automaticamente** (andares × vagas por andar). O preview no formulário mostra quantas serão criadas antes de você confirmar. O local recém-criado já fica selecionado.

![Novo local](/img/manual/erp/patios-id-vagas-local.png)

Para **editar** um local existente, selecione-o e clique no ícone de **lápis** ao lado do seletor.

### Gerar vagas em lote

Use quando quiser adicionar várias vagas de uma vez a um local já existente.

1. Selecione o **local** no seletor.
2. Clique em **Gerar vagas**.
3. Informe **Andares** e **Vagas por andar** (obrigatórios).
4. Defina um **Prefixo** para o código (ex.: "A").
5. Escolha o **Tipo padrão** das vagas.
6. Confira o preview, que mostra o total e o intervalo de códigos (ex.: `A-01-01` até `A-03-10`).
7. Clique em **Gerar vagas**.

![Gerar vagas](/img/manual/erp/patios-id-vagas-gerar.png)

### Cadastrar uma vaga avulsa

1. Com um local selecionado, clique em **Nova vaga**.
2. Preencha o **Código** e/ou o **Número** (ao menos um dos dois é necessário). Se você informar só o número, o sistema monta o código a partir do local e do andar.
3. Informe o **Andar** (o sistema usa o andar 1 se você deixar em branco).
4. Defina o **Status** — na prática, **Disponível** ou **Ocupada**.
5. Em **Observações**, registre o que precisar (esse texto é o único campo livre da vaga).
6. Clique em **Criar vaga**.

> **O que é realmente salvo:** o sistema grava o **código**, o **andar**, o **status (ocupada/disponível)** e as **observações**. Campos como Setor, Fileira, Tipo por vaga, Situação (Ativa/Inativa) e "Vaga externa" podem aparecer no formulário, mas não são armazenados pela vaga — o **Tipo** vem do local e a alocação de um bem real é feita pelo fluxo de **Entrada no Pátio**, não digitando texto aqui.
>
> O sistema também impede **códigos duplicados no mesmo local**: se você tentar criar uma vaga com um código que já existe ali, recebe o aviso "Já existe uma vaga com este código neste local."

![Nova vaga](/img/manual/erp/patios-id-vagas-nova.png)

### Editar uma vaga

Clique no ícone de **lápis** na linha da vaga (ou em um quadrado na aba **Layout visual**), ajuste os campos e salve.

### Liberar uma vaga ocupada

1. Na linha de uma vaga com status **Ocupada**, clique no ícone de **liberar**.
2. Confirme na janela **Liberar vaga?**.

O bem ocupante é desvinculado e a vaga volta a ficar **Disponível**.

## Dicas e observações

- Os botões **Gerar vagas** e **Nova vaga** ficam **desabilitados** enquanto nenhum local estiver selecionado.
- Ao criar um local com andares e vagas por andar, as vagas já nascem automaticamente — você não precisa criá-las uma a uma.
- Para **alocar um bem de verdade** numa vaga, use a tela [Entradas no Pátio](./remocao-entradas.md): ao registrar a entrada e escolher a vaga, o sistema marca aquela vaga como **Ocupada** e vincula o bem a ela. O campo "Bem ocupante" desta tela é apenas informativo.
- O ícone de **liberar** só aparece nas vagas com status **Ocupada**. Ao liberar, o bem é desvinculado e a vaga volta a **Disponível**.
- Ao **editar um local**, mudar a quantidade de andares ou de vagas por andar faz o sistema **criar ou remover vagas automaticamente** para bater com os novos números. Tenha cuidado ao reduzir: vagas excedentes são removidas.

## Veja também

- [Detalhe do pátio](./patios-id.md)
- [Pátios](./patios-lista.md)
