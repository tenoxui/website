# Core Configuration

## Types

Available types from the `core` package

```ts twoslash
import type {
  CSSProperty,
  CSSVariable,
  CSSPropertyOrVariable,
  GetCSSProperty,
  Property,
  Values,
  Classes,
  Aliases,
  Breakpoint
} from '@tenoxui/core'

interface MakeTenoxUIParams {
  element: HTMLElement
  property?: Property
  values?: Values
  classes?: Classes
  aliases?: Aliases
  breakpoints?: Breakpoint[]
  // @tenoxui/core/full
  attributify: boolean
  attributifyPrefix: string
  attributifyIgnore: string[]
}
```

## Options

### element

Define selector which the element to handle.

```js
new MakeTenoxUI({
  element: document.querySelector('.my-element')
})
```

### property

Define shorthand for CSS properties or variables to use.

```js
new MakeTenoxUI({
  property: {
    bg: 'background',
    text: 'color',
    'my-var': '--my-color'
  }
})
```

### values

Define value aliases.

<TenoxUI code='<div class="w-full [p,br]-4 family-sans bg-my-gradient">Hello</div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  values: {
    full: '100%',
    sans: 'Inter, sans-serif',
    4: '6px',
    'my-gradient': 'linear-gradient(to right, red, blue)'
  }
})
```

```html [index.html]
<div class="w-full [p,br]-4 family-sans bg-my-gradient">Hello</div>
```

:::

### classes

Define/create utilities for TenoxUI.

<TenoxUI code='<div class="flex p-4 bg-red-500">Hello</div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
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
  }
})
```

```html [index.html]
<div class="flex p-4 bg-red-500">Hello</div>
```

:::

### aliases

Define single shortcut for applying multiple TenoxUI class names.

<TenoxUI code='<button class="box-1">Hello</button>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  aliases: {
    'box-1':
      'text-$vp-c-text-1 bg-$vp-c-gray-2 hover:bg-$vp-c-gray-3 h-40px px-12px d-flex ai-center br-8px jc-center [transition]-150ms'
  }
})
```

```html [index.html]
<button class="box-1">Hello</button>
```

:::

### breakpoints

Define responsive breakpoint.

  <TenoxUI code='<div class="max-md:bg-red md:bg-blue lg:bg-yellow box-200px br-1rem center">Resize your screen!</div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  breakpoints: [
    { name: 'max-md', min: 0, max: 767.9 },
    { name: 'md', min: 768 },
    { name: 'max-lg', max: 1023.9 },
    { name: 'lg', min: 1024 }
  ]
})
```

```html [index.html]
<div class="max-md:bg-red md:bg-blue lg:bg-yellow box-200px br-1rem">Resize your screen!</div>
```

:::

### attributify

Enable attributify feature.

<TenoxUI code='<div bg="red hover:blue" box="100px"></div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  attributify: true
})
```

```html [index.html]
<div bg="red hover:blue" box="100px"></div>
```

:::

### attributifyPrefix

Set custom prefix for attributify.

<TenoxUI code='<div tui-bg="red hover:blue" tui-box="100px"></div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  attributify: true,
  attributifyPrefix: 'tui-'
})
```

```html [index.html]
<div tui-bg="red hover:blue" tui-box="100px"></div>
```

:::

### attributifyIgnore

Define attributes to ignore.

<TenoxUI code='<div bg="red" box="100px">Works</div>

<div my-bg="red" box="100px" bdr="[2px_solid_blue]">Ignored</div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  property: {
    'my-bg': 'background'
  },
  attributifyIgnore: ['my-bg']
})
```

```html [index.html]
<div bg="red" box="100px">Works</div>
<div my-bg="red" box="100px" bdr="[2px_solid_blue]">Ignored</div>
```

:::
