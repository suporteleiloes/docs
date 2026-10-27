---
title: Leads do Site
sidebar_position: 23
---

# Leads do Site

Esta tela reúne os **leads capturados nos formulários do site** — no site do leiloeiro, os formulários **Quero vender / Venda conosco** e **Indique**; no site institucional da Suporte Leilões, pedidos de demonstração, contatos, interesse em planos etc. Cada novo lead também abre automaticamente um **Negócio** no funil configurado (no site do leiloeiro, o **Funil Comitente**; no site da Suporte Leilões, o **Comercial SL**), para você trabalhá-lo no kanban. Se o funil não existir, o lead é registrado mesmo assim, só sem o Negócio vinculado.

> Observação: a tela aparece para quem tem acesso ao CRM com a permissão de leads do site.

## Como acessar

**CRM** → **Leads do Site**.

![Leads do Site](/img/manual/crm/crm-leads-site.png)

## O que você vê nesta tela

No topo, um link **Abrir kanban Comercial SL →** e os filtros: busca por nome/e-mail/telefone, **Status**, **Tipo**, **Origem** e o período **De / Até** (data de recebimento). As opções de **Tipo** e **Origem** são montadas a partir dos leads que realmente existem na base — quando o site cria um formulário novo, ele aparece aqui sozinho, sem precisar de configuração. Abaixo, a tabela de leads.

| Coluna | O que é |
|---|---|
| **Recebido** | Data e hora em que o lead chegou. |
| **Nome** | Nome de quem preencheu (link que abre o detalhe). Mostra também uma prévia da mensagem. |
| **Contato** | E-mail e telefone informados. |
| **Tipo** | Que formulário gerou: Demo, Pediu retorno, Contato, Planos, Enterprise, Consultoria ou Ouvidoria. |
| **Origem** | De onde veio o lead (página/campanha). |
| **Status** | Estágio: Novo, Em contato, Qualificado, Ganho, Perdido ou Descartado. |

## O que dá pra fazer aqui

- **Filtrar** por status, por tipo e por texto (nome, e-mail, telefone).
- **Abrir o detalhe** de um lead.
- **Atualizar status e notas** internas do lead.
- **Descartar** um lead.
- Ir para o **kanban Comercial SL**.

### Ver e trabalhar um lead

1. Clique no **nome** do lead (ou na seta da coluna de ações) para abrir o detalhe.
2. No painel, você vê os dados recebidos: tipo, data, e-mail, telefone, origem, mensagem, dados de campanha (UTM), referer, os dados completos do formulário e — quando existe — o **Negócio aberto** vinculado (com link para abri-lo).
3. Em **Status**, escolha o estágio atual do lead.
4. Em **Notas internas**, registre anotações (visíveis só para a equipe).
5. Clique em **Salvar**.

![Detalhe do lead](/img/manual/crm/crm-leads-site-detalhe.png)

### Fotos e vídeos enviados pelo site

Quando o leiloeiro ativa o envio de arquivos (veja [Configurações globais → Website](../erp/configuracoes/configuracoes-globais.md#fotos-e-vídeos-no-venda-conosco)), quem preenche o **Quero vender / Venda conosco** pode anexar **fotos e vídeos do bem**:

![Campo de fotos e vídeos no formulário do site](/img/manual/crm/site-quero-vender-anexos.png)

No detalhe do lead, os arquivos aparecem em **Fotos e vídeos enviados**, com o tamanho de cada um. Clique em **Baixar** para abrir o arquivo (o link vale por 30 minutos).

![Fotos e vídeos no detalhe do lead](/img/manual/crm/crm-leads-site-anexos.png)

Os mesmos arquivos ficam na aba **Arquivos** do Negócio aberto para o lead — assim quem trabalha o kanban vê as fotos sem sair do negócio:

![Arquivos do lead na aba Arquivos do Negócio](/img/manual/crm/crm-negocio-arquivos-site.png)

:::info Segurança
Os arquivos ficam em armazenamento **privado** — só usuários do ERP com permissão conseguem baixá-los. O sistema confere o **conteúdo** de cada arquivo (não só a extensão) e recusa o que não for foto ou vídeo.
:::

### Descartar um lead

1. Abra o detalhe do lead.
2. Clique em **Descartar** e confirme. O lead some da lista.

## Dicas e observações

- Leads chegam em segundos após o preenchimento do formulário no site.
- O **Negócio** correspondente fica no funil **Comercial SL** — use o link no topo para abrir o kanban e mover o card pelas etapas.
- As **notas internas** nunca são enviadas ao lead; servem apenas para a equipe.
- O status carrega marcos de tempo automáticos: ao mover para **Em contato**, o sistema registra a data do primeiro contato; ao marcar **Ganho**, **Perdido** ou **Descartado**, registra a data de fechamento. Por isso, manter o status em dia mantém os relatórios de conversão corretos.
- A tela exige a permissão de **leads do site** no CRM.

## Veja também

- [Pedidos do Site](crm-orders.md)
- [Kanban de Negócios](crm-negocios-kanban.md)
- [Lead Scoring](crm-leads.md)
- [Configurações globais](../erp/configuracoes/configuracoes-globais.md)
