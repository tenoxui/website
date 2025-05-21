# Writing Values

On this page, you will learn about all `value` you can use in TenoxUI.

## Basic Value

You can access all basic CSS value such as :

- Basic strings (e.g. `red`, `blue`, `row-reverse`)
- Numbers (e.g. `1`, `10`, `3.5`)
- Pair of numbers and units (e.g. `10px`, `3.5rem`, `100%`)
- HEX colors (e.g. `#ccf654`)

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background',
    flex: 'flexDirection',
    lh: 'lineHeight',
    m: 'margin'
  }
})
console.log(
  css.render([
    // string values
    'bg-red',
    'flex-row',
    // integers
    'lh-3.5',
    'lh-1',
    // pair of integers and units
    'm-4rem',
    'm-10.5rem',
    // hex color
    'bg-#ccf654'
  ])
)
```

```css [Output]
.bg-red {
  background: red;
}
.flex-row {
  flex-direction: row;
}
.lh-3\.5 {
  line-height: 3.5;
}
.lh-1 {
  line-height: 1;
}
.m-4rem {
  margin: 4rem;
}
.m-10\.5rem {
  margin: 10.5rem;
}
.bg-\#ccf654 {
  background: #ccf654;
}
```

:::

## CSS Variable Value

There are several ways to access CSS variable in TenoxUI. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    m: 'margin'
  }
})
console.log(
  css.render([
    // using `$` sign
    'm-$margin-1',
    // parentheses
    'm-(--margin-2)',
    'm-(var(--margin-3))',
    // arbitrary value
    'm-[--margin-4]',
    'm-[var(--margin-5)]'
  ])
)
```

```css [Output]
.m-\$margin-1 {
  margin: var(--margin-1);
}
.m-\(--margin-2\) {
  margin: var(--margin-2);
}
.m-\(var\(--margin-3\)\) {
  margin: var(--margin-3);
}
.m-\[--margin-4\] {
  margin: var(--margin-4);
}
.m-\[var\(--margin-5\)\] {
  margin: var(--margin-5);
}
```

:::

## Arbitrary Value

You may encounter complex value in the future. Here's how you can handle it :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    m: 'margin'
  }
})
console.log(
  css.render([
    // wrap the value inside one of `()` or `[]`
    // using parentheses
    'm-(50px)',
    'm-(calc(50px_-_1rem))',
    // square brackets
    'm-[50px]',
    'm-[calc(50px_-_1rem)]'
  ])
)
```

```css [Output]
.m-\(50px\) {
  margin: 50px;
}
.m-\(calc\(50px_-_1rem\)\) {
  margin: calc(50px - 1rem);
}
.m-\[50px\] {
  margin: 50px;
}
.m-\[calc\(50px_-_1rem\)\] {
  margin: calc(50px - 1rem);
}
```

:::

::: tip When to use `()` and `[]`

You might notice there's two ways for declaring arbitrary value, but they have the differences. Here's the example :

```javascript
const css = new TenoxUI({
  property: {
    p: {
      property: 'padding',
      value: '{0}px'
    }
  }
})
console.log(
  css.render([
    // using parentheses
    'p-(50px)',
    'p-(calc(50px_-_1rem))',
    // square brackets
    'p-[50px]',
    'p-[calc(50px_-_1rem)]'
  ])
)
```

Output :

```css
.p-\(50px\) {
  padding: 50pxpx; /* have additional px */
}
.p-\(calc\(50px_-_1rem\)\) {
  padding: calc(50px - 1rem) px; /* have additional px */
}
.p-\[50px\] {
  padding: 50px;
}
.p-\[calc\(50px_-_1rem\)\] {
  padding: calc(50px - 1rem);
}
```

---

If you want to use _PURE_ value and ignoring the additional value, use square bracket `[]`, and if you just want to assign the value into something like `{0}px` in object property, it's safe to use parentheses `()`.

:::

## Creating Value Alias

You can define custom alias for CSS value inside `values` configuration. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  values: {
    'red-500': 'rgb(255 0 0)',
    'my-color': '#ccf654'
  }
})
console.log(css.render(['bg-red-500', 'bg-my-color']))
```

```css [Output]
.bg-red-500 {
  background: rgb(255 0 0);
}
.bg-my-color {
  background: #ccf654;
}
```

:::

## Group Alias

You can also create **group** for your `type` inside `values` configuration. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    m: 'margin',
    bg: {
      property: 'background',
      group: 'colors'
    }
  },
  values: {
    primary: '4rem',
    colors: {
      'red-500': 'rgb(255 0 0)',
      primary: '#ccf654'
    }
  }
})
console.log(css.render(['m-primary', 'bg-red-500', 'bg-primary']))
```

```css [Output]
.m-primary {
  margin: 4rem;
}
.bg-red-500 {
  background: rgb(255 0 0);
}
.bg-primary {
  background: #ccf654;
}
```

:::
