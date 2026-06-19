---
title: Aprovação de Cadastros
sidebar_position: 2
---

# Aprovação de Cadastros

Esta tela reúne os cadastros de arrematantes que aguardam uma decisão: aprovar (homologar) ou reprovar. É o lugar onde a equipe de cadastro libera quem pode participar dos leilões.

## Como acessar

**Arrematantes** → **Aprovação** (rota `/arrematantes/aprovacao`), ou clique no botão **Aprovação** no topo da [Gestão de Arrematantes](./arrematantes-lista.md).

![Aprovação de Cadastros](/img/manual/erp/arrematantes-aprovacao.png)

## O que você vê nesta tela

Três abas filtram a lista por situação. A aba ativa mostra o total ao lado.

| Aba | O que mostra |
|---|---|
| Pendentes análise | Cadastros que aguardam aprovação ou reprovação |
| Aprovados | Cadastros já aprovados |
| Reprovados | Cadastros reprovados |

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número de identificação (ID) do arrematante |
| Arrematante | Foto, nome e apelido — clique para abrir o detalhe |
| CPF/CNPJ | Documento do arrematante |
| Status | Selo com a situação atual do cadastro |
| Solicitado | Data e hora em que o cadastro entrou na fila |

## O que dá pra fazer aqui

### Buscar

Use a barra de busca para localizar por nome, CPF ou e-mail.

### Abrir o cadastro completo

Clique no nome/foto do arrematante para ir à página de [detalhe](./arrematantes-id-detalhe.md), onde você vê todos os dados antes de decidir.

### Aprovar um cadastro

> As ações de Aprovar e Reprovar só aparecem na aba **Pendentes análise**.

1. Localize o arrematante na lista.
2. Clique em **Aprovar**.
3. Confirme na caixa de aviso.

O cadastro passa para a situação **Aprovado** e o arrematante fica liberado para participar de leilões.

### Reprovar um cadastro

1. Clique no botão vermelho (ícone de **círculo com risco**) na linha.
2. Na janela **Reprovar cadastro**, descreva os **motivos**, um por linha (ex.: "CPF inválido", "Comprovante de residência ilegível").
3. Clique em **Reprovar cadastro**.

O arrematante receberá os motivos informados e o cadastro voltará para "Pendente".

![Janela de reprovar cadastro](/img/manual/erp/arrematantes-aprovacao-reprovar.png)

## Dicas e observações

- Só é possível reprovar um cadastro que tenha uma **análise ativa** associada. Se aparecer o aviso "Não é possível reprovar", gere primeiro uma análise cadastral (veja [Análises Cadastrais](./arrematantes-analises.md)).
- Ao **reprovar**, o cadastro do arrematante volta para **Pendente de aprovação** (não fica "Reprovado" permanentemente) e os motivos são registrados na análise e enviados ao arrematante. Ele pode corrigir e reenviar. Escreva os motivos de forma clara e objetiva.
- Ao **aprovar**, o arrematante passa a **Aprovado** e o sistema dispara as notificações (e-mail/WhatsApp, conforme configuração). Se alguma notificação falhar, a aprovação já fica salva mesmo assim.
- **Permissões necessárias**: **Aprovar** exige aprovar cadastros de arrematante (`earrematante/aprovacoes`); **Reprovar** exige atualizar análises de arrematante (`earrematante/analise/u`). A listagem em si usa listar arrematantes (`earrematante/l`).

## Veja também

- [Análises Cadastrais](./arrematantes-analises.md)
- [Gestão de Arrematantes](./arrematantes-lista.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
