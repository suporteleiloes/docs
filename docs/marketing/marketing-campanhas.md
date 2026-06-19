---
title: Campanhas
sidebar_position: 2
---

# Campanhas

A tela de Campanhas lista todas as campanhas de marketing (e-mail, WhatsApp, SMS e voz). É daqui que você cria, edita, testa, dispara e acompanha o desempenho de cada uma.

## Como acessar

**Marketing** → **Campanhas**.

![Campanhas](/img/manual/marketing/marketing-campanhas.png)

## O que você vê nesta tela

No topo aparecem avisos de entregabilidade (quando há pendência na autenticação de e-mail) e, quando aplicável, um aviso de saúde de envio. Logo abaixo há abas por status, um eventual aviso de limite de uso e a tabela de campanhas.

### Abas (filtro por status)

| Aba | Mostra |
|---|---|
| Ativas | Campanhas em rascunho, preparando, prontas ou em andamento |
| Rascunho | Campanhas ainda não finalizadas |
| Preparando | Campanhas montando a lista de inscritos |
| Pronto p/ envio | Campanhas prontas para disparar |
| Em andamento | Campanhas sendo enviadas no momento |
| Concluídas | Campanhas já finalizadas |

O número ao lado da aba ativa indica quantas campanhas existem naquele filtro.

### Colunas da tabela

| Coluna | O que é |
|---|---|
| # | Número (ID) da campanha |
| Campanha | Nome e, abaixo, o assunto do e-mail |
| Canal | E-mail, WhatsApp, SMS ou Voz |
| Inscritos | Quantos contatos vão receber a campanha |
| Enviados | Quantos envios já saíram |
| Abertos | Quantos abriram, com o percentual entre parênteses |
| Cliques | Quantos clicaram, com o percentual entre parênteses |
| Status | Situação atual da campanha |
| Início | Data de início / agendamento |

### Aviso de limite de uso

Quando o seu plano tem um teto de envios de e-mail por período (por hora, dia, semana ou mês), aparece uma barra mostrando o quanto já foi usado e a data de renovação. Quando o uso chega perto do limite, o aviso fica destacado em amarelo.

## O que dá pra fazer aqui

### Filtrar e buscar

- Use as **abas** para ver campanhas de um status específico.
- Use o campo **Buscar campanha...** para procurar pelo nome.

### Criar uma nova campanha

1. Clique em **Nova campanha**.
2. O assistente de criação abre por cima desta tela. Veja o passo a passo em [Nova campanha](marketing-campanhas-nova.md).

### Ações de cada campanha

Cada linha tem botões de ação no fim (passe o mouse para ver o nome de cada um):

- **Ver inscritos** — abre a lista de contatos da campanha (veja abaixo).
- **Importar lista (CSV)** — adiciona contatos à campanha a partir de um arquivo CSV (colunas nome e e-mail ou telefone).
- **Enviar teste** — disponível em rascunhos/preparando/prontas; envia uma cópia para um e-mail (ou número de WhatsApp) seu, para conferência.
- **Disparar campanha** — botão verde, disponível quando a campanha está "Pronto p/ envio"; envia para todos os inscritos.
- **Atualizar inscritos** — recalcula a lista de destinatários a partir dos critérios definidos (lista, leilão, segmento). Use quando o público-alvo mudou.
- **Editar** — abre o assistente para alterar a campanha.
- **Marcar como concluída** — fecha a campanha (disponível enquanto não estiver concluída).
- **Excluir** — apaga a campanha definitivamente.

### Enviar um teste

1. Clique no ícone **Enviar teste** na linha da campanha.
2. Para e-mail, digite o **e-mail de destino**. Para WhatsApp, digite **DDD + número** (sem o +55).
3. Clique em **Enviar**. Confira a caixa de entrada / o WhatsApp informado.

### Disparar a campanha

1. Com a campanha em "Pronto p/ envio", clique no botão verde **Disparar campanha**.
2. Confirme — a mensagem mostra para quantos inscritos será enviada. Essa ação não pode ser desfeita.
3. Se a campanha já tiver sido liberada antes, o sistema pergunta se você quer **forçar um novo disparo**.

