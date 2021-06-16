/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Crosspoint 教學指南',
  tagline: 'Get up to speed in Crosspoint.',
  url: 'https://indexhui.github.io',
  baseUrl: '/crosspoint-guide/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: './img/favicon.ico',
  organizationName: 'indexhui', // Usually your GitHub org/user name.
  projectName: 'crosspoint-guide', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Crosspoint教學指南',
      logo: {
        alt: 'Crosspoint Logo',
        src: '../img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: '教學',
        },
        {to: '/blog', label: '文章', position: 'left'},
        {
          href: 'https://indexhui.github.io/crosspoint/',
          label: '返回官網',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          // path: '/',
          // custom_edit_url: null,
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
