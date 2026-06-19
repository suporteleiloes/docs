---
title: Dashboard de RH
sidebar_position: 1
---

# Dashboard de RH

O Dashboard de RH é a tela inicial do módulo de Recursos Humanos. Ela reúne, em um só lugar, os números que mais importam no dia a dia da gestão de pessoas da sua leiloeira: quantidade de colaboradores, situação dos pagamentos, distribuição por departamento, aniversariantes e os últimos eventos registrados.

## Como acessar

**ERP** → **RH** (o módulo abre direto no Dashboard).

![Dashboard de RH](/img/manual/erp/rh.png)

## O que você vê nesta tela

A tela é dividida em três partes: os cartões de indicadores no topo, dois quadros lado a lado (departamentos e aniversariantes) e a tabela de eventos recentes. Os números são atualizados automaticamente a cada minuto.

### Cartões de indicadores

| Cartão | O que mostra |
|---|---|
| Total de colaboradores | Quantidade total de colaboradores cadastrados |
| Ativos | Colaboradores com status Ativo |
| Inativos / desligados | Colaboradores com status Inativo ou Desligado, somados |
| Admissões (30 dias) | Quantas pessoas têm data de admissão dentro dos últimos 30 dias |
| Departamentos | Total de departamentos **ativos** cadastrados |
| Cargos | Total de cargos **ativos** cadastrados |
| Pagamentos pendentes | Quantidade de lançamentos a pagar e, abaixo, o valor total previsto |
| Pago no mês | Valor total já pago no mês corrente |

### Quadros

| Quadro | O que mostra |
|---|---|
| Colaboradores por departamento | Lista de departamentos com uma barra proporcional ao número de colaboradores em cada um |
| Aniversariantes do mês | Pessoas que fazem aniversário no mês, com o dia |

### Eventos recentes

Tabela com os **8 eventos mais recentes** registrados, trazendo o **Colaborador**, o **Tipo** (falta, atraso, férias, licença, afastamento, advertência, observação interna, avaliação, alteração salarial, bônus ou desconto), a **Data** e a **Descrição**. Para ver o histórico completo, use a tela de [Eventos](./rh-eventos.md) ou o relatório de Eventos.

## O que dá pra fazer aqui

### Ir para a lista de colaboradores

No topo da tela, clique em **Colaboradores** para abrir a lista completa de colaboradores, onde você cadastra, edita e consulta cada pessoa.

## Dicas e observações

- Os indicadores se atualizam sozinhos a cada 60 segundos; você não precisa recarregar a página.
- Os cartões "Pagamentos pendentes" e "Pago no mês" vêm do **Financeiro de RH**. Para entender ou quitar um pagamento, vá até a tela de Financeiro.
- O quadro **Colaboradores por departamento** considera apenas colaboradores **ativos**; quem ainda não tem departamento aparece como "Sem departamento".
- Os **Aniversariantes do mês** listam colaboradores com data de nascimento no mês corrente, exceto os desligados, ordenados por dia.
- Se um quadro aparecer vazio (por exemplo, "Ninguém faz aniversário este mês"), significa apenas que não há dados para o período, não que houve erro.
- O acesso ao Dashboard de RH exige a permissão **Dashboard de RH** (`rh/dashboard`). Se a tela não abrir, peça liberação ao administrador do sistema.

## Veja também

- [Colaboradores](./rh-colaboradores.md)
- [Eventos](./rh-eventos.md)
- [Financeiro de RH](./rh-financeiro.md)
