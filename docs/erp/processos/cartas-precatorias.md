---
title: Cartas Precatórias
sidebar_position: 2
---

# Cartas Precatórias

A tela de **Cartas Precatórias** centraliza o cadastro e o acompanhamento das cartas precatórias dos processos da leiloeira — o documento pelo qual um juízo solicita a outro o cumprimento de um ato. Aqui você registra número, tipo, instância, órgão, advogado responsável, comarca/vara, datas de envio e retorno, e acompanha a situação de cada carta.

## Como acessar

**Processos** → **Cartas Precatórias**.

Você também pode chegar a esta tela já filtrada por um processo específico, ao acessá-la a partir de um processo (pela rota do processo). Nesse caso, a lista mostra apenas as cartas daquele processo.

![Cartas Precatórias](/img/manual/erp/cartas-precatorias.png)

## O que você vê nesta tela

Uma lista (tabela) com todas as cartas precatórias cadastradas, com paginação no rodapé. É possível exibir **20**, **50** ou **100** registros por página.

| Coluna | O que é |
|---|---|
| **#** | Número (identificador) da carta. Fica oculto na visão de celular. |
| **Número** | Número da carta/recurso (no padrão CNJ). É a informação principal da linha. |
| **Tipo** | Tipo de recurso (ex.: precatória, agravo). Fica oculto na visão de celular. |
| **Origem** | Comarca/juízo de origem. |
| **Destino** | Comarca/juízo de destino. |
| **Envio** | Data de envio da carta. Mostra um traço quando não informada. |
| **Status** | Etiqueta colorida com a situação: **Em andamento**, **Finalizada** ou **Cancelada**. |
| (ações) | Botões de **Editar** e **Excluir** no fim de cada linha. |

> Observação: cartas antigas podem exibir status em outros rótulos (Em elaboração, Enviada, Recebida, Cumprida, Devolvida, Pendente), mantidos apenas para compatibilidade com dados anteriores. Cartas novas usam **Em andamento / Finalizada / Cancelada**.

## O que dá pra fazer aqui

- **Nova carta** — botão no canto superior direito, abre o formulário de cadastro.
- **Editar** (ícone de lápis) — reabre o formulário com os dados da carta para alteração.
- **Excluir** (ícone de lixeira) — remove a carta, após confirmação.
- **Paginar / mudar a quantidade por página** — controles no rodapé da lista.

### Cadastrar uma nova carta precatória

1. Clique em **Nova carta**.
2. Preencha o **Número (CNJ)** — o campo aplica automaticamente a máscara do número único (formato `0000000-00.0000.0.00.0000`). **Obrigatório**.
3. Selecione o **Tipo** de recurso na lista (ex.: precatória, agravo). **Obrigatório**.
4. Escolha o **Status**: **Em andamento**, **Finalizada** ou **Cancelada**. **Obrigatório** (o padrão de uma carta nova é Em andamento).
5. Selecione a **Instância**. **Obrigatório**.
6. Selecione o **Órgão** (tribunal). **Obrigatório**.
7. Informe a **Data** da carta no calendário. **Obrigatório**.
8. No campo **Advogado**, digite o nome e escolha o advogado responsável na lista de sugestões. **Obrigatório**.
9. (Opcional) No campo **Processo**, digite parte do número e selecione o processo vinculado. Se você abriu a tela a partir de um processo, esse vínculo já vem preenchido.
10. (Opcional) Informe **Cidade** e selecione a **UF**.
11. (Opcional) Selecione a **Comarca**. Ao escolher uma comarca, o campo **Vara** é habilitado e passa a listar apenas as varas daquela comarca.
12. (Opcional) Selecione a **Vara** (disponível somente após escolher a comarca).
13. (Opcional) Preencha **Origem** e **Destino** (comarcas de origem e de destino da carta).
14. (Opcional) Informe a **Data de envio** e a **Data de retorno**.
15. (Opcional) Escreva uma **Descrição / observações**.
16. Clique em **Criar**. A lista é atualizada com a nova carta.

![Nova carta precatória](/img/manual/erp/cartas-precatorias-novo.png)

### Editar uma carta precatória

1. Na linha desejada, clique no ícone de **lápis** (Editar).
2. Ajuste os campos necessários — por exemplo, mude o **Status** para **Finalizada** quando a carta for concluída, ou preencha a **Data de retorno**.
3. Clique em **Salvar**.

### Excluir uma carta precatória

1. Na linha desejada, clique no ícone de **lixeira** (Excluir).
2. Confirme a exclusão na janela que aparece clicando em **Excluir**.

## Dicas e observações

- **Campos obrigatórios:** Número, Tipo, Status, Instância, Órgão, Data e Advogado. Se algum deles ficar em branco, o sistema avisa quais faltam ao tentar salvar (todos marcados com `*` no formulário).
- O **Número (CNJ)** é formatado sozinho enquanto você digita — basta inserir os algarismos.
- O campo **Vara** só fica disponível depois de escolher uma **Comarca**; ao trocar de comarca, a vara selecionada é zerada.
- Os campos **Advogado** e **Processo** usam busca: digite parte do nome ou do número e escolha na lista de sugestões.
- A exclusão sempre pede confirmação, evitando remoções acidentais.

## Veja também

- [Intimações](./intimacoes.md)
