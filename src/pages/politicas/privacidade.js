import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"

export default function Privacidade(){
  return (
    <Layout title="Políticas de Privacidade">
      <div
        class={layoutStyle.docRoot}
        style={{ flexGrow: 1 }}
      >
        <Sidebar route="privacidade" />

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
            <Heading as="h1">
              Aviso de Privacidade
            </Heading>
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência:</strong> 19 de janeiro de 2025</p>

              <h2>1. Introdução</h2>
              <p>A Suporte Leilões valoriza a sua privacidade e está comprometida em proteger os dados pessoais que coleta, utiliza e compartilha. Este Aviso de Privacidade descreve como coletamos, utilizamos, armazenamos e protegemos as informações pessoais em relação aos nossos serviços SaaS fornecidos aos leiloeiros públicos oficiais, incluindo o site e o sistema fornecido aos clientes e utilizado pelos arrematantes.</p>
              <p>Ao utilizar nossos serviços, você concorda com os termos desta Política de Privacidade. Caso não concorde, recomendamos que não utilize nossos serviços.</p>

              <h2>2. Dados Coletados</h2>
              <p>Coletamos as seguintes categorias de dados:</p>
              <ul>
                <li><strong>Leiloeiros:</strong> Nome, CPF/CNPJ, matrícula, endereço, telefone, e-mail e outras informações necessárias para cadastro e contratação do software.</li>
                <li><strong>Arrematantes:</strong> Nome completo, CPF/CNPJ, endereço, telefone, e-mail, dados bancários, documentos pessoais (como RG e CNH), preferências de conta, histórico de lances e pagamentos.</li>
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

              <h2>4. Compartilhamento de Dados</h2>

              <p>Os dados podem ser compartilhados com:</p>
              <ul>
                <li><strong>Leiloeiros:</strong> Para operações relacionadas aos leilões, como aprovação cadastral e gestão de arremates.</li>
                <li><strong>Prestadores de Serviço:</strong> Empresas que fornecem serviços de hospedagem, processamento de pagamentos e segurança de dados.</li>
                <li><strong>Autoridades Legais:</strong> Quando exigido por lei ou para cumprir determinações judiciais ou regulações aplicáveis.</li>
              </ul>

              <h2>5. Retenção de Dados</h2>

              <p>Os dados pessoais serão armazenados pelo período necessário para cumprir as finalidades descritas nesta política ou conforme exigido por leis aplicáveis. Dados relacionados a leilões podem ser mantidos por um período mais longo para cumprir obrigações legais ou regulatórias.</p>

              <h2>6. Direitos dos Titulares de Dados</h2>

              <p>De acordo com a LGPD (Lei Geral de Proteção de Dados), os titulares têm os seguintes direitos:</p>

              <ul>
                <li>Confirmar a existência de tratamento de dados.</li>
                <li>Acessar os dados pessoais coletados.</li>
                <li>Corrigir dados incompletos, inexatos ou desatualizados.</li>
                <li>Solicitar a anonimização, bloqueio ou eliminação de dados desnecessários.</li>
                <li>Revogar o consentimento para o tratamento de dados.</li>
              </ul>

              <p>Para exercer seus direitos, entre em contato conosco pelo e-mail juridico@suporteleiloes.com.</p>

              <h2>7. Segurança dos Dados</h2>

              <p>Adotamos medidas de segurança técnicas e administrativas para proteger os dados pessoais contra acessos não autorizados, uso indevido, alteração, divulgação ou destruição.</p>

              <h2>8. Cookies e Tecnologias Semelhantes</h2>

              <p>Utilizamos cookies para melhorar a experiência do usuário no site. Você pode gerenciar as configurações de cookies diretamente no navegador utilizado.</p>

              <h2>9. Alterações nesta Política</h2>

              <p>Podemos atualizar esta Política de Privacidade periodicamente. As alterações serão publicadas em nosso site, com a data da última atualização.</p>

              <h2>10. Contato</h2>

              <p>Em caso de dúvidas sobre esta política ou sobre o tratamento de dados, entre em contato:</p>

              <p>
                <div><strong>E-mail:</strong> juridico@suporteleiloes.com</div>
                <strong>Site:</strong> <a href="https://www.suporteleiloes.com.br">www.suporteleiloes.com.br</a>
              </p>

            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
