<template>
  <div class="mb-12">
    <h2 class="text-2xl font-semibold text-gray-700 mb-6 text-center animate__animated animate__fadeInLeft">{{ title }}</h2>
    <div class="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center">
      <div
        v-for="(skill, index) in skills"
        :key="index"
        class="w-28 h-28 bg-white rounded-xl shadow-md flex flex-col items-center justify-center hover:shadow-xl transition-transform transform hover:scale-105 animate__animated animate__fadeInUp"
        :style="{ animationDelay: `${index * 0.2}s` }"
      >
        <img :src="skill.icon" :alt="skill.name" class="w-12 h-12 mb-2" />
        <p class="text-sm font-medium text-gray-700 text-center px-2">{{ skill.name }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  skills: Array,
})
</script>