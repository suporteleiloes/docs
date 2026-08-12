---
title: Migração de Clientes (operador)
sidebar_position: 2
---

# Migração de Clientes — guia do operador

Esta tela do **Console** é onde a equipe de Operação vira um cliente do **ERP antigo (legado)** para o **ERP novo (V5)**, sem depender do time técnico. Você acompanha o estado de cada cliente, dispara a migração, envia o acesso ao cliente e, no dia combinado, faz a virada para produção.

## Como acessar

**Console** → **Migração**. O menu só aparece para quem está logado na gerência.

![Lista de clientes com um cliente em homologação](/img/manual/console/migracao-lista-homolog.png)

## Os estados de um cliente

Cada cliente mostra um **Estado V5**:

| Estado | O que significa | O que dá pra fazer |
|---|---|---|
| **Vazio** | Ainda não tem ambiente novo | **Migrar** |
| **Homologação** | Ambiente novo no ar, com os dados espelhados do legado — o cliente testa aqui | **Enviar ao cliente**, **Re-espelhar**, **Promover** |
| **Produção** | Virada feita — é o ambiente oficial. O espelho fica **travado** (não dá mais pra sobrescrever com o legado) | **Reverter p/ homologação** (só em caso de engano) |

:::info Barra do topo
Os cartões coloridos (Vazio / Homologação / Produção) contam quantos clientes estão em cada estado. Clique num cartão para filtrar a lista.
:::

## Passo 1 — Migrar (subir a homologação)

Num cliente **Vazio**, clique **Migrar**. Abre uma janela com a opção **Dry-run (simulação)**:

- **Dry-run ligado** (recomendado da primeira vez): roda a cópia em modo de teste e mostra um relatório, **sem** gravar nada de verdade. Serve pra conferir que está tudo certo.
- **Dry-run desligado**: executa a migração real. O cliente passa a aparecer como **Migrando…** e, ao terminar, **Homologação**.

Durante a migração, um **painel de progresso** mostra cada etapa (copiar o banco do sistema antigo, espelhar os dados, aplicar as proteções de e-mail, etc.). Se alguma etapa falhar, você pode clicar em **Tentar de novo** naquele passo.

:::tip Proteção automática
Na migração, o sistema **redireciona todos os e-mails** da homologação para uma caixa interna e **pausa as campanhas** — ou seja, nada é disparado para os clientes reais enquanto o ambiente está em teste.
:::

## Passo 2 — Enviar ao cliente

Com o cliente em **Homologação**, clique **Enviar ao cliente**. Abre o **Kit do operador**, com tudo pronto para você mandar por e-mail ou WhatsApp:

![Kit do operador](/img/manual/console/migracao-kit-operador.png)

- **Painel de homologação (ERP)** — o link que o cliente usa para acessar o novo ERP. Botões **Copiar** e **Abrir**.
- **App do arrematante (homologação)** — o link do painel do arrematante.
- **Credenciais de acesso** — o usuário (`sladmin`). ⚠️ A **senha vem em branco de propósito**: por segurança, ela **não fica salva no sistema** — digite a senha real do ambiente antes de repassar ao cliente.
- **Baixar cartilha (PDF)** — a Cartilha da Virada, para anexar ao e-mail/WhatsApp.
- **Modelo de mensagem** — um texto pronto (editável) apresentando o novo ERP, com o link e os próximos passos. Botão **Copiar mensagem**.
- **Copiar tudo** — copia link + credenciais + mensagem de uma vez.

O cliente então acessa a homologação, confere os dados migrados, testa e valida — com o apoio da nossa [documentação](https://docs.suporteleiloes.com).

## Passo 3 — Re-espelhar (opcional, enquanto está em homologação)

Se, durante a homologação, o cliente ainda estiver mexendo no **sistema antigo** e você precisar trazer os dados mais recentes, use **Re-espelhar**. Ele **refaz a cópia do legado por cima da homologação** — com um **backup automático** antes, por segurança.

:::warning
Re-espelhar **sobrescreve** o que estiver na homologação com os dados do sistema antigo. Só use enquanto o cliente ainda não virou para produção.
:::

## Passo 4 — Promover (a virada)

Quando o cliente **aprovar** (treinou, testou, está tudo certo), clique **Promover**. É a **virada para produção**:

- Peça confirmação forte: digite exatamente `PRODUCAO <slug-do-cliente>`.
- A partir daí o ambiente novo é o **oficial**, e o **espelho fica travado** — não dá mais para re-espelhar (isso evita apagar, sem querer, dados que já nasceram no ERP novo).

:::tip Agende para uma sexta-feira
A virada é quase instantânea, mas recomende ao cliente **agendar para uma sexta** — o fim de semana de menor movimento dá folga para acompanhar e ajustar.
:::

## Reverter para homologação (só em caso de engano)

Se um cliente foi promovido para produção **por engano**, ou se você precisa devolvê-lo para homologação, use **Reverter p/ homologação** (exige confirmação `REVERTER <slug>`). Isso destrava o espelho e volta o cliente para homologação. É uma ação administrativa — use com cuidado.

## Regras e cuidados

- **Sempre rode um dry-run antes** da primeira migração de um cliente.
- **Nunca re-espelhe um cliente que já está em produção** — o sistema bloqueia isso de propósito.
- A **senha do ambiente nunca fica salva** — digite-a no Kit na hora de enviar.
- Os **e-mails da homologação ficam retidos** (não chegam aos clientes reais) até a virada.
