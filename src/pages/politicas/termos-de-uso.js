import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"
import React, {useState, useEffect} from 'react'

export default function TermoDeUso() {
  const [emIframe, setEmIframe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      setEmIframe(true);
    }
  }, []);
  return (
    <Layout title="Termos de uso" noFooter={emIframe} noNavbar={emIframe}>
      <div
        class={layoutStyle.docRoot}
        style={{flexGrow: 1}}
      >
        {!emIframe && <Sidebar route="termos-de-uso"/>}

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg content-main-page">
            <Heading as="h1">
              Termos de Uso de Serviço
            </Heading>
            {emIframe && <style>{`
              .navbar, .footer, .theme-doc-sidebar-container {
                display: none !important;
              }
            `}</style>}
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência: 28 de maio de 2025 versão 20250528</strong></p>
              <h2>1. Introdução</h2> <p>Estes Termos de Serviço (<strong>“Termos”</strong>) regem o uso do software ERP
              SaaS fornecido pela Suporte Leilões para a realização de leilões e a gestão de negócios relacionados. Ao
              utilizar nossos serviços, você concorda com todos os termos e condições aqui descritos. Caso não concorde
              com alguma parte destes Termos, <strong>não utilize os serviços da Suporte Leilões</strong>.</p> <h3>1.1
              Atualizações e Comunicações</h3> <p>A Suporte Leilões poderá, periodicamente, revisar estes Termos ou
              adicionar condições adicionais referentes a serviços específicos, visando refletir mudanças na legislação
              ou em nossos próprios serviços. As versões atualizadas dos Termos serão publicadas em nosso site, sempre
              indicando a data da última atualização. ℹ️ <strong>Recomendamos verificar regularmente o site oficial da
                Suporte Leilões para manter-se informado sobre eventuais alterações destes Termos.</strong> Ao continuar
              a utilizar os serviços após a entrada em vigor de revisões, você reconhece e concorda em vincular-se aos
              Termos revisados. Você também reconhece que a Suporte Leilões não poderá ser responsabilizada caso você
              não tome conhecimento de atualizações destes Termos.</p> <h3>1.2 Comunicação Eletrônica</h3> <p>Você
              concorda em receber todas as comunicações, contratos, avisos e notificações (“Comunicações”) relativos aos
              serviços da Suporte Leilões por meios eletrônicos, tais como e-mail, mensagem de texto (SMS), notificações
              dentro do próprio sistema ou publicações em nosso site. Tais Comunicações eletrônicas satisfazem os
              requisitos legais de comunicação por escrito, tendo a mesma validade que documentos físicos. Você se
              compromete a manter atualizados os seus dados de contato e informações da conta, garantindo assim o
              recebimento adequado dessas Comunicações.</p> <h2>2. Definições</h2>
              <ul>
                <li><strong>Suporte Leilões:</strong> a empresa fornecedora do software ERP em modelo SaaS (Software
                  como Serviço) para leiloeiros públicos.
                </li>
                <li><strong>Leiloeiro:</strong> o cliente da Suporte Leilões, sendo um leiloeiro público oficial
                  devidamente registrado na junta comercial ou órgão competente de sua jurisdição.
                </li>
                <li><strong>Usuário:</strong> qualquer pessoa autorizada pelo Leiloeiro a acessar e utilizar o ERP, com
                  permissões designadas conforme seu papel (por exemplo: colaboradores da equipe do Leiloeiro,
                  comitentes, arrematantes).
                </li>
                <li><strong>ERP:</strong> o software de gestão empresarial oferecido pela Suporte Leilões na forma de
                  serviço (SaaS), englobando módulos para administração de leilões e atividades correlatas.
                </li>
                <li><strong>Marketplace:</strong> plataforma integrada ao ERP onde o Leiloeiro pode contratar produtos e
                  serviços adicionais complementares ao sistema, oferecidos pela Suporte Leilões ou por parceiros.
                </li>
              </ul>
              <h2>3. Registro e Conta</h2> <p>Para utilizar o ERP/SaaS da Suporte Leilões, é necessário ser um Leiloeiro
              público oficial com registro válido em seu órgão de classe. No momento do cadastro, solicitamos
              informações pessoais e profissionais, incluindo nome completo, documentos de identificação, endereço
              completo, telefone de contato e número da matrícula de leiloeiro. O Leiloeiro é responsável por manter os
              dados de sua conta sempre atualizados e por preservar a confidencialidade de suas credenciais de acesso
              (login e senha). A liberação do acesso ao ERP ocorrerá somente após a validação do registro do Leiloeiro
              junto aos órgãos competentes, conforme exigido por lei.</p> <h2>4. Licenciamento e Uso do Software</h2>
              <p>Cada licença de uso do software ERP é individual, intransferível e de uso exclusivo do Leiloeiro
                registrado. É estritamente proibido o compartilhamento de uma mesma licença entre diferentes Leiloeiros
                ou quaisquer terceiros não autorizados. O Leiloeiro titular da licença pode, entretanto, vincular ao seu
                perfil múltiplas matrículas profissionais sob sua titularidade (por exemplo, caso possua registros em
                mais de uma jurisdição), desde que devidamente comprovadas.</p> <p>Qualquer utilização do ERP para
              editar documentos ou informações pertencentes a outro Leiloeiro que não esteja licenciado no sistema
              constitui violação destes Termos. Essa conduta poderá resultar em suspensão imediata do acesso ao software
              e na rescisão do contrato de prestação de serviços, sem direito a reembolso de valores já pagos, além das
              demais medidas cabíveis.</p> <p>O Leiloeiro também tem direito a um website próprio fornecido como parte
              do serviço. Esse site será hospedado em um domínio indicado pelo próprio Leiloeiro e terá layout e
              estrutura padronizados pela Suporte Leilões. Será permitida a personalização de elementos básicos, como
              cores e logotipo/marca do Leiloeiro, bem como a edição de textos e menus através do painel do ERP. A
              Suporte Leilões se responsabiliza pelo pleno funcionamento desse website integrado, incluindo a realização
              de atualizações corretivas, preventivas e evolutivas. Qualquer customização adicional fora do padrão
              oferecido estará sujeita a análise de viabilidade técnica e possível cobrança extra, mediante orçamento
              prévio.</p> <h2>5. Módulos do Software e Limites</h2> <p>O ERP da Suporte Leilões é composto por diversos
              módulos, cada qual voltado a funcionalidades específicas. Alguns módulos ou funcionalidades possuem
              limites de uso definidos conforme o plano contratado pelo Leiloeiro. A seguir, listamos os principais
              módulos do sistema e observações sobre limites quando aplicável:</p>
              <ul>
                <li>Gestão de Bens</li>
                <li>Gestão de Pátio e Remoção</li>
                <li>Gestão de Leilões</li>
                <li>Gestão de Comitentes</li>
                <li>Gestão de Arrematantes</li>
                <li>Gestão de Tarefas</li>
                <li>Gestão de Processos</li>
                <li>Gestão Financeira</li>
                <li>CRM (Gerenciamento de Relacionamento com Clientes)</li>
                <li>Gestão e Controle do Website com configurador</li>
                <li>Marketing</li>
                <li>E-mail Marketing: disponível apenas nos planos Premium e Enterprise, limitado a campanha semanal
                  para até 40.000 contatos. Planos adicionais de envio podem ser contratados no Marketplace.
                </li>
                <li>SMS Marketing: não há cota gratuita; o Leiloeiro deve contratar um pacote de mensagens (plano pago)
                  via Marketplace para utilizar este recurso.
                </li>
                <li>WhatsApp Marketing: não há cota gratuita; o Leiloeiro deve contratar um pacote de mensagens (plano
                  pago) via Marketplace para utilizar este recurso.
                </li>
                <li>Mensagens de Voz: não há cota gratuita; o Leiloeiro deve contratar um pacote de mensagens de voz
                  (plano pago) via Marketplace para utilizar este recurso.
                </li>
                <li>Relatórios</li>
                <li>Configurações</li>
              </ul>
              <h2>6. Planos e Limitações</h2> <p>A Suporte Leilões oferece diferentes planos de assinatura do ERP,
              adequados ao porte e às necessidades de cada Leiloeiro. Abaixo resumimos os recursos e limites de cada
              plano atualmente disponível:</p> <h3>Plano Simplificado</h3>
              <ul>
                <li><strong>Módulos incluídos:</strong> Gestão de Bens, Leilões, Comitentes, Arrematantes, Controle do
                  Website, Relatórios e Configurações.
                </li>
                <li><strong>Infraestrutura:</strong> Nível SL-1 (servidor compartilhado) – infraestrutura básica voltada
                  a pequenos leilões e leiloeiros iniciantes, com capacidade limitada.
                </li>
                <li><strong>Limite de cadastro de arrematantes:</strong> até 2.000 arrematantes cadastrados no sistema.
                </li>
                <li><strong>Espaço de armazenamento:</strong> 20 GB para arquivos (como editais, fotos de bens,
                  documentos de arrematantes).
                </li>
                <li><strong>Tráfego de dados:</strong> 20 GB de transferência de dados por mês.</li>
                <li><strong>Suporte técnico:</strong> atendimento exclusivamente via abertura de chamados no sistema
                  (suporte assíncrono), exceto em casos de emergência durante a realização de leilões.
                </li>
              </ul>
              <h3>Plano Premium</h3>
              <ul>
                <li><strong>Infraestrutura:</strong> Nível SL-2 (ambiente dedicado para clientes Premium)
                </li>
                <li><strong>Módulos incluídos:</strong> todos os módulos do ERP estão disponíveis sem restrições.</li>
                <li><strong>Espaço de armazenamento:</strong> 50 GB inclusos. Espaço adicional disponível a R$ 0,80 por
                  GB extra utilizado.
                </li>
                <li><strong>Tráfego de dados:</strong> ilimitado (sem cobranças por volume de transferência).</li>
                <li><strong>Aplicativo de Vistoria:</strong> acesso ao aplicativo móvel de Vistoria, que auxilia no
                  cadastro de bens e upload de fotos diretamente do local do bem.
                </li>
                <li><strong>Suporte técnico aprimorado:</strong> suporte disponibilizado via grupo dedicado no WhatsApp
                  para solução de dúvidas e também através de abertura de chamados para solicitações de
                  desenvolvimento/customização.
                </li>
                <li><strong>Marketplace:</strong> acesso total ao marketplace de serviços integrados, possibilitando a
                  contratação sob demanda de serviços adicionais e integrações ao ERP.
                </li>
              </ul>
              <h3>Plano Enterprise</h3>
              <ul>
                <li><strong>Infraestrutura:</strong> Nível SL-3 (ambiente de hospedagem exclusivo para clientes
                  Enterprise) – recursos de alto desempenho e máxima disponibilidade.
                </li>
                <li><strong>Módulos incluídos:</strong> todos os módulos do ERP estão disponíveis sem restrições.</li>
                <li><strong>Espaço de armazenamento:</strong> 1TB inclusos. Espaço adicional disponível a R$ 0,40 por
                  GB extra utilizado.
                </li>
                <li><strong>Tráfego de dados:</strong> ilimitado.</li>
                <li><strong>Aplicativo de Vistoria:</strong> incluído (mesmas facilidades do plano Premium).</li>
                <li><strong>Aplicativo de Reboquista + GPS:</strong> acesso ao aplicativo móvel para controladores de
                  pátio/reboque, com rastreamento via GPS, exclusivo do plano Enterprise.
                </li>
                <li><strong>Suporte e consultoria dedicados:</strong> além do grupo de WhatsApp, o cliente Enterprise
                  conta com suporte via ligação telefônica ou WhatsApp direta com o consultor exlcusivo da equipe de consultoria, e
                  acompanhamento por chamados com gerenciamento de desenvolvimento conforme SLA acordado.
                </li>
                <li><strong>Marketplace:</strong> acesso total ao marketplace para contratação de serviços adicionais
                  sob demanda, similar ao plano Premium.
                </li>
                <li><strong>Consultoria especializada:</strong> orientação operacional e de marketing personalizada.
                </li>
                <li><strong>Equipe dedicada:</strong> alocação de desenvolvedor exclusivo para demandas do cliente, além
                  de um gerente de contas designado para suporte estratégico.
                </li>
              </ul>
              <h2>7. Usuários e Responsabilidades</h2> <p>O Leiloeiro é responsável pela utilização do ERP tanto por si
              quanto por seus Usuários autorizados (colaboradores, parceiros etc.). É responsabilidade do Leiloeiro
              assegurar que todas as atividades realizadas no sistema por sua equipe estejam em conformidade com estes
              Termos e com a legislação vigente. Isso inclui adotar boas práticas de segurança, manter confidenciais as
              senhas de acesso e zelar pela integridade dos dados e das transações efetuadas no ERP.</p> <p>A Suporte
              Leilões não se responsabiliza por ações indevidas, vazamento de senhas ou quaisquer atos ilícitos
              cometidos por Usuários autorizados do sistema. Por outro lado, a Suporte Leilões compromete-se a manter
              rigorosas políticas internas de segurança da informação e a estar em conformidade com a <strong>Lei Geral
                de Proteção de Dados (LGPD)</strong>, de forma a proteger os dados armazenados em sua plataforma.</p>
              <h2>8. Pagamentos e Cobranças</h2>
              <ul>
                <li>É cobrada uma taxa de instalação única para adesão aos planos Premium e Enterprise.</li>
                <li>As mensalidades do serviço são faturadas com periodicidade mensal, trimestral, semestral ou anual, conforme
                  escolha do cliente, e podem incluir descontos proporcionais à duração do período contratado.
                </li>
                <li>Qualquer serviço ou recurso adicional contratado através do Marketplace será cobrado conforme os
                  valores e condições informados na descrição do respectivo serviço.</li>
                <li>Serviços adicionais cobrados por hora, quando autorizados pelo cliente, serão faturados no mês subsequente à sua execução ou parcialmente, conforme condições descritas no orçamento pré-venda ou de acordo com a tabela de preços vigente apresentada pelo gerente de contas no momento da solicitação.</li>
                <li><strong style={{color: 'red'}}>Inadimplência:</strong> Em caso de atraso no pagamento da mensalidade do ERP, o cliente será notificado via e-mail e/ou WhatsApp com até três alertas nos primeiros 3 (três) dias de inadimplência. Caso o pagamento não seja regularizado, o acesso completo ao ERP será suspenso no 5º (quinto) dia de atraso. Se o atraso persistir por 30 (trinta) dias corridos, o site público do cliente e os painéis de acesso vinculados também serão automaticamente suspensos até a regularização financeira.</li>
              </ul>
              <h2>9. Uso Aceitável</h2> <p>🚫 <strong>Uso Proibido:</strong> Não é permitido utilizar a plataforma
              Suporte Leilões para a realização de “leilões de centavos” ou de qualquer modalidade de leilão proibida
              por lei. Além disso, caso haja suspeita fundada, reclamações de fraude ou ações judiciais em curso contra
              o Leiloeiro, a Suporte Leilões reserva-se o direito de suspender preventivamente o acesso aos serviços.
              Lembre-se de que a violação de quaisquer condições destes Termos pode acarretar a suspensão imediata do
              serviço e a rescisão do contrato, sem direito a reembolso.</p> <p>Dessa forma, o Leiloeiro e seus Usuários
              concordam em <strong>não praticar nenhuma das seguintes condutas</strong> ao utilizar a plataforma Suporte
              Leilões:</p>
              <ul>
                <li>Violar quaisquer leis ou regulamentos aplicáveis (municipais, estaduais ou federais).</li>
                <li>Promover ou incentivar atividades ilegais, ou discutir instruções sobre como praticá-las.</li>
                <li>Infringir direitos de terceiros, incluindo direitos de privacidade, publicidade, direitos autorais,
                  marcas registradas, patentes, segredos comerciais ou outros direitos de propriedade intelectual.
                </li>
                <li>Publicar ou transmitir conteúdo ofensivo, ameaçador, abusivo, calunioso, obsceno, discriminatório,
                  vulgar, ou qualquer material que promova violência, ódio ou atividades ilícitas.
                </li>
                <li>Praticar qualquer ato que prejudique ou interfira na utilização do ERP por outros usuários,
                  incluindo ataques, tentativas de invasão ou sobrecarga intencional de recursos.
                </li>
                <li>Tentar se passar por outra pessoa, organização ou entidade, falsificando ou omitindo informações (ou
                  fornecer informações falsas) com a intenção de enganar.
                </li>
                <li>Utilizar a plataforma para fins de spam, esquemas de pirâmide, correntes, ou qualquer forma de
                  solicitação comercial não autorizada ou em desacordo com estes Termos.
                </li>
                <li>Acessar ou usar contas de outros usuários sem a devida permissão.</li>
                <li>Distribuir vírus, malware ou qualquer código malicioso que possa comprometer a integridade de
                  sistemas, equipamentos ou dados de terceiros.
                </li>
                <li>Interferir, remover, evitar ou driblar medidas de segurança, mecanismos de proteção ou restrições de
                  acesso implementadas no sistema.
                </li>
                <li>Realizar engenharia reversa, descompilar, desmontar ou tentar extrair o código-fonte do software,
                  exceto se expressamente permitido por lei ou autorizado por nós por escrito.
                </li>
                <li>Capturar, explorar ou divulgar dados ou conteúdo de outros usuários de forma não autorizada, ou fora
                  das finalidades previstas na plataforma.
                </li>
                <li>Usar os serviços da Suporte Leilões para comparar ou desenvolver um serviço ou produto concorrente,
                  sem autorização.
                </li>
                <li>Qualquer outra ação não mencionada acima, mas que seja considerada imprópria, antiética ou em
                  desacordo com as políticas de uso da Suporte Leilões.
                </li>
              </ul>
              <p>Se você identificar qualquer uso indevido da plataforma ou conteúdo que viole estas diretrizes,
                comunique-nos imediatamente por meio do nosso <a href="https://www.suporteleiloes.com.br/atendimento"
                                                                 target="_blank">canal de atendimento oficial</a>.</p>
              <h2>10. Política de Privacidade</h2> <p>🔒 A utilização do ERP da Suporte Leilões implica também na
              aceitação de nossa <a href="https://docs.suporteleiloes.com/politicas/privacidade/" target="_blank">Política
                de Privacidade</a>. Nós coletamos, utilizamos, armazenamos e protegemos os dados pessoais e informações
              dos usuários em conformidade com essa política e com a legislação de proteção de dados aplicável.
              Recomendamos que todos os usuários leiam atentamente a Política de Privacidade para entender como suas
              informações são tratadas. Para mais detalhes ou quaisquer esclarecimentos adicionais sobre privacidade e
              proteção de dados, entre em contato conosco pelo e-mail <a
                href="mailto:juridico@suporteleiloes.com">juridico@suporteleiloes.com</a>.</p> <h2>11. Restrições e
              Limitações de Responsabilidade</h2> <p>⚠️ <strong>Limitação de Responsabilidade:</strong> A Suporte
              Leilões não se responsabiliza, em nenhuma hipótese, por:</p>
              <ul>
                <li>Quaisquer perdas ou danos indiretos, incidentais, especiais ou consequenciais, incluindo perda de
                  lucros, perda de receita ou perda de dados.
                </li>
                <li>Danos ou prejuízos decorrentes do uso inadequado do ERP pelo Leiloeiro ou por Usuários, ou do não
                  cumprimento destes Termos.
                </li>
                <li>Interrupções ou falhas na prestação do serviço causadas por fatores fora de seu controle razoável,
                  tais como casos fortuitos, força maior, falhas de energia ou de infraestrutura de telecomunicações.
                </li>
              </ul>
              <p>Além das limitações acima, a responsabilidade total da Suporte Leilões, em qualquer hipótese, fica
                limitada ao montante equivalente aos valores efetivamente pagos pelo cliente pelos serviços nos 12
                (doze) meses anteriores ao evento que originou a reclamação. Note-se que determinadas jurisdições não
                permitem a exclusão de garantias ou a limitação de responsabilidade. Nesses casos, as limitações
                estabelecidas nesta seção serão aplicadas somente na extensão máxima permitida pela legislação
                vigente.</p> <h2>12. Cancelamento e Rescisão</h2> <p>O Leiloeiro (cliente) pode solicitar o cancelamento
              de sua conta e dos serviços contratados a qualquer momento, diretamente através do ERP ou por meio de
              solicitação enviada para o e-mail <a
                href="mailto:juridico@suporteleiloes.com">juridico@suporteleiloes.com</a>. É necessário observar um
              prazo mínimo de 30 (trinta) dias de antecedência para a efetivação do cancelamento sem cobrança da próxima
              recorrência.</p> <p>Após formalizar o pedido de cancelamento, a Suporte Leilões disponibilizará ao
              cliente, em até 5 (cinco) dias, uma cópia de seu banco de dados (contendo os dados existentes na
              plataforma até a data da rescisão), em formato adequado para migração ou backup. Após esse fornecimento,
              os dados do cliente poderão ser removidos de nossos servidores, conforme critérios internos de retenção e
              em atendimento à legislação.</p> <p>A rescisão do contrato de prestação de serviços estará sujeita às
              condições previstas no respectivo contrato ou termo de adesão aceito pelo Leiloeiro, incluindo – se
              aplicável – cumprimento de períodos mínimos de fidelização e pagamento de eventuais multas rescisórias
              estabelecidas. Recomenda-se a leitura das condições contratuais específicas para verificar obrigações em
              caso de término antecipado.</p> <h2>13. Suporte e SLA</h2> <p>Para conhecer detalhadamente os níveis de
              serviço oferecidos (SLA – <em>Service Level Agreement</em>, ou Acordo de Nível de Serviço) e as políticas
              de suporte técnico da Suporte Leilões, por favor consulte o documento <a
                href="https://docs.suporteleiloes.com/politicas/atendimento/" target="_blank">Políticas de
                Atendimento</a> em nosso site. Nesse documento, estão descritos os horários de atendimento, canais de
              contato, tempos de resposta e outras informações relacionadas ao suporte ao cliente.</p> <h2>14.
              Considerações Finais</h2> <p>Em síntese, estes Termos de Uso têm o objetivo de estabelecer claramente as
              responsabilidades e obrigações tanto da Suporte Leilões quanto dos Leiloeiros clientes, garantindo uma
              relação profissional, transparente e segura para ambas as partes. Agradecemos a compreensão e a
              colaboração de todos no cumprimento fiel de todas as regras aqui descritas.</p> <p>Por fim, ressaltamos
              que estamos à disposição para esclarecer qualquer dúvida relativa a estes Termos ou ao uso de nossos
              serviços. A Suporte Leilões valoriza a confiança depositada por seus clientes e busca continuamente
              aperfeiçoar seus produtos, serviços e políticas para melhor atendê-los.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
