import clsx from "clsx"

import sidebarDesktopStyle from "@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/styles.module.css"
import sidebarMenuStyle from "@docusaurus/theme-classic/lib/theme/DocSidebar/Desktop/Content/styles.module.css"
import sidebarStyle from "@docusaurus/theme-classic/lib/theme/DocRoot/Layout/Sidebar/styles.module.css"

const routes = {
  politicas: {
    name: "Políticas",
    path: "/politicas"
  },
  privacidade: {
    name: "Aviso de privacidade",
    path: "/politicas/privacidade"
  },
  atendimento: {
    name: "Políticas de atendimento",
    path: "/politicas/atendimento"
  },
  "termos-de-uso": {
    name: "Termos de uso",
    path: "/politicas/termos-de-uso"
  }
}

/**
 * @param {object} props
 * @param {keyof typeof routes} props.route
 */
export default function Sidebar({ route }){
  return (
    <aside className={clsx("theme-doc-sidebar-container", sidebarStyle.docSidebarContainer)}>
      <div className={sidebarStyle.sidebarViewport}>
        <div className={sidebarDesktopStyle.sidebar}>
          <nav aria-label="Políticas" className={clsx("menu thin-scrollbar", sidebarMenuStyle.menu)}>
            <ul className="theme-doc-sidebar-menu menu__list">
              {Object.entries(routes).map(([key, { name, path }]) => {
                const isCurrent = route === key

                return (
                  <li key={key}>
                    <a
                      className={clsx("menu__link", isCurrent && "menu__link--active")}
                      aria-current={isCurrent && "page"}
                      href={path}
                    >
                      {name}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </aside>
  )
}
