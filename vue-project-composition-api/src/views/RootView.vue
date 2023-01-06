<template>
  <button type="button" @click="changeValue">Change Root Value</button>
  <hr>
  <FirstChild/>
</template>

<script>
import FirstChild from '@/components/FirstChild.vue'
import { provide, ref } from 'vue'

export default {
  name: 'RootView',
  components: {
    FirstChild
  },
  setup () {
    const rootValue = ref("Hello~ I'm root.")

    const changeValue = (() => {
      let times = 0
      return () => {
        rootValue.value = `Hello~ I'm root. is changed ${++times} times`
      }
    })()

    provide('rootValue', rootValue)

    return { changeValue }
  }
}
</script>

<style scoped>

</style>
