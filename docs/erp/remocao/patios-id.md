---
title: Detalhe do pátio
sidebar_position: 6
---

# Detalhe do pátio

Esta é a tela de um pátio específico. Aqui você vê a ocupação resumida, gerencia as vagas, acompanha as entradas e saídas de bens, define os responsáveis e edita os dados cadastrais — tudo organizado em abas.

## Como acessar

**ERP** → **Pátio & Remoção** → **Pátios** → **duplo clique** em um pátio (endereço `/patios/:id`).

![Detalhe do pátio](/img/manual/erp/patios-id.png)

## O que você vê nesta tela

No topo, um resumo do pátio: endereço, responsável e três indicadores — **Capacidade**, **Ocupadas** e **Disponíveis** — além de uma etiqueta com o **percentual ocupado** (que muda de cor conforme a lotação: verde, azul, laranja e vermelho).

Logo abaixo, a barra de abas:

| Aba | O que mostra |
|---|---|
| **Vagas** | Lista de vagas do local selecionado, com filtros e ações. Veja a página dedicada [Vagas do pátio](./patios-id-vagas.md). |
| **Layout visual** | Mapa colorido das vagas por andar, com legenda de status. |
| **Movimentações** | Histórico de entradas e saídas de bens. |
| **Responsáveis** | Pessoas responsáveis pelo pátio. |
| **Dados** | Dados cadastrais completos do pátio. |

No cabeçalho da tela há ainda os botões **Voltar** (retorna à lista) e **Editar dados**.

## O que dá pra fazer aqui

### Layout visual

Mostra todas as vagas do local selecionado em um grid, agrupadas por andar e coloridas por status (Disponível, Ocupada, Reservada, Manutenção, conforme a legenda). Cada quadrado traz o código da vaga e, se ocupada, a placa ou descrição do bem. Clique em um quadrado para abrir a edição daquela vaga.

![Layout visual](/img/manual/erp/patios-id-layout.png)

### Movimentações

Lista os bens que passaram pelo pátio, mostrando a data de entrada e, quando já saíram, a data de saída. Serve como histórico de ocupação do pátio. As colunas são:

| Coluna | O que é |
|---|---|
| **#** | Número do registro. |
| **Bem** | Descrição do bem movimentado. |
| **Placa** | Placa do bem, quando houver. |
| **Vaga** | Vaga utilizada. |
| **Entrada** | Data e hora da entrada no pátio. |
| **Saída** | Data e hora da saída (em branco se o bem ainda está no pátio). |

### Responsáveis

Lista as pessoas responsáveis pelo pátio. A tabela tem as colunas **Nome**, **Cargo**, **Telefone** e **E-mail**.

> O sistema sempre preenche o **Nome** (e usa o documento da pessoa na busca). As colunas **Cargo**, **Telefone** e **E-mail** dependem do que estiver cadastrado na ficha da pessoa; quando não houver esse dado, a coluna aparece como "—".

**Para adicionar um responsável:**

1. Vá na aba **Responsáveis** e clique em **Adicionar responsável**.
2. Em **Pessoa responsável**, busque por nome ou documento (a partir de 2 caracteres) e selecione uma pessoa já cadastrada.
3. Clique em **Adicionar**.

**Para remover**, clique no ícone de **lixeira** na linha da pessoa e confirme.

> **Pré-requisito:** apenas pessoas/usuários já existentes no sistema podem ser vinculados como responsáveis. Se a pessoa ainda não existe, cadastre-a antes (em Cadastros → Pessoas) e depois volte aqui.

> **Permissão:** adicionar e remover responsáveis exige a permissão de gestão de responsáveis do pátio. Sem ela, os botões dão erro ao salvar.

### Dados

Mostra os dados cadastrais do pátio: nome, sigla, tipo, situação (Ativo/Inativo), endereço completo (logradouro, número, complemento), bairro, CEP, cidade, UF, responsável, se faz **armazenamento** e se realiza **leilões**, e latitude/longitude.

> Os campos efetivamente gravados no cadastro do pátio são: nome, sigla, tipo, situação, endereço, número, complemento, bairro, CEP, cidade, UF, armazenamento, leilões e latitude/longitude. A tela pode exibir rótulos de **telefone** e **observações**, mas hoje esses campos não fazem parte do cadastro do pátio e aparecem em branco.

**Armazenamento** e **leilões** são liga/desliga que indicam para que o pátio é usado: guardar bens removidos e/ou sediar leilões. Ambos vêm marcados como **Sim** por padrão.

**Para editar:** clique em **Editar** (na aba Dados) ou **Editar dados** (no cabeçalho). Abre o mesmo formulário do cadastro de pátio; ajuste os campos e clique em **Salvar alterações**.

![Editar dados do pátio](/img/manual/erp/patios-id-editar.png)

## Erros comuns

- **"Este pátio ainda não tem locais cadastrados"** nas abas Vagas/Layout: um pátio só gerencia vagas depois de ter pelo menos um **local** (zona/setor). Cadastre um local primeiro — veja [Vagas do pátio](./patios-id-vagas.md).
- **Capacidade/Ocupadas/Disponíveis em 0**: significa que ainda não há vagas geradas para os locais do pátio.
- **Erro ao adicionar responsável**: ocorre quando a pessoa não está cadastrada no sistema, quando nada foi selecionado na busca, ou quando o usuário não tem permissão de gestão de responsáveis.

## Dicas e observações

- A cor da etiqueta de ocupação é um alerta visual rápido: vermelha a partir de 90%, laranja a partir de 70%, azul abaixo disso (com vagas ocupadas) e verde quando nada está ocupado.
- A gestão de **vagas e locais** (criar local, gerar vagas, liberar vaga ocupada) fica na aba **Vagas** — veja a página dedicada.
- A coluna **Saída** vazia nas Movimentações indica que o bem **ainda está no pátio**.
- Os indicadores de ocupação são atualizados conforme as vagas são geradas, ocupadas ou liberadas.

## Veja também

- [Vagas do pátio](./patios-id-vagas.md)
- [Pátios](./patios-lista.md)
