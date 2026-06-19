---
title: Nova campanha
sidebar_position: 3
---

# Nova campanha

Esta é a forma de criar uma campanha de marketing. O endereço `/marketing/campanhas/nova` apenas leva você para a tela de [Campanhas](marketing-campanhas.md) já com o **assistente de nova campanha** aberto — por isso, ao clicar no atalho "Nova campanha" do Painel, você cai aqui e o assistente abre sozinho.

## Como acessar

- **Marketing** → **Painel** → botão **Nova campanha**, ou
- **Marketing** → **Campanhas** → botão **Nova campanha**.

![Nova campanha](/img/manual/marketing/marketing-campanhas-nova.png)

## O assistente em 4 etapas

O assistente guia você por quatro etapas. Use **Avançar** e **Voltar** para navegar; só é possível avançar quando os campos obrigatórios da etapa estiverem preenchidos.

### Etapa 1 — Config

1. Preencha o **Nome da campanha** (obrigatório; uso interno).
2. Escolha o **Canal**: E-mail, WhatsApp ou E-mail + WhatsApp (multicanal).
3. Para e-mail, preencha o **Assunto do e-mail** (obrigatório).
4. Opcional: escreva uma **Descrição interna** para identificar a campanha.
5. Em **Agendamento**, escolha **Enviar imediatamente** ou **Agendar envio** (e informe data/hora).

> No canal **multicanal**, ao salvar serão criadas **duas campanhas** (uma de e-mail e uma de WhatsApp), com o mesmo conteúdo e a mesma lista. Você libera cada uma separadamente.

### Etapa 2 — Design (conteúdo)

1. Em **Link de destino**, informe o endereço para onde o botão do e-mail (ou o link do WhatsApp) leva — normalmente a página do leilão ou do lote. Onde você escrever `{{link}}` no texto, ele vira esse endereço no envio.
2. Para e-mail, escolha como montar o conteúdo:
   - **Construtor** — monta o e-mail por blocos.
   - **Texto / HTML** — editor de texto com formatação (pode selecionar um **template salvo** e digitar `{{` para inserir variáveis).
3. Botões úteis na barra do e-mail:
   - **Galeria de modelos** — escolhe um modelo pronto e carrega os blocos.
   - **Pré-visualizar** — abre uma prévia do e-mail.
   - **Salvar como modelo** — guarda o conteúdo atual na Biblioteca de Mensagens para reutilizar.
   - **Gerar com IA** — descreve a campanha e a IA cria o conteúdo (veja abaixo).
4. Para WhatsApp, escreva a **Mensagem** (texto puro; use `*negrito*`, `_itálico_` e emojis — sem HTML). Há também o botão **Gerar com IA**.

#### Gerar conteúdo com IA

1. Clique em **Gerar com IA** (no bloco de e-mail ou de WhatsApp).
2. Em **Sobre o que é a campanha?**, descreva o objetivo (ex.: leilão de imóveis dia 15/06, lances a partir de R$ 50k).
3. Escolha o **Tom**: Profissional, Formal ou Descontraído.
4. Clique em **Gerar**. O conteúdo gerado é colocado no editor; você pode editá-lo livremente.

### Etapa 3 — Destinatários e remetente

1. Selecione o **Remetente** (obrigatório). Se não houver nenhum, cadastre em [Remetentes](marketing-remetentes.md).
2. Escolha a **Origem dos destinatários**:
   - **Selecionar lista existente** — escolha uma lista já cadastrada.
   - **Importar arquivo CSV** — envie um CSV (colunas nome e email ou telefone) e dê um **nome** para a lista, que fica salva para reúso.
   - **Por leilão** — busque o leilão e marque os grupos de participantes. As opções são organizadas em cinco grupos:
     - **Habilitação**: habilitados (aprovados), habilitação em análise, habilitou-se mas não foi aprovado, habilitou-se mas não deu lance.
     - **Lances**: efetuaram lances, efetuaram lances mas não venceram, efetuaram lances e venceram.
     - **Arremate**: arremataram (qualquer status), arremataram e pagaram, arremataram e não pagaram (inadimplentes).
     - **Interesse**: favoritaram lote ou o leilão, enviaram proposta (venda direta), visitaram a página do leilão.
     - **Geral**: todos os participantes (união de todos os grupos acima).
   - **Por segmento** — adicione um ou mais critérios (favoritos, lances, arrematantes, presets de CRM, etc.). Alguns critérios pedem um tipo de bem ou um bem específico.
   - **Todos cadastrados** — marque os tipos de público (Pessoas, Empresas, Arrematantes, Comitentes, Colaboradores).

