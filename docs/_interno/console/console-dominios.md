---
title: Domínios
sidebar_position: 1
---

# Domínios

Esta tela controla os **domínios** dos clientes da Suporte Leilões — o cadastro de cada endereço (por exemplo, `leiloeira.com.br`) com o estágio em que ele se encontra (registro, pagamento, ativo, expirado), as datas e os valores cobrados. É uma tela interna, usada pela equipe de Operação de Clientes para acompanhar e manter os registros de domínio.

## Como acessar
**Console** → **Operação de Clientes** → **Domínios**.

![Domínios](/img/manual/_interno/console-dominios.png)

## O que você vê nesta tela

No topo há um painel de **indicadores** (cartões com contagens). Logo abaixo fica a **barra de busca** e a **lista de domínios** cadastrados, com paginação.

### Painel de indicadores
Aparece quando há números disponíveis. Cada cartão mostra quantos domínios estão em cada situação. Cartões de alerta ficam destacados quando o valor é maior que zero.

| Indicador | O que é |
|---|---|
| Total | Quantidade total de domínios cadastrados |
| Ativos | Domínios já registrados e em pleno funcionamento |
| Em análise | Domínios sendo avaliados pela equipe |
| Aguardando pagamento | Domínios parados esperando pagamento (alerta quando > 0) |
| Bloqueados | Domínios bloqueados (alerta quando > 0) |
| Expirados | Domínios com registro vencido (alerta quando > 0) |

### Colunas da lista

| Coluna | O que é |
|---|---|
| # | Número (identificador) do registro |
| Domínio | O endereço cadastrado (ex.: `cliente.com.br`) |
| Status | Situação atual do domínio, em etiqueta colorida |
| Registro | Valor cobrado pelo registro do domínio |
| Serviço | Valor cobrado pelo serviço associado |
| Registrado | Data em que o domínio foi registrado |
| Expira | Data de expiração do registro |
| (ações) | Botões de **Editar** e **Excluir** na ponta direita da linha |

### Os status possíveis

| Status | Significado |
|---|---|
| Pendente análise | Cadastrado, ainda não avaliado |
| Em análise | Em avaliação pela equipe |
| Aguardando documentação | Falta documento para prosseguir |
| Aguardando pagamento | Esperando o pagamento |
| Aguardando registro | Pago/aprovado, aguardando o registro efetivo |
| Ativo | Registrado e funcionando |
| Bloqueado | Domínio bloqueado |
| Expirado | Registro vencido |

## O que dá pra fazer aqui

- **Buscar** um domínio pelo endereço.
- **Cadastrar** um novo domínio.
- **Editar** um domínio existente.
- **Excluir** um domínio.
- **Ajustar a paginação** (20, 50 ou 100 itens por página).

### Buscar um domínio
1. Digite parte do endereço no campo **Buscar por domínio...**.
2. A lista é filtrada e volta para a primeira página automaticamente.

### Cadastrar um novo domínio
1. Clique em **Novo domínio** (canto superior direito).
2. Preencha **Domínio** (obrigatório) — o endereço, ex.: `exemplo.com.br`.
3. Escolha o **Status** atual do domínio.
4. Informe a **Data de registro** e a **Data de expiração** (opcionais).
5. Informe o **Valor do registro (R$)** e o **Valor do serviço (R$)** (opcionais; aceitam centavos).
6. Use **Observação** para anotações livres, se precisar.
7. Clique em **Criar**. O domínio passa a aparecer na lista e os indicadores são recalculados.

![Novo domínio](/img/manual/_interno/console-dominios-novo.png)

### Editar um domínio
1. Clique no ícone de **lápis (Editar)** na linha desejada — ou dê **duplo clique** sobre a linha.
2. Ajuste os campos necessários (inclusive o **Status**, para mover o domínio de etapa).
3. Clique em **Salvar**. As alterações aparecem na lista imediatamente.

### Excluir um domínio
1. Clique no ícone de **lixeira (Excluir)** na linha desejada.
2. Confirme na janela **Excluir domínio?**.
3. Clique em **Excluir**.

> Atenção: a exclusão **não pode ser desfeita**.

## Dicas e observações
- O campo **Domínio** é obrigatório — o botão de salvar fica desabilitado enquanto ele estiver vazio.
- Os valores são exibidos em reais; ao cadastrar, use ponto/vírgula conforme o campo de número (ex.: `99,90`).
- O painel de indicadores some silenciosamente se as contagens não estiverem disponíveis no momento — isso não afeta a lista nem o cadastro.
- Esta é uma tela **interna (Console)**: requer acesso de gerência/operação. Operadores de leiloeira comuns não a enxergam.
- Mudar o **Status** é a forma de acompanhar o ciclo de vida do domínio (de "Pendente análise" até "Ativo", ou "Expirado").

## Veja também
- [Domínios padrão](./console-dominios-padrao.md)
