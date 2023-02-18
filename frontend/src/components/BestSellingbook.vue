<script setup>
import { useBestsellerBooksStore } from "../../store/bestsellingbooks.js";
import { useBooksStore } from "../../store/post";
const polo = useBestsellerBooksStore();
const bestseller = useBooksStore();
console.log(bestseller.books)
</script>
<template>
  ||best selling books||
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ bestseller.books }}</li>
    </ul>
    <div class="">
      <P>{{ bestseller.books }}</P>
      <button @click="bestseller.addForm">Prev</button>&nbsp;
      <button @click="bestseller.someFunction">Next</button>
    </div>
  </div>
</template>
