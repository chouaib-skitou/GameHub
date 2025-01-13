import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import About from '../views/About.vue'
import XOGame from '../components/games/XOGame.vue'
import SnakeGame from '../components/games/SnakeGame.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/games',
    name: 'Games',
    component: Games
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/games/xo',
    name: 'XOGame',
    component: XOGame
  },
  {
    path: '/games/snake',
    name: 'SnakeGame',
    component: SnakeGame
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

