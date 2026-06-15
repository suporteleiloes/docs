---
title: Histórico
sidebar_position: 12
---

# Histórico

A aba **Histórico** mostra o **log operacional** do leilão: a lista cronológica de eventos e alterações, com data, descrição e quem fez. É a sua trilha de auditoria — útil para conferir o que aconteceu e quando, e para comprovar a regularidade do leilão.

## Como acessar

Abra um leilão e, no menu do leilão, clique em **Histórico**.

![Histórico](/img/manual/erp/historico.png)

## O que você vê nesta tela

No topo do quadro aparece **Log Operacional** com a contagem de registros. À direita ficam os botões **Baixar auditoria (PDF)** e **Atualizar**. Abaixo, a tabela de eventos.

| Coluna | O que é |
|---|---|
| Data | Data e hora do evento (dia, mês, ano e horário com segundos). |
| Evento | Descrição do que aconteceu. |
| Pessoa | Quem realizou a ação (primeiro e último nome). |

Quando há muitos registros, aparece a paginação no rodapé, com **Anterior**, o indicador de página e **Próxima**. Se ainda não houver eventos, a tela informa "Nenhum evento registrado para este leilão".

## O que dá pra fazer aqui

### Baixar a auditoria em PDF

1. Clique em **Baixar auditoria (PDF)**.
2. O navegador baixa o arquivo `auditoria-leilao-<número>.pdf` com o histórico completo.

### Atualizar a lista

1. Clique em **Atualizar** para recarregar os eventos mais recentes (o ícone gira enquanto carrega).

### Navegar entre páginas

1. Use **Anterior** e **Próxima** para percorrer as páginas quando o leilão tem muitos eventos registrados.

## Dicas e observações

- O histórico é somente leitura: você consulta e baixa, mas não edita nem apaga eventos — é isso que garante o valor da trilha de auditoria.
- Para um relatório formal de eventos, veja também a **Auditoria Operacional** na aba de Relatórios.

## Veja também

- [Relatórios](relatorios.md)
- [Automação](automacao.md)
