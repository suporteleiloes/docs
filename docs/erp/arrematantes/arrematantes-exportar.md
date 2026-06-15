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

## Dicas e observações

- É preciso marcar **ao menos uma coluna** para exportar; enquanto nenhuma estiver marcada, os botões ficam desativados e aparece o aviso "Selecione ao menos uma coluna para exportar".
- Sem filtros, a exportação traz a base inteira. Use os filtros para gerar recortes (ex.: só aprovados de uma cidade num período).
- Para exportar apenas alguns arrematantes já listados, você também pode selecioná-los na [Gestão de Arrematantes](./arrematantes-lista.md) e usar **Exportar** nas ações em massa (CSV).
- **Permissão necessária**: exportar arrematantes (`earrematante/export`).

## Veja também

- [Gestão de Arrematantes](./arrematantes-lista.md)
