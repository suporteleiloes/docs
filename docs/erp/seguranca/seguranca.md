---
title: Central de Segurança
sidebar_position: 1
---

# Central de Segurança

A Central de Segurança é o painel onde você controla quem está conectado ao sistema, acompanha o histórico de alterações feitas pela equipe e define regras de acesso por endereço de IP e por horário. É a tela ideal para monitorar a segurança da sua leiloeira e agir rápido quando algo parece fora do comum.

## Como acessar

**Configurações** → **Segurança** → **Central de Segurança**

![Central de Segurança](/img/manual/erp/seguranca.png)

## O que você vê nesta tela

A tela é organizada em quatro abas, no topo do quadro. Você clica na aba para alternar entre elas:

| Aba | Para que serve |
|---|---|
| **Usuários logados** | Mostra todas as sessões abertas no momento (quem está conectado, de onde e em qual dispositivo). |
| **Auditoria** | Histórico de tudo que foi criado, alterado ou excluído no sistema, com data, autor e detalhes da mudança. |
| **Acesso por IP** | Regras que liberam ou bloqueam o acesso conforme o endereço de IP de quem entra. |
| **Horário de acesso** | Regras que limitam o horário em que um usuário ou grupo pode usar o sistema. |

## O que dá pra fazer aqui

### Aba "Usuários logados"

Lista cada sessão ativa do sistema. Use os campos no topo para filtrar:

- **Filtrar por IP** — mostra só as sessões de um endereço de IP.
- **Filtrar por ID do usuário** — mostra só as sessões de um usuário específico.

Colunas da lista:

| Coluna | O que é |
|---|---|
| **Usuário** | Nome da pessoa, com o login e o número (ID) do usuário logo abaixo. |
| **IP** | Endereço de IP de onde a sessão foi aberta. Ao lado do IP há um ícone de localização para consultar de onde ele vem. |
| **Dispositivo / navegador** | Aparelho e navegador usados para acessar (ex.: Windows / Chrome). |
| **Localização** | Cidade/região aproximada da sessão, quando disponível. |
| **Última atividade** | Data e hora da última ação registrada nessa sessão. |

#### Ver a localização de um IP

1. Na coluna **IP**, clique no ícone de localização (alfinete) ao lado do endereço.
2. Aguarde a consulta. Abre uma janela com os dados de geolocalização do IP: país (com bandeira), região, cidade, provedor, organização, ASN, fuso horário e coordenadas.
3. Se quiser ver o ponto no mapa, clique em **ver no mapa ↗** (abre o Google Maps em outra aba).
4. Clique em **Fechar** para sair.

> Se o IP for interno/local ou não puder ser localizado, a janela mostra um aviso explicando que a geolocalização não foi possível.

#### Encerrar uma sessão

1. Na linha da sessão, clique em **Encerrar**.
2. Confirme na mensagem que aparece. A sessão é derrubada e o usuário precisará fazer login novamente.

#### Encerrar todas as sessões de um usuário

1. Na linha de qualquer sessão do usuário, clique em **Todas**.
2. Confirme na mensagem. Todas as sessões abertas daquele usuário são encerradas de uma vez (útil se você suspeita que a conta foi acessada por outra pessoa).

### Aba "Auditoria"

Mostra o registro de mudanças feitas no sistema. Filtre pelo topo:

- **Entidade** — digite o tipo de registro afetado (ex.: `Bem`, `Leilao`).
- **Ação** — escolha **Todas as ações**, **Alteração**, **Criação** ou **Exclusão**.
- **ID do usuário** — filtre pelas ações de um usuário específico.

Colunas da lista:

