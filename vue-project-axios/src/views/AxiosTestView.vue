<template>
  <PageTitle my-title="Axios 페이지입니다." />
  <div>
    <table>
      <thead>
        <tr>
          <th>제품명</th>
          <th>가격</th>
          <th>카테고리</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(product, i) in productList" :key="i">
          <td>{{ product.productName }}</td>
          <td>{{ product.price }}</td>
          <td>{{ product.category }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import product from "@/dto/product";
import PageTitle from "@/components/PageTitle.vue";

export default {
  name: "AxiosTestView",
  components: {
    PageTitle,
  },
  data() {
    return {
      productList: Array[product],
    };
  },
  created() {
    this.getList();
  },
  methods: {
    async getList() {
      // this.productList = (await this.$api.get("/test")).data;  // If you want to custom configs
      this.productList = await this.$get("/test");
    },
  },
};
</script>

<style scoped>
table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td,
th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
</style>
