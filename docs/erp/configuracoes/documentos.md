---
title: Documentos e Templates
sidebar_position: 4
---

# Documentos e Templates

Esta tela reúne os **documentos e templates** do seu negócio — contratos, editais, recibos, notas e qualquer outro modelo que você emite a partir do sistema. Cada template pode usar **variáveis** (como o nome do arrematante ou os dados do lote) que são preenchidas automaticamente na hora de gerar o documento. Você também pode guardar arquivos prontos (PDF/DOCX) como anexos.

## Como acessar

**Gestão** → **Documentos** → **Documentos e Templates**

![Documentos e Templates](/img/manual/erp/documentos.png)

## O que você vê nesta tela

No topo há a **busca** (por nome, código ou assunto) e dois filtros avançados: **Categoria** e **Visibilidade** (Todos / Apenas públicos / Apenas privados). Abaixo, a lista de documentos.

| Coluna | O que é |
|---|---|
| # | Número (identificador) do documento. |
| Nome | Nome do documento, com a descrição e o código logo abaixo. |
| Categoria | Categoria à qual o documento pertence. |
| Finalidades | Entidades para as quais o template foi habilitado (Leilão, Bem, Lote, Arrematante, etc.). |
| Público | Se o documento é **Público** ou **Privado**. |
| Atualizado | Data da última alteração. |

Você pode clicar nos cabeçalhos **#**, **Nome**, **Público** e **Atualizado** para ordenar a lista.

## O que dá pra fazer aqui

Em cada linha há quatro ações: **Baixar anexo** (seta para baixo), **Duplicar** (dois retângulos), **Editar** (lápis) e **Excluir** (lixeira). Um **duplo clique** na linha também abre a edição.

### Cadastrar um novo documento / template

1. Clique em **Novo documento**. Abre o editor em tela cheia, dividido em três painéis: **Detalhes** (esquerda), **Editor** (centro) e **Preview / Variáveis** (direita).
2. No painel **Detalhes do documento**, preencha:
   - **Nome** (obrigatório) e, se quiser, **Código**, **Assunto / Objeto** e **Ordem**.
   - **Categoria** (obrigatória) — escolha uma existente ou clique em **+ Nova** para criar.
   - **Público** (Sim/Não) — quando público, o documento pode ser acessado por um link externo (sem login), útil para disponibilizar um modelo para terceiros.
   - **Receber atualizações** (Sim/Não) — marque se quer que este documento continue recebendo melhorias do modelo-padrão do sistema. Deixe desmarcado se você personalizou o conteúdo e não quer que ele seja sobrescrito.
   - **Descrição** (opcional).
3. Escreva o conteúdo no painel central. Use o **Editor visual** (com barra de formatação) ou a aba **HTML / Source** para editar o código diretamente.
4. Para inserir uma **variável**, abra a aba **Variáveis** no painel direito e clique na variável desejada — ela é inserida no texto. Você também pode digitar `{{` no editor visual para abrir a lista.
5. Acompanhe o resultado na aba **Preview** do painel direito (atualiza sozinha após você parar de digitar).
6. Clique em **Criar documento** (ou pressione **Ctrl/Cmd + S**).

![Editor de documento](/img/manual/erp/documentos-novo.png)

#### Configurações avançadas (dentro do editor)

No painel **Detalhes**, abra a seção **Configurações avançadas** para:

- **Exclusivo para entidades**: marque para quais finalidades o template fica disponível (Leilão, Bem, Lote, Arrematante, Vistoria, Conta a Pagar/Receber, Comitente, Tarefa, Processo, Pessoa, Remoção). Essa escolha define **onde** o template aparece para emissão: um template marcado para "Arrematante" surge na ficha do arrematante, um marcado para "Leilão" surge no leilão, e assim por diante. Se você não marcar nenhuma finalidade, o template pode não aparecer em lugar nenhum para emissão.
- **Restringir formatos de emissão**: limite os formatos de saída (Word, PDF, Excel, Impressão). Sem restrição, todos os formatos ficam disponíveis.

#### Documento como arquivo (sem template)

Se o documento é apenas um arquivo pronto (sem template HTML), ligue a chave **Substituir editor por upload** no painel Detalhes e envie o arquivo na seção **Anexo** (botão **Selecionar arquivo** ou arraste e solte). Mesmo nos templates normais, você pode anexar um arquivo de referência opcional.

### Editar um documento

1. Clique no ícone de **lápis** (ou dê duplo clique na linha).
2. Faça as alterações no editor de três painéis.
3. Clique em **Salvar**. Se tentar fechar com alterações não salvas, o sistema pede confirmação.

### Duplicar um documento

1. Clique no ícone de **Duplicar** na linha.
2. Uma cópia é criada com o nome **"Cópia de …"** — edite-a conforme necessário.

### Baixar o anexo

1. Clique no ícone de **seta para baixo** (Baixar anexo).
2. Se o documento tiver um arquivo anexo, ele é aberto/baixado. Se não tiver, o sistema avisa que não há anexo.

### Excluir um documento

1. Clique no ícone de **lixeira**.
2. Confirme na janela. Atenção: a exclusão é permanente e não pode ser desfeita.

## Personalizar os documentos que o sistema gera

Nota de arrematação, recibos, fatura, termo de habilitação, cobrança, autos, certidões e os e-mails automáticos ao arrematante são **documentos desta tela**. Cada um tem um **código fixo** (por exemplo, `leilao.nota-arrematacao-lote`). Quando o sistema vai gerar o documento, ele procura nesta ordem:

1. **O documento escolhido no próprio leilão** (cadastro do leilão, bloco de templates: Nota de Arrematação, Fatura, Recibo, Termo de Habilitação, Certidão de Publicação, Cobrança...).
2. **O documento desta tela com aquele código** — é ele que vale para todos os leilões.
3. O modelo padrão do sistema.

