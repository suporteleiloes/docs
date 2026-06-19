---
title: Registro do parceiro
sidebar_position: 2
---

# Registro do parceiro

O registro do parceiro é a visão completa de um único parceiro. Aqui você confere os dados de identificação, define se ele recebe comissão, ativa ou inativa o parceiro e gerencia os acessos dele ao Painel do Parceiro, à API e ao ERP. A tela é organizada em duas abas: **Dados** e **Acessos**.

## Como acessar

**ERP** → **Parceiros** → clique no botão **Editar** (lápis) ou na linha do parceiro.

![Registro do parceiro](/img/manual/erp/parceiros-id.png)

## O que você vê nesta tela

### Cabeçalho do parceiro

No topo, um cartão de resumo mostra:

| Elemento | O que é |
|---|---|
| Avatar e nome | Foto/iniciais e nome do parceiro |
| Código | Número interno (ex.: #12) |
| Selo de status | **Ativo** ou **Inativo** |
| Selo "Recebe Comissão" | Aparece quando o parceiro recebe comissão |
| Contato | E-mail e telefone principais (quando houver), separados por "·" |
| Pílulas API / ERP / Painel | Ficam verdes quando o respectivo acesso está habilitado e cinza quando não está |

À direita do cabeçalho fica o botão **Voltar**, que retorna à lista de parceiros.

### Abas

| Aba | Para que serve |
|---|---|
| Dados | Ver e editar as informações gerais do parceiro |
| Acessos | Habilitar/desabilitar e configurar Painel, API, ERP e tipo de acesso |

## Aba Dados

Nesta aba você vê as **Informações gerais** do parceiro:

| Campo | O que é | Editável? |
|---|---|---|
| Pessoa | Pessoa vinculada ao parceiro (avatar, nome e selo Física/Jurídica) | Não — altera-se pelo módulo CRM |
| Código | Número interno do parceiro | Não (somente leitura) |
| E-mail principal | E-mail vindo do cadastro da pessoa | Não (somente leitura) |
| Telefone principal | Telefone vindo do cadastro da pessoa | Não (somente leitura) |
| Recebe Comissão | Chave liga/desliga: **Sim — recebe comissão** ou **Não recebe comissão** | Sim |
| Status | Chave liga/desliga: **Ativo** ou **Inativo** | Sim |

### Editar os dados do parceiro

1. Na aba **Dados**, ajuste a chave **Recebe Comissão** conforme o caso.
2. Ajuste a chave **Status** para deixar o parceiro **Ativo** ou **Inativo**.
3. Clique em **Salvar alterações**.
4. Uma mensagem confirma o sucesso. Se algo der errado, o sistema mostra o motivo.

> Os campos **Pessoa**, **E-mail principal** e **Telefone principal** são apenas leitura. Para alterá-los, atualize a pessoa vinculada no módulo CRM/Pessoas.

> A confirmação **Recebe Comissão** é o campo que o ERP V5 salva com certeza. A chave **Status** (Ativo/Inativo) ainda não é gravada de forma confiável por esta tela — se você precisa **inativar** um parceiro e a mudança não persistir após salvar, fale com o suporte.
>
> Editar o parceiro exige a permissão `gestao/parceiros/u`.

## Aba Acessos

> **Status do recurso (ERP V5):** a gestão de acessos do parceiro ainda está em implementação no backend do V5. Hoje, ao abrir esta aba, é normal aparecer a mensagem **"Acessos indisponíveis"** — isso significa que o recurso ainda não foi habilitado no seu ambiente, e não um erro do seu lado. As funções descritas abaixo (ligar/desligar Painel, API e ERP, gerar/revogar API Key, redefinir senha do painel, definir o tipo de acesso) representam o **comportamento planejado** e ficarão disponíveis quando o recurso for concluído. Enquanto isso, as colunas e pílulas **API / ERP / Painel** funcionam apenas como indicadores e não podem ser alteradas por aqui. Precisa de algum desses acessos agora? Fale com o suporte.

A aba **Acessos** reúne, em blocos, os tipos de acesso que o parceiro pode ter. Cada bloco tem uma chave liga/desliga no canto e, quando ligado, expande mostrando informações e ações.

![Acessos do parceiro](/img/manual/erp/parceiros-id-acessos.png)

### Acesso ao Painel do Parceiro

Permite que o parceiro faça login no painel externo para acompanhar comissões e relatórios. Quando ligado, mostra:

- **Login** do parceiro.
- **Último acesso** registrado.
- Botão **Redefinir senha**.

**Para redefinir a senha do painel:**

1. Ligue a chave **Acesso ao Painel do Parceiro** (se ainda não estiver).
2. Clique em **Redefinir senha**.
3. O sistema gera uma nova senha e a exibe em uma janela. **Copie a senha na hora** — ela não será mostrada novamente.

### Acesso à API

Fornece uma **API Key** (chave) para integração programática com o sistema. Quando ligado, mostra a chave (oculta por padrão) e as ações de gerar/regenerar e revogar.

**Para gerar ou regenerar a chave:**

1. Ligue a chave **Acesso à API**.
2. Clique em **Gerar chave** (ou **Regenerar chave**, se já existir uma).
3. Ao regenerar, o sistema avisa que a chave atual será revogada e uma nova será criada — confirme.
4. Use o botão de olho ao lado da chave para **mostrar/ocultar** o valor e copiá-lo.

**Para revogar a chave:**

1. Clique em **Revogar**.
2. Confirme no aviso. A chave atual é invalidada **imediatamente** e integrações que a usam param de funcionar.

> Atenção: ao regenerar ou revogar a API Key, atualize todas as integrações que usavam a chave antiga, senão elas deixarão de funcionar.

### Acesso ao ERP

Vincula o parceiro a um **usuário interno do ERP** para acesso administrativo. Quando ligado, mostra o usuário vinculado (ou "Nenhum usuário vinculado"). A vinculação ou troca do usuário do ERP é feita pela equipe técnica/integração — pela tela, você apenas liga/desliga este acesso.

### Tipo de Acesso

Define o nível de permissão do parceiro no painel. As opções são:

- **Limitado**
- **Administrador**

### Salvar os acessos

1. Ajuste as chaves dos blocos (Painel, API, ERP) e o **Tipo de acesso** conforme desejado.
2. Clique em **Salvar acessos**.
3. Uma mensagem confirma a atualização.

## Dicas e observações

- Os indicadores **API / ERP / Painel** do cabeçalho e da lista de parceiros refletem o que está habilitado para o parceiro. Quando a aba **Acessos** estiver disponível, ela será a forma de alterar esses indicadores.
- A **API Key** (quando o recurso estiver disponível) fica oculta por padrão (mostrada como pontinhos). Clique no olho para revelar e copiar.
- Senhas e chaves geradas só aparecem uma vez no momento da criação — copie-as imediatamente.
- Se a aba **Acessos** mostrar **"Acessos indisponíveis"**, o recurso de acessos ainda não está habilitado no ambiente (situação esperada no ERP V5 atualmente); nesse caso, fale com o suporte.

## Veja também

- [Parceiros](./parceiros.md)
