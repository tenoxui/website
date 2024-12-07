import type { CoreConfig, Property } from '@tenoxui/core/full'
import { property as txProps } from '@tenoxui/property'
import { merge, transformClasses } from '@nousantx/someutils'

const docsConfig = {
  property: {
    gradient: {
      property: 'backgroundImage',
      value: 'linear-gradient(to right, {0}, blue, {0})'
    },
    pad: {
      property: 'padding',
      value: '{0} {1}'
    },
    'my-bg': 'background'
  },
  values: {
    full: '100%',
    sans: 'Inter, sans-serif',
    '4': '6px',
    'my-red': '255 0 0',
    'my-size': 'calc(1rem - 8px)',
    'my-gradient': 'linear-gradient(to right, red, blue)',
    // global scope
    size: '100px',

    // type specific values
    box: {
      size: '50px'
    }
  },
  classes: {
    display: {
      flex: 'flex',
      iflex: 'inline-flex'
    },
    background: {
      'bg-red-500': '#f62121'
    },
    padding: {
      'p-1': '2px',
      'p-2': '4px',
      'p-3': '6px',
      'p-4': '8px'
    }
  },
  aliases: {
    'box-1':
      'text-$vp-c-text-1 bg-$vp-c-gray-2 hover:bg-$vp-c-gray-3 h-40px px-12px d-flex ai-center br-8px jc-center [transition]-150ms'
  }
}

const config: CoreConfig = {
  property: { ...txProps, ...docsConfig.property },
  values: merge(docsConfig.values, {}),
  classes: merge(
    transformClasses({
      grid: {
        'background-image':
          'linear-gradient(to right, var(--g1, blue) 1px, transparent 1px), linear-gradient(to bottom, var(--g2, red) 1px, transparent 1px)',
        'background-size': '2.5rem 2.5rem',
        'background-position': 'center center'
      },
      center: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
      }
    }),
    docsConfig.classes,
    {
      display: {
        flex: 'flex'
      }
    }
  ),
  aliases: { ...docsConfig.aliases },
  breakpoints: [
    { name: 'max-sm', max: 640 },
    { name: 'sm', min: 640 },
    { name: 'max-md', max: 767.9 },
    { name: 'md', min: 768 },
    { name: 'max-lg', max: 1023.9 },
    { name: 'lg', min: 1024 },
    { name: 'max-xl', max: 1279.9 },
    { name: 'xl', min: 1280 },
    { name: 'max-2xl', max: 1535.9 },
    { name: '2xl', min: 1536 }
  ],
  attributify: true,
  attributifyPrefix: 'tui-',
  attributifyIgnore: ['my-bg']
}

export default config
