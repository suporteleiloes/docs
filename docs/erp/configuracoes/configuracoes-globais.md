---
title: Configurações Globais
sidebar_position: 7
---

# Configurações Globais

As **Configurações Globais** reúnem, num só lugar, os ajustes gerais da plataforma — desde a identidade visual da empresa (logomarcas, favicon), passando pelo comportamento dos módulos (Bem, Lance, Clientes, Financeiro, Processos, Tarefas, Marketing...), até as integrações com serviços externos. É a central de "como o sistema se comporta".

## Como acessar

**Configurações** → **Configurações Globais** (ou pelo cartão **Configurações Globais** em Cadastro Básico).

![Configurações Globais](/img/manual/erp/configuracoes-globais.png)

## O que você vê nesta tela

A tela tem três áreas:

- **Menu lateral (esquerda)**: a lista de assuntos, agrupada em categorias. No topo há um campo **Buscar configuração** para localizar rapidamente um item. No celular, esse menu abre pelo botão de menu (☰).
- **Conteúdo (centro/direita)**: as opções do assunto selecionado. Muitos assuntos têm **sub-abas** internas (por exemplo, em Empresa: Empresa, Website, E-mail, Segurança, Avançado).
- **Botão Salvar configurações** (topo): aplica todas as alterações feitas nos vários assuntos de uma só vez.

As categorias do menu lateral são:

| Categoria | Assuntos |
|---|---|
| **Configurações Globais** | Empresa, Bem, Lance, Clientes, Comunicação, Robô, Financeiro, Formulários, Processos, Tarefas, Projetos, Marketing, Relatórios, Interface |
| **Ferramentas** | Caller, Apps Móveis, Comitente |
| **Integrações** | Veículo Verificado, Imóvel Web, Resale, iCarta Pro, Santander Imóveis, Robô Processos, Detran Paraíba, Grupo Porto, Youse Seguradora |
| **ERP** | Redefinir Configurações |

### Destaques de cada assunto

- **Empresa** — logomarcas (principal, fundo claro, fundo escuro) e favicon; dados de Website (URL do site, painéis de cliente e comitente, webhook e token, chave do Google Maps); E-mail (remetente padrão, nome, cópia); Segurança (2FA do ERP, e-mails e telefones dos administradores); Avançado (CSS de login).
- **Bem** — venda direta, gestão dos bens, validação de placa/chassi, comportamento ao fechar leilão, e gestão de eventos, campos, checklists e tarefas/providências dos bens.
- **Lance** — regras básicas e de incremento de lances.
- **Clientes** — jornada do arrematante (cadastro, exigência de documentos, análise de novos cadastros) e ajustes avançados.
- **Financeiro** — categorias, avisos por e-mail/SMS, formas de pagamento, gateways de pagamento e integração com bancos.
- **Comunicação / Robô / Marketing / Processos / Tarefas / Projetos / Relatórios / Interface / Caller / Apps / Comitente** — preferências específicas de cada módulo, organizadas em sub-abas.
- **Robô** — além das preferências, traz um botão para **forçar a execução do Robô Leiloeiro** (processa tarefas de fundo na hora) e pará-la. Use só para diagnóstico/urgência; normalmente o robô roda sozinho.
- **Integrações** — ativação e credenciais de cada serviço parceiro.

## O que dá pra fazer aqui

### Ajustar uma configuração

1. No menu lateral, escolha o assunto (ex.: **Empresa**). Se necessário, use a busca.
2. Se houver sub-abas, selecione a aba correta (ex.: **Website**).
3. Altere os campos: digite textos, ligue/desligue chaves (switches) ou selecione opções.
4. Clique em **Salvar configurações** (no topo). Uma mensagem confirma que as alterações foram aplicadas. Você pode mexer em vários assuntos antes de salvar — tudo é gravado de uma vez.

### Enviar a logomarca e o favicon da empresa

1. Vá em **Empresa** → aba **Empresa**.
2. Em cada espaço (Principal, Para fundo claro, Para fundo escuro), clique para escolher uma imagem (PNG, JPG, SVG...). Faça o mesmo para o **Favicon**.
3. Clique em **Salvar configurações**. A nova marca passa a aparecer no ERP na próxima navegação.

![Logomarcas da empresa](/img/manual/erp/configuracoes-globais-empresa.png)

