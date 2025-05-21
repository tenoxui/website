# Configuration Option

## Constructor

```javascript
class TenoxUI {
  constructor({
    property = {},
    values = {},
    classes = {},
    aliases = {},
    breakpoints = {},
    variants = {},
    safelist = [],
    typeOrder = [],
    tabSize = 2,
    simple = false,
    moxie = Moxie,
    moxieOptions = {}
  }) {}
}
```

## `property`

You can define your `type` or shorthands for TenoxUI to use here. Basic usage :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background', // single css property
    'my-var': '--my-var', // single css variable
    size: ['width', 'height'] // multiple css properties
  }
})

console.log(css.render(['bg-red', 'size-100px']))
```

Output :

```css
.bg-red {
  background: red;
}
.size-100px {
  width: 100px;
  height: 100px;
}
```

Learn more about writing your rules [here](/docs/guides/writing-rules.md).

## `values`

You can add custom value alias for another CSS value inside this option. Example :

```javascript
const css = new TenoxUI({
  property: {
    w: 'width'
  },
  values: {
    full: '100%',
    min: 'min-content'
  }
})

console.log(css.render(['w-full', 'w-min']))
```

Output :

```css
.w-full {
  width: 100%;
}
.w-min {
  width: min-content;
}
```

Learn more about writing your value alias [here](/docs/guides/writing-values.md).

## `classes`

Create _mass_ and quick utility-classes with `css property-based` format inside `classes` option. Example :

```javascript
const css = new TenoxUI({
  classes: {
    display: {
      flex: 'flex',
      iflex: 'inline-flex',
      'flex-center': 'flex'
    },
    // you can stack properties under single class name
    alignItems: { 'flex-center': 'center' },
    justifyContent: { 'flex-center': 'center' }
  }
})

console.log(css.render(['flex', 'flex-center']))
```

Output :

```css
.flex {
  display: flex;
}
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
```

## `aliases`

You can create _alias_ for multiple class name into single class instead using `aliases`. Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  classes: {
    display: {
      flex: 'flex'
    }
  },
  aliases: {
    'my-box': 'flex bg-blue'
  }
})

console.log(css.render(['my-box']))
```

Output :

```css
.my-box {
  display: flex;
  background: blue;
}
```

## `breakpoints`

You can add your breakpoints for creating different style across different screen size inside `breakpoints` option. Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  breakpoints: {
    sm: '35rem',
    md: '48rem'
  }
})

console.log(css.render(['bg-red', 'sm:bg-blue', 'max-sm:bg-yellow', 'min-md:bg-green']))
```

Output :

```css
.bg-red {
  background: red;
}
@media (width >= 35rem) {
  .sm\:bg-blue {
    background: blue;
  }
}
@media (width < 35rem) {
  .max-sm\:bg-yellow {
    background: yellow;
  }
}
@media (width >= 48rem) {
  .min-md\:bg-green {
    background: green;
  }
}
```

## `variants`

There's no default variant defined, but you can easily add new one inside `variants` field. Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    // basic variant
    hover: '&:hover',
    dark: '@media (prefers-color-scheme: dark)',
    // custom variants
    nth: ({ value }) => `value:&:nth-child(${value})`
  }
})

console.log(css.render(['hover:bg-red', 'dark:bg-blue', 'nth-4:bg-blue']))
```

Output :

```css
.hover\:bg-red:hover {
  background: red;
}
@media (prefers-color-scheme: dark) {
  .dark\:bg-blue {
    background: blue;
  }
}
.nth-4\:bg-blue:nth-child(4) {
  background: blue;
}
```

Any `&` inside the variant will be replaced with input class name (e.g. `&:hover` => `className:hover`), while if there not a single one, it assume the variant will be nested (e.g. `@media (...)` => `@media (...) { className }`).

You can write custom `variants` with the same logic as `property` option because it uses same engine, so you can checkout how they can handle function property inside [writing rules documentation](/docs/guides/writing-rules.md). For more example, you can check out [here](/docs/guides/writing-variants.md).

## `safelist`

List of class names to reserve. Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  safelist: ['bg-red', 'bg-blue']
})

console.log(css.render())
```

Output :

```css
.bg-red {
  background: red;
}
.bg-blue {
  background: blue;
}
```

## `typeOrder`

Set order of the `type`, or setting which `type` should be prioritize first. Usage :

```javascript
const css = new TenoxUI({
  property: {
    flex: 'display: flex',
    bg: 'background',
    m: 'margin'
  },
  classes: {
    display: {
      grid: 'grid'
    }
  },
  typeOrder: ['m', 'flex', 'bg', 'grid']
})
console.log(css.render(['grid', 'bg-red', 'm-50px', 'flex']))
```

Output :

```css
.m-50px {
  margin: 50px;
}
.flex {
  display: flex;
}
.bg-red {
  background: red;
}
.grid {
  display: grid;
}
```

## `tabSize`

Determine how many tabs or spaces in the generated output. (default: `2`)

## `simple`

Enable `simple mode`, the output css won't be beautify. (default: `false`)

## `moxie` & `moxieOptions`

Use custom `tenoxui/moxie` version, just pass it here.
