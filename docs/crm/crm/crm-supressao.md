---
title: Supressão de e-mail
sidebar_position: 21
---

# Supressão de e-mail

A lista de supressão reúne os endereços de e-mail que **não devem mais receber nenhum disparo** — por causa de bounce permanente (caixa inexistente), reclamação de spam, descadastro ou bloqueio manual. É uma proteção da reputação do seu domínio: enquanto um endereço estiver aqui, nenhuma campanha chega até ele. A supressão vale por endereço de e-mail, independente do opt-out de cada pessoa.

## Como acessar

**CRM** → **Configurações** → **Supressão de e-mail**.

![Supressão de e-mail](/img/manual/crm/crm-supressao.png)

## O que você vê nesta tela

No topo, uma explicação do que é a lista e o botão **Suprimir e-mail**. Em seguida, a busca por e-mail ou detalhe, um filtro por motivo e a tabela.

| Coluna | O que é |
|---|---|
| **E-mail** | O endereço suprimido. |
| **Motivo** | Por que entrou na lista: **Bounce**, **Reclamação**, **Manual** ou **Descadastro**. |
| **Detalhe** | Observação interna ou descrição do motivo. |
| **Suprimido em** | Data e hora em que o endereço entrou na lista. |

Na ponta direita de cada linha há o botão **Reabilitar**.

## O que dá pra fazer aqui

- **Suprimir** um e-mail manualmente.
- **Reabilitar** um e-mail (tirar da lista para que volte a receber envios).
- **Buscar** por e-mail ou detalhe.
- **Filtrar** por motivo.

### Suprimir um e-mail manualmente

1. Clique em **Suprimir e-mail**.
2. Preencha o campo **E-mail** (obrigatório) com o endereço a bloquear.
3. Opcionalmente, escreva um **Detalhe** — motivo ou observação interna.
4. Clique em **Suprimir**. O e-mail entra na lista com o motivo **manual** e deixa de receber qualquer disparo.

![Suprimir e-mail](/img/manual/crm/crm-supressao-novo.png)

Se o endereço já estava na lista, o sistema avisa que ele já existia — nada é duplicado.

### Reabilitar um e-mail

1. Localize o endereço na tabela (use a busca se preciso).
2. Clique em **Reabilitar** na linha.
3. Confirme. O endereço sai da lista e **volta a receber e-mails**.

## Dicas e observações

- Os motivos **Bounce**, **Reclamação** e **Descadastro** entram na lista automaticamente, conforme o comportamento dos envios; **Manual** é o que você adiciona aqui.
- Reabilitar um endereço que sofreu bounce permanente ou reclamou de spam pode prejudicar a reputação do domínio — só faça isso se tiver certeza de que o problema foi resolvido.
- A supressão é por endereço de e-mail. Para impedir contato por outros canais ou tratar a pessoa como um todo, ajuste o cadastro da pessoa.

## Veja também

- [Campanhas](marketing-campanhas.md)
- [Configurações do CRM](crm-configuracoes.md)
