<template>
  <FancyButton> Click me </FancyButton>

  <FancyButton>
    <span style="color: cyan">Click me! </span>
    <AwesomeIcon />
  </FancyButton>
</template>

<script>
import FancyButton from "@/components/common/FancyButton.vue";
import AwesomeIcon from "@/components/common/AwesomeIcon.vue";

export default {
  name: "FancyButtonView",
  components: {
    FancyButton,
    AwesomeIcon,
  },
};
</script>

<style scoped></style>
