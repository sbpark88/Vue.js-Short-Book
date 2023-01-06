<template>
  <p>This message is come from root : {{ rootMessage }}</p>
  <p>This message is come from app : {{ appMessage }}</p>
</template>

<script>

import { inject } from 'vue'

export default {
  name: 'ThirdChild',
  setup () {
    const rootMessage = inject('rootValue')
    const appMessage = inject('appLevelValue')

    return {
      rootMessage,
      appMessage
    }
  }
}
</script>

<style scoped>

</style>
