# `parse`

Method to parse class name into `raw`. (`@tenoxui/moxie` method)

## Types

```typescript
public parse(className: string, safelist?: string[]): Parsed {}
```

## Example Usage

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    flex: 'display: flex'
  }
})

console.log(css.main.parse('bg-red'))
console.log(css.main.parse('hover:flex'))
console.log(css.main.parse('max-768px:m-10px'))
```

Output :

```javascript
;[undefined, 'bg', 'red', '', undefined, undefined]
;['hover', 'flex', '', '', undefined, undefined]
;['max-768px', 'm', '10', 'px', undefined, undefined]
```
