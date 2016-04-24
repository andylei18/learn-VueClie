<template>
  <div class="app">
    <h1>Shopping Cart Example</h1>
    <hr>
    <h2>Products</h2>
    <product-list></product-list>
    <hr>
    <cart></cart>
  </div>
</template>

<script>
import productList from './productList.vue'
import cart from './cart.vue'

export default {
  components: { productList, cart }
}
</script>
