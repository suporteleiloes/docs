---
title: Cadastro público (links)
sidebar_position: 4
---

# Cadastro público (links)

Esta tela gera links de cadastro que você envia a possíveis clientes. A pessoa acessa o link sem precisar de login, preenche os dados e vira automaticamente um lead no CRM. Cada link pode ter um modo de coleta diferente, validade e limite de usos.

## Como acessar

**CRM** → **Configurações** → **Cadastro público** (rota `/crm/configuracoes/cadastro-publico`).

![Cadastro público (links)](/img/manual/crm/crm-configuracoes-cadastro-publico.png)

## O que você vê nesta tela

No topo, o botão **+ Gerar link**. Abaixo, a lista dos links já criados. Se não houver nenhum, aparece a mensagem "Nenhum link gerado".

| Coluna | O que é |
|---|---|
| Modo | Tipo de cadastro: Simples, Completo ou Completo + Biometria |
| Título | Título exibido para o cliente (ou "—" se não definido) |
| Usos | Quantas vezes o link foi usado, e o limite quando houver (ex.: 3 / 10) |
| Expira | Data e hora de expiração do link |
| Status | **Ativo** ou **Expirado/Esgotado** |
| Resultado | Link para a pessoa cadastrada a partir deste token, se já houver |
| (ação) | Botão **Copiar** para copiar a URL do link |

### Modos de cadastro

| Modo | O que coleta |
|---|---|
| Simples | Apenas nome + e-mail/telefone |
| Completo | Acrescenta documento + endereço |
| Completo + Biometria | Acrescenta verificação facial (via SDK externo) |

## O que dá pra fazer aqui

### Gerar um link de cadastro

1. Clique em **+ Gerar link**.
2. No campo **Modo de cadastro**, escolha Simples, Completo ou Completo + Biometria.
3. (Opcional) Preencha o **Título** — ele é mostrado ao cliente na página de cadastro.
4. (Opcional) Escreva uma **Mensagem** de apresentação.
5. (Opcional) Defina **Expira em** (data e hora) para o link parar de funcionar depois.
6. (Opcional) Defina **Limite de usos** para encerrar o link após um número de cadastros.
7. Clique em **Gerar**. Abre a janela **Link gerado** com a URL pronta.
8. Clique em **Copiar link** para colocar a URL na área de transferência e enviá-la ao cliente.

![Gerar link de cadastro](/img/manual/crm/crm-configuracoes-cadastro-publico-novo.png)

### Copiar um link já existente

Na linha do link desejado, clique em **Copiar**. A URL completa é copiada para a área de transferência.

### Ver quem se cadastrou por um link

Na coluna **Resultado**, clique em **Pessoa #...** para abrir o cadastro da pessoa que veio daquele link.

## Dicas e observações

- O cliente acessa pelo endereço `/c/:token` **sem login** — basta o link.
- Links com data de expiração vencida ou limite de usos atingido aparecem como **Expirado/Esgotado** e param de aceitar cadastros.
- O modo **Completo + Biometria** depende de um SDK externo de verificação facial.

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
