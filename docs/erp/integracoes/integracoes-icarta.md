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

## O que dá pra fazer aqui

### Consultar um CNPJ
1. Confirme no painel de **Status** que a integração está **Ativa**.
2. Vá para a aba **Consulta**.
3. Digite o CNPJ no campo (formato `00.000.000/0000-00`). Você também pode pressionar Enter.
4. Clique em **Consultar**.
5. Os dados cadastrais aparecem na área **Resultado**, logo abaixo.

Se o CNPJ tiver menos de 14 dígitos, o sistema avisa que ele é inválido. Se não houver dados para o CNPJ, aparece o aviso **Sem resultado**.

### Ver o histórico de consultas
1. Clique na aba **Histórico**.
2. As consultas de CNPJ feitas pela sua organização aparecerão nesta lista.

## Dicas e observações
- Se a integração estiver **Desativada**, o botão **Consultar** fica indisponível e aparece um aviso. Ative a integração pelo link **Configurar credenciais** (leva a **Configurações → Globais**), onde você também escolhe o provedor (iCarta Pro ou Brasil API).
- O histórico de consultas depende de o recurso estar liberado; até lá, a aba **Histórico** pode aparecer vazia, indicando que ainda não há registro disponível.

## Veja também
- [ImóvelWeb](./integracoes-imovelweb.md)
- [Resale](./integra-resale.md)
