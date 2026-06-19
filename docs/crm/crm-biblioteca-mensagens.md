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

## Regras de negócio
- **Campos obrigatórios**: **Nome** e **Corpo**. Contexto e Canal têm padrão (Campanha / E-mail) e podem ser trocados.
- **Assunto só importa no e-mail**: o campo aparece apenas quando o canal é E-mail; nos demais canais ele é ignorado.
- **Remover é permanente**: ao remover um template, ele some da biblioteca. Verifique antes se nenhuma campanha, automação ou resposta rápida depende dele.
- **Substituição no envio**: os placeholders só viram dados reais no momento do disparo/uso. Se você escrever uma variável que o sistema não conhece, ela é enviada como texto literal — revise a grafia (`{{nome}}`, não `{nome}`).

## Erros comuns
- **Placeholder com grafia errada** (`{nome}`, `{{ nome }}` com espaços): pode não ser substituído. Use exatamente `{{nome}}`.
- **Listar a variável em "Placeholders disponíveis" mas não usá-la no corpo**: essa lista é só um lembrete; o que realmente insere o dado é a variável escrita dentro do corpo/assunto.

## Dicas e observações
- O mesmo template fica disponível para campanhas, atendimento e automações — escolha o contexto que melhor descreve o uso, mas saiba que a biblioteca é compartilhada.
- Os placeholders são só de referência para quem edita; o que vale é escrever `{{nome}}` (e equivalentes) dentro do corpo/assunto.
- O campo Assunto só aparece para o canal e-mail.

## Veja também
- [Fluxo da automação](./crm-automacoes-id-fluxo.md)
- [Campanhas](marketing-campanhas.md)
