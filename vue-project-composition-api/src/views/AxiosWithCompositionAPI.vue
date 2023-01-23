<template>
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
      <tr v-for="(product, i) in state.productList" :key="i">
        <td>{{ product.productName }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.category }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import Product from '@/dto/Product'
import { onMounted, reactive } from 'vue'
import { $get } from '@/utils/api'

export default {
  name: 'AxiosWithCompositionAPI',
  setup () {
    const state = reactive({
      productList: Array[Product]
    })

    const getList = async () => {
      state.productList = await $get('/api/getProducts')
    }

    onMounted(() => {
      getList()
    })

    return { state }
  }
}
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
