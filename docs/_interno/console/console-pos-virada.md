---
title: Pós-virada (acompanhamento do cliente)
sidebar_position: 3
---

# Pós-virada — acompanhamento do cliente

A virada técnica (migrar → homologar → promover) já tem roteiro no [guia de Migração](./console-migracao-operador.md). Esta página cobre o **outro lado**: a comunicação com o cliente, para ele não ficar "solto" depois da virada — sem saber como pedir ajuda, sem acesso ao portal de chamados e sem conhecer o que ganhou com o ERP novo.

## Como acessar

**Console** → **Migração** → botão **Pós-virada** na linha do cliente (aparece em clientes em **Homologação** e em **Produção**). O contador ao lado (`4/9`) mostra quantos itens do checklist estão feitos.

![Painel Pós-virada](/img/manual/console/pos-virada-painel.jpg)

Permissões:

| Permissão | O que libera |
|---|---|
| `gerencia/console/tenant/migracao/l` (ver migração) | Ver o painel |
| `gerencia/console/tenant/migracao/pos-virada` (nova) | Marcar itens, liberar acessos, enviar boas-vindas e pesquisa, ligar o aviso no ERP |

ROOT, SUPER_ADMIN e ADMIN da gerência já passam.

## O checklist

São 9 itens em três fases. Os marcados como **automático** o sistema conclui sozinho; os outros você marca com **Marcar feito** (pode deixar uma observação, ex.: "falei com a Maria, tudo certo"). Itens com prazo vencido ficam com a etiqueta **atrasado**. Os prazos contam a partir da data do **Promover**.

| Fase | Item | Como conclui | Prazo |
|---|---|---|---|
| Antes da virada | Lista da equipe e papéis recebida do cliente | Manual | — |
| Antes da virada | Acessos ao Portal de Chamados liberados | **Automático**: há pelo menos 1 acesso ativo | dia da virada |
| No dia | E-mail de boas-vindas pós-virada enviado | **Automático**: botão *Enviar e-mail de boas-vindas* | dia da virada |
| No dia | Boas-vindas ligado dentro do ERP do cliente | **Automático**: ligado junto com o e-mail (ou pelo botão *Ligar*) | dia da virada |
| No dia | Teste pós-virada rodado e resultado enviado | Manual | dia da virada |
| No dia | Grupo de WhatsApp de suporte com o bot | Manual | D+1 |
| Acompanhamento | Contato no dia seguinte (D+1) | Manual | D+1 |
| Acompanhamento | Contato no 7º dia (D+7) | Manual | D+7 |
| Acompanhamento | Pesquisa de satisfação respondida | **Automático**: quando o cliente responde | D+10 |

## Roteiro recomendado

### Antes da virada (durante a homologação)

1. Peça ao cliente a **lista da equipe**: nome, e-mail, celular e papel de quem usa o ERP e de quem vai abrir chamados. Marque o item.
2. Em **Acessos ao Portal de Chamados**, preencha nome, e-mail, celular e papel de cada pessoa e clique **Liberar acesso**. Cada uma recebe um e-mail com o link para definir a senha do portal (`conta.suporteleiloes.com.br`).

### No dia da virada (logo depois do Promover)

3. Clique **Enviar e-mail de boas-vindas**. Ele vai para todos os acessos ativos do portal (e para os e-mails extras que você digitar) com:
   - os endereços do ERP, do painel do arrematante e do site;
   - como abrir chamado e o lembrete de "Esqueci minha senha";
   - o link do [guia dos primeiros dias](/docs/primeiros-passos/bem-vindo-novo-erp) e do PDF.

   O mesmo clique **liga o "Bem-vindo ao novo ERP"** dentro do ERP do cliente: cada usuário vê um guia de 4 passos na primeira vez que entra (endereços, onde ficou cada coisa, novidades e como abrir chamado).
4. Rode o **teste pós-virada** (`scripts/pos-virada/teste.mjs` no api-v2) e mande o relatório ao cliente. Marque o item.
5. Crie o **grupo de WhatsApp** com o cliente e o número do bot (Console → Grupos WhatsApp). Marque o item.
6. Em **Mensagem pronta para o WhatsApp**, copie o texto e mande no grupo. Ele não leva senha nenhuma.

### Acompanhamento

7. **D+1**: ligue ou mande mensagem — conseguiram entrar? Alguma dúvida? Anote na observação e marque.
8. **D+7**: revise os chamados da semana, fale com o cliente e clique **Enviar por e-mail aos acessos** na pesquisa. Marque o contato.
9. Quando o cliente responder, a nota e o comentário aparecem no painel e o item fica concluído sozinho.

## Regras e detalhes

- **O aviso no ERP do cliente** é a configuração `erp.posVirada.ativo` no banco do cliente. Dá para desligar a qualquer momento pelo botão **Desligar** do painel. Cliente novo (que não veio do sistema antigo) nunca recebe esse aviso.
- Com o aviso ligado, o **assistente de primeira configuração não abre sozinho** para o cliente migrado — ele já vem configurado do sistema antigo e o assistente o confundia. O assistente continua disponível no menu do perfil.
- O botão **Abrir chamado com a Suporte Leilões** (menu **?** do ERP) aparece para **todo** leiloeiro, migrado ou não. Ele abre `conta.suporteleiloes.com.br/suporte?novo=1`; se a pessoa não estiver logada no portal, depois do login ela volta direto para o formulário de chamado.
- **Pesquisa**: o link é público, com um código aleatório, e aceita **uma resposta só**. Ele é servido pelo ERP da gerência (`erp.suporteleiloes.com.br/pesquisa-virada/...`). A pessoa responde uma nota de 0 a 10 e, se quiser, um comentário e o nome.
- O e-mail de boas-vindas pode ser **reenviado** (por exemplo, depois de liberar mais acessos). Cada envio fica registrado na auditoria de comunicação do cliente.

## Erros comuns

| Situação | O que fazer |
|---|---|
| "Nenhum destinatário" ao enviar as boas-vindas | Libere pelo menos um acesso ao portal ou informe e-mails extras. |
| "Sem acesso ao banco do cliente" no aviso do ERP | O Console não conseguiu abrir o banco do cliente. Confira o servidor do cliente em **Clientes** e tente de novo; o e-mail é enviado mesmo assim. |
| Cliente diz que não recebeu o e-mail do portal | Peça para usar **Esqueci minha senha** em `conta.suporteleiloes.com.br`. Confira também se o e-mail cadastrado no acesso está certo. |
| Cliente não vê o "Bem-vindo ao novo ERP" | Confirme que o aviso está **ligado** no painel. Cada pessoa vê uma vez por navegador; depois disso, o guia fica em **? → Bem-vindo ao novo ERP**. |

## Veja também

- [Migração de Clientes (operador)](./console-migracao-operador.md)
- [Bem-vindo ao novo ERP (manual do cliente)](/docs/primeiros-passos/bem-vindo-novo-erp)
