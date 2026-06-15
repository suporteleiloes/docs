---
title: Gateways de Pagamento
sidebar_position: 1
---

# Gateways de Pagamento

Esta tela é onde você cadastra e liga os meios de cobrança da sua leiloeira — os bancos e gateways de pagamento que vão gerar boletos, PIX e cobranças para os arrematantes. Cada gateway tem suas próprias credenciais e você escolhe quais ficam ativos e qual é o padrão da casa.

## Como acessar

**Financeiro** → **Gateways de Pagamento**.

![Gateways de Pagamento](/img/manual/erp/financeiro-gateways.png)

## O que você vê nesta tela

No topo, um texto curto resume a função da tela e mostra, quando já houver um gateway padrão definido, qual é o **Padrão atual** e o **método** padrão.

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
5. Preencha os campos de credenciais que aparecem. Eles variam conforme o gateway, e podem incluir, por exemplo:
   - **Ambiente** — escolha entre **Sandbox (testes)** e **Produção**. Use Sandbox apenas para testar; em operação real, selecione Produção.
   - **Token / Access Token**, **Client ID**, **Client Secret**, **App Key**, **Token do Webhook**, **Wallet ID** — dados fornecidos pelo seu provedor de pagamento.
   - **Métodos (separados por vírgula)** — quando o gateway permite você definir quais métodos aceitar.
   - **Tipo de chave PIX** e **Chave PIX** — para gateways que recebem por PIX.
6. Clique em **Salvar**. Uma mensagem confirma o sucesso e a lista é atualizada com a nova situação.

![Configurar gateway](/img/manual/erp/financeiro-gateways-configurar.png)

## Dicas e observações

- **Campos secretos ficam ocultos.** Credenciais sensíveis (como tokens e segredos) que já foram salvas aparecem mascaradas, com a indicação "já configurado — preencha para alterar". Para mantê-las, **deixe o campo em branco**; só digite algo se quiser substituir o valor atual.
- **Padrão é só um.** Ao marcar um gateway como padrão, ele passa a ser o sugerido nas cobranças. A conta a receber ainda pode escolher receber por outro gateway habilitado.
- **Configurado x Habilitado são coisas diferentes.** Um gateway pode estar **Configurado** (com credenciais) mas **Desabilitado** (sem receber cobranças). Para que ele opere, precisa estar configurado *e* habilitado.
- **Use o Sandbox para testar.** Antes de cobrar de verdade, valide as credenciais no ambiente de testes; depois troque o **Ambiente** para Produção.
- Essa tela costuma exigir permissão de acesso ao módulo Financeiro. Se você não a vê no menu, fale com o administrador da sua leiloeira.

## Veja também

- [Financeiro](../financeiro/financeiro.md)
