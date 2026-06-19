---
title: Reboquistas
sidebar_position: 13
---

# Reboquistas

Esta tela cadastra os reboquistas — quem faz a remoção dos bens. Um reboquista pode ser uma empresa (PJ) ou um autônomo (PF), e agrega os seus veículos (reboques) e motoristas, cada um com acesso próprio ao aplicativo.

## Como acessar
**Remoção** → **Pátio** → **Reboquistas**.

![Reboquistas](/img/manual/erp/remocao-reboquistas.png)

## O que você vê nesta tela
No topo há um aviso explicando o papel do reboquista. Abaixo, um campo de busca por nome ou documento e a lista de reboquistas cadastrados.

| Coluna | O que é |
|---|---|
| # | Número do reboquista no sistema. |
| Reboquista | Nome (com avatar). Clique para abrir o detalhe do reboquista. |
| Tipo | Empresa ou Autônomo. |
| CPF/CNPJ | Documento do reboquista. |
| Status | **Pendente**, **Aprovado** ou **Suspenso** (situação de aprovação do reboquista). Reboquistas desativados aparecem como **Inativo** — não é um valor de status, e sim o resultado de uma desativação (ver "Desativar um reboquista"). |

## O que dá pra fazer aqui

### Buscar um reboquista
Digite parte do nome ou do documento no campo de busca.

### Abrir o detalhe
Clique no nome do reboquista para abrir a página de detalhe, com seus reboques e motoristas.

### Cadastrar um reboquista
1. Clique em **Novo reboquista**.
2. Preencha **Nome / Razão social** (obrigatório).
3. Escolha o **Tipo**: Pessoa Física ou Pessoa Jurídica.
4. Informe o **CPF / CNPJ** (o campo já formata e valida o documento conforme o tipo). O documento é **opcional**, mas, se preenchido, precisa ser válido — um documento inválido bloqueia o salvamento. Se já existir uma pessoa com o mesmo documento, o sistema reaproveita esse cadastro em vez de duplicar.
5. Defina o **Status**: Pendente, Aprovado ou Suspenso (o padrão ao criar é **Aprovado**).
6. Em **Form de checklist padrão (code)**, informe o modelo de checklist usado nas GRVs deste reboquista (opcional). Exemplo: `vistoria_veicular`.
7. Ligue as opções conforme necessário:
   - **Atende qualquer comitente**;
   - **Pode receber cotações**.
8. Clique em **Cadastrar**.

![Novo reboquista](/img/manual/erp/remocao-reboquistas-novo.png)

### Editar um reboquista
Na linha do reboquista, clique no ícone de lápis (**Editar**), ajuste os campos e clique em **Salvar**.

### Abrir a pessoa
Clique no ícone de pessoa (**Abrir pessoa**) para abrir o cadastro da pessoa vinculada ao reboquista.

### Desativar um reboquista
Na linha do reboquista, clique no ícone de desativar e confirme. A desativação é reversível em base de dados (não apaga o cadastro): o reboquista passa a **Inativo** e some da lista padrão. Por padrão a lista só mostra reboquistas ativos.

## Regras de negócio
- **Nome obrigatório, documento opcional mas validado.** O botão de salvar fica bloqueado enquanto o nome estiver vazio ou o documento informado for inválido.
- **Deduplicação por documento.** Ao cadastrar, se já existir uma Pessoa com o mesmo CPF/CNPJ, o sistema vincula o papel de reboquista a essa pessoa em vez de criar um cadastro novo. Da mesma forma, se a pessoa já for reboquista, o papel não é duplicado.
- **O que cada chave faz:**
  - **Atende qualquer comitente** — o reboquista pode ser designado para remoções de qualquer comitente, sem restrição de vínculo.
  - **Pode receber cotações** — o reboquista entra na lista de quem pode receber pedidos de cotação de frete.
- **Form de checklist padrão (code)** — define o modelo de checklist/vistoria usado nas guias (GRV) deste reboquista. Deixe em branco para não aplicar um modelo específico.

## Dicas e observações
- O reboquista é um **papel sobre a Pessoa** — o mesmo cadastro de pessoa pode ter outros papéis no sistema. Use o ícone de pessoa na linha para abrir o cadastro completo.
- Os reboques e motoristas do reboquista aparecem na página de detalhe.

## Veja também
- [Detalhe do reboquista](../remocao/remocao-reboquistas-id.md)
- [Motoristas](../remocao/remocao-motoristas.md)
- [GRV / GGV](../remocao/remocao-guias.md)
