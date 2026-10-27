---
title: Processo (detalhe)
sidebar_position: 13
---

# Processo (detalhe)

Esta é a tela completa de um processo. Reúne, em um só lugar, tudo o que está ligado a ele: cliente, dados do tribunal, contatos, observações, registro de contatos, ligações, e-mails, tarefas, linha do tempo, partes envolvidas, publicações, financeiro, etapas de produtividade, bens, recursos e checklist.

## Como acessar

Em **ERP** → **Processos**, dê **duplo clique** em qualquer processo da lista (ou use o menu **⋮** da linha → **Abrir processo** / **Abrir em nova aba**). Você também chega aqui pelos atalhos de número de processo nas telas de **Réus**, **Autores**, **Escrivães**, **Juízes**, **Andamentos**, **Intimações** e pelo vínculo **Processo → Abrir** dentro de uma tarefa.

![Processo (detalhe)](/img/manual/erp/processos/processo-detalhe.jpg)

## O que você vê nesta tela

### Cabeçalho

No alto ficam o **número do processo** (formato CNJ), a **comarca** e a **vara**, o selo do **sistema** (PJe, eProc, eSAJ, Projudi) e o seletor de **situação** com o botão **Salvar**.

Logo abaixo do número aparece o **cliente** do processo:

| Elemento | O que faz |
|---|---|
| Nome do cliente | Link que abre a ficha da pessoa. |
| Trocar | Abre a busca de pessoas para escolher outro cliente. |
| Remover | Desvincula o cliente do processo (pede confirmação). |
| Definir cliente | Aparece no lugar do nome quando o processo ainda não tem cliente. |

### Botões no topo da página

| Botão | O que faz |
|---|---|
| ← Voltar | Volta para a tela anterior. |
| Editar cadastro | Abre o formulário com todos os campos do processo para edição. |
| Consultar Robô | Dispara uma consulta ao robô para buscar atualizações do processo. Ao final informa quantas **publicações novas do DJEN** foram captadas e, havendo novidades relevantes, regenera a análise por IA. |
| Gerar Briefing | Gera um PDF de briefing do processo e abre em nova aba. |

### As abas

| Aba | O que mostra |
|---|---|
| Visão Geral | Informações e detalhes do processo, partes, contatos, responsável, análise por IA e o painel de trabalho (observações, tarefas, contatos, ligar, e-mail, arquivos) com a linha do tempo. |
| Envolvidos | Leiloeiro, perito, administrador e demais envolvidos, com indicação e nomeação. |
| Movimentações do Processo | Andamentos do tribunal (DataJud/CNJ) e lançamentos manuais. |
| Publicações DJEN | Publicações captadas, com filtros por período e por responsável pelo push. |
| Tarefas / Planejamento | Lista completa das tarefas do processo. |
| Financeiro | Recebimentos e pagamentos vinculados ao processo. |
| Acompanhamento (Etapas) | Etapas de produtividade do processo. |
| Bens | Bens vinculados ao processo. |
| Recursos / Carta Precatória | Recursos e cartas precatórias do processo. |
| Checklist | Checklist geral do processo ou checklist judicial de um bem. |
| CRM (Negócios) | Negócios do CRM ligados ao processo. |
| Histórico de Status | Linha do tempo das mudanças de situação. |

## Visão Geral

### Card "Detalhes"

Reúne os dados do cadastro em formato de lista: **Tribunal**, **Comarca**, **Vara**, **Juízo**, **Nº antigo**, **Situação**, **Classificação**, **Valor da causa**, **Data de cadastro**, **Criado por**, **Última alteração** e **Última movimentação**. O link **Editar cadastro** abre o formulário completo.

![Card Detalhes do processo](/img/manual/erp/processos/processo-card-detalhes.jpg)

No mesmo card ficam dois interruptores:

| Interruptor | O que faz |
|---|---|
| Acompanhamento por robô | Liga ou desliga a varredura (push) de movimentações deste processo pelo robô. |
| Produtividade habilitada | Liga ou desliga o acompanhamento das etapas de produtividade (indicação, nomeação, homologação…). Pede confirmação. Quando ligado, aparece o link **Abrir produtividade →**. |

### Card "Contatos do processo"

Lista as pessoas de contato do processo com **Pessoa**, **Tipo do contato** (ex.: Advogado, E-mail, Secretaria) e **Contato**. Telefones e e-mails viram links (clicar liga ou abre o e-mail).

![Contatos do processo](/img/manual/erp/processos/processo-card-contatos.jpg)

Para incluir ou alterar:

1. Clique em **Editar** no card.
2. Em cada linha, escolha a **pessoa** (busque no cadastro ou digite um nome novo), o **tipo** e o **contato** (telefone ou e-mail).
3. Use **+ Adicionar** para novas linhas e a lixeira para remover.
4. Clique em **Salvar contatos**.

### Painel de trabalho (à direita)

