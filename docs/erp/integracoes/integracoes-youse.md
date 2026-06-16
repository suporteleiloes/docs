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

## Dicas e observações

- **Selecione o leilão antes.** As ações de **arrematantes** e **vendas** exigem um leilão escolhido; se você esquecer, o sistema avisa para selecionar primeiro. Já **Atualizar inventário** vale para a integração toda e não precisa de leilão.
- Toda ação de sincronização pede **confirmação** antes de executar — leia a mensagem para ter certeza do que está enviando.
- Se a **Disponibilidade (API)** estiver **Offline**, as consultas e envios podem falhar; aguarde o serviço voltar.
- Confira o **Ambiente**: em **Homologação** nada vai para a operação real da Youse; em **Produção**, os dados são enviados de verdade.
- As credenciais de acesso são definidas em **Configurações globais** (atalho **Configurar credenciais**). Sem elas, a integração não funciona.

## Veja também

- [Veículo Verificado](./integracoes-veiculo-verificado.md)
- [Configurações globais](../configuracoes/configuracoes-globais.md)
