<template>
  <FirstChild />
</template>

<script>
import FirstChild from "@/components/FirstChild.vue";

export default {
  name: "RootView",
  components: {
    FirstChild,
  },
  provide() {
    return {
      rootValue: "Hello~ I'm root.",
    };
  },
};
</script>

<style scoped></style>
