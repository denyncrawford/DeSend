import { createApp } from 'vue'
import './tailwind.css'
import "animate.css"
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import store from './store.js'
import toast from 'vue-my-toasts'
import TailwindComponent from './components/Toast.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.use(router)
app.use(store)
app.use(toast, {
  component: TailwindComponent,
  options: {
    position: 'bottom-right',
  }
})
app.mount('#app')
