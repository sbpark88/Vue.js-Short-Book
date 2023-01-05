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
export default {
  name: 'CalculatorOptionsAPI',
  data () {
    return {
      num1: 0,
      num2: 0,
      sum: 0
    }
  },
  methods: {
    plusNumbers () {
      this.sum = this.num1 + this.num2
    }
  },
  computed: {
    product () {
      return this.num1 * this.num2
    }
  }
}
</script>

<style scoped>

</style>
