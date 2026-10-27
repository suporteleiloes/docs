---
title: Negociações condicionais
sidebar_position: 57
---

# Negociações condicionais

Quando um lote fecha com lance **abaixo do valor mínimo**, ele fica **condicional**: a venda depende do comitente. Em vez de só "aprova ou recusa", comitente e arrematante podem **negociar pelo site** — contraproposta, oferta, aceite. A tela **Negociações condicionais** mostra todas essas negociações num lugar só e permite ao leiloeiro **decidir em nome do comitente**: aprovar, recusar ou contrapropor.

## Como acessar

**ERP** → **Leilões** → **Negociações condicionais** (grupo "Administração de Leilão").

![Negociações condicionais](/img/manual/erp/leiloes/negociacoes-lista.png)

:::info A negociação abre sozinha
Não é preciso criar nada: assim que o lote fica condicional, a negociação aparece aqui (e o arrematante é avisado por e-mail). O prazo padrão para cada rodada é de 48 horas.
:::

## O que você vê nesta tela

### Filtros

| Filtro | O que faz |
|---|---|
| **Situação** | **Em aberto** (padrão — alguém precisa agir), **Todas**, ou um status específico. |
| **Leilão (ID)** | Mostra só as negociações de um leilão. |

### Lista (à esquerda)

Cada cartão mostra o lote, o status, o **lance** e — quando houve contraproposta ou oferta — o **valor em negociação** (`Lance R$ 5.000,00 → R$ 5.400,00`), o apelido do arrematante, o leilão e o **prazo** restante. Cartões com uma barra laranja na lateral estão **esperando você** (acordo fechado).

### Detalhe (à direita)

| Bloco | O que mostra |
|---|---|
| **Valores** | Lance, valor em negociação (ou valor **acordado**), valor mínimo do lote e prazo/data de encerramento. |
| **Aviso** | Explica a situação atual e o que acontece se você agir. |
| **Ações** | Só aparecem os botões permitidos para o status atual: **Aprovar venda**, **Contrapropor**, **Recusar**. |
| **Histórico** | Todas as rodadas, da mais recente para a mais antiga: quem agiu (sistema, comitente, arrematante, leiloeiro), o que fez, o valor e a mensagem. |

![Histórico da negociação](/img/manual/erp/leiloes/negociacoes-historico.png)

## Status

| Status | Quem precisa agir | Significado |
|---|---|---|
| **Aguardando comitente** | Comitente (ou você) | Negociação aberta, ou o arrematante fez uma oferta/recusou a contraproposta. |
| **Aguardando arrematante** | Arrematante | Foi feita uma contraproposta; o arrematante responde pelo site. |
| **Acordo fechado — aguardando você** | Leiloeiro | As partes fecharam acordo num valor **diferente do lance** (veja abaixo). |
| **Aprovada (vendido)** | — | Lote vendido. |
| **Recusada** | — | Lote em baixa oferta. |
| **Expirada** | Leiloeiro | O prazo venceu sem acordo e o lote continua condicional. |
| **Cancelada** | — | O lote saiu da condicional por outro caminho no ERP. |

## O que dá pra fazer aqui

### Aprovar a venda

1. Selecione a negociação e clique em **Aprovar venda**.
2. Escreva uma mensagem para o arrematante, se quiser, e confirme.

![Aprovar a venda](/img/manual/erp/leiloes/negociacoes-aprovar-modal.png)

O lote passa a **vendido** ao arrematante e segue para cobrança normalmente.

:::danger Aprovar aqui vende pelo valor do LANCE
Quando a negociação está num valor diferente do lance (oferta do arrematante ou acordo fechado), **aprovar por esta tela registra a venda no valor do lance**, não no valor combinado. O sistema avisa e pede uma confirmação explícita mostrando os dois valores e a diferença que **não** será aplicada.

![Confirmação de venda no valor do lance](/img/manual/erp/leiloes/negociacoes-confirmar-valor-lance.png)

Para cobrar o valor combinado, use o caminho recomendado abaixo.
:::

### Acordo fechado em valor diferente do lance

Quando o arrematante aceita uma contraproposta (ex.: lance de R$ 2.500, acordo em R$ 4.200), a negociação vai para **Acordo fechado — aguardando você**. O sistema **não muda o valor do arremate sozinho**, porque cobrança, boleto, fatura e prestação de contas são calculados a partir do lance. Você tem dois caminhos:

1. **Recomendado:** registre no ERP a venda ao **mesmo arrematante** no **valor combinado**, pelo fluxo normal do lote/fechamento. Quando o lote ficar vendido para esse arrematante, a negociação fecha sozinha como **aprovada**.
2. **Aprovar aqui:** a venda sai no **valor do lance**, sem a diferença (com a confirmação descrita acima).

### Fazer uma contraproposta

1. Clique em **Contrapropor**.
2. Informe o **valor** — precisa ser **maior** que o valor em negociação.
3. Escreva uma mensagem (opcional) e clique em **Enviar contraproposta**.

O arrematante recebe por e-mail e responde pelo site (aceitar, recusar ou fazer uma oferta intermediária). O prazo recomeça a contar. A contraproposta só fica disponível quando a vez é do comitente ou quando o prazo expirou.

### Recusar a venda

1. Clique em **Recusar** e confirme.
2. O lote vai para **baixa oferta** e a negociação é encerrada.

## Regras de negócio

- **Prazo**: cada rodada tem prazo (padrão 48 horas, configurável em `negociacao.prazoHoras`). Vencido o prazo, a negociação fica **Expirada** e o lote continua condicional, esperando a sua decisão (ou é recusada automaticamente, se o leiloeiro configurou `negociacao.expiracaoAcao = recusar`).
- **Mensagens** têm até 1000 caracteres; formatação HTML é removida.
- **Valores**: maiores que zero, com duas casas decimais.
- Se o lote mudar por fora (vendido, baixa oferta, reaberto no ERP), a negociação se ajusta sozinha.
- Ações simultâneas são processadas uma de cada vez: se outra pessoa decidiu antes, você recebe um aviso e a lista é atualizada.

## Erros comuns

- **"A negociação está … e não aceita esta ação agora."** — alguém (comitente, arrematante ou outro operador) agiu antes. A lista é recarregada; confira o novo status.
- **"O acordo foi fechado em valor diferente do lance…"** — é a trava contra venda abaixo do combinado. Confirme a venda no valor do lance ou formalize pelo ERP no valor acordado.
- **Valor da contraproposta inválido** — precisa ser maior que o valor atual da negociação.

## Permissões

| Permissão | Libera |
|---|---|
| `leilao/negociacao/l` | Ver a tela e a lista de negociações |
| `leilao/negociacao/u` | Aprovar, recusar e contrapropor |

## Dicas

- Deixe o filtro em **Em aberto** no dia a dia: só aparece o que precisa de ação.
- Os cartões com barra laranja (acordo fechado) são os mais urgentes — o cliente já aceitou e está esperando a formalização.
- A tela se atualiza sozinha a cada minuto; use **Atualizar** para forçar.

## Veja também

- [Monitor do comitente](./monitor-comitente.md)
- [Controlador (pregão ao vivo)](./controlador.md)
- [Cobrança](./cobranca.md)
- [Fechamento](./fechamento.md)
