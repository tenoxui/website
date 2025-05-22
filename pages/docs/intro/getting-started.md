# Getting Started

## Prerequisites

**_Familiar_** with CSS 🤓

## Installation

Getting started with TenoxUI by running :

::: code-group

```sh [npm]
npm install tenoxui
```

```sh [pnpm]
pnpm install tenoxui
```

```sh [yarn]
yarn add tenoxui
```

:::

### `esm/cjs`

```javascript
// esm
import { TenoxUI } from 'tenoxui'

// cjs
const { TenoxUI } = require('tenoxui')
```

### `iife/umd`

```html
<script src="https://cdn.jsdelivr.net/npm/tenoxui/dist/bundle.iife.js"></script>
<script>
  const { TenoxUI } = __tenoxui__
</script>
```

## Usage Example

```javascript
import { TenoxUI } from 'tenoxui'

const css = new TenoxUI({
  property: {
    bg: 'background',
    size: ['width', 'height']
  }
})

console.log(css.render(['bg-red', 'bg-#cff654', 'size-100px', 'size-10rem']))
```

Output:

```css
.bg-red {
  background: red;
}
.bg-\#cff654 {
  background: #cff654;
}
.size-100px {
  width: 100px;
  height: 100px;
}
.size-10rem {
  width: 10rem;
  height: 10rem;
}
```

## Try It Now

Here's simple boilerplate you can try right away :

```html
<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <title>Try TenoxUI</title>
    <script src="https://cdn.jsdelivr.net/npm/tenoxui@1.0.0/dist/bundle.iife.js"></script>
  </head>
  <body class="h-100vh [display]-flex [justify-content]-center [align-items]-center">
    <div class="radius-1rem size-100px bg-red hover:bg-blue"></div>
    <script>
      const { TenoxUI } = __tenoxui__

      // configure TenoxUI
      const ui = new TenoxUI({
        property: {
          bg: 'background',
          h: 'height',
          radius: 'borderRadius',
          size: ['width', 'height']
        },
        variants: {
          hover: '&:hover'
        }
      })

      // extract all class names
      const classNames = [
        ...new Set(
          Array.from(document.querySelectorAll('*[class]')).flatMap((element) =>
            Array.from(element.classList)
          )
        )
      ]

      const styleTag = document.createElement('style')
      styleTag.textContent = ui.render(classNames)
      document.head.appendChild(styleTag)
    </script>
  </body>
</html>
```
