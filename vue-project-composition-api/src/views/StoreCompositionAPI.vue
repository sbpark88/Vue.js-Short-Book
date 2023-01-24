<template>
  <p>
    Count: {{ count }}
    <span>{{ calledEvenTimes ? '짝수번 호출되었습니다' : '홀수번 호출되었습니다' }}</span>
  </p>
  <button type="button" @click="increment">Increment</button><br><br>
  <button type="button" @click="incrementInActions">Increment(called by actions)</button>
</template>

<script>
import { useStore } from 'vuex'
import { computed, reactive, toRefs } from 'vue'

const storeCounter = (store) => {
  const state = reactive({
    count: computed(() => store.state.count),
    calledEvenTimes: computed(() => store.getters.calledEvenTimes),
    increment: () => store.commit('increment'),
    incrementInActions: () => store.dispatch('incrementInActions')
  })
  return toRefs(state)
}
export default {
  name: 'StoreCompositionAPI',
  setup () {
    const store = useStore()
    const { count, calledEvenTimes, increment, incrementInActions } = storeCounter(store)
    return { count, calledEvenTimes, increment, incrementInActions }
  }
}
</script>

<style scoped>
p { color: blue; }
</style>
