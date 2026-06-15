---
title: Loteamento rápido
sidebar_position: 4
---

# Loteamento rápido

O Loteamento rápido é um editor em formato de planilha para preencher e ajustar vários lotes de uma vez. Você edita valores, títulos, tipos e descrições direto nas células, sem abrir cada lote individualmente. Também é por aqui que você inclui bens novos ou já existentes como lotes do leilão.

## Como acessar

**Leilões** → abra um leilão → aba **Preparação** → **Loteamento rápido**.
Você também chega aqui pelo botão **Adicionar lote** da tela de [Lotes](./lotes.md).

![Loteamento rápido](/img/manual/erp/loteamento-rapido.png)

## O que você vê nesta tela

Uma barra de ferramentas no topo e, abaixo, uma tabela editável com até 24 colunas. A coluna **Lote** fica fixa (sticky) ao rolar a tabela para os lados.

### Barra de ferramentas

| Item | O que faz |
|---|---|
| Salvar alterações automaticamente | Quando ligado, salva sozinho 2 segundos após você parar de digitar |
| Salvar alterações | Salva manualmente o que está na fila (mostra a quantidade pendente) |
| Atualizar | Recarrega a lista de lotes |
| Criar rapidamente | Cadastra um bem novo e o adiciona como lote deste leilão |
| Adicionar um bem como lote | Abre a busca de bens já cadastrados para incluir no leilão |
| Configurar lista | Liga/desliga as colunas exibidas |

### Colunas editáveis da planilha

Entre as colunas disponíveis: ID LT, ID Bem, Comitente, ID Com, Lote, Sublote, Tipo do Bem, Título Site, Código, Matrícula, Placa, Chassi, Avaliação, Mercado/Fipe, Venda Mínima, Incremento, Lance Inicial (1, 2 e 3), Subtítulo Site, Descrição Site, Observação Site, Latitude e Longitude.

As colunas **ID LT**, **ID Bem** e **Comitente** são apenas para clicar (abrem o respectivo cadastro), não são editáveis.

## O que dá pra fazer aqui

### Editar lotes na planilha

1. Clique na célula que deseja alterar e digite o novo valor.
2. Para o **Tipo do Bem**, clique na célula e escolha na lista em árvore (as categorias em negrito são apenas agrupadoras e não podem ser selecionadas).
3. Se **Salvar automaticamente** estiver ligado, a alteração é salva 2 segundos depois. Senão, clique em **Salvar alterações**.

> Se você tentar sair da tela com alterações não salvas (e o salvamento automático desligado), o sistema avisa antes.

### Criar um lote rapidamente

1. Clique em **Criar rapidamente**.
2. Preencha o cadastro do bem novo.
3. Ao salvar, o bem é criado e adicionado automaticamente como lote deste leilão.

### Adicionar bens existentes como lote

1. Clique em **Adicionar um bem como lote**. Abre a janela "Importação de Lotes".
2. A lista mostra apenas bens que ainda não estão neste leilão.
3. Use a **busca inteligente**, o filtro de **Situação** e, em **Mais filtros**, os campos de código, placa, comitente e datas. Clique em **Pesquisar**.
4. Marque os bens que deseja incluir (as linhas selecionadas ficam destacadas).
5. Clique em **Adicionar ao leilão e fechar** ou **Adicionar ao leilão e continuar** (mantém a janela aberta para incluir mais).

Nesta janela você também pode exportar a lista de bens (Diário Entrada, Diário Saída ou Excel) e configurar quais colunas aparecem.

### Configurar as colunas

- Clique em **Configurar lista** (ou no ícone de engrenagem no canto da tabela) e ligue/desligue as colunas. A escolha fica salva no seu navegador.

## Dicas e observações

- O salvamento é feito lote a lote. Se algum lote der erro, os demais continuam salvando e você recebe a lista dos que falharam.
- Quando uma edição não persistir no servidor, o valor digitado continua visível na célula para você notar que não foi salvo, em vez de simplesmente reverter.
- A paginação fica no rodapé: você pode escolher 10, 20 ou 50 lotes por página.

## Veja também

- [Lotes do leilão](./lotes.md)
- [Importação por planilha](./importacao-planilha.md)
- [Importação com análise](./importacao-analise.md)
- [Preparação do leilão](./preparacao.md)
