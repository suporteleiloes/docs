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

> **O que "Disponível" realmente significa:** o painel apenas verifica se as **credenciais** daquele serviço estão preenchidas na configuração do ERP — ele **não** faz um teste de conexão ao vivo com a seguradora. Um serviço pode aparecer como "Disponível" (porque tem login configurado) e ainda assim falhar na consulta se a credencial estiver incorreta ou a API da seguradora estiver fora do ar. As credenciais ficam no padrão `login::senha` por serviço (chaves `integra.ws.azul.url`, `integra.ws.porto.url`, `integra.ws.youse.url`, `integra.ws.suhai.url`) — fale com o suporte para configurá-las.

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
| ID Bem | Se o veículo já existe no ERP (casado por **placa** ou **chassi**), mostra o identificador do bem, o ID do comitente e o primeiro nome dele |
| Leilão Ativo | Se o bem já está em algum leilão **ativo**, mostra o número e o código desse leilão |

> **Quando o veículo conta como "já em leilão ativo":** o sistema considera ativo o bem que está em lote de leilão com status Rascunho, Em Breve, Em Loteamento, Aberto para Lances ou Em Leilão. Leilões encerrados/cancelados não aparecem nessa coluna.

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

### Sincronizar dados (inventário, arrematantes e vendas)
Na área de ações, no rodapé da tela, há três ações. Atenção: elas têm comportamentos diferentes quanto ao que exigem.

**Atualizar inventário** (não usa leilão):
1. Selecione um **serviço** no topo (Azul, Porto, Youse ou Suhai) — o botão fica desabilitado até você selecionar.
2. Clique em **Atualizar inventário** e confirme na janela.
3. O sistema envia para a seguradora o inventário de **todos os bens do comitente Porto** (bens com status **Em estoque** cujo comitente tem "PORTO" no nome), independentemente do leilão. Não há campo de leilão para essa ação.

> **Importante:** apesar de você selecionar um serviço, a atualização de inventário hoje envia sempre os bens do comitente cujo nome contém "PORTO" — não filtra por Azul/Youse/Suhai separadamente. Selecione "Porto" para evitar confusão. **> A confirmar com o suporte** se o seu comitente está nomeado corretamente para entrar nessa sincronização.

**Atualizar arrematantes** e **Atualizar vendas** (usam leilão):
1. No campo **Leilão destino**, escolha o leilão.
2. Escolha a ação:
   - **Atualizar arrematantes** — envia os arrematantes daquele leilão de volta para a seguradora. Confirme na janela.
   - **Atualizar vendas** — envia as vendas daquele leilão de volta para a seguradora. Confirme na janela.
3. Ao final, o sistema mostra uma mensagem de sucesso ou de falha.

## Erros comuns e como evitar

- **Consultar sem escolher o serviço:** o sistema avisa "Selecione um serviço". Escolha Azul, Porto, Youse ou Suhai antes.
- **"Falha ao processar os dados do login e senha":** a credencial do serviço não está no padrão `login::senha`. Acione o suporte para corrigir a configuração.
- **Disparar arrematantes/vendas sem leilão:** o sistema avisa "Selecione um leilão". Escolha o **Leilão destino** antes.
- **Esperar que "Atualizar inventário" use o leilão:** ela não usa — sincroniza os bens em estoque do comitente Porto. Não selecione leilão esperando que o inventário fique restrito a ele.

## Dicas e observações
- O botão **Atualizar inventário** fica desabilitado até você selecionar um serviço no topo da tela.
- As ações **Atualizar arrematantes** e **Atualizar vendas** exigem que você escolha o **Leilão destino** antes; senão o sistema avisa.
- O painel de disponibilidade é só informativo — ele não bloqueia a consulta, mas indica quando vale a pena tentar.
- Relacionar bens já relacionados não duplica: o sistema casa pelo veículo (placa/chassi) e apenas cria/atualiza o lote.
- Esta é uma tela técnica de operação com seguradoras; o acesso normalmente é restrito a quem opera a integração (permissões específicas de integração Grupo Porto).

## Veja também
- [Resale](./integra-resale.md)
- [Santander Imóveis](./integra-santander-imoveis.md)
- [Detran PB](./integra-detranpb.md)
