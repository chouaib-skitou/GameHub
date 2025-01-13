<template>
    <div class="flex flex-col items-center justify-center min-h-screen bg-[#1a1f2e] text-white p-4">
      <h1 class="text-4xl font-bold mb-8 text-purple-500">Tic-Tac-Toe</h1>
      
      <div class="mb-4 text-xl text-white">
        {{ winner ? `Player ${winner} wins!` : `Player ${currentPlayer}'s turn` }}
      </div>
      
      <div class="grid grid-cols-3 gap-2 mb-8">
        <button 
          v-for="(cell, index) in board" 
          :key="index"
          @click="makeMove(index)"
          class="w-24 h-24 md:w-32 md:h-32 bg-[#232942] rounded-lg text-5xl font-bold flex items-center justify-center transition-all duration-300 hover:bg-[#2a314e] focus:outline-none focus:ring-2 focus:ring-purple-500"
          :class="[
            { 'text-purple-500': cell === 'X', 'text-green-500': cell === 'O' },
            { 'bg-[#2d1f55] hover:bg-[#2d1f55]': isWinningCell(index) }
          ]"
          :disabled="cell !== null || winner"
        >
          {{ cell }}
        </button>
      </div>
      
      <button 
        @click="resetGame"
        class="px-8 py-3 bg-purple-600 rounded-full text-white font-semibold text-lg transition-colors duration-300 hover:bg-purple-700"
      >
        Reset Game
      </button>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from 'vue'
  
  const board = ref(Array(9).fill(null))
  const currentPlayer = ref('X')
  const winner = ref(null)
  const winningCells = ref<number[]>([])
  
  const winningCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6] // Diagonals
  ]
  
  const makeMove = (index: number) => {
    if (board.value[index] === null && !winner.value) {
      board.value[index] = currentPlayer.value
      checkWinner()
      if (!winner.value) {
        currentPlayer.value = currentPlayer.value === 'X' ? 'O' : 'X'
      }
    }
  }
  
  const checkWinner = () => {
    for (const combo of winningCombinations) {
      const [a, b, c] = combo
      if (
        board.value[a] &&
        board.value[a] === board.value[b] &&
        board.value[a] === board.value[c]
      ) {
        winner.value = board.value[a]
        winningCells.value = combo
        return
      }
    }
    if (board.value.every(cell => cell !== null)) {
      winner.value = 'Draw'
    }
  }
  
  const isWinningCell = (index: number): boolean => {
    return winningCells.value.includes(index)
  }
  
  const resetGame = () => {
    board.value = Array(9).fill(null)
    currentPlayer.value = 'X'
    winner.value = null
    winningCells.value = []
  }
  </script>