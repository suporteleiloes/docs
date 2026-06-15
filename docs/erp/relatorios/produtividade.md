---
title: Produtividade por Período
sidebar_position: 5
---

# Produtividade por Período

Este relatório mostra o andamento das **etapas de produtividade** dos processos em um período — quais etapas foram concluídas em cada processo — e quanto foi pago (e quanto ficou em aberto) para cada responsável. É a visão usada para acompanhar a equipe jurídica/operacional e os pagamentos por produtividade.

## Como acessar

**ERP** → **Relatórios** → **Produtividade por Período**.

![Produtividade por Período](/img/manual/erp/produtividade.png)

## O que você vê nesta tela

A tela tem um cartão de **Filtros** no topo. Depois de gerar, o resultado aparece em uma tabela abaixo.

### Filtros

| Filtro | O que é |
|---|---|
| Processo | Número do processo (ex.: 0000000-00.0000.0.00.0000). |
| Tribunal | Tribunal. Ao escolher, libera as opções de Comarca. |
| Comarca | Comarca (depende do tribunal escolhido). Ao escolher, libera as Varas. |
| Vara | Vara (depende da comarca escolhida). |
| Cliente | Filtra por cliente do processo. Comece a digitar o nome e selecione. |
| Data de conclusão de | Tipo de etapa cuja data de conclusão será usada para filtrar o período. |
| Data inicial / Data final | Intervalo de datas. |
| Status etapa | Todos, Concluída ou Não Concluída. |
| Pagamento | Todos, Não Pago ou Pago. |
| Com responsável | Todos, Sim ou Não — filtra processos que têm (ou não) responsável atribuído. |
| Nome Responsável | Filtra por um responsável específico. Comece a digitar o nome e selecione. |

### Resultado

O topo do resultado mostra a contagem de **processos**. Cada processo aparece como um bloco com:

| Coluna | O que é |
|---|---|
| Processo | Número do processo. |
| Comarca / Vara | UF, comarca e vara do processo. |
| Cliente | Nome do cliente. |
| Colunas de etapas | Uma coluna por tipo de etapa: **sim** (verde) se concluída, **não** (vermelho) se não. |

Logo abaixo de cada processo há um detalhamento por **responsável**: Responsável, Etapa(s), Pagamento(s) (quantidade), **Total Pago** e **Não pago**. Quando o processo não tem responsáveis, aparece "Sem responsáveis".

## O que dá pra fazer aqui

### Gerar o relatório na tela

1. Preencha os filtros desejados (todos são opcionais — deixe em branco para trazer tudo).
2. Clique em **Gerar relatório**.
3. O resultado aparece logo abaixo, com a contagem de processos e o detalhamento por etapa e responsável.

### Exportar para Excel

1. Preencha os filtros desejados.
2. Clique em **Exportar Excel**.
3. O arquivo é baixado com os mesmos dados do relatório.

## Dicas e observações

- Os filtros de **Tribunal → Comarca → Vara** são encadeados: escolha primeiro o tribunal para liberar as comarcas, e a comarca para liberar as varas.
- Para acompanhar pagamentos pendentes, combine **Pagamento = Não Pago** com o período desejado.
- Todos os filtros são opcionais; sem nenhum filtro o relatório traz todos os processos do período padrão.

## Veja também

- [Tempo de Trabalho](./colab-tempo-trabalho.md)
- [Módulo de Relatórios](./relatorios.md)
