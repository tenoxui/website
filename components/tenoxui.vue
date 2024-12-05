<script setup>
import { onMounted } from 'vue'
import { MakeTenoxUI } from '@tenoxui/core/full'

const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

onMounted(() => {
  document.querySelectorAll('[data-tenox] *').forEach(element => {
    new MakeTenoxUI({ element }).useDOM()
  })
})
</script>

<template>
  <article data-tenox>
    <div v-html="code"/>
  </article>
</template>
