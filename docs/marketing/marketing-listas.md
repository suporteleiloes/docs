---
title: Listas de contatos
sidebar_position: 4
---

# Listas de contatos

As listas organizam seus contatos em grupos reutilizáveis (por exemplo, "Arrematantes ativos"). Você usa essas listas como destinatários ao criar campanhas.

## Como acessar

**Marketing** → **Listas**.

![Listas de contatos](/img/manual/marketing/marketing-listas.png)

## O que você vê nesta tela

Uma tabela com todas as listas cadastradas e um campo de busca.

| Coluna | O que é |
|---|---|
| # | Número (ID) da lista |
| Nome | Nome da lista |
| Descrição | Texto interno descrevendo o uso da lista |
| Inscritos | Quantos contatos a lista tem |
| Criada em | Data de criação |

## O que dá pra fazer aqui

### Criar uma nova lista

1. Clique em **Nova lista**.
2. Preencha o **Nome** (obrigatório).
3. Opcional: preencha a **Descrição**.
4. Clique em **Criar**.

![Nova lista](/img/manual/marketing/marketing-listas-nova.png)

### Editar uma lista

1. Clique no ícone **Editar** na linha da lista.
2. Altere nome e/ou descrição.
3. Clique em **Salvar**.

### Excluir uma lista

1. Clique no ícone **Excluir** na linha da lista.
2. Confirme. A lista e todos os seus inscritos são removidos.

### Importar contatos por CSV

1. Clique no ícone **Importar CSV** na linha da lista.
2. Escolha um arquivo `.csv` (ou `.txt`). A **primeira linha deve ser o cabeçalho**, com as colunas reconhecidas: **nome**, **email**, **telefone** e (opcional) **extra**. O sistema detecta sozinho o separador (vírgula, ponto e vírgula, tabulação ou barra vertical).
3. Os contatos são importados e o sistema informa quantos foram criados. Linhas totalmente vazias são ignoradas; linhas com erro são reportadas sem interromper o restante da importação.

### Exportar contatos

- Clique no ícone **Exportar CSV** para baixar os contatos da lista.

### Gerenciar inscritos de uma lista

1. Clique no ícone **Gerenciar inscritos** (ou dê um duplo clique na linha da lista).
2. No formulário à esquerda, **adicione um inscrito**: preencha **Nome** (obrigatório) e **E-mail** ou **Telefone** (pelo menos um), depois clique em **Adicionar**.
3. À direita, veja a lista de contatos. Use o campo **Buscar contato...** para localizar alguém.
4. Para remover um contato, clique no ícone de lixeira na linha dele e confirme.

![Inscritos da lista](/img/manual/marketing/marketing-listas-inscritos.png)

## Regras de negócio

- **Audiência efetiva.** O número de **Inscritos** e a exportação consideram a audiência efetiva da lista — a união, sem duplicar, dos contatos adicionados manualmente/por CSV com os contatos vinculados via CRM. Por isso o total no badge bate com o que a campanha vai usar.
- **Origem do contato.** Na exportação e no gerenciador de inscritos, cada contato traz a origem: **crm** (veio do CRM), **contato** (adicionado aqui) ou **ambos**. Só os de origem **contato**/**ambos** podem ser removidos por esta tela.
- **Exportar CSV** baixa um arquivo com as colunas **nome, email, telefone, origem**, já com BOM UTF-8 (abre certo no Excel).
- **Excluir a lista** marca-a como removida e some da tela; é uma exclusão lógica (soft delete), mas pela interface não há "desfazer".

## Erros comuns

- **Conteúdo do arquivo ausente / não está em base64**: reenvie o CSV; o arquivo precisa ser lido corretamente pelo navegador antes do envio.
- **CSV importou 0 contatos**: confira se há cabeçalho na primeira linha e ao menos as colunas **nome**, **email** ou **telefone**.
- **Não consigo remover um contato**: ele provavelmente veio do **CRM** (selo CRM). Ajuste-o no CRM, não aqui.

## Dicas e observações

- Não há edição de um contato já cadastrado: para corrigir um inscrito, remova-o e adicione novamente.
- Contatos vindos do CRM aparecem com o selo **CRM** (ou **CRM + contato**). Esses contatos são geridos no CRM e não podem ser removidos por aqui — só os contatos adicionados manualmente ou por CSV têm o botão de remover.
- Para um inscrito, é obrigatório informar pelo menos nome e um meio de contato (e-mail ou telefone).

## Veja também

- [Nova campanha](marketing-campanhas-nova.md)
- [Campanhas](marketing-campanhas.md)
- [Remetentes](marketing-remetentes.md)
