import Heading from "@theme/Heading"
import Layout from "@theme/Layout"
import Link from "@docusaurus/Link"

export default function Politicas() {
  return (
    <Layout
      title="Políticas"
    >
      <main className="container margin-vert--lg">
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
      </main>
    </Layout>
  )
}
