import type { CoreConfig, Property } from '@tenoxui/core/full'
import { property as txProps } from '@tenoxui/property'
import { merge, transformClasses } from '@nousantx/someutils'

// Docs related config
// Put tenoxui config for documentation here
const docsConfig = {
  variants: {
    hover: '&:hover'
  },
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
      'bg-red-500': '#f62121',
      first: 'red',
      second: 'linear-gradient(to right, yellow, blue)'
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

// Global config
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
  variants: { ...docsConfig.variants }
}

export default config
