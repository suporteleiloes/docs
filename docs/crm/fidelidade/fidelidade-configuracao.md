---
title: Configurações, níveis e faixas
sidebar_position: 2
---

# Configurações, níveis e faixas de indicação

Aqui você define **as regras do programa**: se ele está ligado, o nome que aparece para o cliente, quantos pontos cada ação rende, prazos de validade, o regulamento, os níveis e o valor dos benefícios de indicação.

## Como acessar

**CRM** → **Fidelidade** → aba **Configurações** (e as abas **Níveis** e **Faixas de indicação**).

![Configurações do programa](/img/manual/crm/fidelidade/fidelidade-configuracoes.png)

## O que você vê nesta tela

### Ligar e desligar o programa

O primeiro quadro mostra se o programa está **ligado** ou **desligado**, com a chave para mudar. A mudança só vale depois de clicar em **Salvar alterações** — o sistema pede confirmação explicando o efeito.

### Identidade

| Campo | O que é |
|---|---|
| **Nome do programa** | Como o programa aparece no site e nos e-mails (ex.: "Clube de Vantagens"). Obrigatório, até 120 caracteres. |

### Como o cliente ganha pontos

| Campo | Padrão | O que faz |
|---|---|---|
| **Pontos a cada R$ 100,00 arrematados** | 1 | Creditado quando o arremate é **pago**, sobre centenas inteiras do valor. Ex.: arremate de R$ 2.350 com 1 ponto → 23 pontos. |
| **Bônus de adesão** | 100 | Uma vez, quando o cliente aprovado entra no programa. |
| **Aniversário de cadastro** | 50 | Por ano, na data em que o cadastro do arrematante foi criado (só aniversários depois da adesão). |
| **Indicação — cadastro aprovado** | 50 | Para quem indicou, quando o indicado tem o cadastro aprovado. |
| **Indicação — 1ª compra paga do indicado** | 200 | Para quem indicou. Além disso gera o benefício em R$ das faixas de indicação. |

### Validade e renovação

| Campo | Padrão | O que faz |
|---|---|---|
| **Validade de cada crédito** | 12 meses | Cada crédito vence separadamente. |
| **Avisar por e-mail antes de vencer** | 30 dias | Um aviso por crédito. |
| **Renovação estende a validade em** | 6 meses | 0 = o cliente não pode renovar. |
| **Custo da renovação** | 10% | Percentual dos pontos renovados que é cobrado. |

### Indicação, benefícios e resgates

| Campo | Padrão | O que faz |
|---|---|---|
| **Prazo para vincular uma indicação** | 0 (sem limite) | A conta do indicado precisa ter sido criada há no máximo esse número de dias. |
| **Validade do benefício em R$** | 12 meses | Prazo para usar o desconto ganho com a indicação. |
| **Validade do voucher de resgate** | 90 dias | Prazo para o cliente retirar/usar a recompensa resgatada. |

Cada campo mostra embaixo uma explicação curta. Valores fora do permitido ficam em vermelho e o botão salvar avisa para corrigir.

## Regulamento

![Editor do regulamento](/img/manual/crm/fidelidade/fidelidade-regulamento.png)

O regulamento é editado num editor de texto com formatação (títulos, negrito, listas, links e imagens). Use **Pré-visualizar** para ver como fica antes de salvar.

:::warning A versão incrementa ao salvar
Toda vez que o **texto** do regulamento muda, ao salvar ele ganha uma **nova versão** (o número aparece ao lado do título). Quem aderir a partir daí aceita a versão nova, e o aceite de cada participante fica registrado com o número da versão. O sistema pede confirmação antes de publicar. Mudar só as regras numéricas **não** muda a versão.
:::

## Passo a passo: salvar as configurações

1. Altere os campos desejados. Uma barra **"Há alterações não salvas"** aparece no rodapé.
2. Clique em **Salvar alterações** (no topo ou na barra do rodapé).
3. Confirme os avisos, se aparecerem (ligar/desligar o programa, nova versão do regulamento).
4. Para desistir, clique em **Descartar**. Se tentar sair da tela com alterações pendentes, o sistema pergunta antes.

## Níveis

![Níveis](/img/manual/crm/fidelidade/fidelidade-niveis.png)

O nível do participante é calculado pelo **saldo válido**: sobe quando ganha pontos e cai quando eles vencem ou são resgatados.

| Coluna / campo | O que é |
|---|---|
| **Nível** (nome e cor) | Ex.: Bronze, Prata, Ouro. A cor aparece na lista de participantes. |
| **A partir de** | Saldo mínimo (em pontos) para estar no nível. |
| **Desconto na taxa (%)** | Informativo, para o site e para a equipe. |
| **Frete grátis** | Informativo. |
| **Benefícios** | Texto exibido no site (um benefício por linha). |

Para criar, clique em **+ Novo nível**; para alterar, **Editar**; para remover, **Excluir** (com confirmação).

![Editar nível](/img/manual/crm/fidelidade/fidelidade-nivel-form.png)

:::tip Tenha sempre um nível que começa em 0
Sem um nível "a partir de 0 pontos", quem tem saldo baixo fica **sem nível**. A tela avisa quando isso acontece.
:::

Qualquer mudança nos níveis **reclassifica todos os participantes na hora**.

## Faixas de indicação

![Faixas de indicação](/img/manual/crm/fidelidade/fidelidade-faixas.png)

Quando o indicado faz a **1ª compra paga**, quem indicou ganha um benefício em R$. O valor depende do valor dessa compra: vale a faixa **ativa** de **maior valor mínimo** que a compra alcança. A tela mostra o intervalo de cada faixa ("de R$ 1.000,00 até R$ 4.999,99").

| Campo | O que é |
|---|---|
| **Valor mínimo da 1ª compra** | A partir de quanto a faixa vale. |
| **Benefício para quem indicou** | Valor em R$ do benefício gerado. |
| **Ativa** | Faixa desligada é ignorada. Pode ligar/desligar direto na lista. |

:::warning Sem faixa ativa, não há benefício em R$
A indicação continua rendendo pontos, mas não gera desconto. A tela avisa quando não há nenhuma faixa ativa.
:::

## Regras de negócio

- Os limites de cada campo são validados pelo sistema (ex.: validade de 1 a 120 meses; custo de renovação de 0 a 100%).
- Mudar regras não altera pontos já creditados — só vale para os próximos lançamentos.
- O desconto e o frete grátis dos níveis são **informativos**: a aplicação na cobrança é feita pelo operador.
- Excluir uma faixa não muda benefícios que já foram gerados.

## Erros comuns

- **"Campo … fora do intervalo"** — o valor digitado passou do limite permitido. Ajuste e salve de novo.
- **"Nome do programa inválido"** — o nome ficou vazio ou passou de 120 caracteres.
- **"Nome do nível obrigatório"** — preencha o nome antes de salvar o nível.

## Dicas

- Faça as mudanças de regulamento de uma vez só, para não gerar várias versões seguidas.
- Antes de ligar o programa, peça para alguém da equipe aderir pelo site e conferir o regulamento e a lojinha.

## Veja também

- [Visão geral do programa](./fidelidade.md)
- [Lojinha e resgates](./fidelidade-lojinha-resgates.md)
- [Indicações e benefícios](./fidelidade-indicacoes-beneficios.md)
