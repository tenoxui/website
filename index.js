// import { TenoxUI } from '@tenoxui/core'
import { TenoxUI } from 'tenoxui'
import { preset } from '@tenoxui/preset-tailwind'
import { merge as mergeConfig } from '@nousantx/someutils'

const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    flex: 'display: flex'
  }
})

console.log(css.main.parse('bg-red'))
console.log(css.main.parse('hover:flex'))
console.log(css.main.parse('max-768px:m-10px'))
