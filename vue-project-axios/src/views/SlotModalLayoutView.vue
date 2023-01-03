<template>
  <button type="button" @click="openPopup">
    {{ popupState ? "Close Popup" : "Open Popup!!" }}
  </button>

  <hr />

  <SlotModalLayout v-show="popupState === true">
    <template #header> 팝업 타이틀 </template>
    <template #default>
      <p>알림 1 : 안녕하세요</p>
      <p>알림 2 : 반갑습니다</p>
    </template>
    <template #footer>
      <button type="button" @click="openPopup">닫기</button>
    </template>
  </SlotModalLayout>
</template>

<script>
import SlotModalLayout from "@/components/common/SlotModalLayout.vue";

export default {
  name: "SlotModalLayoutView",
  data() {
    return {
      popupState: false,
    };
  },
  components: {
    SlotModalLayout,
  },
  methods: {
    openPopup() {
      this.popupState = !this.popupState;
    },
  },
};
</script>

<style scoped></style>
