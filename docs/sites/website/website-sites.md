---
title: Sites
sidebar_position: 1
---

# Sites

Esta tela lista os sites públicos (portais de leilão) ligados à sua leiloeira e é onde você cadastra, configura, sincroniza e limpa o cache de cada um. As configurações feitas aqui (cores, logo, contatos, recursos ativos) são o que aparece no site que o arrematante acessa.

## Como acessar
No menu lateral, entre no setor **Sites** e clique em **Sites**.

![Sites](/img/manual/sites/website-sites.png)

## O que você vê nesta tela

No topo há a barra de busca e dois botões de ação. Logo abaixo, a tabela com os sites cadastrados.

| Coluna | O que é |
|---|---|
| **#** | Número (ID) do site no sistema. |
| **Nome** | Nome do site, como você o cadastrou. |
| **URL** | Endereço público do site. É um link: clique para abrir o site em uma nova aba. |
| **(ações)** | Botões de **Sincronizar**, **Editar** e **Excluir** para cada linha. |

Use o campo **Buscar nome ou URL...** para filtrar a lista. Você pode escolher exibir 20, 50 ou 100 sites por página.

## O que dá pra fazer aqui

- **Novo site** (botão azul no topo): cadastra um novo site.
- **Limpar cache** (botão no topo): força o site público a recarregar os dados do ERP.
- **Sincronizar** (ícone de setas circulares na linha): envia as configurações atuais do site para o site público.
- **Editar** (ícone de lápis na linha, ou dê duplo clique na linha): abre a configuração completa do site.
- **Excluir** (ícone de lixeira na linha): apaga o site permanentemente.

### Cadastrar um novo site
1. Clique em **Novo site**.
2. Preencha **Nome do site** (obrigatório). Ex.: "Suporte Leilões".
3. Preencha **URL** com o endereço público do site (formato `https://...`).
4. Preencha **URL do webhook**, se houver, com o endereço que receberá as notificações.
5. Preencha **Token**, o código de integração do site.
6. Clique em **Cadastrar**. O site passa a aparecer na lista.

![Novo site](/img/manual/sites/website-sites-novo.png)

> No cadastro de um site novo aparecem apenas os campos básicos (Nome, URL, URL do webhook e Token). As demais configurações (aparência, contato, recursos, etc.) ficam disponíveis depois, ao **editar** o site.

### Configurar (editar) um site
1. Na linha do site, clique no ícone de **lápis** (ou dê duplo clique na linha).
2. A janela abre com abas no topo. Navegue entre elas conforme o que quer ajustar:
   - **Básico** — Nome, URL, URL do webhook e Token.
   - **Aparência / SEO** — Título e descrição do site, nome e matrícula do leiloeiro, tema, cor principal e cor secundária, favicon, logomarca (normal e mobile) e os modelos de cabeçalho, home e rodapé.
   - **Contato** — Telefone, WhatsApp, e-mail(s), redes sociais (Instagram, Linkedin, Facebook, Tiktok), comunidade no WhatsApp e endereço completo (logradouro, número, bairro, CEP, cidade e UF).
   - **Recursos** — Liga/desliga funções do site (veja a tabela abaixo).
   - **Personalização** — Campos personalizados (chave/valor) e tags exibidas nos cards.
   - **Avançado** — Chaves do Google reCAPTCHA, CSS personalizado, scripts (JavaScript) e metatags.
3. Faça os ajustes desejados.
4. Marque a caixa de confirmação no rodapé: **"Concordo que ao salvar, os dados configurados aqui serão transmitidos para o site"**. Sem marcar, o botão de salvar fica bloqueado.
5. Clique em **Salvar alterações**. As configurações são gravadas e enviadas automaticamente para o site público.

![Configurar site](/img/manual/sites/website-sites-editar.png)

#### Opções da aba Recursos
Cada item abaixo é um Sim/Não (exceto onde indicado) que controla o que o arrematante vê no site:

