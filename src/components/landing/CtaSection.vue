<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="border-t border-slate-100 bg-slate-900">
    <div class="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
      <h2 class="text-2xl font-bold text-white sm:text-3xl">Ready to build your next page?</h2>
      <p class="mx-auto mt-3 max-w-lg text-slate-300">
        Copy a view, add a route, and reuse Navbar + Footer automatically through the layout.
      </p>
      <RouterLink
        to="/contact"
        class="mt-8 inline-block rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-400"
      >
        Get in touch
      </RouterLink>
    </div>
  </section>
</template>
