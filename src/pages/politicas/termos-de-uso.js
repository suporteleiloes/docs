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
              Termos de uso
            </Heading>
          </div>
        </main>
      </div>
    </Layout>
  )
}
