---
title: Golden Lance — site novo e ERP (homologação)
sidebar_position: 1
---

# Golden Lance — o que foi desenvolvido e como testar

Acompanhamento da implantação da **Golden Lance** no ERP novo (V5) e no **site novo**. Esta página é a base do **manual que será entregue ao cliente para os testes** — vamos atualizando a cada entrega, com prints e passo a passo.

| Item | Situação |
|---|---|
| Site novo (homologação) | `https://homolog.goldenlance.com.br` (usuário e senha da homologação: `homolog` / `homolog`) |
| Site oficial | `goldenlance.com.br` ainda no **ERP legado** até a virada |
| ERP novo | tenant `goldenlance.com.br` — os dados são um **espelho do legado** |
| Painel do arrematante | **Não usa.** Decisão do cliente (27/10/2026): lance, habilitação, conta e auditório ficam **dentro do site** |

:::danger Na virada, o banco do ERP novo é espelhado de novo do legado
Tudo o que for **configurado no ERP novo durante os testes se perde** quando a Golden virar (o banco é recopiado do legado). Por isso existe a seção [Reaplicar após a virada](#reaplicar-após-a-virada) — **toda configuração feita no ERP novo da Golden precisa ser anotada lá**.
:::

## O que foi desenvolvido

### Site

| Funcionalidade | Onde | Como testar |
|---|---|---|
| **Dar lance** na página do lote | `/lote/{id}` | Entre na sua conta, abra um lote de leilão **aberto**, clique em **Dar lance de R$ X** e confirme. Também dá para informar outro valor. |
| **Habilitação no leilão** | página do lote e do leilão | Em leilão que exige habilitação, aparece **Habilitar-se neste leilão** → leia o termo → marque o aceite → **Confirmar habilitação**. |
| **Auditório virtual** (dentro do site) | botão vermelho **Auditório Virtual** no leilão e no lote | Mostra o lote em pregão, cronômetro, lance atual, botão de lance, últimos lances e a lista de lotes com a situação de cada um. Atualiza em tempo real. |
| **Minha conta** | `/conta` | **Meus lances** por lote (Vencendo / Superado / Arrematado), **Propostas**, documentos, habilitações, favoritos, interesses, trocar senha e foto. |
| **Venda conosco com fotos e vídeos** | `/quero-vender` | Preencha o formulário, anexe fotos e vídeos do bem e envie. Ver o tutorial em [Leads do Site](../../crm/crm-leads-site.md#fotos-e-vídeos-enviados-pelo-site). |
| **Busca por voz** | cabeçalho | Toque no microfone da busca e fale o que procura (Chrome, Edge e Safari). |
| **Google Analytics** | todas as páginas | O código do GA cadastrado no ERP (aba Website) passou a funcionar. |

**Lance na página do lote** — cronômetro do pregão, lance com confirmação e acesso ao auditório:

![Lance na página do lote](/img/manual/interno/golden/lote-lance.png)

**Auditório virtual** dentro do site:

![Auditório virtual](/img/manual/interno/golden/auditorio-completo.png)

**Minha conta → Meus lances:**

![Meus lances](/img/manual/interno/golden/conta-meus-lances.png)

### ERP

| Funcionalidade | Onde | Tutorial |
|---|---|---|
| Ligar/desligar fotos e vídeos no Venda conosco e definir limites | Configurações globais → Empresa → **Website** | [Configurações globais](../../erp/configuracoes/configuracoes-globais.md#fotos-e-vídeos-no-venda-conosco) |
| Ver e baixar as fotos/vídeos recebidos | **CRM → Leads do Site** e aba **Arquivos** do Negócio | [Leads do Site](../../crm/crm-leads-site.md#fotos-e-vídeos-enviados-pelo-site) |

## Reaplicar após a virada

Configurações feitas **no ERP novo da Golden** durante a homologação. Depois de espelhar o banco do legado na virada (e rodar o `app:migra:versao`), **reaplicar todas**:

| Configuração | Valor | Onde (ERP) | Por quê |
|---|---|---|---|
| `site.queroVender.anexos.ativo` | `1` (Ativado) | Configurações globais → Website → Venda conosco | Liga fotos e vídeos no Venda conosco |
| `site.queroVender.anexos.maxFotos` | `10` | idem | Limite de fotos por envio |
| `site.queroVender.anexos.maxVideos` | `2` | idem | Limite de vídeos por envio |
| `site.queroVender.anexos.maxMbFoto` | `10` | idem | MB por foto |
| `site.queroVender.anexos.maxMbVideo` | `50` | idem | MB por vídeo |
| `site.queroVender.anexos.porHora` | `5` | idem | Anti-abuso por visitante |
| `site.leads.funil` | `COMITENTES WORKFLOW` | (chave interna — via banco ou suporte) | A Golden não tem o "Funil Comitente" padrão: sem isto os leads do site **não abrem Negócio** e as fotos não aparecem no kanban. Se o nome do funil de comitentes mudar no legado, use o nome novo. |

Conferir também:

- **Token do site:** em *Configurações → Sites*, o token do site da Golden tem de ser o mesmo do secret `SITE_TOKEN` do repositório `site-goldenlance.com.br` (GitHub → Settings → Secrets). Se o espelho trocar o token, atualize o secret e refaça o deploy — sem ele o site perde a configuração própria (nome, cores, analytics).
- **Funil de comitentes** com etapas (*CRM → Negócios → Funis*).

:::warning Regra
Fez qualquer configuração no **banco/ERP novo da Golden** para os testes? **Acrescente nesta tabela.** É o que garante que a virada não desfaça o que o cliente testou e aprovou.
:::

## Pendências combinadas

- Golden Lance Club, indicação e Lojinha (precisam de definição da Golden: faixas da indicação).
- Edital com aceite versionado.
- Área do comitente e pagamento online.
- Login com Google (por último).
