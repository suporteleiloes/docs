---
title: Autorizador — Regras de aprovação
sidebar_position: 30
---

# Autorizador — Regras de aprovação

O Autorizador é o mecanismo de controle interno do ERP para operações sensíveis. Em vez de deixar qualquer pessoa editar um arremate, cancelar uma venda ou excluir um bem livremente, você cria **regras** que dizem o que acontece quando alguém tenta executar cada operação: liberar na hora, exigir aprovação de um responsável, ou bloquear de vez. Nesta tela você gerencia essas regras.

## Como acessar

**Configurações** → **Autorizador**.

![Autorizador — Regras de aprovação](/img/manual/erp/configuracoes-autorizador.png)

## O que você vê nesta tela

No topo há um campo de busca para filtrar as regras pelo tipo de operação. Logo abaixo, a lista das regras já cadastradas.

| Coluna | O que é |
|---|---|
| **#** | Número identificador da regra. |
| **Tipo de operação** | A operação controlada (ex.: "Cancelar venda", "Excluir bem"). |
| **Regra** | O comportamento aplicado: **Sempre aprovar** (verde), **Pedir aprovação** (amarelo) ou **Bloqueado** (vermelho). |
| **Aprovador** | Quem decide quando a regra é "Pedir aprovação": um usuário, um grupo, ou nada (automático). |
| **Status** | **Ativo** ou **Inativo**. Regras inativas não têm efeito. |

No cabeçalho da tela existem dois botões:

- **Ver pendentes** — abre a fila de [operações pendentes de aprovação](./configuracoes-autorizador-pendentes.md).
- **Nova regra** — abre o formulário para criar uma regra.

## O que dá pra fazer aqui

### Criar uma nova regra

1. Clique em **Nova regra**.
2. Em **Tipo de operação**, escolha a operação que você quer controlar. As opções disponíveis incluem: Editar arrematante após arremate, Excluir bem, Cancelar venda, Editar valor de arremate, Reabrir processo, Excluir processo, Cancelar leilão, Transferir bem, Alterar comitente, Conceder desconto, Zerar débito e Outra operação. (campo obrigatório)
3. Em **Regra**, escolha o comportamento:
   - **Sempre aprovar** — a operação é liberada automaticamente, sem pedir nada a ninguém. Útil para registrar que a operação é permitida e auditável.
   - **Pedir aprovação** — a operação fica retida e só é executada depois que o aprovador a liberar na fila de pendentes.
   - **Bloqueado** — a operação não pode ser executada por ninguém.
4. Em **Tipo de aprovador**, defina quem aprova (só faz sentido quando a regra é "Pedir aprovação"):
   - **Usuário específico** — escolha uma pessoa no campo **Usuário aprovador**.
   - **Grupo de usuários** — escolha um grupo no campo **Grupo aprovador**; qualquer pessoa do grupo pode aprovar.
   - **Nenhum (automático)** — sem aprovador designado.
5. Em **Observação (opcional)**, escreva uma nota interna explicando a regra, se quiser.
6. Mantenha a chave **Regra ativa** ligada para a regra valer já. Desligue para deixá-la cadastrada porém sem efeito.
7. Clique em **Criar regra**.

![Nova regra de aprovação](/img/manual/erp/configuracoes-autorizador-novo.png)

### Editar uma regra

Dê **duplo clique** na linha da regra, ou clique no ícone de **lápis** à direita da linha. O mesmo formulário abre preenchido; ajuste o que precisar e clique em **Salvar alterações**.

### Excluir uma regra

Clique no ícone de **lixeira** à direita da linha. O sistema pede confirmação porque a remoção é permanente. Confirme em **Excluir**.

### Ver operações pendentes

Clique em **Ver pendentes** no topo para ir à fila de aprovações aguardando decisão.

## Como funciona o fluxo de "Pedir aprovação"

Quando uma operação cai numa regra **Pedir aprovação**, ela não é executada na hora: o sistema cria uma **pendência** na fila de [operações pendentes](./configuracoes-autorizador-pendentes.md), e quem solicitou recebe o aviso de que a operação aguarda liberação. O aprovador (usuário ou grupo definido na regra) abre a fila e **aprova** ou **rejeita**. Aprovar **libera** a operação; a execução em si acontece quando o solicitante conclui a ação já autorizada. Uma pendência já aprovada ou rejeitada não pode ser resolvida de novo.

## Erros comuns e impactos

- **Regra "Pedir aprovação" sem aprovador definido**: a operação fica retida na fila, mas pode não haver ninguém designado para liberá-la. Sempre informe um **usuário** ou **grupo** aprovador nesse tipo de regra.
- **Operação "Bloqueado" inesperada**: se um usuário relata que não consegue executar uma operação, verifique se existe uma regra **Bloqueado** ativa para aquele tipo. Bloqueado impede a ação para todos.
- **Regra inativa**: uma regra **Inativa** não controla nada — a operação volta a seguir o comportamento padrão do sistema.

## Dicas e observações

- O **Aprovador** só é usado quando a regra é **Pedir aprovação**. Se você escolher "Sempre aprovar" ou "Bloqueado", o aprovador é ignorado.
- Uma regra **Inativa** fica guardada mas não controla nada — equivale a não ter regra para aquela operação.
- Se nenhuma regra existe para uma operação, ela segue o comportamento padrão do sistema (não passa pelo Autorizador).
- Esta área é de configuração administrativa; normalmente fica restrita a perfis gestores da leiloeira.

## Veja também

- [Operações pendentes de aprovação](./configuracoes-autorizador-pendentes.md)
