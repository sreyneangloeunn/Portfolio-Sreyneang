<script setup>
import Card from '@/components/Card.vue'
import { FolderIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';


</script>

<template>
  <main class="bg-[#EAF6FF] min-h-screen py-10 px-4">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
  <!-- Left Text Section -->
  <div class="bg-[#B4DCFF] p-8 rounded-lg shadow-lg w-full sm:w-[70vw] max-w-4xl mx-auto">
    <h1 class="text-4xl font-extrabold text-gray-900 mb-4 leading-snug">
  Hello, I’m <span class="text-red-600">Sreyneang Loeun</span><br />
  <span class="text-gray-800">Web Developer !!</span>
</h1>

<p class="text-md font-semibold text-gray-900 mb-4">
  <strong>Frontend & Backend</strong> | Passionate about building meaningful digital experiences
</p>

<p class="text-gray-700 mb-6">
  I’m passionate about crafting elegant web applications that combine clean, intuitive front-end design with solid, scalable back-end functionality.
</p>

<p class="text-gray-700 mb-6">
  As a web development student, I have developed skills in both front-end and back-end technologies, allowing me to create seamless and efficient full-stack web applications. I enjoy learning and applying best practices to deliver user-friendly and reliable digital solutions.
</p>


     <div class="flex flex-wrap justify-center gap-4">
    <!-- Project -->
    <router-link
      to="/project"
      class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 group"
    >
      <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
        <FolderIcon class="w-5 h-5 text-blue-600" />
      </div>
      <span class="text-xs font-medium text-gray-700">Project</span>
    </router-link>

    <!-- Resume -->
    <router-link
      to="/resume"
      class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 group"
    >
      <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
        <DocumentTextIcon class="w-5 h-5 text-blue-600" />
      </div>
      <span class="text-xs font-medium text-gray-700">Resume</span>
    </router-link>

    <!-- Contact Me -->
    <router-link
      to="/contact"
      class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 group"
    >
      <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-110 transition-transform">
        <EnvelopeIcon class="w-5 h-5 text-[#00AEEF]" />
      </div>
      <span class="text-xs font-medium text-[#00AEEF]">Contact Me</span>
    </router-link>
  </div>
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
        <a
          href="https://www.facebook.com/sreyneang.loeun"
          target="_blank"
          rel="noopener"
          class="hover:scale-110 transition"
        >
          <img src="@/assets/icon/facebook.svg" alt="Facebook" class="w-7 h-7" />
        </a>
       <a
          href="mailto:loeurnsreyneang05052006@gmail.com"
          class="hover:scale-110 transition"
        >
          <img src="@/assets/icon/google.svg" alt="Email" class="w-7 h-7" />
        </a>
        <a
          href="https://t.me/SreyneangLoeun"
          target="_blank"
          rel="noopener"
          class="hover:scale-110 transition"
        >
          <img src="@/assets/icon/telegram.svg" alt="Telegram" class="w-7 h-7" />
        </a>
        <a
          href="https://www.linkedin.com/in/sreyneang-loeun-58b129343/"
          target="_blank"
          rel="noopener"
          class="hover:scale-110 transition"
        >
          <img src="@/assets/icon/linkedin.svg" alt="LinkedIn" class="w-7 h-7" />
        </a>
        <a
          href="https://www.instagram.com/loeurnsreyneang/"
          target="_blank"
          rel="noopener"
          class="hover:scale-110 transition"
        >
          <img src="@/assets/icon/instagram.svg" alt="Instagram" class="w-7 h-7" />
        </a>
      </div>
    </div>

    </div>
  </main>

  
</template>
