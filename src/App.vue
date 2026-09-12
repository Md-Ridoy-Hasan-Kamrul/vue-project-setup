<script setup>
import { RouterView, useRoute } from 'vue-router'
import AppLayout from '@/components/layout/AppLayout.vue'

const route = useRoute()
</script>

<template>
  <RouterView v-if="route.meta.fullBleed" />
  <AppLayout v-else>
    <RouterView />
  </AppLayout>
</template>
