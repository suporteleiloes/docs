---
title: Lotes do leilão
sidebar_position: 1
---

# Lotes do leilão

Esta é a tela central de trabalho do leilão. Aqui você vê todos os lotes que compõem o leilão, acompanha o status de cada um, edita valores, aplica ações em massa, gera o edital e administra arremates. É a aba "Lotes" de dentro de um leilão aberto.

## Como acessar

**Leilões** → abra um leilão → aba **Lotes**.

![Lotes do leilão](/img/manual/erp/lotes.png)

## O que você vê nesta tela

No topo há um painel de indicadores (KPIs) com a contagem de lotes por situação. Cada cartão é clicável e funciona como um atalho de filtro: clique para ver só aqueles lotes, clique de novo para limpar.

| Indicador | O que conta |
|---|---|
| Com Lances | Lotes que já receberam pelo menos um lance |
| Retirados | Lotes com status Retirado |
| Vendidos | Lotes com status Vendido |
| Não Vendidos | Sem licitantes, baixa oferta, cancelado ou prejudicado |
| Condicional | Lotes em venda condicional |
| Total | Total de lotes no leilão |

Logo abaixo ficam os filtros: **Filtros pelo status** (lista suspensa com seleção múltipla de situações), o botão **Mostrar fotos** (liga/desliga a miniatura do bem na lista), o botão **Loteamento manual** e o link **Configurar lista**.

A lista de lotes é altamente configurável. Por padrão aparecem as colunas principais; você pode ligar ou desligar dezenas de colunas em **Configurar lista**.

| Coluna | O que é |
|---|---|
| LT | Número do lote |
| SubLT | Número do sublote (numeração secundária, ex.: 1.1) |
| Comitente | Dono do bem (clique para abrir o cadastro do comitente) |
| FT | Miniatura da foto (quando "Mostrar fotos" está ligado) |
| Descrição | Descrição do bem, com placa/chassi quando houver |
| Valor Mercado / Avaliação / Inicial / Venda Mínima | Valores do lote |
| Incremento | Valor mínimo de cada novo lance |
| Lances | Quantidade de lances recebidos |
| Arremate | Valor do arremate (clique para abrir o arrematante) |
| Destaque | Liga/desliga o destaque do lote no site (botão direto na linha) |
| Situação | Status atual do lote |
| Ações | Menu de ações da linha |

Colunas extras disponíveis: ID Lote, ID Bem, Código, Placa, Conservação, Processo, Marca, Modelo, Cor, Ano, Combustível e Chassi.

## O que dá pra fazer aqui

### Filtrar e localizar lotes

1. Use o campo de busca para procurar por descrição, número ou placa.
2. Para filtrar por situação, clique em **Filtros pelo status** e marque uma ou mais situações.
3. Como atalho, clique em um dos cartões de indicador no topo.
4. Ligue **Mostrar fotos** se quiser ver as miniaturas dos bens.

### Adicionar lotes

1. Clique em **Adicionar lote**.
2. Você é levado à tela de **Loteamento rápido**, onde cadastra bens novos ou inclui bens já existentes como lotes.

### Editar um lote

- Dê duplo clique na linha do lote, ou use o menu **Ações** → **Editar lote**.
- A janela de edição do lote abre com todos os campos (número, sublote, valores e dados do bem).

### Marcar destaque

- Na coluna **Destaque**, use o interruptor direto na linha para colocar ou tirar o lote dos destaques do site. A mudança é salva na hora.

### Gerar e baixar o edital

1. Clique em **Gerar edital**. O edital é montado com base nos lotes atuais (pode levar alguns segundos).
2. Depois de gerado, clique em **Baixar edital** para baixar o PDF.

### Transferir arremate

1. No menu **Ações** de um lote já vendido (ou com arrematante), escolha **Transferir arremate**.
2. Informe o ID do novo arrematante e confirme.

> Atenção: transferir o arremate afeta nota fiscal, cobrança e recibos do lote.

### Remover um lote

- No menu **Ações** da linha, escolha **Remover do leilão**, ou selecione o lote e use **Remover** na barra de seleção. O bem volta para o estoque disponível.

### Ações em massa

Marque a caixa de seleção no início das linhas (ou **Selecionar todos nesta página**). Uma barra flutuante aparece na parte de baixo com as ações:

| Ação em massa | O que faz |
|---|---|
| Copiar para... | Copia os lotes selecionados para outro leilão |
| Alterar status | Aplica uma nova situação a todos os selecionados |
| Incrementos | Define um novo valor de incremento |
| Valores | Atualiza valor inicial, venda mínima ou aplica um multiplicador (ex.: 1.1 = +10%) |
| Descrições | Adiciona prefixo/sufixo ou substitui um trecho de texto nas descrições |
| Remover loteamento | Tira a numeração (LT/SubLT) dos lotes, mas mantém eles no leilão |
| Emitir Nota(s) | Gera as notas de arrematação (apenas lotes vendidos) e envia o ZIP por e-mail |
| Adicionar Sublotes | Aparece só com 1 lote selecionado: cria N sublotes vinculados ao lote pai |
| Remover | Remove os lotes do leilão (bens voltam ao estoque) |

#### Copiar lotes para outro leilão

1. Selecione os lotes.
2. Clique em **Copiar para...** e escolha o leilão de destino.
3. Confirme em **Copiar lotes**.

#### Atualizar valores em massa

1. Selecione os lotes e clique em **Valores**.
2. Preencha só os campos que quer mudar: **Valor inicial**, **Valor mínimo** ou **Multiplicador**.
3. Clique em **Aplicar**.

#### Emitir notas em massa

1. Selecione os lotes (a emissão considera apenas os com status Vendido).
2. Clique em **Emitir Nota(s)**, informe o e-mail e clique em **Solicitar emissão**.
3. Em alguns minutos chega um e-mail com o link para baixar o ZIP das notas.

### Loteamento manual

1. Ligue o interruptor **Loteamento manual** nos filtros.
2. As colunas **LT** e **SubLT** viram campos editáveis direto na lista.
3. Edite os números nas células. O contador mostra quantas linhas têm alterações pendentes.
4. Clique em **Atualizar Loteamento** para salvar, ou **Cancelar** para descartar.

## Dicas e observações

- A configuração de colunas (em **Configurar lista**) vale só para o seu usuário; ela fica salva no seu navegador.
- O valor de **Incremento** é o passo mínimo entre lances; defina com cuidado antes de abrir o leilão.
- A coluna **Situação** mostra o status real do lote. O status do leilão como um todo aparece no cabeçalho da página.

## Veja também

- [Loteamento rápido](./loteamento-rapido.md)
- [Importação por planilha](./importacao-planilha.md)
- [Preparação do leilão](./preparacao.md)
- [Habilitados](./habilitados.md)
