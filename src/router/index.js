import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import AboutTim from '../views/AboutTim.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/about',
  //   name: 'About',
  //   component: AboutTim
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
