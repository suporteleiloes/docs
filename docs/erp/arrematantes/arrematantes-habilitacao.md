---
title: Habilitação em Leilões
sidebar_position: 4
---

# Habilitação em Leilões

Esta tela mostra as solicitações de habilitação dos arrematantes para participar de leilões específicos. Aqui você aprova, reprova (nega) ou revoga essas habilitações.

## Como acessar

**Arrematantes** → **Habilitação** (rota `/arrematantes/habilitacao`), ou clique no botão **Habilitação** no topo da [Gestão de Arrematantes](./arrematantes-lista.md).

![Habilitação em Leilões](/img/manual/erp/arrematantes-habilitacao.png)

## O que você vê nesta tela

Três abas filtram a lista por situação. A aba ativa mostra o total ao lado.

| Aba | O que mostra |
|---|---|
| Em análise | Solicitações de habilitação aguardando decisão |
| Aprovadas | Habilitações já aprovadas |
| Reprovadas | Habilitações negadas |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número de identificação (ID) da habilitação |
| Arrematante | Foto, nome e documento — clique para abrir o detalhe |
| Leilão | Leilão ao qual a habilitação se refere (e nº, quando houver) |
| Status | Selo com a situação (Em análise, Aprovada, Reprovada) |
| Solicitado | Data da solicitação de habilitação |

## O que dá pra fazer aqui

### Buscar

Use a barra de busca para localizar por arrematante ou leilão.

### Abrir o cadastro do arrematante

Clique no nome/foto para ir à página de [detalhe do arrematante](./arrematantes-id-detalhe.md).

### Aprovar uma habilitação

Disponível para registros **Em análise**:

1. Clique em **Aprovar** na linha.
2. Confirme. O arrematante fica habilitado a participar daquele leilão.

Ao aprovar, o sistema gera o **termo/comprovante de habilitação** em PDF e notifica o arrematante (e-mail/WhatsApp, conforme configuração). O contador de habilitados do leilão também é atualizado.

### Negar (reprovar) uma habilitação

Disponível para registros **Em análise**:

1. Clique no botão vermelho (ícone de **x**) na linha.
2. Na janela **Negar habilitação**, informe o **motivo** (opcional, mas recomendado — ele será comunicado ao arrematante).
3. Clique em **Confirmar negação**.

![Janela negar habilitação](/img/manual/erp/arrematantes-habilitacao-negar.png)

### Revogar uma habilitação aprovada

Para registros já **Aprovados**:

1. Clique em **Revogar** na linha.
2. Confirme. A habilitação deixa de valer e some das listas (é desativada/marcada como excluída, não apagada fisicamente do banco — fica registrada no histórico/auditoria do leilão).

## Dicas e observações

- As ações **Aprovar** e **Negar** só aparecem enquanto a habilitação está **Em análise**. Depois de aprovada, a opção passa a ser **Revogar**. Registros **Reprovados** não têm ações.
- O motivo da negação é enviado ao arrematante — escreva de forma clara. O motivo é **opcional** no sistema, mas recomendado.
- Toda decisão (aprovar/negar/revogar) é registrada no log do leilão para auditoria.
- Para uma visão unificada de habilitações por **leilão** e por **lote**, com filtros adicionais, use a tela [Habilitações](./arrematantes-habilitacoes.md).
- **Permissões necessárias**: a listagem usa listar habilitações de arrematante (`earrematante/habilitacao/l`); já as ações **Aprovar**, **Negar** e **Revogar** exigem a permissão de aprovar habilitações de leilão (`leilao/habilit/aprovar`).

## Veja também

- [Habilitações (Leilão e Lote)](./arrematantes-habilitacoes.md)
- [Gestão de Arrematantes](./arrematantes-lista.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
