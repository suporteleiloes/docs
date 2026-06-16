---
title: Gestão de Bens
sidebar_position: 1
---

# Gestão de Bens

A tela de **Gestão de Bens** é o coração do módulo de Bens: é onde você encontra, filtra, cadastra e gerencia todos os bens da leiloeira — veículos, imóveis e qualquer outro tipo de item que vá a leilão ou venda direta. Daqui você abre a ficha completa de cada bem e exporta relatórios.

## Como acessar

**ERP** → **Bens** → **Gestão de Bens**.

Esta mesma tela também atende às visões filtradas de **Imóveis** e **Veículos** (quando acessadas pelo menu, a lista já vem com os filtros e colunas adequados ao tipo). A visão de **Estoque** é descrita em página própria — veja [Estoque de Bens](./patio-estoque.md).

![Gestão de Bens](/img/manual/erp/bens-lista.png)

## O que você vê nesta tela

No topo, quatro indicadores rápidos (KPIs) resumem a situação do seu acervo:

| Indicador | O que mostra |
|---|---|
| Total | Quantidade total de bens cadastrados. |
| Ativos | Bens em análise / ativos. |
| Bloqueados | Bens bloqueados. |
| Vendidos | Bens já vendidos. |

Abaixo, há a barra de busca, os botões de **Situação**, o painel de **Mais filtros** e a lista de bens em tabela paginada.

**Filtro de busca:** o campo de texto principal busca por descrição, placa, chassi e matrícula (o texto de ajuda muda conforme você esteja vendo veículos ou imóveis).

**Chips de Situação:** logo abaixo da busca há botões que filtram pela situação do bem. Você pode marcar vários ao mesmo tempo:

- Rascunho, Cadastrado, Em remoção, No pátio, Em leilão, Devolvido, Doado e Leiloado.
- O botão **Limpar** remove a seleção de situação.

### Colunas da lista

As colunas exibidas dependem da sua configuração (veja "Configurar a lista" abaixo). As principais são:

| Coluna | O que é |
|---|---|
| Foto | Miniatura da foto principal do bem. |
| # | Número (ID) interno do bem. |
| Descrição | Nome/descrição do bem. Abaixo aparecem placa, chassi ou matrícula, quando houver. |
| Tipo | Tipo do bem (ex.: Veículo, Imóvel). |
| Comitente | Cliente/comitente dono do bem. |
| Situação | Etiqueta da situação atual; um cadeado indica quando o bem está bloqueado. |
| Código interno | Código de inventário/identificação interna. |
| Etiquetas | Tags coloridas associadas ao bem. |

Outras colunas disponíveis para ativar incluem dados de **Veículo** (placa, chassi, renavam, marca, modelo, ano, cor, combustível, quilometragem, conservação), **Imóvel** (matrícula, inscrição municipal, cartório, área edificada/terreno), **Processo**, **Endereço** (UF, cidade, bairro, endereço, CEP, localização, pátio), **Valores** (mercado, avaliação, mínimo, inicial, débitos), **Datas** (entrada, saída), dados **Operacionais** (bloqueado, venda direta, destaque, último leilão/lote, nº de propostas, tem fotos) e **Auditoria** (criado em/por, alterado em/por).

## O que dá pra fazer aqui

### Cadastrar um novo bem

1. Clique em **Cadastrar bem** (canto superior direito).
2. Abre-se a janela do bem. Escolha o **Tipo de bem** e preencha a **Descrição** (campos obrigatórios).
3. Preencha os demais dados conforme o tipo (placa/chassi para veículos; matrícula/endereço para imóveis; valores, processo, etc.).
4. Clique em **Salvar**. O bem passa a aparecer na lista. Os detalhes de cada aba da janela estão descritos em [A ficha do bem](./bens-id.md).

### Abrir / editar um bem

- **Dê um duplo clique** na linha do bem, ou
- Clique no **menu de ações** (três pontos) ao final da linha e escolha **Abrir**.

A ficha completa abre em uma janela; as alterações são gravadas ao clicar em **Salvar** lá dentro.

### Excluir um bem

1. Clique no **menu de ações** (três pontos) ao final da linha.
2. Escolha **Excluir**.
3. Confirme na caixa de diálogo. Atenção: a exclusão é definitiva — todos os dados do bem são perdidos sem possibilidade de recuperação.

### Filtrar com "Mais filtros"

1. Clique em **Mais filtros**. Abre-se um painel com seções recolhíveis.
2. Use a seção que precisar:
   - **Identificação:** comitente, tipo de bem, código, processo, processo inteligente, evento.
   - **Veículo:** placa, chassi, marca, modelo, ano, cor, código FIPE, pátio, nº sinistro e a marcação "proveniente de alagamento".
   - **Imóvel:** matrícula, CEP, UF, cidade, endereço, bairro.
   - **Período:** data de/até e o tipo de data (cadastro, entrada, saída ou alteração).
   - **Operacional:** bloqueado para leilão, venda direta, financiado, em depósito, origem (formulário/robô/API), análise cadastral, com fotos, remessa, nº de atendimento e código de remoção.
3. Clique em **Aplicar**. Para zerar tudo, use **Limpar filtros**.

O número ao lado do botão "Mais filtros" mostra quantos filtros estão aplicados.

### Exportar a lista

1. Clique em **Exportar**.
2. Escolha o formato:
   - **Exportar Diário Entrada** (PDF) — relatório de entradas.
   - **Exportar Diário Saída** (PDF) — relatório de saídas.
   - **Excel** (XLSX) — a lista completa.
3. O arquivo é gerado e baixado automaticamente. Os filtros ativos no momento são respeitados na exportação.

### Configurar a lista (escolher colunas)

1. Clique no botão de **engrenagem** (Configurar colunas) no topo.
2. Marque/desmarque as colunas que quer ver. Você pode marcar ou limpar uma seção inteira, ou usar **Selecionar todas** / **Limpar tudo**.
3. Clique em **Salvar**. Para voltar ao padrão, use **Restaurar padrão**.

A configuração é salva no seu navegador, separadamente para cada visão (Gestão de Bens, Imóveis, Veículos, Estoque).

## Dicas e observações

- A configuração de colunas é por usuário e por navegador — ela não vale para outros computadores ou colegas.
- Você pode combinar livremente a busca, os chips de situação e os filtros avançados.
- O cadeado na coluna Situação sinaliza, de relance, bens bloqueados para venda.

## Veja também

- [A ficha do bem](./bens-id.md)
- [Estoque de Bens](./patio-estoque.md)
- [Vistorias](./vistoria.md)
- [Propostas de Venda Direta](./propostas-venda-direta.md)
- [Dashboard Cadastral](./insights-bens.md)
