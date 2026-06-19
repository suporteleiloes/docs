---
title: Importação com análise
sidebar_position: 6
---

# Importação com análise

Esta é a versão em duas etapas da importação por planilha. Primeiro você **analisa** o arquivo e vê uma pré-visualização — o sistema indica, linha a linha, se o bem já existe e qual ação vai tomar. Só depois você **confirma** e os lotes são criados. É a forma mais segura de importar, porque você revê tudo antes de gravar.

## Pré-requisitos

- Ter um leilão já criado para receber os lotes.
- Ter a planilha pronta, seguindo o **mesmo modelo** da [Importação por planilha](./importacao-planilha.md) (mesmas colunas). Formatos aceitos: **XLSX**, **XLS** ou **CSV**.
- (Opcional) Saber qual **comitente** vincular aos bens importados.

> A confirmar: a etapa de gravação depende dos endpoints `importar-planilha-analise` e `importar-planilha-confirmar` na API V5. Se a análise não avançar, confirme com o suporte se o serviço já está disponível no seu ambiente.

## Como acessar

**Leilões** → abra um leilão → aba **Preparação** → **Importação com análise**.

![Importação com análise](/img/manual/erp/importacao-analise.png)

## O que você vê nesta tela

No cabeçalho há um indicador das duas etapas: **1. Analisar** e **2. Confirmar**. Ele mostra em que ponto do processo você está.

Os blocos da tela:

1. **Comitente (opcional)** — para vincular os bens importados a um comitente. Fica bloqueado depois que a análise é gerada.
2. **Área de upload** do arquivo (mesmas colunas do modelo da importação simples).
3. **Mapeamento de colunas** — aparece quando o sistema consegue ler os cabeçalhos do arquivo (típico em CSV). Mostra, lado a lado, cada **coluna do arquivo** e o **campo do sistema** correspondente, com um resumo do tipo "X/Y colunas mapeadas". Você pode trocar o destino de cada coluna ou marcar **— ignorar —**. Se ajustar à mão e quiser voltar ao automático, use **Re-aplicar auto-mapeamento**.
4. **Pré-visualização** — a tabela com o resultado da análise.

### Campos reconhecidos na planilha

O sistema tenta reconhecer automaticamente estas colunas (e variações comuns do nome):

| Campo | Observação |
|---|---|
| Número do Lote | |
| Descrição | |
| Placa, Chassi, Renavam | dados de veículo |
| Marca, Modelo, Cor | |
| Ano Fabricação, Ano Modelo | |
| Valor Avaliação (R$) | |
| Valor Inicial (R$) | lance inicial / 1ª praça |
| Valor 2º Leilão (R$), Valor 3º Leilão (R$) | praças seguintes |
| Venda Mínima (R$) | valor mínimo de venda |
| Incremento (R$) | |
| Sublote de (nº lote pai) | para criar sublotes |
| Observação | |

Colunas que ficarem sem campo no mapeamento são simplesmente ignoradas.

### Tabela de pré-visualização

| Coluna | O que é |
|---|---|
| Linha | Número da linha no arquivo |
| Descrição | Descrição do bem lido |
| Placa | Placa do bem, quando houver |
| Encontrado | Indica "Sim" se o bem já existe no sistema |
| Ação | O que será feito com a linha |

Resumo no topo da pré-visualização: total de linhas analisadas, quantos bens foram encontrados, quantos são novos e quantos erros.

## O que dá pra fazer aqui

### Etapa 1 — Analisar

1. (Opcional) Selecione um **Comitente**.
2. Clique na área de upload e escolha o arquivo (XLSX, XLS ou CSV).
3. Confira o **Mapeamento de colunas**, se aparecer, e ajuste o que for preciso.
4. Clique em **Analisar arquivo**.
5. A **Pré-visualização** abre com a análise de cada linha.

### Etapa 2 — Revisar e confirmar

1. Para cada linha, escolha a **Ação** na lista:
   - **Criar novo bem** — cadastra um bem novo.
   - **Usar existente** — aproveita o bem já encontrado no sistema.
   - **Ignorar linha** — não importa essa linha.
2. Se houver divergências, você pode baixar a lista delas em **Baixar erros (XLSX)**. O arquivo lista linha, mensagem, descrição e placa de cada divergência.
3. **Forçar importação (opcional)** — havendo divergências, é possível marcar a opção de **forçar** para importar mesmo assim, ignorando as linhas com erro. Nesse caso o sistema exibe um aviso reforçado antes de gravar. Use com cautela.
4. Clique em **Confirmar e importar** e confirme. Ao final, o sistema avisa quantos lotes foram importados.

> O contador de "Serão importados N lote(s)" considera apenas as linhas cuja **Ação** não está como **Ignorar linha**.

### Cancelar

- Clique em **Cancelar** para descartar a análise e começar de novo.

## Dicas e observações

- As linhas marcadas com erro não são importadas.
- O sistema sugere automaticamente uma ação por linha (usar existente quando o bem foi encontrado, criar quando é novo); você pode mudar antes de confirmar.
- Se quiser importar de forma direta, sem a etapa de revisão, use a [Importação por planilha](./importacao-planilha.md).

## Erros comuns

- **Coluna não reconhecida** — se o cabeçalho do arquivo tiver um nome fora do padrão, ele pode cair como **— ignorar —** no mapeamento. Confira o mapeamento antes de analisar e ajuste manualmente.
- **Linhas com erro** — linhas marcadas com divergência **não são importadas** (a menos que você use o **forçar importação**, que apenas as ignora). Corrija a planilha e analise de novo, ou baixe a lista de erros para revisar.
- **Bem já existente importado em duplicidade** — quando o sistema marca **Encontrado: Sim**, a ação sugerida é **Usar existente**. Se você trocar para **Criar novo bem**, vai duplicar o cadastro. Mantenha a sugestão, salvo necessidade real.
- **Comitente errado** — o comitente é aplicado a todos os bens da importação e fica bloqueado depois da análise. Confira antes de analisar; para mudar, cancele e recomece.

## Veja também

- [Importação por planilha](./importacao-planilha.md)
- [Importação por webservice](./importacao-webservice.md)
- [Loteamento rápido](./loteamento-rapido.md)
- [Lotes do leilão](./lotes.md)
