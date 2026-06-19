---
title: Brand Kit
sidebar_position: 3
---

# Brand Kit

O Brand Kit guarda a identidade visual da leiloeira: logo, paleta de cores e tipografia. Esses dados são usados pelo Gerador de Artes para manter todos os materiais de marketing com a mesma cara.

## Como acessar

**CRM** → **Configurações** → **Brand Kit** (rota `/crm/configuracoes/brand-kit`).

![Brand Kit](/img/manual/crm/crm-configuracoes-brand-kit.png)

## O que você vê nesta tela

Um formulário dividido em quatro blocos. Cada instalação tem **um** brand kit; quando ainda não há nada salvo, a tela vem preenchida com valores padrão.

| Bloco | Campos |
|---|---|
| Identidade | Nome do brand kit (obrigatório) |
| Logos | URL do logo principal; URL do logo para modo escuro (opcional). Há prévia das imagens |
| Paleta de cores | Cor primária, secundária e de acento — cada uma com seletor de cor e campo de texto, mais uma prévia da paleta |
| Tipografia | Fonte de título e fonte de corpo (ex.: Inter, Poppins, Roboto) |

## O que dá pra fazer aqui

### Definir a identidade visual

1. Em **Identidade**, informe o **Nome do brand kit** (campo obrigatório).
2. Em **Logos**, cole a **URL do logo principal**. Se quiser uma versão para fundos escuros, preencha também a **URL do logo dark mode**. As prévias aparecem abaixo dos campos.
3. Em **Paleta de cores**, escolha as cores **Primária**, **Secundária** e **Acento**. Você pode usar o seletor de cor (quadradinho colorido) ou digitar o código no campo de texto ao lado. A faixa de prévia mostra como as três ficam juntas.
4. Em **Tipografia**, informe a **Fonte de título** e a **Fonte de corpo**.
5. Clique em **Salvar**. Aparece a confirmação "Brand kit salvo".

## Dicas e observações

- As logos são informadas por **URL** — hospede a imagem antes e cole o endereço aqui.
- A versão **dark mode** do logo é opcional; use-a se a logo principal não fica legível em fundo escuro.
- Os campos de tipografia aceitam nomes de fontes (você pode listar alternativas separadas por vírgula).
- As cores e fontes definidas aqui alimentam o **Gerador de Artes** para manter a consistência da marca.
- Existe **um único brand kit por conta**. Salvar sempre atualiza esse mesmo kit (não há criação de múltiplos kits).
- O acesso a esta tela usa a **mesma permissão do Gerador de Artes** — quem pode usar o gerador edita o brand kit, e vice-versa.

## Veja também

- [Configurações do CRM](./crm-configuracoes.md)