### Etapa 4 — Confirmação

1. Revise o resumo: nome, canal, assunto, remetente, destinatários, conteúdo e agendamento.
2. Clique em **Criar campanha** (ou **Salvar alterações**, ao editar).

## O que acontece depois de salvar

- A campanha fica com status **Pronto para envio**. Para enviar, use o botão **Disparar campanha** na lista de [Campanhas](marketing-campanhas.md).
- Ao **editar e salvar** uma campanha já existente, o status volta para **Pronto para envio** (exceto se ela já estiver **Em andamento** ou **Concluída**, casos em que o status é preservado). Mudanças no conteúdo são reaplicadas às mensagens ainda pendentes.
- Ao abrir uma campanha pela primeira vez (ou ao pedir para atualizar inscritos), o sistema entra em **Preparando** enquanto monta a lista de destinatários a partir dos critérios escolhidos; quando termina, fica novamente disponível para disparo.
- Se você usou **Importar arquivo CSV**, os contatos do arquivo são adicionados automaticamente e a lista importada fica salva para reúso.
- No multicanal, as duas campanhas (e-mail e WhatsApp) aparecem na lista e são liberadas/disparadas separadamente.

## Regras de negócio

- **Remetente é obrigatório.** Sem remetente cadastrado e compatível com o canal, não dá para concluir o assistente. Cadastre em [Remetentes](marketing-remetentes.md).
- **Canal define os campos.** E-mail exige assunto e conteúdo HTML/construtor; WhatsApp usa texto puro (sem HTML). Ao escolher E-mail + WhatsApp, o conteúdo e a lista são os mesmos, mas viram duas campanhas independentes.
- **Geração com IA depende do plano.** A geração de conteúdo por IA é exclusiva dos planos **Premium IA** e **Enterprise**, e há cota diária no teste grátis. Em planos sem o módulo de IA, o sistema pede upgrade.
- **Variáveis de personalização.** Use `{{ pessoa.name }}`, `{{ link }}`, `{{ dominio }}`, `{{ unsub }}` etc. — elas são substituídas pelos dados reais no envio. Veja a lista completa no [Gerador de conteúdo](marketing-gerador.md).

## Erros comuns

- **Botão Avançar desabilitado**: falta preencher um campo obrigatório da etapa (nome, assunto para e-mail, conteúdo, remetente ou ao menos um grupo/lista de destinatários).
- **CSV sem nome de lista**: ao escolher **Importar arquivo CSV**, é obrigatório nomear a lista, senão ela não é salva.
- **Nenhum destinatário selecionado**: em **Todos cadastrados** marque ao menos um tipo de público; em **Por segmento**, todo critério precisa estar preenchido.

## Dicas e observações

- A geração com IA exige que a integração de IA esteja configurada; se não estiver, o sistema avisa antes de gerar.
- O conteúdo gerado pela IA ou colado de fora abre no editor de **Texto / HTML**; ao trocar para o **Construtor**, ele é importado como um bloco único editável.
- Você pode salvar o conteúdo do e-mail como modelo a qualquer momento, para reaproveitar em outras campanhas.

## Veja também

- [Campanhas](marketing-campanhas.md)
- [Remetentes](marketing-remetentes.md)
- [Listas de contatos](marketing-listas.md)
- [Gerador de conteúdo](marketing-gerador.md)
