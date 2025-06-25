<template>
  <form @submit.prevent="handleSubmit" class="bg-white p-6 rounded-lg shadow-md w-full max-w-lg mx-auto space-y-4">
    <h2 class="text-xl font-bold text-gray-800 text-center">{{ title }}</h2>

    <div v-if="showName">
      <label class="block text-sm font-medium text-gray-700 mb-1">Name</label>
      <input
        type="text"
        v-model="form.name"
        placeholder="Your name"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    <div v-if="showEmail">
      <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
      <input
        type="email"
        v-model="form.email"
        placeholder="you@example.com"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
    </div>

    <div v-if="showMessage">
      <label class="block text-sm font-medium text-gray-700 mb-1">Message</label>
      <textarea
        v-model="form.message"
        rows="4"
        placeholder="Write your message here..."
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      ></textarea>
    </div>

    <button
      type="submit"
      class="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md transition"
    >
      {{ submitText }}
    </button>
  </form>
</template>

<script setup>
import { reactive } from 'vue'
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  title: { type: String, default: 'Contact Form' },
  submitText: { type: String, default: 'Submit' },
  showName: { type: Boolean, default: true },
  showEmail: { type: Boolean, default: true },
  showMessage: { type: Boolean, default: true },
})

const emit = defineEmits(['submit'])

const form = reactive({
  name: '',
  email: '',
  message: '',
})

const handleSubmit = () => {
  emit('submit', { ...form })
  // Reset form
  form.name = ''
  form.email = ''
  form.message = ''
}
</script>
