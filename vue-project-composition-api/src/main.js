import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import i18n from '@/plugins/i18n'

const myApp = createApp(App)
  .use(store)
  .use(router)
  .use(i18n, {
    greetings: {
      en: 'Hello!',
      ko: '안녕하세요!',
      fr: 'Bonjour!',
      de: 'Hallo!'
    }
  })
  .provide('appLevelValue', 'Hello~ This is App')

myApp.directive('focus', (el, binding) => {
  el.focus()
})

myApp.mount('#app')
