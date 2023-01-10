<script setup>
import WelcomeItem from "../components/WelcomeItem.vue";
import EcosystemIcon from "../components/icons/IconEcosystem.vue";
import FooterCommponent from "../components/FooterCommponent.vue";
</script>

<template>
  <WelcomeItem>
    <template #heading>||best selling Publishers||</template>
    ||best selling authors||
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <button @click="toggleSlideshow">Toggle Slideshow</button>
    </div>
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <EcosystemIcon />
    </template>
    <template #heading>||best selling books||</template>
    <div>
      <ul>
        <li v-for="item in items" :key="item.id">{{ item.name }}</li>
      </ul>
      <button @click="toggleSlideshow">Toggle Slideshow</button>
    </div>
  </WelcomeItem>
  <FooterCommponent />
</template>
