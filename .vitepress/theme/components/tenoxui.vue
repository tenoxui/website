<script setup>
import { onMounted } from 'vue'
import { MakeTenoxUI } from '@tenoxui/core/full'
import config from '../../../tenoxui.config'

// Define props
const props = defineProps({
  code: {
    type: String,
    required: true
  }
})

onMounted(() => {
  document.querySelectorAll('[data-tenox] *').forEach((element) => {
    new MakeTenoxUI({ element, ...config }).useDOM()
  })
})
</script>

<template>
  <article data-tenox>
    <div
      class="p-1rem grid [--g1,--g2,bc]-$vp-c-gray-2 bw-1px bs-solid br-8px center h-mn-10rem text-white"
    >
      <div class="w-full d-flex jc-center" v-html="code" />
    </div>
  </article>
</template>
