import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"

export default function TermoDeUso(){
  return (
    <Layout title="Termos de uso">
      <div
        class={layoutStyle.docRoot}
        style={{ flexGrow: 1 }}
      >
        <Sidebar route="termos-de-uso" />

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
            <Heading as="h1">
              Termos de Uso de Serviço
            </Heading>
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência:</strong> 19 de janeiro de 2025</p>

              <h2>1. Introdução</h2>
              <p>
                Estes Termos de Serviço (“Termos”) regem o uso do software ERP SaaS fornecido pela Suporte Leilões para a realização de leilões e a gestão de negócios relacionados. Ao utilizar nossos serviços, o contratante concorda com estes Termos. Caso não concorde, o uso dos serviços não deve ser realizado.
              </p>

              <h3>1.1 Atualizações e Comunicações</h3>
              <p>
                Podemos, de tempos em tempos, revisar estes termos e condições adicionais que sejam relevantes a um Serviço específico da Suporte Leilões para refletir mudanças na lei ou nos Serviços da Suporte Leilões. Nós publicaremos os termos revisados no Site com a data da última atualização. <strong>POR FAVOR, CONSULTE O SITE REGULARMENTE PARA OBTER TEMPESTIVAMENTE NOTIFICAÇÃO DE QUAISQUER REVISÕES.</strong> Se você continuar a utilizar os serviços da Suporte Leilões após as revisões entrarem em vigor, você concorda em estar vinculado aos termos revisados. Você concorda que não seremos responsáveis perante você ou terceiros por qualquer modificação dos Termos.
              </p>

              <h3>1.1.2 Comunicação Eletrônica</h3>
              <p>
                Você concorda em receber todas as comunicações, contratos e notificações fornecidos por nós relacionados a quaisquer serviços da Suporte Leilões ("Comunicações"), incluindo, entre outros, comunicações relacionadas à entrega dos serviços e à sua compra ou assinatura. Tais comunicações poderão ser realizadas por meios eletrônicos, como e-mail, mensagem de texto, notificações no produto, ou por meio de publicação no site. Você concorda que todas as comunicações enviadas eletronicamente atendem a quaisquer requisitos legais, e compromete-se a manter suas informações de contato atualizadas.
              </p>

              <h2>2. Definições</h2>
              <ul>
                <li><strong>Suporte Leilões:</strong> Refere-se à empresa fornecedora do software ERP SaaS.</li>
                <li><strong>Leiloeiro:</strong> Refere-se ao cliente, um leiloeiro público oficial devidamente registrado.</li>
                <li><strong>Usuário:</strong> Refere-se a qualquer pessoa autorizada pelo leiloeiro a acessar e utilizar o ERP.</li>
                <li><strong>ERP:</strong> Software de gestão empresarial fornecido como serviço.</li>
                <li><strong>Marketplace:</strong> Plataforma dentro do ERP onde o cliente pode contratar serviços adicionais.</li>
              </ul>

              <h2>3. Registro e Conta</h2>
              <p>
                Para utilizar o ERP da Suporte Leilões, o cliente deve ser um leiloeiro público oficial com inscrição válida. Durante o registro, são necessários Nome, documentos pessoais, endereço completo, telefone e número da matrícula. O leiloeiro é responsável por manter as informações de conta atualizadas e confidenciais. A liberação do ERP será feita somente após validação junto aos órgãos competentes.
              </p>

              <h2>4. Licenciamento e Uso do Software</h2>
              <p>
                Cada licença do software é individual e de uso exclusivo do leiloeiro registrado. O compartilhamento de licenças é proibido. O leiloeiro tem direito a um website customizado em cores e marca, com possibilidades de edição de textos e menus diretamente no ERP.
              </p>
              <p>
                Customizações adicionais estão sujeitas a custos extras mediante cotação.
              </p>

              <h2>5. Módulos do Software e Limites</h2>
              <ul>
                <li>Gestão de Bens</li>
                <li>Gestão de Pátio e Remoção</li>
                <li>Leilões</li>
                <li>CRM</li>
                <li>Gestão de Processos</li>
                <li>Marketing</li>
                <li>Financeiro</li>
                <li>Relatórios</li>
              </ul>

              <h2>6. Planos e Limitações</h2>
              <p>
                Existem três planos principais: Simplificado, Premium e Enterprise, com variações nos módulos disponíveis e na infraestrutura oferecida.
              </p>

              <h2>7. Usuários e Responsabilidades</h2>
              <p>
                O leiloeiro é responsável pelo uso do ERP por si e por seus colaboradores. A Suporte Leilões não se responsabiliza por vazamentos de senha ou ações ilícitas realizadas pelos usuários.
              </p>

              <h2>8. Cancelamento e Rescisão</h2>
              <p>
                O cliente pode solicitar cancelamento com 30 dias de antecedência. Uma cópia do banco de dados será disponibilizada em até 5 dias.
              </p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
