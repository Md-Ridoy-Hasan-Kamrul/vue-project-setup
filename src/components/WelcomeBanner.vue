<script setup>
defineProps({
  title: {
    type: String,
    default: 'Welcome',
  },
})
</script>

<template>
  <div class="border-b border-emerald-200/80 bg-emerald-50 px-4 py-2 text-center text-sm text-emerald-900">
    {{ title }} — Vue.js project e tomake welcome!
  </div>
</template>
