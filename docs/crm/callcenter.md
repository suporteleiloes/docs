---
title: Callcenter
sidebar_position: 4
---

# Callcenter

O Callcenter mostra, **ao vivo**, as ligações telefônicas chegando à leiloeira. Para cada chamada o sistema tenta identificar quem está ligando pelo número e permite iniciar o atendimento — vinculando a chamada a uma pessoa já cadastrada ou cadastrando um novo contato na hora.

## Como acessar

**CRM** → **Callcenter**.

![Callcenter](/img/manual/crm/callcenter.png)

## Pré-requisitos

- **Integração de telefonia (VoIP) ativa**: as ligações só aparecem aqui se a sua central telefônica estiver integrada e enviando os eventos de chamada para o sistema. Sem a integração, a tela fica em "Nenhuma ligação até o momento" — não é erro.
- **Permissão de Gestão** (`gestao/pessoa/call`, exibida como "Chamada Pessoal"): sem ela, a tela não carrega. Fale com quem administra os perfis de acesso na sua leiloeira.

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

## Regras de negócio

- **Identificação automática pelo número**: ao tocar, o sistema procura o número (telefone) entre as pessoas cadastradas. O resultado classifica a chamada em três situações: nenhuma pessoa (nova), uma pessoa (identificada) ou várias pessoas (duplicada). Por isso vale a pena manter os telefones das pessoas atualizados e sem duplicidade no cadastro.
- **Cadastro na hora cria uma Pessoa real**: ao digitar um nome em "Cadastrar chamador" e iniciar o atendimento, é criada uma pessoa nova no CRM já vinculada à ligação — não é um registro temporário.
- **Mesma base do botão "Chamada" da pessoa**: o Callcenter usa a mesma engine de chamadas do cadastro de pessoas; o histórico da ligação fica associado à pessoa atendida.

## Erros comuns

- **A tela fica sempre vazia**: quase sempre é a integração de telefonia não configurada (ou parada), não um problema do CRM. Confirme a integração antes de abrir chamado.
- **Iniciar atendimento sem identificar**: o sistema bloqueia e pede para escolher a pessoa ou digitar um nome — escolha a opção correta na lista quando o número for duplicado, para não atender a pessoa errada.

## Dicas e observações

- A tela é apenas de monitoramento ao vivo: não há cadastro manual de ligações nem filtros. As chamadas aparecem automaticamente conforme entram e atualizam a cada 2 segundos.
- Acesso exige o perfil de Gestão (permissão `gestao/pessoa/call`) e depende da integração de telefonia estar ativa.

## Veja também

- [Negócios](negocios.md)
