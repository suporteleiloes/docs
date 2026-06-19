---
title: Veículo Verificado
sidebar_position: 2
---

# Veículo Verificado

Painel da integração com a **Veículo Verificado**, uma base unificada e gratuita de veículos leiloados. A transmissão dos eventos dos seus veículos (inclusão, venda e retirada) acontece de forma **automática** — esta tela serve para consultar veículos da sua base, acompanhar o status de transmissão e gerar um relatório resumido.

## Como acessar

**ERP** → **Integrações** → **Veículo Verificado**.

![Veículo Verificado](/img/manual/erp/integracoes-veiculo-verificado.png)

## O que você vê nesta tela

No topo, um cartão de **status** mostra se a integração está **Ativa** ou **Desativada**, com o atalho **Configurar** ao lado (leva às configurações globais).

Abaixo, o conteúdo é dividido em três abas: **Consulta**, **Histórico** e **Relatório**.

### Aba Consulta

Permite buscar um veículo da sua base por **placa** ou por **chassi**. Você tem um seletor para escolher o tipo de busca, um campo de digitação e o botão **Consultar**. O resultado aparece em uma tabela com as colunas:

| Coluna | O que é |
|---|---|
| ID | Identificação do veículo (bem) no ERP. |
| Placa | Placa do veículo. |
| Chassi | Número do chassi. |
| Descrição | Descrição do veículo. |

### Aba Histórico

Lista os veículos cadastrados que são elegíveis para a Veículo Verificado, com o status de transmissão de cada um. Colunas:

| Coluna | O que é |
|---|---|
| ID | Identificação do veículo no ERP. |
| Placa | Placa do veículo. |
| Chassi | Número do chassi. |
| Descrição | Descrição do veículo. |
| Status VV | **Transmitido** (já enviado à Veículo Verificado) ou **Pendente**. |
| Última atualização | Data da última alteração do registro. |

Esta aba é paginada — use a navegação no rodapé da tabela para ver mais veículos.

### Aba Relatório

Mostra uma visão geral em três números:

| Indicador | O que é |
|---|---|
| Total de veículos | Quantidade de veículos elegíveis. |
| Transmitidos | Quantos já foram enviados à Veículo Verificado. |
| Pendentes | Quantos ainda não foram transmitidos. |

Tem também o botão **Exportar CSV**.

## O que dá pra fazer aqui

### Consultar um veículo por placa ou chassi

1. Abra a aba **Consulta**.
2. Escolha **Placa** ou **Chassi** no seletor.
3. Digite o valor no campo (placa no formato `AAA-0000`; chassi com 17 caracteres). O texto é convertido automaticamente para maiúsculas.
4. Clique em **Consultar** (ou tecle **Enter**).
5. O resultado aparece na tabela. Se nada for encontrado, o sistema avisa que não há veículos para os dados informados.

### Acompanhar o status de transmissão

1. Abra a aba **Histórico**.
2. Veja na coluna **Status VV** quais veículos já foram **Transmitidos** e quais estão **Pendentes**.
3. Use a paginação para percorrer a lista.

### Exportar o relatório em CSV

1. Abra a aba **Relatório**.
2. Confira os números de total, transmitidos e pendentes.
3. Clique em **Exportar CSV**. Um arquivo `.csv` com a lista de veículos e o status de cada um é baixado para o seu computador.

## Regras de negócio

- **A transmissão é automática.** O ERP transmite os eventos (inclusão, venda, retirada) por conta própria; não há ação manual de "enviar" nesta tela. Por isso não existe botão de transmissão: a tela é só de acompanhamento e consulta.
- O **Status VV** de cada veículo é definido pelo registro de transmissão guardado no próprio bem: aparece **Transmitido** quando o bem já carrega esse registro e **Pendente** quando ainda não carrega.
- A aba **Consulta** busca na **sua base** de veículos (por placa ou chassi) — não consulta a base externa da Veículo Verificado. Retorna inclusive veículos já transmitidos.

## Erros comuns

- **Consultar com o campo vazio:** o sistema avisa para digitar a placa ou o chassi antes de buscar.
- **Esperar resultado de outra leiloeira:** a Consulta vê só os seus bens. A base compartilhada da Veículo Verificado não é consultada por esta tela.

## Dicas e observações

- O serviço é **gratuito** e a base é compartilhada entre leiloeiras.
- O botão **Exportar CSV** só fica disponível quando há veículos na lista do histórico.
- **Relatório e CSV refletem a página atual do Histórico.** Os números de total/transmitidos/pendentes e o conteúdo do CSV são calculados sobre os veículos carregados na aba **Histórico**. Para um panorama mais completo, aumente a quantidade por página no Histórico antes de conferir o Relatório ou exportar.
- A integração precisa estar **Ativa** (cartão de status). As configurações ficam em **Configurações globais** (atalho **Configurar**).

## Veja também

- [Youse Seguradora](./integracoes-youse.md)
- [Configurações globais](../configuracoes/configuracoes-globais.md)
