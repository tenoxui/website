# Writing Shorthands

In `property` field, you can define your `type` shorthand for creating simple utilities into some complex one.

## Without Shorthands

Without any configuration, you can access **ALL** css properties or variables using _direct shorthand_. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI(/* configuration here */)
console.log(
  css.render([
    '[background]-red', // single property
    '[--my-var]-red', // single variable
    '[width,height]-80px' // multiple properties
  ])
)
```

```css [Output]
.\[background\]-red {
  background: red;
}
.\[--my-var\]-red {
  --my-var: red;
}
.\[width\,height\]-50px {
  width: 50px;
  height: 50px;
}
```

:::

## Basic Shorthands

A basic shorthand is just a pair of the `type` and the css properties or variables as value. For Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    bg: 'background', // single css property
    'my-var': '--my-var', // single css variable
    size: ['width', 'height'] // multiple css properties
  }
})
console.log(css.render(['bg-red', 'my-var-blue', 'size-100px']))
```

```css [Output]
.bg-red {
  background: red;
}
.my-var-blue {
  --my-var: blue;
}
.size-100px {
  width: 100px;
  height: 100px;
}
```

:::

## Custom Value Shorthands

Maybe you want to create utility with some _ready_ value, like the input value will take a place from that missing property. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    img: {
      property: 'backgroundImage',
      value: 'url({0})' // if `value` field not defined, defaulting to `{0}`
    }
  }
})
console.log(css.render(['img-(/public/header.png)']))
```

```css [Output]
.img-\(\/public\/header\.png\) {
  background-image: url(/public/header.png);
}
```

:::

## Shorthands with Specific Values

You can create a utility that only accept specific values. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    d: {
      property: 'display',
      value: ['flex', 'block']
    }
  }
})
console.log(
  css.render([
    'd-flex',
    'd-inline-flex', // ignored
    'd-block'
  ])
)
```

```css [Output]
.d-flex {
  display: flex;
}
.d-block {
  display: block;
}
```

:::

## Direct Shorthand

You can also write _valueless_ utility like `flex` for `display: flex` and so on. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    flex: 'display: flex',
    grid: 'display: grid',
    'bg-linear': 'value:background-image: linear-gradient(270deg, red, blue)'
  }
})
console.log(css.render(['flex', 'grid', 'bg-linear']))
```

```css [Output]
.flex {
  display: flex;
}
.grid {
  display: grid;
}
.bg-linear {
  background-image: linear-gradient(270deg, red, blue);
}
```

:::

::: tip About `value:`

By adding `value:` before your rules, it branded the returned rules as _PURE_, so the returned rules won't processed further, because by default, any `properties` will processed with `kebab-type` conversion. For example :

```javascript
const css = new TenoxUI({
  property: {
    f1: 'flexDirection: row',
    f2: 'value:flexDirection: column'
  }
})
console.log(css.render(['f1', 'f2']))
```

You will get this output :

```css
.f1 {
  flex-direction: row;
}
.f2 {
  flexdirection: column;
}
```

The `f2` shorthand will generate exact value you define from `property`; `flexdirection: column` which is branded with `value:` mark before the rules.

So, use `value:` mark if your shorthand returns direct CSS rules.

:::

## Complex Shorthands (property only)

Using functional hooks, you can customize the output css rules from shorthand you define. Here's how you can create complex utility in TenoxUI :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    flex: ({ value }) => {
      if (!value) return 'value:display: flex'
      if (['row', 'col', 'row-reverse', 'col-reverse'].includes(value))
        return `value:flex-direction: ${value.replace('col', 'column')}`
      if (value === 'hello') return `value:--content: 'world!'`

      return null
    }
  }
})
console.log(
  css.render([
    'flex',
    'flex-1', // not specified
    'flex-row',
    'flex-col',
    'flex-hello'
  ])
)
```

```css [Output]
.flex {
  display: flex;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-hello {
  --content: 'world!';
}
```

:::

