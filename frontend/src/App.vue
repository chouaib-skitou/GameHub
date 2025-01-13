<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/navigation/Header.vue';
import Footer from '@/components/navigation/Footer.vue';
</script>