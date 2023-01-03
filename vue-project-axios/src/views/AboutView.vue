<template>
  <PageTitle :my-title="someTitle" />
  <SlotPageTitle> Slot을 사용한 About 페이지 타이틀입니다. </SlotPageTitle>
</template>

<script>
import PageTitle from "@/components/PageTitle.vue";
import SlotPageTitle from "@/components/common/SlotPageTitle.vue";

export default {
  name: "AboutView",
  components: {
    PageTitle,
    SlotPageTitle,
  },
  data() {
    return {
      someTitle: "About 페이지입니다.",
    };
  },
};
</script>

<style scoped></style>
