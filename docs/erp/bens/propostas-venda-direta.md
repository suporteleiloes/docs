---
title: Propostas de Venda Direta
sidebar_position: 6
---

# Propostas de Venda Direta

A tela de **Propostas de Venda Direta** reúne, em um só lugar, todas as propostas de compra recebidas para os bens — vindas do site ou cadastradas internamente. Daqui você acompanha o que está pendente, aprova ou recusa propostas e abre o bem relacionado.

## Como acessar

**ERP** → **Bens** → **Propostas de Venda Direta**.

![Propostas de Venda Direta](/img/manual/erp/propostas-venda-direta.png)

## O que você vê nesta tela

No topo há três abas que filtram a lista pela situação, cada uma com a contagem de registros:

| Aba | O que mostra |
|---|---|
| Pendentes | Propostas pendentes ou em análise. |
| Aprovadas | Propostas aprovadas. |
| Recusadas/Canceladas | Propostas recusadas ou canceladas. |

Abaixo, a barra de busca (por bem ou proponente) e a lista em tabela.

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número (ID) da proposta. |
| Proponente | Quem fez a proposta. |
| Processo | Processo do bem. |
| Comitente | Cliente/comitente do bem. |
| Data | Data em que a proposta foi recebida. |
| Contato | E-mail e telefone do proponente. |
| Bem | Bem objeto da proposta (com código, quando houver). |
| Valor | Valor proposto. |
| Situação | Etiqueta: Pendente, Em análise, Aprovada, Recusada ou Cancelada. |

## O que dá pra fazer aqui

### Aprovar ou recusar uma proposta

Para propostas **Pendentes** ou **Em análise**, dois botões aparecem na coluna **Situação**:

1. Clique em **✓ (Aprovar)** para aprovar a proposta, ou
2. Clique em **✕ (Recusar)** para recusá-la.

A situação da proposta é atualizada na hora e a lista se reorganiza entre as abas.

### Abrir o bem da proposta

Dê **duplo clique** na linha da proposta para abrir a ficha do bem relacionado. Veja [A ficha do bem](./bens-id.md).

### Buscar

Use o campo de busca para localizar uma proposta por **bem** ou **proponente**.

## De onde vêm as propostas

Uma proposta pode chegar por dois caminhos:

- **Pelo site:** o interessado preenche o formulário de proposta na página do bem (em bens marcados como **Venda Direta**) e a proposta entra aqui automaticamente, como **Pendente**.
- **Internamente:** a equipe cadastra a proposta dentro da [ficha do bem](./bens-id.md), na aba **Leilões e Propostas**.

Os dados de uma proposta incluem nome, e-mail e telefone do proponente, o **valor** ofertado e, quando há parcelamento, o **valor de entrada**, o número de **parcelas** e o **índice** de correção.

## Regras de negócio

- **Situações possíveis:** uma proposta nasce como **Pendente** (recebida) e pode passar por **Em análise**, até ser **Aprovada** (aceita) ou **Recusada/Cancelada**. Só propostas Pendentes ou Em análise mostram os botões de Aprovar/Recusar.
- **Aviso por e-mail:** quando uma proposta nova chega, o sistema pode enviar um e-mail de aviso para o endereço configurado para notificação de propostas. Se nenhum e-mail estiver configurado, nenhum aviso é enviado (a proposta entra na lista do mesmo jeito).
  > A confirmar com Tiago: tela/menu exato onde se configura o e-mail de notificação de propostas (config `bem.emailNotificaPropostas`).
- **Proposta vinda do site, vinculada a lote:** se a proposta estiver ligada a um lote de leilão, o sistema pode recusar valores **abaixo do mínimo** do lote ou que **não sejam múltiplos do incremento** — a menos que o leilão permita expressamente propostas abaixo do mínimo/incremento. Propostas de venda direta avulsas (sem lote) não passam por essa checagem.
- **Permissões:** listar, ver, criar e aprovar/recusar propostas dependem das permissões de proposta de bem do seu perfil. Sem elas, a tela ou os botões podem não aparecer.

## Dicas e observações

- Os botões de **Aprovar/Recusar** só aparecem enquanto a proposta está Pendente ou Em análise.
- A contagem ao lado de cada aba reflete o total daquele grupo de situações.
- As propostas também podem ser geradas e acompanhadas dentro da ficha do bem, na aba **Leilões e Propostas**.

## Veja também

- [A ficha do bem](./bens-id.md)
- [Gestão de Bens](./bens-lista.md)
