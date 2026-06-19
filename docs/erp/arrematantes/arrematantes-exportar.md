---
title: Exportar Base
sidebar_position: 6
---

# Exportar Base

Esta tela gera um arquivo com a base de arrematantes — completa ou filtrada — para usar em outros sistemas (CRM, planilhas, mailing, etc.). Você escolhe os filtros, as colunas e o formato do arquivo.

## Como acessar

**Arrematantes** → **Exportar** (rota `/arrematantes/exportar`), ou clique no botão **Exportar** no topo da [Gestão de Arrematantes](./arrematantes-lista.md).

![Exportar Base](/img/manual/erp/arrematantes-exportar.png)

## O que você vê nesta tela

A tela tem três blocos: **Filtros**, **Colunas** e os **botões de exportação**.

### Filtros

| Campo | O que faz |
|---|---|
| Status do cadastro | Limita por situação: Todos, Pendente, Em análise, Aprovado, Reprovado, Bloqueado |
| Tipo / Papel | Todos, Pessoa Física, Pessoa Jurídica, Aprovados ou Pendentes |
| Cadastrado a partir de | Data inicial do período de cadastro |
| Cadastrado até | Data final do período de cadastro |
| Buscar por CPF/CNPJ | Filtra por um documento (apenas números) |
| Tags | Filtra por tags, separadas por vírgula (ex.: vip, inadimplente) |

> **Importante (limitação atual):** nesta versão os filtros **ainda não são aplicados** na geração do arquivo. A exportação sempre traz a **base inteira** (todos os arrematantes não excluídos), independentemente do que você preencher acima. Para recortar a base, exporte tudo e filtre depois na planilha, ou selecione os arrematantes desejados na [Gestão de Arrematantes](./arrematantes-lista.md) e use **Exportar** nas ações em massa.
> A confirmar com Tiago: previsão para os filtros passarem a valer no servidor.

### Colunas

As colunas disponíveis ficam organizadas em seções recolhíveis. Cada seção mostra quantas colunas estão marcadas (ex.: "3/12").

| Seção | Exemplos de colunas |
|---|---|
| Dados Pessoais | ID, Data Cadastro, Nome, Apelido, Documento, Data de Nascimento, Sexo, Tipo (PF/PJ), Status, Pode comprar sucata, Observação, Tags |
| Cônjuge | Regime de casamento, Estado civil, CPF/Nome/RG do cônjuge, Regime |
| Contatos | E-mails, Telefones |
| Endereço | Logradouro, Número, Complemento, Bairro, Cidade, Estado (UF), País, CEP |
| Histórico & Financeiro | Leilões habilitados, Leilões com arrematação, Valor total arrematado |

Já vêm marcadas por padrão as principais (ID, Data Cadastro, Nome, Apelido, Documento, Tipo, Status, E-mails, Telefones).

> **Colunas sem dados no arquivo (limitação atual):** algumas colunas aparecem na tela mas **não são preenchidas** na exportação porque ainda não existem no gerador do servidor. São elas: **Observação**, **Tags** e toda a seção **Histórico & Financeiro** (Leilões habilitados, Leilões com arrematação, Valor total arrematado). Se você marcá-las, elas simplesmente não saem no arquivo. As demais colunas (Dados Pessoais restantes, Cônjuge, Contatos e Endereço) são exportadas normalmente.

## O que dá pra fazer aqui

### Exportar a base

1. (Opcional) Ajuste os **Filtros** para restringir quem entra no arquivo.
2. Escolha as **Colunas** desejadas:
   - Abra/feche cada seção clicando no título.
   - Marque/desmarque colunas individualmente.
   - Use **Todos** / **Nenhum** dentro de uma seção, ou **Marcar todas** / **Desmarcar todas** no topo.
   - O contador "X selecionada(s)" mostra quantas colunas vão para o arquivo.
3. Clique no formato desejado:
   - **Excel (.xlsx)**
   - **CSV (.csv)**
   - **PDF (.pdf)**
4. O arquivo é gerado e baixado automaticamente.

> **Atenção ao formato (limitação atual):** independentemente do botão escolhido (Excel, CSV ou PDF), o servidor gera hoje **sempre uma planilha Excel (.xlsx)**. Ao clicar em **CSV** ou **PDF**, o arquivo baixado tem a extensão do botão, mas o conteúdo é o de uma planilha Excel — pode não abrir corretamente como CSV/PDF. Use o botão **Excel (.xlsx)** para um arquivo consistente.
> A confirmar com Tiago: previsão para CSV e PDF gerarem o formato real.

## Dicas e observações

- É preciso marcar **ao menos uma coluna** para exportar; enquanto nenhuma estiver marcada, os botões ficam desativados e aparece o aviso "Selecione ao menos uma coluna para exportar".
- A exportação traz sempre a base inteira (veja a observação sobre filtros acima). Para gerar recortes hoje, filtre o arquivo depois de baixá-lo.
- Para exportar apenas alguns arrematantes já listados, você também pode selecioná-los na [Gestão de Arrematantes](./arrematantes-lista.md) e usar **Exportar** nas ações em massa.
- Cadastros excluídos não entram no arquivo.
- **Permissão necessária**: listar arrematantes (`earrematante/l`) — esta tela usa a mesma permissão da Gestão de Arrematantes para gerar o arquivo.

## Veja também

- [Gestão de Arrematantes](./arrematantes-lista.md)
