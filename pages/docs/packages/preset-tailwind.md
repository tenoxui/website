# `@tenoxui/preset-tailwind`

A ready-to-use TailwindCSS (v4.1.5) preset for TenoxUI. For TailwindCSS documentation, please visit the official [TailwindCSS Website](https://tailwindcss.com).

## Installation

```bash
npm i tenoxui @tenoxui/preset-tailwind
```

## Overview

```javascript
import { TenoxUI } from 'tenoxui'
import { preset } from '@tenoxui/preset-tailwind'

const css = new TenoxUI(
  preset({
    sizing: 0.25,
    order: false
  })
)

console.log(css.render(['bg-red-500', 'mt-4', 'md:p-10']))
```

Output :

```css
.bg-red-500 {
  background-color: oklch(63.7% 0.237 25.331);
}
.mt-4 {
  margin-top: 1rem;
}
@media (width >= 48rem) {
  .md\:p-10 {
    padding: 2.5rem;
  }
}
```

## Disclaimer

TailwindCSS is developed by [Tailwind Labs Inc](https://tailwindcss.com). This package implements compatible preset configurations but **IS NOT AN OFFICIAL TAILWINDCSS PRODUCT**.

## License

MIT
