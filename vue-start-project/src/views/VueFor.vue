<template>
  <table>
    <thead>
    <tr>
      <th>제품명</th>
      <th>가격</th>
      <th>카테고리</th>
      <th>배송료</th>
    </tr>
    </thead>
    <tbody>
    <tr :key="index" v-for="(product, index) in productList">
      <td>{{ product.product_name }}</td>
      <td>{{ product.price }}</td>
      <td>{{ product.category }}</td>
      <td>{{ product.delivery_price }}</td>
    </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: "VueFor",
  data() {
    return {
      productList: [
        {"product_name": "사과", "price": 4000, "category": "과일", "delivery_price": 3000},
        {"product_name": "배", "price": 6000, "category": "과일", "delivery_price": 3000},
        {"product_name": "참치", "price": 30000, "category": "생선", "delivery_price": 10000},
        {"product_name": "안심", "price": 40000, "category": "육류", "delivery_price": 6000},
        {"product_name": "와인", "price": 12000, "category": "주류", "delivery_price": 0},
      ]
    }
  }
}
</script>

<style scoped>
table {
  font-family: Arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #ddd;
  text-align: left;
  padding: 8px;
}
</style>
