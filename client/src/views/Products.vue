<template>
  <div class="listing container">
    <div class="title" style="margin-bottom:40px;">
      <h1>Products on Sale</h1>
    </div>

    <div class="row">
      <div class="col-sm-2">
        <h2>ID</h2>
      </div>
      <div class="col-sm-4">
        <h2>NAME</h2>
      </div>
      <div class="col-sm-4">
        <h2>DESCRIPTION</h2>
      </div>
      <div class="col-sm-2">
        <h2>PRICE</h2>
      </div>
    </div>


    <template v-for="product in products">
      <div class="row" style="margin-bottom:20px;">
        <div class="col-sm-2" >
          <p>{{ product.productId }}</p>
        </div>
        <div class="col-sm-4">
          <p>{{ product.name }}</p>
        </div>
        <div class="col-sm-4">
          <p>{{ product.description }}</p>
        </div>
        <div class="col-sm-2">
           <p>${{ product.price }}</p>           
        </div>
      </div>
    </template>

  </div>
</template>

<script lang="ts">
import { mapGetters, mapActions } from 'vuex';
import * as types from '../store/products-types';

export default {
  computed: mapGetters({
    products: types.GET_PRODUCTS
  }),
  methods: {
    ...mapActions({
      fetchProducts: types.FETCH_PRODUCTS
    })
  },
  created () {
    this.fetchProducts()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>