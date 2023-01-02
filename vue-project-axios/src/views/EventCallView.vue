<template>
  <h1>Parent Component</h1>
  <button type="button" @click="parentFunc">
    부모 컴포넌트에서 부모 컴포넌트 이벤트 호출
  </button>
  <button type="button" @click="callChildEvent">
    부모 컴포넌트에서 자식 컴포넌트 이벤트 호출(Real DOM 에 접근)
  </button>
  <button type="button" @click="callChildFunc">
    부모 컴포넌트에서 자식 컴포넌트 이벤트 호출(함수에 직접 접근)
  </button>
  <button type="button" @click="setChildVariable">
    부모 컴포넌트에서 자식 컴포넌트 데이터 'alpha' 변경
  </button>
  <!--  <p>-->
  <!--    자식 컴포넌트의 데이터를 'beta' 를 computed 하는 부모 컴포넌트의 데이터:-->
  <!--    {{ syncedWithChildComponentVariable }}-->
  <!--  </p>-->
  <button type="button" @click="popSyncedVariable">
    자식 컴포넌트의 데이터 'beta' 를 computed 하는 부모 컴포넌트의 데이터 팝업
  </button>
  <hr />
  <ChildComponent @parent-Func="parentFunc" ref="childComponent" />
</template>

<script>
import ChildComponent from "@/components/ChildComponent.vue";

export default {
  name: "EventCallView",
  components: {
    ChildComponent,
  },
  methods: {
    parentFunc() {
      alert("부모 컴포넌트 이벤트가 호출되었습니다.");
    },
    callChildEvent() {
      this.$refs.childComponent.$refs.myChildButton.click();
    },
    callChildFunc() {
      this.$refs.childComponent.childFunc();
    },
    setChildVariable() {
      this.$refs.childComponent.alpha = Math.trunc(Math.random() * 10);
    },
    popSyncedVariable() {
      alert(this.syncedWithChildComponentVariable);
    },
  },
  computed: {
    syncedWithChildComponentVariable() {
      return this.$refs.childComponent.beta;
    },
  },
};
</script>

<style scoped></style>
