# Type Shorthand

We call the shorthand of CSS properties or variables as `type`, and here we will learn more about this.

## Types

```ts twoslash
type CSSProperty = keyof CSSStyleDeclaration
type CSSVariable = `--${string}`
type CSSPropertyOrVariable = CSSProperty | CSSVariable
type GetCSSProperty = CSSPropertyOrVariable | CSSPropertyOrVariable[]
type Property = {
  [type: string]: GetCSSProperty | { property?: GetCSSProperty; value?: string }
}
```

## Basic Properties

The shorthand is only have single property as value. Example:

::: code-group

```js [property.js]
const property = {
  bg: 'background',
  text: 'color',
  p: 'padding',
  // CSS variable
  'my-color': '--its-variable-color'
}
```

```html [index.html]
<div class="my-color-red bg-$its-variable-color"></div>
```

```css [output styles]
div {
  --its-variable-color: red;
  background: var(--its-variable-color);
}
```

:::

Without defining `type` for CSS property or variable, it will looks like this:

```html
<div class="[--its-variable-color]-red [background]-$its-variable-color"></div>
```

## Multiple Properties

The shorthand will have array of CSS properties or variables as value. Example:

::: code-group

```js [property.js]
const property = {
  box: ['width', 'height'],
  mx: ['marginLeft', 'marginRight']
}
```

```html [index.html]
<div class="box-50px mx-20px"></div>
```

```css [output styles]
div {
  width: 50px;
  height: 50px;
  margin-left: 20px;
  margin-right: 20px;

  /* 
    in the browser, will generated as
    margin: 0 20px;
  */
}
```

:::

## Custom Value Properties

You can also define properties with custom value, the inputted value from the class name. Example:

<TenoxUI code="<div class='gradient-red pad-10px/3rem text-white'>hello</div>"/>

::: code-group

```js [property.js]
const property = {
  gradient: {
    property: 'backgroundImage',
    value: 'linear-gradient(to right, {0}, blue, {0})'
  },
  pad: {
    property: 'padding',
    value: '{0} {1}'
  }
}
```

```html [index.html]
<div class="gradient-red p-10px/3rem"></div>
```

```css [output styles]
div {
  background-image: linear-gradient(to right, red, blue, red);
  padding: 10px 3rem;
}
```

:::

Every `{0}` will be replaced with the value included after the type. If you want to use `{1}` like for the padding property, you need to include second value, like `p-1rem/2rem` and so on.

## Usage

### tenoxui

```js
tenoxui({
  property: {
    /* your shorthands here */
  }
})
```

### @tenoxui/core

```js
new MakeTenoxUI({
  property: {
    /* your shorthands here */
  }
})
```
