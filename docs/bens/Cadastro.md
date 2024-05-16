---
sidebar_position: 1
toc_max_heading_level: 5
---

# Cadastro

## Pesquisa de Bens
Acesse  `Menu` -> `Bens` -> `Gestão de Bens` para abrir a tela de listagem de bens.

Note que no mesmo menu também temos `Imóveis` e `Veículos`, ambos os menus vão para a mesma tela de listagem, porém, o sistema adapta os filtros de pesquisa exclusivos para o tipo de bem selecionado.

![Tela de listagem de bens](./assets/lista.jpg)
*Tela de listagem de bens* 

Observe que a pesquisa é pré-fixada para pesquisar somente bens considerados **Em Estoque**, ou seja, bens com os seguintes status:

* Rascunho
* Cadastrado
* Em remoção (bens móveis)
* No pátio (bens móveis)
* Em leilão

Caso queira filtrar por bens fora do estoque, ou seja, bens Leiloados/Vendidos, Devolvidos ou Doados, basta selecioná-los no filtro **Status**:

<img src={require('./assets/filtro-status-exemplo.jpg').default} alt="Filtro de Status" width="400" />

Os demais filtros são sugestivos e de fácil entendimento.

### Exportar Diário de Entrada e Saída

**Diário de Entrada e Diário de Saída** são relatórios costomizáveis existentes no [Sistema de Documentos](../gestao/documentos.md) que são emitidos em PDF. Veja um exemplo:

<img src={require('./assets/lista-exportar.jpg').default} alt="Filtro de Status" width="400" />

<br />
<br />

Veja um exemplo de um diário de entrada emitido, em PDF:

![Relatório Diário de Entrada](./assets/diario-entrada-saida.jpg)
*Exemplo de emissão de Diário de Entrada*

Os diários respeitam os critérios de pesquisa na lista de bens, ou seja, todos os filtros aplicados também serão aplicados ao gerar o diário.

### Exportar para Excel

Assim como os diários demonstrados acima, o relatório em excel respeita os filtros aplicados na listagem de bens. Ao clicar em *Excel*, o resultado filtrado é exportado para uma planilha em excel.

## Cadastrar um novo bem

Clique no botão **Cadastrar** para iniciar o registro de um novo bem no sistema.

Você precisa primeiro selecionar o comitente e qual o **Tipo** e **Classificação** do bem:

![Seleção do Comitente e Tipo de Bem](./assets/cadastro-tipo.jpg)

A escolha do tipo e classificação do bem, além de obrigatório, é crucial para que o sistema entenda quais campos apresentar para preenchimento, sendo que **Imóveis** e **Veículos** o sistema já possui campos próprios internos. Veja:

**Veículos:**

![Cadastro de Veículo](./assets/cadastro-veiculo.jpg)

**Imóveis:**

![Cadastro de Imóvel](./assets/cadastro-imovel.jpg)

