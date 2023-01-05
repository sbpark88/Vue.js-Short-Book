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
</template>

<script>
import { reactive, computed, toRefs } from 'vue'

const sumTwoNumbers = () => { return (a, b) => a + b }

const calculator = () => {
  const state = reactive({
    num1: 0,
    num2: 0,
    sum: 0,
    product: computed(() => state.num1 * state.num2),
    plusNumbers: () => { state.sum = sumTwoNumbers()(state.num1, state.num2) }
  })
  return toRefs(state)
}

export default {
  name: 'CalculatorCompositionAPI',
  setup () {
    const {
      num1,
      num2,
      sum,
      product,
      plusNumbers
    } = calculator()

    // return Composition
    return {
      num1,
      num2,
      sum,
      product,
      plusNumbers
    }
  }
}
</script>

<style scoped>

</style>
