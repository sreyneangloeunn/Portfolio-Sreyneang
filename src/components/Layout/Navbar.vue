<script setup>
import { ref } from 'vue'
import { HomeIcon, UserIcon, DocumentTextIcon, FolderIcon, StarIcon } from '@heroicons/vue/24/solid'

const props = defineProps({
  navItems: {
    type: Array,
    required: false,
    default: () => [
      { label: 'Home', link: '/', icon: HomeIcon },
      { label: 'About Me', link: '/about', icon: UserIcon },
      { label: 'Projects', link: '/projects', icon: FolderIcon },
      { label: 'Skills', link: '/skills', icon: StarIcon },
    ],
  },
  profile: {
    type: Object,
    required: false,
    default: () => ({
      name: 'SREYNEANG LOEUN',
      image: '/image/photo_2025-02-22_22-16-40.jpg',
    }),
  },
})

// mobile menu open state
const mobileMenuOpen = ref(false)
function toggleMobileMenu() {
  mobileMenuOpen.value = !mobileMenuOpen.value
}
</script>

<template>
  <header class="bg-[#ADD8FF] shadow fixed top-0 left-0 w-full z-50">
    <nav class="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
      <!-- Name on the Left -->
      <span class="font-bold text-gray-800 text-lg md:text-xl">{{ profile.name }}</span>

      <!-- Desktop Navigation Links -->
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

      <!-- Profile Image + Mobile Hamburger Menu -->
      <div class="flex items-center gap-4">
        <img
          :src="profile.image"
          :alt="profile.name"
          class="h-12 w-12 rounded-full object-cover border-2 border-white shadow-md"
        />
        <!-- Hamburger visible only on mobile -->
        <button
          @click="toggleMobileMenu"
          class="md:hidden text-gray-800 hover:text-blue-600 focus:outline-none"
          aria-label="Toggle menu"
        >
          <svg
            class="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>

    <!-- Mobile menu, shows when toggled -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-[#ADD8FF] px-4 py-4 space-y-3">
      <router-link
        v-for="navItem in navItems"
        :key="navItem.label"
        :to="navItem.link"
        class="block text-gray-800 hover:text-blue-600 font-medium transition flex items-center gap-2"
        @click="mobileMenuOpen = false"
      >
        <component :is="navItem.icon" class="h-5 w-5 text-blue-600" />
        {{ navItem.label }}
      </router-link>
    </div>
  </header>

  <main class="pt-16 bg-[#DDEDFF]">
    <section class="max-w-7xl mx-auto px-4 py-12 text-center">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Sreyneang Loeun</h1>
      <h2 class="text-3xl font-semibold text-gray-800 mb-4">Web Developer & Problem Solver</h2>
      <p class="text-lg text-gray-600">
        Creating seamless digital interfaces and backend systems with purpose and passion.
      </p>
    </section>
  </main>
</template>

<style scoped>
/* Tailwind's 'hidden md:flex' is already handling the nav visibility */
@media (max-width: 768px) {
  .hidden.md\:flex {
    display: none !important;
  }
}
@media (min-width: 768px) {
  .hidden.md\:flex {
    display: flex !important;
  }
}
</style>
