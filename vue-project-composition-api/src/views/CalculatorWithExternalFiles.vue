<template>
  <div>
    <h2>Calculator</h2>
    <div>
      <input type="text" v-model.number="num1" @keyup="plusNumbers">
      <span> + </span>
      <input type="text" v-model.number="num2" @keyup="plusNumbers">
      <span> = </span>
      <span> {{ sum }} </span>
    </div>
    <div>
      <input type="text" v-model.number="num1" disabled>
      <span> x </span>
      <input type="text" v-model.number="num2" disabled>
      <span> = </span>
      <span> {{ product }} </span>
    </div>
  </div>
  <p> {{ initialMessage }} </p>
  <p> {{ state.anotherMessage }} </p>
</template>

<script>
import { calculator } from '@/utils/calculator'
import { onMounted, reactive, ref } from 'vue'

export default {
  name: 'CalculatorWithExternalFiles',
  setup () {
    const {
      num1,
      num2,
      sum,
      product,
      plusNumbers
    } = calculator()

    const initialMessage = ref('')

    const state = reactive({
      anotherMessage: ''
    })

    onMounted(() => {
      initialMessage.value = 'CalculatorWithExternalFiles.vue is mounted'
      state.anotherMessage = 'Hello Vue.js'
    })

    // return Composition
    return {
      num1,
      num2,
      sum,
      product,
      plusNumbers,
      initialMessage,
      state
    }
  }
}
</script>

<style scoped>

</style>
