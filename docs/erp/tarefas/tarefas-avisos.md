---
title: Avisos automáticos e relatório semanal
sidebar_position: 5
---

# Avisos automáticos e relatório semanal

Além das notificações dentro do sistema, o módulo de Tarefas envia **e-mails automáticos** para manter o time em dia com os prazos e dar uma visão semanal do que foi entregue. Tudo funciona sozinho, sem ninguém precisar disparar nada.

## Aviso de prazo (perto de vencer / vencida)

Todo dia, pela manhã, o sistema verifica as tarefas em aberto e envia um e-mail aos **responsáveis** (e ao autor) quando uma tarefa:

- está **perto de vencer** (dentro da janela de prazo configurada), ou
- já **venceu** e continua em aberto.

Características:

- O aviso é enviado **uma vez** por situação — você não recebe o mesmo lembrete repetido todo dia.
- Só entram tarefas **ativas** (não concluídas, não excluídas) e que tenham **prazo (Data de entrega)** preenchido.
- Tarefas sem prazo não geram aviso. Se quiser ser avisado, preencha a **Data de entrega** na tarefa.

## Relatório semanal de concluídas

Uma vez por semana (segunda de manhã), o sistema gera uma **planilha Excel** com as tarefas **concluídas nos últimos 7 dias** e a envia por e-mail aos responsáveis. É um resumo rápido do que o time entregou na semana, pronto para arquivar ou compartilhar.

## Pré-requisito: e-mail remetente configurado

Para que esses e-mails saiam, a sua conta precisa ter um **e-mail remetente padrão** configurado. Essa configuração é feita pela **Suporte Leilões** (ou pelo administrador da conta) nas configurações de e-mail do sistema.

- Se o remetente **não** estiver configurado, os avisos simplesmente **não são enviados** (o sistema não acusa erro para o usuário).
- Em caso de dúvida sobre se a sua conta já está com o envio ativo, fale com o suporte.

## Dicas e observações

- Quem deve receber os avisos? Os **responsáveis** pela tarefa. Garanta que as pessoas certas estejam na lista de **Responsáveis** (veja [Detalhe da tarefa](./tasks-id.md)).
- O aviso de prazo depende da **Data de entrega** — sem ela, não há como o sistema saber que a tarefa está atrasada.
- Para acompanhar atualizações de uma tarefa específica (comentários, mudanças de status), use o botão **Seguir** na tarefa.

## Veja também

- [Tarefas (lista)](./sl-tarefas.md)
- [Detalhe da tarefa](./tasks-id.md)
- [Configurações de Tarefas](./sl-tarefas-config.md)
