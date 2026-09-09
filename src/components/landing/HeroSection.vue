<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <section class="border-b border-slate-100 bg-gradient-to-b from-emerald-50 via-white to-white">
    <div class="mx-auto max-w-6xl px-4 py-20 text-center sm:py-28">
      <p class="mb-3 text-sm font-medium uppercase tracking-wider text-emerald-700">
        Vue.js landing
      </p>
      <h1 class="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Welcome to a clean Vue project structure
      </h1>
      <p class="mx-auto mt-5 max-w-xl text-lg text-slate-600">
        Navbar, footer, reusable sections, and pages — organized the Vue.js docs way so you can grow the app without chaos.
      </p>
      <div class="mt-8 flex flex-wrap justify-center gap-3">
        <RouterLink
          to="/about"
          class="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
        >
          Learn more
        </RouterLink>
        <RouterLink
          to="/contact"
          class="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:bg-slate-50"
        >
          Contact us
        </RouterLink>
      </div>
    </div>
  </section>
</template>
