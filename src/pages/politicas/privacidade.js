import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"
import React, { useState, useEffect } from 'react'

export default function Privacidade(){
  const [emIframe, setEmIframe] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.self !== window.top) {
      setEmIframe(true);
    }
  }, []);
  return (
    <Layout title="Políticas de Privacidade" noFooter={emIframe} noNavbar={emIframe}>
      <div
        class={layoutStyle.docRoot}
        style={{ flexGrow: 1 }}
      >
        {!emIframe && <Sidebar route="privacidade" />}

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
            <Heading as="h1">
              Aviso de Privacidade
            </Heading>
            {emIframe && <style>{`
              .navbar, .footer, .theme-doc-sidebar-container {
                display: none !important;
              }
            `}</style>}
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência: 28 de maio de 2025 versão 20250528</strong></p>

              <h2>1. Introdução</h2>
              <p>A Suporte Leilões valoriza a sua privacidade e está comprometida em proteger os dados pessoais que coleta, utiliza e compartilha. Este Aviso de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais em relação aos nossos serviços SaaS fornecidos aos leiloeiros públicos oficiais, incluindo o site e o sistema fornecido aos clientes e utilizado pelos arrematantes.</p>
              <p>Ao utilizar nossos serviços, você concorda com os termos desta Política de Privacidade. Caso não concorde, recomendamos que não utilize nossos serviços.</p>

              <h2>2. Dados Coletados</h2>
              <p>Coletamos as seguintes categorias de dados:</p>
              <ul>
                <li><strong>Leiloeiros:</strong> Nome, CPF/CNPJ, matrícula, endereço, telefone, e-mail e outras informações necessárias para cadastro e contratação do software.</li>
                <li><strong>Arrematantes:</strong> Nome completo, CPF/CNPJ, endereço, telefone, e-mail, dados bancários, documentos pessoais (como RG e CNH), preferências de conta, histórico de lances e pagamentos.</li>
                <li><strong>Usuários Internos:</strong> Nome, CPF, e-mail e informações necessárias para acesso ao sistema e ao aplicativo de vistoria. Esses dados são usados exclusivamente para autenticação e controle de acesso.</li>
                <li><strong>Dados de Bens em Vistoria ou Cadastramento direto pelo Software:</strong> informações sobre veículos, imóveis, animais e outros bens registrados no aplicativo de vistoria, incluindo fotos e descrições. Os dados ficam armazenados em nosso storage protegido e só são acessíveis por pessoas relacionadas à operação do leilão ou ao manuseio dos bens. Conteúdo público referente aos bens será disponibilizado exclusivamente no site, conforme necessário para a divulgação do leilão.</li>
                <li><strong>Dados de Navegação:</strong> Endereço IP, tipo de dispositivo, navegador utilizado, páginas acessadas, data e horário de acesso.</li>
              </ul>

              <h2>3. Finalidades do Tratamento de Dados</h2>
              <p>Os dados coletados são utilizados para:</p>
              <ul>
                <li><strong>Leiloeiros:</strong>
                <ul>
                  <li>Gerenciar e configurar o site e o sistema contratados.</li>
                  <li>Fornecer suporte e manter o funcionamento dos serviços contratados.</li>
                  <li>Emitir cobranças e processar pagamentos relacionados à contratação do software.</li>
                </ul>
                </li>
              </ul>

              <ul>
                <li><strong>Arrematantes:</strong>
                  <ul>
                    <li>Realizar aprovação cadastral para participação em leilões.</li>
                    <li>Permitir a participação em leilões, registro de lances e definição de preferências.</li>
                    <li>Processar pagamentos de arremates e emitir comprovantes.</li>
                    <li>Garantir segurança e prevenir fraudes.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li><strong>Usuários Internos:</strong>
                  <ul>
                    <li>Gerenciar o acesso ao sistema e ao aplicativo de vistoria.</li>
                    <li>Controlar atividades realizadas por meio do aplicativo de vistoria.</li>
                  </ul>
                </li>
              </ul>

              <ul>
                <li><strong>Dados de Bens Cadastrados ou em Vistoria:</strong>
                  <ul>
                    <li>Registrar e gerenciar informações e fotos de bens que fazem parte do leilão.</li>
                    <li>Disponibilizar conteúdo público relacionado aos bens, como fotos e descrições, no site do leilão.</li>
                  </ul>
                </li>
                <li><strong>Dados de Navegação:</strong> Aprimorar a experiência do usuário no site e garantir a segurança do sistema.</li>
              </ul>

              <h2>4. Bases Legais para o Tratamento</h2>
              <p>Realizamos o tratamento de dados pessoais com amparo nas bases legais previstas na LGPD. As principais bases utilizadas incluem:</p>
              <ul>
                <li><strong>Execução de contrato:</strong> quando o tratamento é necessário para cumprir obrigações contratuais ou preliminares relacionadas aos nossos serviços (por exemplo, cadastro e manutenção de leiloeiros e arrematantes no sistema).</li>
                <li><strong>Cumprimento de obrigação legal ou regulatória:</strong> quando precisamos tratar, reter ou compartilhar dados para cumprir exigências legais ou regulatórias, como determinações de autoridades competentes.</li>
                <li><strong>Legítimo interesse:</strong> para finalidades ligadas ao suporte e segurança do sistema, prevenção de fraudes e melhorias nos serviços, sempre avaliando o impacto nos direitos dos titulares e garantindo transparência.</li>
                <li><strong>Consentimento:</strong> nos casos em que solicitamos consentimento do titular para uma finalidade específica, o tratamento será realizado conforme o consentimento fornecido, podendo o titular revogá-lo a qualquer momento.</li>
              </ul>

              <h2>5. Compartilhamento de Dados</h2>

              <p>Os dados podem ser compartilhados com:</p>
              <ul>
                <li><strong>Leiloeiros:</strong> Para operações relacionadas aos leilões, como aprovação cadastral e gestão de arremates.</li>
                <li><strong>Prestadores de Serviço:</strong> Empresas que fornecem serviços de hospedagem, processamento de pagamentos e segurança de dados.</li>
                <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para cumprir determinações judiciais ou regulações aplicáveis.</li>
                <li><strong>Usuários Relacionados ao Leilão:</strong> Apenas pessoas autorizadas podem acessar dados armazenados em nosso storage, incluindo informações de bens em vistoria.</li>
              </ul>

              <h2>6. Transferência Internacional de Dados</h2>
              <p>Os dados pessoais coletados podem ser transferidos e armazenados em servidores localizados fora do Brasil, por exemplo, quando utilizamos serviços de computação em nuvem ou provedores de tecnologia situados no exterior. Nesses casos, asseguramos que a transferência internacional seja realizada em conformidade com a LGPD e demais legislações aplicáveis, adotando salvaguardas adequadas para proteger os dados, tais como cláusulas padrão de proteção de dados em contratos ou verificação de conformidade com normas de privacidade.</p>

              <h2>7. Retenção de Dados</h2>
              <p>Os dados pessoais são armazenados apenas pelo período necessário para cumprir as finalidades descritas neste Aviso ou conforme exigido por leis e regulamentos aplicáveis. Por exemplo, dados relacionados a leilões podem ser mantidos por prazos adicionais para cumprimento de obrigações legais, atender exigências regulatórias ou resguardar direitos em eventuais ações judiciais.</p>

              <h2>8. Direitos dos Titulares de Dados</h2>
              <p>De acordo com a LGPD, os titulares dos dados pessoais possuem os seguintes direitos, que podem ser exercidos a qualquer momento:</p>
              <ul>
                <li><strong>Confirmação e acesso:</strong> direito de confirmar a existência de tratamento e de acessar os dados pessoais mantidos por nós.</li>
                <li><strong>Retificação:</strong> direito de solicitar a correção de dados pessoais incompletos, inexatos ou desatualizados.</li>
                <li><strong>Anonimização, bloqueio ou eliminação:</strong> direito de solicitar a anonimização, o bloqueio ou a eliminação de dados desnecessários, excessivos ou tratados em desconformidade com a lei.</li>
                <li><strong>Portabilidade:</strong> direito de solicitar a portabilidade dos seus dados pessoais a outro fornecedor de serviço ou produto, conforme a regulamentação da Autoridade Nacional de Proteção de Dados (ANPD).</li>
                <li><strong>Eliminação de dados tratados com consentimento:</strong> direito de solicitar a eliminação dos dados pessoais tratados com base no consentimento, exceto nos casos em que a lei autorizar a conservação dos dados por outro fundamento legal.</li>
                <li><strong>Informação sobre compartilhamento:</strong> direito de saber quais são as entidades públicas e privadas com as quais compartilhamos seus dados pessoais.</li>
                <li><strong>Informação sobre a não obrigatoriedade de consentimento:</strong> direito de ser informado sobre a possibilidade de não fornecer consentimento e sobre as consequências da negativa, quando o consentimento for solicitado.</li>
                <li><strong>Revogação do consentimento:</strong> direito de revogar, a qualquer momento, o consentimento previamente concedido, nos casos em que o tratamento se baseie no consentimento.</li>
              </ul>
              <p>Além desses direitos, o titular dos dados pode peticionar contra o controlador perante a Autoridade Nacional de Proteção de Dados (<strong>ANPD</strong>) em caso de dúvidas ou reclamações não resolvidas. Para exercer seus direitos ou obter esclarecimentos sobre dados pessoais, entre em contato conosco através do canal abaixo.</p>

              <h2>9. Segurança dos Dados</h2>
              <p>Adotamos medidas técnicas e administrativas adequadas para proteger os dados pessoais sob nossa guarda contra acesso não autorizado, uso indevido, alteração, divulgação ou destruição indevida. Essas medidas incluem controle de acessos, criptografia, monitoramento e testes periódicos de segurança em nossas plataformas, visando prevenir incidentes e violações.</p>

              <h2>10. Cookies e Tecnologias Semelhantes</h2>
              <p>Utilizamos cookies e tecnologias semelhantes para melhorar a experiência do usuário em nosso site, lembrar preferências e personalizar conteúdo. Você pode, a qualquer momento, ajustar as configurações de seu navegador para ser notificado sobre a utilização de cookies ou até mesmo bloquear os cookies. Contudo, nesse caso, algumas funcionalidades do site podem não funcionar corretamente.</p>

              <h2>11. Alterações neste Aviso</h2>
              <p>Poderemos atualizar este Aviso de Privacidade periodicamente. Em caso de alterações significativas, a nova versão será publicada em nosso site, indicando a data da última atualização. Recomendamos revisar este Aviso de tempos em tempos para manter-se informado sobre como estamos protegendo suas informações.</p>

              <h2>12. Contato</h2>
              <p>Em caso de dúvidas, solicitações ou reclamações relacionadas a este Aviso de Privacidade ou ao tratamento de dados pessoais, você pode entrar em contato conosco pelos seguintes canais:</p>
              <p>E-mail: <a href="mailto:juridico@suporteleiloes.com">juridico@suporteleiloes.com</a><br/>
                Site: <a href="https://www.suporteleiloes.com.br" target="_blank" rel="noopener noreferrer">www.suporteleiloes.com.br</a></p>

            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
