---
title: Análises Cadastrais
sidebar_position: 3
---

# Análises Cadastrais

Esta tela acompanha o trabalho de análise dos cadastros de arrematantes em um quadro de etapas (Kanban) ou em lista. Aqui a equipe inicia análises, aprova, reprova e transfere casos entre responsáveis.

## Como acessar

**Arrematantes** → **Análises** (rota `/arrematantes/analises`).

![Análises Cadastrais — Kanban](/img/manual/erp/arrematantes-analises.png)

## O que você vê nesta tela

No topo, à direita, há um seletor de visualização: **Kanban** (quadro de colunas) e **Lista** (tabela). Abaixo ficam a barra de busca e o contador de registros.

### Visualização Kanban

O quadro tem quatro colunas, organizadas pela situação do cadastro:

| Coluna | O que é |
|---|---|
| Pendente análise | Cadastros que ainda não entraram em análise |
| Em análise | Cadastros sendo analisados |
| Aprovado | Cadastros já aprovados |
| Reprovado | Cadastros reprovados |

Cada cartão mostra a foto e o nome do arrematante, o documento, o responsável pela análise (quando houver) e a data. Clique no cartão para abrir o [detalhe do arrematante](./arrematantes-id-detalhe.md).

> Observação: as colunas "Aprovado" e "Reprovado" do Kanban podem aparecer vazias, porque o quadro foca nas análises ativas. Para ver casos já resolvidos, use a [Gestão de Arrematantes](./arrematantes-lista.md) ou a tela de [Aprovação](./arrematantes-aprovacao.md).

### Visualização Lista

| Coluna | O que é |
|---|---|
| # | Número de identificação (ID) do arrematante |
| Arrematante | Foto, nome e apelido |
| CPF/CNPJ | Documento |
| Cadastro | Situação do cadastro |
| Responsável | Usuário encarregado da análise |
| Criado | Data de criação da análise |

![Análises Cadastrais — Lista](/img/manual/erp/arrematantes-analises-lista.png)

## O que dá pra fazer aqui

### Iniciar uma análise

Para cartões na coluna **Pendente análise** que ainda não têm análise:

1. Clique em **Iniciar análise** no cartão.
2. Confirme. Uma nova análise cadastral é criada para o arrematante.

### Aprovar

1. Clique em **Aprovar** (no cartão, colunas Pendente/Em análise; ou no botão verde na Lista).
2. Confirme. O cadastro passa para **Aprovado**.

### Reprovar

1. Clique no botão **Reprovar** (vermelho).
2. Na janela, descreva os **motivos**, um por linha.
3. Clique em **Reprovar**.

### Mover para outro usuário

Transfere a responsabilidade de uma análise para outra pessoa da equipe:

1. Clique no botão **Mover** (ícone de setas) no cartão ou na linha.
2. Informe o **ID do usuário** que deve assumir a análise.
3. Clique em **Mover**.

![Janela mover análise](/img/manual/erp/arrematantes-analises-mover.png)

## Dicas e observações

- Só é possível **reprovar** ou **mover** quando o registro tem uma análise ativa. Caso contrário, use **Iniciar análise** primeiro.
- Ao **reprovar**, o cadastro volta para **Pendente de aprovação** (a análise é marcada como "vista para o arrematante", com os motivos), permitindo que ele corrija e reenvie. Não é um bloqueio definitivo.
- **Aprovar** muda o status do arrematante para **Aprovado** e dispara as notificações configuradas.
- **Mover** apenas troca o responsável pela análise (informe o ID do usuário destino). O usuário anterior não é notificado automaticamente nesta versão.
- O quadro Kanban mostra prioritariamente análises pendentes — para o panorama completo por situação, combine esta tela com a Gestão de Arrematantes.
- **Permissões necessárias**: **Aprovar** exige `earrematante/aprovacoes`; **Reprovar**/**Mover**/**Iniciar análise** exigem atualizar análises (`earrematante/analise/u`); a listagem usa `earrematante/l`.

## Veja também

- [Aprovação de Cadastros](./arrematantes-aprovacao.md)
- [Gestão de Arrematantes](./arrematantes-lista.md)
- [Detalhe do Arrematante](./arrematantes-id-detalhe.md)
