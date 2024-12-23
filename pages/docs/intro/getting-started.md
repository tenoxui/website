# Getting Started

## Prerequisites

**_Familiar_** with CSS 🤓

## Try it Online

We create online playground for you to have quick test of TenoxUI syntax. Check [Online Playground](https://tenoxui-playground.vercel.app).

## Installation

### NPM

::: code-group

```sh [npm]
$ npm i tenoxui --save-dev
```

```sh [yarn]
$ yarn add tenoxui -D
```

:::

Or use the lightweight `core` instead :

::: code-group

```sh [npm]
$ npm i @tenoxui/core --save-dev
```

```sh [yarn]
$ yarn add @tenoxui/core -D
```

:::

### CDN

You can use bundled `UMD` for your HTML project:

```html
<script src="https://cdn.jsdelivr.net/npm/tenoxui/dist/js/tenoxui.min.js"></script>
```

Or use `tenoxui/core`:

```html
<script src="https://cdn.jsdelivr.net/npm/@tenoxui/core/dist/tenoxui.min.js"></script>
```

::: info What's the difference?

There's not much size difference between both packages, the `tenoxui` package is just ready-to-use package of tenoxui, and if you use `@tenoxui/core`, you need to add **more** steps for configuration.

:::

## Try it Now

### HTML Template

```html
<html>
  <head>
    <title>TenoxUI HTML</title>
    <script src="https://cdn.jsdelivr.net/npm/tenoxui/dist/js/tenoxui.min.js"></script>
  </head>
  <body>
    <div class="[width,height]-200px [background]-red"></div>
    <script>
      __tenoxui.tenoxui(/* your tenoxui config here */)
    </script>
  </body>
</html>
```

### React/Preact

```javascript
import { useLayoutEffect } from 'react' // or 'preact/hooks'
import { tenoxui } from 'tenoxui'

export default function App() {
  useLayoutEffect(() => {
    tenoxui(/* your tenoxui config here */)
  }, [])

  return <div className="[width,height]-200px [background]-red"></div>
}
```

### Vue

```vue
<script setup>
import { onMounted } from 'vue'
import { tenoxui } from 'tenoxui'

onMounted(() => {
  tenoxui(/* your tenoxui config here */)
})
</script>

<template>
  <div class="[width,height]-200px [background]-red"></div>
</template>
```

## What's Next?

- [**Writing Values**](/docs/core/available-values) - What CSS values you can write in TenoxUI.

- **Customizing TenoxUI** - Customizing [types & properties](/docs/config/properties), [values](/docs/config/values), and other to make your development easier.

- [Attributify Mode](/docs/core/attributify) - Using attributify mode to make your element easier to maintain.
