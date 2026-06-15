---
title: Biblioteca de Mensagens
sidebar_position: 5
---

# Biblioteca de Mensagens

A Biblioteca de Mensagens guarda os templates de texto reaproveitados em todo o CRM: **campanhas**, **atendimento** e **automação** usam os mesmos modelos, sem duplicação. Cada template pode ter placeholders (ex.: `{{nome}}`, `{{leiloeiro}}`) que são substituídos no momento do envio.

## Como acessar
**CRM** → **Biblioteca de Mensagens** (URL `/crm/biblioteca-mensagens`).

![Biblioteca de Mensagens](/img/manual/crm/crm-biblioteca-mensagens.png)

## O que você vê nesta tela

No topo, o botão **+ Novo template** e uma barra de filtros (busca por nome, contexto e canal). Abaixo, a lista de templates em cartões.

| Elemento do cartão | O que é |
|---|---|
| Nome | Nome do template. |
| Selo de contexto | Avulso, Campanha, Atendimento ou Automação. |
| Selo de canal | E-mail, WhatsApp, SMS, Push ou Interno. |
| Assunto | Aparece quando o canal é e-mail. |
| Trecho do corpo | Prévia das primeiras linhas. |
| Placeholders | As variáveis disponíveis no template (ex.: `{{nome}}`). |

## O que dá pra fazer aqui

### Criar um template
1. Clique em **+ Novo template**.
2. Preencha o **Nome** (obrigatório).
3. Escolha o **Contexto** e o **Canal**.
4. Se o canal for **e-mail**, preencha o **Assunto**.
5. Escreva o **Corpo** (obrigatório). Use placeholders entre chaves duplas onde quiser inserir dados dinâmicos.
6. Em **Placeholders disponíveis**, liste as variáveis separadas por vírgula (ex.: `nome, leiloeiro, link_leilao`).
7. Clique em **Criar**.

### Editar um template
1. Clique no cartão do template.
2. Ajuste os campos.
3. Clique em **Salvar**.

### Remover um template
1. Abra o template (clique no cartão).
2. Clique em **Remover** no rodapé do modal e confirme.

### Filtrar e buscar
- Digite no campo de busca para procurar por nome.
- Use os seletores de **contexto** e **canal** para restringir a lista.

## Dicas e observações
- O mesmo template fica disponível para campanhas, atendimento e automações — escolha o contexto que melhor descreve o uso, mas saiba que a biblioteca é compartilhada.
- Os placeholders são só de referência para quem edita; o que vale é escrever `{{nome}}` (e equivalentes) dentro do corpo/assunto.
- O campo Assunto só aparece para o canal e-mail.

## Veja também
- [Fluxo da automação](./crm-automacoes-id(\\d+)-fluxo.md)
