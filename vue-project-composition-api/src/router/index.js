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
  },
  {
    path: '/calculator-with-options-api',
    name: 'calculatorOptionsAPI',
    component: () => import(/* webpackChunkName: "calculatorOptionsAPI" */ '../views/CalculatorOptionsAPI.vue')
  },
  {
    path: '/calculator-with-composition-api',
    name: 'calculatorCompositionAPI',
    component: () => import(/* webpackChunkName: "calculatorCompositionAPI" */ '../views/CalculatorCompositionAPI.vue')
  },
  {
    path: '/calculator-with-composition-api-and-external-files',
    name: 'calculatorWithExternalFiles',
    component: () => import(/* webpackChunkName: "calculatorWithExternal" */ '../views/CalculatorWithExternalFiles.vue')
  },
  {
    path: '/provide-inject-with-composition-api',
    name: 'provideInject',
    component: () => import(/* webpackChunkName: "provideInject" */ '../views/RootView.vue')
  },
  {
    path: '/axios-mixins-with-composition-api',
    name: 'mixinsCompositionAPI',
    component: () => import(/* webpackChunkName: "mixins" */ '../views/AxiosWithCompositionAPI.vue')
  },
  {
    path: '/custom-directives',
    name: 'customDirectives',
    component: () => import(/* webpackChunkName: "customDirectives */ '../views/CustomDirectives.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
