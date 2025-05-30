// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import type { Config } from "@docusaurus/types"
import type * as Preset from "@docusaurus/preset-classic"
import { themes as prismThemes } from "prism-react-renderer"

const config: Config = {
  title: "Suporte Leilões",
  tagline: "Documentação oficial da Suporte Leilões",
  favicon: "favicon.svg",

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: "https://docs.suporteleiloes.com/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often "/<projectName>/"
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "suporteleiloes", // Usually your GitHub org/user name.
  projectName: "docs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "pt-BR",
    locales: ["pt-BR"]
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts"
        },
        blog: {
          blogTitle: "Blog",
          blogDescription: "Blog de documentação da Suporte Leilões",
          blogSidebarTitle: "Blogs recentes",
          blogSidebarCount: 10, // "ALL"
          postsPerPage: "ALL",
          showReadingTime: true,
          onUntruncatedBlogPosts: "ignore",
          readingTime: ({ content, locale, defaultReadingTime }) =>
            defaultReadingTime({
              content,
              locale,
              options: {
                wordsPerMinute: 300
              }
            })
        },
        theme: {
          customCss: "./src/css/custom.css"
        }
      } satisfies Preset.Options
    ]
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/sl-social-card.jpg",
    navbar: {
      title: "Suporte Leilões",
      logo: {
        alt: "Logotipo da Suporte Leilões",
        src: "img/nav-logo.svg",
        srcDark: "img/nav-logo-dark.svg"
      },
      items: [
        {
          label: "Docs",
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left"
        },
        {
          label: "Blog",
          to: "/blog",
          position: "left"
        },
        {
          label: "Políticas",
          to: "/politicas",
          position: "left"
        },
        {
          label: "GitHub",
          href: "https://github.com/suporteleiloes/docs",
          position: "right"
        }
      ]
    },
    footer: {
      style: "dark",
      logo: {
        src: "img/logo-extended.png",
        style: {
          mixBlendMode: "hard-light"
        }
      },
      links: [
        {
          title: "Software",
          items: [
            {
              label: "Preço",
              href: "https://www.suporteleiloes.com/software#preco"
            },
            {
              label: "Conheça",
              href: "https://www.suporteleiloes.com/software"
            },
            {
              label: "Status dos Serviços",
              href: "https://www.suporteleiloes.com/#status"
            }
          ]
        },
        {
          title: "Empresa",
          items: [
            {
              label: "Sobre",
              href: "https://www.suporteleiloes.com/sobre"
            },
            {
              label: "Carreiras",
              href: "https://www.suporteleiloes.com/carreiras"
            },
            {
              label: "Seja um Representante",
              href: "https://www.suporteleiloes.com/seja-representante"
            },
            {
              label: "Seja um SL Partner",
              href: "https://www.suporteleiloes.com/seja-representante"
            },
            {
              label: "Centro de Desenvolvimento e Customizações",
              href: "https://www.suporteleiloes.com/centro-desenvolvimento-e-customizacoes"
            }
          ]
        },
        {
          title: "Políticas",
          items: [
            {
              label: "Lei Geral de Proteção de Dados Pessoais (LGPD)",
              href: "https://www.suporteleiloes.com/protecao-de-dados-pessoais"
            },
            {
              label: "Política de Privacidade",
              href: "https://www.suporteleiloes.com/politica-privacidade"
            },
            {
              label: "Termos de Uso",
              href: "https://www.suporteleiloes.com/termos-uso"
            }
          ]
        },
        {
          title: "Redes sociais",
          items: [
            {
              label: "Facebook",
              href: "https://www.facebook.com/suporteleiloes"
            },
            {
              label: "YouTube",
              href: "https://www.youtube.com/channel/UCDBSF2uX3nqCUSGXF7YOQyw"
            },
            {
              label: "Instagram",
              href: "https://www.instagram.com/suporteleiloes"
            }
          ]
        }
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Suporte Leilões`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula
    }
  } satisfies Preset.ThemeConfig
}

export default config
