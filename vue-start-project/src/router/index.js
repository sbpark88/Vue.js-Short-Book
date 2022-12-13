import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
    // component: () => import(/* webpackPrefetch: true */ '../views/AboutView.vue')
  },
  {
    path: '/databinding',
    name: 'dataBinding',
    component: () => import(/* webpackChunkName: "dataBinding" */ '../views/DataBinding.vue')
  },
  {
    path: '/vueFor',
    name: 'vueFor',
    component: () => import(/* webpackChunkName: "vueFor" */ '../views/VueFor.vue')
  },
  {
    path: '/vueif',
    name: 'vueIf',
    component: () => import(/* webpackChunkName: "vueFor" */ '../views/VueIf.vue')
  },
  {
    path: '/vueshow',
    name: 'vueShow',
    component: () => import(/* webpackChunkName: "vueSHow" */ '../views/VueShow.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