Entendemos que mesmo que tenhamos os principais campos para o cadastro de um bem, pode existir situações onde o leiloeiro precise customizar estes campos baseando-se no tipo e classificação do bem, isto é possível, **[criando campos dinâmicos](../configuracoes/Global/Bem#campos)**.

:::tip

[Saiba como criar novos campos no bem](../configuracoes/Global/Bem#campos) e personalizar o cadastro de acordo sua necessidade, sem programação.

:::

### Imóveis

O cadastro de imóveis possui alguns campos exclusivos no sistema, são eles:

:::note[Campos exclusivos para o cadastro de `Imóvel`]

**Matrícula:** Matrícula do imóvel<br />
**Código/I:** Código Interno, pode ser usado para controle interno ou intregrações<br />
**Inscrição Municipal:** Inscrição Municipal do Imóvel<br />
**Cartório:** Nome do Cartório<br />
**Área Edificada:** Área construída no terreno<br />
**Área Terreno:** Área total do terreno<br />
**Imóvel Ocupado?:** Se o imóvel está ocupado ou não<br />
**Finalidade?:** Finalidade do cadastro do imóvel no sistema. **[Pré-cadastrado em Tipos de Finalidade de Imóvel](../configuracoes/CadastroBasico#tipos-de-finalidade-de-imóvel)**<br />
:::

### Veículos

O cadastro de veículos também possui alguns campos exclusivos no sistema, são eles:

:::note[Campos exclusivos para o cadastro de `Veículo`]

**Placa:** Placa do veículo.<br />
**Chassi:** Número do Chassi do veículo<br />
**Renavam:** Número do Renavam<br />
**UF da Placa:** UF da Placa do veículo. *Cuidado para não confundir com o outro campo UF mais abaixo, que se trata de onde o veículo está*<br />
**Quilometragem:** Km do veículo<br />
**Código Fipe:** Código Fipe do veículo. Isto pode ser preenchido automaticamente se tiver integração com a [Tabela Fipe](#) <!-- @TODO --><br />
**Montadora/Marca:** Marca do Veículo. Pode ser [pré-cadastrado](../configuracoes/CadastroBasico#marcas-de-bem) ou importado a [Tabela Fipe](#) <!-- @TODO --><br />
**Modelo:** Modelo do Veículo. Pode ser [pré-cadastrado](../configuracoes/CadastroBasico#modelos-de-bem) ou importado a [Tabela Fipe](#) <!-- @TODO --><br />
**Ano Modelo:** Ano do modelo do veículo. <span style={{fontSize: '11px'}}>*(Se a Tabela Fipe estiver integrada, o preenchimento é automático)*</span><br />
**Ano Fabricação:** Ano de fabricação do veículo. <span style={{fontSize: '11px'}}>*(Se a Tabela Fipe estiver integrada, o preenchimento é automático)*</span><br />
**Cor predominante:** Cor do veículo [pré-cadastrada](../configuracoes/CadastroBasico#tipos-de-cor)<br />
:::

Os demais campos são padronizados em todos os tipos de bem.


:::tip
<br/>
![Exemplo de Campo Configurável](./assets/conservacao-select.jpg)

Saiba que a maioria dos campos de seleção você pode editar, basta acessar o [cadastro básico em configurações](../configuracoes/CadastroBasico) 

:::

### Básico

A aba Cadastro / Básico contém as informações básicas de um bem. Segue a explicação de função de cada campo:


:::note[`Cadastro` / `Básico`]

**ID:** Campo de identificação única gerado automaticamente pelo sistema.<br />
**Comitente:** Cliente que está consignando o bem.<br />
**Tipo de bem:** Tipo principal do bem. [Pode ser editado, exceto Imóveis e Veículos](../configuracoes/CadastroBasico#tipos-de-bem).<br />
**Classificação:** Tipo filho de um bem, é o tipo final selecionado. [Pode ser editado](../configuracoes/CadastroBasico#tipos-de-bem).<br />
**Processo:** Número do processo. Este campo não pode ser editado nesta tela, sobre na aba Processo.<br />
**Descrição:** Descrição interna do bem. Esta descrição também é copiada para o Título na aba Marketplace, caso não seja preenhido por lá. Caso preencha título do bem na aba Marketplace, e preencha a descrição com uma informação diferente, esta descrição aparecerá somente na listagem interna (ERP).<br />

**Status:** Situação do Bem. Entenda cada uma delas:<br />
- **Rascunho:** Bem em fase de cadastro e preparação
- **Cadastrado:** Bem no estoque, utilizado para bens imóveis ou bens que não estão em posse no pátio.
- **Em remoção:** Bem móvel que está em processo de remoção até o pátio.
- **No pátio:** Bem móvel que está armazenado no pátio.
- **Em leilão:** Bem que está em leilão.
- **Devolvido:** Bem devolvido para o comitente.
- **Doado:** Bem doado.
- **Leiloado/Vendido:** Bem Vendido.

**Entrada:** Data entrada do bem no estoque. Lembre-se que existe a data de cadastro, que é preenchida automaticamente pelo sistema. A data de entrada pode ser digitada manualmente e corresponde ao dia que o bem deu entrada no estoque.<br />
**Saída:** Data saída do bem do estoque.<br />
**Pátio:** Seleção do [pátio pré-cadastrado](./Patios), que o bem está armazenado.<br />
**Data Cadastro:** Data que o bem foi cadastrado no sistema. O preenchimento é automático e este campo não é editável.<br />
**Criado:** Pessoa que criou o bem no sistema.<br />
**Alterado:** Pessoa que alterou o bem no sistema.<br />
**Alteração:** Data da última alteração do bem no sistema.<br />

**Bloqueado para venda** Bloqueia o bem para venda, isto impede que o bem seja relacionado em leilões. Ao bloquear, um aviso também é emitido na tela do bem:

![imagem](./assets/bem-bloqueado.jpg)

**Motivo do bloqueio** Motivo do bloqueio do bem, para histórico.
**Conservação** Conservação do bem [pré-cadastrado](../configuracoes/CadastroBasico#tipos-de-conservação-de-bem).
:::

### Marketplace

A aba Marketplace é responsável pelas informações principais do anúncio público do bem. O preenchimento estratégico ajuda em uma boa venda.

![Aba Marketplace](./assets/marketplace.jpg)

:::note[`Cadastro` / `Marketplace`]

**Título Principal:** .<br />
**Subtítulo:** .<br />
**Sites:** .<br />
**Venda Direta:** .<br />
**Bem em Destaque:** .<br />
**Posição:** .<br />
**Descrição completa sobre o bem:** .<br />
**Observações adicionais sobre o bem:** .<br /> 
:::

### Características
### Observações
### Localização
### Extra
### Gestão de Débitos
#### Gestão
#### Débitos
#### Financeiro
### Processo
#### Principal
#### Movimentações
### Avaliação
#### Básico
#### Vistoria
### Imagens, Vídeos e Arquivos
#### Fotos e Arquivos
#### Vídeos
### Remoção
### Leilões e Propostas
#### Principal
#### CRM
### Checklist / Providências
#### Principal
#### Providências
### Marketplace / API

