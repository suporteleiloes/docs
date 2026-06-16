---
title: Gerador de conteúdo
sidebar_position: 6
---

# Gerador de conteúdo

O Gerador de conteúdo cria o material das suas campanhas: e-mails em HTML, mensagens de WhatsApp e peças para redes sociais. Você pode gerar a partir de lotes do leilão, gerar com IA a partir de um briefing, ou escrever o HTML manualmente — e salvar tudo como modelo reutilizável.

## Como acessar

**Marketing** → **Gerador de conteúdo**.

![Gerador de conteúdo](/img/manual/marketing/marketing-gerador.png)

## O que você vê nesta tela

A tela é dividida em duas colunas. À esquerda ficam os geradores e atalhos; à direita, o resultado / editor.

| Bloco (coluna esquerda) | Para que serve |
|---|---|
| Gerar com IA | Cria conteúdo a partir de um briefing em texto |
| Gerar via lotes de leilão | Cria conteúdo a partir dos IDs de lotes |
| Variáveis disponíveis | Atalhos para inserir variáveis no editor |
| Templates salvos | Carrega um modelo já guardado |

Na coluna direita, o painel **Resultado / Editor HTML** mostra o conteúdo gerado e permite editar, copiar e salvar.

## O que dá pra fazer aqui

### Gerar com IA

1. No bloco **Gerar com IA**, escreva o **Briefing** (ex.: convite para leilão de imóveis em Curitiba dia 15/06, 12 lotes a partir de R$ 80 mil).
2. Escolha o **Canal**: E-mail (HTML) ou WhatsApp (texto).
3. Escolha o **Tom**: Profissional, Formal ou Descontraído.
4. Clique em **Gerar com IA**. O conteúdo aparece no editor à direita, pronto para ajustes.

### Gerar via lotes de leilão

1. No bloco **Gerar via lotes de leilão**, escolha o **Tipo de conteúdo**:
   - E-mail HTML (com preview + link)
   - WhatsApp (texto)
   - Feed Facebook (imagem)
   - Stories Instagram (imagem)
   - Banner
2. Em **IDs dos lotes**, digite os números dos lotes separados por vírgula, espaço ou ponto e vírgula (ex.: `1234, 1235, 1240`). O leilão é identificado a partir do primeiro lote.
3. Clique em **Gerar conteúdo**. O resultado aparece à direita (uma prévia HTML, a mensagem de WhatsApp ou a imagem, conforme o tipo).
4. Use **Limpar** para zerar os campos e o resultado.

### Inserir variáveis

No bloco **Variáveis disponíveis**, clique em uma variável para inseri-la no editor. As variáveis são substituídas pelos dados reais no envio:

| Variável | Vira |
|---|---|
| `{{ pessoa.name }}` | Nome do destinatário |
| `{{ pessoa.document }}` | CPF/CNPJ do destinatário |
| `{{ campanha.nome }}` | Nome da campanha |
| `{{ link }}` | Link principal (CTA, rastreado) |
| `{{ dominio }}` | Domínio do site do leiloeiro |
| `{{ unsub }}` | Link de descadastro |

### Editar o HTML manualmente

1. No painel da direita, clique em **Editar HTML** para abrir o editor de texto.
2. Escreva ou cole seu HTML. A **Pré-visualização** abaixo mostra o resultado em tempo real.
3. Clique em **Ver resultado** para voltar à visualização gerada.

### Copiar o conteúdo

- Clique em **Copiar HTML** para copiar o conteúdo para a área de transferência e colá-lo onde quiser.

### Salvar como template

1. Com um conteúdo pronto, clique em **Salvar como template**.
2. Preencha o **Nome do template** (obrigatório).
3. Escolha o **Contexto**: Campanha de marketing, Atendimento ou Automação.
4. Clique em **Salvar**. O template fica disponível na biblioteca e no bloco **Templates salvos**.

### Carregar um template salvo

- No bloco **Templates salvos**, clique em **Carregar** ao lado do modelo desejado. Ele abre no editor para edição.

## Dicas e observações

- A geração com IA exige que a integração de IA esteja configurada; se não estiver, o sistema avisa antes de gerar.
- No tipo **WhatsApp**, o resultado aparece em um balão de prévia no estilo do aplicativo, além do texto editável.
- Os templates salvos aqui aparecem também no assistente de [Nova campanha](marketing-campanhas-nova.md), no seletor de templates do e-mail.

## Veja também

- [Nova campanha](marketing-campanhas-nova.md)
- [Campanhas](marketing-campanhas.md)
- [Painel de Marketing](marketing.md)
