---
title: IA — Configuração
sidebar_position: 13
---

# IA — Configuração

Esta tela mostra o **guia semântico de schema** que a IA usa para entender o banco e gerar consultas SQL. É o material de referência que ensina a IA quais tabelas existem e quais convenções seguir.

## Como acessar
**Console** → **IA Operacional** → **Configuração**

![IA — Configuração](/img/manual/_interno/console-ia-config.png)

## O que você vê nesta tela

Um aviso explicando que este guia descreve as tabelas e as convenções (por exemplo, usar sempre `deleted = 0` nas consultas) que a IA aplica para gerar SQL. Logo abaixo, o **texto do guia** é exibido por inteiro, em formato de leitura. Enquanto carrega, aparece um indicador de carregamento.

| Área | O que é |
|---|---|
| Aviso (topo) | Explica o propósito do guia e que ele é, hoje, mantido pela equipe técnica no backend. |
| Guia de schema | Texto completo com as tabelas e convenções que a IA usa. |

## O que dá pra fazer aqui

Esta tela é **somente leitura**. Use-a para conferir o que a IA "sabe" sobre o banco — quais tabelas reconhece e quais regras segue ao montar consultas. Não há botões de edição: o guia é mantido pela equipe técnica diretamente no sistema.

## Dicas e observações
- Tela exclusiva de **gerência** (perfil ROLE_ROOT).
- O guia funciona como o "treinamento" de schema da IA: editá-lo é como a IA aprende a estrutura do banco. Hoje essa edição é feita pela equipe técnica, não por esta tela.
- Uma convenção importante registrada no guia é o filtro `deleted = 0`, que evita contar registros já excluídos (soft-delete) nas consultas.

## Veja também
- [IA — Operações (Sistema A)](console-ia-operacoes.md)
- [Perfis de acesso (IA)](console-ia-perfis.md)
