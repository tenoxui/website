# Pseudo Class Handler

Since TenoxUI runs in DOM, there's no way to apply something like `hover` and `focus` directly, so we create some tweaks to make it happen using `addEventListener` method.

Currently, TenoxUI only support for `hover` and `focus` event.

## Usage

You can add `hover` and `focus` prefix in every TenoxUI's class name, wether this is defined with [type shorthand](/docs/config/properties), [utility classes](/docs/config/classes), or just direct `CSS properties` or `CSS variables`.

### With Type Shorthand

Here's simple red box and will turned into blue when hover:

<TenoxUI code='<div class="bg-red hover:bg-blue box-100px center [transition]-300ms">Hover me!</div>'/>

```html
<div class="bg-red hover:bg-blue box-100px center [transition]-300ms">Hover me!</div>
```

### With Classes

Here's simple red box and will turned into blue when hover:

<TenoxUI code='<div class="first hover:second box-100px center">Hover me!</div>'/>

::: code-group

```js [classes.js]
tenoxui({
  classes: {
    background: {
      first: 'red',
      second: 'linear-gradient(to right, yellow, blue)'
    }
  }
})
```

```html [index.html]
<div class="first hover:second box-100px center">Hover me!</div>
```

:::

### Direct Properties

Here's simple red box and will turned into blue when hover:

<TenoxUI code='<div class="[--my-color]-blue hover:[--my-color]-red [background]-$my-color box-100px center [transition]-300ms">Hover me!</div>'/>

```html
<div
  class="[--my-color]-blue hover:[--my-color]-red [background]-$my-color box-100px center [transition]-300ms"
>
  Hover me!
</div>
```
