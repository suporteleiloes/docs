---
title: Gateways de Pagamento
sidebar_position: 1
---

# Gateways de Pagamento

Esta tela é onde você liga os meios de cobrança da sua leiloeira — os bancos e gateways de pagamento que vão gerar boletos, PIX e cobranças para os arrematantes. Cada gateway tem suas próprias credenciais; você escolhe quais ficam ativos e qual é o padrão da casa.

A lista de gateways é **fixa**: o sistema já traz os provedores suportados; você não cria gateways novos, apenas configura e habilita os que vai usar.

## Gateways suportados

O sistema oferece estes gateways, cada um com os métodos de cobrança que ele aceita:

| Gateway | Métodos suportados | Ambientes |
|---|---|---|
| **Asaas** | PIX, boleto, cartão | Sandbox e Produção |
| **Santander** | Boleto | Somente Produção |
| **Banco do Brasil** | PIX, boleto | Sandbox e Produção |
| **Itaú** | PIX, boleto | Sandbox e Produção |
| **Bradesco** | PIX, boleto | Sandbox e Produção |
| **Mercado Pago** | PIX, boleto, cartão | Sandbox e Produção |

> Os métodos disponíveis dependem do gateway. Por exemplo, o **Santander** aqui gera apenas boleto e **não tem ambiente de testes (Sandbox)** — só Produção.

## Pré-requisitos

- Ter as credenciais do provedor de pagamento em mãos (geradas no painel do próprio gateway: tokens, Client ID, Client Secret etc.).
- Permissão de acesso ao módulo Financeiro. A tela exige a permissão **Listar gateways** (`financeiro/gateways/l`) para ver e **Editar gateways** (`financeiro/gateways/u`) para salvar. Sem a permissão de edição, você consegue abrir a configuração mas não salvar.

## Como acessar

**Financeiro** → **Gateways de Pagamento**.

![Gateways de Pagamento](/img/manual/erp/financeiro-gateways.png)

## O que você vê nesta tela

