<template>
  <div class="min-h-screen bg-gradient-to-b from-[#1a1f2e] to-[#131720] text-white">
    <!-- Games Header -->
    <header class="container mx-auto px-6 py-16 text-center">
      <h1 class="text-5xl font-bold mb-4">Our Games</h1>
      <p class="text-xl text-gray-300 mb-8">Choose from our collection of awesome games!</p>
    </header>

    <!-- Games Grid -->
    <section class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="game in games" 
             :key="game.id" 
             class="bg-[#1E2435] rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300 hover:transform hover:scale-105">
          <div class="aspect-w-16 aspect-h-9 bg-[#151926]">
            <div class="flex items-center justify-center">
              <component 
                :is="game.icon" 
                class="w-16 h-16 text-purple-500"
              />
            </div>
          </div>
          <div class="p-6">
            <h3 class="text-2xl font-bold mb-2">{{ game.name }}</h3>
            <p class="text-gray-400 mb-4">{{ game.description }}</p>
            <div class="flex justify-between items-center">
              <div class="flex items-center">
                <Users class="w-5 h-5 text-purple-500 mr-2" />
                <span class="text-sm text-gray-400">{{ game.players }} Players</span>
              </div>
              <button 
                class="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-full transition-colors"
                @click="playGame(game.id)"
              >
                Play Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="bg-purple-600 py-16 mt-12">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-3xl font-bold mb-4">Can't Find What You're Looking For?</h2>
        <p class="mb-8 text-lg">We're constantly adding new games to our collection!</p>
        <button class="bg-white text-purple-600 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition-colors">
          Request a Game
        </button>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { Users, Square, Zap } from 'lucide-vue-next'
import XOGame from '../components/games/XOGame.vue'
import SnakeGame from '../components/games/SnakeGame.vue'

interface Game {
  id: number
  name: string
  description: string
  players: string
  icon: any
  route: string
  component: any
}

const router = useRouter()

const games = ref<Game[]>([
  {
    id: 1,
    name: 'Tic-Tac-Toe',
    description: 'Classic game of X\'s and O\'s. Challenge your friends!',
    players: '2',
    icon: Square,
    route: '/games/xo',
    component: XOGame
  },
  {
    id: 2,
    name: 'Snake',
    description: 'Eat, grow, and don\'t hit the walls! How long can you survive?',
    players: '1',
    icon: Zap,
    route: '/games/snake',
    component: SnakeGame
  }
])

const selectedGame = ref<Game | null>(null)

const playGame = (gameId: number) => {
  const game = games.value.find(g => g.id === gameId)
  if (game) {
    selectedGame.value = game
    router.push(game.route)
  }
}

// Modal to display the selected game
// const showGameModal = ref(false)

// const openGameModal = (game: Game) => {
//   selectedGame.value = game
//   showGameModal.value = true
// }

// const closeGameModal = () => {
//   showGameModal.value = false
//   selectedGame.value = null
// }
</script>

<style scoped>
.aspect-w-16 {
  position: relative;
  padding-bottom: 56.25%;
}

.aspect-w-16 > div {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>