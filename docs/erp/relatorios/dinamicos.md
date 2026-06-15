---
title: Relatórios Dinâmicos
sidebar_position: 3
---

# Relatórios Dinâmicos

Os **Relatórios Dinâmicos** são relatórios próprios da sua leiloeira, criados sob medida e salvos para reutilização. Cada relatório tem um nome, um código e uma consulta que define o que ele traz. Depois de **aprovado**, qualquer pessoa com acesso pode executá-lo e baixar o resultado em Excel — sem precisar montar nada de novo.

## Como acessar

**ERP** → **Relatórios** → **Relatórios Dinâmicos**.

![Relatórios Dinâmicos](/img/manual/erp/dinamicos.png)

## O que você vê nesta tela

No topo há o botão **+ Novo relatório** e um campo de busca. Abaixo, os relatórios já criados aparecem como cartões.

| Elemento do cartão | O que é |
|---|---|
| Nome | Nome do relatório (ou "Relatório #N" se não tiver nome). |
| Etiqueta de status | **Em Análise** (cinza), **Aprovado** (verde) ou **Reprovado** (vermelho). Só relatórios aprovados podem ser executados. |
| Código | Código único do relatório (ex.: `rel_compras_mensais`). |
| Entidade | Área a que o relatório se refere (bens, leilões, processos...). Mostra "geral" se não informada. |
| Data | Data de criação do relatório. |
| Ações | Botões **Executar**, **Editar** e **Excluir**. |

## O que dá pra fazer aqui

### Criar um novo relatório

1. Clique em **+ Novo relatório**.
2. Preencha **Nome do relatório** (obrigatório).
3. Preencha **Código (único)** — um identificador sem espaços, ex.: `rel_compras_mensais` (obrigatório).
4. Em **Entidade (opcional)**, informe a área (ex.: bens, leilões, processos).
5. No campo **Consulta SQL**, escreva a consulta que define o relatório. Use `:nome` para criar parâmetros que serão pedidos na hora de executar (ex.: `:comitente`).
6. Clique em **Criar**.

> Todo relatório novo entra como **Em Análise** e precisa ser aprovado antes de poder ser executado. A aprovação é feita pela equipe responsável; o status muda sozinho para Aprovado (ou Reprovado).

![Novo relatório dinâmico](/img/manual/erp/dinamicos-novo.png)

### Editar um relatório

1. No cartão do relatório, clique em **Editar**.
2. Ajuste nome, código, entidade ou a consulta.
3. Clique em **Salvar**.

### Executar um relatório (baixar Excel)

1. No cartão, clique em **Executar**.
2. Se o relatório **não estiver aprovado**, aparece um aviso informando que só relatórios aprovados podem ser executados — nesse caso, aguarde a aprovação.
3. Se a consulta tiver parâmetros (`:algo`), abre uma janela pedindo o valor de cada um. Preencha os campos e clique em **Gerar Excel**.
4. Se não houver parâmetros, o download começa imediatamente.
5. O arquivo Excel é baixado com o resultado.

### Excluir um relatório

1. No cartão, clique em **Excluir**.
2. Confirme na janela. **Atenção:** a exclusão é permanente e não pode ser desfeita.

## Dicas e observações

- Apenas relatórios com etiqueta **Aprovado** podem ser executados.
- Os parâmetros (`:nome`) servem para reaproveitar o mesmo relatório com valores diferentes — por exemplo, gerar o mesmo relatório para um comitente ou outro sem criar dois relatórios.
- Para uma consulta rápida e pontual, sem precisar criar/salvar nada, use os [Relatórios com IA](./ia.md).

## Veja também

- [Relatórios com IA](./ia.md)
- [Módulo de Relatórios](./relatorios.md)