No topo, um texto curto resume a função da tela e mostra, quando já houver um gateway padrão definido, qual é o **Padrão atual** e o **método** padrão. O método padrão é apenas exibido aqui — ele é definido em outra tela (veja a observação em [Método padrão e cobrança de arremates](#metodo-padrao-e-cobranca-de-arremates)).

Logo abaixo, uma tabela lista todos os gateways disponíveis para a sua leiloeira, um por linha. As colunas são:

| Coluna | O que é |
|---|---|
| **Gateway** | Nome do banco/gateway (ex.: o provedor de cobrança que você usa). |
| **Métodos** | Formas de pagamento que aquele gateway oferece (ex.: boleto, PIX, cartão). Aparece apenas em telas maiores. |
| **Configuração** | Mostra **Configurado** (verde) quando as credenciais já foram preenchidas, ou **Sem credenciais** quando ainda falta configurar. |
| **Situação** | **Habilitado** (verde) se o gateway está ligado para receber cobranças, ou **Desabilitado** se está desligado. |
| **Padrão** | Marca **Padrão** no gateway que é usado por padrão nas cobranças; nos demais aparece um traço (—). |
| (ações) | Botão **Configurar** para abrir as credenciais e ajustes daquele gateway. |

No canto superior direito há o botão **Atualizar**, que recarrega a lista para refletir mudanças recentes.

## O que dá pra fazer aqui

- **Atualizar** a lista (botão no topo).
- **Configurar** um gateway: preencher credenciais, habilitar/desabilitar e definir como padrão. Você pode clicar no botão **Configurar** da linha ou dar **duplo clique** sobre a linha.

### Configurar um gateway

1. Na linha do gateway desejado, clique em **Configurar** (ou dê duplo clique na linha). Abre a janela **Configurar [nome do gateway]**.
2. Use a chave **Gateway habilitado** para ligar (Ativo) ou desligar (Inativo) o gateway. Só gateways habilitados recebem cobranças.
3. Use a chave **Definir como gateway padrão** se quiser que este seja o gateway usado por padrão nas cobranças da leiloeira.
4. Confira a linha **Métodos suportados**, que mostra as formas de pagamento desse gateway.
5. Preencha os campos de credenciais que aparecem. **Eles mudam conforme o gateway** — a janela mostra exatamente os campos daquele provedor (veja a tabela [Campos por gateway](#campos-por-gateway)). Entre os campos possíveis:
   - **Ambiente** — escolha entre **Sandbox (testes)** e **Produção**. Use Sandbox apenas para testar; em operação real, selecione Produção. (O Santander só oferece Produção.)
   - **Token / Access Token**, **Client ID**, **Client Secret**, **App Key**, **Token do Webhook**, **Wallet ID** — dados fornecidos pelo seu provedor de pagamento.
   - **Métodos (separados por vírgula)** — restringe quais métodos aquele gateway vai usar (use os nomes em minúsculo: `pix`, `boleto`, `cartao`).
   - **Tipo de chave PIX** e **Chave PIX** — aparecem no **Santander**, para informar a chave que recebe os PIX.
6. Clique em **Salvar**. Uma mensagem confirma o sucesso e a lista é atualizada com a nova situação.

> **Ao habilitar, as credenciais obrigatórias são validadas.** Se você ligar **Gateway habilitado** mas faltar algum campo obrigatório daquele gateway, o salvamento falha com uma mensagem do tipo *"Credenciais obrigatórias ausentes para [gateway]: TOKEN, ..."*. Você pode salvar um gateway **desabilitado** com credenciais incompletas — a validação só ocorre quando ele é ligado.

![Configurar gateway](/img/manual/erp/financeiro-gateways-configurar.png)

### Campos por gateway

Cada gateway pede um conjunto próprio de credenciais. Os campos **obrigatórios** (exigidos para habilitar) estão marcados:

| Gateway | Campos pedidos | Obrigatórios para habilitar |
|---|---|---|
| **Asaas** | Ambiente, Token, Métodos, Token do Webhook, Wallet ID | Ambiente, Token, Métodos |
| **Santander** | Ambiente, Client ID, Client Secret, Métodos, Tipo de chave PIX, Chave PIX | Client ID, Client Secret |
| **Banco do Brasil** | Ambiente, Client ID, Client Secret, App Key, Métodos | Client ID, Client Secret, App Key |
| **Itaú** | Ambiente, Client ID, Client Secret, Métodos | Client ID, Client Secret |
| **Bradesco** | Ambiente, Client ID, Client Secret, Métodos | Client ID, Client Secret |
| **Mercado Pago** | Ambiente, Token, Métodos | Token |

## Método padrão e cobrança de arremates {#metodo-padrao-e-cobranca-de-arremates}

Dois ajustes ligados a gateways **não são feitos nesta tela**, e sim em **Configurações → Configurações Globais**:

- **Método padrão** (`financeiro.metodo.padrao`) — o método de cobrança sugerido por padrão (ex.: `pix`). Esta tela apenas o exibe, no topo, ao lado do gateway padrão.
- **Integrar cobrança de arremates ao gateway** (`financeiro.arremates.integrarGateway`) — quando ligado, as cobranças de arremates passam a usar o gateway integrado. Ajuste em Configurações Globais (Sim/Não).

## Dicas e observações

- **Campos secretos ficam ocultos.** Credenciais sensíveis (como tokens e segredos) que já foram salvas aparecem mascaradas, com a indicação "já configurado — preencha para alterar". Para mantê-las, **deixe o campo em branco**; só digite algo se quiser substituir o valor atual.
- **Padrão é só um.** Ao marcar um gateway como padrão, ele passa a ser o sugerido nas cobranças. A conta a receber ainda pode escolher receber por outro gateway habilitado.
- **Configurado x Habilitado são coisas diferentes.** Um gateway pode estar **Configurado** (com credenciais) mas **Desabilitado** (sem receber cobranças). Para que ele opere, precisa estar configurado *e* habilitado.
- **Use o Sandbox para testar.** Antes de cobrar de verdade, valide as credenciais no ambiente de testes; depois troque o **Ambiente** para Produção.
- Essa tela costuma exigir permissão de acesso ao módulo Financeiro. Se você não a vê no menu, fale com o administrador da sua leiloeira.

## Veja também

- [Financeiro](../financeiro/financeiro.md)
- [Configurações Globais](../configuracoes/configuracoes-globais.md) — método padrão e integração de arremates ao gateway
