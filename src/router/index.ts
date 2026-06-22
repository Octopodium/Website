import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import GameView from '../views/GameView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Game',
    component: GameView,
    meta: { icon: import.meta.env.BASE_URL + 'Images/FinnIcon.png' }
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/AboutView.vue'),
    meta: { icon: import.meta.env.BASE_URL + 'Images/RitaIcon.png' }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: () => import('../views/ContactView.vue'),
    meta: { icon: import.meta.env.BASE_URL + 'Images/HeartIcon.png' }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

router.afterEach((to) => {
  const favicon = document.querySelector("link[rel*='icon']") as HTMLLinkElement
  
  if (favicon && to.meta.icon) {
    favicon.href = to.meta.icon as string
  }
})

export default router