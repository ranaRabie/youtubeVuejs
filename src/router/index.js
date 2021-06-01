import { createRouter, createWebHistory } from 'vue-router'

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
  {
    path: '/channelDetails/:id',
    name: 'channelDetails',
    component: () => import(/* webpackChunkName: "videoDetails" */ '../views/channelDetails.vue')
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
