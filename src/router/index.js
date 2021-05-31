import { createRouter, createWebHistory } from 'vue-router'
// import Search from '../views/Search.vue'

const routes = [
  {
    path: '/',
    name: 'Search',
    component: () => import(/* webpackChunkName: "search" */ '../views/Search.vue')
  },
  {
    path: '/videoDetails/:id',
    name: 'videoDetails',
    component: () => import(/* webpackChunkName: "videoDetails" */ '../views/videoDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
