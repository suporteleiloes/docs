# TEMPLATE / SPEC de página do manual (seguir em TODAS as telas)

Objetivo: manual **do usuário final**, didático, em pt-BR, ensinando a operar cada tela.
Tom: direto, "você", verbos no imperativo ("Clique em…", "Preencha…"). Nada de jargão de código.

Cada tela vira um arquivo `.md` em `docs/<setor>/<grupo>/<tela>.md` com esta estrutura:

```markdown
---
title: <Nome da tela>
sidebar_position: <n>
---

# <Nome da tela>

<1–3 frases: o que é a tela e para que serve no dia a dia.>

## Como acessar
**<Setor>** → **<Grupo>** → **<Item de menu>**  (ou: botão X na tela Y).

![<legenda>](/img/manual/<setor>/<slug>.png)

## O que você vê nesta tela
<Explica as áreas principais da tela: filtros, colunas da lista, abas, indicadores.>

| Coluna / Campo | O que é |
|---|---|
| … | … |

## O que dá pra fazer aqui
<Cada ação/botão importante, o que faz. Inclua prints dos modais quando houver.>

### <Tarefa comum 1 — ex.: Cadastrar um novo X>
1. Clique em **Novo X**.
2. Preencha **<campo>** (…obrigatório/opcional, formato…).
3. …
4. Clique em **Salvar**. <O que acontece em seguida.>

![<modal de cadastro>](/img/manual/<setor>/<slug>-novo.png)

### <Tarefa comum 2 …>
…

## Dicas e observações
- <atalhos, regras de negócio, validações, permissões necessárias (ACL), gating de plano>

## Veja também
- [Tela relacionada](../grupo/outra.md)
```

## Regras de conteúdo
1. **Fonte da verdade = o `.vue` real** da tela (campos, colunas, botões, validações). Sempre ler o componente antes de escrever; não inventar campo.
2. **Prints = sempre do tenant DEMO** (`/img/manual/...`, gerados pelo `shoot.mjs`). Nunca print com dado real.
3. **Permissões/plano**: se a tela exige ACL/role ou módulo do plano, dizer na seção Dicas.
4. **Passo a passo numerado** para toda tarefa que o usuário executa (cadastrar, editar, importar, exportar, aprovar…).
5. **Sem detalhes de implementação** (endpoint, tabela, código) — é manual de USUÁRIO. (A referência técnica vive na doc da API.)
6. Uma tela com abas/estados relevantes → um print por estado importante.
7. Linkar telas relacionadas (Veja também).

## Estrutura de pastas (gerada da toc.json)
`docs/<setor>/_category_.json` (label do setor) → `docs/<setor>/<grupo>/` → `<tela>.md`.
Setores: erp, crm, marketing, sites, console. Antes de tudo: `docs/intro.md` (boas-vindas) e
`docs/primeiros-passos/` (login, navegação geral, busca, conceitos: leilão/lote/bem/arrematante/comitente).
