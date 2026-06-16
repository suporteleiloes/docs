---
title: Callcenter
sidebar_position: 4
---

# Callcenter

O Callcenter mostra, **ao vivo**, as ligações telefônicas chegando à leiloeira. Para cada chamada o sistema tenta identificar quem está ligando pelo número e permite iniciar o atendimento — vinculando a chamada a uma pessoa já cadastrada ou cadastrando um novo contato na hora.

## Como acessar

**CRM** → **Callcenter**.

![Callcenter](/img/manual/crm/callcenter.png)

## O que você vê nesta tela

No topo, o indicador **Ao vivo · atualiza 2s** mostra que a tela se atualiza sozinha a cada 2 segundos.

Logo abaixo, quatro indicadores (KPIs):

| Indicador | O que é |
|---|---|
| Chamadas ativas | Total de ligações em andamento agora |
| Novas (não identificadas) | Chamadas cujo número não bateu com nenhum cadastro |
| Identificadas | Chamadas associadas a exatamente uma pessoa |
| Duplicadas | Chamadas cujo número aparece em mais de um cadastro |

### Lista "Chamadas em andamento"

Cada linha traz o **número** que está ligando e o status de identificação:

- **Chamador não encontrado** — número desconhecido. Aparece um campo para cadastrar o nome.
- Nome em destaque — pessoa identificada (uma só).
- Lista de opções — quando o número está em mais de um cadastro, escolha qual pessoa é a correta.

À direita ficam as ações e a etiqueta de status da chamada.

## O que dá pra fazer aqui

### Atender uma chamada identificada

Quando o sistema já encontrou uma pessoa, basta clicar em **Iniciar atendimento**.

### Atender uma chamada com várias pessoas (duplicada)

1. Selecione, na lista de opções, qual pessoa corresponde ao chamador.
2. Clique em **Iniciar atendimento**.

### Atender uma chamada de número desconhecido

1. Digite o nome do chamador no campo **Cadastrar chamador**.
2. Clique em **Iniciar atendimento**. O contato é cadastrado e vinculado à ligação.

> Se você clicar em **Iniciar atendimento** sem escolher uma pessoa nem digitar um nome, o sistema avisa que é preciso identificar o chamador.

## Dicas e observações

- A tela é apenas de monitoramento ao vivo: não há cadastro manual de ligações nem filtros. As chamadas aparecem automaticamente conforme entram.
- Acesso exige o perfil de Gestão (permissão `gestao/pessoa/call`) e depende da integração de telefonia estar ativa.

## Veja também

- [Negócios](negocios.md)
