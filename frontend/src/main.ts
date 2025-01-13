import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // Ensure this is present for Tailwind styles

const app = createApp(App)
app.use(router)
app.mount('#app')