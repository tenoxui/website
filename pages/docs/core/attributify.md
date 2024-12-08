# Attributify Mode

## Installation

Attributify mode only available in `full` version of TenoxUI.

```js [tenoxui.js]
// @tenoxui/core v0.13+
import { tenoxui } from 'tenoxui/full'

tenoxui({
  attributify: true
})

// or using core instead
// @tenoxui/core v1.3+
import { MakeTenoxUI } from '@tenoxui/core/full'

new MakeTenoxUI({
  attributify: true
})
```

## Usage

### CSS Properties

Using direct CSS properties as attributes:

<TenoxUI code='<div 
background="red hover:blue" 
width="150px" height="150px" 
padding-left="1rem" 
padding-top="5rem">
Hover me!

</div>'/>

```html
<div
  background="red hover:blue"
  width="150px"
  height="150px"
  padding-left="1rem"
  padding-top="5rem"
>
  Hover me!
</div>
```

### Using Type Shorthand

You can use [type shorthand](/docs/config/properties) as well for make the attributes more readable:

<TenoxUI code='<div
bg="red hover:blue" box="150px"> Hover me!</div>'/>

```html
<div bg="red hover:blue" box="150px">Hover me!</div>
```

## `child` Attribute

TenoxUI's attributify has a feature for applying style to child elements. Example:

<TenoxUI code='<div child="(div): box-100px br-8px; (div:last-child): ml-1rem;" class="d-flex">

  <div class="bg-red"></div>
  <div class="bg-blue"></div>
</div>' />

```html
<div
  class="d-flex"
  child="
    (div): box-100px br-8px; 
    (div:last-child): ml-1rem;"
>
  <div class="bg-red"></div>
  <div class="bg-blue"></div>
</div>
```

The `child` attribute has unique pattern looks like this:

```
(selector): styles;
```

It allows you to prevent creating same style twice. And you can also put the `child` attribute to the higher level of `DOM`, like `html` or `body` tags. It will works fine:

```html
<html
  child="
    (body): bg-red p-0;
    (section): p-2rem w-mx-1280px mx-auto;
    (section > .title): fs-2rem;"
>
  <body></body>
</html>
```
