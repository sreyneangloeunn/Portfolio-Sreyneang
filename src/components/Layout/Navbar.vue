<template>
  <header class="bg-[#DDEDFF] shadow-md py-4">
    <div class="wrapper max-w-7xl mx-auto px-4">
      <nav class="flex items-center justify-between">
        <!-- Left: Logo + Name -->
        <div class="flex items-center space-x-3">
          <img
            :src="logo"
            alt="/image/photo_2025-02-22_22-16-40.jpg"
            class="h-10 w-10 rounded-full object-cover ring-2 ring-white shadow"
          />
          <span class="text-xl font-bold text-gray-800 tracking-wide">
            {{ name }}
          </span>
        </div>

        <!-- Right: Role -->
        <div class="text-gray-700 text-sm md:text-base font-medium italic">
          {{ role }}
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
defineProps({
  logo: {
    type: String,
    required: true
  },
  name: {
    type: String,
    default: 'Sreyneang Loeun'
  },
  role: {
    type: String,
    default: 'Web Developer'
  }
})
</script>

<style scoped>
/* Optional: fine-tune appearance here */
</style>
