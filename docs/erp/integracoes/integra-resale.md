---
title: Resale
sidebar_position: 2
---

# Resale

Esta tela integra o ERP com a plataforma Resale, que reúne imóveis de diversos vendedores (Banco do Brasil, Emgea, Poupex, JIVE e outros). Por aqui você consulta os imóveis disponíveis de cada vendedor e relaciona os escolhidos a um leilão ativo, criando os lotes automaticamente.

## Como acessar
**Integrações** → **Resale** (rota `/integra/resale`).

![Resale](/img/manual/erp/integra-resale.png)

## O que você vê nesta tela

A tela tem dois blocos:

1. **Disponibilidade** — mostra se a integração com o Resale está **Ativa** ou **Inativa**, e traz o link **Configurar credenciais**.
2. **Consulta de bens aptos para leilão** — onde você escolhe o vendedor, consulta os imóveis e os relaciona a um leilão.

### Colunas da lista de imóveis

| Coluna | O que é |
|---|---|
| Finalidade | Finalidade do imóvel, com uma **caixa de seleção** ao lado para marcá-lo |
| Descrição | Nome ou descrição do imóvel. Imóveis já relacionados a um leilão aparecem em destaque, com um ícone de confirmação |
| Endereço | Endereço completo do imóvel |
| Mínimo | Valor de venda, em reais |
| Último Leilão | Data do último leilão |
| Lote | Número do lote |
| Rgi | Registro Geral de Imóveis |
| Matrícula | Número da matrícula |
| Carteira | Código da carteira |
| Área Total | Área total do imóvel |
| (ações) | Botão **Ver completo** para abrir o detalhe |

A lista é paginada (100, 300 ou 500 imóveis por página).

## O que dá pra fazer aqui

### Consultar imóveis de um vendedor
1. No campo **Selecione o vendedor**, escolha entre: Banco do Brasil, Embracon, Emgea, JIVE, Poupex, Banco Master ou Banco de Brasília.
2. Clique em **Consultar** (o botão mostra "Consultando..." enquanto busca).
3. Os imóveis aparecem na lista. Use a paginação no rodapé para navegar entre as páginas.

### Ver os detalhes de um imóvel
1. Clique em **Ver completo** na linha do imóvel (ou dê um duplo clique na linha).
2. Abre uma janela com todos os dados disponíveis daquele imóvel, campo a campo.
3. Feche a janela quando terminar.

### Relacionar imóveis a um leilão
1. Faça a consulta de imóveis.
2. Marque a **caixa de seleção** na coluna **Finalidade** de cada imóvel desejado.
3. Ao marcar pelo menos um, aparece a barra de relacionamento no rodapé.
4. No campo **Selecione o leilão**, escolha o leilão de destino.
5. Clique em **Relacionar/Atualizar X bem(ns) ao leilão**.
6. Confirme na janela. O sistema cria/atualiza os lotes e avisa **Importação concluída** (ou lista os erros encontrados).

## Dicas e observações
- Se a integração estiver **Inativa**, configure as credenciais pelo link **Configurar credenciais** (leva a **Configurações → Globais**).
- Imóveis com o ícone de confirmação na coluna **Descrição** já estão relacionados a um leilão — relacioná-los de novo apenas atualiza os dados.
- A consulta sempre exige escolher um vendedor antes; senão o sistema avisa.

## Veja também
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [Santander Imóveis](./integra-santander-imoveis.md)
- [ImóvelWeb](./integracoes-imovelweb.md)
