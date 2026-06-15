---
title: Nova pessoa
sidebar_position: 2
---

# Nova pessoa

Esta tela é o cadastro de uma nova pessoa no ERP. Ela é organizada em seções numeradas, com um **resumo ao vivo** que mostra como o cadastro vai ficar enquanto você preenche. Só o **nome** é obrigatório — todo o resto pode ser completado depois.

## Como acessar

**Cadastros** → **Pessoas** → botão **Nova pessoa**.

![Tela de Nova pessoa](/img/manual/erp/pessoas-novo.png)

## O que você vê nesta tela

No topo há um **cabeçalho de pré-visualização** com o avatar (iniciais do nome), o status escolhido, a origem e um anel de progresso em porcentagem que vai enchendo conforme você preenche.

O formulário tem seis seções:

| Nº | Seção | Para que serve |
|---|---|---|
| 01 | Identidade | Nome, documento, tipo (física/jurídica), organização, código e tags |
| 02 | Status & origem | Etapa no funil interno e por qual canal a pessoa chegou |
| 03 | E-mails | Um ou mais e-mails, com indicação do principal |
| 04 | Telefones | Um ou mais telefones (DDD + número), marcando celular |
| 05 | Endereços | Endereços, com busca automática por CEP |
| 06 | Papéis | Papéis da pessoa no sistema (arrematante, comitente, etc.) |

À direita (no computador) fica um **Resumo** com tudo que você já preencheu e o botão **Cadastrar pessoa**. No celular esse botão fica fixo no rodapé.

## O que dá pra fazer aqui

### Cadastrar uma pessoa (passo a passo)

#### 1. Identidade

1. Escolha **Pessoa Física** ou **Pessoa Jurídica** nos botões do topo da seção.
2. (Opcional) Ative o interruptor **Estrangeiro** se a pessoa não tiver CPF/CNPJ — isso libera país, DDI e documentos internacionais e desliga a validação de CPF/CNPJ.
3. Preencha o **Nome completo** (obrigatório, mínimo 2 caracteres).
4. Preencha o documento: o campo se chama **CPF**, **CNPJ** ou **Documento (Passaporte/ID)** conforme o tipo escolhido. Quando o CPF/CNPJ é válido, aparece um **✓ verde** ao lado.
5. (Opcional) Em **Organização / Empresa relacionada**, busque uma empresa já cadastrada. Se ela não existir, digite o nome e clique em **+ Cadastrar como nova organização**.
6. (Opcional) Informe o **Código do cadastro** (o antigo código do cliente, se você tiver).
7. (Opcional) Adicione **Tags** livres (ex.: `vip`, `lead-quente`) — digite e tecle **Enter** para criar uma tag nova.

#### 2. Status & origem

1. Em **Status interno**, clique no cartão que descreve a situação da pessoa:
   - **Lead** — forneceu contato, sem cadastro completo
   - **Novo** — cadastrado, ainda não engajou
   - **Ativo** — engajado e participando
   - **Inativo** — sem atividade recente
   - **Inadimplente** — pendência financeira
2. Em **Origem**, escolha o canal pelo qual a pessoa chegou (Manual, Google Ads, Orgânico, Facebook, Instagram, Site, Indicação ou CSV).
3. (Opcional) Em **Referência da origem**, registre uma URL, ID de campanha ou nome de quem indicou.

#### 3. E-mails

1. Digite o e-mail no campo.
2. Para adicionar outro, clique em **Adicionar e-mail**.
3. Clique na **estrela** ao lado de um e-mail para marcá-lo como **principal** (usado em campanhas e notificações).
4. Use o ícone de lixeira para remover um e-mail.

#### 4. Telefones

1. Preencha o **DDD** e o **número**.
2. Marque **Cel** se for celular (habilita WhatsApp).
3. Clique na **estrela** para definir o telefone principal.
4. Use **Adicionar telefone** para incluir mais; a lixeira remove.

> Para estrangeiros, aparece também o campo **DDI** (código do país) e a máscara do número fica livre.

#### 5. Endereços

1. Clique em **Adicionar endereço**.
2. Escolha o **País** (o padrão é Brasil).
3. Digite o **CEP** e clique fora do campo: para endereços brasileiros, o sistema preenche **logradouro, bairro, cidade e UF** automaticamente.
4. Complete **número, complemento** e o que faltar.
5. Marque **Principal** no endereço que deve ser o oficial (usado em nota fiscal e documentos).

#### 6. Papéis

1. Clique nos papéis que a pessoa exerce: Arrematante, Comitente, Parceiro, Fornecedor, Advogado, Leiloeiro(a), Reboquista, Vistoriador ou Colaborador.
2. Pode marcar mais de um. Clicar de novo desmarca.

#### Salvar

1. Confira o **Resumo** à direita.
2. Clique em **Cadastrar pessoa**.
3. Se der tudo certo, você é levado automaticamente para a [ficha da pessoa](./pessoas-id.md) recém-criada.

## Dicas e observações

- **Só o nome é obrigatório.** O anel de progresso é apenas um guia; você pode salvar mesmo com ele incompleto.
- O sistema faz **deduplicação automática** por documento e e-mail: se a pessoa já existir, ele avisa e vincula ao cadastro existente em vez de criar um duplicado.
- Selecionar um **papel** pode disparar automações em outros módulos do ERP.
- O ✓ verde no documento confirma que o CPF/CNPJ passou na validação de dígitos — preencha apenas os números.
- Para estrangeiros sem CPF/CNPJ, ative **Estrangeiro** antes de preencher o documento.

## Veja também

- [Pessoas (lista)](./pessoas.md)
- [Ficha da pessoa](./pessoas-id.md)
