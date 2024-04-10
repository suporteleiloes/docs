// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Suporte Leilões',
  tagline: 'Documentação oficial da Suporte Leilões',
  favicon: 'favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.suporteleiloes.com/',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'suporteleiloes', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR', 'en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        blog: {
          blogTitle: 'Blog',
          blogDescription: 'Blog de documentação da Suporte Leilões',
          blogSidebarCount: 10,
          postsPerPage: 'ALL',
          showReadingTime: true,
          readingTime: ({content, frontMatter, defaultReadingTime}) =>
            defaultReadingTime({content, options: {wordsPerMinute: 300}}),
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig: /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ ({
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Suporte Leilões',
      logo: {
        alt: 'Logotipo da Suporte Leilões',
        src: 'img/logo.png',
        srcDark: 'img/logo-dark.png',
      },
      items: [
        {
          label: 'Docs',
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
        },
        {
          label: 'Blog',
          to: '/blog',
          position: 'left',
        },
        {
          label: 'GitHub',
          href: 'https://github.com/suporteleiloes/docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        src: "img/logo-extended.png",
        style: {
          mixBlendMode: "hard-light",
        },
      },
      links: [
        {
          title: 'Software',
          items: [
            {
              label: 'Preço',
              href: 'https://www.suporteleiloes.com/software#preco',
            },
            {
              label: 'Conheça',
              href: 'https://www.suporteleiloes.com/software',
            },
            {
              label: 'Status dos Serviços',
              href: 'https://www.suporteleiloes.com/#status',
            },
          ],
        },
        {
          title: 'Empresa',
          items: [
            {
              label: 'Sobre',
              href: 'https://www.suporteleiloes.com/sobre',
            },
            {
              label: 'Carreiras',
              href: 'https://www.suporteleiloes.com/carreiras',
            },
            {
              label: 'Seja um Representante',
              href: 'https://www.suporteleiloes.com/seja-representante',
            },
            {
              label: 'Seja um SL Partner',
              href: 'https://www.suporteleiloes.com/seja-representante',
            },
            {
              label: 'Centro de Desenvolvimento e Customizações',
              href: 'https://www.suporteleiloes.com/centro-desenvolvimento-e-customizacoes',
            },
          ],
        },
        {
          title: 'Políticas',
          items: [
            {
              label: 'Lei Geral de Proteção de Dados Pessoais (LGPDP)',
              href: 'https://www.suporteleiloes.com/protecao-de-dados-pessoais',
            },
            {
              label: 'Política de Privacidade',
              href: 'https://www.suporteleiloes.com/politica-privacidade',
            },
            {
              label: 'Termos de Uso',
              href: 'https://www.suporteleiloes.com/termos-uso',
            },
          ],
        },
        {
          title: 'Redes sociais',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/suporteleiloes',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCDBSF2uX3nqCUSGXF7YOQyw',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/suporteleiloes',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Suporte Leilões`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  }),
};

export default config;
