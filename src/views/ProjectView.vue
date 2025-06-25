<template>
  <div class="projects-page">
    <h1>🚀 My Projects</h1>
    <p class="subtitle">Here are some of the projects I've worked on, both individually and in teams.</p>

    <div class="project-grid">
      <div v-for="(project, index) in projects" :key="index" class="project-card">
        <h2>{{ project.title }}</h2>
        <p class="project-date">{{ project.date }}</p>
        <p class="description">{{ project.description }}</p>
        <div class="tech-stack">
          <span v-for="(tech, i) in project.tech" :key="i" class="tech-badge">{{ tech }}</span>
        </div>
        <div class="project-links">
          <a :href="project.repo" target="_blank" rel="noopener">🔗 Repository</a>
          <a v-if="project.demo" :href="project.demo" target="_blank" rel="noopener">🌐 Live Demo</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
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
      'Created a Point-of-Sale (POS) system for small business stock management and receipt printing. Team of 3.',
    tech: ['Bootstrap 5', 'PHP (MVC)', 'MySQL', 'AgileScrum (Jira)', 'JavaScript', 'GitHub'],
    repo: 'https://github.com/poleak-theng065/POS-Management-System-VC1.git',
  },
  {
    title: 'Web Club Project',
    date: 'March 10, 2025 – April 2, 2025',
    description:
      'Developed a static website for basic computer usage (BCU) and web design fundamentals.',
    tech: ['HTML', 'CSS', 'Bootstrap', 'GitHub', 'Netlify'],
    repo: 'https://github.com/samounsuon/Web-Club-Project.git',
  },
];
</script>

<style scoped>
.projects-page {
  padding: 40px 20px;
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.projects-page h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 10px;
}

.subtitle {
  color: #666;
  margin-bottom: 40px;
}

.project-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 24px;
}

.project-card {
  background: #fff;
  border-radius: 16px;
  padding: 24px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.06);
  transition: transform 0.2s ease;
  text-align: left;
}

.project-card:hover {
  transform: translateY(-4px);
}

.project-card h2 {
  font-size: 1.4rem;
  margin-bottom: 4px;
  color: #1a1a1a;
}

.project-date {
  font-size: 0.9rem;
  color: #999;
  margin-bottom: 10px;
}

.description {
  color: #444;
  margin-bottom: 12px;
}

.tech-stack {
  margin-bottom: 16px;
}

.tech-badge {
  display: inline-block;
  background: #f1f1f1;
  color: #333;
  border-radius: 6px;
  padding: 4px 10px;
  font-size: 0.85rem;
  margin: 0 4px 6px 0;
}

.project-links a {
  margin-right: 12px;
  color: #007bff;
  text-decoration: none;
  font-weight: 600;
}

.project-links a:hover {
  text-decoration: underline;
}
</style>
