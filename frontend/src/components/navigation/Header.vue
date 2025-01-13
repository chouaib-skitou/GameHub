<template>
    <nav class="container mx-auto px-6 py-4">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <router-link to="/" class="flex items-center">
            <Gamepad2 class="w-8 h-8 text-purple-500 mr-2" />
            <span class="text-2xl font-bold">GameHub</span>
          </router-link>
        </div>
        
        <!-- Desktop Menu -->
        <div class="hidden md:flex space-x-4">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="hover:text-purple-400 transition-colors"
          >
            {{ item.name }}
          </router-link>
        </div>
        
        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <button @click="toggleMobileMenu" class="text-white focus:outline-none">
            <Menu v-if="!isMobileMenuOpen" class="w-6 h-6" />
            <X v-else class="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <!-- Mobile Menu -->
      <div v-if="isMobileMenuOpen" class="md:hidden mt-4">
        <div class="flex flex-col space-y-2">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="block py-2 px-4 text-sm hover:bg-gray-700 rounded transition-colors"
            @click="closeMobileMenu"
          >
            {{ item.name }}
          </router-link>
        </div>
      </div>
    </nav>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  import { Gamepad2, Menu, X } from 'lucide-vue-next'
  
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'Games', path: '/games' },
    { name: 'About', path: '/about' },
    { name: 'Login', path: '/login' },
    // { name: 'Community', path: '/community' },
    // { name: 'Support', path: '/support' }
  ]
  
  const isMobileMenuOpen = ref(false)
  
  const toggleMobileMenu = () => {
    isMobileMenuOpen.value = !isMobileMenuOpen.value
  }
  
  const closeMobileMenu = () => {
    isMobileMenuOpen.value = false
  }
  </script>
  
  <style scoped>
  @media (max-width: 768px) {
    .router-link-active {
      background-color: rgba(107, 114, 128, 0.5);
    }
  }
  </style>