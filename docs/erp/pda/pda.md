---
title: PDA — Coletor de inventário
sidebar_position: 1
---

# PDA — Coletor de inventário

O **PDA** (Ponto de Atendimento) é a área do ERP feita para você operar de pé, com um coletor de código de barras ou pelo celular/tablet. Esta tela é o **coletor de inventário**: você lê (ou digita) o código de cada bem e marca, na hora, como ele foi encontrado — conferido, avariado, em local errado etc. Tudo fica registrado numa **sessão** de conferência.

:::caution Funcionalidade em implantação
O coletor de inventário (esta tela e a de [Configurar inventário](./pda-config.md)) já está disponível na interface, mas o registro das conferências depende de um serviço de backend que ainda está em implantação. Enquanto isso, a busca de bem, o registro da conferência e o relatório da sessão podem não responder. As demais telas do PDA — [Atendimento ao arrematante](./pda-atendimento.md), [Pagamento](./pda-pagamento.md), [Pesquisa de lote](./pda-pesquisa-lote.md) e [Atendimento no leilão](./pda-leilao.md) — operam normalmente.
> A confirmar com o time: data de disponibilização do backend de inventário.
:::

## Como acessar

Esta tela abre automaticamente depois que você inicia uma conferência em **PDA → Configurar inventário**. Se você entrar direto nela sem ter configurado uma sessão, o sistema te leva de volta para a tela de configuração.

![Coletor de inventário](/img/manual/erp/pda.png)

## O que você vê nesta tela

A tela é dividida em quatro partes, de cima para baixo:

| Área | O que é |
|---|---|
| Cabeçalho | Mostra o contexto da conferência (nome do pátio, ou "Leilão #..." quando você escolheu um leilão) e o nome do operador. À direita aparece o contador de **conferidos** e o botão **Relatório**. |
| Campo de leitura | A barra grande no topo, onde você lê ou digita o código do bem. |
| Painel do bem | Aparece logo abaixo, só depois de o sistema encontrar o bem. Mostra os dados do bem e os botões de status. |
| Últimos conferidos | A lista dos últimos 10 bens conferidos nesta sessão, com status e horário. |

Ao encontrar o bem, o painel mostra: o **código/identificador**, o **tipo**, a **descrição** e, quando houver, o **pátio**, o **local** e a **placa**.

## O que dá pra fazer aqui

### Conferir um bem

1. Posicione o cursor no campo de leitura (ele já fica em foco ao abrir a tela).
2. Leia o código com o coletor **ou** digite o código e tecle **Enter** (ou clique na lupa).
3. O sistema busca o bem. Se encontrar, abre o painel com os dados dele. Se não encontrar, aparece a mensagem "Bem ... não encontrado no sistema".
4. Escolha um dos quatro botões de status:
   - **Conferido** — o bem está no local e em ordem.
   - **Não localizado** — o bem não foi encontrado.
   - **Avariado** — o bem está danificado. Ao escolher, aparece o campo **Observação** (obrigatório) — descreva a avaria.
   - **Em local errado** — o bem está em outro local. Ao escolher, aparece o campo **Local correto** — informe o **ID numérico** do local correto (o ID do Pátio/Local cadastrado no ERP, não o nome). Esse campo é opcional: você pode confirmar sem preenchê-lo.
5. Clique em **Confirmar conferência**. O bem entra no topo da lista "Últimos conferidos", o contador sobe e o campo de leitura volta a ficar pronto para o próximo.

Para descartar o bem que você acabou de ler sem registrar nada, clique em **Cancelar**.

### Ver o relatório da sessão

1. Clique em **Relatório** (no cabeçalho) ou em **Finalizar inventário** (rodapé).
2. Abre uma janela com o **total** conferido, a contagem por status e a lista completa de todos os bens da sessão.

Os dois botões abrem **o mesmo relatório**. Não existe um passo separado de "fechar" a sessão: o que **Finalizar inventário** faz é justamente abrir esse relatório. A sessão é identificada por um código gerado automaticamente; para começar outra conferência, volte para [Configurar inventário](./pda-config.md) e inicie uma nova.

## Dicas e observações

- Os botões de status são propositalmente grandes para você operar em pé, com o dedo ou com o coletor.
- O campo de leitura fica **bloqueado** enquanto o painel de um bem estiver aberto — confirme ou cancele antes de ler o próximo.
- A observação é **obrigatória** quando o status é **Avariado**; o botão de confirmar só libera depois de preenchê-la.
- A lista "Últimos conferidos" mostra apenas os **10 últimos**; o relatório traz a sessão inteira.
- O botão **Finalizar inventário** só fica ativo quando há ao menos uma conferência registrada.
- A seta de **voltar** (canto superior esquerdo) leva de volta para **Configurar inventário**.
- A lista "Últimos conferidos" e o contador valem **apenas para a sessão aberta na tela**: se você recarregar a página ou fechar o navegador, essa lista visível é reiniciada. Tire o relatório antes de sair se precisar do registro à mão.

## Erros comuns

- **"Bem ... não encontrado no sistema"** — o código lido não corresponde a nenhum bem. Confira se leu a etiqueta certa ou digite o código manualmente. Bens de outro cliente/tenant não aparecem.
- **Confirmar sem escolher status** — o botão **Confirmar conferência** só libera depois de você tocar em um dos quatro status.
- **Avaria sem observação** — ao marcar **Avariado**, a observação é obrigatória; o botão de confirmar fica bloqueado até você descrever a avaria.
- **Ler o próximo bem antes de confirmar** — o campo de leitura fica bloqueado enquanto o painel de um bem está aberto. Confirme ou cancele antes de ler o próximo.

## Veja também

- [Configurar inventário](./pda-config.md)
- [PDA — Atendimento ao arrematante](./pda-atendimento.md)
