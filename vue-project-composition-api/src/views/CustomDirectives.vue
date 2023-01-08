<template>
  <p>Global Custom Directive 'focus' : <input type="text" v-focus></p>
  <img v-pin="{ position: 'fixed', top: 20, left: 20 }" :src="blogIcon" alt="blog-icon" :style="iconSize">
</template>

<script>
import { ref } from 'vue'

export default {
  name: 'CustomDirectives',
  setup () {
    const blogIcon = ref('/greendreamtree.png')
    const iconSize = { height: '70px', weight: '70px;' }
    return { blogIcon, iconSize }
  },
  directives: {
    pin: {
      mounted (el, binding) {
        el.style.position = binding.value.position
        el.style.top = `${binding.value.top}px`
        el.style.left = `${binding.value.left}px`
      }
    }
  }
}
</script>

<style scoped>

</style>
