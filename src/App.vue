<script setup>
import Navbar from './components/Layout/Navbar.vue'
import Footer from './components/Layout/Footer.vue'
import { HomeIcon, UserIcon, FolderIcon, EnvelopeIcon, DocumentTextIcon } from '@heroicons/vue/24/outline'

const profile = {
  name: 'SREYNEANG LOEUN',
  image: '/image/photo_2025-02-22_22-16-40.jpg',
}

const navItems = [
  { label: 'My Portfolio', link: '/', icon: HomeIcon },
  { label: 'About Me', link: '/about', icon: UserIcon },
  { label: 'Skills', link: '/skill', icon: DocumentTextIcon },
  { label: 'Projects', link: '/project', icon: FolderIcon },
  { label: 'Contact', link: '/contact', icon: EnvelopeIcon },
]
</script>

<template>
  <Navbar :profile="profile" :navItems="navItems" />
  <RouterView />
  <Footer />
</template>
