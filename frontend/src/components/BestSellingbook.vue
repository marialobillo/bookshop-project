<script setup>
import { useBestsellerBooksStore } from "../../store/bestsellingbooks.js";
import { useBooksStore } from "../../store/post";
import { usePublisherStore } from "../../store/publishers";
const polo = useBestsellerBooksStore();
const bestseller = useBooksStore();

const pub = usePublisherStore();
console.log(bestseller.books);
</script>
<template>
  ||best selling books||
  <div>
    <ul>
      <li v-for="item in bestseller.books" :key="item.id">
        {{ item.name }}
        <button @click="pub.sumeFunction(item.name)">BUY</button>
      </li>
    </ul>
    <div class="">
      <P>{{ bestseller.books }}</P>
      <button @click="bestseller.addForm">Prev</button>&nbsp;
      <button @click="bestseller.someFunction">Next</button>
    </div>
  </div>
</template>
