import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"
import React, {useEffect, useState} from "react";

export default function Atendimento(){
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
        style={{ flexGrow: 1 }}
      >
        <Sidebar route="politicas-de-atendimento" />

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
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
              <p>O ERP Suporte Leilões é um software SaaS (Software as a Service). Isso significa que fornecemos um serviço de software baseado em nuvem, acessível via internet, com suporte e manutenção contínuos. O modelo SaaS implica em certas limitações de atendimento e desenvolvimento personalizado, que serão detalhadas a seguir.</p>

              <h2>2. Canais de Atendimento</h2>
              <ul>
                <li style={{marginBottom: '20px'}}><strong>WhatsApp de Suporte pelos Gerentes de Contas:</strong> Todas as solicitações de suporte, desde que sejam: Emergências ou Dúvidas pontuais, devem ser feitas através do grupo de WhatsApp relacionado ao projeto. A centralização no grupo facilita a gestão, cumprimento de SLA de atendimento e o direcionamento adequado dos atendimentos. Não garantimos SLA e resposta no atendimento enviado para qualquer número individual dos nossos colaboradores, além do grupo.</li>
                <li>
                  <strong>Ligação Telefônica:</strong> Exceto em emergências ou durante a realização de leilões, ligação para nossos gerentes de conta devem ser previamente agendadas, sendo solicitado diretamente no grupo de WhatsApp ou via abertura e chamado dentro do ERP.
                  <ul>
                    <li><strong>Clientes do plano Simplificado:</strong> A solicitação de ligação deve ser realizada direto pelo módulo de suporte integrado ao ERP. O agendamento do retorno da ligação deverá respeitar a fila de solicitações de clientes do mesmo plano;</li>
                    <li><strong>Clientes do plano Premium:</strong> A solicitação de ligação pode ser feita pelo grupo de WhatsApp ou via chamado. O agendamento do retorno da ligação poderá ser imediata, dependendo da urgência, ou respeitar um SLA de até 4 horas, e caso de não urgência e fila de trabalho do gerente;</li>
                    <li><strong>Clientes do plano Enterprise (E):</strong> A ligação pode ser realizada diretamente para o gerente de contas ou desenvolvedor exclusivo.</li>
                  </ul>
                </li>
                <li>
                  <strong>SLA de Resposta:</strong>
                  <ul>
                    <li><strong>Plano Enterprise (E):</strong> Imediato durante horário comercial.</li>
                  </ul>
                  <strong>Demais planos:</strong>
                  <ul>
                    <li><strong>Sem leilão em andamento:</strong> O tempo de resposta é de até 2 horas durante o horário comercial.</li>
                    <li><strong>Com leilão em andamento:</strong> O tempo de resposta é imediato para garantir que qualquer problema crítico seja resolvido rapidamente.</li>
                  </ul>
                </li>
              </ul>

              <h2>3. Uso dos Grupos de WhatsApp</h2>
              <ul>
                <li style={{marginBottom: '20px'}}><strong>Finalidade dos Grupos:</strong> Os grupos de WhatsApp, destinados aos clientes no plano Premium e Enterprise, devem ser usados exclusivamente para dúvidas ou solicitações emergenciais que impactam a operação. O objetivo é garantir um canal eficiente para questões críticas que requerem atenção imediata.</li>
                <li><strong>Solicitações de Desenvolvimento:</strong> Solicitações de desenvolvimento devem ser formalizadas através do sistema de suporte integrado ao ERP. Solicitações enviadas diretamente nos grupos de WhatsApp serão ignoradas, a menos que o cliente tenha contratado um plano com desenvolvedor ou equipe dedicada, como o Enterprise, que cuidará da abertura dos chamados apropriados.</li>
              </ul>
              <h2>4. Horário de Atendimento</h2>
              <ul>
                <li><strong>Segunda a Sexta:</strong> 8:00 às 18:00. Este é o horário padrão de atendimento para todas as solicitações.</li>
                <li><strong>Atendimento Emergencial Fora do Horário Comercial:</strong>
                  <ul>
                    <li>Situações emergenciais, que incluem queda do servidor, falha de acesso ao software e/ou website, e falhas no software que possam impedir o funcionamento da operação do cliente. Este atendimento não gera custos adicionais e será atendido imediatamente pelo primeiro analista de suporte que receber o chamado.</li>
                    <li>Em caso de atendimento fora do horário comercial que não se enquadre nos critérios emergenciais acima, será cobrada a hora de trabalho dos profissionais envolvidos. A autorização do cliente é necessária antes do início do atendimento, bem como a consulta dos custos das horas com um gerente de contas.</li>
                  </ul>
                </li>
              </ul>

              <h2>5. Acesso a Desenvolvedores</h2>
              <ul>
                <li>Os clientes não têm acesso direto aos desenvolvedores, exceto quando um chamado é aberto e a comunicação direta se torna necessária para o levantamento de requisitos, sempre supervisionada pelo gerente de contas.</li>
                <li>Clientes com planos que incluem desenvolvedores full ou part-time têm acesso conforme os termos definidos no plano contratado.</li>
              </ul>

              <h2>6. Reuniões</h2>
              <ul>
                <li><strong>Agendamento:</strong> Reuniões devem ser agendadas com no mínimo 1 (um) dia de antecedência e devem ter uma pauta pré definida e aprovada por um supervisor.</li>
                <li><strong>Autorização:</strong> O supervisor analisará a pauta e autorizará ou não a reunião. Caso o cliente insista na reunião não autorizada, será apresentado um orçamento com horas de consultoria. A reunião será agendada somente após a aprovação do orçamento pelo cliente.</li>
                <li><strong>Reuniões Avulsas:</strong> Não são permitidas, exceto em casos acordados previamente com custos definidos.</li>
                <li><strong>Treinamentos:</strong> Realizados dentro do limite de horas do plano contratado. Excedendo o limite, novos treinamentos devem ser acordados e pagos pelo cliente.</li>
              </ul>

              <h2>7. Hirerarquia de comunicação</h2>
              <p>
                A comunicação para atendimento sempre deverá iniciar por um gerente de contas. Ele saberá direcionar mais pessoas no processo de atendimento, de setores e cargos diferentes.
              </p>

              <h2>Considerações Finais</h2>
              <p>A adesão a estas diretrizes garantirá um suporte mais eficiente e estruturado, beneficiando tanto a nossa equipe quanto os nossos clientes. Agradecemos a compreensão e colaboração de todos.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
