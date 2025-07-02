<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/Layout/Navbar.vue'
import Footer from './components/Layout/Footer.vue'
import {
  HomeIcon,
  UserIcon,
  FolderIcon,
  EnvelopeIcon,
  // HeadphonesIcon,
  // BookOpenIcon,
  DocumentTextIcon
} from '@heroicons/vue/24/outline'

const profile = {
  name: 'SREYNEANG LOEUN',
  image: '/image/photo_2025-02-22_22-16-40.jpg'
}

const navItems = [
  { label: 'Home', link: '/', icon: HomeIcon },
  { label: 'About Me', link: '/about', icon: UserIcon },
  // { label: 'Services', link: '/services', icon: HeadphonesIcon },
  // { label: 'Blog', link: '/blog', icon: BookOpenIcon },
  { label: 'Skills', link: '/skill', icon: DocumentTextIcon },
  { label: 'Projects', link: '/project', icon: FolderIcon },
  { label: 'Contact', link: '/contact', icon: EnvelopeIcon }
]
</script>

<template>
    <Navbar :profile="profile" :navItems="navItems" />
  <RouterView />

  <Footer/>
</template>