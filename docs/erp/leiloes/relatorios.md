---
title: Relatórios
sidebar_position: 13
---

# Relatórios

A aba **Relatórios** é a central de documentos do leilão. A partir daqui você gera e baixa todos os relatórios — do resumo geral às certidões jurídicas, passando por lotes, lances, pagamentos e documentos de veículos. Cada relatório pode sair em **PDF**, **Excel (XLSX)** ou **HTML**.

## Como acessar

Abra um leilão e, no menu do leilão, clique em **Relatórios**.

![Relatórios](/img/manual/erp/relatorios.png)

## O que você vê nesta tela

No topo há três **atalhos de acesso rápido** (Resumo, Saída / Vendas e Lances) e um campo de **busca** para encontrar um relatório pelo nome ou descrição. Abaixo, os relatórios ficam organizados em grupos. Cada relatório aparece num cartão com nome, descrição e dois botões: **Gerar** (abre o formulário com formato e filtros) e **PDF** (baixa direto em PDF, sem perguntar nada).

### Grupos e relatórios

| Grupo | Relatórios |
|---|---|
| Principais | Resumo do Leilão, Relatório Sintético, Diário do Leilão, Diário do Leilão V2, Catálogo TXT, Edital. |
| Lotes | Lotes Vendidos, Lotes Não Vendidos, Lotes Condicionais, Lotes Retirados, Exportar Lotes (XLSX). |
| Lances | Relatório de Lances, Lances por Comitente, Exportar Lances (XLSX), Visitas por Lote. |
| Jurídico | Certidão de Publicação, Certidão Negativa, Certidão Negativa (2º), Auto Positivo (Arrematação), Auto de Arrematação (Mod2), Termo de Alienação. |
| Saída & Pagamentos | Documento de Saída, Saída por Arrematante, Pagamentos Efetuados, Pagamentos Maior que Devido. |
| Veículos | Ata de Realização, Confirmação de Dados, Relação para Pátio. |
| Operacional | Auditoria Operacional, Prestação de Contas. |

Alguns relatórios pedem um **filtro** específico no momento de gerar: data, comitente (ID), lote (ID) ou arrematante (ID).

## O que dá pra fazer aqui

### Baixar um relatório rápido (PDF)

1. No cartão do relatório, clique em **PDF**.
2. O sistema gera e baixa o arquivo em PDF, sem abrir formulário. Use quando não precisa de filtros nem de outro formato.

### Gerar com formato e filtros

1. No cartão do relatório (ou em um atalho do topo), clique em **Gerar**.
2. Escolha o **Formato**: PDF, Excel (XLSX) ou HTML.
3. Preencha os filtros que aparecerem (apenas os exigidos pelo relatório escolhido):
   - **Data** (formato AAAA-MM-DD) — ex.: certidão de publicação.
   - **Comitente (ID)** — ex.: lances por comitente, prestação de contas.
   - **Lote (ID)** — ex.: certidões negativas, autos de arrematação, termo de alienação.
   - **Arrematante (ID)** — ex.: saída por arrematante.
4. (Opcional, só em PDF) Em **Opções avançadas**, ative **Assinar digitalmente** para anexar sua assinatura ao PDF e registrar a ação no log de auditoria. Cadastre sua assinatura antes em **Meu Perfil → Assinatura**.
5. (Opcional, só em PDF) Ative **Salvar cópia no(s) bem(ns)** e informe os **IDs dos bens** (separados por vírgula) para anexar o PDF gerado aos arquivos de cada bem.
6. Clique em **Gerar e baixar**.

![Gerar relatório](/img/manual/erp/relatorios-gerar.png)

### Salvar uma cópia do relatório no bem

Se você gerou um PDF assinado ou marcou **Salvar cópia no(s) bem(ns)**, ao final aparece a janela **Salvar cópia no(s) bem(ns)**:

1. Confira o relatório gerado e informe (ou ajuste) os **IDs dos bens**.
2. Clique em **Salvar cópia**. O PDF é adicionado à galeria de arquivos de cada bem (tipo "outros").
3. O sistema mostra em quais bens a cópia foi salva e, se houver, quais falharam.

### Buscar um relatório

1. Digite parte do nome ou da descrição no campo de busca do topo.
2. A lista filtra automaticamente; clique no **X** para limpar.

## Dicas e observações

- O botão **PDF** sempre gera em PDF sem filtros; para Excel, HTML ou filtros, use **Gerar**.
- A **assinatura digital** só está disponível quando o formato é PDF e exige que você tenha cadastrado sua assinatura em Meu Perfil.
- Relatórios de **Veículos** (Ata, Confirmação de Dados, Relação para Pátio) só fazem sentido em leilões de veículos.
- **Visitas por Lote** gera o PDF com os números de visitas; para acompanhar esses números em tela e em tempo real, use a aba [Visitas](visitas.md).
- Se um relatório falhar, verifique se o leilão já tem dados suficientes (lotes, lances, pagamentos) para o que você está pedindo.

## Veja também

- [Visitas](visitas.md)
- [Documentos](documentos.md)
- [Histórico](historico.md)
