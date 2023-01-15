<!-- eslint-disable prettier/prettier -->

<template>

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
    <button @click="toggleSlideshow">Toggle Slideshow</button>
  </div>
  <P>||most popular publishers|||</P>
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="toggleSlideshow">Toggle Slideshow</button>
  </div>
  <FooterCommponent />
</template>
<script setup>
import FooterCommponent from "../components/FooterCommponent.vue";
import SearchbarComponent from "../components/SearchbarComponent.vue";
</script>
