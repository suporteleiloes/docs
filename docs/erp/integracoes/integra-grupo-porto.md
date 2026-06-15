---
title: Seguradoras — Grupo Porto
sidebar_position: 1
---

# Seguradoras — Grupo Porto

Esta tela integra o ERP com as seguradoras do Grupo Porto (Porto Seguro, Azul Seguros e Youse) e também com a Suhai. Por aqui você consulta os veículos sinistrados aptos para leilão, relaciona esses bens a um leilão ativo e sincroniza inventário, arrematantes e vendas com a seguradora.

## Como acessar
**Integrações** → **Seguradoras — Grupo Porto** (rota `/integra/grupo-porto`).

![Seguradoras — Grupo Porto](/img/manual/erp/integra-grupo-porto.png)

## O que você vê nesta tela

A tela é dividida em dois blocos:

1. **Disponibilidade** — um painel de status que mostra, por serviço, se a conexão está no ar.
2. **Consulta de veículos aptos para leilão** — onde você escolhe o serviço, consulta os veículos e age sobre eles.

### Painel de disponibilidade

| Serviço | O que indica |
|---|---|
| Azul Seguros | **Disponível** (verde) ou **Indisponível** (vermelho) |
| Porto Seguro | **Disponível** ou **Indisponível** |
| Youse | **Disponível** ou **Indisponível** |
| Suhai | **Disponível** ou **Indisponível** |

Use esse painel antes de consultar: se um serviço aparece como Indisponível, a consulta dele provavelmente não trará resultados.

### Colunas da lista de veículos

| Coluna | O que é |
|---|---|
| Placa | Placa do veículo, com uma **caixa de seleção** ao lado para marcar o bem |
| Chassi | Número do chassi |
| Mínimo | Valor mínimo do veículo, em reais |
| Último Leilão | Data do último leilão em que o veículo passou |
| Último Lote | Número do último lote |
| SIS | Código SIS do veículo |
| Sinistro | Identificação do sinistro |
| ID Bem | Se o veículo já existe no ERP, mostra o identificador do bem, o comitente e o primeiro nome dele |
| Leilão Ativo | Se o bem já está em algum leilão ativo, mostra o número e o código desse leilão |

## O que dá pra fazer aqui

### Consultar veículos aptos para leilão
1. No campo **Selecione o serviço**, escolha **Azul**, **Porto**, **Youse** ou **Suhai**.
2. Clique em **Consultar**. O botão mostra "Consultando..." enquanto busca.
3. Os veículos aparecem na lista abaixo. Se você não escolher um serviço, o sistema avisa para selecionar antes.

### Relacionar veículos a um leilão
1. Faça a consulta de veículos (passo anterior).
2. Marque a **caixa de seleção** na coluna **Placa** de cada veículo que deseja incluir.
3. Assim que você marca pelo menos um veículo, aparece a barra de relacionamento no rodapé da lista.
4. Nessa barra, no campo **Selecione o leilão**, escolha o leilão de destino.
5. Clique em **Relacionar X bem(ns) ao leilão**.
6. Confirme na janela que aparece. O sistema cria os lotes e avisa **Importação concluída** (ou lista eventuais erros, caso algum item não tenha sido importado).

### Sincronizar dados por leilão (inventário, arrematantes e vendas)
Na área **Ações por leilão**, no rodapé da tela:

1. No campo **Leilão destino**, escolha o leilão.
2. Garanta que um **serviço** esteja selecionado no topo (Azul, Porto, Youse ou Suhai) — ele é exigido para essas ações.
3. Escolha a ação:
   - **Atualizar inventário** — sincroniza o inventário completo do serviço selecionado. Confirme na janela.
   - **Atualizar arrematantes** — envia os arrematantes do leilão de volta para a seguradora. Confirme na janela.
   - **Atualizar vendas** — envia as vendas do leilão de volta para a seguradora. Confirme na janela.
4. Ao final, o sistema mostra uma mensagem de sucesso ou de falha.

## Dicas e observações
- O botão **Atualizar inventário** fica desabilitado até você selecionar um serviço no topo da tela.
- As ações **Atualizar arrematantes** e **Atualizar vendas** exigem que você escolha o **Leilão destino** antes; senão o sistema avisa.
- O painel de disponibilidade é só informativo — ele não bloqueia a consulta, mas indica quando vale a pena tentar.
- Esta é uma tela técnica de operação com seguradoras; o acesso normalmente é restrito a quem opera a integração.

## Veja também
- [Resale](./integra-resale.md)
- [Santander Imóveis](./integra-santander-imoveis.md)
- [Detran PB](./integra-detranpb.md)
