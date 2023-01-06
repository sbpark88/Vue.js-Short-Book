<template>
  <SecondChild/>
</template>

<script>
import SecondChild from '@/components/SecondChild.vue'

export default {
  name: 'FirstChild',
  components: {
    SecondChild
  }
}
</script>

<style scoped>

</style>
