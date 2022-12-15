<template>
  <h4>Perform every times</h4>
  <div>{{ `${firstName} ${lastName}` }}</div>

  <h4>Computed</h4>
  <div>{{ fullName }}</div>
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
    firstName() {

    }
  }
}
</script>

<style scoped>

</style>
