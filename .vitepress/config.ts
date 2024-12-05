import { defineConfig } from 'vitepress'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  markdown: {
    codeTransformers: [transformerTwoslash()]
  },
  srcDir: 'pages',
  title: 'TenoxUI',
  description: 'TenoxUI Documentation Site',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Docs', link: '/docs/getting-started' },
      { text: 'Examples', link: '/examples' }
    ],
    sidebar: [
      {
        text: 'Docs',
        items: [
          { text: 'Get Started', link: '/docs/getting-started' },
          { text: 'About', link: '/docs/about' }
        ]
      }
    ],
    socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    editLink: {
      pattern: 'https://github.com/tenoxui/website/edit/main/pages/:path'
    },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2024-present TenoxUI'
    }
  }
})
