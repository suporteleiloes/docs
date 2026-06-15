---
title: Variáveis do Sistema
sidebar_position: 5
---

# Variáveis do Sistema

As **Variáveis** são atalhos de texto que você usa dentro de templates e documentos. Em vez de digitar sempre o mesmo conteúdo (como o nome do leiloeiro ou um endereço), você cria uma variável e a referencia pelo nome — quando o documento é gerado, o sistema substitui pelo valor cadastrado.

## Como acessar

**Configurações · Cadastro Básico** → **Variáveis**.

![Variáveis do Sistema](/img/manual/erp/configuracoes-variaveis.png)

## O que você vê nesta tela

No topo, um aviso lembra a sintaxe de uso: dentro de templates, escreva o nome da variável entre chaves duplas, no formato `{{chave}}`. Ainda no aviso, há a opção **Mostrar internas**, que exibe também as variáveis fornecidas pelo próprio sistema.

A tabela traz:

| Coluna | O que é |
|---|---|
| **#** | Número interno da variável (variáveis do sistema vêm marcadas com "sys") |
| **Nome** | A chave da variável, exibida pronta para uso no formato `{{nome}}`, com um botão para copiar |
| **Valor** | O texto que a variável resulta quando usada |
| **Descrição** | Explicação de para que serve |
| **Status** | Ativa, Inativa ou Sistema (no caso das internas) |

O filtro de busca (por nome ou valor) e o filtro de **Status** (Todas / Apenas ativas / Apenas inativas) ficam acima da tabela.

## O que dá pra fazer aqui

### Cadastrar uma nova variável

1. Clique em **Nova variável**.
2. Preencha o **Nome da variável** — sem espaços nem acentos (ex.: `LEILOEIRO.NOME`). O nome precisa ter mais de 2 caracteres.
3. Preencha o **Valor** (o que a variável vai resultar, ex.: o nome real do leiloeiro). É obrigatório.
4. (Opcional) Escreva uma **Descrição**.
5. Defina o **Status** (Ativa/Inativa).
6. Clique em **Cadastrar**.

![Nova variável](/img/manual/erp/configuracoes-variaveis-novo.png)

### Editar uma variável

Dê um duplo clique na linha ou clique no botão **Editar** (lápis). Ajuste os campos e clique em **Atualizar**. No modal de edição há também o botão **Excluir**.

### Copiar a variável para usar em um template

Clique no botão de **copiar** ao lado do nome (na coluna Nome). O sistema copia o texto pronto no formato `{{nome}}` para você colar no template ou documento.

### Excluir uma variável

Clique no botão **Excluir** (lixeira) na linha e confirme. Atenção: templates que usam essa variável podem ser afetados.

## Dicas e observações

- As variáveis marcadas como **Sistema** (internas) são somente leitura: não podem ser editadas nem excluídas. Elas só aparecem quando você liga a opção **Mostrar internas**.
- Use nomes claros e padronizados (por exemplo, prefixos como `LEILOEIRO.`, `EMPRESA.`) para facilitar o uso nos templates.
- Antes de excluir uma variável, verifique se ela não está sendo usada em documentos importantes.

## Veja também

- [Cadastro Básico](cadastro.md)
- [Configurações Globais](configuracoes-globais.md)
