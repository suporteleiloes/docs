---
title: Gestão de Leilões (lista)
sidebar_position: 1
---

# Gestão de Leilões (lista)

Esta é a tela principal do módulo de Leilões. Aqui você vê todos os leilões e vendas diretas cadastrados, acompanha indicadores rápidos, filtra e busca por qualquer leilão, e cria um leilão novo. É o ponto de partida para abrir qualquer leilão e trabalhar dentro dele.

## Como acessar

**Leilões** → **Leilões** (item de menu principal). A lista também abre ao clicar em "Leilões" em vários breadcrumbs do sistema.

![Gestão de Leilões](/img/manual/erp/leiloes.png)

## O que você vê nesta tela

No topo, o cabeçalho traz os botões de ação geral (Modo APIs, Auditório, Imprimir, Excel e Novo leilão). Logo abaixo aparecem os cartões de indicadores (KPIs), as abas de filtro rápido e, por fim, a tabela de leilões com paginação.

### Cartões de indicadores (KPIs)

Cada cartão é clicável e funciona como atalho de filtro: clique para ver só aqueles leilões e clique de novo no mesmo cartão para limpar o filtro.

| Indicador | O que conta |
|---|---|
| Com Lance(s) | Leilões que já receberam lances |
| Sem Lance | Leilões sem nenhum lance |
| Com Habilitados | Leilões com habilitação ativa |
| Leilões este mês | Próximos leilões do mês corrente |
| Leilões realizados | Total de leilões encerrados |

### Abas de filtro rápido

| Aba | O que mostra |
|---|---|
| Ativos | Leilões em andamento (rascunho, em breve, em loteamento, aberto, em leilão) |
| Finalizados | Cancelados, adiados, suspensos e encerrados |
| Todos | Todos os leilões, sem distinção de status |
| Somente Leilões | Apenas eventos do tipo leilão |
| Somente Venda Direta | Apenas eventos de venda direta |

Ao lado do nome da aba ativa aparece a contagem total de registros.

### Colunas da tabela

A lista é configurável: você liga e desliga colunas pela engrenagem no canto da tabela. As colunas padrão são ID, Código, Data, Resumo, Parâmetros e Status.

| Coluna | O que é |
|---|---|
| Capa | Miniatura da imagem do leilão |
| ID | Número interno do leilão |
| Código | Código do leilão |
| Data | Data da agenda (próximo leilão); mostra também praça/instância (ex.: 1/2) |
| Resumo | Título do leilão; marca "Venda direta" quando for o caso |
| Publicação | Data de publicação (ou "Nunca") |
| Abertura | Data e hora de abertura para lances |
| Encerramento | Data e hora de encerramento da 1ª praça |
| Parâmetros | Chips condensados: nº de lotes, robô do pregão (on/off + intervalo), tipo de habilitação, nº de habilitados e status interno |
| Detalhes | Quantidade de lotes |
| Robô | Estado do robô do pregão e o intervalo entre lances automáticos |
| Habilitação | Tipo de habilitação exigido (ver tipos abaixo) |
| Habilitados | Nº de arrematantes habilitados (mostra ⚠ acima de 300, indicando alto tráfego) |
| Lances | Quantidade de lances |
| Status Interno | Etapa interna (Em preparação, Preparado, Em leilão, Em recebimento, Fechado) |
| Status | Situação do leilão |
| Imóvel Web | Interruptor de publicação na Imóvel Web (só aparece com o Modo APIs ligado) |

## O que dá pra fazer aqui

### Buscar e filtrar

1. Use a busca inteligente para procurar por descrição, processo, placa ou arrematante. Se você digitar só números, a busca entende como ID do leilão.
2. Use a lista **Status** ao lado da busca para filtrar por uma situação específica.
3. Clique em **Mais filtros** para abrir os filtros avançados: Tipo (Online / Presencial / Online + Presencial), Classificação, Leiloeiro, Código, Ano, Tipo de data, Data inicial e Data final, Módulo (Rural) e Tipo de evento.
4. Em **Tipo de data** você escolhe sobre qual data o período (data inicial/final) será aplicado: Próximo leilão, Abertura, Encerramento, Registro ou Publicação.
5. Marque uma ou mais opções de **Status interno** (Em preparação, Preparado, Em leilão, Em recebimento, Fechado).
6. Para zerar tudo, clique em **Limpar filtros**.

