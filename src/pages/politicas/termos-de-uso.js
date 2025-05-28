import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"
import React, { useState, useEffect } from 'react'

export default function TermoDeUso(){
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
        style={{ flexGrow: 1 }}
      >
        {!emIframe && <Sidebar route="termos-de-uso" />}

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
            <Heading as="h1">
              Termos de Uso de Serviço
            </Heading>
            <div className="content" style={{maxWidth: '800px', textAlign: 'justify'}}>
              <p><strong>Data de Vigência: 19 de janeiro de 2025</strong></p>
              <h2>1. Introdução</h2>
              <p>
              Estes Termos de Serviço (“Termos”) regem o uso do software ERP SaaS fornecido pela Suporte Leilões para a realização de leilões e a gestão de negócios relacionados. Ao utilizar nossos serviços, o contratante concorda com estes Termos. Caso não concorde, o uso dos serviços não deve ser realizado
              </p>
              <h3>1.1. ATUALIZAÇÕES E COMUNICAÇÕES:</h3>
              <p>Podemos, de tempos em tempos, revisar estes termos e condições adicionais que sejam relevantes a um Serviço específico da Suporte Leilões para refletir mudanças na lei ou nos Serviços da Suporte Leilões. Nós publicaremos os termos revisados no Site com a data da última atualização. POR FAVOR, CONSULTE O SITE REGULARMENTE PARA OBTER TEMPESTIVAMENTE NOTIFICAÇÃO DE QUAISQUER REVISÕES. SE VOCÊ CONTINUAR A UTILIZAR OS SERVIÇOS DA SUPORTE LEILÕES APÓS AS REVISÕES ENTRAREM EM VIGOR, VOCÊ CONCORDA EM ESTAR VINCULADO AOS TERMOS REVISADOS. Você concorda que não seremos responsáveis perante você ou terceiros por qualquer modificação dos Termos.</p>
              <h3>1.1.2 Comunicação Eletrônica</h3>
              <p>Você concorda em receber todas as comunicações, contratos e notificações fornecidos por nós relacionados a quaisquer Serviços da Suporte Leilões ("Comunicações"), incluindo, entre outros, Comunicações relacionadas à entrega dos Serviços da Suporte Leilões e à sua compra ou assinatura dos Serviços da Suporte Leilões, por meios eletrônicos, como e-mail, mensagem de texto, notificações no produto, ou por meio de publicação no Site ou através de quaisquer Serviços da Suporte Leilões. Você concorda que todas as Comunicações enviadas eletronicamente por nós atendem a quaisquer requisitos legais que determinem que tais Comunicações devem ser feitas por escrito ou entregues em formato específico, e compromete-se a manter suas informações de contato da Conta atualizadas.</p>
              <h2>2. Definições</h2>
              <ul>
                <li><strong>Suporte Leilões:</strong> Refere-se à empresa fornecedora do software ERP SaaS.</li>
                <li><strong>Leiloeiro:</strong> Refere-se ao cliente, um leiloeiro público oficial devidamente registrado na junta comercial de seu país.</li>
                <li><strong>Usuário:</strong> Refere-se a qualquer pessoa autorizada pelo leiloeiro a acessar e utilizar o ERP com suas determinadas permissões, seja ele um colaborador, comitente arrematante ou qualquer pessoa com acesso.</li>
                <li><strong>ERP:</strong> Refere-se ao software de gestão empresarial fornecido como serviço pela Suporte Leilões.</li>
                <li><strong>Marketplace:</strong> Plataforma dentro do ERP onde o cliente/leiloeiro pode contratar vários produtos e serviços adicionais integrados ao ERP.</li>
              </ul>

              <h2>3. Registro e Conta</h2>
              <p>Para utilizar o ERP/SaaS da Suporte Leilões, o cliente deve ser um leiloeiro público oficial com inscrição válida. Durante o registro, são necessários Nome, documentos pessoais, endereço completo, telefone e número da matrícula. O leiloeiro é responsável por manter as informações de conta atualizadas e confidenciais. A liberação de continuidade para uso do ERP somente se dará após validação do registro do leiloeiro junto aos órgãos competentes.</p>

              <h2>4. Licenciamento e Uso do Software</h2>
              <p>Cada licença do software é individual e de uso exclusivo do leiloeiro registrado. O compartilhamento de licenças entre leiloeiros é estritamente proibido. O leiloeiro pode cadastrar ilimitadas matrículas relacionadas à sua titularidade. Edição de documentos ou qualquer área do ERP com informações de outro leiloeiro que não seja o devidamente licenciado no ERP está sujeito à violação dos termos de uso, suspensão do software e possível rescisão contratual sem reembolso.</p>
              <p>O leiloeiro também tem direito a um website, hospedado em um domínio indicado pelo leiloeiro, cujo layout e estrutura é padrão da Suporte Leilões e será somente customizado cores e sua marca, além de possibilitar a edição de textos e menus diretamente do ERP, que a Suporte Leilões garantirá o pleno funcionamento e atualizações corretivas, preventivas e evolutivas. Customizações adicionais ao website estão sujeitas a custos adicionais, por meio de cotação/orçamento para que o desenvolvimento possa ser realizado.</p>
              <h2>5. Módulos do Software e Limites</h2>
              <p>O software é dividido em diversos módulos, cada um com funcionalidades específicas e limites definidos conforme o plano contratado:</p>
              <ul>
                <li>Gestão de Bens</li>
                <li>Gestão de Pátio e Remoção</li>
                <li>Leilões</li>
                <li>CRM</li>
                <li>Gestão de Processos</li>
                <li>Marketing</li>
                <li>E-mail Marketing: Somente nos planos Premium e Enterprise, com limite de 1 campanha por mês para até 20 mil cadastros. Planos adicionais podem ser contratados no marketplace.</li>
                <li>SMS Marketing: Não existe cota gratuita, o cliente deve contratar um plano de dados no marketplace.</li>
                <li>WhatsApp Marketing: Não existe cota gratuita, o cliente deve contratar um plano de dados no marketplace.</li>
                <li>Mensagem de Voz: Não existe cota gratuita, o cliente deve contratar um plano de dados no marketplace.</li>
                <li>Gestão de Comitentes</li>
                <li>Gestão de Arrematantes</li>
                <li>Controle do Website</li>
                <li>Financeiro</li>
                <li>Relatórios</li>
                <li>Configurações</li>
              </ul>
              <h2>6. Planos e Limitações</h2>
              <p><strong>Plano Simplificado</strong></p>
              <ul>
                <li>Módulos incluídos: Bens, Leilões, Comitentes, Arrematantes, Controle do Website, Relatórios e Configurações.</li>
                <li>Limites:
                  <ul>
                    <li>Infraestrutura: SL-1 (Compartilhada): Uma infraestrutura mais simples e limitada, projetada para atender pequenos leilões e operação de leiloeiros iniciantes.</li>
                    <li>Até 2 mil arrematantes cadastrados</li>
                    <li>20GB de espaço em disco para arquivos: Editais, Fotos de Bens, Arquivos de Arrematantes</li>
                    <li>20GB de tráfego de dados mensal</li>
                    <li>Suporte somente por abertura de chamado, exceto em situações de emergência durante leilões.</li>
                  </ul>
                </li>
              </ul>
              <p></p>
              <p><strong>Plano Premium</strong></p>
              <ul>
                <li>Infraestrutura: SL-2 (Exclusiva Clientes Premium)</li>
                <li>Todos os módulos disponíveis.</li>
                <li>50GB de espaço em disco e R$ 0,80 por GB adicional</li>
                <li>Transferência de dados ilimitada</li>
                <li>Aplicativo de Vistoria e Auxiliar no cadastro bens e fotos</li>
                <li>Suporte por grupo de WhatsApp para dúvidas e abertura de chamado para desenvolvimento</li>
                <li>Acesso ao marketplace de serviços para contratação sob demanda de serviços adicionais e integrações no ERP</li>
              </ul>
              <p></p>
              <p><strong>Plano Enterprise</strong></p>
              <ul>
                <li>Infraestrutura: SL-3 (Exclusiva Clientes Enterprise)</li>
                <li>Todos os módulos disponíveis.</li>
                <li>100GB de espaço em disco e R$ 0,40 por GB adicional</li>
                <li>Transferência de dados ilimitada</li>
                <li>Aplicativo de Vistoria e Auxiliar no cadastro bens e fotos</li>
                <li>Aplicativo do Reboquista + GPS</li>
                <li>Suporte por grupo de WhatsApp, ligação ou meeting com consultoria, além de abertura de chamado para controle de desenvolvimento e SLA</li>
                <li>25h de desenvolvimento no setup</li>
                <li>Acesso ao marketplace de serviços para contratação sob demanda de serviços adicionais e integrações no ERP</li>
                <li>Consultoria operacional e de marketing</li>
                <li>Desenvolvedor exclusivo</li>
                <li>Gerente de contas</li>
              </ul>
              <h2>7. Usuários e Responsabilidades</h2>
              <p>O leiloeiro é responsável pelo uso do ERP por si e por seus colaboradores. Isso inclui a segurança dos dados e das transações realizadas no sistema. A Suporte Leilões não se responsabiliza por vazamentos de senha ou qualquer ação ilícita realizada pelos usuários do ERP. A Suporte Leilões se compromete a manter suas próprias políticas de segurança e a estar em conformidade com a LGPD.</p>
              <h2>8. Pagamentos e Cobranças</h2>
              <ul>
                <li>Taxa de instalação nos planos Premium e Enterprise.</li>
                <li>Mensalidades pagas trimestral, semestral ou anualmente com descontos aplicáveis.</li>
                <li>Serviços adicionais cobrados conforme descrito no marketplace.</li>
              </ul>
              <h2>9. Uso Aceitável</h2>
              <p>Atividades proibidas incluem leilões de centavos ou qualquer leilão proibido por lei. Reclamações de fraude ou medidas judiciais contra o leiloeiro podem resultar em suspensão do serviço. A violação dos termos resulta em suspensão e possível rescisão contratual sem reembolso.</p>
              <p><strong>5.1. Ao utilizar o Site, incluindo quaisquer serviços fornecidos pela Suporte Leilões, você concorda em não realizar atividades ou transmitir informações que, a nosso exclusivo critério, possam:</strong></p>
              <ul>
                <li>Violar leis ou regulamentos aplicáveis, sejam eles federais, estaduais ou municipais;</li>
                <li>Promover ou incentivar atividades ilegais, incluindo discussões com a intenção de praticá-las;</li>
                <li>Infringir direitos de terceiros, como privacidade, publicidade, direitos autorais, marcas registradas, patentes, segredos comerciais ou outros direitos relacionados à propriedade intelectual;</li>
                <li>Ser ofensivas, ameaçadoras, abusivas, injuriosas, obscenas, discriminatórias, vulgares ou de qualquer natureza que promova violência, ódio ou atividades repreensíveis;</li>
                <li>Prejudicar ou interferir no uso dos serviços por outros usuários;</li>
                <li>Tentar se passar por outra pessoa, organização ou entidade;</li>
                <li>Utilizar o Site para práticas comerciais indevidas, como envio de spam, esquemas de pirâmide, pesquisas não autorizadas ou atividades publicitárias que violem estes Termos;</li>
                <li>Fornecer informações falsas ou ocultar intencionalmente sua relação com terceiros;</li>
                <li>Acessar ou usar contas de outros usuários sem permissão;</li>
                <li>Distribuir vírus, códigos maliciosos ou programas que comprometam a funcionalidade de equipamentos eletrônicos ou sistemas de comunicação;</li>
                <li>Interferir, desativar ou sobrecarregar recursos do Site ou redes conectadas ao serviço;</li>
                <li>Obter ou acessar informações confidenciais ou registros de outros usuários sem autorização;</li>
                <li>Solicitar de forma inadequada dados sensíveis de outros usuários, como informações financeiras, senhas ou dados pessoais;</li>
                <li>Realizar engenharia reversa, desmontar, decompilar ou tentar extrair o código-fonte do sistema, salvo quando permitido por lei ou autorizado nos Termos;</li>
                <li>Contornar medidas de segurança ou restrições de acesso implementadas no Site, como capturar informações protegidas ou realizar atividades não autorizadas de coleta de dados;</li>
                <li>Modificar, copiar, distribuir ou comercializar qualquer conteúdo disponibilizado no Site sem autorização prévia;</li>
                <li>Utilizar os serviços para comparar ou desenvolver soluções concorrentes sem a devida permissão;</li>
                <li>Fazer download, publicar ou divulgar conteúdo obtido do Site de forma não autorizada ou fora das condições previstas nestes Termos;</li>
                <li>Realizar qualquer uma das práticas mencionadas acima ou outras que sejam consideradas inadequadas e contrárias às políticas de uso.</li>
              </ul>
              <p><strong>Se você identificar qualquer uso inadequado ou conteúdo que viole estas diretrizes, entre em contato conosco imediatamente pelo seguinte canal: (https://www.suporteleiloes.com.br/atendimento).</strong></p>
              <h2>10. Política de Privacidade</h2>
              <p>A Suporte Leilões coleta, usa e protege dados conforme descrito na Política de Privacidade, disponível em nosso site. Informações adicionais podem ser obtidas entrando em contato com juridico@suporteleiloes.com.</p>
              <h2>11. Restrições e Limitações de Responsabilidade</h2>
              <p>A Suporte Leilões não se responsabiliza por:</p>
              <ul>
                <li>Perdas indiretas, incidentais ou consequenciais.</li>
                <li>Danos resultantes de uso inadequado do ERP.</li>
                <li>Interrupções de serviço fora do controle da Suporte Leilões.</li>
              </ul>
              <h2>12. Cancelamento e Rescisão</h2>
              <p>O cliente pode solicitar cancelamento direto no ERP ou por e-mail (juridico@suporteleiloes.com) com 30 dias de antecedência. Após a solicitação, será disponibilizada uma cópia do banco de dados em até 5 dias. Rescisões estão sujeitas às condições contratuais, incluindo períodos de fidelidade e multas.</p>
              <h2>13. Suporte e SLA</h2>
              <p>Para detalhes completos sobre o suporte e SLA, consulte nossas <a href="/politicas/atendimento">Políticas de Atendimento.</a></p>
              <h2>14. Considerações Finais</h2>
              <p>Estes Termos visam garantir um suporte eficiente e estruturado. Agradecemos a compreensão e colaboração de todos.</p>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