::: tip
Since this is `property only`, you can also write this as object property and set `value` to null or just leave them be **if the returned rules are [direct rules](#direct-shorthand)**. For example :

```javascript
const css = new TenoxUI({
  property: {
    // ✓ direct function hook that return direct rules
    mt: ({ value }) => {
      return `value:margin-top: ${value}px`
    },
    // ✓ custom value string on object property
    m: {
      property: ({ secondValue }) => {
        return secondValue ? `margin-${secondValue}` : `margin`
      },
      value: '{0}px'
    },
    // ✓ object property return direct rules
    p: {
      property: ({ value, secondValue }) => {
        return (secondValue ? `padding-${secondValue}` : `padding`) + `: ${value}px`
      }
    },
    // ❌ don't define value if the property returns direct rules
    p2: {
      property: ({ value, secondValue }) => {
        return (secondValue ? `value:padding-${secondValue}` : `padding`) + `: ${value}px`
      },
      value: '{0}px'
    }
  }
})
console.log(css.render(['mt-10', 'm-4', 'm-6/right', 'p-8', 'p-10/top']))
```

Output :

```css
.mt-10 {
  margin-top: 10px;
}
.m-4 {
  margin: 4px;
}
.m-6\/right {
  margin-right: 6px;
}
.p-8 {
  padding: 8px;
}
.p-10\/top {
  padding-top: 10px;
}
```

:::

Here's an example of shorthand that use function hook with complete parameters :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    p: ({ key, value, unit, secondValue, secondUnit, raw }) => {
      const keys = {
        t: 'padding-top',
        b: 'padding-bottom',
        r: 'padding-right',
        l: 'padding-left',
        x: 'padding-inline',
        y: 'padding-block'
      }

      let finalValue = value + unit
      // process secondValue
      if (secondValue) finalValue = `${finalValue} ${secondValue + secondUnit}`

      return `value:${keys[key] || 'padding'}: ${finalValue}`
    }
  }
})
console.log(
  css.render([
    'p-4px',
    'p-4rem',
    'p-[calc(4rem_-_10px)]',
    // with secondValue
    'p-4rem/5vh',
    // with key
    'p-(x:4px)',
    'p-(r:4rem)',
    'p-(r:4rem)/5vh',
    'p-[r:4rem_10%]'
  ])
)
```

```css [Output]
.p-4px {
  padding: 4px;
}
.p-4rem {
  padding: 4rem;
}
.p-\[calc\(4rem_-_10px\)\] {
  padding: calc(4rem - 10px);
}
.p-4rem\/5vh {
  padding: 4rem 5vh;
}
.p-\(x\:4px\) {
  padding-inline: 4px;
}
.p-\(r\:4rem\) {
  padding-right: 4rem;
}
.p-\(r\:4rem\)\/5vh {
  padding-right: 4rem 5vh;
}
.p-\[r\:4rem_10\%\] {
  padding-right: 4rem 10%;
}
```

:::

All the parameters included :

- `key` Custom **label** extracted from the `value` (`({key}:{value})` or `[{key}:{value}]`)

- `value` - The final `processedValue` from TenoxUI

- `unit` - if the `value` is a numeric, the string after them is the `unit` (`{value}{unit}`)

- `secondValue` and `secondUnit` - Same as `value` and `unit`, parsed after the `/` character (`{value}/{secondValue}`)

- `raw` - This is the raw of pure parsed class name, that means it contains all the data from your input class name. This is useful when you want to get pure input `value` before it processed by TenoxUI. (`hover:p-4rem/5vh` => `[ 'hover', 'p', '4', 'rem', '5', 'vh' ]`)

---

::: danger
You may need to add some **safety** for your complex shorthand. From `flex-*` utility above, you can write class names such as :

```javascript
console.log(
  css.render([
    'flex-(whatever-it-is-and-how-long-it-will-be:col)',
    'flex-row/whatever-it-is-and-how-long-it-will-be'
  ])
)
```

And you will still get output like this :

```css
.flex-\(whatever-it-is-and-how-long-it-will-be\:col\) {
  flex-direction: column;
}
.flex-row\/whatever-it-is-and-how-long-it-will-be {
  flex-direction: row;
}
```

It's a mess. But you can easily solve this by adding new condition :

```javascript {5,13-22}
const css = new TenoxUI({
  property: {
    flex: ({ value, key, secondValue }) => {
      // don't allow any `key` or `secondValue`
      if (key || secondValue) return null

      // ...
    },
    // for p-* utility, you can add
    p: ({ key, value, unit, secondValue, secondUnit, raw }) => {
      // ...

      if (
        (key && !keys[key]) || // check if the key defined but not match anything above
        ((isNaN(value) || isNaN(secondValue)) && // check if value or secondValue isn't numeric
          // not when key is defined
          !key &&
          // and not if the value inside `raw` starts with `[` (arbitrary value)
          !raw[2].startsWith('['))
      ) {
        return null
      }

      // ...
    }
  }
})
```

:::

## Complex Shorthands (value only)

Similar to `property only` complex shorthand, you can also use function hook on object property as well. For example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  moxie,
  property: {
    mt: {
      property: 'marginTop',
      value: ({ value, unit }) => {
        // use 'px' when unit isn't defined
        return value + (unit || 'px')
      }
    },
    m: {
      property: 'margin',
      value: ({ value, unit, secondValue }) => {
        return (
          // if secondValue is available, multiply value with it
          (secondValue ? Number(value) * Number(secondValue) : value) +
          // and add unit
          (unit || 'px')
        )
      }
    }
  }
})
console.log(css.render(['mt-10', 'mt-10px', 'mt-10rem', 'm-4', 'm-4px', 'm-4/5']))
```

```css [Output]
.mt-10 {
  margin-top: 10px;
}
.mt-10px {
  margin-top: 10px;
}
.mt-10rem {
  margin-top: 10rem;
}
.m-4 {
  margin: 4px;
}
.m-4px {
  margin: 4px;
}
.m-4\/5 {
  margin: 20px;
}
```

:::

## Complex Shorthands (combined of both)

You can also use function hook for both `type.property` and `type.value` at the same time. Example :

::: code-group

```javascript [Javascript]
const css = new TenoxUI({
  property: {
    m: {
      property: ({ secondValue }) => {
        return secondValue ? `margin-${secondValue}` : 'margin'
      },
      value: ({ value, unit }) => {
        return !unit // if unit isn't defined
          ? Number(value) * 0.25 + // multiply by 0.25
              'rem' // add 'rem' string after the processed number
          : value + unit // use default value
      }
    }
  }
})
console.log(
  css.render([
    'm-4', // 0.25 * 4 => 1
    'm-10px', // => 10px
    'm-5/right', // => 1.25
    'm-3.5/top' // => 0.875
  ])
)
```

```css [Output]
.m-4 {
  margin: 1rem;
}
.m-10px {
  margin: 10px;
}
.m-5\/right {
  margin-right: 1.25rem;
}
.m-3\.5\/top {
  margin-top: 0.875rem;
}
```

:::
