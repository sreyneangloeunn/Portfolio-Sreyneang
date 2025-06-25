<template>
  <main class="bg-[#EAF6FF] min-h-screen py-10 px-4">
    <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
      <!-- Left Text Section -->
      <div class="bg-[#B4DCFF] p-8 rounded-xl shadow-lg w-full sm:w-[70vw] max-w-4xl mx-auto animate-fade-in">
        <h1 class="text-4xl font-extrabold text-gray-900 mb-4 leading-snug animate-slide-up">
          Hello, I’m <span class="text-red-600">Sreyneang Loeun</span><br />
          <span class="text-gray-800">Web Developer !!</span>
        </h1>
        <p class="text-md font-semibold text-gray-900 mb-4 animate-slide-up delay-200">
          <strong>Frontend & Backend</strong> | Passionate about building meaningful digital experiences
        </p>
        <p class="text-gray-700 mb-6 animate-slide-up delay-400">
          I’m passionate about crafting elegant web applications that combine clean, intuitive front-end design with solid, scalable back-end functionality.
        </p>
        <p class="text-gray-700 mb-6 animate-slide-up delay-600">
          As a web development student, I have developed skills in both front-end and back-end technologies, allowing me to create seamless and efficient full-stack web applications. I enjoy learning and applying best practices to deliver user-friendly and reliable digital solutions.
        </p>
        <div class="flex flex-wrap justify-center gap-6 animate-fade-in-up delay-800">
          <!-- Project -->
          <a
            href="https://github.com/sreyneangloeunn"
            target="_blank"
            rel="noopener noreferrer"
            class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out group"
          >
            <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-125 transition-transform duration-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="w-5 h-5 text-blue-600"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 0.297c-6.627 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.725-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.729.083-.729 1.205.085 1.84 1.236 1.84 1.236 1.07 1.835 2.807 1.305 3.492.998.108-.776.418-1.305.762-1.605-2.665-.3-5.467-1.332-5.467-5.93 0-1.31.468-2.382 1.236-3.222-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.301 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.287-1.23 3.287-1.23.655 1.653.243 2.873.12 3.176.77.84 1.236 1.912 1.236 3.222 0 4.61-2.807 5.625-5.48 5.92.429.372.816 1.102.816 2.222 0 1.606-.015 2.896-.015 3.286 0 .322.216.697.825.577 4.765-1.587 8.2-6.084 8.2-11.387 0-6.627-5.373-12-12-12z"
                />
              </svg>
            </div>
            <span class="text-xs font-medium text-gray-700">GitHub</span>
          </a>
          <!-- Resume -->
          <router-link
            to="/resume"
            class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out group"
          >
            <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-125 transition-transform duration-300">
              <DocumentTextIcon class="w-5 h-5 text-blue-600" />
            </div>
            <span class="text-xs font-medium text-gray-700">Resume/CV</span>
          </router-link>
          <!-- Contact Me -->
          <router-link
            to="/contact"
            class="flex flex-col items-center justify-center bg-white rounded-xl w-20 h-20 shadow-md hover:shadow-xl hover:scale-110 transition-transform duration-300 ease-out group"
          >
            <div class="bg-[#DDEDFF] p-2 rounded-full mb-1 group-hover:scale-125 transition-transform duration-300">
              <EnvelopeIcon class="w-5 h-5 text-[#00AEEF]" />
            </div>
            <span class="text-xs font-medium text-[#00AEEF]">Contact Me</span>
          </router-link>
        </div>
      </div>

      <!-- Right Photo Section -->
      <div class="w-full lg:w-1/3 flex justify-center animate-fade-in-right">
        <img
          src="/image/image-removebg-preview.png"
          alt="Sreyneang Loeun"
          class="rounded-xl h-[490px] w-auto shadow-2xl object-cover hover:scale-105 transition-transform duration-500 ease-in-out"
        />
      </div>
    </div>

    <!-- Social Section -->
    <div class="mt-10 bg-[#CFE9FF] p-6 rounded-xl shadow-md text-center w-[86%] mx-auto animate-fade-in-up delay-1000">
      <h2 class="text-xl font-bold text-gray-800 mb-2 animate-pulse">
        🌟 Let’s Stay <span class="text-red-600">Connected!!</span>
      </h2>
      <div class="flex flex-col items-center gap-4">
        <p class="text-gray-700 max-w-2xl text-base text-center animate-slide-up delay-1200">
          Follow me on social media for creative inspiration, behind the scenes content, and updates on my latest work.
        </p>
        <div class="flex justify-center gap-6 mt-2">
          <a
            href="https://www.facebook.com/sreyneang.loeun"
            target="_blank"
            rel="noopener"
            class="hover:scale-125 transition-transform duration-300"
          >
            <img src="@/assets/icon/facebook.svg" alt="Facebook" class="w-7 h-7" />
          </a>
          <a
            href="mailto:loeurnsreyneang05052006@gmail.com"
            class="hover:scale-125 transition-transform duration-300"
          >
            <img src="@/assets/icon/google.svg" alt="Email" class="w-7 h-7" />
          </a>
          <a
            href="https://t.me/SreyneangLoeun"
            target="_blank"
            rel="noopener"
            class="hover:scale-125 transition-transform duration-300"
          >
            <img src="@/assets/icon/telegram.svg" alt="Telegram" class="w-7 h-7" />
          </a>
          <a
            href="https://www.linkedin.com/in/sreyneang-loeun-58b129343/"
            target="_blank"
            rel="noopener"
            class="hover:scale-125 transition-transform duration-300"
          >
            <img src="@/assets/icon/linkedin.svg" alt="LinkedIn" class="w-7 h-7" />
          </a>
          <a
            href="https://www.instagram.com/loeurnsreyneang/"
            target="_blank"
            rel="noopener"
            class="hover:scale-125 transition-transform duration-300"
          >
            <img src="@/assets/icon/instagram.svg" alt="Instagram" class="w-7 h-7" />
          </a>
        </div>
      </div>
    </div>
  </main>
</template>

<script setup>
import Card from '@/components/Card.vue';
import { FolderIcon, DocumentTextIcon, EnvelopeIcon } from '@heroicons/vue/24/solid';
</script>

<style scoped>
@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
@keyframes slideUp {
  from { transform: translateY(20px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fadeInUp {
  from { transform: translateY(30px); opacity: 0; }
  to { transform: translateY(0); opacity: 1; }
}
@keyframes fadeInRight {
  from { transform: translateX(50px); opacity: 0; }
  to { transform: translateX(0); opacity: 1; }
}
@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.05); }
}

.animate-fade-in {
  animation: fadeIn 1s ease-out;
}
.animate-slide-up {
  animation: slideUp 1s ease-out;
}
.animate-fade-in-up {
  animation: fadeInUp 1s ease-out;
}
.animate-fade-in-right {
  animation: fadeInRight 1s ease-out;
}
.animate-pulse {
  animation: pulse 2s infinite;
}

.delay-200 { animation-delay: 0.2s; }
.delay-400 { animation-delay: 0.4s; }
.delay-600 { animation-delay: 0.6s; }
.delay-800 { animation-delay: 0.8s; }
.delay-1000 { animation-delay: 1s; }
.delay-1200 { animation-delay: 1.2s; }
</style>