import { createRouter, createWebHistory } from 'vue-router'
import Maintenance from '@views/Maintenance.vue'
import NotFound from '@views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Maintenance',
    component: Maintenance
  },
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
