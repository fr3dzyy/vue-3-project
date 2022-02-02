import { createRouter, createWebHashHistory } from 'vue-router'

import HomeView from './views/HomeView.vue'
import AboutView from './views/AboutView.vue'
import HeroesView from './views/HeroesView.vue'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    { component: HomeView, path: '/' },
    { component: AboutView, path: '/about' },
    { component: HeroesView, path: '/heroes' }
  ]
})
