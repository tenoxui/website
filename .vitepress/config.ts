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
          { text: 'About TenoxUI', link: '/docs/intro/about' },
          { text: 'Getting Started', link: '/docs/intro/getting-started' }
        ]
      },
      {
        text: 'Core Concept',
        collapsed: true,
        items: [
          { text: 'The Basics', link: '/docs/core/basic' },
          { text: 'Writing Values', link: '/docs/core/available-values' },
          { text: 'Pseudo Classes', link: '/docs/core/pseudo-class' },
          { text: 'Responsive Design', link: '/docs/core/responsive-design' },
          { text: 'Attributify Mode', link: '/docs/core/attributify' }
        ]
      },
      {
        text: 'Config',
        collapsed: true,
        items: [
          { text: 'Configuration Options', link: '/docs/config/options' },
          { text: 'Type Shorthand', link: '/docs/config/properties' },
          { text: 'Value Alias', link: '/docs/config/values' },
          { text: 'Creating Utility', link: '/docs/config/classes' },
          { text: 'Class Name Alias', link: '/docs/config/aliases' },
          { text: 'Breakpoint', link: '/docs/config/breakpoints' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/tenoxui/tenoxui' }],
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
