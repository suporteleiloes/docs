import Heading from "@theme/Heading"
import Sidebar from "./components/Sidebar"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"

import mainLayoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Main/styles.module.css"
import layoutStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/styles.module.css"

export default function Politicas(){
  return (
    <Layout title="Políticas">
      <div
        className={layoutStyle.docRoot}
        style={{ flexGrow: 1 }}
      >
        <Sidebar route="politicas" />

        <main className={mainLayoutStyle.docMainContainer}>
          <div className="container padding-top--md padding-bottom--lg">
            <Heading as="h1">
              Políticas e Diretrizes da Suporte Leilões
            </Heading>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr"
              }}
            >
              <Link
                to="/politicas/privacidade"
                className="text--no-decoration"
                style={{ color: "inherit" }}
              >
                <div className="card margin-vert--md margin-horiz--md">
                  <div className="card__header text--primary text--bold">
                    Política de privacidade
                  </div>
                  <div className="card__body">
                    Saiba como protegemos e utilizamos seus dados pessoais ao usar os serviços da Suporte Leilões.
                  </div>
                </div>
              </Link>
              <Link
                to="/politicas/atendimento"
                className="text--no-decoration"
                style={{ color: "inherit" }}
              >
                <div className="card margin-vert--md margin-horiz--md">
                  <div className="card__header text--primary text--bold">
                    Políticas de atendimento
                  </div>
                  <div className="card__body">
                    Entenda como funciona o atendimento e suporte relacionado aos serviços da Suporte Leilões.
                  </div>
                </div>
              </Link>
              <Link
                to="/politicas/termos-de-uso"
                className="text--no-decoration"
                style={{ color: "inherit" }}
              >
                <div className="card margin-vert--md margin-horiz--md">
                  <div className="card__header text--primary text--bold">
                    Termos de uso
                  </div>
                  <div className="card__body">
                    Confira as condições e responsabilidades ao utilizar a plataforma de leilões da Suporte Leilões.
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </Layout>
  )
}
