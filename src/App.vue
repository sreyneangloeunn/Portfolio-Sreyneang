<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navbar from './components/layout/Navbar.vue';
</script>

<template>
    <Navbar
    logo="/image/photo_2025-02-22_22-16-40.jpg"
    name="Sreyneang Loeun"
    role="Full Stack Developer"
  />
  <RouterView />
</template>

