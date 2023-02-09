<template>
  <h4>Perform every times</h4>
  <div>{{ `${firstName} ${lastName}` }}</div>

  <h4>Computed</h4>
  <div>{{ fullName }}</div>

  <hr>

  <h4>firstName</h4>
  <input type="text" v-model="firstName">

  <h4>lastName</h4>
  <input type="text" v-model="lastName">

  <h4>fullName</h4>
  <input type="text" v-model="fullName">
</template>

<script>
export default {
  name: "VueComputed",
  data() {
    return {
      firstName: "Harry",
      lastName: "Potter"
    }
  },
  methods: {},
  computed: {
    // Read-Only
    // fullName: function() {
    //   return `${this.firstName} ${this.lastName}`
    // },
    // Getter/Setter
    fullName: {
      get: function () {
        return `${this.firstName} ${this.lastName}`
      },
      set: function (newValue) {
        const names = newValue.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: {
    firstName(newValue, oldValue) {
      console.log(`firstName(old) : ${oldValue}`)
      this.firstName = `${newValue.substring(0, 1).toUpperCase()}${newValue.substring(1)}`
    },
    lastName(newValue, oldValue) {
      console.log(`lastName(old) : ${oldValue}`)
      this.lastName = `${newValue.substring(0, 1).toUpperCase()}${newValue.substring(1)}`
    },
  }
}
</script>

<style scoped>

</style>
