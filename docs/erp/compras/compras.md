---
title: Compras
sidebar_position: 1
---

# Compras

A tela de **Compras** é onde você registra e acompanha tudo o que a leiloeira compra de fornecedores — produtos, materiais e serviços. Cada compra passa por etapas (da solicitação até o recebimento) e, quando recebida, gera automaticamente as contas a pagar no financeiro e a entrada de estoque.

## Como acessar

**ERP** → **Financeiro** → grupo **Compras** → **Compras**.

> O módulo de Compras fica dentro da seção **Financeiro** do menu (não há uma seção "Suprimentos"). Ele aparece ao lado dos grupos Almoxarifado, Catálogo e Cadastros, porque uma compra recebida lança contas a pagar no Financeiro e dá entrada no Estoque.

![Lista de compras](/img/manual/erp/compras.png)

## O que você vê nesta tela

No topo há a barra de filtros e o botão **+ Nova Compra**. Logo abaixo, a lista de compras já registradas.

### Filtros

| Filtro | O que é |
|---|---|
| Campo de busca | Busca por **nome do fornecedor**, **código de referência** ou **texto das observações** da compra. Digite parte do texto e a lista se atualiza. (A busca não procura dentro da descrição dos itens.) |
| Situação | Filtra por etapa da compra. Comece em **Todas as situações** ou escolha uma específica (Solicitação, Em cotação, Aprovada, Pedido, Recebida, Cancelada). |

### Colunas da lista

| Coluna | O que é |
|---|---|
| Data | Data da compra. |
| Fornecedor | Nome do fornecedor. Aparece **— Sem fornecedor —** quando a compra foi registrada sem um. |
| Cód. ref. | Código de referência informado na compra (número da nota, pedido do fornecedor etc.). Mostra **—** quando vazio. |
| Situação | Etapa atual da compra, em forma de etiqueta colorida (veja a tabela de situações abaixo). |
| Forma de pagamento | **À vista** ou **Parcelado**. Quando parcelado, mostra também o número de parcelas (ex.: "Parcelado · 3x"). |
| Valor | Valor total líquido da compra. |

### Situações de uma compra

| Situação | O que significa |
|---|---|
| Solicitação | Compra recém-criada, ainda não aprovada. É a situação inicial de toda compra criada por esta tela. |
| Em cotação | Em fase de cotação com fornecedores. |
| Aprovada | Compra aprovada, pronta para ser recebida. |
| Pedido | Pedido feito ao fornecedor, aguardando a entrega. |
| Recebida | Compra concluída — gerou contas a pagar e (quando aplicável) entrada de estoque. |
| Cancelada | Compra cancelada. |

> As situações **Em cotação** e **Pedido** existem no sistema e podem ser filtradas, mas as ações disponíveis na tela de detalhe hoje movem a compra apenas entre **Solicitação → Aprovada → Recebida** (ou **Cancelada**). Não há, nesta versão do ERP, um botão que coloque a compra em "Em cotação" ou "Pedido".
> A confirmar com a equipe: como uma compra chega a esses dois status (importação/integração ou ajuste manual).

## O que dá pra fazer aqui

- **Buscar e filtrar** compras pelos campos de busca e situação.
- **Abrir uma compra**: clique em qualquer linha da lista para ver os detalhes da compra.
- **Cadastrar uma nova compra** pelo botão **+ Nova Compra**.
- **Paginar**: use os controles de página no rodapé da lista e ajuste quantas linhas exibir por página (20, 50 ou 100).

### Pré-requisitos (recomendados, mas não obrigatórios)

Nada disso impede criar a compra, mas deixa o cadastro completo desde o início:

- **Fornecedor** cadastrado em **Cadastros → Fornecedores** (pessoas com papel "fornecedor").
- **Categoria** (Plano de Contas) em **Financeiro → Contabilidade → Plano de Contas**, para classificar a despesa que será gerada no recebimento.
- **Conta / banco** em **Cadastros → Contas**, para indicar de onde sai o pagamento.
- **Depósito** em **Almoxarifado → Depósitos**, caso a compra precise dar entrada em estoque.
- **Produtos/serviços** em **Catálogo → Produtos e Serviços**, se quiser usar itens cadastrados (e controlar estoque).

