<template>
  <h1>Hello, {{ title }}!</h1>
  <div id="section-fifth">
    <div v-html="someHtml"></div>
    <input type="text" v-model="valueModel">
    <input type="number" v-model.number="numberModel">
    <textarea v-model="someText"></textarea>
    <select v-model="city">
      <option :value="seoul">서울</option>
      <option :value="busan">부산</option>
      <option :value="jeju">제주</option>
    </select>
    <label for="someCheckbox"><input type="checkbox" id="someCheckbox" v-model="someBoolean"></label>
    <div>
      <label for="radio01"><input type="radio" :value="radioSeoul" id="radio01" v-model="radioChecked">서울</label>
      <label for="radio02"><input type="radio" :value="radioBusan" id="radio02" v-model="radioChecked">부산</label>
      <label for="radio03"><input type="radio" :value="radioJeju" id="radio03" v-model="radioChecked">제주</label>
    </div>
  </div>
  <div id="section-sixth">
    <img :src="myBlogFavicon">
    <input type="text" v-model="textValue">
    <button type="button" :disabled="!textValue">Click</button>
    <div class="container" :class="{ 'active': isActive, 'text-red': hasError }">Class Binding Object</div>
    <div class="container" :class="[someActive, someError]">Class Binding Array</div>
    <div :style="styleObject">Inline Style Binding Object</div>
    <div :style="[baseStyle, addStyle]">Inline Style Binding Array</div>
  </div>
</template>

<script>
export default {
  name: "DataBinding",
  data() {
    return {
      title: 'World',
      someHtml: `<p style="color: red;">This is red.</p>`,
      valueModel: `Hogwarts`,
      numberModel: 100,
      someText: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt \
      ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation \
      ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in \
      reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. \
      Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
      city: "02",
      seoul: "02",
      busan: "21",
      jeju: "064",
      someBoolean: true,
      radioChecked: `busan`,
      radioSeoul: `seoul`,
      radioBusan: `busan`,
      radioJeju: `jeju`,
      myBlogFavicon: `https://sbpark88.github.io/assets/images/favicon/greendreamtree.png`,
      textValue: ``,
      isActive: true,
      hasError: true,
      someActive: 'active text-red',
      someError: '',
      styleObject: {
        color: 'orange',
        fontsize: '13px'
      },
      baseStyle: 'background-color: blue; width: 100%; height: 100px;',
      addStyle: 'color: brown; font-weight: bold;'
    }
  },
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100px;
}
.active {
  background-color: yellow;
  font-weight: bold;
}
.text-red {
  color: red;
}
</style>
