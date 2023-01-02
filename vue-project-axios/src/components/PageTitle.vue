<template>
  <h2>{{ myTitle }}</h2>
</template>

<script>
export default {
  name: "PageTitle",
  props: {
    myTitle: { type: String, default: "페이지 제목입니다." },
  },
};
</script>

<style scoped></style>
