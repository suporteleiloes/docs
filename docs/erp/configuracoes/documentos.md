---
title: Documentos e Templates
sidebar_position: 4
---

# Documentos e Templates

Esta tela reúne os **documentos e templates** da sua leiloeira — contratos, editais, recibos, notas e qualquer outro modelo que você emite a partir do sistema. Cada template pode usar **variáveis** (como o nome do arrematante ou os dados do lote) que são preenchidas automaticamente na hora de gerar o documento. Você também pode guardar arquivos prontos (PDF/DOCX) como anexos.

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

## Dicas e observações

- A **categoria é obrigatória** ao salvar — se não houver nenhuma, crie pelo botão **+ Nova** dentro do editor.
- As variáveis usam a notação `{{ variavel }}`. A aba **Variáveis** lista as do sistema, as internas e as personalizadas que você criar. As variáveis **só são preenchidas na hora de gerar/emitir o documento** a partir de um registro real (um leilão, um arrematante, etc.) — no editor elas aparecem como espaços reservados.
- A **Duplicar** cria uma cópia imediatamente, já salva, com o nome "Cópia de …" (e o código com sufixo "-COPIA", quando houver código). É a forma rápida de partir de um modelo existente sem mexer no original.
- Atalhos no editor: **Ctrl/Cmd + S** salva; **Ctrl/Cmd + /** foca a busca de variáveis; **Esc** fecha (pedindo confirmação se houver alterações).
- Você pode esconder/mostrar e redimensionar os três painéis do editor — a preferência fica salva no seu navegador.

## Veja também

- [Validade de Documentos](./validade-documentos.md)
