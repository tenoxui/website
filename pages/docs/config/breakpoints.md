# Breakpoint

Define responsive breakpoints to use TenoxUI's responsive feature.

## Types

```ts twoslash
type Breakpoint = {
  name: string
  min?: number
  max?: number
}

type Breakpoints = Breakpoint[]
```

## Basic Usage

Try resizing your screen to see the changes.

<TenoxUI code='<div class="max-sm:bg-red sm:bg-green md:bg-blue lg:bg-yellow box-200px br-1rem center">Resize your screen!</div>'/>

::: code-group

```js [index.js]
new MakeTenoxUI({
  breakpoints: [
    { name: 'max-md', max: 767.9 },
    { name: 'md', min: 768 },
    { name: 'max-lg', max: 1023.9 },
    { name: 'lg', min: 1024 },
    // specific screen size
    { name: 'my-size', min: 768, max: 1024 }
  ]
})
```

```html [index.html]
<div class="max-md:bg-red md:bg-blue lg:bg-yellow box-200px br-1rem">Resize your screen!</div>
```

:::

## Usage

### tenoxui

```js
tenoxui({
  breakpoints: {
    /* your breakpoints here */
  }
})
```

### @tenoxui/core

```js
new MakeTenoxUI({
  classes: {
    /* your breakpoints here */
  }
})
```
