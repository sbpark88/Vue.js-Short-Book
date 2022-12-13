<template>
  <div>
    <h1 v-if="type === 'A'">A</h1>
    <h1 v-else-if="type === 'B'">B</h1>
    <h1 v-else>Others</h1>
  </div>
</template>

<script>
export default {
  name: "VueIf",
  data() {
    return {
      type: 'B'
    }
  },
}
</script>

<style scoped>

</style>
