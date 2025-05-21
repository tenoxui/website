# Responsive Design

Using breakpoint variants before class names to create different styles across different screen sizes.

## Defining Breakpoint

You can easily add new breakpoint inside [`breakpoints`](/docs/config/intro.md#breakpoints) configuration. Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  breakpoints: {
    // name: <length>
    md: '48rem'
  }
})

console.log(css.render(['bg-red', 'md:bg-blue', 'max-md:bg-yellow']))
```

Output :

```css
.bg-red {
  background: red;
}
@media (width >= 48rem) {
  .md\:bg-blue {
    background: blue;
  }
}
@media (width < 48rem) {
  .max-md\:bg-yellow {
    background: yellow;
  }
}
```

## From `variants`

You can also define new breakpoint variant directly from [`variants`](/docs/config/intro.md#breakpoints). Example :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    md: 'value:@media (min-width: 48rem)',
    'max-md': 'value:@media (max-width: 48rem)'
  }
})

console.log(css.render(['md:bg-blue', 'max-md:bg-yellow']))
```

Output :

```css
@media (min-width: 48rem) {
  .md\:bg-blue {
    background: blue;
  }
}
@media (max-width: 48rem) {
  .max-md\:bg-yellow {
    background: yellow;
  }
}
```

Or you want to create custom sizes variants dynamically without creating the breakpoints one-by-one, you can try this :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    min: ({ value, unit }) => `value:@media (min-width: ${value + (unit || 'px')})`,
    max: ({ value, unit }) => `value:@media (max-width: ${value + (unit || 'px')})`
  }
})

console.log(css.render(['min-668:bg-blue', 'max-48rem:bg-yellow']))
```

Output :

```css
@media (min-width: 668px) {
  .min-668\:bg-blue {
    background: blue;
  }
}
@media (max-width: 48rem) {
  .max-48rem\:bg-yellow {
    background: yellow;
  }
}
```

Code above will create new `variant` name called `min` and `max`. For example, the `min` variant will pass the `value` inputted into the variant engine, for example, `min-48rem` will parsed into :

```javascript
const css = new TenoxUI(/* ... */)

// get variant data using prefixLoader instance
console.log(css.prefixLoader.process('min-48rem'))

/* Output :
[
  {
    className: 'min-48rem',
    cssRules: '@media (min-width: 48rem)',
    value: null,
    prefix: undefined,
    raw: [
      undefined,
      'min',
      '48',
      'rem',
      undefined,
      undefined,
      'min-48rem'
    ]
  }
]
*/
```

This way, you can have customized screen size directly from variant.
