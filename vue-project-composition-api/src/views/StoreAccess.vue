<template>
  <p>Count: {{ count }}</p>
  <button type="button" @click="increment">Increment</button>
</template>

<script>
export default {
  name: 'StoreAccess',
  computed: {
    count () {
      return this.$store.state.count
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