> Observação: se o canal for WhatsApp e ele ainda não estiver configurado, o sistema oferece um atalho para a tela de configuração do WhatsApp.

### Importar contatos por CSV

1. Clique no ícone **Importar lista (CSV)** na linha da campanha.
2. Escolha um arquivo `.csv` (ou `.txt`) com colunas **nome** e **email** (ou **telefone**). A primeira linha pode ser o cabeçalho.
3. O sistema importa os contatos e atualiza os números da campanha.

### Ver e gerenciar inscritos

1. Clique no ícone **Ver inscritos**.
2. No alto, veja o total de inscritos e a faixa exibida na página atual.
3. Use os filtros (Enviados, Não enviados, Desinscritos, Lidos, Clicados) e o campo de busca para encontrar contatos.
4. Para cada inscrito você vê o nome, o contato e os números de envios, leituras e cliques, além de um selo (Pendente, Enviado ou Desinscrito).
5. Botões por inscrito:
   - **Enviar manualmente** — dispara a campanha só para aquele contato.
   - **Remover inscrição** — tira o contato da campanha.
6. Clique em **Pré-visualizar** para ver, dentro do próprio modal, como o e-mail vai aparecer.

## Regras de negócio

- **Status da campanha.** Os status possíveis são: **Rascunho**, **Preparando**, **Pronto para envio**, **Em andamento**, **Pausado**, **Cancelado** e **Concluído**. As abas filtram pelos principais; Pausado e Cancelado podem aparecer no detalhe de uma campanha.
- **Preparação automática.** Ao abrir uma campanha que ainda não foi preparada (ou ao usar **Atualizar inscritos**), o sistema entra em **Preparando** e monta a lista de destinatários a partir dos critérios definidos. Só depois disso ela fica **Pronto p/ envio**.
- **Disparo exige status correto.** O botão verde **Disparar campanha** só aparece quando a campanha está em **Pronto p/ envio** (status 2). O **Enviar teste** está disponível em rascunho, preparando e pronto (status 0, 1 e 2).
- **Re-disparo controlado.** Se a campanha já foi liberada antes, disparar de novo exige confirmar **Forçar novo disparo** — evita reenvio acidental para quem já recebeu.
- **Editar volta para Pronto p/ envio.** Salvar uma edição recoloca a campanha em **Pronto p/ envio** (exceto se já estiver Em andamento ou Concluída) e reaplica o conteúdo novo às mensagens ainda pendentes.
- **Descadastro do destinatário.** Cada e-mail traz o link de descadastro (`{{ unsub }}`). Quem se descadastra entra no filtro **Desinscritos** e deixa de receber; há reinscrição self-service caso tenha sido engano. O descadastro de um clique (one-click do Gmail/Yahoo) também é respeitado.
- **Permissões.** Criar, editar, disparar e excluir campanhas exigem as permissões correspondentes de Marketing. Sem elas, os botões não funcionam.

## Erros comuns

- **Botão Disparar não aparece**: a campanha não está em **Pronto p/ envio**. Abra-a (para preparar) ou use **Atualizar inscritos** e aguarde sair de **Preparando**.
- **Teste sem destino**: ao enviar teste é obrigatório informar o e-mail (ou DDD + número para WhatsApp).
- **Disparo sem efeito por limite de plano**: se o **aviso de limite de uso** estiver no topo, você pode ter atingido o teto de envios do período. Aguarde a renovação ou ajuste o plano.

## Dicas e observações

- O assistente abre automaticamente se você chegar pelo atalho **Nova campanha** do Painel ou pelo endereço `/marketing/campanhas/nova`.
- Excluir uma campanha apaga todos os seus dados, sem recuperação.
- Usuários com perfil **root** veem o botão **Liberar campanha**, que permite disparar uma campanha em um cliente específico. Operadores comuns não veem esse botão.
- As taxas de abertura e clique aparecem entre parênteses ao lado dos números absolutos.

## Veja também

- [Nova campanha](marketing-campanhas-nova.md)
- [Listas de contatos](marketing-listas.md)
- [Remetentes](marketing-remetentes.md)
- [Painel de Marketing](marketing.md)
