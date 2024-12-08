---
title: About
---

# What is TenoxUI?

TenoxUI is a JavaScript library designed for dynamic style management within the DOM. Unlike traditional CSS frameworks that generate CSS files or rules, TenoxUI applies styles directly to elements using inline styles. This approach provides flexibility and simplifies the way you manage styles programmatically.

## Purpose

TenoxUI was built to provide a lightweight and dynamic solution for managing styles at the element level. It is particularly useful for applications where real-time, DOM-based styling is preferred over traditional CSS workflows. Whether you're building a custom component library or experimenting with interactive styling, TenoxUI enables you to achieve granular control without the need for precompiled stylesheets.

## Syntax

TenoxUI is using **utility-first** based. While other CSS framework using _pre-defined_ values like `p-4`, `m-8`, `flex`, and so on, TenoxUI's syntax dynamically matches CSS properties and values directly within a single class name. Here's an example:

```html
<div class="bg-red p-8px m-1rem"></div>
```

Each class names is divided into two parts, first one is called `type`. `type` is a shorthand for exact CSS properties or variables like `bg`, `p`, `m`, and something like that you define under the [type & property](/docs/config/properties).

The second one is `value`. This is the CSS value you included with the `type`. Like `red`, `8px`, and `1rem`. Overall, TenoxUI syntax is basically like this:

```
{type}-{value}
```

::: warning BEFORE TAKING FURTHER!
TenoxUI is a javascript library for style management and **isn't traditional CSS framework**. It runs in DOM, and apply the styles directly to the element's style (inline-style). Even though there's static generator, it's still under maintenance and far from stable release.

**TenoxUI is not primarily intended for traditional web development**. Although it can be used in web projects, other CSS frameworks may provide more robust features and broader support for common use cases. TenoxUI shines in scenarios that require programmatic and dynamic styling directly in the DOM.
:::
