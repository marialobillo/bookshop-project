<script setup>
import { useBestsellerpublishersStore } from "../../store/bestsellingpublishers.js";
import { useBooksStore } from "../../store/post";
const publisherstored = useBestsellerpublishersStore();
const barcelona = useBooksStore();
</script>
<template>
  ||best selling Publishers| ||best selling authors||
  <div>
    <ul>
      <li v-for="item in barcelona.books" :key="item.id">{{ barcelona.books }} <button>BUY</button></li>
    </ul>
    <div class="">
      <button @click="publisherstored.addForm">Prev</button>&nbsp;
      <button @click="publisherstored.someFunction">Next</button>
    </div>
  </div>
</template>
