---
title: Bot operacional & Add-ons (WhatsApp)
sidebar_position: 20
---

# Bot operacional & Add-ons do bot

:::warning Exclusivo da gerência
Este recurso é **interno**. Ele dá ao bot de atendimento da **gerência** a capacidade de consultar e operar a nossa infraestrutura pelo WhatsApp, com um modelo de segurança em camadas. Não existe (nem pode existir) para os leiloeiros.
:::

## O que é

Nos **grupos de WhatsApp da nossa equipe**, você pode **mencionar o bot** e pedir informações do dia a dia — de chamados a **operação/infraestrutura** ("qual o status do disco do sc5?"). O bot entende o pedido, executa e responde no grupo.

Por baixo, o bot ganha capacidades extras através de **add-ons** (parecido com "plugins/MCP"): cada add-on adiciona ferramentas que o bot pode usar. O primeiro add-on é o **`ia_operacao`**, que conecta o bot ao **agente operacional** da nossa VPS (o mesmo Claude Code que roda no `desktop.suporteleiloes.com.br`, com SSH para a infra, repositórios e memória).

## Como usar (no grupo)

1. **Mencione** o número da gerência e escreva o pedido em linguagem natural. Ex.:
   - `@Suporte Leilões - Gerência quantos chamados em aberto e me dê o último`
   - `@Suporte Leilões - Gerência qual o status do espaço em disco do sc5?`
2. O bot processa em **segundo plano** (não trava nada) e responde no grupo.
3. Pedidos de **leitura/diagnóstico** (disco, status de serviço, logs, consultas) rodam **na hora**.
4. Pedidos de **escrita** (reiniciar serviço, deploy, apagar, alterar banco) são **bloqueados** e entram no fluxo de **aprovação** (abaixo).

## Segurança — 3 camadas

O agente operacional tem acesso à nossa infra, então o controle é rígido:

### Camada 0 — Isolamento
O add-on `ia_operacao` é **escopo gerência**: só funciona no ambiente da gerência e apenas nos **grupos/números** onde foi atribuído. Não vaza para leiloeiro em nenhuma hipótese (barreiras no registry de add-ons, no escopo e uma trava dura no próprio add-on).

### Camada 1 — Gateway de permissão (leitura livre, escrita bloqueada)
Toda ação que o agente tenta executar passa por um **inspetor de comando**:

- **Libera** automaticamente **leitura/diagnóstico** — `df`, `du`, `systemctl status`, `docker ps`, `git log`, `SELECT`, e até `ssh servidor "df -h"`.
- **Bloqueia** **escrita/destrutivo** — `rm`, `restart`, `deploy`, `DROP`/`DELETE`, redirecionamento `>`, etc. — mesmo quando "escondidos" dentro de um `ssh`, encadeamento (`&&`, `|`) ou `$(...)`.
- É **à prova de falhas**: qualquer erro no inspetor resulta em **bloqueio** (nunca "deixa passar" por engano).

Ou seja: "**apaga tudo**" simplesmente **não executa** pelo bot.

### Camada 2 — Aprovação por pessoas autorizadas
Quando o bot precisa de uma operação de **escrita**, ele **não executa**. Em vez disso:

1. Registra a operação como **pendente** e responde no grupo, por exemplo:
   > ⚠️ *Ações sensíveis bloqueadas* (exigem aprovação de um autorizado):
   > • `systemctl restart php-fpm` — responda: **aprovar A1B2**
2. Um **aprovador autorizado** responde no grupo: `aprovar A1B2`.
3. O sistema confere se **quem respondeu está na lista de aprovadores** (pelo número de WhatsApp). Se estiver, executa **apenas aquele comando** e posta o resultado. Se não, recusa educadamente.

## Gestão no ERP

### Aprovadores (quem pode autorizar)

**Configurações → Integrações → Aprovadores do bot.**

![Aprovadores do bot](/img/manual/crm/bot-aprovadores.jpg)

- Cadastre **nome + número de WhatsApp** de cada pessoa que pode aprovar operações sensíveis.
- É esse número que o sistema reconhece quando alguém responde `aprovar <token>` no grupo.
- **Permissão exclusiva:** só quem tem a permissão **`CRM_BOT_APROVADOR_GERIR`** (ou o superusuário) gerencia essa lista. De propósito, **um administrador comum não consegue** abrir essa tela nem se auto-adicionar — senão o controle não valeria nada.

:::danger Antes de testar o fluxo de escrita
Cadastre o seu próprio WhatsApp como aprovador. Sem isso, o `aprovar <token>` responde "não autorizado".
:::

### Add-ons (capacidades do bot)

**Configurações → Integrações → Add-ons do bot** — cadastro dos add-ons e **atribuição a grupos/números**:

