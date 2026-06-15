---
title: Domínio próprio
sidebar_position: 2
---

# Domínio próprio

Esta tela permite colocar o seu ERP e o seu site no **seu próprio endereço** (por exemplo, `www.seuleilao.com.br`), no lugar do endereço padrão da Suporte Leilões. A parte técnica é automática: você só precisa ter um domínio e seguir poucos passos guiados aqui.

## Como acessar

**Configurações** → **Domínio próprio**

![Domínio próprio](/img/manual/erp/configuracoes-dominio.png)

## O que você vê nesta tela

A tela é dividida em três áreas:

- **Introdução** no topo: explica por que usar um domínio próprio e mostra um comparativo **"Hoje" × "Com domínio próprio"** (o seu endereço antes e depois).
- **Passos** (coluna principal): onde você informa o domínio, recebe as instruções e verifica se já está no ar. Há também uma seção para autenticar o envio de e-mails.
- **Ajuda lateral**: um resumo dos 3 passos e uma seção de **Perguntas frequentes**.

## O que dá pra fazer aqui

### Passo 1 — Informar o seu domínio

1. No campo do **Passo 1**, digite o endereço que você comprou — **sem** `www.`, **sem** `http://` e **sem** barra no final (ex.: `meuleilao.com.br`).
2. Clique em **Configurar domínio**.
3. O sistema valida o endereço e segue para o passo 2. Se o domínio não for válido, aparece um aviso pedindo um formato como `meuleilao.com.br`.

> Ainda não tem um domínio? Compre em Registro.br, GoDaddy, Hostinger ou outro registrador e volte aqui. Sem domínio próprio, seu sistema continua funcionando normalmente no endereço da Suporte Leilões.

### Passo 2 — Apontar os nameservers (ou conferir os registros)

O que aparece neste passo depende da situação do seu domínio:

- **Domínio novo:** a tela mostra **dois nameservers**. Você precisa entrar no painel onde **comprou o domínio** e trocar os "servidores DNS" pelos dois exibidos. Use o botão **Copiar** ao lado de cada um. A tela traz instruções específicas por provedor (Registro.br, GoDaddy, Hostinger e outros) — clique no nome do seu provedor para expandir o passo a passo.
- **Domínio já delegado à Suporte Leilões:** os registros são criados automaticamente e exibidos numa tabela (Tipo, Endereço, Aponta para). Você não precisa fazer nada manual.

![Passo dos nameservers](/img/manual/erp/configuracoes-dominio-nameservers.png)

### Passo 3 — Verificar se já está no ar

1. Depois de apontar os nameservers no seu provedor, clique em **Verificar agora**.
2. Se ainda estiver propagando, aguarde e tente de novo mais tarde (pode levar de minutos a 24 horas).
3. Quando concluir, aparece o banner verde **"Domínio no ar!"**.

### Autenticar o envio de e-mails (SPF/DKIM/DMARC)

Na seção **"Autentique o envio de e-mails"** há um painel que verifica ao vivo a autenticação do seu domínio remetente e mostra os registros que ainda faltam criar. Isso evita que suas campanhas caiam em spam.

## Dicas e observações

- A troca é **transparente**: enquanto o domínio propaga, o seu site não sai do ar.
- A propagação geralmente leva alguns minutos, mas pode chegar a **24 horas** — é normal.
- Sem um domínio próprio, tudo continua funcionando no endereço da Suporte Leilões. Você pode configurar o domínio quando quiser.
- Travou em algum passo? Fale com o suporte que a configuração é feita junto com você.

## Veja também

- [Sites (Multisite)](./configuracoes-sites.md)
