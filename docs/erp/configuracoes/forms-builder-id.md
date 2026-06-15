---
title: Construtor de Formulário
sidebar_position: 4
---

# Construtor de Formulário

O Construtor é o editor visual onde você monta um formulário: adiciona campos, define a ordem arrastando-os e vê o resultado ao vivo em uma pré-visualização. É a tela aberta ao clicar em **Construtor** no cartão de um formulário.

## Como acessar

**Configurações** → **Administração** → **Formulários** → botão **Construtor** no cartão do formulário desejado.

![Construtor de Formulário](/img/manual/erp/forms-builder-id.png)

## O que você vê nesta tela

O título mostra o nome do formulário em edição. No topo, dois botões: **Voltar** e **Salvar alterações** (este só fica ativo quando há mudanças por salvar; quando tudo está salvo, exibe "Salvo").

A área de trabalho tem duas colunas:

| Área | O que é |
|---|---|
| Coluna esquerda — **Campos** | Lista dos campos do formulário, na ordem em que aparecerão. Cada item mostra o rótulo, a chave, o tipo e o tópico. Campos inativos aparecem esmaecidos. |
| Coluna direita — **Preview ao vivo** | Mostra o formulário sendo montado, atualizando a cada alteração. |

## O que dá pra fazer aqui

### Adicionar um campo

1. Clique em **Adicionar**, no alto da coluna esquerda.
2. Na janela, preencha em *Identificação*: **Código único (key)** (obrigatório), **Rótulo**, **Tipo**, se é **Obrigatório** e o **Placeholder**.
3. Vincule um **Tópico** (agrupamento visual), se quiser.
4. Para os tipos seleção, rádio ou checkbox, preencha as **Opções** (uma por linha, formato `valor=Rótulo`).
5. Em *Apresentação*, ajuste **Rótulo em negrito**, **Campo em negrito**, **Somente leitura**, **Ativo**, **Posição do rótulo**, **Layout**, **Largura CSS** e **Altura CSS**.
6. Em *Dados & Ajuda*, informe **Valor padrão**, **Pré-título de seção**, **Texto de ajuda (helper)** e a **Descrição interna** (nota que não aparece para quem preenche).
7. As seções *Avançado* (Bind e Regras Condicionais) e *Layout Pre / Pos (HTML livre)* são opcionais e voltadas a usos técnicos.
8. Clique em **Adicionar**. O campo entra na lista e aparece na pré-visualização.

![Adicionar campo no construtor](/img/manual/erp/forms-builder-id-campo.png)

### Editar um campo

1. Clique sobre o campo na lista da esquerda.
2. Altere o que precisar na janela.
3. Clique em **Salvar**.

### Reordenar os campos

Arraste um campo pela alça (ícone de pontos à esquerda) e solte na nova posição. A ordem é refletida na pré-visualização.

### Remover um campo

Clique no ícone de **lixeira** no item do campo. Ele sai da lista imediatamente.

### Salvar o formulário

Clique em **Salvar alterações** no topo. Uma mensagem confirma o sucesso.

## Dicas e observações

- O **Código único (key)** não pode se repetir no mesmo formulário; o sistema avisa se houver duplicidade. Também é obrigatório informá-lo.
- Adicionar, editar, reordenar ou remover campos só fica gravado depois de clicar em **Salvar alterações**.
- Se tentar **Voltar** com alterações não salvas, o sistema pergunta antes se você quer descartá-las.
- A pré-visualização à direita é só para conferência — ela acompanha o que você monta em tempo real.

## Veja também

- [Formulários](forms.md)
- [Configuração de Formulários](forms-config.md)
