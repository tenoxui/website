# Complex Shorthand Guide

Since you can write shorthands using functional hooks, you can write almost anything you want from a single utility.

## Sizes Utility

In this example, we will create a `p-*` utility that support `float` and `length` as values.

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    p: {
      property: 'padding',
      value: ({ value, unit }) => {
        // check if the value is float
        // or just checking the unit is defined (not recommended)
        if (!unit) return Number(value) * 0.25 + 'rem'
        return value + unit
      }
    }
  }
})

console.log(
  css.render([
    // floats
    'p-4',
    'p-3.5',
    'p-9.99',
    // with units
    'p-10px',
    'p-1rem'
  ])
)
```

```css [Output]
.p-4 {
  padding: 1rem;
}
.p-3\.5 {
  padding: 0.875rem;
}
.p-9\.99 {
  padding: 2.4975rem;
}
.p-10px {
  padding: 10px;
}
.p-1rem {
  padding: 1rem;
}
```

:::

Since you only checks if the `unit` is present, your utility might fail when trying to use custom value like arbitrary value or css variable value. Example :

```javascript
console.log(
  css.render([
    // arbitrary value
    // using arbitrary value (parentheses variant) -
    // means the value is a single block of value
    'p-(4%)',
    'p-(calc(4rem_-_10px))',
    // css variable value
    'p-$my-size',
    // arbitrary value (square bracket variant)
    // use square bracket for custom value instead
    'p-[4%]',
    'p-[calc(10%_*_10px)]'
    // looks same as using arbitrary -
    // but the unit is parsed differently, -
    // 4 is value, % is unit
    'p-4%',
  ])
)
```

Output :

```css
.p-\(4\%\) {
  padding: NaNrem;
}
.p-\(calc\(4rem_-_10px\)\) {
  padding: NaNrem;
}
.p-\$my-size {
  padding: NaNrem;
}
.p-4\% {
  padding: 4%;
}
.p-\[4\%\] {
  padding: 4%;
}
.p-\[calc\(10\%_\*_10px\)\] {
  padding: calc(10% * 10px);
}
```

As you can see, some utility generate `NaN` because `value` isn't numeric string. There's many ways to solve this, by checking if the `value` is already `length`, or you can create other condition. Here's an example of using `RegExp` for checking the value :

```javascript
const css = new TenoxUI({
  property: {
    p: {
      property: 'padding',
      value: ({ value, unit }) => {
        // check if the value is a number
        if (/^[-+]?(?:\d*\.\d+|\d+)$/.test(value)) return Number(value) * 0.25 + 'rem'
        return value + unit
      }
    }
  }
})

console.log(
  css.render([
    // arbitrary value (parentheses variant)
    'p-(4%)',
    'p-(calc(4rem_-_10px))',
    // css variable value
    'p-$my-size',
    // arbitrary value (square bracket variant)
    'p-[4%]',
    'p-[calc(10%_*_10px)]',
    // basic length
    'p-4%',
    // number only values
    'p-4',
    'p-4.6',
    'p-9.99'
  ])
)
```

Now you will get this output :

```css
.p-\(4\%\) {
  padding: 4%;
}
.p-\(calc\(4rem_-_10px\)\) {
  padding: calc(4rem - 10px);
}
.p-\$my-size {
  padding: var(--my-size);
}
.p-\[4\%\] {
  padding: 4%;
}
.p-\[calc\(10\%_\*_10px\)\] {
  padding: calc(10% * 10px);
}
.p-4\% {
  padding: 1rem;
}
.p-4 {
  padding: 1rem;
}
.p-4\.6 {
  padding: 1.15rem;
}
.p-9\.99 {
  padding: 2.4975rem;
}
```