| Opção | O que faz |
|---|---|
| **Bloquear leilões encerrados** | Impede acesso a leilões já encerrados. |
| **Mostrar leilões encerrados** | Exibe (ou oculta) leilões encerrados na listagem. |
| **Bloquear leilões suspensos** | Impede acesso a leilões suspensos. |
| **Mostrar leilões suspensos/cancelados** | Exibe (ou oculta) leilões suspensos/cancelados. |
| **Botão whatsapp flutuante** | Mostra o botão flutuante de WhatsApp no site. |
| **Habilitar Buscador** | Liga a busca no site. |
| **Habilitar Mapa de Bens** | Mostra os bens em um mapa. |
| **Habilitar Agenda** | Mostra a agenda de leilões. |
| **Habilitar Blog** | Liga o blog do site. |
| **Live na Home** | Exibe transmissão ao vivo na página inicial. |
| **Destaques na Home** | Exibe a seção de destaques na página inicial. |
| **Layout de visualização de lote** | Escolhe entre **Padrão** e **Em linha**. |
| **Modal Newsletter** | Exibe o pop-up de cadastro em newsletter. |
| **Campos do Newsletter** | Define quais campos o visitante preenche: Nome e E-mail; Nome, E-mail e Telefone; acrescentando UF/Cidade; ou ainda com Interesse. |
| **Mostrar visitas no leilão/lote** | Exibe as datas de visitação. |
| **Mostrar habilitados** | Exibe quem está habilitado no leilão. |
| **Mostrar anexos no leilão** | Exibe os documentos/anexos do leilão. |
| **Mostrar lances no leilão** | Exibe o histórico de lances. |
| **Mostrar taxas no lote** | Exibe as taxas no lote. |
| **Mostrar observação no leilão** | Exibe o campo de observação do leilão. |

#### Aba Personalização
- **Campos personalizados**: pares chave/valor extras (ex.: chave "leiloeiro", valor "Fulano"). Clique em **Adicionar campo**, preencha **Chave** e **Valor**, e use o ícone de lixeira para remover.
- **Tags do site**: etiquetas que aparecem nos cards (ex.: "Desconto"). Digite o nome da tag, escolha uma cor na paleta e clique em **Adicionar tag** (ou aperte Enter). Para remover uma tag, clique no **×** dentro dela.

### Sincronizar um site
Use quando quiser reenviar as configurações para o site sem abrir a janela de edição.
1. Na linha do site, clique no ícone de **setas circulares** (Sincronizar).
2. Confirme em **Enviar** na mensagem que aparece.
3. Os dados configurados são transmitidos para o site.

### Limpar o cache do site
Use quando uma alteração não aparece no site público mesmo após sincronizar.
1. Clique em **Limpar cache** no topo da tela.
2. Confirme em **Limpar**.
3. O site é forçado a recarregar os dados.

### Excluir um site
1. Na linha do site, clique no ícone de **lixeira**.
2. Confirme em **Excluir**. O site é apagado permanentemente.

## Dicas e observações
- **URL e Token andam juntos.** A sincronização (e o envio automático ao salvar) entrega as configurações no endereço da **URL** usando o **Token** como credencial de autenticação. Se a URL estiver errada ou o Token não bater com o do site público, a sincronização falha — então confira esses dois campos primeiro quando algo não chega ao site.
- Ao **salvar** a edição de um site, as configurações são enviadas automaticamente para o site público — por isso a caixa de confirmação é obrigatória.
- O botão **Salvar alterações** só fica ativo quando o **Nome** está preenchido e a caixa de confirmação está marcada.
- Se você mudou algo e não vê o efeito no site, primeiro **Sincronize** o site; se ainda assim não aparecer, use **Limpar cache**.
- As abas de configuração (Aparência, Contato, Recursos, etc.) só aparecem ao **editar** um site existente, não ao criar.

## Veja também
- [Webhooks](./website-webhooks.md)