O painel tem seis abas:

| Aba | Para que serve |
|---|---|
| Observações | Anotações internas sobre o processo, com editor de texto (negrito, listas, links). |
| Tarefas | Tarefas **ativas** e **concluídas** do processo, com o botão **+ Nova tarefa**. |
| Contatos | Registro de contatos feitos com o cliente ou as partes (o que foi conversado). |
| Ligar | Telefones do cliente, das partes e dos contatos, para ligar ou chamar no WhatsApp. |
| E-mail | Comunicações enviadas para as pessoas do processo e envio de novo e-mail. |
| Arquivos | Arquivos anexados ao processo. |

#### Registrar um contato

1. Abra a aba **Contatos** do painel.
2. Descreva como foi o contato, em detalhes. Você pode marcar pessoas com **@nome**.
3. Em **Contato feito com**, escolha a pessoa (cliente, parte ou contato do processo).
4. Clique em **Registrar contato**. O registro aparece na lista e na linha do tempo com o texto completo.

#### Ligar

![Aba Ligar do processo](/img/manual/erp/processos/processo-ligar.jpg)

1. Abra a aba **Ligar**.
2. Em **Ligar para**, escolha o telefone (cliente, partes e contatos aparecem juntos). O botão ao lado **copia** o número.
3. Clique em **Iniciar chamada** (abre o discador do computador ou do celular) ou em **WhatsApp**.
4. Depois da ligação, escreva o resultado em **Registrar resultado de uma ligação** e clique em **Registrar nos contatos**. O resultado entra como um contato do processo.

#### E-mail

A aba **E-mail** mostra as comunicações já enviadas para a pessoa escolhida (e-mail, WhatsApp ou SMS), com data de envio e, quando houver, data de leitura. Clique numa comunicação para ver o conteúdo. O botão **✉ Novo e-mail** abre o envio (só fica ativo se a pessoa tiver e-mail cadastrado).

#### Tarefas do processo

![Tarefas do processo](/img/manual/erp/processos/processo-tarefas.jpg)

As tarefas aparecem separadas em **Ativas** e **Concluídas**, com número, tipo, prazo, responsável e status. Clique numa tarefa para abri-la. O botão **+ Nova tarefa** abre o cadastro de tarefa já com o **processo** e o **cliente** preenchidos.

### Linha do tempo

Abaixo do painel fica a **Linha do tempo** do processo: tudo o que aconteceu, do mais recente para o mais antigo, com o conteúdo de cada item (texto da observação ou do contato, nome do arquivo, título da tarefa…), quem fez e quando.

![Linha do tempo do processo](/img/manual/erp/processos/processo-linha-do-tempo.jpg)

Use os filtros para ver só um tipo de evento. Cada filtro mostra quantos itens tem:

| Filtro | O que mostra |
|---|---|
| Tudo | Todos os eventos. |
| Tarefas | Tarefas criadas e concluídas. |
| Observações | Observações registradas. |
| Contatos | Registros de contato e de ligação. |
| Arquivos | Arquivos anexados. |
| Negócios | Negócios do CRM ligados ao processo. |
| Financeiro | Lançamentos financeiros do processo. |
| Alterações | Mudanças no cadastro do processo. |

Clique em **Atualizar** para recarregar.

## Demais abas

### Envolvidos

![Aba Envolvidos](/img/manual/erp/processos/processo-aba-envolvidos.jpg)

Lista as pessoas envolvidas com **Nome**, **Tipo**, **Indicação**, **Data do protocolo**, **Nomeação** e **Data da nomeação**.

1. Clique em **+ Adicionar envolvido**.
2. Escolha o **tipo** e a **pessoa**.
3. Marque **Indicação** e informe a **data do protocolo**, e/ou **Nomeação** e a **data da nomeação**, quando for o caso.
4. Clique em **Salvar**. Use o lápis para editar e a lixeira para remover.

### Publicações DJEN

Mostra as publicações e movimentações captadas pelo robô. Quando há publicações, aparecem os filtros **De**, **Até** e **Responsável pelo push** (quem recebeu a notificação). Em cada publicação, **Ver detalhe completo** abre o conteúdo inteiro, o código, as datas e as notificações enviadas e lidas.

### Tarefas / Planejamento

![Aba Tarefas do processo](/img/manual/erp/processos/processo-aba-tarefas.jpg)

É a mesma lista completa da tela de [Tarefas](../tarefas/sl-tarefas.md) (vistas rápidas, abas, busca, filtros, ordenação por coluna), mostrando apenas as tarefas deste processo. **Nova tarefa** já vem com processo e cliente preenchidos.

### Financeiro

![Aba Financeiro do processo](/img/manual/erp/processos/processo-aba-financeiro.jpg)

Mostra os totais e os lançamentos vinculados ao processo.

- **+ Recebimento** e **+ Pagamento** abrem o lançamento financeiro já vinculado a este processo.
- Em cada lançamento em aberto você pode dar **baixa** (registrar o pagamento).

