import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

const myApp = createApp(App)
  .use(store)
  .use(router)
  .provide('appLevelValue', 'Hello~ This is App')

myApp.directive('focus', (el, binding) => {
  el.focus()
})

myApp.mount('#app')
