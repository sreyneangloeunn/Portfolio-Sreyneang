<script setup>
import Card from '@/components/Card.vue'

import {
  ArrowRight as ArrowRightIcon,
  User,
  Headphones,
  BookOpenText,
  MessageSquareQuote,
  FileText,
  Folder
} from 'lucide-vue-next'

const cards = [
  { title: 'About Me', icon: User, link: '/about' },
  { title: 'Services', icon: Headphones, link: '/services' },
  { title: 'Blog', icon: BookOpenText, link: '/blog' },
  { title: 'Testimonials', icon: MessageSquareQuote, link: '/testimonials' },
  { title: 'Resume', icon: FileText, link: '/resume' },
  { title: 'Projects', icon: Folder, link: '/projects' },
]
</script>

<template>
  <main class="bg-[#EAF6FF] min-h-screen py-10 px-4">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">

      <!-- Left Text Section -->
      <div class="bg-[#B4DCFF] p-8 rounded-lg shadow-lg w-full lg:w-2/3">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
          Hello, I’m <span class="text-red-600">Sreyneang Loeun</span><br />
          <span class="text-gray-800">Web Developer !!</span>
        </h1>

        <p class="text-md font-semibold text-gray-900 mb-4">
          <strong>Frontend & Backend</strong> | Passionate about building meaningful digital experiences
        </p>

        <p class="text-gray-700 mb-6">
          I’m passionate about crafting elegant web applications that combine clean, intuitive front-end design with strong, scalable back-end functionality. I enjoy solving complex problems and turning ideas into seamless digital experiences that users love. Continuously learning and evolving, I aim to build solutions that are both beautiful and powerful.
        </p>

       <div class="flex justify-center gap-4 bg-gray-100 p-4 rounded-2xl w-fit mx-auto">
  <!-- Projects -->
  <a href="#projects" class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-sm hover:shadow-md transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L8 19.5m4-2.5l1.75 2.5m-5.5-8h4.5M9 12V7m6 5h-2.25M15 12v-3.75M12 3v4.5m-7 5v1.5A2.25 2.25 0 007.25 16H9" />
    </svg>
    <span class="text-[12px] font-medium text-gray-700">Project</span>
  </a>

  <!-- Resume -->
  <a href="#resume" class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-sm hover:shadow-md transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 4h14v16H5V4z" />
    </svg>
    <span class="text-[12px] font-medium text-gray-700">Resume</span>
  </a>

  <!-- Testimonials -->
  <a href="#testimonials" class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-sm hover:shadow-md transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mb-1 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8h2a2 2 0 012 2v7h-2a2 2 0 01-2-2V8zM7 8H5a2 2 0 00-2 2v7h2a2 2 0 002-2V8z" />
    </svg>
    <span class="text-[12px] font-medium text-gray-700">Testimonials</span>
  </a>
</div>


      </div>

      <!-- Right Photo Section -->
      <div class="w-full lg:w-1/3 flex justify-center">
        <img
          src="/image/image-removebg-preview.png"
          alt="Sreyneang Loeun"
          class="rounded-xl h-[490px] w-auto shadow-2xl object-cover"
        />
      </div>
    </div>

    <!-- Social Section -->
    <div class="mt-10 bg-[#CFE9FF] p-6 rounded-lg shadow-md text-center w-[86%] mx-auto">
      <h2 class="text-xl font-bold text-gray-800 mb-2">
        🌟 Let’s Stay <span class="text-red-600">Connected!!</span>
      </h2>

      <div class="flex flex-col items-center gap-4">
        <p class="text-gray-700 max-w-2xl text-base text-center">
          Follow me on social media for creative inspiration, behind the scenes content, and updates on my latest work.
        </p>

        <div class="flex justify-center gap-6 mt-2">
          <a href="#" class="hover:scale-110 transition"><img src="@/assets/icon/facebook.svg" alt="Facebook" class="w-7 h-7" /></a>
          <a href="#" class="hover:scale-110 transition"><img src="@/assets/icon/google.svg" alt="Google" class="w-7 h-7" /></a>
          <a href="#" class="hover:scale-110 transition"><img src="@/assets/icon/telegram.svg" alt="Telegram" class="w-7 h-7" /></a>
          <a href="#" class="hover:scale-110 transition"><img src="@/assets/icon/linkedin.svg" alt="LinkedIn" class="w-7 h-7" /></a>
          <a href="#" class="hover:scale-110 transition"><img src="@/assets/icon/instagram.svg" alt="Instagram" class="w-7 h-7" /></a>
        </div>
      </div>
    </div>
  </main>

  <section class="bg-white py-12 px-4 border-t border-gray-200">
    <div class="max-w-5xl mx-auto text-center mb-8">
      <h2 class="text-2xl font-bold text-gray-900 underline underline-offset-4">
        Know More About Me
      </h2>
    </div>

    <div
      class="bg-[#ADD8FF] rounded-lg p-6 grid grid-cols-1 sm:grid-cols-2 gap-6 mx-auto"
      style="width: 84vw;"
    >
      <router-link
        v-for="card in cards"
        :key="card.title"
        :to="card.link"
        class="flex items-center justify-between bg-white rounded-xl px-4 py-3 shadow hover:shadow-lg transition hover:scale-[1.01]"
      >
        <div class="flex items-center gap-3">
          <component :is="card.icon" class="text-2xl text-black" />
          <span class="text-lg font-semibold text-gray-800">{{ card.title }}</span>
        </div>
        <div class="text-black text-xl">
          <ArrowRightIcon />
        </div>
      </router-link>
    </div>

    <footer class="mt-10 bg-[#DDEDFF] py-4">
      <div class="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <div class="flex items-center gap-3">
          <img src="/image/photo_2025-02-22_22-16-40.jpg" alt="Sreyneang Loeun" class="h-10 w-10 rounded-full object-cover border-2 border-white shadow" />
          <span class="font-bold">SREYNEANG LOEUN</span>
        </div>
        <span class="text-gray-600 mt-2 sm:mt-0">Design By: Sreyneang Loeun</span>
      </div>
    </footer>
  </section>
</template>
