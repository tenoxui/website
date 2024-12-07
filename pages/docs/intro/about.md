---
title: About
---

# What is TenoxUI?

TenoxUI is a javascript library for style management with DOM. So, this is not technically regular CSS framework since it's not generate any CSS files or rules. Instead, the styles is applied directly to the element's style (inline-style).

## Syntax

TenoxUI is using **utility-first** based. While other CSS framework using _pre-defined_ values like `p-4`, `m-8`, `flex`, and so on, TenoxUI will match the type and the value from single class name. This is how TenoxUI looks like:

```html
<div class="bg-red p-8px m-1rem"></div>
```

Each class names is divided into two parts, first one is called `type`. `type` is a shorthand for exact CSS properties or variables like `bg`, `p`, `m`, and something like that you define under the [type & property](/docs/config/properties).

The second one is `value`. This is the CSS value you included with the `type`. Like `red`, `8px`, and `1rem`. Overall, TenoxUI syntax is basically like this:

```
{type}-{value}
```

::: warning BEFORE TAKING FURTHER!
TenoxUI is a javascript library for style management but **isn't really a CSS framework**. It runs in DOM, and apply the styles directly to the element's style (inline-style). Even though there's static generator, it's still under maintenance and far from stable release.

**TenoxUI isn't mainly intended for web development**. Does it works? Yes. But there still many of CSS frameworks you can use for better features and wider use cases.
:::
