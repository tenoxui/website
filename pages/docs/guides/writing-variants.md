# Writing Variants

Variant is basically a condition to apply the styles, like `hover:` variant for applying styles only when the element hovered, and so on.

## Direct Variants

Without any configuration, you can use **any** variants directly from your class names. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background'
  }
})
console.log(css.render(['(&:hover):bg-red', '(@media_(min-width:_48rem)):bg-red']))
```

```css [Output]
.\(\&\:hover\)\:bg-red:hover {
  background: red;
}
@media (min-width: 48rem) {
  .\(\@media_\(min-width\:_48rem\)\)\:bg-red {
    background: red;
  }
}
```

:::

::: info

Any `&` will be replaced with the actual class names, so it's easier to write complex variants. And it assume custom variants without `&` as nested rules.

:::

## Basic Variants

Inside `variants` configuration, you can easily add new variants to TenoxUI. For example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    hover: '&:hover',
    dark: "[data-theme='dark'] &, .dark &",
    light: '@media (prefers-color-scheme: light)'
  }
})
console.log(css.render(['hover:bg-red', 'dark:bg-blue', 'light:bg-yellow']))
```

```css [Output]
.hover\:bg-red:hover {
  background: red;
}
[data-theme='dark'] .dark\:bg-blue,
.dark .dark\:bg-blue {
  background: blue;
}
@media (prefers-color-scheme: light) {
  .light\:bg-yellow {
    background: yellow;
  }
}
```

:::

## Complex Variants

Inside `variants` configuration, you can use functional hook for creating complex and customized variants. For example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    nth: ({ value }) => `value:&:nth-child(${value})`
  }
})

console.log(css.render('nth-4:bg-red'))
```

```css [Output]
.nth-4\:bg-red:nth-child(4) {
  background: red;
}
```

:::

Functional `variant` uses the same logic as `property` but without `secondValue` and `secondUnit` support. So, you can check out [writing shorthand documentation](/docs/guides/writing-rules.md) for more.

### Examples

Here's some example of variants using functional hook :

#### 1. Custom Breakpoints Variants

You can create a variant that have customized screen size directly from user input. For example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    min: ({ key, value, unit }) => {
      // add some condition for "safety" (recommended)
      if (
        !value || // the variant should have value
        key // and shouldn't have `key`
      ) {
        return null
      }

      return `value:@media (width >= ${value}${unit})`
    },
    // simplified version
    max: ({ key, value, unit }) => (!value || key ? null : `value:@media (width < ${value}${unit})`)
  }
})
console.log(css.render(['max-445px:bg-red', 'min-48rem:bg-blue']))
```

```css [Output]
@media (width < 445px) {
  .max-445px\:bg-red {
    background: red;
  }
}
@media (width >= 48rem) {
  .min-48rem\:bg-blue {
    background: blue;
  }
}
```

:::

#### 2. Combination with `key`

Maybe you want to use `key` to set custom custom properties for css `supports` at-rule? You can try this :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    h: 'height'
  },
  variants: {
    supports: ({ key, value }) => (!value ? null : `value:@supports (${key}: ${value})`),
    'not-supports': ({ key, value }) => (!value ? null : `value:@supports not (${key}: ${value})`)
  }
})
console.log(
  css.render(['supports-(height:100dvh):h-100dvh', 'not-supports-(height:100dvh):h-100vh'])
)
```

```css [Output]
@supports (height: 100dvh) {
  .supports-\(height\:100dvh\)\:h-100dvh {
    height: 100dvh;
  }
}
@supports not (height: 100dvh) {
  .not-supports-\(height\:100dvh\)\:h-100vh {
    height: 100vh;
  }
}
```

:::
