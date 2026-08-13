---
title: Design de sites
sidebar_position: 21
---

# Console → Design de sites

:::warning Exclusivo da gerência
Esta tela é **interna**. Ela roda na **nossa conta do Claude Design** — todo prompt daqui e do portal consome a nossa assinatura. O leiloeiro nunca acessa o claude.ai; ele só vê o resultado no portal dele.
:::

## O que é

Um lugar dentro do ERP para **criar o layout do site de um cliente e iterar com ele até a aprovação**, sem sair do sistema e sem ficar mandando print por WhatsApp.

Cada design é um **projeto no Claude Design**, criado e editado pelo Claude Code que roda na nossa VPS (`ia-worker`). Você manda os prompts pelo Console; o leiloeiro acompanha, pede ajustes e aprova em **conta.suporteleiloes.com.br**. Os dois lados conversam no mesmo histórico.

Depois de aprovado, o design alimenta o pipeline de implementação que já existe (`/agent/implement` → repositório `site-{dominio}` → homolog → produção).

## Como acessar

**Console → Design** (ou `/console/design`). Exige a permissão **Console/Design**.

| Permissão | O que libera |
|---|---|
| `gerencia/console/design/l` | Abrir a lista e ver um design (só leitura) |
| `gerencia/console/design/operar` | Criar design, enviar prompt, reabrir aprovado |

As duas são separadas de propósito: cada prompt gasta a nossa assinatura e muda o que o cliente vê. Acompanhar não é o mesmo que disparar.

## O que você vê nesta tela

![Lista de designs de site no Console](/img/manual/console/design/lista.png)

| Coluna | Significado |
|---|---|
| **Design** | Título que você deu. Clique para abrir. |
| **Cliente** | Leiloeiro ao qual o design está atrelado. É o que dá acesso a ele no portal. |
| **Status** | `Rascunho` (criado, sem geração), `Em revisão` (tem layout, iterando), `Aprovado` (cliente aprovou) |
| **Atualizado** | Última alteração |

## Criar um design

1. Clique em **Novo design**.
2. **Título** — como você quer identificar (ex.: "Site institucional 2026").
3. **ID do cliente** — o id do leiloeiro na gerência. **É o campo que libera o acesso do cliente no portal.** Sem ele, o cliente não enxerga nada.
4. **Nome do cliente** — aparece no título do projeto no Claude Design.
5. **Briefing inicial** *(opcional)* — se preencher, a primeira versão já começa a ser gerada.
6. **Criar**.

:::tip Escreva o briefing como um briefing de agência
Diga o negócio, as seções que não podem faltar, o tom e as referências. "Site de leiloeiro" produz genérico. Vale colar dados reais: praça, matrícula JUCEPE, telefone, tipos de bem que ele mais vende.
:::

## Liberar o acesso do cliente

O design só aparece para o leiloeiro se ele tiver **login no portal** e o design
estiver atrelado ao **ID do cliente** dele. São duas coisas distintas — e a primeira
provavelmente já existe, porque é o mesmo acesso que ele usa para contratos e faturas.

Para conferir ou criar: **Console → Clientes → abra o cliente → Acessos do Portal**.

Para convidar alguém, informe **nome, e-mail, telefone e papel**:

| Papel | Para quem |
|---|---|
| `admin` | o próprio leiloeiro ou o sócio — enxerga tudo |
| `financeiro` | quem cuida de faturas |
| `suporte` | quem abre chamados |
| `operador` | acesso operacional básico (padrão) |

O que acontece ao convidar:

1. Se o e-mail já existir no sistema, o usuário é **reaproveitado** (não duplica cadastro).
2. Ele ganha o papel `ROLE_CLIENTE` e o vínculo com o cliente.
3. E-mail e telefone vão para o cadastro da pessoa.
4. **O convite sai automaticamente por e-mail e WhatsApp**, com as instruções de acesso.

Qualquer papel enxerga o Design do site — não há permissão separada para essa tela.

:::tip O que dizer para o cliente
Que ele vai receber um convite por e-mail e WhatsApp, que o endereço é
**conta.suporteleiloes.com.br**, e que o layout fica em **Design do site** no menu.
O manual dele explica o resto — mande o link junto.
:::

Para tirar o acesso: mesma tela, **revogar**.

## A tela do design

