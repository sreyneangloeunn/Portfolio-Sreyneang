<template>
  <!-- Navbar -->
  <header class="bg-[#ADD8FF] shadow fixed top-0 left-0 w-full z-50">
    <nav class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Name on the Left -->
      <span class="font-bold text-gray-800 text-lg md:text-xl">{{ profile.name }}</span>

      <!-- Navigation Links in the Center -->
      <div class="hidden md:flex items-center gap-6">
        <router-link
          v-for="navItem in navItems"
          :key="navItem.label"
          :to="navItem.link"
          class="text-gray-800 hover:text-blue-600 font-medium transition flex items-center gap-2"
        >
          <component :is="navItem.icon" class="h-5 w-5 text-blue-600" />
          {{ navItem.label }}
        </router-link>
      </div>

      <!-- Profile Image on the Right -->
      <div class="flex items-center gap-4">
        <img
          :src="profile.image"
          :alt="profile.name"
          class="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
        />
      </div>
    </nav>
  </header>

  <!-- Hero Section -->
  <main class="pt-20 bg-[#DDEDFF]">
    <section class="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Sreyneang Loeun</h1>
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Web Developer & Problem Solver</h2>
      <p class="text-lg text-gray-600">
        Creating seamless digital interfaces and backend systems with purpose and passion.
      </p>
    </section>
  </main>
</template>

<script setup>
import { HomeIcon, UserIcon, DocumentTextIcon, FolderIcon, StarIcon } from '@heroicons/vue/24/solid';

defineProps({
  navItems: {
    type: Array,
    required: true,
    default: () => [
      { label: 'Home', link: '/', icon: HomeIcon },
      { label: 'About Me', link: '/about', icon: UserIcon },
      { label: 'Projects', link: '/projects', icon: FolderIcon },
      { label: 'Skills', link: '/skills', icon: StarIcon },
    ],
  },
  profile: {
    type: Object,
    required: true,
    default: () => ({
      name: 'SREYNEANG LOEUN',
      image: '/image/photo_2025-02-22_22-16-40.jpg',
    }),
  },
});
</script>

<style scoped>
header {
  background-color: #add8ff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
}

nav .flex.hidden {
  display: flex;
}

nav .text-gray-800 {
  font-size: 1rem;
  font-weight: 500;
  color: #2d3748;
  transition: color 0.3s ease;
}

nav .text-gray-800:hover {
  color: #3182ce;
}

img {
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  object-fit: cover;
  border: 2px solid white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  nav .hidden.md\\:flex {
    display: none;
  }
}
</style>