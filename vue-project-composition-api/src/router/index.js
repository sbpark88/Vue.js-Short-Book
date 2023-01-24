import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    beforeEnter: (to, from, next) => { window.location.href = '/calculator-with-options-api' }
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
  },
  {
    path: '/custom-plugins',
    name: 'customPlugins',
    component: () => import(/* webpackChunkName: "customPlugins" */ '../views/CustomPlugins.vue')
  },
  {
    path: '/store-access',
    name: 'storeAccess',
    component: () => import(/* webpackChunkName: "vuex" */ '../views/StoreAccess.vue')
  },
  {
    path: '/store-access2',
    name: 'storeAccess2',
    component: () => import(/* webpackChunkName: "vuex2" */ '../views/AnotherStoreAccess.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
