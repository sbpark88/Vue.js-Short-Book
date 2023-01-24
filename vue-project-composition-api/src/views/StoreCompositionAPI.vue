<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive, toRefs } from 'vue'

const storeCounter = (store) => {
  const state = reactive({
    count: computed(() => store.state.count),
    increment: () => store.commit('increment')
  })
  return toRefs(state)
}
export default {
  name: 'StoreCompositionAPI',
  setup () {
    const store = useStore()
    const { count, increment } = storeCounter(store)
    return { count, increment }
  }
}
</script>

<style scoped>
p { color: blue; }
</style>
