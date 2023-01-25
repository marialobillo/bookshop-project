<template>
  ||best selling books||
  <div>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.name }}</li>
    </ul>
    <div class="">
      <button @click="toggleSlideshow">Prev</button>&nbsp;
      <button @click="toggleSlideshow">Next</button>
    </div>
  </div>
</template>
