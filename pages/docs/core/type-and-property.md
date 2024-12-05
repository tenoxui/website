# Type and Property

We call the shorthand of CSS properties or variables as `type`, and here we will learn more about this.

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

::: code-group

```js [property.js]
const property = {
  gradient: {
    property: 'backgroundImage',
    value: 'linear-gradient(to right, {0}, blue)'
  },
  p: {
    property: 'padding',
    value: '{0} {1}'
  }
}
```

```html [index.html]
<div class="gradient-red p-20px/1rem"></div>
```

```css [output styles]
div {
  background-image: linear-gradient(to right, red, blue);
  padding: 20px 1rem;
}
```

:::

Every `{0}` will be replaced with the value included after the type. If you want to use `{1}` like for the padding property, you need to include second value, like `p-1rem/2rem` and so on.

::: tip USAGE
Every properties example above can be used inside `tenoxui.property` option. For example:

```js
tenoxui({
  property: {
    bg: 'background',
    text: 'color'
  }
})
```

:::
