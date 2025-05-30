import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import HomepageFeatures from "../components/HomepageFeatures"
import Heading from "@theme/Heading"
import styles from "./index.module.css"
import Layout from "@theme/Layout"
import clsx from "clsx"
import Link from "@docusaurus/Link"

function HomepageHeader(){
  const { siteConfig } = useDocusaurusContext()

  return (
    <header className={clsx("hero hero--primary", styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>

        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs"
          >
            Documentação
          </Link>
        </div>
      </div>
    </header>
  )
}

export default function Home(){
  return (
    <Layout
      title="Documentação"
      description="Documentação oficial da Suporte Leilões"
    >
      <HomepageHeader />

      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  )
}
