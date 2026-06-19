---
title: iCarta Pro
sidebar_position: 6
---

# iCarta Pro

Esta tela usa a integração de consulta de CNPJ (iCarta Pro ou Brasil API) para buscar e enriquecer dados cadastrais de pessoas jurídicas. Use-a para conferir rapidamente os dados de um CNPJ.

## Como acessar
**Integrações** → **iCarta Pro** (rota `/integracoes/icarta`).

![iCarta Pro](/img/manual/erp/integracoes-icarta.png)

## O que você vê nesta tela

A tela tem um painel de status e duas abas:

| Área | O que é |
|---|---|
| Status | Mostra se a integração está **Ativa** (e qual provedor: iCarta Pro ou Brasil API) ou **Desativada**. Traz o link **Configurar credenciais** |
| Aba **Consulta** | Campo de CNPJ e botão para consultar os dados cadastrais |
| Aba **Histórico** | Lista das consultas já realizadas |

## Pré-requisitos
- A integração precisa estar **Ativa** (painel de **Status**). O botão **Consultar** fica desabilitado enquanto ela estiver **Desativada**.
- O provedor (iCarta Pro ou Brasil API) é escolhido nas **Configurações globais**. A consulta usa as credenciais globais; sem provedor configurado, não há resultado.

## O que dá pra fazer aqui

### Consultar um CNPJ
1. Confirme no painel de **Status** que a integração está **Ativa**.
2. Vá para a aba **Consulta**.
3. Digite o CNPJ no campo (formato `00.000.000/0000-00`). Você também pode pressionar Enter.
4. Clique em **Consultar**.
5. Os dados cadastrais aparecem na área **Resultado**, logo abaixo.

A consulta é feita pelo mesmo serviço de validação de documento usado no cadastro de pessoas. O **Resultado** mostra os dados retornados pelo provedor (razão social, situação cadastral, endereço etc.) no formato bruto, para conferência rápida — esta tela não grava nem altera o cadastro de nenhuma pessoa.

### Ver o histórico de consultas
1. Clique na aba **Histórico**.
2. As consultas de CNPJ feitas pela sua organização apareceriam nesta lista.

## Erros comuns
- **CNPJ incompleto:** se o número tiver menos de 14 dígitos, o sistema avisa que o CNPJ é inválido e não consulta.
- **Sem dados para o CNPJ:** aparece o aviso **Sem resultado** — o provedor não retornou informações para aquele documento.
- **Integração desativada:** o botão **Consultar** fica indisponível e um aviso indica o caminho para ativar.

## Dicas e observações
- Para ativar a integração ou trocar o provedor (iCarta Pro ou Brasil API), use o link **Configurar credenciais**, que leva a **Configurações → Globais**.
- A aba **Histórico** aparece sempre vazia: a API V5 ainda não registra o histórico de consultas do iCarta Pro. O quadro de histórico é um marcador para quando esse recurso for liberado no servidor.

## Veja também
- [ImóvelWeb](./integracoes-imovelweb.md)
- [Resale](./integra-resale.md)
