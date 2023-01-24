<template>
  <p>
    Count: {{ count }}
    <span>{{ calledEvenTimes ? '짝수번 호출되었습니다' : '홀수번 호출되었습니다' }}</span>
  </p>
  <button type="button" @click="increment">Increment</button><br><br>
  <button type="button" @click="incrementInActions">Increment(called by actions)</button>
</template>

<script>
export default {
  name: 'StoreOptionsAPI',
  computed: {
    count () {
      return this.$store.state.count
    },
    calledEvenTimes () {
      return this.$store.getters.calledEvenTimes
    }
  },
  methods: {
    increment () {
      // this.$store.state.count++
      this.$store.commit('increment')
    },
    incrementInActions () {
      this.$store.dispatch('incrementInActions')
    }
  }
}
</script>

<style scoped>
p { color: red; }
</style>
