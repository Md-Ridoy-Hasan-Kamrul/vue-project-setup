<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <footer class="mt-auto border-t border-slate-200 bg-slate-50">
    <div class="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-slate-600 sm:flex-row sm:items-center sm:justify-between">
      <p>&copy; {{ year }} VueLand. Built with Vue.js.</p>
      <p>Navbar · Footer · Sections — clean project structure.</p>
    </div>
  </footer>
</template>
