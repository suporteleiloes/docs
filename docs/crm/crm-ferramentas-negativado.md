---
title: Verificação de negativado
sidebar_position: 26
---

# Verificação de negativado

Esta ferramenta verifica se um CPF/CNPJ, e-mail ou telefone **corresponde a alguma pessoa negativada** na sua base. Use antes de habilitar um arrematante ou fechar um negócio: o sistema alerta sobre semelhanças (idênticas ou aproximadas) com negativados. Importante: ela **apenas alerta — não bloqueia** nenhum cadastro.

## Como acessar

**CRM** → **Ferramentas** → **Verificação de negativado**.

![Verificação de negativado](/img/manual/crm/crm-ferramentas-negativado.png)

## O que você vê nesta tela

Um formulário **Dados para verificação** com três campos e os botões **Limpar** e **Verificar**. Após verificar, surge a área de resultado.

| Campo | O que é |
|---|---|
| **CPF/CNPJ** | Documento a verificar. |
| **E-mail** | E-mail a verificar. |
| **Telefone** | Telefone a verificar. |

Você precisa preencher **pelo menos um** dos campos.

## O que dá pra fazer aqui

- **Verificar** os dados informados contra a lista de negativados.
- **Limpar** o formulário e o resultado.

### Verificar dados

1. Preencha pelo menos um dos campos: **CPF/CNPJ**, **E-mail** ou **Telefone**.
2. Clique em **Verificar**.
3. Veja o resultado:
   - Se **nada** for encontrado, aparece a mensagem de que nenhum negativado semelhante foi encontrado.
   - Se houver correspondências, aparece um **Alerta** em destaque e uma tabela com os matches.

![Resultado da verificação](/img/manual/crm/crm-ferramentas-negativado-resultado.png)

A tabela de resultados mostra:

| Coluna | O que é |
|---|---|
| **Pessoa negativada** | Nome da pessoa cadastrada como negativada. |
| **Campo** | Qual dado bateu: CPF/CNPJ, E-mail ou Telefone. |
| **Tipo de correspondência** | **Idêntico** (valor exato) ou **Semelhante** (valor aproximado). |
| **Valor cadastrado** | O valor que está registrado para a pessoa negativada. |
| **Motivo** | Por que a pessoa foi negativada. |

## Dicas e observações

- A verificação **não bloqueia** o cadastro nem o negócio — é um alerta para você revisar e decidir.
- Correspondências do tipo **Idêntico** aparecem em vermelho; **Semelhante** em amarelo. Vale checar as semelhantes com atenção, pois podem ser tentativas de burlar a base com pequenas variações.
- Você pode preencher mais de um campo ao mesmo tempo para uma checagem mais ampla.

## Veja também

- [Supressão de e-mail](crm-supressao.md)
