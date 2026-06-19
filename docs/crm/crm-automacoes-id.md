---
title: Detalhe da automação
sidebar_position: 10
---

# Detalhe da automação

Esta é a tela de uma automação específica do CRM. Aqui você vê como a automação está configurada (gatilho, condições e ações), liga ou desliga ela, faz testes seguros e acompanha o histórico de tudo que ela já disparou.

## Como acessar

**CRM** → **Automações** → clique sobre uma automação da lista.

A tela abre com o nome e a descrição da automação no topo.

![Detalhe da automação](/img/manual/crm/crm-automacoes-id.png)

## Pré-requisitos

- A automação já precisa existir (criada na lista de **Automações**) com pelo menos um **gatilho** definido. O gatilho é o evento que dispara a automação (por exemplo, uma pessoa entrar em determinada etapa).
- Para que a automação envie mensagens de verdade, ela precisa estar **ATIVA** e **fora do dry-run** (em produção). As condições e ações são montadas no editor de fluxo.

## O que você vê nesta tela

No topo aparecem o nome e a descrição da automação, junto com os botões de ação. Abaixo há um banner em destaque que leva ao **construtor visual de fluxo**, seguido de quatro cartões de resumo e do histórico de execuções.

### Cartões de resumo

| Cartão | O que mostra |
|---|---|
| **Configuração** | O gatilho que dispara a automação, se ela está **ATIVA** ou **INATIVA**, se está em **dry-run** (modo de teste/sandbox) ou em produção, e o limite de mensagens por pessoa (quota), quando houver. |
| **Condições** | A lista de condições que precisam ser verdadeiras para a automação rodar. Se não houver nenhuma, aparece "Sem condições — sempre dispara". |
| **Ações** | A lista, em ordem, de tudo que a automação faz quando dispara (por exemplo, enviar uma mensagem por um canal usando um modelo). |
| **Execuções (última janela)** | Um placar rápido com quantas execuções deram certo, quantas deram erro, quantas foram puladas e quantas foram apenas teste (dry). O placar resume as execuções recentes carregadas no histórico abaixo. |

### Histórico de execuções

Logo abaixo dos cartões fica a lista de execuções recentes. Cada linha traz uma etiqueta colorida com o resultado, o nome da pessoa atingida, a data e a hora, e uma mensagem explicando o que aconteceu.

| Resultado | O que significa |
|---|---|
| **sucesso** | A ação foi executada normalmente. |
| **erro** | Algo falhou ao executar a ação. |
| **skipped_condicao** | A automação foi pulada porque as condições não foram atendidas. |
| **skipped_quota** | Foi pulada porque a pessoa já recebeu o limite de mensagens da janela. |
| **skipped_optout** | Foi pulada porque a pessoa pediu para não receber mensagens (opt-out). |
| **dry_run** | Foi apenas um teste; nada real foi enviado. |

## O que dá pra fazer aqui

### Abrir o editor de fluxo

Clique em **Abrir editor de fluxo** (botão no topo) ou no banner **Construtor visual de fluxo**. Você é levado a um canvas onde monta o gatilho, as condições, as esperas e as ramificações da automação arrastando blocos.

### Ativar ou desativar a automação

1. Observe o botão à direita do topo: se a automação estiver ativa, ele mostra **Desativar**; se estiver inativa, mostra **Ativar**.
2. Clique no botão para alternar o estado.
3. O cartão **Configuração** passa a mostrar **ATIVA** ou **INATIVA** imediatamente.

Uma automação inativa não dispara para ninguém.

### Ativar ou sair do dry-run (modo de teste)

O **dry-run** deixa a automação "ensaiar" sem enviar nada de verdade — ela registra o que faria, mas não envia mensagens reais. Use-o para validar a configuração com segurança.

1. Clique em **Ativar dry-run** para entrar no modo de teste (o botão fica destacado).
2. Para voltar a operar de verdade, clique em **Sair do dry-run**.
3. O cartão **Configuração** mostra **SIM (sandbox)** ou **NÃO (produção)** conforme o estado.

### Fazer um disparo manual

Útil para testar a automação contra uma pessoa específica sem esperar o gatilho acontecer.

1. Clique em **Disparo manual**.
2. No campo que aparece, digite o **ID da pessoa** para teste (opcional — pode deixar em branco).
3. Confirme. Ao final, uma mensagem informa quantos resultados ficaram OK.
4. O histórico de execuções é recarregado para você conferir o que aconteceu.

## Dicas e observações

- Antes de ligar uma automação para valer, rode-a em **dry-run** e faça um **disparo manual** de teste. Assim você confere as condições e as mensagens sem risco de enviar algo errado a clientes reais.
- As condições funcionam como filtros: a automação só age sobre quem se encaixa em todas elas. Sem condições, ela dispara para todos que passam pelo gatilho.
- O **limite de quota** protege as pessoas de receberem mensagens demais — quando o limite da janela é atingido, novas execuções aparecem como **skipped_quota**.
- Execuções marcadas como **skipped_optout** indicam respeito ao pedido da pessoa de não ser contatada. Isso é esperado e correto.

## Veja também

- [Atendimentos (caixa de entrada)](./crm-atendimentos.md)
- [Negócios](./negocios.md)
