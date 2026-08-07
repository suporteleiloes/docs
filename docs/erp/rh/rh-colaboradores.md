---
title: Colaboradores
sidebar_position: 2
---

# Colaboradores

A tela de Colaboradores é o cadastro central das pessoas que trabalham na sua leiloeira. Aqui você consulta, filtra, cadastra, edita e inativa colaboradores, e enxerga rapidamente o cargo, o departamento, o vínculo, o salário e a situação de cada um.

## Pré-requisitos

Você consegue cadastrar um colaborador só com o nome, mas, para aproveitar a tela por inteiro, cadastre antes:

- os [Departamentos](./rh-departamentos.md) da leiloeira;
- os [Cargos](./rh-cargos.md) (que já vinculam um departamento e sugerem um salário-base).

Sem isso, os campos **Departamento** e **Cargo** ficam vazios no cadastro do colaborador.

## Como acessar

**ERP** → **RH** → **Colaboradores** (ou clique no botão **Colaboradores** no Dashboard de RH).

![Colaboradores](/img/manual/erp/rh-colaboradores.png)

## O que você vê nesta tela

No topo há uma barra de filtros; logo abaixo, a tabela com todos os colaboradores. Cada linha pode ser clicada para abrir a ficha completa da pessoa.

### Filtros

| Filtro | O que faz |
|---|---|
| Campo de busca | Procura por nome, CPF, e-mail ou matrícula |
| Status | Filtra por situação: Ativo, Inativo, Afastado, Férias ou Desligado |
| Departamento | Mostra apenas colaboradores de um departamento |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| Colaborador | Nome da pessoa, com CPF e matrícula (quando houver) |
| Cargo | Cargo ao qual a pessoa está vinculada |
| Departamento | Departamento da pessoa |
| Vínculo | Tipo de vínculo: CLT, PJ, Estágio, Temporário ou Autônomo |
| Salário | Remuneração base cadastrada |
| Status | Situação atual (Ativo, Inativo, Afastado, Férias, Desligado) |

## O que dá pra fazer aqui

### Cadastrar um novo colaborador

1. Clique em **+ Novo colaborador**.
2. Preencha **Nome completo** (obrigatório). É o único campo realmente obrigatório.
3. Informe o **CPF** (opcional; se preenchido, é validado automaticamente — também aceita CNPJ, útil para vínculos PJ) e a **Matrícula**.
4. Preencha **E-mail** e **Telefone**, se tiver.
5. Escolha o **Departamento** e o **Cargo**.
6. Selecione o **Tipo de vínculo** (CLT, PJ, Estágio, Temporário, Autônomo) e o **Status**.
7. Informe a **Data de admissão** e a **Data de nascimento**.
8. Preencha o **Salário / remuneração base**.
9. Se o status for **Inativo** ou **Desligado**, aparece o campo **Data de desligamento** — preencha-o.
10. Use **Observações** para anotações internas.
11. Clique em **Cadastrar**. O colaborador passa a aparecer na lista.

![Novo colaborador](/img/manual/erp/rh-colaboradores-novo.png)

### Editar um colaborador

1. Na linha desejada, clique no ícone de lápis (**✎**).
2. Ajuste os campos necessários.
3. Clique em **Salvar**.

### Abrir a ficha completa

Clique em qualquer parte da linha (fora dos ícones de ação) para abrir a ficha do colaborador, com o resumo dos dados e o histórico de eventos e lançamentos financeiros.

### Inativar um colaborador

1. Na linha desejada, clique no ícone **⨯**.
2. Confirme a mensagem **"Inativar colaborador?"** clicando em **Inativar**.
3. O colaborador é marcado como inativo (não é apagado do sistema).

## Participação, custo e times

O cadastro do colaborador ganhou campos que o conectam ao [Painel da Equipe](./rh-painel-equipe.md) — o painel que cruza tarefas, chamados e custo por pessoa:

![Novos campos do colaborador](/img/manual/erp/rh/colaborador-modal.jpg)

| Campo | O que é |
|---|---|
| Participa de Tarefas | Quando marcado, o colaborador passa a contar nos cartões e na carga de trabalho do módulo de Tarefas no [Painel da Equipe](./rh-painel-equipe.md). |
| Participa de Chamados | Igual ao anterior, mas para o módulo de Chamados (atendimento ao cliente). |
| Custo/hora | Valor da hora dessa pessoa. Se você não preencher, o sistema calcula sozinho a partir do Salário ÷ Horas/mês. |
| Horas/mês | Jornada mensal de referência usada nesse cálculo (padrão: 220 horas, se não for informado). |
| Times | Um ou mais [Times](./rh-times.md) aos quais o colaborador pertence. |

Todos esses campos são opcionais. Um colaborador sem "Participa de Tarefas"/"Participa de Chamados" marcado simplesmente não aparece no Painel da Equipe; sem Custo/hora nem Horas/mês definidos, o sistema estima o custo pelo salário com a jornada padrão.

:::danger Salário e custo só aparecem para quem tem permissão
Ver **e** editar o **Salário** e o **Custo/hora** exige a permissão **`rh/custo/ver`**. Sem ela, esses valores vêm **mascarados** em toda parte que os exibiria — lista de colaboradores, ficha, formulário de edição, Painel da Equipe e relatórios — mesmo que a pessoa tenha acesso normal ao RH. O backend também **ignora silenciosamente** qualquer valor de salário enviado por quem não tem a permissão (não dá erro, só não grava). Ter acesso ao módulo de RH ou ao Painel da Equipe **não é suficiente** para ver esses números; é preciso a permissão específica.
:::

## Regras de negócio

- **Nome é o único campo obrigatório.** Todo o resto (CPF, cargo, departamento, salário, datas) é opcional e pode ser preenchido depois.
- **Documento único.** Quando o CPF/CNPJ é informado, não pode haver dois colaboradores ativos com o mesmo documento — o sistema avisa "Já existe um colaborador com este CPF". A identidade (nome + documento) é compartilhada com os demais cadastros de pessoas do ERP, então um documento já conhecido é reaproveitado.
- **Inativar não apaga.** A ação ⨯ marca o colaborador como **Inativo** (soft-delete); ele some da lista de ativos, mas a ficha e o histórico continuam guardados.
- **Cargo e departamento são opcionais e independentes.** Se você remover um cargo ou departamento depois, os colaboradores que o usavam simplesmente ficam sem aquele vínculo (não são apagados).

## Erros comuns

- **"CPF/CNPJ inválido"** — o documento digitado não passou na validação. Confira os dígitos ou deixe o campo em branco.
- **"Já existe um colaborador com este CPF"** — esse documento já está em uso por outro colaborador ativo. Localize-o pela busca em vez de cadastrar de novo.
- **"Nome é obrigatório"** — você tentou salvar sem nome. Preencha o nome completo.

## Dicas e observações

- O CPF não é obrigatório, mas, quando informado, precisa ser válido — o sistema avisa se o número estiver incorreto.
- Inativar não exclui a pessoa: o histórico dela continua disponível na ficha.
- A lista é paginada; você pode escolher exibir 20, 50 ou 100 colaboradores por página.

## Veja também

- [Ficha do colaborador](./rh-colaboradores-id.md)
- [Cargos](./rh-cargos.md)
- [Departamentos](./rh-departamentos.md)
- [Times](./rh-times.md)
- [Painel da Equipe](./rh-painel-equipe.md)
- [Dashboard de RH](./rh.md)
