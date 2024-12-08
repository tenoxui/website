# Define Value Aliases

TenoxUI has a feature for storing CSS value and the `type` will recognize and applies them.

## Types

```ts twoslash
type Values = {
  [type: string]: { [value: string]: string } | string
}
```

## Global Scope

This example allows you to define any alias to the CSS value and can be accessed for **all** `type`.

<TenoxUI code='<div class="w-full p-my-size bg-my-gradient">Hello</div>'/>

::: code-group

```js [values.js]
const values = {
  full: '100%',
  'my-size': 'calc(1rem - 8px)',
  'my-gradient': 'linear-gradient(to right, red, blue)'
}
```

```html [index.html]
<div class="w-full p-my-size bg-my-gradient">Hello</div>
```

```css [output styles]
div {
  width: 100%;
  padding: calc(1rem - 8px);
  background: linear-gradient(to right, red, blue);
}
```

:::

## Type/Shorthand Scope

Only define the alias for exact `type` by using an object with the exact `type` you want.

<TenoxUI code='<div class="w-size h-size bg-red"></div>

<div class="box-size bg-blue"></div>'/>

::: code-group

```js [tenoxui.js]
const config = {
  property: {
    w: 'width',
    h: 'height',
    box: ['width', 'height']
  },
  values: {
    // global scope, accessible for all `type` or shorthand
    size: '100px',
    'my-color': 'red',
    // `type` specific values
    // can only accessed by the exact `type`
    box: {
      size: '50px'
    },
    bg: {
      'my-color': 'blue'
    }
  }
}

tenoxui(config)
```

```html [index.html]
<div class="w-size h-size bg-red"></div>
<div class="box-size bg-blue"></div>
```

```css [output styles]
.div-1 {
  width: 100px;
  height: 100px;
  background: red;
}
.div-2 {
  width: 50px;
  height: 50px;
  background: blue;
}
```

:::

## Usage

### tenoxui

```js
tenoxui({
  values: {
    /* your value alias here */
  }
})
```

### @tenoxui/core

```js
new MakeTenoxUI({
  values: {
    /* your value alias here */
  }
})
```
