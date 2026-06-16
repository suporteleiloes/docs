---
title: Parceiros
sidebar_position: 1
---

# Parceiros

A tela de **Parceiros** lista todos os parceiros cadastrados na sua leiloeira. Um parceiro é uma pessoa (física ou jurídica) vinculada à operação que pode receber comissão e/ou ter acesso a integrações como o Painel do Parceiro, a API e o ERP. Use esta tela para encontrar um parceiro, conferir rapidamente seus acessos e abrir o registro completo para editar dados ou liberar/revogar acessos.

## Como acessar

**ERP** → **Parceiros**.

![Parceiros](/img/manual/erp/parceiros.png)

## O que você vê nesta tela

No topo há duas abas que filtram a lista por situação. A aba selecionada mostra a contagem de registros encontrados:

| Aba | O que mostra |
|---|---|
| Ativos | Parceiros com situação ativa (exibida por padrão ao abrir a tela) |
| Inativos | Parceiros desativados |

Logo abaixo há a barra de filtros (busca por nome ou e-mail e filtro por período de data) e, em seguida, a tabela com os parceiros.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Nome | Nome do parceiro, com avatar. Abaixo do nome aparece se é **Pessoa Física** ou **Pessoa Jurídica** |
| Código | Número interno do parceiro (ex.: #12) |
| Recebe Comissão | **Sim** ou **Não** — indica se o parceiro recebe comissão |
| E-mail | E-mail principal do parceiro (vem do cadastro da pessoa). Mostra "—" se não houver |
| Telefone | Telefone principal, já formatado. Mostra "—" se não houver |
| API | Bolinha verde quando o acesso à API está habilitado; cinza quando desabilitado |
| ERP | Bolinha verde quando o acesso ao ERP está habilitado; cinza quando desabilitado |
| Painel | Bolinha verde quando o acesso ao Painel do Parceiro está habilitado; cinza quando desabilitado |
| Status | **Ativo** ou **Inativo** |
| (ações) | Botões de **Editar** e **Excluir** no fim de cada linha |

> Dica: passe o mouse sobre as bolinhas das colunas API, ERP e Painel para ver "Habilitado" ou "Desabilitado".

## O que dá pra fazer aqui

### Buscar e filtrar parceiros

1. Use o campo de busca para procurar **por nome ou e-mail**.
2. Se quiser, restrinja por **período de data** usando os filtros de data inicial e final.
3. Clique em **Ativos** ou **Inativos** para alternar entre as situações.
4. A lista se atualiza automaticamente. Ajuste a quantidade de itens por página (20, 50 ou 100) e navegue pelas páginas no rodapé da tabela.

### Abrir / editar um parceiro

1. Clique no botão de lápis (**Editar**) na linha do parceiro — ou clique na própria linha.
2. Você é levado ao **registro do parceiro**, onde edita os dados e gerencia os acessos.

Veja todos os detalhes em [Registro do parceiro](./parceiros-id.md).

### Excluir um parceiro

1. Clique no botão de lixeira (**Excluir**) na linha do parceiro.
2. Uma confirmação aparece avisando que **todos os dados serão perdidos**.
3. Confirme em **Excluir** para remover, ou cancele para manter.

> Atenção: a exclusão é definitiva. Se a ideia for apenas tirar o parceiro de circulação, prefira deixá-lo como **Inativo** (no registro do parceiro, aba **Dados**).

### Novo parceiro

O botão **Novo parceiro** fica no canto superior direito. No momento, o cadastro de um parceiro novo depende do seletor de Pessoa do CRM, que ainda está em migração para o ERP V5 — ao clicar, o sistema exibe um aviso informando isso. Enquanto a migração não conclui, novos parceiros são vinculados a partir do cadastro de Pessoa.

## Dicas e observações

- O **e-mail** e o **telefone** mostrados aqui vêm do cadastro da **Pessoa** vinculada ao parceiro, não de campos próprios do parceiro. Para corrigi-los, atualize a pessoa no módulo CRM/Pessoas.
- As colunas **API**, **ERP** e **Painel** são apenas indicadores. Para ligar ou desligar esses acessos, abra o registro do parceiro e use a aba **Acessos**.
- A coluna **Status** reflete se o parceiro está ativo. Parceiros inativos só aparecem na aba **Inativos**.

## Veja também

- [Registro do parceiro](./parceiros-id.md)
