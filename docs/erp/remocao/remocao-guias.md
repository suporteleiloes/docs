---
title: GRV / GGV
sidebar_position: 11
---

# GRV / GGV

Esta tela gerencia as guias do pátio: a **GRV** (Guia de Remoção de Veículo), emitida quando o bem é removido e dá entrada no pátio, e a **GGV** (Guia de Guarda de Veículo), emitida na guarda/saída e que registra se o bem está conforme a vistoria de entrada. Aqui você também define o padrão de numeração dessas guias.

## Como acessar
**Remoção** → **Pátio** → **GRV / GGV**.

![GRV / GGV](/img/manual/erp/remocao-guias.png)

## O que você vê nesta tela
A tela tem três abas:

- **GRV — Remoção**: lista das guias de remoção geradas.
- **GGV — Guarda**: lista das guias de guarda geradas.
- **Numeração**: configuração do padrão de numeração das guias.

O botão do topo muda conforme a aba: **Gerar GRV** na primeira aba e **Gerar GGV** na segunda.

### Aba GRV — Remoção

| Coluna | O que é |
|---|---|
| Número | Número da guia, conforme o padrão configurado. |
| Bem | Descrição do bem removido. |
| Motorista | Motorista responsável pela remoção. |
| Gerada | Data de geração da guia. |

### Aba GGV — Guarda

| Coluna | O que é |
|---|---|
| Número | Número da guia de guarda. |
| Bem | Descrição do bem. |
| Conforme | Indica se o bem está **Conforme** (sem divergências) ou **Divergente** em relação à vistoria de entrada. |
| GRV | Número da GRV relacionada (ou um traço). |
| Gerada | Data de geração. |

## O que dá pra fazer aqui

### Gerar uma GRV (remoção)
1. Na aba **GRV — Remoção**, clique em **Gerar GRV**.
2. Em **Bem**, busque pela placa ou descrição.
3. Em **Vistoria a vincular**, escolha a vistoria do bem (carregada automaticamente quando o bem é selecionado) ou deixe sem vistoria.
4. Selecione o **Motorista** responsável.
5. Preencha **Observações**, se necessário.
6. Clique em **Gerar GRV**. O sistema exibe o número da guia gerada.

![Gerar GRV](/img/manual/erp/remocao-guias-grv.png)

### Gerar uma GGV (guarda) e comparar vistorias
1. Na aba **GGV — Guarda**, clique em **Gerar GGV**.
2. Em **Bem**, busque pela placa ou descrição.
3. Em **Vistoria de SAÍDA**, escolha a vistoria que será vinculada à GGV.
4. Em **Vistoria de ENTRADA (GRV)**, escolha a vistoria feita na entrada, para servir de comparação.
5. Clique em **Comparar entrada × saída**. O sistema compara as duas vistorias, marca automaticamente se está **Conforme** e preenche o campo de **Divergências** com o que mudou (de → para).
6. Selecione o **Pátio**.
7. Revise o indicador **Conforme** e o texto de **Divergências** (você pode ajustar manualmente).
8. Clique em **Gerar GGV**.

![Gerar GGV](/img/manual/erp/remocao-guias-ggv.png)

### Configurar a numeração das guias
1. Vá até a aba **Numeração**.
2. Em **GRV** e **GGV**, edite o modelo do número usando os tokens disponíveis: `{SEQ}`, `{SEQ:6}` (preenche com zeros à esquerda), `{ANO}`, `{MES}`, `{SIGLAPATIO}`, `{CODPATIO}`, `{CODCONTRATO}`.
3. Ligue **Somente números (0-9)** se quiser que o número final tenha apenas dígitos.
4. Clique em **Pré-visualizar** para ver um exemplo do número que será gerado.
5. Clique em **Salvar** na linha correspondente.

![Numeração de guias](/img/manual/erp/remocao-guias-numeracao.png)

## Dicas e observações
- O **Bem** é obrigatório para gerar qualquer guia; sem ele, o botão fica bloqueado.
- A comparação entre vistorias só funciona se você escolher tanto a vistoria de entrada quanto a de saída.
- A numeração também pode ser acessada a partir do atalho **Numeração GRV/GGV** na tela de Configurações do Pátio.

## Veja também
- [Saídas do Pátio](../remocao/remocao-saidas.md)
- [Configurações do Pátio](../remocao/remocao-configuracoes.md)
- [Vistoriadores](../remocao/remocao-vistoriadores.md)
