---
title: Getting Started
---

# Getting Started

## How it works?

This is basic example of TenoxUI implementation:

<TenoxUI code="<div class='bg-red p-1rem text-white'>Hello</div>"/>

::: code-group

```html [index.html]
<div class="bg-red p-1rem">Hello</div>
```

```js [index.js]
import { tenoxui } from 'tenoxui'

tenoxui({
  property: {
    bg: 'background',
    p: 'padding'
  }
})
```

:::

As you can see, instead of using defined value like `p-4`, `m-3`, and so on, TenoxUI uses real CSS value. For example, `p-1rem`, `bg-red`, and so on. Just stick with this:

```
{property}-{value}
```

## Installation

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

::: info What's the difference?

There's not much size difference between both packages, the `tenoxui` package is just ready-to-use package of tenoxui, and if you use `@tenoxui/core`, you need to add **more** steps for configuration.

:::
