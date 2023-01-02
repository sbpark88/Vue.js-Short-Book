<template>
  <PageTitle :my-title="someTitle" />
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "AboutView",
  components: {
    PageTitle,
  },
  data() {
    return {
      someTitle: "About 페이지입니다.",
    };
  },
};
</script>

<style scoped></style>
