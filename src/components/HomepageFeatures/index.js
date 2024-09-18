import Heading from "@theme/Heading"
import styles from "./styles.module.css"
import clsx from "clsx"

const FeatureList = [
  {
    title: "Primeiros Passos",
    Svg: require("@site/static/img/undraw_docusaurus_mountain.svg").default,
    description: (
      <>
        Seja bem-vindo! Este site irá te manter informado de todas as
        atualizações que ocorrerem nos sistemas da Suporte Leilões.
      </>
    )
  },
  {
    title: "Tutoriais",
    Svg: require("@site/static/img/undraw_docusaurus_tree.svg").default,
    description: (
      <>
        Além disso, aqui contém uma documentação de como usar os
        serviços da Suporte Leilões.
      </>
    )
  },
  {
    title: "Mantenha-se informado",
    Svg: require("@site/static/img/undraw_docusaurus_react.svg").default,
    description: (
      <>
        Visite o site regularmente para ler sobre as constantes
        atualizações e mudanças da Suporte Leilões.
      </>
    )
  }
]

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  )
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, index) => <Feature key={index} {...props} />)}
        </div>
      </div>
    </section>
  )
}
