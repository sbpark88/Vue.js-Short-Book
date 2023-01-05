<template>
  <ThirdChild />
</template>

<script>
import ThirdChild from "@/components/ThirdChild.vue";

export default {
  name: "SecondChild",
  components: {
    ThirdChild,
  },
};
</script>

<style scoped></style>
