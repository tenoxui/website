import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'TenoxUI',
  titleTemplate: 'TenoxUI Docs',
  description: 'TenoxUI Documentation Site',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', { property: 'og:image', content: '/tenoxui_social_card.jpg' }],
    ['meta', { name: 'twitter:card', content: 'TenoxUI Documentation Site' }],
    ['meta', { name: 'twitter:image', content: '/tenoxui_social_card.jpg' }]
  ],
  srcDir: 'pages',
  outDir: 'dist',
  markdown: {
    codeTransformers: [transformerTwoslash()]
  },
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/intro/about' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'What is TenoxUI?', link: '/docs/intro/about' },
          { text: 'Getting Started', link: '/docs/intro/getting-started' },
          { text: 'Configuration Options', link: '/docs/config/intro' }
        ]
      },
      {
        text: 'Guides',
        collapsed: false,
        items: [
          { text: 'Shorthands', link: '/docs/guides/writing-rules' },
          { text: 'Writing Values', link: '/docs/guides/writing-values' },
          { text: 'Responsive Design', link: '/docs/guides/responsive' },
          { text: 'Variants', link: '/docs/guides/writing-variants' },
          { text: 'Aliases', link: '/docs/guides/aliases' }
        ]
      },
      {
        text: 'APIs',
        collapsed: true,
        items: [
          { text: '<code>render</code>', link: '/docs/apis/render' },
          { text: '<code>process</code>', link: '/docs/apis/process' },
          { text: '<code>parse</code>', link: '/docs/apis/parse' }
        ]
      },
      {
        text: 'Extra',
        collapsed: true,
        items: [{ text: 'Key or Label', link: '/docs/extras/keys' }]
      },
      {
        text: 'Examples',
        collapsed: true,
        items: [
          { text: 'Creating Size Utility', link: '/docs/examples/complex-shorthand' },
          { text: 'Utilizing Keys', link: '/docs/examples/complex-shorthand' }
        ]
      },
      {
        text: 'Packages',
        collapsed: true,
        items: [
          { text: '@tenoxui/moxie', link: '/docs/packages/moxie' },
          { text: '@tenoxui/core', link: '/docs/packages/core' },
          { text: '@tenoxui/preset-tailwind', link: '/docs/packages/preset-tailwind' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    lastUpdated: true,
    editLink: {
      pattern: 'https://github.com/tenoxui/website/edit/main/pages/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present NOuSantx'
    }
  }
})
