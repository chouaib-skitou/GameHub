import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Games from '../views/Games.vue'
import About from '../views/About.vue'
import XOGame from '../components/games/XOGame.vue'
import SnakeGame from '../components/games/SnakeGame.vue'
import Login from '../views/auth/Login.vue'
import Register from '../views/auth/Register.vue'
import ResetPasswordRequest from '../views/auth/ResetPasswordRequest.vue'
import ResetPassword from '../views/auth/ResetPassword.vue'

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
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/reset-password-request',
    name: 'ResetPasswordRequest',
    component: ResetPasswordRequest
  },
  {
    path: '/reset-password',
    name: 'ResetPassword',
    component: ResetPassword
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router

