---
title: Domínios padrão
sidebar_position: 2
---

# Domínios padrão

Esta tela mapeia **domínios fixos direto a um banco de dados**, sem precisar criar um cliente. A gerência já é o destino padrão de qualquer domínio; esta tela serve apenas para casos especiais, em que um domínio extra precisa apontar para um banco específico. É uma tela técnica e sensível — cada linha contém o endereço do banco (com a senha).

## Como acessar
**Console** → **Infra** → **Domínios padrão**.

![Domínios padrão](/img/manual/_interno/console-dominios-padrao.png)

## O que você vê nesta tela

Um texto curto de aviso no topo e, abaixo, uma **tabela editável** com uma linha por mapeamento. Quando ainda não há nenhum mapeamento, aparece um aviso de **"Nenhum domínio padrão"** com um atalho para adicionar a primeira linha.

| Coluna | O que é |
|---|---|
| Domínio | O endereço a ser mapeado (ex.: `cliente.com.br`) |
| DSN | O endereço de conexão do banco para esse domínio — inclui usuário, **senha**, host, porta e nome do banco |
| (ações) | Botão de **Remover linha** na ponta direita |

No cabeçalho da página ficam os botões **Adicionar linha** e **Salvar**.

## O que dá pra fazer aqui

- **Adicionar** uma nova linha de mapeamento.
- **Editar** o domínio e o DSN de qualquer linha (digitando direto na célula).
- **Remover** uma linha.
- **Salvar** todas as alterações de uma vez.

### Adicionar um mapeamento
1. Clique em **Adicionar linha** (ou, na tela vazia, em **Adicionar linha** no aviso central).
2. No campo **Domínio**, digite o endereço (ex.: `cliente.com.br`).
3. No campo **DSN**, cole o endereço de conexão completo do banco, no formato indicado pelo exemplo (`mysql://usuario:senha@host:3306/banco?serverVersion=8.0`).
4. Repita para quantos domínios precisar.
5. Clique em **Salvar**. Aparece uma confirmação com a quantidade de domínios padrão salvos.

### Remover um mapeamento
1. Clique no ícone de **lixeira (Remover linha)** na linha desejada.
2. Clique em **Salvar** para confirmar a remoção no servidor.

> Observação: a linha some da tela na hora, mas a mudança só vale depois de clicar em **Salvar**.

## Dicas e observações
- **Trate esta tela como sensível.** O DSN contém a **senha do banco** em texto. Não compartilhe prints nem o conteúdo das linhas.
- A **gerência já resolve o destino padrão** por conta própria — só use esta tela para domínios extras que precisem de um banco específico.
- Ao salvar, **linhas totalmente vazias** (sem domínio e sem DSN) são descartadas automaticamente.
- **Salvar envia todas as linhas de uma vez.** Confira a tabela inteira antes de salvar — o que estiver na tela é o que passa a valer.
- Se houver erro de preenchimento, aparece um painel vermelho de **Erros de validação** no topo, listando o que corrigir, junto a um aviso. Corrija os campos e salve de novo.
- Esta é uma tela **interna (Console / Infra)**: requer acesso de gerência/infraestrutura.

## Veja também
- [Domínios](./console-dominios.md)
