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

export {
  sumTwoNumbers,
  calculator
}
