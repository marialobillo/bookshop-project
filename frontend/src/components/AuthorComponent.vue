<!-- eslint-disable prettier/prettier -->
<script setup>
import FooterCommponent from "../components/FooterCommponent.vue";
import SearchbarComponent from "../components/SearchbarComponent.vue";
import { useAuthorStore } from "../../store/authors"; 
import { useBooksStore } from "../../store/post";
import { usePublisherStore } from "../../store/publishers"; 
//import{usePurchasedItem} from "../../store/purchaseditem"
const AuthorStore = useAuthorStore();
const Books = useBooksStore();
const Publisherstore = usePublisherStore();
</script>
<template>
  <div class="author">
    <div class="">
      <section>
        <SearchbarComponent />
      </section>
    </div>
    <p>||best selling authors||</p>
    <div class="">
      <ul>
        <li v-for="item in Books.books" :key="item.id">
          {{ item.name }}
          <button @click="Publisherstore.sumeFunction(item.name)">BUY</button>
        </li>
      </ul>
      <div class="">
        <button @click="AuthorStore.addForm">Prev</button>&nbsp;
        <button @click="AuthorStore.someFunction">Next</button>
      </div>
    </div>
    <P>||most popular authors|||</P>
    <div class="author">
      <ul>
        <li v-for="item in Books.books" :key="item.id">
          {{ item.name
          }}<button @click="Publisherstore.sumeFunction(item.name)">BUY</button>
        </li>
      </ul>
      <div class="">
        <button @click="AuthorStore.addForm">Prev</button>&nbsp;
        <button @click="AuthorStore.someFunction">Next</button>
      </div>
    </div>
  </div>
  <FooterCommponent />
</template>
<style>
#author {
  margin-top: 20%;
  margin-bottom: 20%;
}
button {
  background-color: blueviolet;
  border-radius: 15%;
}
.author {
  margin-bottom: 5%;
}
</style>
