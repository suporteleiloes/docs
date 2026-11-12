---
title: Organograma
sidebar_position: 9.5
---

# Organograma

O Organograma mostra a estrutura da sua equipe em forma de diagrama: quem se reporta a quem, o cargo e o departamento de cada pessoa e, em cada card, os indicadores de atividade do período (tarefas, entregas, atrasos, chamados e satisfação). É a forma mais rápida de enxergar como a equipe está organizada e onde há gargalo.

## Como acessar

**ERP** → **RH** → **Times** → aba **Organograma**. Também abre direto pelo endereço `/rh/organograma`.

![Organograma](/img/manual/erp/rh/organograma-visao.jpg)

## O que você vê nesta tela

### Resumo no topo

| Indicador | O que é |
|---|---|
| Pessoas | Colaboradores no diagrama (desligados nunca aparecem; inativos só com **Inativos** marcado) |
| Níveis | Quantos níveis hierárquicos o organograma tem |
| Gestores | Pessoas que têm alguém se reportando a elas |
| Amplitude média | Média de subordinados diretos por gestor |
| Entregas | Tarefas concluídas no período |
| Atrasadas | Tarefas abertas com prazo vencido |
| Pessoas com atraso | Quem tem tarefa atrasada ou chamado com SLA estourado |
| Ausentes hoje | Férias, licença, afastamento ou falta registrados para hoje |
| Satisfação | Média das avaliações de chamados no período (aparece quando há avaliações) |

### O card de cada pessoa

- **Foto** com um **anel de entrega**: a parte preenchida é a proporção de tarefas concluídas no período sobre o total (concluídas + abertas). A cor mostra a saúde: **verde** em dia, **amarelo** pede atenção, **vermelho** tem atrasos relevantes.
- **Meio-arco colorido** e **faixa “Nível A, B, C…”**: a cor é a do departamento; a letra é o nível na hierarquia (A = topo).
- **Bolinha na foto**: verde = online agora, amarela = ausente/inativa, cinza = offline.
- **Nome, cargo** (com o subtítulo do cargo embaixo, quando cadastrado), **departamento** e o **estado**: Livre, Ocupado, Sobrecarregado, Ausente ou Férias.
- **Indicadores**: Abertas, Atraso, Entregas e No prazo (% das entregas feitas até o prazo). Para quem atende chamados: Chamados em aberto, SLA estourado e Satisfação. Os que pedem ação (atraso, SLA) têm prioridade quando não cabem todos.
- **“3 diretos · 8 no total”**: clique para recolher ou mostrar a equipe daquela pessoa.

### Linhas e posições especiais

- **Linha cheia**: hierarquia. Quem está abaixo se reporta a quem está acima e é gerido por ele no dia a dia.
- **Linha tracejada roxa (“Atua junto”)**: pessoas que trabalham juntas **sem hierarquia** entre elas (ex.: a coordenação técnica de suporte e o líder técnico). Pares que se reportam ao mesmo gestor aparecem lado a lado.
- **Card “Assessoria”**: fica **ao lado da linha** do superior, entre ele e os demais subordinados. É alguém que atua sobre todas as áreas abaixo dele, mas **não é chefe** delas (ex.: gestão administrativa e financeira ao lado do CEO). A equipe da própria assessoria aparece abaixo dela.

### Painel da pessoa

Clique em um card para abrir o painel lateral com todos os indicadores, a quem ela se reporta, a equipe direta (clique em um nome para ir até ele), vínculo, tempo de empresa, contato, times e o botão **Abrir ficha do colaborador**.

![Painel da pessoa no organograma](/img/manual/erp/rh/organograma-painel.jpg)

## O que dá pra fazer aqui

### Encontrar alguém

Digite o nome ou o cargo em **Buscar pessoa ou cargo…** e tecle **Enter**: o diagrama abre as equipes recolhidas e enquadra quem foi encontrado.

### Destacar um departamento

Escolha no filtro de departamentos ou clique na legenda colorida. As demais pessoas ficam esmaecidas.

### Mudar o período dos indicadores

Use o seletor de período: **Últimos 7 dias**, **Últimos 30 dias**, **Este mês** ou **Últimos 90 dias**. A estrutura não muda, só os números.

### Navegar no diagrama

