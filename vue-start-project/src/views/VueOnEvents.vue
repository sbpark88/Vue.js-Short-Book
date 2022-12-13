<template>
  <div id="event-onclick">
    <button type="button" @click="increaseCounter">Add 1</button>
    <button type="button" @click="resetCounter(0)">Reset</button>
    <button type="button" @click="first(pipeInitialValue = 5), second(pipeInitialValue)">Multi Call</button>
    <p>The counter is : {{ counter }}</p>
  </div>
  <div id="event-onchange">
    <select v-model="selectedValue" @change="popSelected">
      <option v-for="(city, index) in cities" :key="index" :value="city">{{ city }}</option>
    </select>
  </div>
  <div id="event-onkeyup">
    <h4>Keyup (Win: alt + enter / Mac: option + return)</h4>
    <input type="text" @keyup.alt.enter="altEnterCalled">
    <div style="display: grid">
      <div class="btn-style" @click.meta="commandClickCalled">Command Click</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VueOnEvents",
  data() {
    return {
      counter: 0,
      pipeInitialValue: 0,
      cities: ["서울", "부산", "제주"],
      selectedValue: "",
    }
  },
  methods: {
    increaseCounter() {
      this.counter++
    },
    resetCounter(value) {
      this.counter = value
    },
    first(value) {
      alert(value)
      this.pipeInitialValue += 10
    },
    second(value) {
      alert(value)
    },
    popSelected() {
      alert(this.selectedValue)
    },
    altEnterCalled() {
      alert(`(alt + enter) or (option + return) called!!`)
    },
    commandClickCalled() {
      alert(`(win + click) or (command + click) called!!`)
    },
  },
}
</script>

<style scoped>
.btn-style {
  justify-self: center;
  width: 200px;
  padding: 5px 10px;
  margin: 10px;
  background-color: burlywood;
  border: blanchedalmond solid 3px;
  border-radius: 10px;
}
</style>
