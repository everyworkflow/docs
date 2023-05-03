// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'EveryWorkflow',
  tagline: 'A data driven platform for modern usage',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://docs.everyworkflow.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'everyworkflow', // Usually your GitHub org/user name.
  projectName: 'docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          lastVersion: 'current',
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          breadcrumbs: true,
        },
        // docs: false,
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  plugins: [
    require.resolve('docusaurus-lunr-search'),
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'backend',
        path: 'backend',
        routeBasePath: 'backend',
        lastVersion: 'current',
        sidebarPath: require.resolve('./backend_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'frontend',
        path: 'frontend',
        routeBasePath: 'frontend',
        lastVersion: 'current',
        sidebarPath: require.resolve('./frontend_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'setup',
        path: 'setup',
        routeBasePath: 'setup',
        lastVersion: 'current',
        sidebarPath: require.resolve('./setup_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        lastVersion: 'current',
        sidebarPath: require.resolve('./tutorial_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'changelog',
        path: 'changelog',
        routeBasePath: 'changelog',
        lastVersion: 'current',
        sidebarPath: require.resolve('./changelog_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'resources',
        path: 'resources',
        routeBasePath: 'resources',
        lastVersion: 'current',
        sidebarPath: require.resolve('./resources_sidebars.js'),
        editUrl: 'https://github.com/everyworkflow/docs/blob/main/',
        showLastUpdateAuthor: true,
        showLastUpdateTime: true,
        breadcrumbs: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Docs - EveryWorkflow',
        logo: {
          alt: 'Logo',
          // src: 'img/ew-logo.svg',
          src: 'img/favicon.svg',
        },
        items: [
          {
            to: 'setup',
            label: 'Setup',
            position: 'left',
            activeBaseRegex: 'setup/(next|v8)',
          },
          {
            to: 'backend',
            label: 'Backend',
            position: 'left',
            activeBaseRegex: 'backend/(next|v8)',
          },
          {
            to: 'frontend',
            label: 'Frontend',
            position: 'left',
            activeBaseRegex: 'frontend/(next|v8)',
          },
          {
            to: 'resources',
            label: 'Resources',
            position: 'left',
            activeBaseRegex: 'resources',
          },
          // {
          //   type: 'doc',
          //   docId: 'intro',
          //   position: 'left',
          //   label: 'Docs',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'backend',
          //   position: 'right',
          // },
          // {
          //   type: 'docsVersionDropdown',
          //   docsPluginId: 'frontend',
          //   position: 'right',
          // },
          {
            href: 'https://github.com/everyworkflow',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Quick Links',
            items: [
              {
                label: 'Tutorial',
                to: '/tutorial',
              },
              {
                label: 'Changelog',
                to: '/changelog',
              },
              {
                label: 'Previous Version',
                to: '/previous-version',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/J5T664QB',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/everyworkflow',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Dream Work Factory',
                href: 'https://dreamworkfactory.com',
              },
            ],
          },
        ],
        copyright: `<small>Copyright © Dream Work Factory Pvt Ltd. Build with Docusaurus.</small>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
