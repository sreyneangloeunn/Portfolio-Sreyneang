<template>
  <div class="projects-page max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-200 dark:from-gray-900 dark:to-gray-800">
    <h1 class="text-4xl font-bold text-blue-800 dark:text-blue-300 mb-4 text-center animate__animated animate__fadeInDown">🚀 My Projects</h1>
    <p class="text-lg text-gray-600 dark:text-gray-400 mb-12 text-center max-w-2xl mx-auto animate__animated animate__fadeIn animate__delay-1s">
      Here are some of the projects I've worked on, both individually and in teams.
    </p>

    <div class="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div
        v-for="(project, index) in projects"
        :key="index"
        class="project-card bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2 animate__animated animate__fadeInUp"
      >
        <!-- Image (optional) -->
        <img v-if="project.image" :src="project.image" alt="Project image"
          class="w-full h-48 object-cover rounded-lg mb-4" />

        <!-- Title & Date -->
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ project.title }}</h2>
        <p class="text-gray-500 text-sm mb-2 flex items-center gap-2">
          <CalendarIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" />
          {{ project.date }}
        </p>

        <!-- Description -->
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">
          {{ project.description }}
        </p>

        <!-- Tech Stack -->
        <div class="tech-stack flex flex-wrap gap-2 mb-4">
          <span
            v-for="(tech, i) in project.tech"
            :key="i"
            class="tech-badge flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-md"
          >
            <CodeBracketIcon class="w-4 h-4" /> {{ tech }}
          </span>
        </div>

        <!-- Links -->
        <div class="project-links flex flex-col sm:flex-row gap-4">
          <a
            :href="project.repo"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            <LinkIcon class="w-5 h-5" /> Repository
          </a>

          <!-- YouTube demo link -->
          <a
            v-if="project.video"
            :href="project.video"
            target="_blank"
            rel="noopener noreferrer"
            class="flex items-center justify-center gap-2 bg-red-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-red-700 transition-colors"
          >
            <GlobeAltIcon class="w-5 h-5" /> YouTube
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/24/outline'
import { GlobeAltIcon } from '@heroicons/vue/24/solid'

const projects = [
  {
    title: 'WEB DESIGN PROJECT',
    date: 'October 21, 2024 – August 6, 2024',
    description:
      'Developed a static canteen website with menu display, schedule, and history. Team of 3.',
    tech: ['HTML', 'CSS', 'Sass', 'GitHub', 'Firebase'],
    repo: 'https://github.com/Soklennak/newproject.git',
    image: 'https://cdn.prod.website-files.com/6443d6d96a788f6942166567/64710dafbb86adbb8a096e2d_Website-Design-new.jpeg',
    video: 'https://www.youtube.com/watch?v=ysz5S6PUM-U', // Example
  },
  {
    title: 'JAVASCRIPT PROJECT',
    date: 'January 14, 2025 – January 29, 2025',
    description:
      'Designed to help users monitor their income and expenses for improved financial management. Worked as a team of 3.',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    repo: 'https://github.com/Mean-UN/Project-JavaScript-G14.git',
    image: 'https://i.ytimg.com/vi/vEROU2XtPR8/maxresdefault.jpg',

  },
  {
    title: 'ALGORITHM PROJECT',
    date: 'November 18, 2024 – November 28, 2024',
    description:
      'Developed a desktop Video Downloader and Editor app supporting YouTube and Facebook using Python (Tkinter). Team of 3.',
    tech: ['Python', 'Tkinter'],
    repo: 'https://github.com/Sreyneath-Rom/Video-Downloader-Editing.git',
    image: 'https://i.ytimg.com/vi/-Dbba2izRZU/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCLEjO98F6tStla26IvfynmJnoXdw',
  },
  {
    title: 'POS SYSTEM PROJECT',
    date: 'November 18, 2024 – November 28, 2024',
    description:
      'Created a Point-of-Sale (POS) system for small business stock management and receipt printing. Team of 5.',
    tech: ['Bootstrap 5', 'PHP (MVC)', 'MySQL', 'AgileScrum (Jira)', 'JavaScript', 'GitHub'],
    repo: 'https://github.com/poleak-theng065/POS-Management-System-VC1.git',
    image: 'https://arirms.com/wp-content/uploads/2024/10/Featured-Image-CRM-vs-POS-Which-is-the-Best-Software-for-Retail-Businesses.jpg',
    video: 'https://www.youtube.com/watch?v=8yo-hf6se8U',
  },
  {
    title: 'WEB CLUB PROJECT',
    date: 'March 10, 2025 – April 2, 2025',
    description:
      'Developed a static website for basic computer usage (BCU) and web design fundamentals.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'GitHub', 'Netlify'],
    repo: 'https://github.com/samounsuon/Web-Club-Project.git',
    image: 'https://d3mxt5v3yxgcsr.cloudfront.net/courses/12247/course_12247_image.png',
  },
]
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css';
</style>
