---
title: Lances Automáticos
sidebar_position: 51
---

# Lances Automáticos

Esta tela lista todos os lances automáticos (os "robôs" de lance) que os arrematantes configuraram para um leilão. Um lance automático funciona como um lance máximo: o sistema cobre os concorrentes em nome do arrematante até o valor-limite definido por ele. Aqui você consulta essas configurações e pode removê-las quando necessário.

## Como acessar

**Leilões** → abra um leilão → aba/menu **Lances automáticos**.

![Lances Automáticos](/img/manual/erp/lances-automaticos.png)

## O que você vê nesta tela

A página mostra a quantidade de lances automáticos configurados, um campo de busca e a tabela de configurações. A lista atualiza sozinha periodicamente.

| Coluna | O que é |
|---|---|
| ID | Identificador da configuração. |
| Apelido | Apelido do arrematante que cadastrou o lance automático. |
| IP | Endereço de rede de onde a configuração foi feita. |
| Parcelado | Mostra **Sim** e o número de parcelas quando o lance automático prevê pagamento parcelado; senão, **Não**. |
| Nº Lote | Número do lote ao qual o lance automático se aplica. |
| Valor Máximo | Valor-limite que o robô pode atingir cobrindo concorrentes. |
| Ativo | **Sim** se a configuração está ativa, **Não** caso contrário. |

## O que dá pra fazer aqui

### Buscar uma configuração

- Use o campo de busca para filtrar por **apelido do arrematante** ou **número do lote**.

### Atualizar a lista

- Clique no botão de **atualizar** (ícone de seta circular) no canto superior direito para recarregar os dados na hora.

### Excluir um lance automático

1. Localize a linha do arrematante na tabela.
2. Clique em **Excluir** na coluna de ações.
3. Confirme a exclusão na janela que aparece. A configuração do robô daquele arrematante é removida.

## Dicas e observações

- Os arrematantes habilitados configuram esses robôs na página pública do lote, no site do leiloeiro. Esta tela é a visão de operação interna dessas configurações.
- Excluir um lance automático é uma ação definitiva e desliga o robô daquele arrematante para aquele lote — use com cuidado.
- Quando não há nenhum robô configurado, a tela mostra um aviso de lista vazia.

## Veja também

- [Realização do Leilão](./realizacao.md)
- [Auditório Unificado](./leiloes-auditorio.md)
