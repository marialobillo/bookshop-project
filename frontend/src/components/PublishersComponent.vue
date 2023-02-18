<!-- eslint-disable prettier/prettier -->

<template>
  <div class="publishers">
  <div class="">
    <section>
      <SearchbarComponent />
    </section>
  </div>
  <p>||best selling publishers||</p>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="">
      <button @click="Publisherstore.addForm">Prev</button>&nbsp;
      <button @click="Publisherstore.someFunction">Next</button>
    </div>
  </div>
  <P>most popular publishers</P>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="">
      <button @click="Publisherstore.addForm">Prev</button>&nbsp;
      <button @click="Publisherstore.someFunction">Next</button>
    </div>
   
     </div>
    </div>
  <FooterCommponent />
</template>
<script setup>
import FooterCommponent from "../components/FooterCommponent.vue";
import SearchbarComponent from "../components/SearchbarComponent.vue";
import { usePublisherStore } from "../../store/publishers";
const Publisherstore = usePublisherStore();
</script>
<style>
button {
  background-color: blueviolet;
  border-radius: 15%;
}
.publishers {
  margin-bottom: 5%;
}
</style>
