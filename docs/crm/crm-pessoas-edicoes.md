---
title: Edições pendentes
sidebar_position: 4
---

# Edições pendentes

Esta é a **fila de aprovação** de mudanças em campos sensíveis de pessoas. É um controle anti-fraude: alterações nesses campos não entram direto; ficam aqui esperando um responsável aprovar ou rejeitar.

Os campos sob esse controle são: **nome completo**, **documento (CPF)**, **CNPJ** e **endereço fiscal**.

## Pré-requisitos e permissões

- **Visualizar** a fila (qualquer aba) exige a permissão de **ver pessoa no CRM** (`CRM_PESSOA_VER`).
- **Aprovar** ou **rejeitar** exige a permissão de **aprovador de pessoas no CRM** (`CRM_PESSOA_APROVAR`). Sem ela, você enxerga a fila mas os botões de ação não funcionam.

## Como acessar

**CRM** → **Pessoas** → **Edições pendentes** (rota `/crm/pessoas/edicoes`).

![Edições pendentes](/img/manual/crm/crm-pessoas-edicoes.png)

## O que você vê nesta tela

No topo, três abas que filtram a lista por situação: **Pendente**, **Aprovada** e **Rejeitada**. Abaixo, um cartão para cada edição.

Cada cartão mostra:

| Elemento | O que é |
|---|---|
| Nome da pessoa | A quem a alteração se refere. |
| campo | Qual campo foi alterado (ex.: documento, nome, endereço). |
| Situação | Etiqueta colorida: Pendente, Aprovada ou Rejeitada. |
| **DE → PARA** | O valor antigo (à esquerda) e o novo valor proposto (à direita). |
| Rodapé | Quando foi solicitada, por quem, quando foi resolvida e o motivo da rejeição (se houver). |

## O que dá pra fazer aqui

### Revisar as edições de uma situação

1. Clique na aba desejada: **Pendente**, **Aprovada** ou **Rejeitada**.
2. A lista recarrega mostrando só as edições daquela situação.

### Aprovar uma edição

1. Na aba **Pendente**, localize o cartão.
2. Compare o valor **DE** com o **PARA**.
3. Clique em **Aprovar** e confirme. A mudança é aplicada **imediatamente** ao cadastro da pessoa.

### Rejeitar uma edição

1. No cartão pendente, clique em **Rejeitar**.
2. Informe o **motivo** (opcional) e confirme.
3. A edição não é aplicada e fica registrada como rejeitada, com o motivo.

## Erros comuns

- **"Pendência já resolvida"**: alguém aprovou ou rejeitou essa edição antes de você (ou você clicou duas vezes). Recarregue a lista — só pendências realmente pendentes podem ser aprovadas/rejeitadas.
- **Botões Aprovar/Rejeitar não respondem**: falta a permissão de aprovador (`CRM_PESSOA_APROVAR`).

## Dicas e observações

- Só edições **pendentes** mostram os botões Aprovar/Rejeitar. Edições já resolvidas ficam apenas para consulta.
- Aprovar é uma ação **definitiva e imediata**: o novo valor passa a valer no cadastro na hora, e a aprovação fica registrada na auditoria da pessoa (valor DE e PARA).
- Esta fila existe por exigência **anti-fraude pós-arremate** — leve a sério a conferência dos valores DE/PARA, sobretudo em CPF/CNPJ.
- O **motivo** ao rejeitar é opcional, mas recomendado: ele fica registrado e ajuda quem solicitou a entender o porquê.

## Veja também

- [Importar pessoas (CSV)](./crm-pessoas-import.md)
- [Início do CRM](./crm.md)
