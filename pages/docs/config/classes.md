# Creating Utility Class

You can define custom class names with `property-based` class name.

```ts twoslash
type CSSProperty = keyof CSSStyleDeclaration
type CSSVariable = `--${string}`
type CSSPropertyOrVariable = CSSProperty | CSSVariable

type Classes = {
  [property in CSSPropertyOrVariable]?: {
    [className: string]: string
  }
}
```

## Basic Usage

Here's some example of TenoxUI's `classes` usage:

<TenoxUI code='<div class="center box-150px bg-red">center</div>'/>

::: code-group

```js [tenoxui.js]
const classes = {
  // property: { className: value }
  padding: {
    'p-1': '2px', // .p-1 { padding: 2px; }
    'p-2': '4px',
    'p-4': '6px',
    'p-8': '10px'
  },
  display: {
    flex: 'flex',
    center: 'flex'
  },
  justifyContent: {
    // stacking className for different properties
    center: 'center'
  },
  alignItems: {
    center: 'center'
  },
  // you can use CSS variable as well
  '--my-var': {
    center: 'rgb(33, 121, 246)'
  }
}
```

```html [index.html]
<div class="center box-150px bg-red">center</div>
```

```css [output styles]
.center {
  --my-var: rgb(33, 121, 246);
  display: flex;
  justify-content: center;
  align-items: center;
}
```

:::

## Usage

### tenoxui

```js
tenoxui({
  classes: {
    /* your utilities here */
  }
})
```

### @tenoxui/core

```js
new MakeTenoxUI({
  classes: {
    /* your utilities here */
  }
})
```
