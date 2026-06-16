---
title: Pátios
sidebar_position: 5
---

# Pátios

Esta é a lista central de **pátios** — os locais onde os bens removidos ficam guardados. Aqui você cadastra novos pátios, acompanha a ocupação de vagas de cada um, edita, remove e abre o detalhe para gerenciar as vagas.

## Como acessar

**ERP** → **Pátio & Remoção** → **Pátios** (endereço `/patios/lista`).

![Pátios](/img/manual/erp/patios-lista.png)

## O que você vê nesta tela

Uma barra de filtros e a tabela de pátios. Cada linha mostra dados do pátio e os números de ocupação de vagas.

### Filtros

| Filtro | O que faz |
|---|---|
| **Buscar** | Procura por nome, sigla ou cidade. |
| **Cidade** | Filtra por cidade. |
| **UF** | Filtra por estado (sigla de 2 letras). |
| **Tipo** | Filtra pelo tipo de pátio. |
| **Situação** | **Apenas ativos** (padrão), **Apenas inativos** ou **Todos**. |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| **#** | Número de identificação do pátio. |
| **Nome** | Nome do pátio, com a sigla ao lado. |
| **Tipo** | Tipo do pátio. |
| **Endereço** | Logradouro, número e bairro. |
| **Cidade / UF** | Cidade e estado. |
| **GPS** | Coordenadas de localização, quando cadastradas. |
| **Vagas** | Capacidade total de vagas. |
| **Ocupadas** | Quantas estão ocupadas, com o percentual de ocupação. |
| **Disponíveis** | Quantas estão livres. |
| **Responsável** | Responsável pelo pátio. |
| **Situação** | **Ativo** ou **Inativo**. |

## O que dá pra fazer aqui

- **Novo pátio** — botão no canto superior direito (ou atalho **Shift+N**).
- **Filtrar** a lista pelos campos acima. Use **Ctrl+Shift+R** para limpar todos os filtros.
- **Abrir o detalhe** do pátio: dê **duplo clique** na linha.
- **Editar** (lápis) e **Remover** (lixeira) na coluna de ações de cada linha.
- **Seleção em massa**: marque várias linhas para **Exportar** (CSV) ou **Excluir** em lote.

### Cadastrar um novo pátio

1. Clique em **Novo pátio**.
2. Preencha **Nome do pátio** (obrigatório).
3. Informe a **Sigla** (obrigatório) e selecione o **Tipo** (obrigatório).
4. Preencha **CEP** (obrigatório) e selecione a **UF** (obrigatório).
5. Preencha o **Endereço** (obrigatório), e opcionalmente o **Número** e o **Complemento**.
6. Preencha **Bairro** (obrigatório) e **Cidade** (obrigatório).
7. Se quiser, informe **Capacidade (vagas)**, **Responsável**, **Telefone**, **Latitude** e **Longitude**.
8. Defina a **Situação** (Ativo/Inativo).
9. Adicione **Observações** se necessário.
10. Marque, conforme o caso, **Armazenamento de bens** e **Realização de leilões**.
11. Clique em **Criar pátio**. O pátio passa a aparecer na lista.

![Novo pátio](/img/manual/erp/patios-lista-novo.png)

### Editar um pátio

1. Clique no ícone de **lápis** na linha do pátio (ou abra o detalhe e use **Editar dados**).
2. Ajuste os campos.
3. Clique em **Salvar alterações**.

### Remover um pátio

1. Clique no ícone de **lixeira** na linha do pátio.
2. Confirme na janela **Remover pátio?**.

A remoção só é possível se o pátio **não tiver vagas ocupadas**. Se houver bens guardados, o sistema avisa e bloqueia a exclusão.

### Exportar ou excluir em massa

1. Marque a caixa de seleção das linhas desejadas.
2. Use **Exportar** para baixar os selecionados em CSV, ou **Excluir** para apagá-los em lote (com confirmação).

## Dicas e observações

- Campos **obrigatórios** no cadastro: nome, sigla, tipo, CEP, UF, endereço, bairro e cidade. O sistema avisa qual falta antes de salvar.
- Os números de **ocupação** (Vagas / Ocupadas / Disponíveis) vêm do controle de vagas de cada pátio — gerencie-os na tela de detalhe.
- Atalhos: **Shift+N** cria novo pátio, **Shift+Enter** foca a busca, **Ctrl+Shift+R** limpa os filtros.

## Veja também

- [Detalhe do pátio](./patios-id.md)
- [Vagas do pátio](./patios-id-vagas.md)
- [Receptadores](./remocao-receptadores.md)
- [Reboques (veículos)](./remocao-reboques.md)
