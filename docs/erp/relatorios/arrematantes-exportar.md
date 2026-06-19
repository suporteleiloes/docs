---
title: Exportar Arrematantes
sidebar_position: 4
---

# Exportar Arrematantes

Esta tela gera uma relação dos arrematantes da sua leiloeira em HTML (na própria tela) ou em planilha Excel. Use-a quando precisar de uma lista das pessoas cadastradas como arrematantes — para conferência ou para abrir os dados no Excel.

:::warning Recurso em construção
Hoje esta exportação ainda está **incompleta** no sistema. Os filtros **Comitente** e **Tempo mínimo (dias)** aparecem na tela, mas **ainda não afetam o resultado** — o relatório não os utiliza. A visualização em HTML mostra apenas um texto de resumo (não a tabela final), e a planilha Excel traz somente as colunas **ID**, **Apelido** e **Nome**, e não a base completa. Se você precisa de uma relação detalhada de arrematantes com filtros, use por enquanto o relatório de **Compras** (em Relatórios → Arrematantes) ou um [Relatório Dinâmico](./dinamicos.md). A versão completa desta tela está prevista para uma próxima atualização.

> A confirmar com a equipe: data de conclusão desta exportação e quais colunas/filtros entrarão na versão final.
:::

## Como acessar

**ERP** → **Relatórios** → na **Central de Relatórios**, seção **Arrematantes** → cartão **Exportar Arrematantes**.

Você também chega direto pelo endereço `/relatorios/arrematantes/exportar`.

![Exportar Arrematantes](/img/manual/erp/arrematantes-exportar.png)

## O que você vê nesta tela

A tela é simples: um cartão de **Filtros** com dois campos e dois botões de geração. Abaixo dele, quando você escolhe visualizar em HTML, aparece um segundo cartão com o resultado na própria página.

| Campo | O que é |
|---|---|
| **Comitente** | Campo de busca por comitente (digite o nome ou documento e escolha na lista). **Atenção:** atualmente este filtro não tem efeito sobre o resultado — veja o aviso acima. |
| **Tempo mínimo (dias)** | Número de dias, já preenchido com **30**, sem aceitar valor negativo. **Atenção:** atualmente este filtro também não tem efeito sobre o resultado. |

## O que dá pra fazer aqui

Há duas formas de gerar a relação, lado a lado no rodapé do cartão de filtros:

- **Visualizar (HTML)** — exibe o resultado na própria tela, logo abaixo dos filtros. Hoje mostra apenas um resumo em texto (não a tabela final).
- **Exportar Excel** — baixa a planilha para o seu computador. Hoje a planilha traz as colunas **ID**, **Apelido** e **Nome**.

Enquanto o relatório está sendo montado, os botões mostram **Gerando...** e ficam indisponíveis. Aguarde a conclusão antes de clicar de novo.

### Visualizar a relação na tela

1. (Opcional) No campo **Comitente**, digite o nome e selecione o comitente desejado. Para trazer todos, deixe em branco.
2. (Opcional) Ajuste o **Tempo mínimo (dias)** — o padrão é 30.
3. Clique em **Visualizar (HTML)**.
4. Aguarde a mensagem **Gerando...** desaparecer. A relação aparece em um cartão logo abaixo dos filtros.

### Exportar para Excel

1. (Opcional) Selecione o **Comitente** e ajuste o **Tempo mínimo (dias)**, como acima.
2. Clique em **Exportar Excel**.
3. Aguarde a geração. O arquivo é baixado automaticamente pelo seu navegador — procure na pasta de downloads.

## Dicas e observações

- Enquanto a tela estiver em construção, o resultado **não depende** dos filtros: independentemente do que você preencher, sai a mesma relação. Veja o aviso no topo da página.
- Se algo der errado na geração, a tela exibe um aviso de **Erro** explicando que não foi possível gerar. Tente novamente.
- Os dados de arrematantes são pessoais (LGPD). Trate a planilha exportada com cuidado e não a compartilhe além do necessário.

## Veja também

- [Central de Relatórios](./relatorios.md)
- [Relatórios dinâmicos](./dinamicos.md)
