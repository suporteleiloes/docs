---
title: Gestão de Comitentes
sidebar_position: 1
---

# Gestão de Comitentes

O comitente é quem entrega bens para o leiloeiro vender. Esta é a tela central do módulo: aqui você vê todos os comitentes cadastrados, busca, filtra, cadastra novos e mantém os dados de cada um sempre atualizados.

## Como acessar

**ERP** → **Comitentes** → **Comitentes** (lista).

![Gestão de Comitentes](/img/manual/erp/comitentes-lista.png)

## O que você vê nesta tela

No topo, três indicadores rápidos mostram o panorama da sua carteira:

| Indicador | O que é |
|---|---|
| Total | Quantidade total de comitentes cadastrados |
| Ativos | Quantos estão ativos no momento |
| Bens geridos | Quantos bens estão sob gestão dos comitentes |

Logo abaixo há três abas que filtram a lista: **Ativos**, **Inativos** e **Todos**. Cada aba mostra a contagem de registros correspondente.

A lista em si tem as seguintes colunas:

| Coluna | O que é |
|---|---|
| ID | Número/código interno do comitente |
| Nome | Nome (ou razão social) e indicação de Pessoa Física / Pessoa Jurídica |
| Tipo | Tipo de comitente (classificação que você define em Tipos de comitente) |
| Data Cadastro | Quando o comitente foi cadastrado |
| Apelido | Apelido interno usado para identificar o comitente rapidamente |
| Documento | CPF ou CNPJ |
| Situação | Ativo ou Inativo |

## O que dá pra fazer aqui

### Buscar e filtrar

- No campo de busca, digite **nome, documento ou apelido** e pressione Enter.
- Clique em **Mais filtros** para abrir o painel de filtros avançados, onde você pode refinar por:
  - **Código** (ID exato do comitente)
  - **Tipo de pessoa** (Pessoa Física ou Pessoa Jurídica)
  - **Documento (CPF/CNPJ)** — pode digitar só os números
  - **Cadastro de** e **Cadastro até** (intervalo de datas de cadastro)
- Clique em **Aplicar** para usar os filtros, **Limpar filtros** para zerar ou **Fechar** para recolher o painel.

### Cadastrar um novo comitente

1. Clique em **Novo comitente** (canto superior direito).
2. Preencha o formulário que abre, dividido em abas: **Identificação**, **Endereços**, **Contatos**, **Dados Bancários**, **Automação** e **Configurações**. Os detalhes de cada aba estão na [página do registro do comitente](./comitentes-id.md).
3. Os campos obrigatórios mínimos são **Nome/Razão social**, **Apelido**, **CPF/CNPJ** e pelo menos um **e-mail**.
4. Clique em **Salvar**. O novo comitente passa a aparecer na lista.

### Abrir o registro completo

- Clique duas vezes em uma linha para abrir a [tela de detalhe do comitente](./comitentes-id.md), com todas as abas (Dados, Bancários, Endereço, Contato, Bens, Manifestos, Aprovação, Acesso e Automação).

### Editar pela lista

- Passe o mouse sobre a linha e clique no ícone de **lápis** (Editar) para abrir o formulário já preenchido.

### Inativar (não exclui)

Comitente nunca é apagado de verdade — ele é apenas **desativado** e some das listagens, podendo ser reativado depois.

1. Clique no ícone de **inativar** na linha desejada.
2. Confirme na janela que aparece.

### Ações em massa

Marque os comitentes desejados nas caixas de seleção e use a barra de ações em massa:

- **Exportar** — gera um arquivo CSV com os comitentes selecionados (ID, nome, documento, tipo e situação).
- **Inativar** — desativa todos os selecionados de uma vez (com confirmação).

## Dicas e observações

- **Atalhos de teclado:** `Shift + N` abre um novo comitente; `Shift + Enter` foca o campo de busca; `Ctrl + Shift + R` limpa todos os filtros.
- Inativar não apaga: o comitente fica oculto, mas pode ser reativado a qualquer momento pela aba **Inativos** ou pela tela de detalhe.
- A coluna **Tipo** é a classificação livre que você cria em [Tipos de comitente](./comitentes-tipos.md). Já o filtro **Tipo de pessoa** separa Pessoa Física de Pessoa Jurídica.

## Veja também

- [Registro do comitente](./comitentes-id.md)
- [Tipos de comitente](./comitentes-tipos.md)
- [Grupos de comitentes](./comitentes-grupos.md)
- [Prestação de Contas](./comitentes-prestacao.md)
