<!-- eslint-disable prettier/prettier -->

<script>
import FooterCommponent from "../components/FooterCommponent.vue";
</script>
<template>
  <h3>Cart</h3>

  <div class="">
    <div class="">cart</div>
    <div class="">cart logo</div>
    <hr /
  </div>
  <ul>
    <li v-for="item in items" :key="item.id">
      {{ item.name }} - {{ item.price }}
      <button @click="removeItem(item)">Remove</button>
    </li>
  </ul>

  <div class="">
    <p>TOTAL:{{ total }}<br /></p>
    TOTAL VAT:{{ total - vat }}<br />
    TOTAL DEDUCTION:<br />
    <button @click="checkout">Checkout</button>
  </div>

  <FooterCommponent />
</template>
