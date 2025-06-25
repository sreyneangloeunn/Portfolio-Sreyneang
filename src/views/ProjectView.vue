<template>
  <div class="projects-page max-w-6xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-gray-200">
    <h1 class="text-4xl font-bold text-blue-800 mb-4 text-center">🚀 My Projects</h1>
    <p class="text-lg text-gray-600 mb-12 text-center max-w-2xl mx-auto">
      Here are some of the projects I've worked on, both individually and in teams.
    </p>

    <div class="project-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      <div v-for="(project, index) in projects" :key="index" class="project-card bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-2">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-2">{{ project.title }}</h2>
        <p class="text-gray-500 text-sm mb-2 flex items-center gap-2">
          <CalendarIcon class="w-5 h-5 text-blue-600 dark:text-blue-400" /> {{ project.date }}
        </p>
        <p class="text-gray-700 dark:text-gray-300 mb-4 text-base leading-relaxed">{{ project.description }}</p>
        <div class="tech-stack flex flex-wrap gap-2 mb-4">
          <span v-for="(tech, i) in project.tech" :key="i" class="tech-badge flex items-center gap-1.5 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 text-sm font-medium px-3 py-1 rounded-md">
            <CodeBracketIcon class="w-4 h-4" /> {{ tech }}
          </span>
        </div>
        <div class="project-links flex flex-col sm:flex-row gap-4">
          <a :href="project.repo" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-blue-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors">
            <LinkIcon class="w-5 h-5" /> Repository
          </a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener noreferrer" class="flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-emerald-700 transition-colors">
            <GlobeAltIcon class="w-5 h-5" /> Live Demo
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { CalendarIcon, CodeBracketIcon, LinkIcon } from '@heroicons/vue/24/outline';
import { GlobeAltIcon } from '@heroicons/vue/24/solid';

const projects = [
  {
    title: 'WEB DESIGN PROJECT',
    date: 'October 21, 2024 – August 6, 2024',
    description:
      'Developed a static canteen website with menu display, schedule, and history. Team of 3.',
    tech: ['HTML', 'CSS', 'Sass', 'GitHub', 'Firebase'],
    repo: 'https://github.com/Soklennak/newproject.git',
  },
  {
    title: 'JAVASCRIPT PROJECT',
    date: 'January 14, 2025 – January 29, 2025',
    description:
      'Designed to help users monitor their income and expenses for improved financial management. Worked as a team of 3.',
    tech: ['JavaScript', 'HTML', 'CSS', 'GitHub'],
    repo: 'https://github.com/Mean-UN/Project-JavaScript-G14.git',
  },
  {
    title: 'ALGORITHM PROJECT',
    date: 'November 18, 2024 – November 28, 2024',
    description:
      'Developed a desktop Video Downloader and Editor app supporting YouTube and Facebook using Python (Tkinter). Team of 3.',
    tech: ['Python', 'Tkinter'],
    repo: 'https://github.com/Sreyneath-Rom/Video-Downloader-Editing.git',
  },
  {
    title: 'POS SYSTEM PROJECT',
    date: 'November 18, 2024 – November 28, 2024',
    description:
      'Created a Point-of-Sale (POS) system for small business stock management and receipt printing. Team of 5.',
    tech: ['Bootstrap 5', 'PHP (MVC)', 'MySQL', 'AgileScrum (Jira)', 'JavaScript', 'GitHub'],
    repo: 'https://github.com/poleak-theng065/POS-Management-System-VC1.git',
  },
  {
    title: 'WEB CLUB PROJECT',
    date: 'March 10, 2025 – April 2, 2025',
    description:
      'Developed a static website for basic computer usage (BCU) and web design fundamentals.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'GitHub', 'Netlify'],
    repo: 'https://github.com/samounsuon/Web-Club-Project.git',
  },
];
</script>