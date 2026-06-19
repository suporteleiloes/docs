---
title: Listas de contatos
sidebar_position: 2
---

# Listas de contatos

As listas de contatos agrupam pessoas (nome + e-mail e/ou telefone) para uso em marketing — por exemplo, "Arrematantes ativos" ou "Interessados em imóveis". Cada lista guarda seus próprios contatos.

A **audiência efetiva** de uma lista (o número que aparece na coluna *Inscritos* e que recebe as campanhas) é a soma, sem repetição, de duas fontes:

- **Contatos manuais / importados** — pessoas adicionadas direto pelo formulário da lista ou por CSV.
- **Pessoas do CRM** — registros do cadastro de pessoas vinculados a esta lista (gerenciados no próprio CRM, não aqui).

No gerenciador de inscritos, um selo identifica a origem de cada contato: **CRM** (veio do cadastro de pessoas), **CRM + contato** (está nas duas fontes) ou sem selo (contato manual/CSV).

## Como acessar

**CRM** → **Marketing** → **Listas de contatos** (rota `/crm/listas`).

![Listas de contatos](/img/manual/crm/crm-listas.png)

## O que você vê nesta tela

Uma tabela com todas as listas e uma barra de busca no topo.

| Coluna | O que é |
|---|---|
| **#** | Número (ID) da lista. |
| **Nome** | Nome da lista. |
| **Descrição** | Texto livre de uso interno. |
| **Inscritos** | Quantidade de contatos na audiência efetiva (contatos + pessoas do CRM, sem repetição). |
| **Criada em** | Data em que a lista foi criada. |
| (ações) | Botões para gerenciar inscritos, importar CSV, exportar CSV, editar e excluir. |

## O que dá pra fazer aqui

- **Nova lista** — botão no canto superior direito.
- **Buscar** — filtra as listas pelo nome.
- **Gerenciar inscritos** — ícone de pessoas na linha (ou dê duplo clique na linha).
- **Importar CSV** — ícone de seta para cima na linha; adiciona contatos em massa a partir de um arquivo.
- **Exportar CSV** — ícone de seta para baixo na linha; baixa a audiência efetiva da lista em CSV.
- **Editar** — ícone de lápis na linha.
- **Excluir** — ícone de lixeira na linha.

### Criar uma nova lista

1. Clique em **Nova lista**.
2. Preencha **Nome** (obrigatório). Ex.: "Arrematantes ativos".
3. Preencha **Descrição** (opcional) — uma nota de uso interno.
4. Clique em **Criar**. A lista aparece na tabela.

![Nova lista](/img/manual/crm/crm-listas-nova.png)

### Editar uma lista

1. Clique no ícone de **lápis** na linha da lista.
2. Ajuste o nome e/ou a descrição.
3. Clique em **Salvar**.

### Gerenciar inscritos de uma lista

1. Clique no ícone de **pessoas** na linha (ou dê duplo clique na linha).
2. Abre uma janela com o formulário "Adicionar inscrito" à esquerda e a audiência à direita.
3. Para **adicionar**: preencha **Nome** (obrigatório) e ao menos **E-mail** ou **Telefone**; clique em **Adicionar**.
4. Para **buscar** dentro da audiência: use o campo de busca acima da lista (filtra por nome, e-mail ou telefone). A lista é paginada.
5. Para **remover um contato**: clique na lixeira ao lado dele e confirme.
6. Clique em **Fechar** quando terminar.

> Só é possível **adicionar** e **remover** contatos — não há edição inline de um inscrito. Para corrigir os dados de um contato, remova-o e adicione novamente.
>
> Pessoas que vieram do CRM (selo **CRM**) **não têm botão de remover** aqui: elas são geridas no cadastro de pessoas do CRM. Só contatos manuais/CSV podem ser removidos por esta janela.

![Inscritos da lista](/img/manual/crm/crm-listas-inscritos.png)

### Importar contatos por CSV

1. Clique no ícone de **importar** (seta para cima) na linha da lista.
2. Selecione um arquivo `.csv` (ou `.txt`).
3. Os contatos são adicionados em massa; ao final, o sistema informa quantos foram importados.

Sobre o arquivo:

- A **primeira linha é o cabeçalho** com os nomes das colunas. As colunas reconhecidas são: `nome`, `email`, `telefone` e `extra` (campo livre opcional).
- O **delimitador** é detectado automaticamente (vírgula, ponto e vírgula, tabulação ou barra vertical).
- Linhas totalmente vazias (sem nome, e-mail e telefone) são ignoradas.

### Exportar contatos para CSV

1. Clique no ícone de **exportar** (seta para baixo) na linha da lista.
2. O navegador baixa um arquivo `lista-{número}-inscritos.csv` com a audiência efetiva.
3. O arquivo traz as colunas `nome`, `email`, `telefone` e `origem` (crm, contato ou ambos).

### Excluir uma lista

1. Clique no ícone de **lixeira** na linha.
2. Confirme. **Atenção:** a lista e todos os seus inscritos são removidos.

## Dicas e observações

- Ao adicionar um inscrito você precisa informar **nome + (e-mail ou telefone)** — só o nome não basta.
- A coluna **Inscritos** conta a audiência efetiva (contatos manuais/CSV mais pessoas do CRM vinculadas, sem repetição) — é exatamente quem recebe as campanhas dessa lista.
- O controle de quem **não deve mais receber e-mail** (bounce, reclamação, descadastro) é feito na [Supressão de e-mail](./crm-supressao.md), que vale por endereço e independe das listas.
- Excluir uma lista é definitivo e leva junto todos os seus contatos manuais — confira antes de confirmar.

## Veja também

- [Importar pessoas (CSV)](./crm-pessoas-import.md)
- [Início do CRM](./crm.md)
