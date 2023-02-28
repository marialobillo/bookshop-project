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
      <li v-for="item in Books.books" :key="item.id">{{ Books.books }}<button>BUY</button></li>
    </ul>
    <div class="">
      <button @click="Publisherstore.addForm">Prev</button>&nbsp;
      <button @click="Publisherstore.someFunction">Next</button>
    </div>
  </div>
  <div>
    <h1>Users</h1>
    <ul>
      <li v-for="user in Vata.Vata" :key="Vata">{{ Vata.users}}</li>
    </ul>
  </div>
  <P>most popular publishers</P>
  
<PostExample/>
  <div>
    <ul>
      <li v-for="user in Vata" :key="user ">{{ user}}<button>BUY</button></li>
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
import PostExample from "./PostExample.vue";
import { usePublisherStore } from "../../store/publishers";
import { useBooksStore } from "../../store/post";
import { useTestStore } from "../../store/test";
const Books = useBooksStore();
const Vata = useTestStore();
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
