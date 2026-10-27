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
| **Golden Lance Club** (fidelidade) | `/club` + link **Club** no topo e no menu | Veja o [passo a passo](#golden-lance-club). O link só aparece com o programa **ativo** no ERP. |
| **Convite de indicação** | `/indicar/{código}` | Veja o [passo a passo](#convite-de-indicação). |
| **Negociações (condicionais)** do arrematante | `/conta/condicionais` + atalho na `/conta` | Veja o [passo a passo](#negociações-condicionais-do-arrematante). |
| **Área do comitente** | `/comitente` + link **Comitente** no topo, no menu e na `/conta` | Veja o [passo a passo](#área-do-comitente). Só para usuários com perfil de comitente. |

**Lance na página do lote** — cronômetro do pregão, lance com confirmação e acesso ao auditório:

![Lance na página do lote](/img/manual/interno/golden/lote-lance.png)

**Auditório virtual** dentro do site:

![Auditório virtual](/img/manual/interno/golden/auditorio-completo.png)

**Minha conta → Meus lances:**

![Meus lances](/img/manual/interno/golden/conta-meus-lances.png)

### Golden Lance Club

Programa de fidelidade da Golden **dentro do site**: o arrematante compra, **acumula pontos**, sobe de **nível**, **troca na lojinha** e **indica amigos**. O nome "Golden Lance Club" é o nome do programa só neste site. As regras (pontos por R$ 100, validade, níveis, recompensas, faixas da indicação) vêm do ERP — o site **não calcula nada**.

:::info Quando o programa está desligado no ERP
Com o programa **inativo**, o site esconde tudo: o link **Club** some do topo e do menu, o atalho some da `/conta` e `/club` responde "página não encontrada" (a mudança aparece em até 1 minuto).
:::

**Como testar — visitante (sem login)**

1. Abra `/club` (ou clique em **Club** no topo).
2. Confira **Como funciona** (Compre → Acumule → Troque → Indique), os **níveis** com os benefícios e a **lojinha**.
3. Clique em **Ler o regulamento** — abre em uma janela; o texto é o cadastrado no ERP.
4. Os botões **Criar minha conta** e **Já tenho conta — entrar** levam ao cadastro e ao login.

![Club — página pública](/img/manual/interno/golden/club-publico.png)

![Regulamento em janela](/img/manual/interno/golden/club-regulamento.png)

**Como testar — entrar no programa**

1. Entre com um arrematante de **cadastro aprovado** que ainda não participa e abra `/club`.
2. Em **Entre para o Golden Lance Club**, leia o regulamento, marque **Li e concordo** e clique em **Quero participar**.
3. A página passa a mostrar o painel do participante. Se o cadastro ainda não foi aprovado, aparece a orientação para completar o cadastro.

**Como testar — painel do participante**

1. **Saldo**, **nível** e a barra "Faltam X pontos para o nível …".
2. **Pontos a vencer**: quando houver, aparece "X pontos vencem em DD/MM" com o botão **Renovar pontos** (pede confirmação e mostra o custo da renovação).
3. Abas **Extrato** (paginado), **Indicar amigos**, **Lojinha**, **Meus resgates** e **Benefícios**.

![Painel do participante](/img/manual/interno/golden/club-painel.png)

**Indicar amigos:** o participante copia o **link de convite** (`/indicar/{código}`) ou envia pelo **WhatsApp**. Em **Minhas indicações** aparecem só o nome abreviado do amigo (ex.: "João S."), a situação e o benefício.

![Indicar amigos](/img/manual/interno/golden/club-indicar.png)

**Lojinha:** em **Resgatar**, o site pede confirmação ("Trocar 500 pontos por …? Seu saldo passa de X para Y") e, ao confirmar, mostra o **voucher** (código). O voucher também fica em **Meus resgates**; a equipe da Golden aprova e entrega pelo ERP. Recompensas esgotadas, de nível acima ou sem saldo suficiente aparecem com o botão desabilitado ("Esgotada", "Nível Ouro", "Faltam X pontos").

![Lojinha](/img/manual/interno/golden/club-lojinha.png)

![Meus resgates com o voucher](/img/manual/interno/golden/club-resgates.png)

No celular:

![Painel no celular](/img/manual/interno/golden/club-painel-celular.png)

### Convite de indicação

1. Com o participante logado, copie o link em **Club → Indicar amigos**.
2. Em **outro navegador** (ou aba anônima), abra o link: aparece **"Você foi convidado por Fulano S.!"**. O site guarda o convite por **30 dias** nesse aparelho.
3. Clique em **Criar minha conta** e faça o cadastro (ou **Entrar**, se já tiver conta).
4. Logo depois de entrar, aparece o aviso **"Pronto! Sua conta foi vinculada ao convite de Fulano S."**.
5. No participante que convidou, **Club → Indicar amigos → Minhas indicações** mostra o novo amigo como **Cadastrado**.

Se o convite não puder ser usado, o aviso explica o motivo: o próprio convite, conta já vinculada a outro convite, conta que **já comprou** ("o convite vale só para quem ainda não fez nenhuma compra") ou prazo encerrado. Um link inválido mostra **Convite inválido**.

![Convite no celular](/img/manual/interno/golden/convite-celular.png)

### Negociações (condicionais) do arrematante

Quando o lance vencedor fica **abaixo do valor mínimo**, o lote vai para **condicional** e o vendedor decide. O arrematante acompanha e responde em **Minha conta → Negociações** (`/conta/condicionais`). O site **nunca mostra o valor mínimo** ao arrematante.

1. Na `/conta`, clique no atalho **Negociações** (ele aparece quando existe alguma negociação).
2. Cada negociação mostra a situação, **seu lance**, a **contraproposta do vendedor**, o **prazo para responder** e o **histórico**.
3. Quando é a vez do arrematante, aparecem os botões:
   - **Aceitar R$ X** — fecha o acordo naquele valor; fica **"Acordo fechado — aguardando leiloeiro"** até a equipe formalizar a venda no ERP;
   - **Recusar** — o lance continua valendo e o vendedor decide;
   - **Fazer oferta** — um valor **entre** o lance e a contraproposta.
4. Toda ação pede confirmação antes de ser enviada.

![Negociações do arrematante](/img/manual/interno/golden/condicionais-arrematante.png)

### Área do comitente

Painel do **vendedor (comitente)** dentro do site, em `/comitente`. Precisa de um usuário com perfil **comitente** vinculado ao comitente no ERP. Quem não tem esse perfil não vê o link e, se digitar o endereço, recebe a mensagem "Esta área é exclusiva para comitentes".

1. Entre com o usuário do comitente e clique em **Comitente** no topo (ou no menu / na `/conta`).
2. **Painel** — bens cadastrados, lotes em andamento, condicionais aguardando, lotes vendidos e total vendido.

![Painel do comitente](/img/manual/interno/golden/comitente-painel.png)

3. **Condicionais** — para cada lote condicional: **Aprovar** (vende pelo valor do lance), **Recusar** (o lote encerra como baixa oferta — não pode ser desfeito) ou **Contrapropor** (valor maior). Se o comitente aprovar uma **oferta** do arrematante, ou o arrematante aceitar a contraproposta, o acordo em valor diferente do lance fica **aguardando o leiloeiro**: quem finaliza a venda é a equipe da Golden no ERP. O comitente vê o próprio valor mínimo; o arrematante aparece mascarado (ex.: `BO***L`).

![Condicionais do comitente](/img/manual/interno/golden/comitente-condicionais.png)

4. **Leilões** — leilões com lotes do comitente e o resumo (lotes, vendidos, condicionais, não vendidos, total). **Ver lotes** abre a lista com mínimo, maior lance e resultado. **Prestação de contas** mostra o resumo do leilão (valor vendido, comissão e taxas pagas pelo arrematante, líquido estimado) e os lotes vendidos com a situação do pagamento.

![Leilões e lotes do comitente](/img/manual/interno/golden/comitente-leiloes.png)

![Prestação de contas](/img/manual/interno/golden/comitente-prestacao.png)

5. **Bens** (com busca por título, placa ou chassi), **Entregas** e **Documentos** (editais dos leilões e arquivos dos bens; **Baixar** gera um link temporário de 30 minutos).

![Bens do comitente](/img/manual/interno/golden/comitente-bens.png)

![Documentos do comitente](/img/manual/interno/golden/comitente-documentos.png)

:::tip Usuários de teste (homologação)
Para testar a área do comitente, a equipe cria no ERP um usuário com o perfil **Comitente** vinculado ao comitente (Cadastros → Comitentes → usuário de acesso). Para gerar uma negociação de teste, feche um lote com lance abaixo do valor mínimo (o lote fica **Condicional**).
:::

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

**Módulos e programa de fidelidade** (já feito na Golden em 27/10/2026 — refazer após a virada):

| O quê | Como | Por quê |
|---|---|---|
| Instalar o módulo de negociação | `php -d memory_limit=1G bin/console app:negociacao:install --client=goldenlance.com.br --force` | Tabelas das negociações condicionais (site: condicionais do arrematante e do comitente) |
| Instalar o módulo de fidelidade | `php -d memory_limit=1G bin/console app:fidelidade:install --client=goldenlance.com.br --force` | Tabelas do Club + semente de 4 níveis, 6 recompensas e 4 faixas de indicação |
| Ativar o programa e dar o nome | `fidelidade_config.ativo = 1` e `nome_programa = 'Golden Lance Club'` (ou pelo ERP: Fidelidade → Configuração) | Sem isto o site **esconde** o Club inteiro |
| Regras, regulamento, níveis, lojinha e faixas | ERP → Fidelidade, **conforme o cliente configurar na homologação** (anotar aqui os valores finais) | O espelho do legado apaga o que foi configurado |
| Usuários de comitente | Criar o usuário com perfil **Comitente** vinculado a cada comitente que vai usar a área | Sem isto `/comitente` mostra "Seu usuário não está vinculado a um comitente" |

:::warning Crons ainda não agendados
`app:negociacao:cron` (a cada 15 min) e `app:fidelidade:cron` (diário) **não estão agendados**: virão de uma rotina global de cron por tenant que ainda vai ser projetada (decisão do Tiago). Até lá **não há vencimento automático** do prazo das negociações nem dos pontos, e os avisos por e-mail que dependem do cron não saem.
:::

Conferir também:

- **Token do site:** em *Configurações → Sites*, o token do site da Golden tem de ser o mesmo do secret `SITE_TOKEN` do repositório `site-goldenlance.com.br` (GitHub → Settings → Secrets). Se o espelho trocar o token, atualize o secret e refaça o deploy — sem ele o site perde a configuração própria (nome, cores, analytics).
- **Funil de comitentes** com etapas (*CRM → Negócios → Funis*).

:::warning Regra
Fez qualquer configuração no **banco/ERP novo da Golden** para os testes? **Acrescente nesta tabela.** É o que garante que a virada não desfaça o que o cliente testou e aprovou.
:::

## Pendências combinadas

- Golden Lance Club: a Golden definir regras, regulamento, níveis, lojinha e faixas da indicação (hoje estão os valores de semente).
- Crons de negociação e fidelidade (rotina global de cron por tenant — a projetar).
- Edital com aceite versionado.
- Pagamento online (inclusive uso do benefício em R$ da indicação).
- Login com Google (por último).
