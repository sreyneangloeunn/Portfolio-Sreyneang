import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PortfolioView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactView from '@/views/ContactView.vue'
import SkillView from '@/views/SkillView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioView,
  },
  {
    path: '/resume',
    name: 'Resume',
    component: ResumeView,
  },
  {
    path: '/project',
    name: 'Project',
    component: ProjectView,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
  },
  {
    path: '/skill',
    name: 'Skill',
    component: SkillView,
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutMeView.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    return new Promise((resolve) => {
      // If savedPosition is available (back/forward navigation), use it immediately
      if (savedPosition) {
        resolve(savedPosition)
      } else {
        // Use smooth scrolling to top
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        })
        // Wait for the scroll to finish (roughly)
        setTimeout(() => {
          resolve({ left: 0, top: 0 })
        }, 300) // 300ms matches most smooth scroll duration
      }
    })
  },
})

export default router
