---
title: A ficha do bem
sidebar_position: 2
---

# A ficha do bem

A ficha do bem é a janela completa onde você cadastra e edita **tudo** sobre um bem: dados de identificação, valores, fotos, vídeos, documentos, processo, débitos, vistorias, leilões, propostas, checklist e muito mais. Ela é organizada em abas na lateral, cada uma com sub-abas no topo do conteúdo.

## Como acessar

A ficha abre sempre a partir de uma lista de bens:

- Em **ERP** → **Bens** → **Gestão de Bens**, dê **duplo clique** numa linha (ou use o menu de ações → **Abrir**).
- Pelo botão **Cadastrar bem**, para criar um bem novo.

Ela também abre por endereço direto (`/bens/<número do bem>`), mas, na prática, você sempre chega aqui pela lista.

![A ficha do bem](/img/manual/erp/bens-id.png)

## O que você vê nesta tela

A ficha é uma janela em tela cheia com:

- Um **cabeçalho** com o título do bem, um botão de **Configurações do bem** e um botão de **Emitir documentos**.
- Uma **barra lateral** com as abas principais.
- A **área de conteúdo** com as sub-abas no topo.
- Um **rodapé** com os botões **Cancelar** e **Salvar**.

### As abas (lateral) e suas sub-abas

| Aba | Sub-abas | Para que serve |
|---|---|---|
| Cadastro | Básico, Marketplace, Características, Observações, Localização, Extra | Os dados principais do bem. |
| Gestão e Débitos | Gestão, Débitos, Financeiro, Notificações | Gestão operacional, lançamento de débitos e despesas, e notificações. |
| Processo | Principal, Movimentações | Dados do processo judicial/administrativo, partes e movimentações. |
| Avaliação | Básico, Vistorias | Avaliação do bem e vistorias relacionadas. |
| Imagens, Vídeos e Arquivos | Fotos e Arquivos, Vídeos | Upload e organização de mídia e documentos. |
| Remoção | Principal | Solicitações de remoção ligadas ao bem. |
| Leilões e Propostas | Principal, CRM | Histórico em leilões e propostas de venda direta. |
| Checklist / Providências | Principal, Providências | Checklist de saneamento e tarefas a executar. |
| Marketplace / API | Principal | Integração com marketplaces e anúncios externos. |

## O que dá pra fazer aqui

### Preencher os dados principais (aba Cadastro → Básico)

A sub-aba **Básico** muda os campos conforme o **Tipo de bem**:

- **Comuns a todos:** Tipo de bem (obrigatório), Processo, Status, **Descrição** (obrigatória), chave **Bloqueado para venda** (com Motivo do bloqueio), datas de Entrada e Saída, e Pátio/Local/Vaga.
- **Veículo:** Placa, Chassi, Renavam, UF e cidade da placa, Nº do motor, Quilometragem, Código FIPE, Marca, Modelo, FIPE Ano, ano de fabricação e modelo, Cor, Combustível, Conservação, Nº de sinistro, e chaves "Veículo liga", "Possui chave", "Proveniente de alagamento" (com dados da chave e data de higienização).
- **Imóvel:** Matrícula, Inscrição municipal, Cartório, Área edificada e do terreno, "Imóvel ocupado?" e Finalidade.
- **Endereço:** País, CEP (preenche o endereço automaticamente), Endereço, Número, Complemento, Bairro, UF e Cidade.

Preencha o necessário e clique em **Salvar** no rodapé.

### Publicar/otimizar para o site (aba Cadastro → Marketplace)

Defina o **Título principal** otimizado, ative **Venda Direta** e **Bem em destaque**, e escreva a **Descrição completa (site)** e **Observações adicionais (site)**.

### Características, Observações e Localização

- **Características:** campos dinâmicos específicos do tipo de bem.
- **Observações:** textos de **Edital**, **Ata**, **Catálogo** e **Nota** (cada um pode ser gerado automaticamente pelo sistema, via chave própria) e as **Observações internas** (não publicadas).
- **Localização:** Latitude/Longitude, URL do Google Maps, URL do Street View e o código para **embutir o mapa no site**.

### Extra

Campos como Segurado/Financiado, contrato de financiamento, tipo de apreensão, assessoria jurídica, código de filial, vistoriador, número de sinistro e número de atendimento.

### Gerir débitos e financeiro (aba Gestão e Débitos)

- **Débitos / Financeiro:** lance e acompanhe as contas e despesas vinculadas ao bem (valor total dos débitos, condomínio, etc.).
- **Notificações:** registre pessoas a serem notificadas sobre o bem (aplicadas ao salvar).

### Processo

- **Principal:** vincule o processo, busque pelo número e cadastre as **partes do processo** (cada parte precisa de um tipo e de uma pessoa escolhida na busca).
- **Movimentações:** consulte as movimentações do processo vinculado.

### Avaliação e Vistorias

- **Básico:** dados de avaliação do bem.
- **Vistorias:** registre uma nova vistoria diretamente a partir do bem e veja as existentes.

### Fotos, Vídeos e Arquivos

- **Fotos e Arquivos:** faça upload de imagens e documentos, defina a **foto principal (capa)**, edite atributos (permissão, site, validade) e exclua arquivos.
- **Vídeos:** adicione, edite e remova vídeos.

### Checklist / Providências

- **Principal:** gere e acompanhe o checklist de saneamento do bem.
- **Providências:** gere e gerencie tarefas (com tipo, prioridade e status).

### Emitir documentos e configurações

- O botão **Emitir documentos** (no cabeçalho) gera os documentos do bem.
- O botão **Configurações do bem** dá acesso a atalhos de cadastros relacionados (tipos, campos dinâmicos, acessórios, tipos de apreensão e de perícia), abertos em nova aba.

### Salvar ou cancelar

- **Salvar** (rodapé, ou tecla **F2**) grava todas as alterações. Várias seções (partes do processo, notificações, anexos) são persistidas junto, no mesmo Salvar.
- **Cancelar** (ou **Esc**) fecha a janela sem gravar.

## Dicas e observações

- Os campos da aba Básico se adaptam ao **Tipo de bem**: escolha o tipo primeiro para ver os campos certos.
- Ao informar o **CEP**, o endereço é preenchido automaticamente.
- Para veículos, informar Código FIPE / Marca / Modelo / Ano ajuda no preenchimento automático de valores via FIPE.
- A tecla **F2** salva; **Esc** fecha a janela.

## Veja também

- [Gestão de Bens](./bens-lista.md)
- [Vistorias](./vistoria.md)
- [Detalhe da vistoria](./vistoria-id.md)
- [Propostas de Venda Direta](./propostas-venda-direta.md)
