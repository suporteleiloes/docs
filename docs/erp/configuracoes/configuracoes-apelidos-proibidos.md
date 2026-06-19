---
title: Apelidos proibidos para arrematantes
sidebar_position: 3
---

# Apelidos proibidos para arrematantes

Esta tela mantém a lista de **termos proibidos** para apelidos de arrematantes. Quando um arrematante tenta usar um apelido igual a — ou que contenha (como palavra inteira) — um desses termos, o cadastro é bloqueado. Serve para evitar apelidos ofensivos (palavrões) e termos que poderiam confundir os outros participantes (como "EM LEILAO", "ARREMATADO" ou "LEILOEIRO").

A validação acontece no **cadastro do arrematante** (criação ou edição do apelido): se o apelido bater com algum termo **ativo**, o sistema rejeita o salvamento e aponta o termo que causou o bloqueio. Termos desativados não bloqueiam nada — ficam guardados só para referência ou reativação futura.

## Como acessar

**Configurações** → **Globais** → **Apelidos proibidos para arrematantes**

![Apelidos proibidos para arrematantes](/img/manual/erp/configuracoes-apelidos-proibidos.png)

## O que você vê nesta tela

No topo do quadro há um texto explicativo e um **filtro por tipo**. Abaixo, a lista de termos.

| Coluna | O que é |
|---|---|
| Termo proibido | A palavra ou expressão bloqueada. |
| Tipo | A categoria do termo: **Crítico (status/papel)**, **Palavrão** ou **Personalizado**. |
| Ativo | Indica se a regra está em vigor (**Sim**) ou desativada (**Não**). |

A lista já vem com uma **pré-lista** pronta, com palavrões e termos críticos.

## O que dá pra fazer aqui

Em cada linha, há os botões de **Editar** (lápis) e **Excluir** (lixeira). No topo há o botão **Novo termo** e o filtro de tipo.

### Filtrar por tipo

Use o seletor no canto superior direito do quadro para mostrar **Todos os tipos**, ou apenas **Crítico (status/papel)**, **Palavrão** ou **Personalizado**.

### Cadastrar um novo termo

1. Clique em **Novo termo**.
2. Em **Termo**, digite a palavra ou expressão a bloquear (ex.: `LEILOEIRO`). Campo obrigatório.
3. Escolha o **Tipo**: Crítico, Palavrão ou Personalizado.
4. Deixe a chave **Termo ativo** ligada para que a regra entre em vigor.
5. Clique em **Salvar**.

![Novo termo proibido](/img/manual/erp/configuracoes-apelidos-proibidos-novo.png)

### Editar um termo

1. Clique no ícone de **lápis** na linha do termo.
2. Ajuste o termo, o tipo ou a chave de ativação.
3. Clique em **Salvar**.

### Excluir um termo

1. Clique no ícone de **lixeira**.
2. Confirme a remoção na mensagem que aparece.

## Dicas e observações

- O bloqueio considera tanto o apelido **igual** ao termo quanto apelidos que **contenham o termo como palavra inteira** (a comparação ignora maiúsculas/minúsculas e usa limites de palavra, então "LEILOEIRO" não barra "MINHALEILOEIRA", por exemplo).
- Os termos são **gravados em letras maiúsculas** automaticamente — não importa como você digitar.
- **Não é possível cadastrar dois termos iguais.** Se o termo já existir, o sistema avisa.
- Para desativar um termo temporariamente sem apagá-lo, edite-o e desligue a chave **Termo ativo**. O termo continua na lista, mas deixa de bloquear apelidos.
- Os termos da pré-lista podem ser editados ou removidos como qualquer outro.
- Mudanças na lista valem para os **próximos** cadastros/edições de apelido; apelidos já gravados não são revalidados automaticamente.

## Veja também

- [Sites (Multisite)](./configuracoes-sites.md)
