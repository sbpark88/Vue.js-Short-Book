<template>
  <p>This message is come from root : {{ rootMessage }}</p>
  <p>This message is come from app : {{ appMessage }}</p>
</template>

<script>
export default {
  name: "ThirdChild",
  inject: {
    rootMessage: "rootValue",
    appMessage: "appLevelValue",
  },
};
</script>

<style scoped></style>
