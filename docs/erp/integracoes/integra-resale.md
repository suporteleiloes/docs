---
title: Resale
sidebar_position: 2
---

# Resale

Esta tela integra o ERP com a plataforma Resale, que reúne imóveis de diversos vendedores (Banco do Brasil, Emgea, Poupex, JIVE e outros). Por aqui você consulta os imóveis disponíveis de cada vendedor e relaciona os escolhidos a um leilão ativo, criando os lotes automaticamente.

## Pré-requisitos

- A integração precisa estar **Ativa** (credenciais configuradas). Se estiver **Inativa**, configure pelo link **Configurar credenciais** (leva a **Configurações → Globais**).
- Para cada vendedor que você for usar, deve existir um **comitente cadastrado** com a observação `RESALE_CODE=<vendedor>` (ex.: `RESALE_CODE=bb` para o Banco do Brasil). É a ele que os imóveis daquele vendedor são vinculados. Se o comitente não existir, o item entra como erro e é pulado na importação.

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

> **O que é trazido para cada imóvel:** título, descrição (finalidade, áreas, cômodos), matrícula, RGI/cartório, inscrição municipal, endereço, valor de venda (usado como valor inicial e mínimo), situação de ocupação, fotos e documentos, e localização (cidade/UF/CEP/coordenadas). O vínculo é com o comitente `RESALE_CODE=<vendedor>` selecionado na consulta. Imóveis já existentes (casados pelo código) são **atualizados** — por isso o botão diz "Relacionar/Atualizar".

## Erros comuns

- **Consultar sem vendedor:** a consulta sempre exige escolher um vendedor antes; senão o sistema avisa.
- **Relacionar sem leilão:** o sistema avisa "Necessário selecionar um leilão".
- **"Comitente \<vendedor\> não encontrado":** falta o comitente com `RESALE_CODE=<vendedor>`. Cadastre-o antes de importar (ver Pré-requisitos).

## Dicas e observações
- Se a integração estiver **Inativa**, configure as credenciais pelo link **Configurar credenciais** (leva a **Configurações → Globais**).
- Imóveis com o ícone de confirmação na coluna **Descrição** já estão relacionados a um leilão — relacioná-los de novo apenas atualiza os dados.
- A lista de vendedores oferecida na tela é mais ampla do que a integração formalmente anuncia. Se um vendedor não trouxer resultados, confirme com o suporte se ele está habilitado nas suas credenciais Resale.

## Veja também
- [Seguradoras — Grupo Porto](./integra-grupo-porto.md)
- [Santander Imóveis](./integra-santander-imoveis.md)
- [ImóvelWeb](./integracoes-imovelweb.md)
