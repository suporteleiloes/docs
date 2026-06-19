---
title: Configurar etapas do funil
sidebar_position: 7
---

# Configurar etapas do funil

Nesta tela você define as etapas de um funil: o nome, a cor, a descrição, o critério de entrada automática e quais etapas representam o fim positivo ou negativo da jornada. As etapas configuradas aqui são as colunas que aparecem no Funil de Relacionamento.

## Pré-requisitos

- Pelo menos um **funil** já cadastrado. Ao abrir a tela sem nenhum funil, aparece "Nenhum funil encontrado" e não há etapas para configurar.
- Permissão **CRM_FUNIL_EDITAR** para criar, editar ou remover etapas (sem ela, a tela é apenas de leitura).

## Como acessar
**CRM** → **Funil de Relacionamento** → botão **Configurar etapas** (URL `/crm/pipeline/config`).

Você também pode abrir um funil específico direto pela URL `/crm/pipeline/config?funil=ID`.

![Configurar etapas do funil](/img/manual/crm/crm-pipeline-config.png)

## O que você vê nesta tela

No topo, o seletor de **Funil** (escolha qual funil configurar) e o botão **Salvar alterações**. Um aviso mostra quantas alterações ainda não foram salvas. Abaixo, a lista de etapas, cada uma em um cartão editável.

| Campo do cartão | O que é |
|---|---|
| Punho de arraste + número | Arraste o punho para reordenar; o número é a ordem da etapa. |
| Nome | Nome da etapa (obrigatório). |
| Cor | Cor da etapa (seletor de cor com código hexadecimal). |
| Descrição | Frase curta que aparece em tooltips e relatórios. |
| Critério de entrada automática | Quando a pessoa entra sozinha nesta etapa: Manual, Ao criar pessoa, Após X dias sem login, Ao arrematar ou Ao habilitar. |
| Etapa final positiva / negativa | Marca se a etapa representa o desfecho positivo ou negativo (são mutuamente exclusivos). |

## O que dá pra fazer aqui

### Selecionar o funil
1. Escolha o funil no seletor **Funil:** no topo. As etapas exibidas mudam conforme o funil.

### Adicionar uma etapa
1. Clique em **Adicionar etapa** (no rodapé ou no estado vazio).
2. Preencha o **Nome** (obrigatório), escolha a **Cor** e a **Descrição**.
3. Defina o **Critério de entrada automática**. Se escolher "Após X dias sem login", informe a quantidade de dias.
4. Se for o caso, ligue **Etapa final positiva** ou **Etapa final negativa**.

### Editar etapas
1. Edite os campos diretamente nos cartões. Cada alteração marca a etapa como "Não salvo".

### Reordenar etapas
1. Arraste o punho lateral do cartão para a posição desejada.

### Remover uma etapa
1. Clique em **Remover** no cartão.
2. Se a etapa já existe no servidor, confirme — as pessoas nela precisarão ser recategorizadas e a ação não pode ser desfeita. Etapas recém-adicionadas (ainda não salvas) somem na hora.

### Salvar tudo
1. Clique em **Salvar alterações** no topo. Todas as etapas com pendências são gravadas de uma vez.
2. Se faltar nome em alguma etapa, o sistema avisa antes de salvar.

## Regras de negócio e limitações

- **Salvamento em lote, não automático.** As alterações ficam apenas no seu navegador (marcadas como "Não salvo") até você clicar em **Salvar alterações**. Se sair da tela antes, as pendências se perdem. O contador "X alteração(ões) não salva(s)" mostra o que está pendente.
- **Nome é obrigatório.** Se faltar nome em qualquer etapa pendente, o sistema avisa e nada é salvo até você corrigir.
- **Final positiva x negativa são exclusivos.** Ligar "Etapa final positiva" desliga "negativa" automaticamente, e vice-versa.
- **Critério "Após X dias sem login" exige o número de dias.**
- **Remoção bloqueada com negócios ativos.** O sistema só remove uma etapa que não tenha negócios vinculados. Se houver negócios na etapa, a remoção é recusada (erro "Etapa tem negócios ativos — mova/conclua antes de remover"); mova ou conclua esses negócios antes.

> A confirmar: nem todos os campos do cartão são persistidos pelo backend atual da mesma forma.
> A gravação confirmada cobre **nome**, **probabilidade**, **cor**, **etapa final positiva/negativa** e **critério de entrada** (gravado como texto). Os campos **Descrição** e a **reordenação por arraste** podem não ser persistidos no servidor nesta versão (não há, respectivamente, campo de descrição na etapa nem gravação de ordem confirmada). Trate Descrição e ordem como auxílio visual até confirmação.

## Dicas e observações
- A **probabilidade (%)** de conversão de cada etapa existe no cadastro (usada nos relatórios do funil), mas não tem campo de edição nesta tela: novas etapas entram com 50% por padrão.
- "Etapa final positiva" e "negativa" não podem estar ligadas ao mesmo tempo: ligar uma desliga a outra.
- O critério "Após X dias sem login" exige informar o número de dias.

## Veja também
- [Funil de Relacionamento](./crm-pipeline.md)
