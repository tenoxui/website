---
title: Getting Started
---

# Getting Started

::: warning Before you start!
TenoxUI is a javascript library for style management but **isn't really a CSS framework**. It runs in DOM, and apply the styles directly to the element's style (inline-style). Even though there's static generator, it's still under maintenance and far from stable release.

TenoxUI isn't intended for website development. Does it works? Yes. But there still many of CSS frameworks you can use for better features and wider use cases.
:::

## Installation

::: code-group

```sh [npm]
$ npm i tenoxui --save-dev
```

```sh [yarn]
$ yarn add tenoxui -D
```

:::

Or use the lightweight `core` instead :

::: code-group

```sh [npm]
$ npm i @tenoxui/core --save-dev
```

```sh [yarn]
$ yarn add @tenoxui/core -D
```

:::

::: info What's the difference?

There's not much size difference between both packages, the `tenoxui` package is just ready-to-use package of tenoxui, and if you use `@tenoxui/core`, you need to add **more** steps for configuration.

:::
