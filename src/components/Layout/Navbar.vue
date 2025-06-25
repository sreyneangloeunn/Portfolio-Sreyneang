<template>
  <header class="bg-[#ADD8FF] shadow">
    <nav class="max-w-7xl mx-auto px-4 py-4 flex flex-col items-center">
      <!-- Profile Image & Name -->
      <div class="flex items-center gap-3 mb-3">
        <img
          :src="profile.image"
          :alt="profile.name"
          class="h-10 w-10 rounded-full object-cover border-2 border-white shadow"
        />
        <span class="font-bold text-gray-800 text-lg">{{ profile.name }}</span>
      </div>

      <!-- Navigation Links with Icons -->
      <div class="flex items-center gap-6 flex-wrap justify-center">
        <router-link
          v-for="navItem in navItems"
          :key="navItem.label"
          :to="navItem.link"
          class="text-gray-800 hover:text-blue-600 font-medium transition flex items-center gap-2"
        >
          <component :is="navItem.icon" class="h-5 w-5" />
          {{ navItem.label }}
        </router-link>
      </div>
    </nav>
  </header>
</template>

<script setup>
defineProps({
  navItems: {
    type: Array,
    required: true
  },
  profile: {
    type: Object,
    required: true
  }
})
</script>