### Modo teste de e-mail (redirecionar tudo)

Em **Empresa → E-mail** há o **Modo teste de e-mail** (visível apenas para administradores). Quando **ligado**, **todos os e-mails deste cliente** deixam de ir para os destinatários reais e são enviados para um **endereço de teste** que você define ali — útil em ambientes de **treinamento ou homologação** (por exemplo, quando o cliente ainda está com dados espelhados/importados e não entrou em produção), para **não disparar e-mails aos clientes reais** por engano.

![Modo teste de e-mail](/img/manual/erp/configuracoes-globais-email-teste.png)

1. Vá em **Empresa** → aba **E-mail**.
2. Em **Modo teste de e-mail**, escolha **Ligado** (redireciona tudo) ou **Desligado** (envia normal, para os destinatários reais).
3. Se ligar, informe o **Endereço de teste** (para onde os e-mails serão redirecionados).
4. Clique em **Salvar configurações**. **A mudança vale na hora, sem precisar de novo deploy.**

:::warning Quando desligar
Mantenha **Ligado** enquanto o cliente estiver em treinamento/homologação. **Desligue apenas quando o cliente entrar em produção de verdade** — a partir daí os e-mails passam a ir para os clientes reais.
:::

### Fotos e vídeos no Venda conosco

Permite que, no formulário **Quero vender / Venda conosco** do seu site, o interessado anexe **fotos e vídeos do bem**. Vem **desativado**.

1. Em **Empresa**, abra a sub-aba **Website**.
2. Em **Venda conosco — fotos e vídeos do bem**, escolha **Ativado** em *Permitir envio de fotos e vídeos*.
3. Ajuste os limites, se quiser:

| Campo | Padrão | O que controla |
|---|---|---|
| Máximo de fotos por envio | 10 | De 0 a 30. Formatos: JPG, PNG, WEBP e HEIC. |
| Tamanho máximo por foto | 10 MB | De 1 a 20 MB. |
| Máximo de vídeos por envio | 2 | De 0 a 5 (0 = só fotos). Formatos: MP4, MOV e WEBM. |
| Tamanho máximo por vídeo | 50 MB | De 1 a 64 MB. |
| Envios com arquivos por hora | 5 | Proteção contra abuso: quantas vezes a mesma pessoa (conexão) pode enviar arquivos em 1 hora. |

4. Clique em **Salvar configurações**. O site passa a mostrar o campo de envio em instantes.

![Configuração Venda conosco — fotos e vídeos](/img/manual/erp/configuracoes/configuracoes-venda-conosco-anexos.png)

Os arquivos recebidos aparecem no detalhe do lead ([Leads do Site](../../crm/crm-leads-site.md)) e na aba **Arquivos** do Negócio aberto para ele.

:::tip
Cada envio tem limite total de **64 MB** (fotos + vídeos). Para vídeos longos, oriente o cliente a enviar um link (YouTube, Google Drive) na descrição.
:::

### Gerenciar listas relacionadas

Alguns assuntos têm botões como **Gerenciar...** (formas de pagamento, gateways de pagamento, cadastros de bens etc.). Eles levam você à tela específica daquele recurso. Botões marcados como "Em breve" ainda não têm tela dedicada.

### Redefinir as configurações (cuidado)

1. No menu lateral, em **ERP**, escolha **Redefinir Configurações**.
2. Clique em **Executar setup básico** e confirme.
3. O sistema reaplica as configurações padrão. **Atenção: isso pode sobrescrever personalizações.** Use apenas quando tiver certeza.

## Dicas e observações

- O botão **Salvar configurações** salva tudo de uma vez — confira todas as abas que você mexeu antes de salvar.
- O **Domínio principal** (em Website) é ligado à sua licença e não pode ser alterado por aqui; fale com seu gerente de contas.
- A **Redefinir Configurações** é uma ação de risco: ela reaplica padrões e pode apagar ajustes feitos. Trate como último recurso.
- Algumas integrações exigem credenciais fornecidas pelos parceiros; preencha-as nos campos do respectivo assunto em **Integrações**.

## Veja também

- [Variáveis do Sistema](configuracoes-variaveis.md)
- [Taxas](configuracoes-taxas.md)
- [Cadastro Básico](cadastro.md)
