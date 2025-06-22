<script setup>
import Card from '@/components/Card.vue'
import photo from '@/../public/image/image-removebg-preview.png' // adjust path if needed

import {
  ArrowRight as ArrowRightIcon,
  User,
  Headphones,
  BookOpenText,
  MessageSquareQuote,
  FileText,
  Folder
} from 'lucide-vue-next'

// Link definitions for routing
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

 <div class="flex flex-wrap gap-6 justify-center">
  <Card
    title="Projects"
    description="Discover my creative work."
    buttonText="Explore"
    link="#projects"
    :buttonClass="`
      bg-gradient-to-r from-purple-500 to-indigo-600 
      text-white text-xs font-semibold px-4 py-1.5 
      rounded-full shadow-lg 
      hover:from-purple-600 hover:to-indigo-700 
      active:scale-95 
      transition-all duration-300
      `
    "
    class="max-w-[14rem] p-4 bg-white rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
  />
  <Card
    title="Resume"
    description="See my skills & experience."
    buttonText="View"
    link="#resume"
    :buttonClass="`
      bg-gradient-to-r from-purple-500 to-indigo-600 
      text-white text-xs font-semibold px-4 py-1.5 
      rounded-full shadow-lg 
      hover:from-purple-600 hover:to-indigo-700 
      active:scale-95 
      transition-all duration-300
      `
    "
    class="max-w-[14rem] p-4 bg-white rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
  />
  <Card
    title="Testimonials"
    description="What clients say."
    buttonText="Read"
    link="#testimonials"
    :buttonClass="`
      bg-gradient-to-r from-purple-500 to-indigo-600 
      text-white text-xs font-semibold px-4 py-1.5 
      rounded-full shadow-lg 
      hover:from-purple-600 hover:to-indigo-700 
      active:scale-95 
      transition-all duration-300
      `
    "
    class="max-w-[14rem] p-4 bg-white rounded-xl shadow-lg flex flex-col justify-between hover:shadow-2xl transition-shadow duration-300"
  />
</div>

</div>


      <!-- Right Photo Section -->
      <div class="w-full lg:w-1/3 flex justify-center">
      <img
        :src="photo"
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
      Let’s connect and grow together!
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
      <img src="../../public/image/photo_2025-02-22_22-16-40.jpg" alt="Sreyneang Loeun" class="h-10 w-10 rounded-full object-cover border-2 border-white shadow" />
      <span class="font-bold">SREYNEANG LOEUN</span>
    </div>
    <span class="text-gray-600 mt-2 sm:mt-0">Design By: Sreyneang Loeun</span>
  </div>
</footer>
  </section>
</template>
