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
  <div class="cart-container">
    <h3>Cart</h3>

    <div class="cart-header">
      <div class="cart-logo"></div>
      <h4>Cart</h4>
    </div>
    <hr />

    <div class="cart-items">
      <div v-for="item in publishers.product" :key="item.id" class="cart-item">
        <div>
          <h4>{{ item }}</h4>
          <p>ID: {{ item.id }}</p>
        </div>
        <button @click="publishers.removeItem(item)">Remove</button>
        <CounterComponent class="counter" />
      </div>
    </div>

    <div class="purchased-items">
      <div
        v-for="item in purchaseditem.Purchase"
        :key="item.id"
        class="cart-item"
      >
        <div>
          <p>ID: {{ item }}</p>
        </div>
        <button @click="publishers.removeItem(item.id)">Remove</button>
        <CounterComponent class="counter" />
      </div>
    </div>

    <div class="other-items">
      <div v-for="item in items" :key="item.id" class="cart-item">
        <div>
          <h4>{{ item.name }}</h4>
          <p>Price: {{ item.price }}</p>
        </div>
        <button @click="removeItem(item)">Remove</button>
      </div>
    </div>

    <div class="cart-summary">
      <div class="total">
        <p>TOTAL: {{ Cartstore.Total }}</p>
        <p>TOTAL VAT: {{ Cartstore.VAT }}</p>
        <p>TOTAL DEDUCTION: {{ Cartstore.Deduction }}</p>
      </div>
      <button class="checkout-btn" @click.prevent="Cartstore.purchaseForm">
        Checkout
      </button>
    </div>
  </div>
</template>
<style>
/* CSS styles for the cart component */
h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 16px;
}

.cart-container {
  border: 1px solid #ccc;
  padding: 16px;
}

.cart-logo {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ccc;
  display: inline-block;
  margin-right: 16px;
}

hr {
  border: none;
  border-top: 1px solid #ccc;
  margin: 16px 0;
}

.cart-item {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
}

.cart-item button {
  margin-left: 16px;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.cart-item button:hover {
  background-color: #007bff;
}

.cart-item h4 {
  font-size: 18px;
  margin: 0;
}

.cart-item p {
  margin: 0;
  font-size: 14px;
  color: #777;
}

.cart-item .counter {
  margin-left: auto;
}

.total {
  font-size: 18px;
  font-weight: bold;
  margin-top: 32px;
}

.checkout-btn {
  display: block;
  margin-top: 16px;
  color: #fff;
  background-color: blue;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
}

.checkout-btn:hover {
  background-color: #007bff;
}
</style>
