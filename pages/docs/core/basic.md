# The Basics

::: info BEFORE YOU START

We will use [`@tenoxui/core`](/), and [default `@tenoxui/property`](/) packages for this documentation, just to make sure you know the fundamental of this library from scratch.

`@tenoxui/core` is the core function that built TenoxUI. And `@tenoxui/property` is just basic predefined [properties](/docs/config/properties).

:::

Fundamentally, TenoxUI is just a library that allows you to write CSS directly in your class name. And that includes **all** CSS properties and even variables as well.

By default, and without **any** configuration, you can write class names like this:

<TenoxUI code='<div class="[width,height]-100px [background]-red [borderRadius]-8px"></div>'/>

```html
<div class="[width,height]-100px [background]-red [border-radius]-8px"></div>
```

And the generated style will equivalent to:

```css
div {
  width: 100px;
  height: 100px;
  background: red;
  border-radius: 8px;
}
```

But of course it's not very wise to write long class name like that. And there's coming [type and property](/docs/config/properties) or can be called as `shorthand`.

## Types and Properties Basic

You can define the `type` or `shorthand` inside `tenoxui.property` option. Here's the example:

<TenoxUI code='<div class="box-100px bg-blue br-8px"></div>'/>

::: code-group

```html [index.html]
<div class="box-100px bg-blue br-8px"></div>
```

```js:line-numbers {3-5} [script.js]
tenoxui({
  property: {
    bg: 'background',
    br: 'borderRadius',
    box: ['width', 'height']
  }
})
```

:::

The class names now looks better, right? But what is `property`? `property` is an object where you can put your CSS properties or variables `shorthands`.

As you can see, we put `bg` as the shorthand of `background` property. And you can also define multiple properties as an `array` from single shorthand, like `box` for the shorthand of `width` and `height` at the same time.