| Coluna | O que é |
|---|---|
| **Quando** | Data e hora em que a ação aconteceu. |
| **Entidade** | Tipo de registro e seu número (ex.: Bem #123). |
| **Ação** | Se foi **Criou**, **Alterou** ou **Excluiu**. |
| **Quem** | Nome de quem fez (ou "sistema"), com o IP logo abaixo. |
| **Mudanças** | Resumo dos campos alterados. Clique para ver o detalhe completo. |

#### Ver o detalhe de uma mudança

1. Na coluna **Mudanças**, clique no resumo (texto sublinhado com os nomes dos campos).
2. Abre uma janela com uma tabela de três colunas: **Campo**, **Antes** e **Depois**, mostrando exatamente o que mudou em cada campo.
3. Clique em **Fechar** para sair.

### Aba "Acesso por IP"

Aqui você cria regras que controlam de quais endereços de IP o sistema pode ser acessado. No topo há um aviso importante e o botão para criar regras.

Colunas da lista:

| Coluna | O que é |
|---|---|
| **Modo** | **Permitir** (allowlist) ou **Bloquear**. |
| **IP / CIDR** | O endereço ou faixa de endereços a que a regra se aplica. |
| **Descrição** | Texto livre para identificar a regra (ex.: "Escritório matriz"). |
| **Ativo** | Se a regra está em vigor (**Sim**) ou desligada (**Não**). |

#### Cadastrar uma nova regra de IP

1. Clique em **Nova regra de IP**.
2. Em **Modo**, escolha:
   - **Bloquear** — impede o acesso a partir do IP/faixa informado.
   - **Permitir (allowlist)** — passa a permitir o acesso *somente* a partir dos IPs listados.
3. Preencha **IP ou CIDR** (obrigatório). Pode ser um endereço único (ex.: `187.1.2.3`) ou uma faixa em formato CIDR (ex.: `187.1.2.0/24`).
4. Em **Descrição**, escreva uma identificação para a regra (opcional, mas recomendado).
5. Deixe **Regra ativa** ligada para que ela passe a valer imediatamente.
6. Clique em **Salvar**.

![Nova regra de IP](/img/manual/erp/seguranca-novo-ip.png)

#### Editar ou excluir uma regra de IP

- Para **editar**, clique no ícone de lápis na linha da regra, ajuste os campos e clique em **Salvar**.
- Para **excluir**, clique no ícone de lixeira e confirme a mensagem.

### Aba "Horário de acesso"

Aqui você define janelas de horário em que um usuário ou grupo pode usar o sistema. No topo há um aviso e o botão de criação.

Colunas da lista:

| Coluna | O que é |
|---|---|
| **Escopo** | Se a regra vale para um **Usuário** ou um **Grupo**. |
| **Usuário / grupo** | A pessoa ou grupo a que a regra se aplica. |
| **Dias** | Os dias da semana permitidos (Dom a Sáb). |
| **Faixas de horário** | Os intervalos de horário liberados (ex.: 08:00–18:00). |
| **Ativo** | Se a regra está valendo (**Sim**) ou não (**Não**). |

#### Cadastrar uma nova regra de horário

1. Clique em **Nova regra de horário**.
2. Em **Aplicar a**, escolha **Um usuário** ou **Um grupo**.
3. No campo de busca, digite o nome e selecione o usuário ou grupo (obrigatório). Trocar o escopo limpa a seleção, porque as listas são diferentes.
4. Em **Dias permitidos**, clique nos dias da semana que ficarão liberados (Dom, Seg, Ter, Qua, Qui, Sex, Sáb). Os dias selecionados ficam destacados. Por padrão, vêm marcados de segunda a sexta.
5. Em **Faixas de horário permitidas**, defina o horário de início e de fim de cada intervalo:
   - Para acrescentar mais intervalos no mesmo dia, clique em **adicionar faixa**.
   - Para remover uma faixa, clique no ícone de lixeira ao lado dela (é preciso manter pelo menos uma faixa).
6. Deixe **Regra ativa** ligada para que a regra passe a valer.
7. Clique em **Salvar**.

![Nova regra de horário](/img/manual/erp/seguranca-novo-horario.png)

> O botão **Salvar** só fica disponível depois que você escolhe um usuário/grupo e marca ao menos um dia da semana.

#### Editar ou excluir uma regra de horário

- Para **editar**, clique no ícone de lápis na linha da regra, ajuste os campos e clique em **Salvar**.
- Para **excluir**, clique no ícone de lixeira e confirme a mensagem.

## Dicas e observações

- **Acesso por IP — cuidado para não se trancar para fora.** Sem nenhuma regra ativa, o acesso por IP fica liberado (padrão). Assim que você ativa uma regra do tipo **Permitir (allowlist)**, o sistema passa a aceitar *somente* os IPs listados. Antes de ativar uma allowlist, garanta que o seu próprio IP esteja incluído.
- **Horário de acesso — padrão liberado.** Sem regras ativas para um usuário, ele pode acessar em qualquer horário. Com regra(s) ativa(s), o acesso só é permitido dentro de alguma das faixas definidas.
- **Encerrar sessões é imediato.** Quem tiver a sessão encerrada será desconectado e precisará logar de novo. Use isso ao desligar um colaborador ou ao suspeitar de acesso indevido.
- **A auditoria é só leitura.** Você consulta e filtra o histórico, mas não pode apagar ou editar os registros — eles servem como prova do que aconteceu.
- Estas funções costumam exigir permissão de administrador. Se você não vê a Central de Segurança no menu, fale com o responsável pelo seu acesso.

## Veja também

- [Perfil do usuário](../perfil/perfil.md)
