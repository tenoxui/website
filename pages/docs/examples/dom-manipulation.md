# DOM Manipulation

## Toggle Class Name

TenoxUI allows you to apply the styles directly with `DOM` manipulation:

<TenoxUI code="<div id='toggle-me' class='bg-blue box-200px [transition]-300ms'></div>
<button class='mt-1rem' onclick='document.querySelector(`#toggle-me`).classList.toggle(`bg-red`)'>Click Me</button>
"/>

```html
<div id="toggle-me" class="bg-blue box-200px [transition]-300ms"></div>
<button class="mt-1rem" onclick="document.querySelector('#toggle-me').classList.toggle('bg-red')">
  Click Me
</button>
```

And that means you can perform any `DOM` manipulation such as:

```js
const element = document.querySelector('.my-element')

element.className = 'bg-red'
element.className = true ? 'bg-green' : 'bg-red'
element.classList.add('bg-red')
element.classList.toggle('bg-red')
element.setAttribute('class', 'bg-red')
```
