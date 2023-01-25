<!-- eslint-disable prettier/prettier -->

<script>
import FooterCommponent from "../components/FooterCommponent.vue";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    purchaseForm() {
      // Send the form data to the server or display a thank you message
      alert(`Thank you ${this.email} purchase message`);
    },
   
  },
};
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
    <p>TOTAL:{{ total }}<br /></p>
    TOTAL VAT:{{ total - vat }}<br />
    TOTAL DEDUCTION:<br />
    <button @click.prevent="purchaseForm">Checkout</button>
  </div>

  <FooterCommponent />
</template>
<style>
button{
  color: rgb(26, 24, 27);
  background-color: blue;
}
</style>