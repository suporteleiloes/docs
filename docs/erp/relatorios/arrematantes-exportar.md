---
title: Exportar Arrematantes
sidebar_position: 4
---

# Exportar Arrematantes

Esta tela gera a base completa de arrematantes da sua leiloeira. Use-a quando precisar de uma relação detalhada das pessoas que arremataram em seus leilões — para conferência, mala direta, prestação de contas a um comitente ou simplesmente para abrir os dados no Excel.

## Como acessar

**Relatórios** → na **Central de Relatórios**, seção **Arrematantes** → cartão **Exportar Arrematantes**.

Você também chega direto pelo endereço `/relatorios/arrematantes/exportar`.

![Exportar Arrematantes](/img/manual/erp/arrematantes-exportar.png)

## O que você vê nesta tela

A tela é simples: um cartão de **Filtros** com dois campos e dois botões de geração. Abaixo dele, quando você escolhe visualizar em HTML, aparece um segundo cartão com o resultado na própria página.

| Campo | O que é |
|---|---|
| **Comitente** | Permite restringir a exportação aos arrematantes ligados a um comitente específico. Comece a digitar o nome (ou documento) e escolha na lista que aparece. Deixe em branco para trazer **todos** os arrematantes. |
| **Tempo mínimo (dias)** | Número de dias usado como critério mínimo do relatório. Já vem preenchido com **30**. Pode ajustar para mais ou para menos; não aceita valor negativo. |

## O que dá pra fazer aqui

Há duas formas de gerar a relação, lado a lado no rodapé do cartão de filtros:

- **Visualizar (HTML)** — monta a relação na própria tela, logo abaixo dos filtros. Bom para uma conferência rápida sem precisar abrir nenhum arquivo.
- **Exportar Excel** — baixa a planilha para o seu computador. Use quando for trabalhar os dados (ordenar, filtrar, enviar a alguém).

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

- **Comitente em branco = todos.** Só preencha o comitente se quiser realmente filtrar.
- O campo de comitente busca conforme você digita; se a lista não aparecer, escreva mais letras do nome ou confira a grafia.
- Se algo der errado na geração, a tela exibe um aviso de **Erro** explicando que não foi possível gerar. Confira os filtros e tente novamente.
- Os dados de arrematantes são pessoais (LGPD). Trate a planilha exportada com cuidado e não a compartilhe além do necessário.

## Veja também

- [Central de Relatórios](./relatorios.md)
- [Relatórios dinâmicos](./dinamicos.md)
