---
sidebar_position: 2
---

# Gestão de Bens

Nosso módulo de bens oferece toda tecnologia e funcionalidades para cadastrar e gerir todo tipo de bem e sua esteira de venda. Em especial, nosso sistema possui requisitos funcionais mais avançados para gestão de **Veículos** e **Imóveis**.

## Definição sobre um bem

É muito importante entender a modelagem do nosso sistema. Pense em um bem como um produto, este produto precisa ser cuidado *(gestão)* até ser anunciado para venda, que pode ser um **Leilão**, por intermédio de um **Lote** ou uma **Venda Direta**.

Abaixo enviamos uma lista de recomendações importantes sobre a gestão de bens:

- Um bem deve ser único no sistema, enquanto estiver no estoque, até a sua venda;
- Após a venda, o bem sai do estoque e sua data de saída é atualizada, uma vez vendido, não utilize mais o bem se o mesmo voltar para seu estoque, crie um novo para manter o histórico anterior.

## Componentes
