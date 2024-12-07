# Class Name Alias

In previous documentation, we already learn about value aliases. But can also define alias for mass class names.

## Usage Example

<TenoxUI code='<button class="box-1">Hello</button>'/>

::: code-group

```js [index.js]
const aliases = {
  aliases: {
    'box-1':
      'text-$vp-c-text-1 bg-$vp-c-gray-2 hover:bg-$vp-c-gray-3 h-40px px-12px d-flex ai-center br-8px jc-center [transition]-150ms'
  }
}
```

```html [index.html]
<button class="box-1">Hello</button>
```

:::
