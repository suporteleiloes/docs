import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"
import React, {useEffect, useState} from "react";

export default function Atendimento() {
  const [emIframe, setEmIframe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      setEmIframe(true);
    }
  }, []);
  return (
    <Layout title="Políticas de Atendimento">
      <div
        class={layoutStyle.docRoot}
        style={{flexGrow: 1}}
      >
        <Sidebar route="politicas-de-atendimento"/>

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg content-main-page">
            <Heading as="h1">
              Políticas de Atendimento e Diretrizes de Suporte
            </Heading>
            {emIframe && <style>{`
              .navbar, .footer, .theme-doc-sidebar-container {
                display: none !important;
              }
            `}</style>}
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência: 28 de maio de 2025 versão 20250528</strong></p>
              <h2>1. Introdução</h2>
              <p>O ERP Suporte Leilões é disponibilizado aos clientes no modelo SaaS (Software como Serviço). Nesse
                modelo, o software é fornecido como um serviço contínuo e em nuvem, acessível via internet, com
                manutenção, atualizações e suporte providos de forma centralizada pela nossa equipe. Diferentemente de
                um software sob medida ou licenciamento tradicional, o SaaS implica em um escopo padronizado: melhorias
                são aplicadas gradualmente para todos os usuários e personalizações individuais são limitadas, conforme
                previsto em contrato e nas diretrizes a seguir.</p>
              <p>Esta Política de Atendimento estabelece as diretrizes de suporte do ERP Suporte Leilões. Ao utilizar o
                sistema, o cliente concorda em seguir as orientações aqui descritas, que visam assegurar um atendimento
                eficiente, ágil e uniforme a todos os clientes. Esta política complementa os Termos de Uso e demais
                acordos firmados; em caso de divergência, prevalecerão os termos contratuais. Os limites e condições do
                suporte, bem como as responsabilidades das partes, estão delineados nas seções a seguir, protegendo
                tanto a empresa quanto o cliente contra abusos, solicitações indevidas ou uso inadequado dos canais de
                atendimento.</p>

              <h2>2. Canais de Atendimento</h2>
              <ul>
                <li style={{marginBottom: '20px'}}><strong>WhatsApp de Suporte (grupo do projeto):</strong> Todas as
                  solicitações de suporte, desde que sejam emergências ou dúvidas pontuais, devem ser feitas
                  exclusivamente através do grupo de WhatsApp vinculado ao projeto. A centralização da comunicação neste
                  canal garante melhor organização, cumprimento dos SLAs e direcionamento eficiente dos
                  atendimentos. <u>Não garantimos tempo de resposta ou atendimento para mensagens enviadas diretamente a
                    números individuais de nossos colaboradores.</u></li>
                <li><strong>Ligação Telefônica:</strong> Chamadas devem ser previamente solicitadas e agendadas, exceto
                  em casos de emergência ou durante a realização de leilões. A solicitação deve ser feita diretamente no
                  grupo de WhatsApp do projeto ou por meio do módulo de suporte do ERP. O agendamento e a prioridade da
                  ligação seguem o plano contratado:
                  <ul>
                    <li><strong>Plano Simplificado:</strong> As ligações devem ser solicitadas exclusivamente via módulo
                      de suporte no ERP. O retorno será feito conforme ordem de fila entre clientes deste mesmo plano.
                    </li>
                    <li><strong>Plano Premium:</strong> A solicitação pode ser feita pelo grupo de WhatsApp ou via
                      chamado. O retorno poderá ocorrer de forma imediata (em casos urgentes), ou respeitando o SLA de
                      até 4 horas em situações não emergenciais.
                    </li>
                    <li><strong>Plano Enterprise (E):</strong> O cliente poderá ligar diretamente para o gerente de
                      contas ou desenvolvedor exclusivo, conforme escopo do plano contratado.
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>3. SLA e Prioridades de Atendimento</h2>
              <p>O tempo de resposta do suporte pode variar conforme a criticidade da situação e o contexto de uso.
                Definimos os seguintes níveis de serviço (SLA) e prioridades:</p>
              <ul>
                <li><strong>Solicitações sem leilão em andamento:</strong> Durante o horário comercial, o tempo de
                  primeira resposta é de até 30 (trinta) minutos após o registro do pedido de suporte ou mensagem no
                  grupo de WhatsApp.
                </li>
                <li><strong>Solicitações durante leilão em andamento:</strong> Quando há um leilão ao vivo ocorrendo,
                  daremos prioridade máxima ao atendimento. O suporte responderá de forma imediata a quaisquer problemas
                  críticos que possam impactar o andamento do leilão, a fim de minimizar qualquer interrupção nas
                  operações.
                </li>
                <li><strong>Solicitações de desenvolvimento ou melhoria:</strong> Pedidos de novas funcionalidades,
                  alterações no sistema ou melhorias não são classificados como incidentes de suporte imediato. Essas
                  solicitações serão avaliadas pela nossa equipe de produto e desenvolvimento, e respondidas em prazo
                  compatível com a análise técnica e planejamento (não se aplicando os SLAs de minutos mencionados
                  acima).
                </li>
              </ul>
              <p><em>Observação:</em> Os prazos de resposta acima aplicam-se a solicitações feitas dentro do horário
                comercial padronizado. Mensagens enviadas fora do expediente (que não se enquadrem como emergências)
                serão atendidas no próximo dia útil, conforme a ordem de chegada e prioridade.</p>

              <h2>4. Uso dos Grupos de WhatsApp</h2>
              <ul>
                <li><strong>Finalidade dos Grupos:</strong> Os grupos de WhatsApp disponibilizados para clientes dos
                  planos Premium e Enterprise devem ser utilizados exclusivamente para comunicações de suporte que sejam
                  urgentes ou relevantes para a operação do leiloeiro. Esse canal é destinado a esclarecer dúvidas
                  rápidas e tratar questões emergenciais que requeiram atenção imediata da nossa equipe. Manter o foco
                  do uso do grupo em assuntos críticos de suporte garante maior agilidade no atendimento quando mais é
                  necessário.
                </li>
                <li><strong>Solicitações de Desenvolvimento:</strong> Não utilize os grupos de WhatsApp para solicitar
                  novas funcionalidades ou customizações do sistema. Qualquer pedido de desenvolvimento ou melhoria deve
                  ser formalizado por meio do sistema de chamados do ERP (conforme item 2 acima). Solicitações dessa
                  natureza postadas diretamente no grupo não serão encaminhadas para execução e serão desconsideradas
                  pela equipe de desenvolvimento. Clientes com o plano Enterprise podem solicitar diretamente ao consultor exclusivo designado para o contrato, nesses casos, a equipe designada fará a abertura dos
                  chamados internos necessários.
                </li>
                <li><strong>Etiqueta e Uso Adequado no Grupo:</strong> <u>Mantenha uma conduta profissional e respeitosa
                  nas interações dos grupos de suporte. O grupo deve ser utilizado apenas para assuntos relacionados ao
                  ERP e à sua operação. Evite enviar mensagens repetidas em curtos intervalos de tempo ou marcar
                  insistentemente os membros da equipe sem necessidade, pois isso não acelerará o atendimento</u>. Também
                  não é permitido usar o grupo para discussões alheias ao contexto de suporte. Condutas abusivas, como
                  linguagem ofensiva, spam ou qualquer desvio das regras de boa convivência, não serão toleradas e
                  poderão resultar em advertência, limitação ou até remoção do participante do grupo, além de outras
                  medidas cabíveis.
                </li>
              </ul>

              <h2>5. Horário de Atendimento</h2>
              <ul>
                <li><strong>Dias úteis:</strong> De segunda a sexta-feira, das 8h00 às 18h00 (horário de Brasília),
                  exceto feriados nacionais. Este é o horário padrão em que a equipe de suporte opera e durante o qual
                  todas as solicitações serão atendidas.
                </li>
                <li><strong>Atendimento emergencial fora do horário:</strong>
                  <ul>
                    <li><strong>Critérios de emergência:</strong> São consideradas emergenciais as situações que
                      impossibilitam o uso normal do ERP ou do website de leilões, tais como: queda geral do sistema
                      (indisponibilidade do servidor), falha generalizada de acesso ou erros graves que paralisem as
                      atividades do leiloeiro. Nessas condições, o suporte será prestado o mais rápido possível,
                      inclusive fora do expediente, sem custo adicional, pelo analista de plantão.
                    </li>
                    <li><strong>Chamados não emergenciais fora do horário:</strong> Solicitações efetuadas fora do
                      horário comercial que não se enquadrem nos critérios acima serão tratadas como atendimentos
                      extraordinários. Nesses casos, poderá ser cobrada uma taxa correspondente à(s) hora(s) de trabalho
                      da equipe necessárias para o atendimento, conforme tabela vigente. A intervenção será iniciada
                      somente após autorização expressa do cliente quanto aos custos, os quais serão previamente
                      informados pelo gerente de contas. O cliente terá a opção de aguardar o início do próximo
                      expediente para evitá-los, caso prefira.
                    </li>
                    <li><strong>Situações não enquadradas como emergência:</strong> Problemas decorrentes de uso
                      indevido do sistema, configurações realizadas incorretamente pelo próprio usuário ou falta de
                      treinamento prévio do cliente não são considerados emergenciais (a menos que resultem diretamente
                      na parada completa do sistema). Essas solicitações serão atendidas dentro do horário normal de
                      suporte. Caso o cliente solicite, ainda assim, atendimento fora do expediente para essas situações
                      não emergenciais, a assistência poderá ser prestada sob condição de cobrança conforme descrito
                      acima.
                    </li>
                  </ul>
                </li>
              </ul>

              <h2>6. Acesso a Desenvolvedores</h2>
              <ul>
                <li><strong>Contato com desenvolvedores:</strong> Como regra geral, não há acesso direto dos clientes à
                  equipe de desenvolvimento da Suporte Leilões. Os desenvolvedores podem ser consultados internamente
                  pelos analistas de suporte para diagnosticar ou resolver um chamado, mas a comunicação com o cliente
                  será realizada pelos próprios analistas ou pelo gerente de contas. Em situações excepcionais, quando
                  um chamado técnico exigir uma interação direta para esclarecimento de requisitos, essa será organizada
                  pela Suporte Leilões de forma supervisionada (isto é, com um gerente acompanhando a conversa).
                </li>
                <li><strong>Planos com desenvolvedor dedicado:</strong> Clientes que possuem planos que incluem
                  desenvolvedores dedicados (em regime full-time ou part-time) ou serviços de consultoria têm acesso a
                  esses profissionais conforme os termos do plano contratado. Ainda assim, recomenda-se que a abertura
                  inicial de qualquer chamado siga os canais oficiais de suporte, para devido registro e acompanhamento.
                  A interação direta com o desenvolvedor designado deve respeitar os limites e processos estabelecidos
                  no contrato.
                </li>
                <li><strong>Restrição de contato não autorizado:</strong> O cliente não deve acionar desenvolvedores ou
                  demais funcionários técnicos da Suporte Leilões por meios não oficiais (por exemplo, ligando ou
                  enviando mensagens diretamente ao celular pessoal ou e-mail particular de um desenvolvedor). Qualquer
                  solicitação de suporte ou desenvolvimento deve ser iniciada pelos canais apropriados (WhatsApp de
                  suporte, sistema de chamados ou gerente de contas). Tentativas de contornar o fluxo oficial de
                  atendimento poderão não ser respondidas e poderão constituir violação desta política.
                </li>
              </ul>

              <h2>7. Reuniões</h2>
              <ul>
                <li><strong>Agendamento:</strong> Reuniões com a equipe de suporte ou consultoria da Suporte Leilões
                  devem ser solicitadas com pelo menos 1 (um) dia útil de antecedência. O cliente deve apresentar uma
                  pauta (lista de assuntos) para a reunião proposta, a qual precisará de aprovação de um supervisor ou
                  gerente antes da confirmação do agendamento.
                </li>
                <li><strong>Autorização:</strong> A pauta da reunião será avaliada pela supervisão, que irá autorizar ou
                  não a realização da mesma. Se a reunião não for aprovada por nós (por não ser considerada necessária
                  ou aderente ao escopo do suporte contratado) e, ainda assim, o cliente desejar realizá-la, poderá ser
                  oferecido um orçamento para atendimento como consultoria avulsa, cobrada à parte. A reunião só será
                  marcada efetivamente após o cliente concordar com o orçamento apresentado.
                </li>
                <li><strong>Reuniões avulsas:</strong> Por padrão, não se realizam reuniões não agendadas ou de
                  improviso. Qualquer exceção à esta regra deve ser negociada previamente e ter os custos associados
                  aprovados. Nossa equipe preza por organização e eficácia, atendendo preferencialmente via chamados e
                  reuniões agendadas dentro do escopo planejado.
                </li>
                <li><strong>Treinamentos:</strong> Os treinamentos sobre o uso do ERP estão incluídos nos planos de
                  suporte até o limite de horas previsto em cada pacote. Caso o cliente necessite de horas adicionais de
                  treinamento além do que está incluído no seu plano, essas deverão ser contratadas à parte. Assim como
                  as reuniões, os treinamentos extras devem ser agendados e terão custos estabelecidos em comum acordo
                  antes da sua realização.
                </li>
              </ul>

              {/*<h2>8. Ligações</h2>
              <ul>
                <li><strong>Número de Suporte Telefônico:</strong> O atendimento via telefone é realizado através de solicitação. Para garantir organização, solicita-se que os clientes utilizem
                  apenas esse número para ligações de suporte. Chamadas feitas para outros números da empresa ou para
                  contatos particulares de membros da equipe não serão reconhecidas como atendimento oficial. As
                  ligações recebidas no número de suporte serão atendidas por um analista e, se necessário, encaminhadas
                  ao gerente de contas ou especialista indicado para resolver a demanda.
                </li>
                <li><strong>Disponibilidade das ligações:</strong> O atendimento telefônico está disponível durante o
                  horário comercial padronizado, alinhado às diretrizes de horário desta política (ver item 5 acima). Em
                  casos de emergência fora do expediente, o número de suporte também pode ser utilizado conforme os
                  critérios já descritos, mas recomendamos priorizar o WhatsApp para registro imediato do chamado
                  emergencial.
                </li>
              </ul>*/}

              <h2>8. Conduta e Uso Adequado dos Canais de Suporte</h2>
              <ul>
                <li><strong>Respeito e profissionalismo:</strong> Espera-se que o cliente mantenha cordialidade e
                  profissionalismo em todas as interações com a equipe de suporte. Não serão tolerados assédios,
                  insultos, discriminações ou qualquer forma de ofensa dirigida aos nossos colaboradores. Caso ocorra
                  alguma conduta inadequada, a Suporte Leilões poderá suspender temporariamente o atendimento pelo canal
                  envolvido ou adotar outras medidas cabíveis até que se restabeleça um ambiente de respeito mútuo,
                  conforme previsto em contrato.
                </li>
                <li><strong>Uso responsável dos canais:</strong> É importante utilizar os canais de atendimento de
                  acordo com as orientações desta política. Evite abrir múltiplos chamados para a mesma solicitação ou
                  acionar diferentes canais simultaneamente (por exemplo, ligar e mandar mensagem ao mesmo tempo sobre o
                  mesmo assunto), pois isso pode causar retrabalho e confusão no tratamento do caso. Siga o fluxo
                  recomendado para cada tipo de demanda (como registrado nos itens anteriores) para que possamos
                  priorizar e resolver seu problema da forma mais eficiente possível.
                </li>
                <li><strong>Clareza nas solicitações:</strong> Ao entrar em contato com o suporte, forneça informações
                  detalhadas sobre o problema ou dúvida. Descreva os sintomas ou a questão de forma objetiva, incluindo,
                  se possível, passos para reproduzir o erro, mensagens de erro recebidas, data e hora em que ocorreu, e
                  até capturas de tela ilustrativas. Quanto mais precisas forem as informações fornecidas, mais ágil e
                  assertivo poderá ser o atendimento. Por segurança, não compartilhe senhas ou dados sensíveis nos
                  canais de suporte; nossa equipe jamais solicitará sua senha ou informações sigilosas por WhatsApp ou
                  telefone.
                </li>
              </ul>

              <h2>Considerações Finais</h2>
              <p>O cumprimento rigoroso desta Política de Atendimento nos permite oferecer um suporte padronizado de
                alta qualidade, benefício que é compartilhado por todos os clientes. Seguindo as diretrizes aqui
                estabelecidas, o cliente auxilia nossa equipe a resolver as demandas com mais rapidez e eficácia, ao
                mesmo tempo em que evita atrasos ou mal-entendidos.</p>
              <p>A Suporte Leilões agradece a compreensão e a colaboração de todos no respeito a estas regras de
                atendimento. Reiteramos que esta política poderá ser revista e atualizada periodicamente, seja para
                aprimorar nossos serviços ou para adequação a novas necessidades operacionais. Caso ocorram atualizações
                relevantes, elas serão comunicadas por meios oficiais e a versão vigente estará sempre disponível em
                nossa documentação. Em caso de dúvidas sobre o teor ou a aplicação desta política, o cliente pode entrar
                em contato com seu gerente de contas para esclarecimentos.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
