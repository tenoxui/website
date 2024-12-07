# Writing Correct Values

## Regular Value

Regular value is just simple CSS values such as `1rem`, `red`, `space-between`, `hex color` and so on. You can wtite them directly in your class name like this:

<TenoxUI code='<div class="bg-rebeccapurple p-1rem">Hello</div>'/>

```html
<div class="bg-rebeccapurple p-1rem">Hello</div>
```

## CSS Variable Value

By using `$` before the value name, it will treated as CSS variable value. Example:

<TenoxUI code='<div class="[--c-brand]-#ccf654 bg-$c-brand text-black p-1rem">Hello</div>'/>

```html
<div class="[--c-brand]-#ccf654 bg-$c-brand text-black p-1rem">Hello</div>
```

## Arbitrary Value

### Basic Usage

You can write value that needs `spaces`, `function`, and something like that by writing them inside `[]`. Example:

<TenoxUI code='<div class="bg-[linear-gradient(to_right,_red,_blue)] p-1rem">Hello</div>'/>

```html
<div class="bg-[linear-gradient(to_right,_red,_blue)] p-1rem">Hello</div>
```

If you need spaces, you can just use `_` (underscore), it will treated as space.

### Accessing Custom Values

You can also access values from [value alias](/docs/config/values). Here's the example:

<TenoxUI code='<div class="bg-[rgb({my-red})] p-1rem">Hello</div>'/>

::: code-group

```js [tenoxui.js]
// tenoxui
tenoxui({
  values: {
    'my-red': '255 0 0'
  }
})

// @tenoxui/core
new MakeTenoxUI({
  values: {
    'my-red': '255 0 0'
  }
})
```

```html [index.html]
<div class="bg-[rgb({my-red})] p-1rem">Hello</div>
```

:::
