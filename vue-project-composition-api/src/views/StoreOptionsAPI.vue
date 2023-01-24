<template>
  <p>
    Count: {{ count }}
    <span>{{ calledEvenTimes ? '짝수번 호출되었습니다' : '홀수번 호출되었습니다' }}</span>
  </p>
  <button type="button" @click="increment">Increment</button>
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
    }
  }
}
</script>

<style scoped>
p { color: red; }
</style>