### Cadastrar uma nova compra

1. Clique em **+ Nova Compra**. Abre a janela **Nova compra de produto**.
2. Em **Fornecedor**, digite o nome e selecione o fornecedor na lista. É **opcional**, mas recomendado — sem fornecedor a compra aparece como "— Sem fornecedor —".
3. Preencha o **Código de referência** (opcional — número da nota ou pedido do fornecedor).
4. Escolha a **Categoria** (categoria de movimentação financeira) e o **Depósito (estoque)** que receberá os produtos. Ambos são **opcionais** no cadastro — veja em "Dicas e observações" o que o sistema faz quando ficam em branco.
5. Confira a **Data da compra** (já vem preenchida com a data de hoje; ajuste se precisar).
6. Em **Itens da compra**, preencha cada linha:
   - **Produto / Serviço**: busque e selecione um produto do catálogo, **ou**
   - **Detalhes do item**: digite uma descrição livre (útil para itens sem cadastro).
   - **Qtd.**: a quantidade.
   - **Custo**: o custo unitário. O **Subtotal** é calculado automaticamente (Qtd. × Custo).
   - Use **+ Adicionar item** para incluir mais linhas e o **⨯** para remover uma linha. Se você remover a última linha, o sistema deixa sempre uma linha em branco.
7. Se houver, informe um **Desconto** na área de totais. O **Total líquido** é recalculado na hora.
8. Em **Escolha a forma de pagamento**, defina a **Condição de pagamento**:
   - **À vista**: escolha a **Conta / banco**.
   - **Parcelado**: informe o **Número de parcelas** (padrão 2), a **Data de vencimento (1ª parcela)** e a **Conta / banco**.
9. Use **Observações** para anotações da compra (opcional). Esse texto também é pesquisável no campo de busca da lista.
10. Clique em **Criar compra**. A compra é criada na situação **Solicitação** e passa a aparecer na lista.

![Janela de nova compra](/img/manual/erp/compras-novo.png)

### Erros comuns ao criar

- **"Adicione ao menos um item (produto ou descrição)."** — toda compra precisa de pelo menos uma linha com um produto selecionado **ou** uma descrição preenchida. Linhas totalmente em branco são ignoradas.
- **Esquecer a categoria/conta** — não trava o cadastro, mas no recebimento o sistema usa uma categoria de despesa padrão ("Compras") e a conta pode ficar em branco. Defina-as antes de receber se quiser a despesa classificada corretamente.
- **Custo zerado** — uma compra com total líquido R$ 0,00 é criada normalmente, mas no recebimento **não gera contas a pagar** (não há valor a lançar).

## Dicas e observações

- É obrigatório informar **pelo menos um item** — com produto selecionado **ou** descrição preenchida. Sem isso, o sistema não deixa criar a compra.
- O **Total líquido** = soma dos subtotais dos itens menos o desconto. Ele nunca fica negativo (se o desconto for maior que a soma dos itens, o total é tratado como R$ 0,00).
- A **Data de vencimento da 1ª parcela** e o **Número de parcelas** só aparecem quando a condição é **Parcelado**.
- **Categoria, Conta/banco e Depósito são opcionais** no cadastro. No recebimento, se a categoria ficar em branco o sistema usa uma categoria de despesa padrão chamada **"Compras"**; se o depósito ficar em branco, usa o **depósito principal ativo** (ou o primeiro depósito ativo) para dar entrada no estoque dos itens que controlam estoque.
- Apenas o cadastro e a edição acontecem nesta tela. As ações de **Aprovar**, **Receber** e **Cancelar** ficam na [tela de detalhe da compra](./compras-id.md).

## Veja também

- [Detalhe da compra](./compras-id.md)
