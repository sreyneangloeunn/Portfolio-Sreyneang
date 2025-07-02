<template>
  <section class="bg-[#f0f7ff] min-h-screen p-8">
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-800 animate__animated animate__fadeIn animate__delay-1s">My Skills</h1>
      <div class="h-1 w-24 bg-blue-600 mx-auto my-2 rounded"></div>
      <p class="text-gray-500 animate__animated animate__fadeIn animate__delay-2s">Technologies and tools I use to bring ideas to life</p>
    </div>

    <SkillCategory title="Programming Languages" :skills="languages" />
    <SkillCategory title="Frameworks & Libraries" :skills="frameworks" />
    <SkillCategory title="Tools & Platforms" :skills="tools" />
    <SoftSkillCategory title="Soft Skills" :skills="softSkills" />
  </section>
</template>

<script setup>
import SkillCategory from '@/components/SkillCategory.vue'
import SoftSkillCategory from '@/components/SoftSkill.vue'

// Include Animate.css via CDN in your main index.html
const languages = [
  { name: 'HTML5', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS3', icon: 'https://pngdownload.io/wp-content/uploads/2023/12/CSS-Logo-PNG-Symbol-for-Web-Development-Transparent-jpg.webp' },
  { name: 'JavaScript', icon: 'https://skillforge.com/wp-content/uploads/2020/10/javascript-266x300.png' },
  { name: 'PHP', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/PHP-logo.svg/1200px-PHP-logo.svg.png' },
  { name: 'Python', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Python.svg/1200px-Python.svg.png' },
  { name: 'TypeScript(OOP)', icon: 'https://i.ytimg.com/vi/IeADHs5eQtI/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLANgvO8-0kOsgs8IrNCqjJmDog4YQ' },
]

const frameworks = [
  { name: 'Vue.js', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png' },
  { name: 'Laravel', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/800px-Laravel.svg.png' },
  { name: 'Bootstrap', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/1200px-Bootstrap_logo.svg.png    ' },
  { name: 'Tailwind CSS', icon: 'https://avatars.githubusercontent.com/u/30317862?s=200&v=4' },
  { name: 'Node.js', icon: 'https://www.mindrops.com/images/nodejs-image.webp' },
]

const tools = [
  { name: 'GitHub', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s' },
  { name: 'Figma', icon: 'https://yt3.googleusercontent.com/ngETsVZZAu_yzAo9iGz-P9Fxd6Bk1gCSI5l3bMDftuADKM-zRsn689V8vzHuTBDZbfw061M0dw=s900-c-k-c0x00ffffff-no-rj' },
  { name: 'Postman', icon: 'https://media.imgcdn.org/repo/2024/03/postman/65f0b46ad4a8b-postman-Icon.webp' },
  { name: 'Firebase', icon: 'https://www.gstatic.com/devrel-devsite/prod/va55008f56463f12ba1a0c4ec3fdc81dac4d4d331f95ef7b209d2570e7d9e879b/firebase/images/touchicon-180.png' },
  { name: 'ChatGPT', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdM9MEQ0ExL1PmInT3U5I8v63YXBEdoIT0Q&s' },
  { name: 'Jira', icon: 'https://cdn.prod.website-files.com/627fe3133bae75e7bfbb9b2a/66922c2fb9caea629bfc07ed_jira-1.svg' },
  { name: 'AWS', icon: 'https://avatars.githubusercontent.com/u/2232217?s=280&v=4' },
  { name: 'VS Code', icon: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/1200px-Visual_Studio_Code_1.35_icon.svg.png' },
  { name: 'Vercel', icon: 'https://www.drupal.org/files/styles/grid-3-2x/public/project-images/vercel-deploy.png?itok=AyGlptNc' },
  { name: 'Netlify', icon: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrvwgpiqc9FrNeVcW-NQekpPIwIcktyys_nw&s' },
  { name: 'Grok', icon: 'https://play-lh.googleusercontent.com/dQRKhi30KpzG3gww3TdVLzyIAVuOAWylnAcgnEUxqfpm2A8dEt2sgApVvtKAy-DO8aI' },
]

const softSkills = [
  "🤝 Teamwork",
  " Time Management",
  "🧭 Leadership",
  "🧠 Problem-Solving",
  "🎯 High Commitment",
  "🚀 High Motivation",
  "🗣️ Communication",
  "🔄 Adaptability",
  "👥 Collaboration"
]
</script>