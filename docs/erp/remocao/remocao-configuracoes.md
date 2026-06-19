---
title: Configurações do Pátio
sidebar_position: 12
---

# Configurações do Pátio

Esta tela reúne as configurações do módulo de Pátio. Aqui você gerencia os **tipos de taxa** aplicáveis às estadias e encontra atalhos para as demais configurações relacionadas (vistorias, numeração de guias e contratos).

## Como acessar
**Remoção** → **Pátio** → **Configurações do Pátio**.

![Configurações do Pátio](/img/manual/erp/remocao-configuracoes.png)

## O que você vê nesta tela
A tela é dividida em um menu lateral e a área de conteúdo:

- **Tipos de taxa** (aberto por padrão): lista as taxas extras configuráveis.
- **Vistorias / Checklist**: atalho para o módulo de Vistorias.
- **Numeração GRV/GGV**: atalho para a aba de numeração na tela de guias.
- **Contratos & preços**: atalho para a tela de contratos do pátio.

Na seção **Tipos de taxa**, a lista tem estas colunas:

| Coluna | O que é |
|---|---|
| Taxa | Nome da taxa. |
| Código | Código interno da taxa. |
| Cálculo | Forma de cálculo: Valor fixo (R$), Por Km (R$/km) ou Percentual (%). |
| Valor padrão | Valor sugerido para a taxa (pode ficar em branco). |
| Ativo | Se a taxa está disponível para uso. |

## O que dá pra fazer aqui

### Cadastrar uma taxa
1. Clique em **Nova taxa**.
2. Preencha o **Nome da taxa** (obrigatório). Exemplos: km, administrativa, guincho, vistoria, limpeza.
3. Escolha o **Tipo de cálculo**: Valor fixo, Por Km ou Percentual.
4. Informe o **Valor padrão**, se quiser sugerir um valor (opcional).
5. Clique em **Salvar**.

O **Código** não é digitado nesta tela: ao salvar uma taxa nova, o sistema gera o código automaticamente a partir do nome (em letras minúsculas, sem acentos e com `_` no lugar de espaços — ex.: "Taxa de limpeza" vira `taxa_de_limpeza`). Esse código é o identificador interno usado quando a taxa é aplicada a uma estadia.

![Nova taxa](/img/manual/erp/remocao-configuracoes-nova.png)

### Editar uma taxa
Na linha da taxa, clique no ícone de lápis (**Editar**), ajuste os campos e clique em **Salvar**.

### Remover uma taxa
Na linha da taxa, clique no ícone de lixeira (**Remover**) e confirme. A remoção pede confirmação antes de ser concluída.

### Acessar as outras configurações
Use o menu lateral para ir aos atalhos:
- **Vistorias / Checklist**: os formulários de vistoria/checklist (dinâmicos, por tipo de bem) são gerenciados no módulo de Vistorias.
- **Numeração GRV/GGV**: leva à aba de numeração da tela de guias.
- **Contratos & preços**: leva à tela de contratos do pátio.

## Regras de negócio
- As taxas configuradas aqui ficam disponíveis para serem aplicadas às estadias (como ajustes/taxas extras no cálculo do custo da estadia e, depois, no recibo de saída).
- Por padrão, a lista mostra **apenas taxas ativas**. Ao **remover** uma taxa, ela é marcada como inativa (remoção lógica) e some da lista, mas o histórico das estadias que já a usaram é preservado.
- O **Tipo de cálculo** define como o valor é apurado quando a taxa é aplicada: **Valor fixo** (um valor em reais), **Por Km** (valor por quilômetro, multiplicado pela distância) ou **Percentual** (uma porcentagem sobre a base).
- O **Valor padrão** é só uma sugestão preenchida automaticamente ao aplicar a taxa; você pode ajustá-lo no momento do uso na estadia.
- Os formulários de checklist não são criados nesta tela: use o módulo de **Vistorias** (link no rodapé da seção ou no menu lateral).

## Veja também
- [GRV / GGV](../remocao/remocao-guias.md)
- [Saídas do Pátio](../remocao/remocao-saidas.md)
- [Vistoriadores](../remocao/remocao-vistoriadores.md)
