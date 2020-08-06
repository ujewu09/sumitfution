import Vue from 'vue'
import VueRouter from 'vue-router'
import ios from '../views/ios.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'ios',
    component: ios
  },
  {
    path: '/aircraft',
    name: 'aircraft',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/aircraft.vue')
  },
  {
    path: '/block',
    name: 'block',
    component: () => import('../views/block.vue')
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('../views/cards.vue')
  },
  {
    path: '/dusk',
    name: 'dusk',
    component: () => import('../views/dusk.vue')
  },
  {
    path: '/hover',
    name: 'hover',
    component: () => import('../views/hover.vue')
  },
  {
    path: '/monitot',
    name: 'monitot',
    component: () => import('../views/monitot.vue')
  },
  {
    path: '/love',
    name: 'love',
    component: () => import('../views/love.vue')
  },
  {
    path: '/Theshapeof',
    name: 'Theshapeof',
    component: () => import('../views/Theshapeof.vue')
  },
  {
    path: '/truck',
    name: 'truck',
    component: () => import('../views/truck.vue')
  },
  {
    path: '/Umbrella',
    name: 'Umbrella',
    component: () => import('../views/Umbrella.vue')
  },
  {
    path: '/Sudoku',
    name: 'Sudoku',
    component: () => import('../views/Sudoku.vue')
  },
  {
    path: '/Animation',
    name: 'Animation',
    component: () => import('../views/Animation.vue')
  },
  {
    path: '/scissors',
    name: 'scissors',
    component: () => import('../views/scissors.vue')
  },
  {
    path: '/walk',
    name: 'walk',
    component: () => import('../views/walk.vue')
  },
  {
    path: '/Specialeffects',
    name: 'Specialeffects',
    component: () => import('../views/Specialeffects.vue')
  },
  {
    path: '/moxing',
    name: 'moxing',
    component: () => import('../views/moxing.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
