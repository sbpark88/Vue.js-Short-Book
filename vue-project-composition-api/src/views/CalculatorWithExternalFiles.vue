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
import { calculator } from '@/utils/calculator'

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
