---
title: Programa de Fidelidade — visão geral
sidebar_position: 1
---

# Programa de Fidelidade — visão geral

O **Programa de Fidelidade** recompensa quem compra e quem indica: o arrematante acumula **pontos** a cada arremate pago, sobe de **nível**, troca os pontos por **recompensas** numa lojinha e ganha **benefícios em R$** quando um amigo indicado faz a primeira compra. Tudo é configurável pelo leiloeiro — nome do programa, regras de pontuação, validade, níveis, lojinha e regulamento.

O arrematante participa **pelo site** (adesão, extrato, lojinha e convite de indicação). No ERP, a sua equipe configura o programa e administra participantes, resgates e benefícios.

:::info O programa nasce desligado
Nada acontece até você ligar o programa em **Configurações**. Enquanto estiver desligado, nenhum ponto é creditado e o site não mostra o programa.
:::

## Como acessar

**CRM** → **Fidelidade** (no menu lateral do CRM). O módulo tem abas no topo: **Painel**, **Participantes**, **Resgates**, **Indicações**, **Benefícios**, **Lojinha**, **Níveis**, **Faixas de indicação** e **Configurações**.

![Painel do Programa de Fidelidade](/img/manual/crm/fidelidade/fidelidade-painel.png)

:::note Módulo não instalado
Se o menu **Fidelidade** não aparece, ou a tela mostra **"Módulo não instalado para este cliente"**, o programa ainda não foi ativado no seu ambiente. Fale com o suporte para ativar.
:::

## Como funciona, em 1 minuto

| Etapa | O que acontece |
|---|---|
| **Adesão** | O arrematante com cadastro **aprovado** entra no programa pelo site, aceitando a versão atual do regulamento. Ganha o bônus de adesão e um **código de indicação**. |
| **Ganhar pontos** | Arremate **pago** rende pontos (padrão: 1 ponto a cada R$ 100,00). Também rendem pontos: aniversário de cadastro, indicado aprovado e 1ª compra paga do indicado. |
| **Validade** | Cada crédito vale por um prazo (padrão: 12 meses). O cliente é avisado por e-mail antes de vencer e pode renovar pagando um percentual em pontos. |
| **Nível** | Calculado pelo saldo válido (ex.: Bronze, Prata, Ouro, Diamante). Sobe e desce sozinho. |
| **Lojinha** | O cliente troca pontos por recompensas (desconto na taxa, produtos, frete). Os pontos saem na hora e é gerado um **voucher**. |
| **Indicação** | Quem indica ganha pontos quando o indicado é aprovado e, na 1ª compra paga do indicado, mais pontos **e** um benefício em R$. |

## Configurar o programa — passo a passo

1. **Revise os níveis** em [Níveis](./fidelidade-configuracao.md#níveis). O sistema já vem com Bronze, Prata, Ouro e Diamante como exemplo.
2. **Monte a lojinha** em [Lojinha](./fidelidade-lojinha-resgates.md): cadastre o que o cliente pode resgatar e quantos pontos custa.
3. **Defina as faixas de indicação** em [Faixas de indicação](./fidelidade-configuracao.md#faixas-de-indicação) (quanto vale o benefício em R$ conforme o valor da 1ª compra do indicado). Os valores de fábrica são só exemplos.
4. **Ajuste as regras** em [Configurações](./fidelidade-configuracao.md): nome do programa, pontos por R$ 100, bônus, validade, renovação, prazos.
5. **Revise o regulamento** (também em Configurações). O texto que vem de fábrica é genérico.
6. **Ligue o programa** no topo de Configurações e clique em **Salvar alterações**.

:::warning Não retroage
Ao ligar o programa, só os arremates pagos **depois da adesão** de cada cliente rendem pontos. Compras anteriores não contam.
:::

## O Painel

O Painel resume a saúde do programa. Escolha o período em **De / Até**.

| Indicador | O que mostra |
|---|---|
| **Participantes ativos** | Quantos clientes estão no programa (e quantos suspensos). Posição atual. |
| **Pontos emitidos / resgatados / expirados / estornados** | Movimentação de pontos **no período** escolhido. |
| **Em circulação** | Soma do saldo dos participantes ativos — o "passivo" de pontos que ainda pode ser resgatado. |
| **Resgates pendentes** | Resgates solicitados ou aprovados que ainda não foram entregues. Clique para ir à lista. |
| **Benefícios disponíveis** | Benefícios em R$ ainda não usados. Clique para ir à lista. |
| **Top indicadores** | Quem mais trouxe clientes novos. Clique numa linha para abrir o participante. |

Se o programa estiver desligado, o Painel mostra um aviso com o atalho para Configurações.

## Regras de negócio

- **Só arremate pago conta.** O ponto é creditado quando o arremate é baixado como pago. Se o pagamento for desfeito ou a venda cancelada, os pontos são **estornados** automaticamente — mesmo que o cliente já os tenha usado (o que faltar vira "dívida de pontos", abatida dos próximos créditos).
- **Consumo do mais antigo para o mais novo.** Ao resgatar, saem primeiro os pontos que vencem antes.
- **Nada é apagado.** Todo movimento fica no extrato do participante. Para corrigir algo, faça um [ajuste manual](./fidelidade-participantes.md#ajustar-pontos) contrário.
- **Desligar o programa** para de creditar pontos e de enviar avisos, mas estornos e expirações continuam funcionando.

## Permissões

Cada tela respeita uma permissão própria (configurável por grupo de usuários):

| Permissão | Libera |
|---|---|
| `fidelidade/dashboard/l` | Painel |
| `fidelidade/participante/l`, `/s`, `/u` | Listar, ver e mudar o status de participantes |
| `fidelidade/ajuste/c` | Ajuste manual de pontos |
| `fidelidade/resgate/l`, `/u` | Ver e movimentar resgates |
| `fidelidade/indicacao/l` | Ver indicações |
| `fidelidade/beneficio/l`, `/u` | Ver e marcar/cancelar benefícios |
| `fidelidade/recompensa/l`, `/c`, `/u`, `/d` | Lojinha |
| `fidelidade/nivel/l`, `/c`, `/u`, `/d` | Níveis |
| `fidelidade/config/u` | Configurações, regulamento e faixas de indicação |

## Dicas

- Comece com poucas recompensas e valores conservadores; é fácil acrescentar depois.
- Acompanhe **Em circulação** no Painel: é o total de pontos que seus clientes ainda podem trocar.
- O site tem um cache curto (cerca de 1 minuto): mudanças nas regras podem demorar alguns segundos para aparecer lá.

## Veja também

- [Configurações, níveis e faixas](./fidelidade-configuracao.md)
- [Participantes](./fidelidade-participantes.md)
- [Lojinha e resgates](./fidelidade-lojinha-resgates.md)
- [Indicações e benefícios](./fidelidade-indicacoes-beneficios.md)