![Lista de add-ons do bot](/img/manual/crm/bot-addons-lista.jpg)

- **`ia_operacao`** (tipo ia-worker, escopo gerência): já criado e atribuído ao grupo interno. Dá o acesso à operação/infra.
- **Add-on HTTP** (tipo genérico): permite plugar uma integração externa **sem código** — informa URL, método, cabeçalhos e parâmetros, e o bot ganha uma ferramenta nova.
- Um add-on só age nos **grupos/números** aos quais foi atribuído.

Exemplo de add-on **HTTP** (tela de criação — caso "Consulta CEP" via ViaCEP). O passo a passo detalhado está no manual público de [Add-ons do bot](../../crm/crm-configuracoes-bot-addons.md):

![Novo add-on HTTP — Consulta CEP](/img/manual/crm/bot-addons-http.jpg)

## Casos de uso

### Leitura/diagnóstico (roda na hora)

Pergunta típica no grupo, respondida sem aprovação:

> **Você:** `@Suporte Leilões - Gerência qual o status do espaço em disco do sc5?`
>
> **Bot:** `sc5 — disco / em 62% (usado 310G de 500G). /tmp OK. Sem alerta.`

O inspetor (Camada 1) classifica `ssh sc5 "df -h"` como **leitura** e libera. Bom para "status do disco do sc5", "quantos chamados abertos", "últimos logs de erro da API".

### Escrita com aprovação

> **Você:** `@Suporte Leilões - Gerência reinicia o php-fpm da api2`
>
> **Bot:** ⚠️ *Ação sensível bloqueada* (exige aprovação): `systemctl restart php-fpm` — responda **aprovar A1B2**
>
> **Aprovador (número na lista):** `aprovar A1B2`
>
> **Bot:** ✅ Executado. `php-fpm` reiniciado na api2.

Se quem responde **não** estiver na lista de aprovadores (Camada 2), o bot recusa e a operação **não roda**.

:::info Onde ver as conversas no ERP
As conversas de cada número (inclusive as de grupo, quando aplicável) podem ser acompanhadas pela tela de [Conversas do número (WhatsApp Web)](../../crm/crm-configuracoes-whatsapp.md).
:::

## Arquitetura técnica (para a equipe)

**API (`api-v2`)**
- `App\Entity\Crm\BotAddon` + `BotAddonAlvo` (atribuição por grupo/número) + `AddonRegistry` (resolve as ferramentas habilitadas no contexto; escopo `gerencia` só entra com `IS_GERENCIA`).
- `App\Service\Chat\Addon\IaWorkerAddon` → `App\Service\Ia\IaWorkerClient`.
- Bot de grupo (`AssistenteSuporteGrupo`) roda um **loop de ferramentas** (não mais intenções fixas) — entende perguntas compostas.
- Menção processada em **background** (`app:bot:responder-mencao`, disparado por `WhatsappGrupoHandler` via `nohup`) para não prender o php-fpm.
- Aprovadores: `crm_bot_aprovador` (ACL exclusiva `CRM_BOT_APROVADOR_GERIR`, checagem estrita sem bypass de admin). Pendências: `crm_bot_pendente`. Execução aprovada: `app:bot:executar-aprovado`.

**Agente (`ia-worker`, VPS `sl-aop`, roda como `sl`)**
- `POST /agent/claude` — roda `claude -p` (o Claude Code do desktop) com `--permission-mode dontAsk` + **hook `PreToolUse`** (`bin/permission-gate.mjs`, classificador em `bin/permission-classify.mjs`) que faz a Camada 1. Ops bloqueadas voltam em `pending`.
- `POST /tools/exec-approved` — executa um comando **já aprovado** (`bash -lc` como `sl`), sem gateway. Chamado só após a aprovação in-group.
- Autenticação: `x-worker-secret` + Cloudflare Zero-Trust (`CF-Access-*`).
- **Deploy da ia-worker:** `ssh sl-aop` → `sudo -u sl -H bash -lc "cd /srv/sl/repos/ia-worker && git pull && npm run build"` → `sudo systemctl restart sl-ia-worker`.

**Gotchas**
- Não há `monolog.yaml` na API → logs `info` não persistem; para depurar o bot de grupo há um diagnóstico persistente em `crm_grupo_suporte_whatsapp.ultimo_diag`.
- Deploy da API: se o `cache:warmup` falhar com erro do `ProxyCacheWarmer` (arquivo de cache stale), rode `rm -rf var/cache/prod` nos nós e refaça o warmup / re-rode o deploy.

## Veja também

- [IA — Configuração](./console-ia-config.md)
- [IA — Operações](./console-ia-operacoes.md)
- [IA — Aprovações](./console-ia-aprovacoes.md)
