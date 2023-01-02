<template>
  <h1>Child Component</h1>
  <button type="button" @click="childFunc" ref="myChildButton">
    자식 컴포넌트에서 자식 컴포넌트 이벤트 호출
  </button>
  <button type="button" @click="callParentFunc">
    자식 컴포넌트에서 부모 컴포넌트 이벤트 호출
  </button>
  <button type="button" @click="setSelfVariable">
    자식 컴포넌트에서 자식 컴포넌트 데이터 'beta' 변경
  </button>
  <p>alpha: {{ alpha }}</p>
  <p>beta: {{ beta }}</p>
</template>

<script>
export default {
  name: "ChildComponent",
  data() {
    return {
      alpha: 0,
      beta: 0,
      gamma: "abc",
    };
  },
  methods: {
    childFunc() {
      alert("자식 컴포넌트의 이벤트가 호출되었습니다.");
    },
    callParentFunc() {
      this.$emit("parentFunc");
    },
    setSelfVariable() {
      this.beta = Math.trunc(Math.random() * 10);
    },
  },
};
</script>

<style scoped></style>
