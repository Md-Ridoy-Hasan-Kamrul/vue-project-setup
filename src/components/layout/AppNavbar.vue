<script setup>
import { RouterLink } from 'vue-router'

const links = [
  { to: '/', label: 'Home', exact: true },
  { to: '/about', label: 'About', exact: false },
  { to: '/contact', label: 'Contact', exact: false },
]
</script>

<template>
  <header class="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
    <nav class="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
      <RouterLink to="/" class="text-lg font-semibold tracking-tight text-slate-900">
        VueLand
      </RouterLink>

      <ul class="flex items-center gap-1 text-sm font-medium text-slate-600 sm:gap-2">
        <li v-for="link in links" :key="link.to">
          <RouterLink
            v-slot="{ href, navigate, isActive, isExactActive }"
            :to="link.to"
            custom
          >
            <a
              :href="href"
              class="rounded-md px-3 py-2 hover:bg-slate-100 hover:text-slate-900"
              :class="
                (link.exact ? isExactActive : isActive)
                  ? 'bg-emerald-50 text-emerald-700'
                  : ''
              "
              @click="navigate"
            >
              {{ link.label }}
            </a>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>
</template>
