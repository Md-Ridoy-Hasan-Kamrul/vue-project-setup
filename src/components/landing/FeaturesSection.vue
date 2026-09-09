<script setup>
const features = [
  {
    title: 'Components',
    text: 'Reusable UI pieces like Navbar, Footer, and WelcomeBanner live in components/.',
  },
  {
    title: 'Views (Pages)',
    text: 'Each route has its own page in views/ — Home, About, Contact.',
  },
  {
    title: 'Router',
    text: 'vue-router maps URLs to views so every page shares the same layout.',
  },
]
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-16 text-center sm:py-20">
    <h2 class="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
      Why this structure?
    </h2>
    <p class="mx-auto mt-3 max-w-2xl text-slate-600">
      Follow Vue’s recommended folders: keep layout shared, put page content in views, and split sections into components.
    </p>

    <div class="mt-10 grid gap-6 text-left sm:grid-cols-3">
      <article
        v-for="feature in features"
        :key="feature.title"
        class="rounded-xl border border-slate-200 bg-slate-50 p-6"
      >
        <h3 class="text-lg font-semibold text-slate-900">{{ feature.title }}</h3>
        <p class="mt-2 text-sm leading-relaxed text-slate-600">{{ feature.text }}</p>
      </article>
    </div>
  </section>
</template>
