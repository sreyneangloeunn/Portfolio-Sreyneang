import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/PortfolioView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import ResumeView from '../views/ResumeView.vue'
import ProjectView from '@/views/ProjectView.vue'
import ContactView from '@/views/ContactView.vue'
import SkillView from '@/views/SkillView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutMeView.vue'),
    },
  ],
})

export default router
