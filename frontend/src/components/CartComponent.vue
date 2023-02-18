<!-- eslint-disable prettier/prettier -->

<script setup>
import { useCartStore } from "/store/cart.js";

const Cartstore = useCartStore();
//console.log(Cartstore.VAT);

</script>
<template>
  <h3>Cart</h3>

  <div class="">
    <div class="">cart</div>
    <div class="">cart logo</div>
    <hr />
  </div>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} - {{ item.price }}
      <button @click="removeItem(item)">Remove</button>
    </li>
  </ul>
  <div class="">
    <p>TOTAL: {{ Cartstore.Total }} <br /></p>
    TOTAL VAT: {{ Cartstore.VAT }}<br />
    TOTAL DEDUCTION: {{ Cartstore.Deduction }}<br />
    <button @click.prevent="Cartstore.purchaseForm">Checkout</button>
  </div>
</template>
<style>
button {
  color: rgb(26, 24, 27);
  background-color: blue;
}
</style>
