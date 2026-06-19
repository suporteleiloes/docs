---
title: Etapas / Produtividade do processo
sidebar_position: 14
---

# Etapas / Produtividade do processo

Esta tela mostra o **fluxo de produtividade** de um processo em formato de quadro (Kanban): cada etapa do trabalho aparece como um cartão, organizado por situação. É aqui que você acompanha o andamento das etapas, registra ciência/protocolos, anexa arquivos, marca pagamentos e gera relatórios.

## Como acessar

Abra um processo em **ERP** → **Processos** e vá para a aba/atalho **Etapas / Produtividade**. A URL é `/processo/{id}/produtividade`.

![Etapas / Produtividade do processo](/img/manual/erp/-id-produtividade.png)

## Pré-requisitos

- O processo já deve estar cadastrado. A tela é sempre a de **um processo específico** (`/processo/{id}/produtividade`).
- Para o quadro aparecer com etapas, o **fluxo de produtividade** precisa estar iniciado. Em um processo novo, o quadro vem vazio com a opção **Iniciar fluxo**.
- O **Lançar Financeiro** cria contas a pagar no módulo financeiro — tê-lo configurado é o que dá sentido ao lançamento.

## O que você vê nesta tela

No topo há uma barra com o número do processo, o selo de situação do fluxo (ativo/desativado) e os botões de ação. Abaixo, o quadro com quatro colunas:

| Coluna | O que reúne |
|---|---|
| Pendente | Etapas ainda não iniciadas. |
| Em andamento | Etapas em execução. |
| Concluída | Etapas finalizadas, mas ainda não pagas. |
| Pago | Etapas já pagas. |

Cada cartão mostra o nome da etapa, descrição, responsável, valor e data de conclusão (quando houver).

### Botões da barra superior

| Botão | O que faz |
|---|---|
| Processo | Volta para a tela do processo. |
| Exportar XLSX | Gera uma planilha com o relatório de produtividade de um período. |
| Lançar Financeiro | Cria lançamentos financeiros (contas a pagar) das etapas concluídas e não pagas no período, e baixa um comprovante em XLSX. |
| Iniciar Fluxo | Aparece quando ainda não há fluxo; cria o fluxo de produtividade do processo. |
| Desativar fluxo | Aparece quando há fluxo ativo; encerra o fluxo. |

## O que dá pra fazer aqui

### Iniciar o fluxo
Se o processo ainda não tem produtividade, clique em **Iniciar fluxo** (na barra ou no aviso central). As etapas passam a aparecer no quadro.

### Editar uma etapa
1. Clique no cartão da etapa.
2. No formulário, ajuste **Nome**, **Descrição**, **Status**, **Valor (R$)**, **Conclusão** e **Responsável**.
3. Na seção **Ciência e protocolos**, preencha **Canal de ciência**, **Data ciência**, **Data protocolo** (ou **Data despacho**, conforme a etapa), **Data manifestação leiloeiro** e o **Resumo**.
4. Marque, se for o caso, **Estou ciente deste registro (aceite de termos)**.
5. Clique em **Salvar**.

### Anexar arquivos a uma etapa
1. Abra a etapa.
2. Na seção **Arquivos**, clique em **Enviar** e escolha o arquivo.
3. Use os botões da lista para **baixar** ou **excluir** cada arquivo.

### Marcar uma etapa como paga
1. Abra a etapa.
2. Clique em **Marcar pago** e confirme.

### Registrar um pagamento manual na etapa
1. Abra a etapa.
2. No rodapé, clique em **+ Pagamento**.
3. Informe o **Valor** e, opcionalmente, uma **Descrição**.
4. Clique em **Registrar**.

### Vincular uma pessoa à etapa
1. Abra a etapa.
2. No rodapé, clique em **+ Pessoa**.
3. Busque a **pessoa** e informe o **papel** (opcional).
4. Clique em **Adicionar**.

### Exportar o relatório de produtividade
1. Clique em **Exportar XLSX**.
2. Informe a **Data inicial** e a **Data final**.
3. Clique em **Baixar XLSX**. O relatório inclui as etapas concluídas no período.

### Lançar no financeiro
1. Clique em **Lançar Financeiro**.
2. Informe o **período** (data inicial e final).
3. Clique em **Processar lançamento**. O sistema cria os lançamentos de contas a pagar das etapas concluídas e não pagas e baixa um comprovante em XLSX.

### Desativar o fluxo
Clique em **Desativar fluxo** e confirme. As etapas em andamento são interrompidas.

## Regras de negócio

- O quadro tem quatro situações fixas: **Pendente → Em andamento → Concluída → Pago**. Mudar o **Status** da etapa (ou marcar como paga) move o cartão de coluna.
- O campo de data muda conforme a etapa: na etapa **Nomeação** ele aparece como **Data despacho**; nas demais, como **Data protocolo**.
- **Marcar pago** muda a situação da etapa para Pago. **Lançar Financeiro** vai além: gera os lançamentos de contas a pagar no financeiro e baixa o comprovante — afeta apenas etapas **concluídas e não pagas** no período.
- **Desativar fluxo** encerra a produtividade do processo e interrompe as etapas em andamento. Reabra com **Iniciar Fluxo** se precisar voltar a usar.
- As ações respeitam as permissões do seu perfil de acesso a processos.

## Erros comuns

- **Cliquei em Lançar Financeiro e nada foi lançado** — provavelmente não havia etapas concluídas e não pagas no período informado. Confira as datas e a coluna **Concluída**.
- **A etapa não saiu de Concluída** — só vai para **Pago** ao usar **Marcar pago** ou ao mudar o **Status** para Pago; lançar no financeiro não move o cartão sozinho.

## Dicas e observações

- A coluna **Concluída** mostra etapas finalizadas que ainda **não** foram pagas; ao marcar como paga, o cartão move para **Pago**.
- O **Lançar Financeiro** afeta apenas etapas **concluídas e não pagas** dentro do período escolhido.

## Veja também

- [Processo (detalhe)](./-id.md)
- [Cartas precatórias do processo](./-id-cartas-precatorias.md)
