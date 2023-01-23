<!-- eslint-disable prettier/prettier -->
<script setup>
import FooterCommponent from "../components/FooterCommponent.vue";
import SearchbarComponent from "../components/SearchbarComponent.vue";

</script>
<template>
  <div class="">
    <section>
      <SearchbarComponent />
    </section>
  </div>
  <p>||best selling authors||</p>
  <div class="">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="toggleSlideshow">Toggle Slideshow</button>
  </div>
  <P>||most popular authors|||</P>
  <div class="author">
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <button @click="toggleSlideshow">Toggle Slideshow</button>
  </div>
  <FooterCommponent />
</template>
<style scoped>
#author{
  margin-top: 20%;
  margin-bottom: 20%;
}</style>