### Ordenar a lista

Na barra de ordenação, escolha o campo (Próximo leilão, datas de cada praça, Abertura, Publicação, Ano ou Cadastro/ID) e a direção (crescente ou decrescente). Você também pode clicar no título de uma coluna ordenável para alternar a ordenação.

### Abrir um leilão

- Dê duplo clique na linha (ou pressione Enter com a linha selecionada). Você é levado direto à aba **Lotes** daquele leilão.
- No menu **Ações** (seta no fim da linha) → **Abrir**.

### Cadastrar um novo leilão

1. Clique em **Novo leilão** (botão azul no topo).
2. Preencha o formulário de cadastro e salve. Veja [Novo leilão](./leiloes-novo.md).

### Ações da linha

Clique na seta no fim da linha para abrir o menu de **Ações**:

| Ação | O que faz |
|---|---|
| Abrir | Vai para a aba Lotes do leilão |
| Editar leilão | Abre o formulário de edição |
| Emitir documento | Vai para a aba Relatórios/Documentos do leilão |
| Excluir | Apaga o leilão (pede confirmação) |

### Configurar colunas

1. Clique na engrenagem no canto direito do cabeçalho da tabela.
2. Marque/desmarque as colunas que quer ver.
3. Clique em **Aplicar**. Use **Restaurar padrão** para voltar à configuração original.

### Modo APIs

Clique em **Modo APIs** no topo para exibir a coluna **Imóvel Web**, com um interruptor por linha. A preferência de exibir essa coluna fica salva no seu navegador.

> Atenção: hoje esse interruptor é apenas um controle visual na lista — o estado marcado/desmarcado **não fica gravado por leilão** e a publicação real na Imóvel Web é feita pela configuração de integração do leilão, não por esta tela. Use-o como indicação rápida; a publicação efetiva continua dependendo da integração configurada.
> A confirmar com Tiago: roadmap para que esse interruptor passe a publicar/despublicar de fato a partir da lista.

### Imprimir e exportar

- **Imprimir**: gera o histórico de leilões em formato para impressão.
- **Excel**: exporta a lista atual para uma planilha.

### Auditório

O botão **Auditório** abre o auditório unificado, com as mensagens públicas ao vivo de todos os leilões.

### Tipos de habilitação (coluna Habilitação)

O tipo de habilitação é definido no cadastro do leilão e controla se o arrematante precisa se habilitar antes de dar lances. Os valores possíveis são:

| Tipo | O que significa |
|---|---|
| Desativar | Não há habilitação; qualquer pessoa logada pode dar lance |
| Permitir e obrigatório | Habilitação liberada e exigida para dar lance |
| Permitir, mas não obrigatório | Habilitação disponível, mas o lance não a exige |
| Obrigatório e com análise | Habilitação exigida e sujeita a aprovação manual |
| Somente homologados TRT | Apenas arrematantes homologados no TRT |
| Obrigatório + Contrato | Habilitação exigida com aceite de contrato |
| Assinatura D4Sign | Habilitação com assinatura eletrônica via D4Sign |

## Dicas e observações

- A configuração de colunas vale só para o seu usuário e fica salva no seu navegador.
- Leilões com mais de 300 habilitados exibem um aviso (⚠): isso indica alto tráfego previsto; nesses casos vale contatar o time SL para reforço de infraestrutura.
- O chip de **Robô** mostra se o robô do pregão está ativo e o intervalo entre lances automáticos.
- A coluna **Status Interno** não é ordenável (o servidor não suporta ordenação por esse campo) — as demais colunas com seta são.
- **Excluir** um leilão remove todos os dados dele sem recuperação; use com cuidado.

## Veja também

- [Novo leilão](./leiloes-novo.md)
- [Calendário de Leilões](./leiloes-calendario.md)
- [Monitoramento de Leilão](./leiloes-monitoramento.md)
- [Página do leilão](./leiloes-id.md)
