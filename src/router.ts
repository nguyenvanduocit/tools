import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  { path: '/', component: () => import('./views/ViewHome.vue') },
  { path: '/about', component: () => import('./views/ViewAbout.vue') },
  { path: '/setting', component: () => import('./views/ViewSetting.vue') },
  { path: '/map-run', component: () => import('./views/ViewMapRun.vue') },
  { path: '/trade', component: () => import('./views/ViewTrade.vue') },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('./views/View404.vue')
  }
]

export const router = createRouter({
  history: createWebHashHistory(),
  routes
})
