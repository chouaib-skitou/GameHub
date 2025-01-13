<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-[#1a1f2e] text-white p-4">
      <h1 class="text-4xl font-bold mb-4 text-purple-500">Snake Game</h1>
      
      <div class="mb-4 flex items-center space-x-4">
        <div class="bg-purple-600 rounded-full p-2 flex items-center">
          <Trophy class="w-6 h-6 mr-2" />
          <span class="text-xl font-bold">{{ score }}</span>
        </div>
        <button 
          @click="togglePause" 
          class="bg-purple-600 rounded-full p-2 transition-colors duration-300 hover:bg-purple-700"
        >
          <component :is="isGameRunning ? Pause : Play" class="w-6 h-6" />
        </button>
      </div>
      
      <div 
        ref="gameBoard"
        class="grid bg-[#232942] border-2 border-purple-500 rounded-lg overflow-hidden"
        :style="{ 
          'grid-template-columns': `repeat(${boardSize}, 1fr)`,
          width: `${Math.min(boardSize * 20, 400)}px`,
          height: `${Math.min(boardSize * 20, 400)}px`
        }"
      >
        <!-- 
          v-for="(cell, index) in cells"  -->
        <div 
          v-for="(index) in cells" 
          :key="index" 
          class="transition-all duration-100"
          :class="{
            'bg-purple-500': isSnakeCell(index),
            'bg-red-500': isFoodCell(index)
          }"
        ></div>
      </div>
      
      <div class="mt-4 flex justify-center items-center space-x-4 md:hidden">
        <button @click="changeDirection('ArrowUp')" class="p-2 bg-purple-600 rounded-full">
          <ChevronUp class="w-6 h-6" />
        </button>
        <div class="flex space-x-4">
          <button @click="changeDirection('ArrowLeft')" class="p-2 bg-purple-600 rounded-full">
            <ChevronLeft class="w-6 h-6" />
          </button>
          <button @click="changeDirection('ArrowDown')" class="p-2 bg-purple-600 rounded-full">
            <ChevronDown class="w-6 h-6" />
          </button>
          <button @click="changeDirection('ArrowRight')" class="p-2 bg-purple-600 rounded-full">
            <ChevronRight class="w-6 h-6" />
          </button>
        </div>
      </div>
      
      <button 
        @click="startGame" 
        class="mt-4 px-6 py-2 bg-purple-600 rounded-full text-white font-semibold transition-colors duration-300 hover:bg-purple-700"
      >
        {{ isGameRunning ? 'Restart' : 'Start' }} Game
      </button>
  
      <!-- Game Over Modal -->
      <div v-if="showGameOverModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div class="bg-[#1E2435] p-8 rounded-lg shadow-lg text-center">
          <h2 class="text-3xl font-bold mb-4 text-purple-500">Game Over!</h2>
          <p class="text-xl mb-6">Your score: {{ score }}</p>
          <div class="flex justify-center space-x-4">
            <button 
              @click="closeGameOverModal" 
              class="px-6 py-2 bg-purple-600 rounded-full text-white font-semibold transition-colors duration-300 hover:bg-purple-700"
            >
              Play Again
            </button>
            <button 
              @click="cancelGame" 
              class="px-6 py-2 bg-gray-600 rounded-full text-white font-semibold transition-colors duration-300 hover:bg-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref, onMounted, onUnmounted } from 'vue'
  import { ChevronUp, ChevronDown, ChevronLeft, ChevronRight, Trophy, Pause, Play } from 'lucide-vue-next'
  
  const boardSize = 20
  const cells = ref(Array(boardSize * boardSize).fill(0))
  const snake = ref([{ x: 10, y: 10 }])
  const food = ref({ x: 15, y: 15 })
  const direction = ref({ x: 1, y: 0 })
  const score = ref(0)
  const isGameRunning = ref(false)
  const isPaused = ref(false)
  const gameInterval = ref<number | null>(null)
  const showGameOverModal = ref(false)
  
  const isSnakeCell = (index: number) => {
    const x = index % boardSize
    const y = Math.floor(index / boardSize)
    return snake.value.some(segment => segment.x === x && segment.y === y)
  }
  
  const isFoodCell = (index: number) => {
    const x = index % boardSize
    const y = Math.floor(index / boardSize)
    return food.value.x === x && food.value.y === y
  }
  
  const moveSnake = () => {
    if (isPaused.value) return
  
    const head = { ...snake.value[0] }
    head.x += direction.value.x
    head.y += direction.value.y
  
    if (head.x < 0) head.x = boardSize - 1
    if (head.x >= boardSize) head.x = 0
    if (head.y < 0) head.y = boardSize - 1
    if (head.y >= boardSize) head.y = 0
  
    if (isSnakeCell(head.y * boardSize + head.x)) {
      endGame()
      return
    }
  
    snake.value.unshift(head)
  
    if (head.x === food.value.x && head.y === food.value.y) {
      score.value++
      generateFood()
    } else {
      snake.value.pop()
    }
  }
  
  const generateFood = () => {
    let newFood
    do {
      newFood = {
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize)
      }
    } while (isSnakeCell(newFood.y * boardSize + newFood.x))
    food.value = newFood
  }
  
  const changeDirection = (key: string) => {
    if (isPaused.value) return
  
    switch (key) {
      case 'ArrowUp':
        if (direction.value.y === 0) direction.value = { x: 0, y: -1 }
        break
      case 'ArrowDown':
        if (direction.value.y === 0) direction.value = { x: 0, y: 1 }
        break
      case 'ArrowLeft':
        if (direction.value.x === 0) direction.value = { x: -1, y: 0 }
        break
      case 'ArrowRight':
        if (direction.value.x === 0) direction.value = { x: 1, y: 0 }
        break
    }
  }
  
  const startGame = () => {
    snake.value = [{ x: 10, y: 10 }]
    direction.value = { x: 1, y: 0 }
    score.value = 0
    generateFood()
    isGameRunning.value = true
    isPaused.value = false
    if (gameInterval.value) clearInterval(gameInterval.value)
    gameInterval.value = setInterval(moveSnake, 100)
  }
  
  const endGame = () => {
    isGameRunning.value = false
    isPaused.value = false
    if (gameInterval.value) clearInterval(gameInterval.value)
    showGameOverModal.value = true
  }
  
  const closeGameOverModal = () => {
    showGameOverModal.value = false
    startGame()
  }
  
  const cancelGame = () => {
    showGameOverModal.value = false
    isGameRunning.value = false
    isPaused.value = false
    if (gameInterval.value) clearInterval(gameInterval.value)
  }
  
  const togglePause = () => {
    if (!isGameRunning.value) return
    isPaused.value = !isPaused.value
  }
  
  const handleKeydown = (event: KeyboardEvent) => {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault()
      changeDirection(event.key)
    } else if (event.key === ' ') {
      event.preventDefault()
      togglePause()
    }
  }
  
  onMounted(() => {
    window.addEventListener('keydown', handleKeydown)
  })
  
  onUnmounted(() => {
    window.removeEventListener('keydown', handleKeydown)
    if (gameInterval.value) clearInterval(gameInterval.value)
  })
  </script>