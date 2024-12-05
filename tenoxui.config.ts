import type { CoreConfig, Property } from '@tenoxui/core/full'
import { property as txProps } from '@tenoxui/property'
import { merge, transformClasses } from '@nousantx/someutils'

const docsConfig = {
  property: {
    gradient: {
      property: 'backgroundImage',
      value: 'linear-gradient(to right, {0}, blue)'
    }
  },
  values: {},
  classes: {}
}

const config: CoreConfig = {
  property: { ...txProps, ...docsConfig.property },
  values: merge(docsConfig.values, {}),
  classes: merge(
    transformClasses({
      grid: {
        '--g1': 'rgb(var(--grid-bg))',
        '--g2': 'rgb(var(--grid-color))',

        'background-image':
          'linear-gradient(to right, var(--g2, blue) 1px, transparent 1px), linear-gradient(to bottom, var(--g2, red) 1px, transparent 1px)',
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
  )
}

export default config
