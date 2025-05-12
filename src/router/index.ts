import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PricingView from '@/views/PricingView.vue'
import UsersView from '@/views/UsersView.vue'
import { canUserAccess } from '@/composables/canUSerAccess'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/users',
      name: 'users',
      component: UsersView,
    },
    {
      path: '/pricing',
      name: 'pricing',
      component: PricingView,
    },
  ],
})

router.beforeEach((to) => {
  if (to.name === 'users') {
    return canUserAccess()
  }

  console.error('NO ACCESS')
})

export default router
