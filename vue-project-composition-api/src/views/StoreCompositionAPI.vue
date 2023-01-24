<template>
  <p>
    Count: {{ count }}
    <span>{{ calledEvenTimes ? '짝수번 호출되었습니다' : '홀수번 호출되었습니다' }}</span>
  </p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive, toRefs } from 'vue'

const storeCounter = (store) => {
  const state = reactive({
    count: computed(() => store.state.count),
    calledEvenTimes: computed(() => store.getters.calledEvenTimes),
    increment: () => store.commit('increment')
  })
  return toRefs(state)
}
export default {
  name: 'StoreCompositionAPI',
  setup () {
    const store = useStore()
    const { count, calledEvenTimes, increment } = storeCounter(store)
    return { count, calledEvenTimes, increment }
  }
}
</script>

<style scoped>
p { color: blue; }
</style>
