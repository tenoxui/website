# About Keys

`key` or label is one of TenoxUI features for adding more variations to your `value`.

```
{type}-({key}:{value})
```

## Example

You can use this `key`s in many ways, but here's some examples :

### Key as Property

Using `key` directly as properties.

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    // splitting keys with coma, and returns an array of properties
    moxie: ({ key }) => key.split(','),
    moxie2: {
      property: ({ key }) => key.split(',')
    }
  }
})

console.log(
  css.render([
    'moxie-(--my-color:blue)',
    'moxie-(padding:1rem)',
    'moxie-(padding,margin,--my-size:0)',
    'moxie2-(padding,margin,--my-size:0)'
  ])
)
```

```css [Output]
.moxie-\(--my-color\:blue\) {
  --my-color: blue;
}
.moxie-\(padding\:1rem\) {
  padding: 1rem;
}
.moxie-\(padding\,margin\,--my-size\:0\) {
  padding: 0;
  margin: 0;
  --my-size: 0;
}
.moxie2-\(padding\,margin\,--my-size\:0\) {
  padding: 0;
  margin: 0;
  --my-size: 0;
}
```

:::

### Transforming Key

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    p: ({ key, value, unit }) => {
      const keys = {
        x: 'inline',
        y: 'block'
      }

      return `value:padding${key ? `-${keys[key] || key}` : ''}: ${value + unit}`
    }
  }
})

console.log(
  css.render(['p-4px', 'p-(right:4px)', 'p-(left:4rem)', 'p-(inline:4rem)', 'p-(x:10px)'])
)
```

```css [Output]
.p-4px {
  padding: 4px;
}
.p-\(right\:4px\) {
  padding-right: 4px;
}
.p-\(left\:4rem\) {
  padding-left: 4rem;
}
.p-\(inline\:4rem\) {
  padding-inline: 4rem;
}
.p-\(x\:10px\) {
  padding-inline: 10px;
}
```

:::
