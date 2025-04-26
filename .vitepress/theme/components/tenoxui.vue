<script setup>
import { onMounted, ref } from 'vue'
import { MakeTenoxUI } from '@tenoxui/core/full'
import { AnyCore } from '@anyframe/core'
import config from '../../../tenoxui.config'
const { property: shorthand, values: valueAlias, aliases: alias, classes: utilityClass } = config
// Define props
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

// const theme = ref(document.getElementById('tsu').textContent)

onMounted(() => {
  const classSet = new Set()

  const elements = document.querySelectorAll('[data-tenox] *[class]')

  elements.forEach((element) => {
    const classes = element.getAttribute('class')
    if (classes) {
      classes
        .split(/\s+/)
        .filter(Boolean)
        .forEach((cls) => classSet.add(cls))
    }
  })

  const ui = new AnyCore({
    shorthand,
    valueAlias,
    utilityClass,
    alias
  })

  const styleTag = document.createElement('style')
  styleTag.id = 'tsu'
  styleTag.textContent = ui.render(Array.from(classSet))
  document.head.appendChild(styleTag)
  /*
  document.querySelectorAll('[data-tenox] *').forEach((element) => {
    new MakeTenoxUI({ element, ...config }).useDOM()
  })*/
})
</script>

<template>
  <article data-tenox>
    <div
      class="p-1rem grid [--g1,--g2,borderColor]-$vp-c-gray-2 bw-1px bs-solid br-8px center h-mn-10rem text-white"
    >
      <div class="w-full d-flex jc-center" v-html="code" />
    </div>
  </article>
</template>
