# Writing Class Name Alias

An alias, or a shortcut allows you to write class names or utilities combination to apply from a single class name. You can define your class name alias from `aliases` field inside TenoxUI configuration.

## Overview

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    size: ['width', 'height']
  },
  aliases: {
    btn: 'size-40px m-8px bg-red',
    'btn-primary': 'size-42px m-12px bg-blue hover:bg-yellow'
  },
  variants: {
    hover: '&:hover'
  },
  breakpoints: {
    md: '48rem'
  }
})

console.log(css.render(['btn', 'btn-primary', 'hover:btn', 'hover:btn-primary', 'md:btn']))
```

```css [Output]
.btn {
  width: 40px;
  height: 40px;
  margin: 8px;
  background: red;
}
.btn-primary {
  width: 42px;
  height: 42px;
  margin: 12px;
  background: blue;
}
.btn-primary:hover {
  background: yellow;
}
.hover\:btn:hover {
  width: 40px;
  height: 40px;
  margin: 8px;
  background: red;
}
.hover\:btn-primary:hover {
  width: 42px;
  height: 42px;
  margin: 12px;
  background: blue;
}
@media (width >= 48rem) {
  .md\:btn {
    width: 40px;
    height: 40px;
    margin: 8px;
    background: red;
  }
}
```

:::

## Basic Alias

You can store multiple class names into single alias. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    size: ['width', 'height']
  },
  aliases: {
    btn: 'm-8px bg-red ![maxWidth]-40px'
  }
})

console.log(css.render('btn'))
```

```css [Output]
.btn {
  margin: 8px;
  background: red;
  max-width: 40px !important;
}
```

:::

## Using Variant

You can also store class names that have variants. For example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    size: ['width', 'height']
  },
  aliases: {
    btn: 'm-8px bg-red [maxWidth]-40px hover:bg-blue !md:[maxWidth]-50px'
  },
  // add new variant
  variants: {
    hover: '&:hover'
  },
  // add breakpoint variant
  breakpoints: {
    md: '48rem'
  }
})

console.log(css.render('btn'))
```

```css [Output]
.btn {
  margin: 8px;
  background: red;
  max-width: 40px;
}
.btn:hover {
  background: blue;
}
@media (width >= 48rem) {
  .btn {
    max-width: 50px !important;
  }
}
```

:::

If there any class names with variants, it will crraye new block of CSS rules of that variant.

## Overriding Variant

You can also override the variant defined inside the alias. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    size: ['width', 'height']
  },
  aliases: {
    btn: 'm-8px bg-red [maxWidth]-40px hover:bg-blue !md:[maxWidth]-50px'
  },
  // add new variant
  variants: {
    hover: '&:hover'
  },
  // adding breakpoint variant
  breakpoints: {
    md: '48rem'
  }
})

console.log(css.render(['hover:btn', 'md:btn']))
```

```css [Output]
.hover\:btn:hover {
  margin: 8px;
  background: red;
  max-width: 40px;
}
@media (width >= 48rem) {
  .hover\:btn {
    max-width: 50px !important;
  }
}
@media (width >= 48rem) {
  .md\:btn {
    margin: 8px;
    background: red;
    max-width: 40px;
  }
}
.md\:btn:hover {
  background: blue;
}
```

:::

If you add variant before the `alias`, it will check if there's any utilities that have same variant as the inputted class name, if so, that utility will be stripped away from the alias and new CSS block with inputted variant will be generated.

For example, if you write `hover:btn`, it will check if the `btn` alias have utilities that matched the input variant, since it have, then it will be removed. (e.g. `hover:btn` = `bg-red hover:bg-blue` => `bg-red`)