O seu ERP já vem com esses documentos cadastrados, com o conteúdo padrão. **Para personalizar, edite o documento que já existe** (busque pelo nome ou pelo código) ou **duplique** e ajuste a cópia.

![Busca dos documentos da nota de arrematação](/img/manual/erp/configuracoes/documentos-busca-nota.jpg)

### Como editar com segurança

1. Busque o documento (ex.: "nota") e clique no **lápis**.
2. Documentos com **lógica** (repetições como "um bloco por lote" e condições) abrem direto na aba **HTML / Source**, com o aviso *"Lógica Twig detectada"*. Edite nesse modo — o editor visual desmontaria a lógica.
3. Use a aba **Variáveis** para inserir dados (nome do arrematante, valores do lote, datas). Cada documento recebe um conjunto de dados: use variáveis que já aparecem no modelo ou peça ajuda ao suporte.
4. Confira o resultado no painel **Preview** (veja abaixo): ele mostra o documento **pronto**, com repetições, condições e valores formatados. Clique em **PDF** para ver exatamente como sai impresso.
5. Salve. Se quiser uma última conferência, **gere o documento de um lote** (baixe o PDF, sem enviar ao arrematante).
6. Se você personalizou, deixe **Receber atualizações = Não**, para uma melhoria futura do modelo padrão não sobrescrever o seu texto.

![Editor no modo HTML / Source com o aviso de lógica Twig](/img/manual/erp/configuracoes/documentos-editor-html.jpg)

![Aba Variáveis do editor](/img/manual/erp/configuracoes/documentos-variaveis.jpg)

### Pré-visualizar antes de salvar

O painel **Preview** (à direita do editor) monta o documento de verdade, igual à geração do sistema: repete os lotes, aplica as condições e formata valores e datas. Ele atualiza sozinho 2 segundos depois que você para de digitar.

| No topo do Preview | Para quê |
|---|---|
| **Dados de exemplo** / **Dados do leilão** | Mostra de onde vêm os dados. Por padrão, dados **fictícios** (arrematante, leiloeiro e 3 lotes de exemplo), sem nenhum dado real. |
| **Leilão nº** e **Lote** | Informe o número (ID) de um leilão e, se quiser, de um lote **do seu ERP** para ver o documento com os dados reais dele. O que não existir nele continua de exemplo. |
| **PDF** | Gera o PDF da prévia, com o mesmo formato do documento real. |

Se houver um erro no template, o Preview mostra **"Erro no template — linha N"** e o motivo (por exemplo, *faltou fechar um* `{% if %}`). Corrija no editor: a prévia atualiza sozinha.

![Preview com o documento renderizado e o botão PDF](/img/manual/erp/configuracoes/documentos-preview-real.jpg)

![Erro no template com a linha indicada](/img/manual/erp/configuracoes/documentos-preview-erro.jpg)

### Restaurar o modelo padrão

Ao lado do campo **Código**, o botão **Restaurar padrão** carrega no editor o modelo original do sistema para aquele código (por exemplo, `leilao.nota-arrematacao-lote`). Nada é salvo até você clicar em **Salvar**, então dá para comparar e desistir. Útil quando uma personalização quebrou o documento.

### Formatação de valores

| Escreva | Resultado |
|---|---|
| `{{ lote.valorArremate\|moeda }}` | R$ 12.345,67 |
| `{{ leilao.data1\|date('d/m/Y') }}` | 12/11/2026 |
| `{{ ARREMATANTE.DOCUMENTO\|cpfCnpj }}` | CPF/CNPJ formatado |
| `{{ valor\|numeroExtenso }}` | valor por extenso |

:::warning Cuidados
- Por segurança, o documento só aceita comandos de formatação e repetição: `{% include %}`, `{% import %}` e filtros como `map` não são permitidos, e campos de senha nunca aparecem. O Preview avisa quando algo não é permitido.
- Se no documento gerado aparecer `{{ ... }}` ou `{% ... %}`, há um erro de digitação na lógica. Se aparecer `p-n/d` ou `v-n/d`, a variável não existe para aquele documento.
- Os PDFs não aceitam todo tipo de layout: prefira **tabelas** para alinhar colunas (flexbox e grade não funcionam) e use a logomarca cadastrada no sistema.
- O campo **Categoria** mostra o caminho completo (ex.: *Documentos de leilão › Notas*). Mantenha a categoria do documento do sistema: é ela que faz o documento aparecer na lista de templates do cadastro do leilão.
:::

:::tip Precisa de ajuda?
O suporte da Suporte Leilões ajusta documentos para você. Abra um chamado na Central (conta.suporteleiloes.com.br) dizendo qual documento e o que mudar, de preferência com um exemplo.
:::

## Dicas e observações

- A **categoria é obrigatória** ao salvar — se não houver nenhuma, crie pelo botão **+ Nova** dentro do editor.
- As variáveis usam a notação `{{ variavel }}`. A aba **Variáveis** lista as do sistema, as internas e as personalizadas que você criar. No **Preview** elas aparecem com dados de exemplo (ou do leilão informado); na hora de gerar/emitir, com os dados do registro real.
- A **Duplicar** cria uma cópia imediatamente, já salva, com o nome "Cópia de …" (e o código com sufixo "-COPIA", quando houver código). É a forma rápida de partir de um modelo existente sem mexer no original.
- Atalhos no editor: **Ctrl/Cmd + S** salva; **Ctrl/Cmd + /** foca a busca de variáveis; **Esc** fecha (pedindo confirmação se houver alterações).
- Você pode esconder/mostrar e redimensionar os três painéis do editor — a preferência fica salva no seu navegador.

## Veja também

- [Validade de Documentos](./validade-documentos.md)
