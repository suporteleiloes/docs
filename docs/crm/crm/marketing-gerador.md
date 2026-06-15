---
title: Gerador de Conteúdo
sidebar_position: 6
---

# Gerador de Conteúdo

O Gerador de Conteúdo cria automaticamente peças de divulgação a partir dos **lotes de um leilão**: e-mail HTML pronto, imagem para feed do Facebook, story do Instagram ou banner. É o atalho para montar a comunicação de um leilão sem desenhar tudo do zero, com apoio de IA para gerar imagens ilustrativas e variações de design.

## Como acessar

**CRM** → **Marketing** → **Gerador de Conteúdo**.

![Gerador de Conteúdo](/img/manual/crm/marketing-gerador.png)

## O que você vê nesta tela

A tela é dividida em dois painéis:

- **Configuração** (esquerda) — onde você escolhe o tipo de peça e informa os lotes.
- **Resultado** (direita) — onde a peça gerada aparece para preview, edição e cópia.

### Campos da configuração

| Campo | O que é |
|---|---|
| Tipo de conteúdo | E-mail HTML (com preview + link), Feed Facebook (imagem), Stories Instagram (imagem) ou Banner |
| IDs dos lotes | Os números dos lotes que entram na peça, separados por vírgula, espaço ou linha |

O leilão é identificado automaticamente a partir do **primeiro lote** informado, então use lotes de um mesmo leilão.

## O que dá pra fazer aqui

### Gerar uma peça

1. Escolha o **Tipo de conteúdo**.
2. Em **IDs dos lotes**, digite os números dos lotes (ex.: `1234, 1235, 1240`). O contador mostra quantos foram reconhecidos.
3. Clique em **Gerar conteúdo**.
4. O resultado aparece no painel da direita: para e-mail HTML, um preview e o código; para as imagens, a peça gerada.

### Editar o HTML gerado

No resultado de e-mail, clique em **Editar HTML** para ajustar o conteúdo num editor. Clique em **Aplicar** para confirmar as mudanças.

### Copiar o HTML

Clique em **Copiar HTML** para enviar o código para a área de transferência e colar onde quiser.

### Gerar imagem ilustrativa por IA

Quando o bem não tem foto, abra **Sem foto do bem? Gerar imagem ilustrativa via IA**, descreva a imagem desejada (ex.: "Casa moderna com jardim ao pôr do sol") e clique em **Gerar imagem**. As imagens geradas aparecem para abrir em nova aba.

### Pedir variações de design por IA

No resultado de e-mail, clique em **Variar via IA**. O sistema sugere variações mantendo o conteúdo e mudando paleta, tipografia e layout. Clique em **Aplicar** na variação escolhida.

### Limpar

Clique em **Limpar** para zerar os IDs e o resultado e começar de novo.

## Dicas e observações

- Sempre informe lotes do **mesmo leilão** — o leilão é deduzido do primeiro lote da lista.
- O botão **Gerar conteúdo** só fica ativo quando há pelo menos um ID de lote válido.
- Os recursos de IA (imagem e variações de design) dependem da integração de IA estar habilitada no ambiente.

## Veja também

- [Campanhas](marketing-campanhas.md)
