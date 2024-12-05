import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    codeTransformers: [transformerTwoslash()]
  },
  srcDir: 'pages',
  title: 'TenoxUI',
  titleTemplate: 'TenoxUI Docs',
  description: 'TenoxUI Documentation Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/getting-started' }
    ],
    sidebar: [
      {
        text: 'Introduction',
        collapsed: false,
        items: [
          { text: 'About TenoxUI', link: '/docs/intro/about' },
          { text: 'Getting Started', link: '/docs/intro/getting-started' }
        ]
      },
      {
        text: 'Core Concept',
        collapsed: false,
        items: [
          { text: 'The Basics', link: '/docs/core/basic' },
          { text: 'Type & Property', link: '/docs/core/type-and-property' },
          { text: 'Defined Value', link: '/docs/core/values' },
          { text: 'Classes', link: '/docs/core/classes' },
          { text: 'Aliases', link: '/docs/core/aliases' },
          { text: 'Pseudo Classes', link: '/docs/core/pseudo-class' },
          { text: 'Responsive Design', link: '/docs/core/breakpoint-and-responsive' },
          { text: 'Attributify Mode', link: '/docs/core/attributify' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    editLink: {
      pattern: 'https://github.com/tenoxui/website/edit/main/pages/:path'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2023-present NOuSantx'
    }
  }
})
