import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"

export default function Atendimento(){
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
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência: 19 de janeiro de 2025</strong></p>
              <h2>1. Introdução</h2>
              <p>O ERP Suporte Leilões é um software SaaS (Software as a Service). Isso significa que fornecemos um serviço de software baseado em nuvem, acessível via internet, com suporte e manutenção contínuos. O modelo SaaS implica em certas limitações de atendimento e desenvolvimento personalizado, que serão detalhadas a seguir.</p>

              <h2>2. Canais de Atendimento</h2>
              <ul>
                <li style={{marginBottom: '20px'}}><strong>WhatsApp de Suporte Unificado:</strong> Todas as solicitações de suporte devem ser feitas através do número (38) 99950-7998. Este número centralizado facilita a gestão, cumprimento de SLA e o direcionamento adequado dos atendimentos. Não garantimos SLA e resposta no atendimento enviado para qualquer outro número além do citado acima.</li>
                <li>
                  <strong>SLA de Resposta:</strong>
                  <ul>
                    <li><strong>Sem leilão em andamento:</strong> O tempo de resposta é de até 30 minutos durante o horário comercial.</li>
                    <li><strong>Com leilão em andamento:</strong> O tempo de resposta é imediato para garantir que qualquer problema crítico seja resolvido rapidamente.</li>
                  </ul>
                </li>
              </ul>

              <h2>3. Uso dos Grupos de WhatsApp</h2>
              <ul>
                <li style={{marginBottom: '20px'}}><strong>Finalidade dos Grupos:</strong> Os grupos de WhatsApp, destinados aos clientes no plano Premium e Enterprise, devem ser usados exclusivamente para dúvidas ou solicitações emergenciais que impactam a operação. O objetivo é garantir um canal eficiente para questões críticas que requerem atenção imediata.</li>
                <li><strong>Solicitações de Desenvolvimento:</strong> Solicitações de desenvolvimento devem ser formalizadas através do sistema de suporte integrado ao ERP. Solicitações enviadas diretamente nos grupos de WhatsApp serão ignoradas, a menos que o cliente tenha contratado um plano com desenvolvedor ou equipe dedicada, que cuidará da abertura dos chamados apropriados.</li>
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

              <h2>7. Ligações</h2>
              <ul><li><strong>Número de Suporte:</strong> (38) 99950-7998. Ligações são aceitas somente por este número, exceto para clientes com planos de consultoria e/ou programadores dedicados. O atendimento será filtrado e direcionado para o gerente de contas responsável.</li></ul>

              <h2>Considerações Finais</h2>
              <p>A adesão a estas diretrizes garantirá um suporte mais eficiente e estruturado, beneficiando tanto a nossa equipe quanto os nossos clientes. Agradecemos a compreensão e colaboração de todos.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