Arraste o fundo para mover, use a roda do mouse (ou os botões **+ / −**) para zoom. **Centralizar** enquadra tudo de novo, **Tela cheia** usa a tela toda e **Expandir tudo** abre todas as equipes recolhidas. Equipes grandes (mais de 40 pessoas) abrem recolhidas a partir do 3º nível.

### Reorganizar a hierarquia (arrastar e soltar)

Só aparece para quem tem a permissão **Reorganizar o Organograma**.

1. Clique em **Reorganizar**. O diagrama entra em modo de edição.
2. **Para mudar a quem uma pessoa se reporta:** arraste o card dela e solte **sobre o card do novo gestor**. O card de destino fica com borda tracejada; confirme em **Mudar**. A equipe da pessoa vai junto.
3. **Para só mudar a posição:** arraste o card para um espaço vazio. A equipe abaixo acompanha.
4. Também dá para trocar o gestor pelo painel lateral, no campo **Reporta a** (inclusive "Ninguém (topo do organograma)").
5. No mesmo painel: em **Atua junto com**, adicione ou remova pessoas ligadas por linha tracejada; marque **Posição de assessoria** para desenhar a pessoa ao lado da linha de quem ela se reporta.
6. Clique em **Salvar**. Até lá nada é gravado; **Descartar** desfaz tudo.

![Modo de edição do organograma](/img/manual/erp/rh/organograma-edicao.jpg)

**Organizar automaticamente** apaga as posições ajustadas à mão e volta ao layout automático. A hierarquia (quem se reporta a quem) não muda.

### Montar o organograma pela primeira vez

No começo ninguém tem gestor definido, então todos aparecem no grupo **Sem gestor definido**. Clique em **Reorganizar** e solte cada pessoa sobre o gestor dela, de cima para baixo (primeiro quem se reporta à direção, depois os demais).

## Regras de negócio

- **Permissões:** ver o organograma exige **Ver o Organograma**; mover cards e mudar a quem cada um se reporta exige **Reorganizar o Organograma**. Ter só a primeira não libera a edição.
- **Linha tracejada e assessoria não mudam a hierarquia:** os indicadores, o “Reporta a” e as contagens de equipe seguem a linha cheia. A linha tracejada vale nos dois sentidos.
- **Sem ciclos:** ninguém pode se reportar a si mesmo nem a um subordinado (direto ou indireto). O sistema recusa a mudança.
- **Quem aparece:** todo colaborador do RH que não está **Desligado**. Inativos só com o filtro **Inativos**. Se o gestor de alguém for desligado, a pessoa sobe para o topo até você definir um novo gestor.
- **De onde vêm os números:** tarefas são as atribuídas à pessoa no módulo de Tarefas; chamados e satisfação vêm dos chamados em que ela é o atendente (precisa ter usuário no ERP); ausências vêm dos [Eventos de RH](./rh-eventos.md) do dia.
- **Dados sensíveis:** o organograma **não mostra salário nem custo**. Isso fica no [Painel da Equipe](./rh-painel-equipe.md), para quem tem a permissão de custos.

## Erros comuns

| Situação | O que fazer |
|---|---|
| "Essa mudança cria um ciclo na hierarquia" | Você tentou colocar alguém abaixo de um subordinado dele. Mova primeiro o subordinado para outro gestor. |
| O botão **Reorganizar** não aparece | Falta a permissão **Reorganizar o Organograma**. Peça ao administrador. |
| "Sem permissão para ver o organograma" | Falta a permissão **Ver o Organograma** (RH). |
| A pessoa não aparece | Confira se ela está cadastrada em [Colaboradores](./rh-colaboradores.md) e se não está Desligada (ou marque **Inativos**). |
| Indicadores zerados | A pessoa não tem tarefas atribuídas nem chamados no período escolhido. Para chamados, ela precisa ter usuário no ERP. |

## Dicas e observações

- Cadastre **cargo** e **departamento** em [Colaboradores](./rh-colaboradores.md): o card usa os dois, e a cor vem do departamento.
- O anel vermelho é o atalho para achar quem precisa de ajuda: abra o painel da pessoa e veja os atrasos.
- Ajustes de posição são compartilhados: todos veem o mesmo desenho que você salvou.

## Veja também

- [Times](./rh-times.md)
- [Colaboradores](./rh-colaboradores.md)
- [Painel da Equipe](./rh-painel-equipe.md)
- [Departamentos](./rh-departamentos.md)
