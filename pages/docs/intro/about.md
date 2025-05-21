---
title: What's TenoxUI?
---

# What is TenoxUI?

**TenoxUI** is JavaScript library for creating highly customized, flexible, and extensible **utility-first CSS framework**.

## Utility-First Syntax

In **TenoxUI**, the class names you will define will roughly looks like this :

```
{variant}:{type}-{value}/{secondValue}
```

- `variant` - A variation you can apply to the existing rules, like adding `hover`, `focus`, or `dark`

- `type`- This is the main [shorthand](/docs/guides/writing-rules.md) to determine on where properties the value will given into

- `value`- Whatever string come after the `type`, can be either `length`, `color`, or anything

- `secondValue`- Just like `value`, any value after `/` will considered as `secondValue`

## Writing your First Shorthand

It's easy to define new utilities in **TenoxUI**, here's the example :

```javascript {5}
import { TenoxUI } from 'tenoxui'

const css = new TenoxUI({
  property: {
    w: 'width'
  }
})
```

The code above creates a `w-*` utility. That means `w` becomes the utility prefix or the shorthand for `width` property, and **anything** after this shorthand become its value. For example :

```javascript
css.render([
  // number and unit value
  'w-10px',
  'w-1rem',
  // string value
  'w-max-content'
])
```

And you will get this output :

```css
.w-10px {
  width: 10px;
}
.w-1rem {
  width: 1rem;
}
.w-max-content {
  width: max-content;
}
```

Without much configuration, you already create `w-*` utility that allows you access `width` property in second. But There's much, much more you can do with **TenoxUI**.

## What's Next?

- [**Writing Rules**](/) - A complete guide for extending shorthands to the next level
- [**Customizing Variants**](/) - A guide to write variants in TenoxUI
- [**Responsive Design**](/) - Learn how to create a beautiful site that works in every screen size
- [`values`](/) - Creating CSS value aliases
- [`values`](/) - Creating CSS value aliases
