import { TenoxUI } from 'tenoxui'

const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    max: ({ value, unit }) => `value:@media (max-width: ${value + (unit || 'px')})`,
    min: ({ value, unit }) => `value:@media (min-width: ${value + (unit || 'px')})`
  }
})

console.log(css.render(['bg-red', 'min-668:bg-blue', 'max-48rem:bg-yellow']))
console.log(css.prefixLoader.process('min-48rem'))
