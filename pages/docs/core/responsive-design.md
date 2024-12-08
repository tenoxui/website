# Responsive Design

Similar to previous `pseudo` handler, we use `resize` event to apply different styles in different screen sizes.

## Set Breakpoint

First, you have to set some breakpoints to use. See [here](/docs/config/breakpoints).

## Guide

In most CSS frameworks, you may define your responsive class names like this:

```html
<div class="bg-red md:bg-red"></div>
```

Well, in TenoxUI, you have to create one fallback for smaller screen size to ensure the first breakpoint won't stay to the element. Example:

<TenoxUI code='<div class="bg-red md:bg-blue lg:bg-yellow box-100px">Dont</div>

<div class="max-md:bg-red md:bg-blue lg:bg-yellow box-100px ml-1rem">Do</div>'/>

Hint: Try resize your screen to very large and then go back to small.

::: code-group

```js [breakpoint.js]
const breakpoints = [
  { name: 'max-md', max: 767.9 },
  { name: 'md', min: 768 },
  { name: 'max-lg', max: 1023.9 },
  { name: 'lg', min: 1024 },
  // specific screen size
  { name: 'my-size', min: 768, max: 1024 }
]
```

```html [index.html]
<div class="bg-red md:bg-blue lg:bg-yellow box-100px">Dont</div>
<div class="max-md:bg-red md:bg-blue lg:bg-yellow box-100px">Do</div>
```

:::

You may notice the background of the first box remain blue when you resizes the screen into small again.

So, if you want to use responsive feature, always make sure to set the fallback instead of regular class name from smallest screen size.