### Acompanhamento (Etapas)

![Aba Acompanhamento (Etapas)](/img/manual/erp/processos/processo-aba-acompanhamento.jpg)

Mostra **todas** as etapas de produtividade do processo (inclusive as concluídas), cada uma num cartão com situação, canal e datas de ciência, responsáveis, observações, intimações e anexos. O interruptor **Produtividade** no topo liga/desliga o acompanhamento. As ações de cada etapa (modificar, responsáveis, pagamento, intimações, anexos) estão descritas em [Produtividade](./produtividade-painel.md#trabalhar-numa-etapa).

### Bens

![Aba Bens do processo](/img/manual/erp/processos/processo-aba-bens.jpg)

Lista os bens vinculados. **+ Vincular bem** busca um bem pelo número ou descrição e vincula ao processo. Em cada bem você pode **abrir** a ficha ou **desvincular**.

### Recursos / Carta Precatória

![Aba Recursos / Carta Precatória](/img/manual/erp/processos/processo-aba-recursos.jpg)

Lista recursos e cartas precatórias com **número**, **tipo**, **órgão**, **comarca**, **instância**, **advogado** e **situação**.

1. Clique em **+ Novo recurso**.
2. Preencha **Número**, **Tipo**, **Órgão** e **Instância** (obrigatórios), e se quiser comarca, cidade/UF, advogado, data, situação e observações.
3. Clique em **Salvar**. Use o lápis para editar e a lixeira para excluir.

### Checklist

No seletor do topo, escolha **Checklist do Processo** (checklist geral, com as respostas já salvas) ou o checklist judicial de um dos **bens** do processo. Preencha e clique em **Salvar**.

:::info
O checklist geral depende de um formulário com o código `processo-checklist` cadastrado em **Configurações** → **Formulários**. Sem ele, a tela avisa que não há formulário configurado.
:::

### CRM (Negócios)

Escolha o **funil** e clique em **Novo** para criar um negócio ligado ao processo, ou clique num negócio existente para editar.

## Outras ações

### Definir o responsável pelas notificações
Na **Visão Geral**, no card do responsável, clique em **Trocar** (ou **Definir**) e escolha o usuário. Ele recebe o push quando o processo tem movimentação nova. **Remover** tira o responsável.

### Usar a análise por IA
Clique em **Análise IA do Processo** (ícone ✨) para gerar um resumo executivo, a **fase** atual, a **próxima ação** e os **alertas críticos**. Use **↻** para gerar de novo e o lápis (✏️) para corrigir manualmente a fase ou o leiloeiro nomeado.

:::warning
Análises com mais de 7 dias ou com o sinal de baixa confiança (⚠) podem estar desatualizadas. Gere de novo antes de tomar decisões.
:::

### Registrar um andamento manual
1. Abra a aba **Movimentações do Processo**.
2. Clique em **+ Novo andamento manual**.
3. Preencha **Data** e **Tipo** (obrigatórios) e, se quiser, **Descrição**, **Texto** e **Responsável**.
4. Clique em **Registrar andamento**.

## Regras de negócio

- Ao desligar **Produtividade habilitada**, as etapas deixam de aparecer no painel de Produtividade; o histórico das etapas é mantido.
- Os registros de contato e de ligação ficam gravados no histórico da pessoa e aparecem na linha do tempo do processo.
- A **Nova tarefa** aberta de dentro do processo vem vinculada ao processo e ao cliente — ela aparece também na aba **Tarefas** da ficha do cliente.
- O seletor de situação oferece só as situações que podem ser definidas manualmente; outras são atualizadas pelo robô.

## Erros comuns

- **"Nenhuma pessoa vinculada ao processo" nas abas Ligar/E-mail**: defina o cliente ou cadastre partes/contatos.
- **Botão Novo e-mail desabilitado**: a pessoa escolhida não tem e-mail cadastrado.
- **Botão Salvar da situação desabilitado**: ele só habilita quando você escolhe uma situação diferente da atual.
- **Briefing não abre**: libere o bloqueador de pop-ups do navegador.

## Dicas

:::tip
Use o filtro **Contatos** da linha do tempo para ver, em segundos, tudo o que já foi conversado com o cliente antes de ligar de novo.
:::

- A aba **Ligar** junta os telefones do cliente, das partes e dos contatos — não precisa procurar em cada cadastro.
- O telefone e o e-mail da secretaria da vara ficam em [Cadastros Auxiliares](./cadastros.md) → **Varas**.

## Veja também

- [Processos (lista)](./processo.md)
- [Cadastrar Processo](./novo.md)
- [Produtividade](./produtividade-painel.md)
- [Etapas / Produtividade do processo](./-id-produtividade.md)
- [Intimações](./intimacoes.md)
- [Tarefas](../tarefas/sl-tarefas.md)
