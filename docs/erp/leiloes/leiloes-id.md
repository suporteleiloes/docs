---
title: Página do leilão
sidebar_position: 6
---

# Página do leilão

Esta é a área de trabalho de um leilão específico. Ela serve de "casa" do leilão: no alto traz as métricas principais e um menu com todas as ferramentas; abaixo, abre cada seção (Lotes, Habilitados, Realização, Fechamento, etc.). É aqui que você opera o leilão do começo ao fim.

## Como acessar

- **Leilões** → dê duplo clique em um leilão (ou **Ações → Abrir**);
- no [Calendário](./leiloes-calendario.md), clique no cartão do leilão.

Ao abrir um leilão sem escolher uma seção, o sistema mostra direto a aba **Lotes**.

![Página do leilão](/img/manual/erp/leiloes-id.png)

## O que você vê nesta tela

### Cabeçalho

Mostra o botão **Leilões** (voltar para a lista), o **título** do leilão e o botão **Editar**.

### Faixa de métricas (metric strip)

Logo abaixo, uma faixa com os indicadores do leilão e o botão **Serviços** (à esquerda):

| Métrica | O que mostra |
|---|---|
| Leilão | Número/ano do leilão |
| ID | Identificador interno |
| Lotes | Total de lotes |
| Situação | Status do leilão — clique para mudar (Rascunho, Em breve, Em loteamento, Aberto, Em leilão, Cancelado, Adiado, Suspenso, Encerrado) |
| Preparação | Etapa interna — clique para mudar (Sem definição, Em preparação, Pronto p/ leilão, Em realização, Concluído) |
| Faturamento estimado | Valor estimado / previsto |
| Faturamento alcançado | Valor alcançado / meta |

À direita aparece a miniatura da capa do leilão.

### Menu de abas (navegação do leilão)

Abaixo das métricas, as abas de navegação, divididas em dois grupos:

**Principais:** Resumo, Preparação, Lotes, Habilitados, Realização, Fechamento.

**Gestão:** Supervisão, Automação, Marketing, Histórico, Relatórios, Documentos, Leiloeiro.

### Menu Serviços

O botão **Serviços** abre um menu com todas as ações do leilão, incluindo submenus:

| Ação | O que faz |
|---|---|
| Editar Leilão | Abre o formulário de edição |
| Resumo | Vai para o painel resumo |
| Lotes | Vai para a lista de lotes |
| Sincronizar Leilão com Site(s) | Publica/atualiza o leilão nos sites |
| Organizar lotes | Reordena/organiza os lotes |
| Automação | Submenu: atualizar valores do 2º leilão, enviar aviso de início, alterar status de lotes em massa, gerar todas as notas, formalizar todas as vendas (com ou sem carimbo do tempo), atualizar incrementos |
| Marketplace API | Submenu: sincronizar/remover na Imóvel Web, sincronizar com Santander Imóveis, atualizar URL com a Resale, comunicar vendas (Detran-PB), gerar títulos/descrições por IA, sincronizar com sites do leiloeiro |

> **Itens em desenvolvimento:** algumas ações dos submenus **Automação** e **Marketplace API** (formalizar todas as vendas, integrações Imóvel Web/Santander/Resale/Detran-PB, configurar câmeras e iniciar stream) ainda estão em construção e exibem um aviso "em desenvolvimento" ao serem acionadas. Já funcionam hoje: atualizar valores do 2º leilão, enviar aviso de início (e-mail), alterar status de lotes em massa, gerar todas as notas, atualizar incrementos, gerar títulos/descrições por IA e sincronizar com os sites.
| Controle do Leilão | Abre o controlador do pregão (tela cheia) |
| Painel do Leiloeiro | Abre a tela cheia do leiloeiro |
| Monitor Comitente | Acompanhamento em tempo real para comitentes |
| Transmissão | Submenu: abrir transmissão, configurar câmeras, iniciar stream |
| Habilitações | Vai para a aprovação de arrematantes |
| Lances Automáticos | Robôs de lance programados |
| Fechamento | Submenu: Formalização, Cobrança, Notas de Arrematação |
| Relatórios | Submenu com os principais relatórios do leilão |

## O que dá pra fazer aqui

### Navegar entre as seções

- Clique nas abas (Resumo, Lotes, Habilitados, etc.) para abrir cada parte do leilão.

### Mudar a situação do leilão

1. Na faixa de métricas, clique na **Situação**.
2. Escolha o novo status na lista.

### Mudar a etapa de preparação

1. Clique em **Preparação** na faixa de métricas.
2. Escolha a etapa (Em preparação, Pronto p/ leilão, etc.).

### Usar as ferramentas pelo menu Serviços

1. Clique em **Serviços**.
2. Escolha a ação desejada; para itens com seta, passe o mouse/clique para abrir o submenu.

### Editar o leilão

- Clique em **Editar** no cabeçalho, ou **Serviços → Editar Leilão**.

## Dicas e observações

- As ações de "tela cheia" (Controlador, Painel do Leiloeiro, Telão) abrem em modo cheio próprio para a operação do pregão.
- Mudar a **Situação** afeta a visibilidade pública do leilão; mude com atenção.
- Ações em massa (gerar todas as notas, formalizar todas as vendas, alterar status de lotes em massa) estão no submenu **Automação** do menu Serviços.
- **Sincronizar Leilão com Site(s)** republica o leilão e todos os lotes nos sites vinculados ao leiloeiro; o sistema pede confirmação antes e avisa ao concluir.
- **Gerar Todas as Notas do Leilão** pede um **e-mail** e envia, em alguns minutos, um link para baixar o ZIP com as notas — o processamento é em segundo plano.
- **Enviar aviso de início de leilão** dispara, no momento, apenas **e-mail** para os habilitados (WhatsApp/SMS/Push serão liberados em breve).

## Veja também

- [Resumo do leilão](./resumo.md)
- [Lotes do leilão](./lotes.md)
- [Habilitados](./habilitados.md)
- [Realização](./realizacao.md)
- [Gestão de Leilões (lista)](./leiloes.md)
