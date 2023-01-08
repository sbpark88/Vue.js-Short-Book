<template>
  <h3>English</h3>
  <p>{{ $translate('greetings.en') }}</p>
  <h3>Korean</h3>
  <p>{{ $translate('greetings.ko') }}</p>
  <h3>French</h3>
  <p>{{ this.i18n.greetings.fr }}</p>
  <h3>German</h3>
  <p>{{ this.i18n.greetings.de }}</p>
</template>

<script>
export default {
  name: 'CustomPlugins',
  inject: ['i18n']
}
</script>

<style scoped>

</style>
