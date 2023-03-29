<script setup>
import { useBooksStore } from "../../store/post";
import { usePublisherStore } from "../../store/publishers";
const bestseller = useBooksStore();
const pub = usePublisherStore();
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
      <button @click="bestseller.addForm">Prev</button>&nbsp;
      <button @click="bestseller.someFunction">Next</button>
    </div>
  </div>
</template>
