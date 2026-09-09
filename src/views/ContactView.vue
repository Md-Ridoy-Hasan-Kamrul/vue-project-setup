<script setup>
import { ref } from 'vue'

const name = ref('')
const message = ref('')
const sent = ref(false)

function onSubmit() {
  sent.value = true
}
</script>

<template>
  <section class="mx-auto max-w-6xl px-4 py-16 sm:py-20">
    <div class="mx-auto max-w-md text-center">
      <h1 class="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Contact</h1>
      <p class="mt-4 text-lg text-slate-600">
        Welcome — form ta demo. Submit korle page reload hobe na (Vue reactivity).
      </p>
    </div>

    <form class="mx-auto mt-8 max-w-md space-y-4 text-left" @submit.prevent="onSubmit">
      <div>
        <label class="mb-1 block text-sm font-medium text-slate-700" for="name">Name</label>
        <input
          id="name"
          v-model="name"
          type="text"
          required
          class="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />
      </div>
      <div>
        <label class="mb-1 block text-sm font-medium text-slate-700" for="message">Message</label>
        <textarea
          id="message"
          v-model="message"
          rows="4"
          required
          class="w-full rounded-lg border border-slate-300 px-3 py-2 outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-200"
        />
      </div>
      <button
        type="submit"
        class="rounded-lg bg-emerald-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-emerald-700"
      >
        Send message
      </button>
      <p v-if="sent" class="text-sm font-medium text-emerald-700">
        Thanks{{ name ? `, ${name}` : '' }}! Message received (demo).
      </p>
    </form>
  </section>
</template>
