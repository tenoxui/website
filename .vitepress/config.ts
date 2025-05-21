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
          { text: 'Variants', link: '/docs/guides/writing-variants' },
          { text: 'Responsive Design', link: '/docs/guides/responsive' }
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