![Tela de um design com conversa e preview](/img/manual/console/design/detalhe.png)

À **esquerda** fica a conversa (seus prompts e os do cliente, com o resumo do que a IA mudou em cada rodada). À **direita**, o preview em Desktop ou Mobile.

No topo da conversa está o **link do cliente**. Ele é informativo — o cliente acessa pelo menu **Design do site** dentro do portal, com o login que ele já tem.

## Regras de negócio

- **A geração leva minutos.** Uma home do zero levou ~6 minutos no teste; ajustes são mais rápidos. Roda em segundo plano — você pode fechar a tela, sair do ERP, voltar depois. A tela se atualiza sozinha.
- **Uma geração por vez, por design.** Enquanto uma roda, o campo de prompt fica travado dos **dois lados**. Isso evita duas versões concorrentes sobrescrevendo uma à outra.
- **Aprovado trava.** Depois que o cliente aprova, ninguém manda prompt. Use **Reabrir para ajustes** se precisar mexer.
- **O cliente tem teto de 40 ajustes por design.** Passou disso, ele é orientado a falar com a gente. Reabrir não zera o contador.
- **O preview é servido por nós.** O Claude Design gera dois links (`serve_url` e `open_url`) e **nenhum dos dois serve para o cliente** — o primeiro é temporário e não pode ser exposto, o segundo exige login na nossa organização Anthropic. Por isso guardamos o HTML e servimos pelo ERP.

## Segurança

- O texto do cliente vira prompt de um `claude -p` na VPS. Ele roda num **endpoint separado** (`/agent/design`), em diretório isolado, **sem Bash e sem acesso a repositório ou infra** — diferente do `/agent/claude` do bot operacional.
- O briefing entra delimitado e o guardrail manda tratar como **dado, nunca instrução**. Se o cliente tentar dar ordem à IA, ela ignora e registra no resumo.
- O preview roda em `<iframe sandbox>` sem `allow-same-origin` — o HTML gerado não alcança o ERP nem o token de sessão.
- Um cliente **não enxerga o design de outro**: listagem, leitura, preview e aprovação são validados contra os ambientes dele no backend.

## Erros comuns

| O que aparece | Causa | O que fazer |
|---|---|---|
| "já existe uma geração em andamento" | Alguém (você ou o cliente) mandou prompt e ele ainda está rodando | Espere terminar |
| "design já aprovado — reabra antes de alterar" | O cliente aprovou | **Reabrir para ajustes** |
| Mensagem com **Falhou** | O agente terminou sem gravar o layout | Reescreva o pedido de forma mais concreta e mande de novo |
| Cliente diz que não vê o design | O design ficou sem **ID do cliente**, ou o id não bate com o ambiente dele | Confira o `cliente_id` do design |

## Instalação / operação

Só é preciso uma vez por ambiente:

1. **Banco (gerência):** `mysql ... < api-v2/migrations/site_design.sql`
2. **VPS `sl-aop`, como o usuário `sl`:** conectar o MCP e autorizar
   ```bash
   claude mcp add --scope user --transport http claude-design https://api.anthropic.com/v1/design/mcp
   # depois, numa sessão interativa do claude: /design-login
   ```
3. **`ia-worker`:** `DESIGN_ROOT=/srv/sl/design` no `.env`, `git pull && npm run build`, `systemctl restart sl-ia-worker`.
4. **api-v2:** `IA_WORKER_URL` e `WORKER_SHARED_SECRET` já existem (mesmos do bot). Opcional: `CLAUDE_DESIGN_SYSTEM_ID` para vincular todo design novo a um design system.

:::danger O `ANTHROPIC_API_KEY` mata o MCP
O `ia-worker` roda com `ANTHROPIC_API_KEY` setado (o Agent SDK precisa dela). Quando essa variável existe, o Claude Code **dá precedência à chave e desliga os connectors da conta** — o MCP do Design some e a geração falha. O runner já remove `ANTHROPIC_API_KEY` e `ANTHROPIC_AUTH_TOKEN` do subprocesso; se alguém "consertar" isso, o Design para de funcionar.
:::

## Veja também

- [Bot operacional & Add-ons](./console-bot-operacional.md) — o outro consumidor da `ia-worker`
- [Manual do cliente — Design do site](../../portal/portal-design-do-site.md) — o que o leiloeiro vê
