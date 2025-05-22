# `render`

Method to compute all inputted class names and rules.

## Types

```typescript
public render(
  ...classParams: Array<string | string[] | Record<string, string | string[]>>
): string {}
```

## Usage

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background'
  },
  variants: {
    hover: '&:hover'
  }
})

console.log(
  css.render(
    // string parameter
    'bg-red hover:bg-blue',
    // array parameter
    ['bg-red', 'hover:bg-blue'],
    // custom apply selector (object parameter)
    {
      'div.square': 'bg-red hover:bg-yellow'
    }
  )
)
```

Output :

```css
.bg-red {
  background: red;
}
.hover\:bg-blue:hover {
  background: blue;
}
.bg-red {
  background: red;
}
.hover\:bg-blue:hover {
  background: blue;
}
div.square {
  background: red;
}
div.square:hover {
  background: yellow;
}
```

## String & Array Parameters

You can store the class names using simple string or just array of class names :

```javascript
css.render('bg-red m-10px p-4rem')
css.render(['bg-red', 'm-10px', 'p-4rem'])
```

## Object Parameters

You can create direct CSS block using object parameter. It just pair of selector and the rules you want to add :

```javascript
const css = new TenoxUI({
  property: {
    bg: 'background',
    m: 'margin',
    mx: 'marginInline',
    w: 'width',
    'max-w': 'maxWidth'
  },
  variants: {
    hover: '&:hover'
  }
})

console.log(
  css.render({
    body: 'bg-red max-w-1280px w-100% m-20px',
    main: 'mx-auto',
    '@property --size': '[syntax]-["<percentage>"] [inherits]-true [initial-value]-40%'
  })
)
```

Output :

```css
body {
  background: red;
  max-width: 1280px;
  width: 100%;
  margin: 20px;
}
main {
  margin-inline: auto;
}
@property --size {
  syntax: '<percentage>';
  inherits: true;
  initial-value: 40%;
}
```
