---
title: Relatórios
sidebar_position: 1
---

# Relatórios

O módulo **Relatórios** reúne todos os relatórios e ferramentas de análise da leiloeira: desde consultas prontas (produtividade de processos, tempo de bens em estoque, horas trabalhadas) até ferramentas para você criar seus próprios relatórios — incluindo um assistente de **IA** que responde perguntas em português.

## Como acessar

**ERP** → **Relatórios**.

A tela inicial é a **Central de Relatórios**: uma galeria de cartões, organizada por seções (Leilões, Bens, Remoção, Tarefas, Processos, Arrematantes, Colaboradores). No topo há uma **barra de busca** para localizar um relatório pelo nome e um botão **Relatórios dinâmicos** (atalho no canto superior direito).

![Módulo de Relatórios](/img/manual/erp/relatorios.png)

## Como gerar um relatório

Cada cartão se comporta de uma de duas formas:

- **Cartões com "Gerar"** — ao clicar, abre uma **janela de filtros** específica do relatório. Preencha os filtros e escolha o formato de saída (os botões mostram os formatos disponíveis, por exemplo **Gerar HTML**, **Gerar EXCEL**, **Gerar CSV** ou **Gerar PDF**). Antes de gerar, o sistema pede uma confirmação. Alguns relatórios exigem pelo menos um filtro preenchido (ex.: informar o leilão por ID, código ou data) e avisam se faltar.
- **Cartões com "Abrir"** — levam para uma **tela dedicada** (com filtros próprios), como Bens com mais Tempo em Estoque, Tempo de Trabalho, Produtividade, Exportar Arrematantes e Log Operacional.

## O que você encontra aqui

A Central reúne dezenas de relatórios. Os principais por seção:

| Seção | Relatórios |
|---|---|
| **Leilões** | Resumo de Leilões, Leilões Negativos, Exportar Lotes, Exportar Lotes Vendidos, Exportar Lances, Visualizações, Prestação de Contas, Pagamentos efetuados, Pagamento Maior que Devido, Veículos (Ata de Realização / Confirmação de Dados / Relação para Pátio) e Outros (livros diários). |
| **Bens** | Relatório de Bens, Consulta de Estoque, Bens Sem Foto e [Bens com mais Tempo em Estoque](./bens-tempo-estoque.md). |
| **Remoção** | Entrada / Saída de Veículos no Pátio e Previsão de Pagamento de Reboquistas. |
| **Tarefas** | Indicador Diário. |
| **Processos** | Clientes / Envolvimento / Parte, Secretarias, Processos e [Produtividade por Período](./produtividade.md). |
| **Arrematantes** | Compras, Aniversariantes do Mês e [Exportar Arrematantes](./arrematantes-exportar.md). |
| **Colaboradores** | [Tempo de Trabalho](./colab-tempo-trabalho.md) e [Log Operacional](./operacional-logs.md). |

Além da Central, dois recursos ficam disponíveis pelo atalho do topo e pelo menu:

| Ferramenta | Para que serve |
|---|---|
| [Relatórios com IA](./ia.md) | Pergunte em português (ex.: "quantos lotes existem em cada status?") e a IA gera e executa o relatório para você. |
| [Relatórios Dinâmicos](./dinamicos.md) | Crie, salve e reutilize relatórios próprios. Cada relatório pode ser executado e baixado em Excel. |

## Dicas e observações

- Cada relatório tem seus próprios filtros e formatos de saída (tela/HTML, Excel, CSV ou PDF). Veja a página específica de cada um.
- Quando você pede um formato que aquele relatório ainda não suporta, o sistema avisa ou abre a versão em HTML em uma nova aba, em vez de baixar um arquivo quebrado.
- O acesso ao módulo e a cada relatório depende das permissões (ACL) do seu usuário. Se um cartão não aparece, fale com o administrador da conta.

## Veja também

- [Relatórios com IA](./ia.md)
- [Relatórios Dinâmicos](./dinamicos.md)
