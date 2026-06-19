---
title: Youse Seguradora
sidebar_position: 1
---

# Youse Seguradora

Painel para trabalhar com a integração da seguradora **Youse**: consultar os veículos que ela disponibiliza para leilão e enviar (sincronizar) inventário, arrematantes e vendas. A comunicação acontece pelo canal unificado do Grupo Porto.

## Como acessar

**ERP** → **Integrações** → **Youse Seguradora**.

![Youse Seguradora](/img/manual/erp/integracoes-youse.png)

## O que você vê nesta tela

No topo, um cartão de **status** mostra rapidamente a situação da integração:

| Indicador | O que é |
|---|---|
| Integração | **Ativa** ou **Desativada** — se a integração Youse está ligada nas configurações da sua leiloeira. |
| Ambiente | **Produção** (operação real) ou **Homologação** (ambiente de testes). |
| Disponibilidade (API) | **Online** ou **Offline** — se o serviço da Youse está respondendo no momento. |

No canto do cartão há o atalho **Configurar credenciais**, que leva às configurações globais para informar/ajustar os dados de acesso da Youse.

Abaixo do status, o conteúdo é dividido em duas abas: **Cotações / Veículos** e **Ações por leilão**.

### Aba Cotações / Veículos

Lista os veículos que a Youse retornou para cotação/emissão de apólice. Colunas:

| Coluna | O que é |
|---|---|
| Placa | Placa do veículo. |
| Chassi | Número do chassi. |
| Mínimo | Valor mínimo informado para o veículo. |
| Último Leilão | Data do último leilão em que o veículo apareceu. |
| Último Lote | Número do último lote correspondente. |
| SIS | Código SIS do veículo. |
| Sinistro | Identificação do sinistro associado. |
| ID Bem | Identificação do bem no seu ERP, no formato `bem/comitente` (ou `—` quando o veículo ainda não está vinculado a um bem). |

### Aba Ações por leilão

Onde você dispara manualmente a sincronização com a Youse. Tem um campo para escolher o **leilão de destino** e três botões de ação.

## O que dá pra fazer aqui

### Atualizar a lista de veículos (cotações)

1. Abra a aba **Cotações / Veículos**.
2. Clique em **Atualizar consulta**.
3. Aguarde — enquanto consulta, o botão mostra "Consultando...". A tabela é recarregada com os veículos retornados pela Youse.

### Sincronizar o inventário com a Youse

1. Abra a aba **Ações por leilão**.
2. Clique em **Atualizar inventário** (esta ação não exige escolher leilão).
3. Confirme na janela que aparece.
4. Ao terminar, uma mensagem confirma que o inventário foi sincronizado.

### Enviar arrematantes de um leilão

1. Abra a aba **Ações por leilão**.
2. No campo **Leilão destino**, selecione o leilão.
3. Clique em **Atualizar arrematantes**.
4. Confirme na janela. Ao final, aparece a mensagem de conclusão.

### Enviar vendas de um leilão

1. Abra a aba **Ações por leilão**.
2. Selecione o **Leilão destino**.
3. Clique em **Atualizar vendas**.
4. Confirme. Uma mensagem confirma o envio.

## Pré-requisitos

- Integração Youse **Ativa** e credenciais preenchidas em **Configurações globais** (atalho **Configurar credenciais**). Sem isso, a integração não funciona.
- **Disponibilidade (API)** em **Online** — é o serviço da Youse (consultado pelo canal do Grupo Porto) respondendo. Se estiver **Offline**, consultas e envios falham.
- Para as ações de **arrematantes** e **vendas**, um **leilão de destino** já cadastrado e selecionado.

## Regras de negócio

- O canal de comunicação é **unificado do Grupo Porto** (mesmo canal que atende Azul/Porto). A Youse é identificada internamente pelo serviço Youse; por isso o status de **Disponibilidade** reflete a resposta desse canal.
- **Atualizar inventário** vale para a integração toda (não depende de leilão): sincroniza a base de veículos.
- **Atualizar arrematantes** e **Atualizar vendas** são **por leilão**: enviam os arrematantes / as vendas daquele leilão específico para a Youse. Por isso exigem o leilão selecionado.
- O **Ambiente** muda o destino dos dados: em **Homologação** nada chega à operação real da Youse (ambiente de testes); em **Produção** os dados são enviados de verdade.

## Erros comuns

- **Ação de arrematantes/vendas sem leilão selecionado:** o sistema avisa para escolher o leilão de destino antes de prosseguir.
- **Disponibilidade Offline:** o envio pode falhar — aguarde o serviço voltar e tente de novo.
- **Achar que Homologação envia para a Youse de verdade:** confira sempre o **Ambiente** antes de uma ação em volume.

## Dicas e observações

- Toda ação de sincronização pede **confirmação** antes de executar — leia a mensagem para ter certeza do que está enviando.
- A aba **Cotações / Veículos** só recarrega quando você clica em **Atualizar consulta**; ela consulta a Youse na hora, então pode levar alguns segundos.

## Veja também

- [Veículo Verificado](./integracoes-veiculo-verificado.md)
- [Configurações globais](../configuracoes/configuracoes-globais.md)
