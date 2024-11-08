import { createRouter, createWebHistory } from 'vue-router'
import SignInVue from '../views/SignInVue.vue'
import MainMenu from '@/components/MainMenu.vue'
import AddPatchView from '@/views/AddPatchView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'sign_in',
      component: SignInVue
    },
    {
      path: '/home',
      name: 'main_menu',
      component: MainMenu
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    }
  ]
})

export default router
