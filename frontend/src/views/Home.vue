<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <!-- Navigation -->
      <nav class="container mx-auto px-6 py-4">
        <div class="flex justify-between items-center">
          <div class="flex items-center">
            <Gamepad2 class="w-8 h-8 text-purple-500 mr-2" />
            <span class="text-2xl font-bold">GameHub</span>
          </div>
          <div class="hidden md:flex space-x-4">
            <a href="#" v-for="item in ['Games', 'About', 'Community', 'Support']" :key="item" class="hover:text-purple-400 transition-colors">{{ item }}</a>
          </div>
        </div>
      </nav>
  
      <!-- Hero Section -->
      <header class="container mx-auto px-6 py-16 text-center">
        <h1 class="text-5xl md:text-6xl font-bold mb-4">Welcome to GameHub</h1>
        <p class="text-xl mb-8">Your one-stop destination for awesome online games!</p>
        <button class="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Start Playing
        </button>
      </header>
  
      <!-- Featured Games -->
      <section class="container mx-auto px-6 py-12">
        <h2 class="text-3xl font-bold mb-8 text-center">Featured Games</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="game in featuredGames" :key="game.name" class="bg-gray-800 rounded-lg p-6 hover:shadow-lg transition-shadow">
            <component :is="game.icon" class="w-12 h-12 text-purple-500 mb-4" />
            <h3 class="text-xl font-bold mb-2">{{ game.name }}</h3>
            <p class="text-gray-400">{{ game.description }}</p>
          </div>
        </div>
      </section>
  
      <!-- Call to Action -->
      <section class="bg-purple-700 py-16">
        <div class="container mx-auto px-6 text-center">
          <h2 class="text-3xl font-bold mb-4">Ready to Play?</h2>
          <p class="mb-8">Join thousands of players and start your gaming journey today!</p>
          <button class="bg-white text-purple-700 font-bold py-2 px-4 rounded-full hover:bg-gray-200 transition-colors">
            Sign Up Now
          </button>
        </div>
      </section>
  
      <!-- Footer -->
      <footer class="bg-gray-900 py-8">
        <div class="container mx-auto px-6">
          <div class="flex flex-col md:flex-row justify-between items-center">
            <div class="flex items-center mb-4 md:mb-0">
              <Gamepad2 class="w-6 h-6 text-purple-500 mr-2" />
              <span class="text-xl font-bold">GameHub</span>
            </div>
            <div class="flex space-x-4">
              <a href="#" v-for="icon in socialIcons" :key="icon.name" class="text-gray-400 hover:text-white transition-colors">
                <component :is="icon" class="w-6 h-6" />
              </a>
            </div>
          </div>
          <div class="mt-8 text-center text-gray-400">
            <p>&copy; {{ new Date().getFullYear() }} GameHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  </template>
  
  <script setup lang="ts">
  import { 
    Gamepad2,
    Dice1Icon,
    Zap,
    Users,
    TwitterIcon,
    FacebookIcon,
    InstagramIcon
  } from 'lucide-vue-next'
  
  interface Game {
    name: string;
    description: string;
    icon: any;
  }
  
  const featuredGames: Game[] = [
    {
      name: 'Tic-Tac-Toe',
      description: 'Classic game of X\'s and O\'s',
      icon: Dice1Icon
    },
    {
      name: 'Snake',
      description: 'Eat, grow, and don\'t hit the walls!',
      icon: Zap
    },
    {
      name: 'Memory Cards',
      description: 'Test your memory skills',
      icon: Users
    }
  ]
  
  const socialIcons = [TwitterIcon, FacebookIcon, InstagramIcon]
  </script>