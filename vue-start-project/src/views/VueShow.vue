<template>
  <div>
    <h1 v-show="type === 'A'">A</h1>
    <h1 v-show="type === 'B'">B</h1>
    <h1 v-show="!(type === 'A' || type === 'B')">Others</h1>
  </div>
</template>

<script>
export default {
  name: "VueSHow",
  data() {
    return {
      type: 'B'
    }
  }
}
</script>

<style scoped>

</style>
