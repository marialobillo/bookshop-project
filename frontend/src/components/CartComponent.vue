<script setup>
import { useCartStore } from "/store/cart.js";
import { usePublisherStore } from "../../store/publishers";
import { usePurchasedItem } from "../../store/purchaseditem";
import CounterComponent from "./CounterComponent.vue";

const publishers = usePublisherStore();
const Cartstore = useCartStore();
const purchaseditem = usePurchasedItem();
</script>
<template>
  <h3>Cart</h3>

  <div class="">
    <div class="">cart</div>
    <div class="">cart logo</div>
    <hr />
  </div>
  <P>{{ publishers.doublecount }}</P>
  <ul>
    <li v-for="item in publishers.product" :key="item.id">
      {{ item.name }} {{ item.id }}{{ item }}

      <button @click="publishers.removeItem(item)">Remove</button
      ><CounterComponent />
    </li>
  </ul>

  <ul>
    <li v-for="item in purchaseditem.Purchase" :key="item.id">
      {{ item.id }}
      <button @click="publishers.removeItem(item.id)">Remove</button
      ><CounterComponent />
    </li>
  </ul>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} - {{ item.price }}
      <button @click="removeItem(item)">Remove</button>
    </li>
  </ul>
  <ul>
    <li v-for="(item, index) in cartItems" :key="index">
      {{ item.name }} - {{ item.quantity }} x {{ item.price }} =
      {{ item.total }}
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
