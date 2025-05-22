# `process`

Generate necessary data for the main TenoxUI to be processed later. (`@tenoxui/core` method)

## Types

```typescript
public process(classNames: string | string[]): Result[] | null {}
```

## Usage Example

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin'
  },
  variants: {
    hover: '&:hover'
  }
})

console.log(css.process(['bg-red', 'm-10px', '!hover:bg-red']))
```

Output :

```javascript
;[
  {
    className: 'bg-red',
    isImportant: false,
    cssRules: 'background',
    value: 'red',
    variants: null,
    raw: [undefined, 'bg', 'red', '', undefined, undefined, 'bg-red']
  },
  {
    className: 'm-10px',
    isImportant: false,
    cssRules: 'margin',
    value: '10px',
    variants: null,
    raw: [undefined, 'm', '10', 'px', undefined, undefined, 'm-10px']
  },
  {
    className: '\\!hover\\:bg-red',
    isImportant: true,
    cssRules: 'background',
    value: 'red',
    variants: { name: 'hover', data: '&:hover' },
    raw: ['hover', 'bg', 'red', '', undefined, undefined, 'hover:bg-red']
  }
]
```

::: tip
Note that shorthands and aliases is processed differently, so both of them processed differently.
:::
