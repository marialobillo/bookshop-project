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
        <li v-for="book in Books.products" :key="book.id">
          {{ book.name
          }}<button @click="Publisherstore.sumeFunction(book.name)" ref="items">
            BUY
          </button>
        </li>
      </ul>
      <div class="">
        <button @click="Publisherstore.addToCart(product)">Prev</button>&nbsp;
        <button @click="Publisherstore.someFunction">Next</button>
      </div>
    </div>
    <div>
      <h1>Users</h1>
      <ul>
        <li v-for="user in Vata.users" :key="user.id">{{ user.name }}</li>
      </ul>
    </div>
    <P>most popular publishers</P>

    <PostExample />
    <div>
      <ul>
        <li v-for="user in Vata.users" :key="user.id">
          {{ user.name
          }}<button @click="Publisherstore.sumeFunction(user.name)" ref="items">
            BUY
          </button>
        </li>
      </ul>
      <div class="">
        <button @click="Publisherstore.addForm">Prev</button> &nbsp;
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
console.log(Publisherstore.product);
</script>
<style>
button {
  background-color: blueviolet;
  border-radius: 15%;
}
.publishers {
  margin-bottom: 5%;
}
ul {
  text-decoration: none;
}
</style>
