---
title: Cadastrar Processo
sidebar_position: 2
---

# Cadastrar Processo

Esta tela serve para **adicionar manualmente um processo** que deve ser monitorado pelo robô — independente de ele ter casado com alguma palavra-chave. É útil quando você já conhece um processo específico e quer acompanhá-lo de perto. Ao digitar o número no padrão CNJ, o sistema consulta automaticamente o CNJ DataJud e tenta preencher os dados sozinho.

## Como acessar

**ERP** → **Processos** → aba **Cadastrar Processo** (ou clique em **Cadastrar processo** na tela de Processos, ou use o atalho **Shift+N**).

![Cadastrar Processo Manual](/img/manual/erp/novo.png)

## O que você vê nesta tela

Um formulário com o título **Cadastrar Processo Manual**. O campo principal é o **Número do processo**; os demais são complementares e, em parte, preenchidos pela consulta automática.

| Campo | O que é |
|---|---|
| Número do processo *(obrigatório)* | Número no padrão CNJ. O campo aceita só dígitos e formata sozinho no formato `0000000-00.0000.0.00.0000`. Mostra o contador de dígitos (x/20). |
| Número antigo | Número antigo do processo (opcional). |
| Número interno | Seu código interno de controle (opcional). |
| Tipo | **Eletrônico** ou **Físico**. |
| Situação | Status do processo (lista cadastrada). |
| Classificação | Classificação do processo (lista cadastrada). |
| Tribunal *(obrigatório)* | Tribunal vinculado ao processo. |
| Vara | Vara vinculada. |
| Juízo | Juízo vinculado. |
| UF | Estado (sigla de 2 letras). |
| Cidade | Cidade do processo. |
| Valor da causa (R$) | Valor da causa, com máscara de moeda. |
| Ativar robô de consulta | Quando marcado, o robô passa a monitorar este processo (já vem marcado). |
| Motivo / observações | Texto livre com descrição ou observações. |

### Consulta automática do CNJ

Assim que o número chega a 20 dígitos, o sistema consulta o **CNJ DataJud** e mostra o resultado logo abaixo do campo:

- Enquanto consulta, aparece "Consultando processo no CNJ DataJud…".
- Quando encontra, mostra um quadro verde **Processo encontrado** com classe, órgão julgador, cidade/UF, sistema e os vínculos de tribunal/vara. Os campos vazios do formulário (tribunal, vara, UF, cidade, tipo) são pré-preenchidos sem sobrescrever o que você já editou.
- Se algum campo não puder ser amarrado automaticamente, aparece um aviso pedindo para conferir os selects.
- Se a consulta falhar, aparece um aviso em vermelho com o motivo.

## O que dá pra fazer aqui

### Cadastrar um processo

1. Digite o **Número do processo** (só números — a máscara cuida da formatação).
2. Aguarde a consulta automática ao CNJ DataJud preencher os campos. Confira o quadro de resultado.
3. Ajuste ou complete os campos que quiser (Número interno, Situação, Classificação, Juízo, Cidade, Valor da causa etc.).
4. Confira se o **Tribunal** está selecionado — é obrigatório.
5. Deixe **Ativar robô de consulta** marcado se quiser que o processo seja monitorado.
6. Se quiser, escreva uma observação em **Motivo / observações**.
7. Clique em **Cadastrar Processo**. Ao salvar, o sistema também busca as publicações no DJEN e leva você direto ao detalhe do processo criado.

### Limpar ou cancelar

- **Limpar**: zera todos os campos do formulário.
- **Cancelar**: descarta e volta para a lista de Processos.

## Dicas e observações

- O botão **Cadastrar Processo** só fica habilitado quando há um **número preenchido** e um **Tribunal selecionado**.
- O campo de número aceita apenas dígitos: letras, símbolos e dígitos além de 20 são descartados automaticamente, inclusive ao colar.
- A consulta automática só dispara quando o número está completo (20 dígitos).
- Marque **Ativar robô de consulta** para que o processo entre na varredura diária do robô.

## Veja também

- [Processos](./processo.md)
- [Configuração do robô](./configuracao-robo.md)
- [Cadastros Auxiliares](./cadastros.md)
