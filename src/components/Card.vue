<template>
  <div class="p-4 bg-white rounded-xl shadow-lg max-w-md w-full">
    <h3 class="text-lg font-bold text-gray-800 mb-2" v-html="title" />
    <p class="text-gray-600 mb-4" v-html="description" />
    <a
      :href="link"
      class="inline-flex items-center gap-1 px-4 py-2 rounded-full text-white text-sm font-semibold transition duration-300"
      :class="buttonClass"
      target="_blank"
    >
      {{ buttonText }}
      <span class="text-xl">➜</span>
    </a>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  description: String,
  buttonText: String,
  link: String,
  buttonClass: {
    type: String,
    default: 'bg-purple-600 hover:bg-purple-700'
  }
})
</script>

<style scoped>
/* You can extend card-specific styles here if needed */
</style>
