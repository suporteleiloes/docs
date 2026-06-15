---
title: Novo leilão
sidebar_position: 4
---

# Novo leilão

Esta é a tela de cadastro de um leilão (ou venda direta). O formulário é organizado em abas, cada uma cuidando de uma parte do leilão: dados principais, divulgação no site, comissões e comitentes, segurança, automação e opções avançadas. Você preenche o que precisa e salva para criar o leilão.

## Como acessar

**Leilões** → botão **Novo leilão** (na lista ou no calendário).

![Novo leilão](/img/manual/erp/leiloes-novo.png)

## O que você vê nesta tela

No topo há o título "Novo leilão", o botão **Voltar** e, abaixo, as abas do formulário. No rodapé fixo ficam os botões **Cancelar** e **Criar leilão**. Se houver alterações não salvas, aparece o aviso "Alterações pendentes".

As abas são:

| Aba | Para que serve |
|---|---|
| Principal | Dados básicos, datas das praças, robô/cronômetro, habilitação, parcelamento, propostas, venda direta e evento privado |
| Marketplace | Título, descrição pública, textos informativos e publicação nos sites |
| Definições | Sistema de taxação, comissões/impostos, comitentes e endereço do local (pátio) |
| Segurança | Tipo de habilitação, evento privado, contas bancárias e chat |
| Automação | Flags de automação do pregão e mensagens automáticas |
| Mais | Avisos, regras, opções avançadas de lances/propostas e multileiloeiro |

(No modo de edição surge ainda a aba **Info**, com dados do sistema.)

### Aba Principal — campos

| Campo | O que é |
|---|---|
| Descrição interna | Nome do leilão para uso interno (obrigatório) |
| Código | Gerado pelo sistema (somente leitura) |
| Tipo | Online, Presencial ou Online e presencial |
| Judicial | Indica se o leilão é judicial |
| Leilões (instância) | Quantas praças/leilões o evento tem (1, 2, 3...) |
| Leilão atual (praça) | Em qual praça o evento está, quando tem mais de uma |
| Data leilão / Hora | Data e hora de cada praça |
| Abertura para lances | Data e hora em que o leilão abre para receber lances |
| Classificação | Categoria do leilão |
| Fuso horário | Fuso usado nas datas |
| Desconto 2º (%) | Desconto aplicado na 2ª praça |
| Leiloeiro | Leiloeiro responsável |
| Habilitar robô / Cronômetro | Ligam o robô do pregão e o cronômetro automático |
| Modo Tempo / Cronômetro (s) | Como o cronômetro encerra os lotes e o tempo em segundos |
| Encerrar primeiro lote / Forma de Fechar / Fechar Simultâneo | Regras de encerramento dos lotes |
| Intervalo do Primeiro Lote | Tempo até o início do primeiro lote |
| Lances automáticos / antecipados | Permitem lances automáticos e antecipados |
| Tipo do Auditório / Permitir escolha do auditório | Definições do auditório online |
| Habilitação | Tipo de habilitação exigido dos arrematantes |
| Parcelamento / Máximo de parcelas / Entrada mínima (%) | Regras de parcelamento |
| Permitir Sublote / Hab. por Lote e Direito de Preferência | Opções de loteamento e preferência |
| Permitir Propostas / Venda Direta / Data Limite para Propostas | Configuram venda direta e propostas |
| Evento Privado / Liberar Evento para Comitentes | Restrições de acesso ao evento |

À direita da aba Principal há a área de **Foto Principal**, onde você envia a imagem de capa do leilão.

### Aba Marketplace — campos

Título, Site(s) onde publicar, Destaque, Descrição pública, Informação de visitação, Informação de retirada, Observações, Informação de pagamento, link de "Leilão divulgação" (URL externa), agendamento de publicação ("Quando" / "A partir de"), Publicação controlada por site, Texto informativo, Chamado Destaque e a cor do chamado destaque.

### Aba Definições — campos

Sistema de taxação, Comissão (%), ICMS (%), ISS (%), seleção de **Comitentes** (lista dupla: disponíveis × selecionados) e o endereço do local: Pátio, CEP, UF, Cidade, Endereço, Número, Bairro e Referência.

### Aba Segurança — campos

Tipo de Habilitação, Total de habilitados, Evento Privado, **Contas bancárias** do leilão e Chat Habilitado.

### Aba Automação — campos

Auto homologar, Dou-lhe renova cronômetro, Repasse com robô, Vendas condicionais, Priorizar Performance, Cobrar lotes individualmente, Prejudicar lotes relacionados e os modelos de mensagem automática (Início do leilão, Lance superado, Arrematação, Lance ganhador, Encerramento do lote, Aviso de lote cancelado/retirado, etc.).

### Aba Mais — campos

Aviso inicial, Permitir propostas, Vídeo/Transmissão, Auditório sempre aberto, Auditório público, Nomenclatura, opções de terceira data, e a integração com outros leiloeiros (Integrar com outros leiloeiros / MultiLeiloeiro Config).

## O que dá pra fazer aqui

### Cadastrar um leilão

1. Na aba **Principal**, preencha a **Descrição interna** (obrigatória) e escolha o **Tipo**.
2. Defina a quantidade de **Leilões (instância)** e, para cada praça, a **Data**, a **Hora** e a **Abertura para lances**.
3. Escolha a **Classificação** e o **Leiloeiro**.
4. Ajuste robô, cronômetro, habilitação e parcelamento conforme o leilão.
5. Na aba **Marketplace**, preencha o **Título** e a **Descrição** públicos e escolha os **Site(s)** onde o leilão será publicado.
6. Na aba **Definições**, defina o **Sistema de taxação**, as **comissões/impostos** e adicione os **Comitentes**.
7. Revise **Segurança**, **Automação** e **Mais** conforme a necessidade.
8. Clique em **Criar leilão** no rodapé.

### Enviar a foto de capa

1. Na aba **Principal**, na área **Foto Principal**, clique no botão de enviar imagem.
2. Escolha o arquivo. Para trocar, envie outra; para tirar, use o botão de remover.

### Adicionar comitentes

1. Vá em **Definições**.
2. Na lista dupla de comitentes, selecione os comitentes disponíveis e use o botão de **adicionar** (seta) para movê-los para a lista de selecionados.
3. Para tirar um, selecione-o na lista da direita e use o botão de **remover**.

### Sair sem salvar

- Clique em **Voltar** ou **Cancelar**. Se houver alterações pendentes, o sistema pede confirmação antes de descartar.

## Dicas e observações

- A **Descrição interna** é o único campo essencial para criar; o restante você pode completar depois editando o leilão.
- Os campos têm dicas de ajuda (ícone "?") ao lado do nome em vários pontos — passe o mouse para entender a regra.
- O **Código** é gerado automaticamente; você não o digita.
- A aba onde você está fica registrada no endereço (ex.: `#mais`), então é possível voltar direto para ela.

## Veja também

- [Editar leilão](./leiloes-id-editar.md)
- [Gestão de Leilões (lista)](./leiloes.md)
- [Página do leilão](./leiloes-id.md)
