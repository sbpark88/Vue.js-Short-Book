<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue'
export default {
  name: 'StoreCompositionAPI',
  setup () {
    const store = useStore()
    return {
      count: computed(() => store.state.count),
      increment: () => store.commit('increment')
    }
  }
}
</script>

<style scoped>
p { color: blue; }
</style>
