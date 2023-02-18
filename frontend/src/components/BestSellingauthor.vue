<script setup>
import { useBestsellerpublishersStore } from "../../store/bestsellingpublishers.js";
const publisherstored = useBestsellerpublishersStore();
</script>
<template>
  ||best selling Publishers| ||best selling authors||
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ items.books }}</li>
    </ul>
    <div class="">
      <button @click="publisherstored.addForm">Prev</button>&nbsp;
      <button @click="publisherstored.someFunction">Next</button>
    </div>
  </div>
</template>
