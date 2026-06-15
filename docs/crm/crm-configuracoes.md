---
title: Configurações do CRM
sidebar_position: 2
---

# Configurações do CRM

A tela de Configurações concentra, em um só lugar, os ajustes do módulo CRM. Em vez de várias telas separadas, tudo fica em uma página com um menu lateral interno — você clica na seção desejada à esquerda e o conteúdo aparece à direita.

## Como acessar

**CRM** → **Configurações** (rota `/crm/configuracoes`).

![Configurações do CRM](/img/manual/crm/crm-configuracoes.png)

## O que você vê nesta tela

À esquerda há um menu lateral com as seções; à direita, o conteúdo da seção selecionada. Ao abrir, a seção **Visão geral** já vem carregada.

| Seção | O que mostra |
|---|---|
| Visão geral | Cartões com totais: templates, automações, automações ativas, campos dinâmicos e flags de ACL do CRM |
| Etapas de funil | Lista dos funis e suas etapas, com a probabilidade (%) de cada etapa |
| Campos dinâmicos | Lista dos campos extras de Pessoa, com tipo e marcações de "obrigatório" / "inativo" |
| Tags | Etiquetas disponíveis para classificar pessoas |
| Preferências | Preferências gerais do módulo |
| Avisos proativos | Configuração dos avisos automáticos exibidos aos operadores |
| Papéis e ACL | Tabela de flags de permissão do CRM, com descrição de cada uma |
| Aprovações | Lista dos campos críticos que exigem aprovação ao serem alterados |
| Automações globais | Tabela de automações com nome, gatilho, estado (Ativa/Inativa/DRY) e quota de mensagens |
| Integrações | Situação das integrações externas (status e observações) |

## O que dá pra fazer aqui

### Navegar entre as seções

1. Clique em uma das opções no menu lateral esquerdo.
2. O conteúdo carrega à direita. Seções já visitadas ficam em cache e abrem na hora.

### Conferir os totais do módulo

Na **Visão geral**, os cartões dão um panorama rápido: quantos templates e automações existem, quantas automações estão ativas, quantos campos dinâmicos estão em uso e quantas flags de ACL o CRM possui.

### Entender o funil

Em **Etapas de funil**, cada funil aparece com suas etapas em ordem, junto da probabilidade de conversão associada a cada etapa.

### Saber quais campos exigem aprovação

Em **Aprovações**, você vê a lista de campos considerados críticos — alterações neles passam por fluxo de aprovação.

## Dicas e observações

- Algumas seções têm telas próprias mais completas, acessadas por links de menu separados: **Campos dinâmicos**, **Brand Kit**, **Cadastro público**, **Integrações** e **Chatbot**. Veja os links abaixo.
- A seção **Papéis e ACL** é informativa: mostra quais permissões existem no CRM e o que cada uma libera.
- Esta tela é majoritariamente de **consulta** — a edição detalhada de cada item acontece nas telas específicas.

## Veja também

- [Campos dinâmicos](./crm-configuracoes-campos-dinamicos.md)
- [Brand Kit](./crm-configuracoes-brand-kit.md)
- [Cadastro público (links)](./crm-configuracoes-cadastro-publico.md)
- [Integrações externas](./crm-configuracoes-integracoes-config.md)
- [Chatbot / Agente IA](./crm-configuracoes-chatbot.md)
